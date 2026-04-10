'use client';

import { useEffect, useRef } from 'react';

/* ── Vertex shader ─────────────────────────────────────────────────────── */
const VERT = `
  attribute vec2 a_pos;
  varying vec2 v_uv;
  void main() {
    v_uv = (a_pos + 1.0) * 0.5;
    gl_Position = vec4(a_pos, 0.0, 1.0);
  }
`;

/* ── Fragment shader ───────────────────────────────────────────────────── */
const FRAG = `
  precision highp float;
  uniform sampler2D u_photo;
  uniform sampler2D u_depth;
  uniform vec2  u_mouse;      /* smoothed, -0.5..0.5 */
  uniform float u_scroll;     /* 0 = top of hero, 1 = bottom */
  uniform vec2  u_imgSize;    /* photo natural dimensions */
  uniform vec2  u_cvSize;     /* canvas pixel dimensions  */
  varying vec2 v_uv;

  /* Replicate object-fit:cover so UV fills the canvas */
  vec2 coverUV(vec2 uv) {
    float imgAR = u_imgSize.x / u_imgSize.y;
    float cvAR  = u_cvSize.x  / u_cvSize.y;
    if (cvAR > imgAR) {
      float s = imgAR / cvAR;
      uv.y = uv.y * s + (1.0 - s) * 0.5;
    } else {
      float s = cvAR / imgAR;
      uv.x = uv.x * s + (1.0 - s) * 0.5;
    }
    return uv;
  }

  void main() {
    vec2 base = coverUV(v_uv);

    /* Depth from jet colormap: red=close(1.0) → blue=far(0.0) */
    vec4 d     = texture2D(u_depth, base);
    float depth = clamp((d.r - d.b + 1.0) * 0.5, 0.0, 1.0);

    /* Mouse parallax: close objects resist the mouse more */
    vec2 off = -u_mouse * depth * 0.045;
    /* Scroll parallax: close objects rise faster than background */
    off.y   -= u_scroll * depth * 0.07;

    gl_FragColor = texture2D(u_photo, base - off);
  }
`;

/* ── Helpers ───────────────────────────────────────────────────────────── */
function compileShader(gl: WebGLRenderingContext, type: number, src: string): WebGLShader {
  const s = gl.createShader(type)!;
  gl.shaderSource(s, src);
  gl.compileShader(s);
  if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
    throw new Error(gl.getShaderInfoLog(s) ?? 'shader compile error');
  }
  return s;
}

function loadTexture(
  gl: WebGLRenderingContext,
  src: string,
): Promise<{ tex: WebGLTexture; w: number; h: number }> {
  return new Promise((resolve, reject) => {
    const tex = gl.createTexture()!;
    const img = new Image();
    img.onload = () => {
      gl.bindTexture(gl.TEXTURE_2D, tex);
      gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, img);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      resolve({ tex, w: img.naturalWidth, h: img.naturalHeight });
    };
    img.onerror = reject;
    img.src = src;
  });
}

/* ── Component ─────────────────────────────────────────────────────────── */
interface Props {
  photo: string;
  depth: string;
  fallbackColor?: string;
}

export default function HeroParallaxCanvas({ photo, depth, fallbackColor = '#1A1209' }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const cv = canvas; // non-null alias for use in nested functions
    const glMaybe = cv.getContext('webgl', { alpha: false, antialias: false });
    if (!glMaybe) return; // fallback background-color shows
    const gl = glMaybe; // non-null alias

    /* Build shader program */
    let prog: WebGLProgram;
    try {
      prog = gl.createProgram()!;
      gl.attachShader(prog, compileShader(gl, gl.VERTEX_SHADER, VERT));
      gl.attachShader(prog, compileShader(gl, gl.FRAGMENT_SHADER, FRAG));
      gl.linkProgram(prog);
      if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
        throw new Error(gl.getProgramInfoLog(prog) ?? 'link error');
      }
    } catch (e) {
      console.error('[HeroParallax] shader error', e);
      return;
    }
    gl.useProgram(prog);

    /* Fullscreen quad */
    const buf = gl.createBuffer()!;
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
      gl.STATIC_DRAW,
    );
    const posLoc = gl.getAttribLocation(prog, 'a_pos');
    gl.enableVertexAttribArray(posLoc);
    gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);

    /* Uniform locations */
    const uPhoto  = gl.getUniformLocation(prog, 'u_photo');
    const uDepth  = gl.getUniformLocation(prog, 'u_depth');
    const uMouse  = gl.getUniformLocation(prog, 'u_mouse');
    const uScroll = gl.getUniformLocation(prog, 'u_scroll');
    const uImgSz  = gl.getUniformLocation(prog, 'u_imgSize');
    const uCvSz   = gl.getUniformLocation(prog, 'u_cvSize');

    /* State */
    let photoTex: WebGLTexture | null = null;
    let depthTex: WebGLTexture | null = null;
    let imgW = 1920, imgH = 1080;
    let rafId: number;
    let alive = true;
    let tMouseX = 0, tMouseY = 0; // target
    let cMouseX = 0, cMouseY = 0; // current (lerped)

    /* Load textures */
    Promise.all([
      loadTexture(gl, photo).then(({ tex, w, h }) => {
        photoTex = tex;
        imgW = w;
        imgH = h;
      }),
      loadTexture(gl, depth).then(({ tex }) => {
        depthTex = tex;
      }),
    ]).catch((e) => console.warn('[HeroParallax] texture load failed', e));

    /* Resize canvas to match display size */
    function resize() {
      const dpr = window.devicePixelRatio || 1;
      const w = cv.offsetWidth  * dpr;
      const h = cv.offsetHeight * dpr;
      if (cv.width !== w || cv.height !== h) {
        cv.width  = w;
        cv.height = h;
        gl.viewport(0, 0, w, h);
      }
    }
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    /* Mouse tracking (relative to canvas, normalized to -0.5..0.5) */
    function onMouseMove(e: MouseEvent) {
      const r = cv.getBoundingClientRect();
      tMouseX = (e.clientX - r.left) / r.width  - 0.5;
      tMouseY = (e.clientY - r.top)  / r.height - 0.5;
    }
    window.addEventListener('mousemove', onMouseMove);

    /* RAF render loop */
    function frame() {
      if (!alive) return;
      rafId = requestAnimationFrame(frame);
      if (!photoTex || !depthTex) return;

      /* Smooth mouse with lerp */
      const ease = 0.06;
      cMouseX += (tMouseX - cMouseX) * ease;
      cMouseY += (tMouseY - cMouseY) * ease;

      /* Scroll progress (0 at top of hero, 1 at bottom) */
      const heroH   = cv.offsetHeight || 800;
      const scrollT = Math.min(Math.max(window.scrollY / heroH, 0), 1);

      /* Draw */
      gl.activeTexture(gl.TEXTURE0);
      gl.bindTexture(gl.TEXTURE_2D, photoTex);
      gl.uniform1i(uPhoto, 0);

      gl.activeTexture(gl.TEXTURE1);
      gl.bindTexture(gl.TEXTURE_2D, depthTex);
      gl.uniform1i(uDepth, 1);

      gl.uniform2f(uMouse,  cMouseX, cMouseY);
      gl.uniform1f(uScroll, scrollT);
      gl.uniform2f(uImgSz,  imgW, imgH);
      gl.uniform2f(uCvSz,   cv.width, cv.height);

      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    }
    rafId = requestAnimationFrame(frame);

    return () => {
      alive = false;
      cancelAnimationFrame(rafId);
      ro.disconnect();
      window.removeEventListener('mousemove', onMouseMove);
      gl.deleteProgram(prog);
      gl.deleteBuffer(buf);
      if (photoTex) gl.deleteTexture(photoTex);
      if (depthTex) gl.deleteTexture(depthTex);
    };
  }, [photo, depth]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        display: 'block',
        backgroundColor: fallbackColor,
      }}
    />
  );
}
