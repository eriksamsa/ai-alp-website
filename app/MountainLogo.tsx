interface Props {
  size?: number;
  color?: string;
}

export default function MountainLogo({ size = 40, color = '#50D957' }: Props) {
  const w = size;
  const h = size * (48 / 58); // original ratio from Flutter painter

  // Points scaled from Flutter _AlpAiLogoPainter (canvas size 58×48)
  const lx1 = w * 0.06, ly1 = h * 0.86;
  const lx2 = w * 0.32, ly2 = h * 0.18;
  const lx3 = w * 0.55, ly3 = h * 0.86;

  const rx1 = w * 0.44, ry1 = h * 0.86;
  const rx2 = w * 0.70, ry2 = h * 0.34;
  const rx3 = w * 0.95, ry3 = h * 0.86;

  const dotX = w * 0.48, dotY = h * 0.67;

  return (
    <svg
      width={w}
      height={h}
      viewBox={`0 0 ${w} ${h}`}
      fill="none"
      aria-hidden="true"
    >
      <polyline
        points={`${lx1},${ly1} ${lx2},${ly2} ${lx3},${ly3}`}
        stroke={color}
        strokeWidth={w * 0.085}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <polyline
        points={`${rx1},${ry1} ${rx2},${ry2} ${rx3},${ry3}`}
        stroke={color}
        strokeWidth={w * 0.085}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx={dotX} cy={dotY} r={w * 0.065} fill={color} />
    </svg>
  );
}
