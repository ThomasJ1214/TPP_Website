export default function Loading() {
  return (
    <div
      style={{
        minHeight: '60vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          width: '48px',
          height: '3px',
          borderRadius: '2px',
          backgroundColor: 'var(--color-brand-blue)',
          animation: 'loader-grow 1s ease-in-out infinite',
        }}
      />
    </div>
  );
}
