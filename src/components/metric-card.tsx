import type { LucideIcon } from "lucide-react";

type MetricCardProps = {
  title: string;
  value: string;
  delta: string;
  detail: string;
  tone: "emerald" | "amber" | "sky" | "violet";
  icon: LucideIcon;
};

const toneClasses = {
  emerald: "from-emerald-500/16 to-emerald-500/4 text-emerald-700",
  amber: "from-amber-500/16 to-amber-500/4 text-amber-700",
  sky: "from-sky-500/16 to-sky-500/4 text-sky-700",
  violet: "from-violet-500/16 to-violet-500/4 text-violet-700",
};

export const MetricCard = ({
  title,
  value,
  delta,
  detail,
  tone,
  icon: Icon,
}: MetricCardProps) => {
  return (
    <article className="rounded-[1.75rem] border border-neutral-950/8 bg-white p-5 shadow-[0_10px_30px_rgba(15,23,42,0.05)]">
      <div className="mb-6 flex items-center justify-between gap-4">
        <div>
          <p className="text-sm text-neutral-500">{title}</p>
          <p className="mt-3 text-3xl font-semibold tracking-[-0.06em] text-neutral-950">
            {value}
          </p>
        </div>
        <div
          className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${toneClasses[tone]}`}
        >
          <Icon className="h-5 w-5" strokeWidth={1.8} />
        </div>
      </div>
      <div className="flex items-center justify-between gap-3 border-t border-neutral-950/8 pt-4">
        <span className="text-sm font-semibold text-neutral-950">{delta}</span>
        <span className="text-sm text-neutral-500">{detail}</span>
      </div>
    </article>
  );
};
