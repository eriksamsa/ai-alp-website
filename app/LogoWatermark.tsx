interface Props {
  className?: string;
}

export default function LogoWatermark({ className }: Props) {
  return (
    <svg
      className={className}
      viewBox="0 0 400 270"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="mountainGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#6ec6f0" />
          <stop offset="100%" stopColor="#2168b0" />
        </linearGradient>
        <linearGradient id="mountainGrad2" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#5ab8e8" />
          <stop offset="100%" stopColor="#1a5a9a" />
        </linearGradient>
        <linearGradient id="alpGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#d0eeff" />
          <stop offset="100%" stopColor="#7ab8e8" />
        </linearGradient>
      </defs>

      {/* Back left peak */}
      <polygon points="55,205 128,82 200,205" fill="url(#mountainGrad2)" />
      {/* Back right peak */}
      <polygon points="200,205 272,97 345,205" fill="url(#mountainGrad2)" />
      {/* Main center peak */}
      <polygon points="115,205 200,38 285,205" fill="url(#mountainGrad)" />

      {/* Snow highlights */}
      <polygon points="200,38 228,95 172,95" fill="#e8f6ff" />
      <polygon points="128,82 143,112 113,112" fill="#d0eeff" />
      <polygon points="272,97 284,122 260,122" fill="#d0eeff" />

      {/* Ridge details on main peak */}
      <polygon points="200,38 215,72 200,68" fill="#bde0f8" />
      <polygon points="200,38 185,72 200,68" fill="#a8d4f5" />

      {/* Blue swoosh arc */}
      <path
        d="M 55 205 Q 200 178 345 205"
        stroke="#2a7dd4"
        strokeWidth="5"
        fill="none"
        strokeLinecap="round"
      />
      {/* Green swoosh arc */}
      <path
        d="M 185 210 Q 272 194 345 205"
        stroke="#3dc942"
        strokeWidth="5"
        fill="none"
        strokeLinecap="round"
      />

      {/* Text: alp */}
      <text
        x="52"
        y="256"
        fontFamily="Inter, Arial Black, sans-serif"
        fontSize="70"
        fontWeight="900"
        fill="url(#alpGrad)"
      >
        alp
      </text>
      {/* Text: AI */}
      <text
        x="214"
        y="256"
        fontFamily="Inter, Arial Black, sans-serif"
        fontSize="70"
        fontWeight="900"
        fill="#3dc942"
      >
        AI
      </text>
    </svg>
  );
}
