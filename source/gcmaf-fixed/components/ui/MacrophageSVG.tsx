export function MacrophageSVG({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Outer membrane - irregular blob shape */}
      <path
        d="M200 40 C240 35 285 55 310 90 C340 130 355 175 345 215 C335 258 305 295 270 315 C235 338 190 345 155 335 C118 325 85 300 65 268 C42 233 38 190 48 155 C60 115 88 80 125 60 C152 45 175 43 200 40Z"
        fill="currentColor"
        opacity="0.08"
      />
      {/* Pseudopods */}
      <path d="M310 90 C330 60 360 55 370 70 C380 85 365 110 345 115 C335 118 315 108 310 90Z" fill="currentColor" opacity="0.06" />
      <path d="M270 315 C285 345 270 375 250 378 C230 381 215 360 220 340 C223 328 245 320 270 315Z" fill="currentColor" opacity="0.06" />
      <path d="M65 268 C38 280 18 268 15 248 C12 228 30 210 50 215 C60 218 68 240 65 268Z" fill="currentColor" opacity="0.06" />
      <path d="M48 155 C20 148 5 128 12 108 C19 88 42 82 58 95 C66 102 62 132 48 155Z" fill="currentColor" opacity="0.06" />
      {/* Nucleus */}
      <ellipse cx="195" cy="195" rx="55" ry="45" fill="currentColor" opacity="0.12" />
      <ellipse cx="195" cy="195" rx="40" ry="32" fill="currentColor" opacity="0.08" />
      {/* Organelles/vesicles */}
      <circle cx="140" cy="155" r="12" fill="currentColor" opacity="0.07" />
      <circle cx="260" cy="175" r="9" fill="currentColor" opacity="0.07" />
      <circle cx="155" cy="250" r="14" fill="currentColor" opacity="0.07" />
      <circle cx="250" cy="255" r="10" fill="currentColor" opacity="0.07" />
      <circle cx="120" cy="220" r="8" fill="currentColor" opacity="0.06" />
      <circle cx="280" cy="230" r="11" fill="currentColor" opacity="0.06" />
      {/* Receptor dots on membrane */}
      <circle cx="200" cy="42" r="3" fill="currentColor" opacity="0.3" />
      <circle cx="318" cy="95" r="3" fill="currentColor" opacity="0.3" />
      <circle cx="340" cy="210" r="3" fill="currentColor" opacity="0.3" />
      <circle cx="268" cy="318" r="3" fill="currentColor" opacity="0.3" />
      <circle cx="155" cy="337" r="3" fill="currentColor" opacity="0.3" />
      <circle cx="62" cy="265" r="3" fill="currentColor" opacity="0.3" />
      <circle cx="45" cy="152" r="3" fill="currentColor" opacity="0.3" />
      <circle cx="123" cy="58" r="3" fill="currentColor" opacity="0.3" />
    </svg>
  )
}
