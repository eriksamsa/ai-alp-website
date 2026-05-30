interface Props {
  className?: string;
}

export default function LogoWatermark({ className }: Props) {
  return (
    <svg
      className={className}
      viewBox="0 0 500 310"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="wm-peakMain" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#5aaae0" />
          <stop offset="50%" stopColor="#2a78c8" />
          <stop offset="100%" stopColor="#0a3a80" />
        </linearGradient>
        <linearGradient id="wm-peakSide" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#4a90d0" />
          <stop offset="100%" stopColor="#0a2a6a" />
        </linearGradient>
        <linearGradient id="wm-alpText" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#4a9ad8" />
          <stop offset="55%" stopColor="#2a70c0" />
          <stop offset="100%" stopColor="#1a4a9a" />
        </linearGradient>
        <linearGradient id="wm-aiText" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#4ad84a" />
          <stop offset="100%" stopColor="#1a8a1a" />
        </linearGradient>
        <linearGradient id="wm-swooshBlue" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#2878d0" />
          <stop offset="100%" stopColor="#0a3a8a" />
        </linearGradient>
        <linearGradient id="wm-swooshGreen" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#28c028" />
          <stop offset="100%" stopColor="#1a8a1a" />
        </linearGradient>
      </defs>

      {/* Left peak */}
      <polygon points="70,215 148,96 220,215" fill="url(#wm-peakSide)" />
      <polygon points="70,215 148,96 148,215" fill="#0a2a60" opacity="0.3" />
      <polygon points="148,96 163,128 133,128" fill="#7ab8e8" />
      <polygon points="148,96 157,118 148,115" fill="#9ed0f0" />

      {/* Right peak */}
      <polygon points="280,215 352,100 430,215" fill="url(#wm-peakSide)" />
      <polygon points="352,100 430,215 352,215" fill="#0a2a60" opacity="0.25" />
      <polygon points="352,100 367,132 337,132" fill="#7ab8e8" />
      <polygon points="352,100 361,122 352,118" fill="#9ed0f0" />

      {/* Center peak */}
      <polygon points="155,215 250,30 345,215" fill="url(#wm-peakMain)" />
      <polygon points="155,215 250,30 250,215" fill="#0a2a60" opacity="0.28" />
      <polygon points="250,30 345,215 300,215 260,80" fill="#1a58a8" opacity="0.25" />
      <polygon points="250,30 278,95 222,95" fill="#a8d8f8" />
      <polygon points="250,30 264,72 250,68" fill="#c8e8ff" opacity="0.9" />
      <polygon points="250,30 236,72 250,68" fill="#88c0e8" opacity="0.8" />

      {/* Swooshes */}
      <path d="M 65 215 Q 250 192 435 215" stroke="url(#wm-swooshBlue)" strokeWidth="5" fill="none" strokeLinecap="round" />
      <path d="M 235 220 Q 335 205 435 215" stroke="url(#wm-swooshGreen)" strokeWidth="5" fill="none" strokeLinecap="round" />

      {/* Text */}
      <text x="62" y="295" fontFamily="'Arial Black', 'Inter', sans-serif" fontSize="80" fontWeight="900" fill="url(#wm-alpText)">alp</text>
      <text x="268" y="295" fontFamily="'Arial Black', 'Inter', sans-serif" fontSize="80" fontWeight="900" fill="url(#wm-aiText)">AI</text>
    </svg>
  );
}
