export function MolecularIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Central node */}
      <circle cx="20" cy="20" r="4" fill="currentColor" opacity="0.9" />
      {/* Bonds */}
      <line x1="20" y1="16" x2="20" y2="8" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
      <line x1="20" y1="24" x2="20" y2="32" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
      <line x1="16" y1="20" x2="8" y2="20" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
      <line x1="24" y1="20" x2="32" y2="20" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
      <line x1="17" y1="17" x2="10" y2="10" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
      <line x1="23" y1="23" x2="30" y2="30" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
      {/* Outer nodes */}
      <circle cx="20" cy="6" r="3" fill="currentColor" opacity="0.7" />
      <circle cx="20" cy="34" r="3" fill="currentColor" opacity="0.7" />
      <circle cx="6" cy="20" r="3" fill="currentColor" opacity="0.7" />
      <circle cx="34" cy="20" r="3" fill="currentColor" opacity="0.7" />
      <circle cx="8" cy="8" r="2.5" fill="currentColor" opacity="0.5" />
      <circle cx="32" cy="32" r="2.5" fill="currentColor" opacity="0.5" />
    </svg>
  )
}
