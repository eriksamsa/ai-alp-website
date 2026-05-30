interface Props {
  className?: string;
}

export default function LogoWatermark({ className }: Props) {
  return (
    <svg
      className={className}
      viewBox="0 0 400 260"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* ── Mountains ── */}
      {/* Back left peak */}
      <polygon
        points="60,200 130,80 200,200"
        fill="#3a7fc1"
        opacity="0.7"
      />
      {/* Back right peak */}
      <polygon
        points="200,200 270,95 340,200"
        fill="#3a7fc1"
        opacity="0.6"
      />
      {/* Main center peak */}
      <polygon
        points="120,200 200,40 280,200"
        fill="#5ab0e8"
        opacity="0.85"
      />
      {/* Snow on main peak */}
      <polygon
        points="200,40 222,90 178,90"
        fill="#cde8f8"
        opacity="0.9"
      />
      {/* Snow on left peak */}
      <polygon
        points="130,80 144,108 116,108"
        fill="#cde8f8"
        opacity="0.75"
      />
      {/* Snow on right peak */}
      <polygon
        points="270,95 282,120 258,120"
        fill="#cde8f8"
        opacity="0.75"
      />
      {/* Blue arc swoosh */}
      <path
        d="M 60 200 Q 200 175 340 200"
        stroke="#4a90d9"
        strokeWidth="4"
        fill="none"
        opacity="0.7"
      />
      {/* Green arc swoosh */}
      <path
        d="M 175 205 Q 260 188 340 200"
        stroke="#50D957"
        strokeWidth="4"
        fill="none"
        opacity="0.85"
      />

      {/* ── Text: alp (white/light blue) ── */}
      <text
        x="60"
        y="248"
        fontFamily="Inter, Arial, sans-serif"
        fontSize="72"
        fontWeight="900"
        fill="#4a90d9"
        opacity="0.9"
      >
        alp
      </text>
      {/* ── Text: AI (green) ── */}
      <text
        x="218"
        y="248"
        fontFamily="Inter, Arial, sans-serif"
        fontSize="72"
        fontWeight="900"
        fill="#50D957"
        opacity="0.95"
      >
        AI
      </text>
    </svg>
  );
}
