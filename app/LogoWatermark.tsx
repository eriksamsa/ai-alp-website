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
        {/* Main center peak gradient */}
        <linearGradient id="peakMain" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#b8d8f8" />
          <stop offset="35%" stopColor="#6aaee8" />
          <stop offset="100%" stopColor="#1a5aaa" />
        </linearGradient>
        {/* Side peaks gradient */}
        <linearGradient id="peakSide" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#7abae8" />
          <stop offset="100%" stopColor="#1a4a8a" />
        </linearGradient>
        {/* Shadow/depth faces */}
        <linearGradient id="peakShadow" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#1a3a78" />
          <stop offset="100%" stopColor="#2a5aaa" />
        </linearGradient>
        {/* "alp" text gradient: white top → steel blue bottom */}
        <linearGradient id="alpText" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="55%" stopColor="#c8e0f8" />
          <stop offset="100%" stopColor="#7ab0e0" />
        </linearGradient>
        {/* "AI" text gradient: bright green */}
        <linearGradient id="aiText" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#7ee86a" />
          <stop offset="100%" stopColor="#28a832" />
        </linearGradient>
        {/* Blue swoosh */}
        <linearGradient id="swooshBlue" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#2878d0" />
          <stop offset="100%" stopColor="#1a5aaa" />
        </linearGradient>
        {/* Green swoosh */}
        <linearGradient id="swooshGreen" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#48cc48" />
          <stop offset="100%" stopColor="#28a832" />
        </linearGradient>
      </defs>

      {/* ── LEFT PEAK ── */}
      {/* Base shape */}
      <polygon points="70,215 148,96 220,215" fill="url(#peakSide)" />
      {/* Shadow left face */}
      <polygon points="70,215 148,96 148,215" fill="#163870" opacity="0.4" />
      {/* Snow cap */}
      <polygon points="148,96 163,128 133,128" fill="#d8eeff" />
      <polygon points="148,96 157,118 148,115" fill="#eef6ff" />

      {/* ── RIGHT PEAK ── */}
      {/* Base shape */}
      <polygon points="280,215 352,100 430,215" fill="url(#peakSide)" />
      {/* Shadow right face */}
      <polygon points="352,100 430,215 352,215" fill="#163870" opacity="0.35" />
      {/* Snow cap */}
      <polygon points="352,100 367,132 337,132" fill="#d8eeff" />
      <polygon points="352,100 361,122 352,118" fill="#eef6ff" />

      {/* ── CENTER PEAK (tallest) ── */}
      {/* Base shape */}
      <polygon points="155,215 250,30 345,215" fill="url(#peakMain)" />
      {/* Left shadow face */}
      <polygon points="155,215 250,30 250,215" fill="#163870" opacity="0.32" />
      {/* Right highlight face */}
      <polygon points="250,30 345,215 300,215 260,80" fill="#2a70c8" opacity="0.3" />
      {/* Snow cap */}
      <polygon points="250,30 278,95 222,95" fill="#e8f4ff" />
      <polygon points="250,30 264,72 250,68" fill="#ffffff" opacity="0.9" />
      <polygon points="250,30 236,72 250,68" fill="#d0e8f8" opacity="0.8" />
      {/* Ice facets on left side */}
      <polygon points="200,140 215,120 195,155" fill="#1a4a9a" opacity="0.5" />
      <polygon points="175,175 192,155 172,188" fill="#1a4a9a" opacity="0.45" />
      {/* Ice facets on right side */}
      <polygon points="300,140 285,120 305,155" fill="#4a88d0" opacity="0.35" />

      {/* ── SWOOSHES ── */}
      {/* Blue arc under mountains */}
      <path
        d="M 65 215 Q 250 192 435 215"
        stroke="url(#swooshBlue)"
        strokeWidth="4.5"
        fill="none"
        strokeLinecap="round"
      />
      {/* Green arc (right side) */}
      <path
        d="M 235 220 Q 335 205 435 215"
        stroke="url(#swooshGreen)"
        strokeWidth="4.5"
        fill="none"
        strokeLinecap="round"
      />

      {/* ── TEXT ── */}
      {/* "alp" — white to blue gradient */}
      <text
        x="62"
        y="295"
        fontFamily="'Arial Black', 'Inter', sans-serif"
        fontSize="80"
        fontWeight="900"
        fill="url(#alpText)"
      >
        alp
      </text>
      {/* "AI" — green gradient */}
      <text
        x="268"
        y="295"
        fontFamily="'Arial Black', 'Inter', sans-serif"
        fontSize="80"
        fontWeight="900"
        fill="url(#aiText)"
      >
        AI
      </text>
    </svg>
  );
}
