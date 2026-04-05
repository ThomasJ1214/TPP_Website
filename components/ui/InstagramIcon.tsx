// lucide-react v1 removed brand icons — this is a minimal inline Instagram SVG
interface Props {
  size?: number;
  style?: React.CSSProperties;
  className?: string;
  'aria-hidden'?: boolean;
}

export default function InstagramIcon({ size = 24, style, className, 'aria-hidden': ariaHidden }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={style}
      className={className}
      aria-hidden={ariaHidden}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="3.5" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}
