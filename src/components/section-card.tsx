type SectionCardProps = {
  title: string;
  eyebrow?: string;
  children: React.ReactNode;
  className?: string;
};

export const SectionCard = ({
  title,
  eyebrow,
  children,
  className = "",
}: SectionCardProps) => {
  return (
    <section
      className={`rounded-[2rem] border border-neutral-950/8 bg-white p-6 shadow-[0_14px_40px_rgba(15,23,42,0.06)] ${className}`}
    >
      <div className="mb-5 flex items-start justify-between gap-4">
        <div>
          {eyebrow ? (
            <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-neutral-500">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="text-xl font-semibold tracking-[-0.04em] text-neutral-950">
            {title}
          </h2>
        </div>
      </div>
      {children}
    </section>
  );
};
