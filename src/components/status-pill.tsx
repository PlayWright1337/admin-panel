type StatusPillProps = {
  children: React.ReactNode;
  tone?: "neutral" | "success" | "warning" | "danger";
};

const toneClasses = {
  neutral: "bg-neutral-950/[0.04] text-neutral-700 ring-neutral-950/10",
  success: "bg-emerald-500/10 text-emerald-700 ring-emerald-500/15",
  warning: "bg-amber-500/12 text-amber-700 ring-amber-500/15",
  danger: "bg-rose-500/10 text-rose-700 ring-rose-500/15",
};

export const StatusPill = ({
  children,
  tone = "neutral",
}: StatusPillProps) => {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] ring-1 ${toneClasses[tone]}`}
    >
      {children}
    </span>
  );
};
