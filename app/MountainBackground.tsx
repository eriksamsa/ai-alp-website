export default function MountainBackground() {
  return (
    <svg
      className="mountain-bg-svg"
      viewBox="0 0 1440 320"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Back range — lighter, further away */}
      <polyline
        points="0,280 120,180 200,220 320,100 440,200 540,140 660,210 760,80 880,180 980,120 1100,200 1200,90 1320,170 1440,110 1440,320 0,320"
        fill="rgba(80,217,87,0.07)"
        stroke="rgba(80,217,87,0.18)"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      {/* Front range — stronger, closer */}
      <polyline
        points="0,320 80,260 180,290 280,200 360,240 460,150 560,230 640,170 740,250 820,130 920,220 1020,160 1120,240 1220,120 1340,200 1440,150 1440,320 0,320"
        fill="rgba(80,217,87,0.1)"
        stroke="rgba(80,217,87,0.32)"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      {/* Snow peaks — bright white tips on tallest peaks */}
      <polygon points="460,150 480,175 440,175" fill="rgba(255,255,255,0.18)" />
      <polygon points="820,130 845,162 795,162" fill="rgba(255,255,255,0.18)" />
      <polygon points="1220,120 1248,155 1192,155" fill="rgba(255,255,255,0.14)" />
      <polygon points="320,100 348,135 292,135" fill="rgba(255,255,255,0.14)" />
    </svg>
  );
}
