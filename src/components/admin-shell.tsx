"use client";

import { useMemo, useState, type ReactElement } from "react";
import {
  ArrowUpRight,
  Dot,
  Search,
  Settings2,
  Sparkles,
} from "lucide-react";

import {
  accountTable,
  actionCards,
  campaignCards,
  customerMoments,
  customerSegments,
  dealPipeline,
  liveFeed,
  metrics,
  navigationGroups,
  operationsQueues,
  operationsSchedule,
  quickActions,
  revenueHighlights,
  revenueSeries,
  riskRegister,
  sectionIntro,
  type SectionId,
  utilityStats,
  flowSteps,
} from "@/data/dashboard";

import { MetricCard } from "./metric-card";
import { RevenueChart } from "./revenue-chart";
import { SectionCard } from "./section-card";
import { StatusPill } from "./status-pill";

const healthToneMap = {
  Stable: "neutral",
  Expansion: "success",
  "At risk": "danger",
} as const;

const feedToneMap = {
  Recovered: "success",
  Growth: "neutral",
  Watch: "warning",
} as const;

const campaignToneMap = {
  Scaling: "success",
  Stable: "neutral",
  Testing: "warning",
  Paused: "danger",
} as const;

const riskToneMap = {
  Low: "neutral",
  Medium: "warning",
  High: "danger",
} as const;

const renderOverview = () => (
  <>
    <section className="grid gap-4 xl:grid-cols-4">
      {metrics.map((metric) => (
        <MetricCard key={metric.title} {...metric} />
      ))}
    </section>

    <section className="grid gap-6 xl:grid-cols-[minmax(0,1.5fr)_minmax(320px,0.82fr)]">
      <SectionCard title="Revenue velocity" eyebrow="Week 11">
        <div className="mb-5 flex flex-wrap items-center gap-3">
          <StatusPill tone="success">Net positive</StatusPill>
          <p className="text-sm text-neutral-600">
            Revenue is outperforming forecast by <span className="font-semibold text-neutral-950">17.8%</span>.
          </p>
        </div>
        <RevenueChart data={revenueSeries} />
      </SectionCard>

      <SectionCard title="Live feed" eyebrow="Signals">
        <div className="space-y-4">
          {liveFeed.map((item) => (
            <article
              key={item.label}
              className="rounded-[1.4rem] border border-neutral-950/8 bg-neutral-50 p-4"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-base font-medium text-neutral-950">{item.label}</h3>
                  <p className="mt-2 text-sm leading-6 text-neutral-600">{item.summary}</p>
                </div>
                <StatusPill tone={feedToneMap[item.status]}>{item.status}</StatusPill>
              </div>
              <p className="mt-4 text-xs uppercase tracking-[0.24em] text-neutral-400">{item.time}</p>
            </article>
          ))}
        </div>
      </SectionCard>
    </section>

    <section className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
      <SectionCard title="Pipeline lanes" eyebrow="Commercial">
        <div className="space-y-4">
          {dealPipeline.map((lane) => (
            <div key={lane.lane} className="rounded-[1.4rem] border border-neutral-950/8 bg-neutral-50 p-4">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-base font-medium text-neutral-950">{lane.lane}</p>
                  <p className="mt-1 text-sm text-neutral-500">{lane.count} active opportunities</p>
                </div>
                <div className="text-right">
                  <p className="text-base font-semibold text-neutral-950">{lane.amount}</p>
                  <p className="mt-1 text-sm text-neutral-500">{lane.fill} capacity</p>
                </div>
              </div>
              <div className="mt-4 h-2 rounded-full bg-neutral-200">
                <div
                  className="h-2 rounded-full bg-[linear-gradient(90deg,var(--color-signal),var(--color-cyan))]"
                  style={{ width: lane.fill }}
                />
              </div>
            </div>
          ))}
        </div>
      </SectionCard>

      <SectionCard title="Executive notes" eyebrow="Briefing">
        <div className="grid gap-4 md:grid-cols-3 xl:grid-cols-1">
          {actionCards.map((card) => (
            <article
              key={card.title}
              className="rounded-[1.4rem] border border-neutral-950/8 bg-[linear-gradient(180deg,rgba(249,250,251,1),rgba(245,245,244,0.7))] p-5"
            >
              <p className="text-[11px] uppercase tracking-[0.24em] text-neutral-400">{card.title}</p>
              <p className="mt-4 text-sm leading-7 text-neutral-700">{card.text}</p>
            </article>
          ))}
        </div>
      </SectionCard>
    </section>
  </>
);

const renderOperations = () => (
  <section className="grid gap-6 xl:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
    <SectionCard title="Queue control" eyebrow="Throughput">
      <div className="space-y-4">
        {operationsQueues.map((item) => (
          <div key={item.name} className="flex items-center justify-between rounded-[1.4rem] border border-neutral-950/8 bg-neutral-50 px-4 py-4">
            <div>
              <p className="font-medium text-neutral-950">{item.name}</p>
              <p className="mt-1 text-sm text-neutral-500">Target {item.target}</p>
            </div>
            <div className="text-right">
              <p className="text-2xl font-semibold tracking-[-0.05em] text-neutral-950">{item.value}</p>
              <p className="mt-1 text-sm text-neutral-500">{item.status}</p>
            </div>
          </div>
        ))}
      </div>
    </SectionCard>

    <SectionCard title="Team load" eyebrow="People ops">
      <div className="space-y-4">
        {operationsSchedule.map((item) => (
          <article key={item.team} className="rounded-[1.4rem] border border-neutral-950/8 p-4">
            <div className="flex items-center justify-between gap-4">
              <div>
                <h3 className="font-medium text-neutral-950">{item.team}</h3>
                <p className="mt-2 text-sm text-neutral-600">{item.note}</p>
              </div>
              <div className="text-right">
                <p className="text-xl font-semibold text-neutral-950">{item.load}</p>
                <p className="text-sm text-neutral-500">utilization</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </SectionCard>
  </section>
);

const renderCustomers = () => (
  <section className="grid gap-6 xl:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)]">
    <SectionCard title="Segment watchlist" eyebrow="Retention">
      <div className="space-y-4">
        {customerSegments.map((segment) => (
          <article key={segment.segment} className="rounded-[1.4rem] border border-neutral-950/8 bg-neutral-50 p-4">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="font-medium text-neutral-950">{segment.segment}</h3>
                <p className="mt-2 text-sm text-neutral-600">{segment.impact}</p>
              </div>
              <div className="text-right">
                <p className="text-xl font-semibold text-neutral-950">{segment.size}</p>
                <p className="mt-1 text-sm text-neutral-500">{segment.movement}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </SectionCard>

    <SectionCard title="Account radar" eyebrow="Operators">
      <div className="overflow-hidden rounded-[1.4rem] border border-neutral-950/8">
        <table className="min-w-full border-collapse">
          <thead className="bg-neutral-50 text-left">
            <tr className="text-[11px] uppercase tracking-[0.24em] text-neutral-400">
              <th className="px-4 py-4 font-medium">Company</th>
              <th className="px-4 py-4 font-medium">Owner</th>
              <th className="px-4 py-4 font-medium">Health</th>
              <th className="px-4 py-4 font-medium">MRR</th>
              <th className="px-4 py-4 font-medium">Last touch</th>
            </tr>
          </thead>
          <tbody>
            {accountTable.map((row) => (
              <tr key={row.company} className="border-t border-neutral-950/8 text-sm text-neutral-700">
                <td className="px-4 py-4 font-medium text-neutral-950">{row.company}</td>
                <td className="px-4 py-4">{row.owner}</td>
                <td className="px-4 py-4">
                  <StatusPill tone={healthToneMap[row.health]}>{row.health}</StatusPill>
                </td>
                <td className="px-4 py-4 text-neutral-950">{row.mrr}</td>
                <td className="px-4 py-4">{row.lastTouch}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-5 space-y-3">
        {customerMoments.map((item) => (
          <div key={item.company} className="flex items-start gap-3 text-sm text-neutral-600">
            <Dot className="mt-1 h-5 w-5 text-[var(--color-signal)]" />
            <p>
              <span className="font-medium text-neutral-950">{item.company}</span> · {item.event}
              <span className="block pt-1">{item.summary}</span>
            </p>
          </div>
        ))}
      </div>
    </SectionCard>
  </section>
);

const renderRevenue = () => (
  <section className="grid gap-6 xl:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
    <SectionCard title="Revenue architecture" eyebrow="Finance">
      <RevenueChart data={revenueSeries} />
    </SectionCard>
    <SectionCard title="Revenue highlights" eyebrow="Snapshot">
      <div className="space-y-4">
        {revenueHighlights.map((item) => (
          <article key={item.label} className="rounded-[1.4rem] border border-neutral-950/8 bg-neutral-50 p-4">
            <p className="text-sm text-neutral-500">{item.label}</p>
            <p className="mt-3 text-3xl font-semibold tracking-[-0.06em] text-neutral-950">{item.value}</p>
            <p className="mt-2 text-sm text-neutral-600">{item.note}</p>
          </article>
        ))}
      </div>
    </SectionCard>
  </section>
);

const renderSignals = () => (
  <SectionCard title="Live signal wall" eyebrow="Monitoring">
    <div className="grid gap-4 lg:grid-cols-3">
      {liveFeed.map((item) => (
        <article key={item.label} className="rounded-[1.4rem] border border-neutral-950/8 bg-neutral-50 p-5">
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-lg font-medium text-neutral-950">{item.label}</h3>
            <StatusPill tone={feedToneMap[item.status]}>{item.status}</StatusPill>
          </div>
          <p className="mt-4 text-sm leading-7 text-neutral-600">{item.summary}</p>
          <p className="mt-5 text-xs uppercase tracking-[0.24em] text-neutral-400">{item.time}</p>
        </article>
      ))}
    </div>
  </SectionCard>
);

const renderCampaigns = () => (
  <SectionCard title="Campaign portfolio" eyebrow="Growth">
    <div className="grid gap-4 lg:grid-cols-2">
      {campaignCards.map((campaign) => (
        <article key={campaign.name} className="rounded-[1.4rem] border border-neutral-950/8 bg-neutral-50 p-5">
          <div className="flex items-center justify-between gap-4">
            <h3 className="text-lg font-medium text-neutral-950">{campaign.name}</h3>
            <StatusPill tone={campaignToneMap[campaign.status]}>{campaign.status}</StatusPill>
          </div>
          <p className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-neutral-950">{campaign.roi}</p>
          <p className="mt-2 text-sm text-neutral-600">{campaign.note}</p>
        </article>
      ))}
    </div>
  </SectionCard>
);

const renderRisk = () => (
  <SectionCard title="Risk register" eyebrow="Board review">
    <div className="space-y-4">
      {riskRegister.map((risk) => (
        <article key={risk.area} className="flex flex-col gap-4 rounded-[1.4rem] border border-neutral-950/8 bg-neutral-50 p-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-medium text-neutral-950">{risk.area}</p>
            <p className="mt-2 text-sm text-neutral-600">{risk.action}</p>
          </div>
          <div className="flex items-center gap-3">
            <StatusPill tone={riskToneMap[risk.level]}>{risk.level}</StatusPill>
            <span className="text-sm text-neutral-500">{risk.owner}</span>
          </div>
        </article>
      ))}
    </div>
  </SectionCard>
);

const renderFlow = () => (
  <SectionCard title="Process choreography" eyebrow="Workflow">
    <div className="grid gap-4 lg:grid-cols-5">
      {flowSteps.map((item, index) => (
        <article key={item.step} className="relative rounded-[1.4rem] border border-neutral-950/8 bg-neutral-50 p-4">
          <p className="text-[11px] uppercase tracking-[0.24em] text-neutral-400">Step {index + 1}</p>
          <h3 className="mt-3 text-lg font-medium text-neutral-950">{item.step}</h3>
          <p className="mt-5 text-2xl font-semibold tracking-[-0.05em] text-neutral-950">{item.time}</p>
          <p className="mt-2 text-sm text-neutral-600">{item.owner}</p>
        </article>
      ))}
    </div>
  </SectionCard>
);

const sectionContent: Record<SectionId, () => ReactElement> = {
  overview: renderOverview,
  operations: renderOperations,
  customers: renderCustomers,
  revenue: renderRevenue,
  signals: renderSignals,
  campaigns: renderCampaigns,
  risk: renderRisk,
  flow: renderFlow,
};

export const AdminShell = () => {
  const [activeSection, setActiveSection] = useState<SectionId>("overview");
  const [query, setQuery] = useState("");

  const activeIntro = sectionIntro[activeSection];

  const filteredActions = useMemo(() => {
    if (!query.trim()) return quickActions;

    return quickActions.filter((item) =>
      `${item.title} ${item.detail}`.toLowerCase().includes(query.toLowerCase())
    );
  }, [query]);

  const ActiveSection = sectionContent[activeSection];

  return (
    <div className="min-h-screen bg-[#f3f0ea] text-neutral-950">
      <div className="mx-auto grid min-h-screen max-w-[1600px] gap-6 px-4 py-4 lg:grid-cols-[290px_minmax(0,1fr)] lg:px-6">
        <aside className="overflow-hidden rounded-[2.25rem] border border-neutral-950/8 bg-[#111111] p-6 text-white shadow-[0_18px_60px_rgba(15,23,42,0.08)]">
          <div className="mb-10">
            <p className="text-xs uppercase tracking-[0.4em] text-[var(--color-signal)]">Orion</p>
            <h1 className="mt-3 text-3xl font-semibold tracking-[-0.08em] text-white">Admin desk</h1>
            <p className="mt-3 max-w-[18rem] text-sm leading-6 text-white/58">
              Editorial operations interface for a real admin workflow, not a decorative landing page.
            </p>
          </div>

          <nav className="space-y-8">
            {navigationGroups.map((group) => (
              <div key={group.title}>
                <p className="mb-3 text-[11px] uppercase tracking-[0.28em] text-white/35">{group.title}</p>
                <div className="space-y-2">
                  {group.items.map(({ id, label, icon: Icon }) => {
                    const active = activeSection === id;

                    return (
                      <button
                        key={id}
                        className={`flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left text-sm transition ${
                          active
                            ? "bg-[#f3f0ea] text-neutral-950"
                            : "text-white/62 hover:bg-white/8 hover:text-white"
                        }`}
                        onClick={() => setActiveSection(id)}
                        type="button"
                      >
                        <Icon className="h-4 w-4" strokeWidth={1.9} />
                        <span className="font-medium">{label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </nav>

          <div className="mt-10 rounded-[1.75rem] border border-white/10 bg-white/5 p-5">
            <StatusPill tone="warning">Priority Layer</StatusPill>
            <p className="mt-4 text-lg font-semibold tracking-[-0.05em] text-white">Board review in 04:12:39</p>
            <p className="mt-2 text-sm leading-6 text-white/65">
              The interface now uses real section switching, focused content and a clean background.
            </p>
          </div>
        </aside>

        <main className="space-y-6">
          <header className="rounded-[2.25rem] border border-neutral-950/8 bg-white px-5 py-5 shadow-[0_14px_40px_rgba(15,23,42,0.06)] lg:px-7">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
              <div className="max-w-3xl">
                <p className="text-[11px] uppercase tracking-[0.28em] text-neutral-500">{activeIntro.eyebrow}</p>
                <h2 className="mt-3 text-4xl font-semibold tracking-[-0.09em] text-neutral-950 md:text-5xl">
                  {activeIntro.title}
                </h2>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-neutral-600">
                  {activeIntro.description}
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <label className="flex min-w-[240px] items-center gap-3 rounded-2xl border border-neutral-950/10 bg-neutral-50 px-4 py-3 text-sm text-neutral-500">
                  <Search className="h-4 w-4" />
                  <input
                    aria-label="Search"
                    className="w-full bg-transparent text-neutral-950 outline-none"
                    onChange={(event) => setQuery(event.target.value)}
                    placeholder="Search workflows or commands"
                    type="text"
                    value={query}
                  />
                </label>
                <button
                  className="flex items-center justify-center gap-2 rounded-2xl bg-neutral-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-[var(--color-signal)]"
                  type="button"
                >
                  Launch workflow
                  <ArrowUpRight className="h-4 w-4" />
                </button>
                <button
                  aria-label="Settings"
                  className="flex h-12 w-12 items-center justify-center rounded-2xl border border-neutral-950/10 bg-neutral-50 text-neutral-600 transition hover:border-neutral-950/20 hover:text-neutral-950"
                  type="button"
                >
                  <Settings2 className="h-5 w-5" />
                </button>
              </div>
            </div>
          </header>

          <section className="grid gap-4 xl:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)]">
            <SectionCard title="Quick actions" eyebrow={activeIntro.badge}>
              <div className="grid gap-4 lg:grid-cols-3">
                {filteredActions.map((item) => (
                  <button
                    key={item.title}
                    className="rounded-[1.4rem] border border-neutral-950/8 bg-neutral-50 p-5 text-left transition hover:border-[var(--color-signal)]/40 hover:bg-white"
                    type="button"
                  >
                    <div className="flex items-center gap-3">
                      <Sparkles className="h-4 w-4 text-[var(--color-signal)]" />
                      <p className="font-medium text-neutral-950">{item.title}</p>
                    </div>
                    <p className="mt-4 text-sm leading-7 text-neutral-600">{item.detail}</p>
                  </button>
                ))}
              </div>
            </SectionCard>

            <SectionCard title="Utility strip" eyebrow="Readiness">
              <div className="grid gap-4 md:grid-cols-3 xl:grid-cols-1">
                {utilityStats.map((item) => (
                  <article key={item.label} className="rounded-[1.4rem] border border-neutral-950/8 bg-neutral-50 p-4">
                    <div className="flex items-center gap-3 text-neutral-500">
                      <item.icon className="h-4 w-4 text-[var(--color-signal)]" />
                      <p className="text-sm">{item.label}</p>
                    </div>
                    <p className="mt-4 text-2xl font-semibold tracking-[-0.05em] text-neutral-950">{item.value}</p>
                  </article>
                ))}
              </div>
            </SectionCard>
          </section>

          <ActiveSection />
        </main>
      </div>
    </div>
  );
};
