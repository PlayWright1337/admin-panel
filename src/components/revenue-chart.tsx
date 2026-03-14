type RevenuePoint = {
  name: string;
  revenue: number;
  target: number;
};

type RevenueChartProps = {
  data: RevenuePoint[];
};

const buildLinePath = (
  points: Array<{ x: number; y: number }>
) => {
  return points.map((point, index) => `${index === 0 ? "M" : "L"} ${point.x} ${point.y}`).join(" ");
};

const buildAreaPath = (
  points: Array<{ x: number; y: number }>,
  baseline: number
) => {
  const line = buildLinePath(points);
  const tail = `L ${points[points.length - 1]?.x ?? 0} ${baseline} L ${points[0]?.x ?? 0} ${baseline} Z`;

  return `${line} ${tail}`;
};

export const RevenueChart = ({ data }: RevenueChartProps) => {
  const width = 760;
  const height = 280;
  const padding = { top: 22, right: 20, bottom: 42, left: 16 };
  const chartHeight = height - padding.top - padding.bottom;
  const chartWidth = width - padding.left - padding.right;
  const maxValue = Math.max(...data.flatMap((point) => [point.revenue, point.target]), 1);
  const stepX = data.length > 1 ? chartWidth / (data.length - 1) : chartWidth;
  const baseline = height - padding.bottom;

  const project = (value: number, index: number) => ({
    x: padding.left + index * stepX,
    y: padding.top + chartHeight - (value / maxValue) * chartHeight,
  });

  const revenuePoints = data.map((point, index) => project(point.revenue, index));
  const targetPoints = data.map((point, index) => project(point.target, index));

  const revenuePath = buildLinePath(revenuePoints);
  const targetPath = buildLinePath(targetPoints);
  const areaPath = buildAreaPath(revenuePoints, baseline);
  const yTicks = [0, Math.round(maxValue / 2), maxValue];

  return (
    <div className="rounded-[1.5rem] border border-neutral-950/8 bg-neutral-50 p-4">
      <div className="mb-3 flex items-center gap-5 text-xs uppercase tracking-[0.22em] text-neutral-500">
        <span className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-signal)]" />
          Revenue
        </span>
        <span className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-cyan)]" />
          Target
        </span>
      </div>

      <svg
        aria-label="Revenue chart"
        className="h-auto w-full"
        viewBox={`0 0 ${width} ${height}`}
      >
        <defs>
          <linearGradient id="revenueFill" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#f97316" stopOpacity="0.30" />
            <stop offset="100%" stopColor="#f97316" stopOpacity="0.02" />
          </linearGradient>
        </defs>

        {yTicks.map((tick) => {
          const y = padding.top + chartHeight - (tick / maxValue) * chartHeight;

          return (
            <g key={tick}>
              <line x1={padding.left} x2={width - padding.right} y1={y} y2={y} stroke="rgba(17,17,17,0.08)" />
              <text x={width - padding.right + 6} y={y + 4} fill="rgba(17,17,17,0.36)" fontSize="11">
                {tick}
              </text>
            </g>
          );
        })}

        <path d={areaPath} fill="url(#revenueFill)" />
        <path d={targetPath} fill="none" stroke="#38bdf8" strokeDasharray="5 7" strokeLinecap="round" strokeWidth="2.25" />
        <path d={revenuePath} fill="none" stroke="#f97316" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />

        {revenuePoints.map((point, index) => (
          <g key={data[index]?.name}>
            <circle cx={point.x} cy={point.y} fill="#ffffff" r="6" stroke="#f97316" strokeWidth="2.5" />
            <text x={point.x} y={height - 14} fill="rgba(17,17,17,0.44)" fontSize="11" textAnchor="middle">
              {data[index]?.name}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
};
