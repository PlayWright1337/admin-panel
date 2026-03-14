import {
  Activity,
  BellRing,
  BriefcaseBusiness,
  Cable,
  ChartColumnIncreasing,
  CircleDollarSign,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  UsersRound,
  Waypoints,
  type LucideIcon,
} from "lucide-react";

export type SectionId =
  | "overview"
  | "operations"
  | "customers"
  | "revenue"
  | "signals"
  | "campaigns"
  | "risk"
  | "flow";

export type MetricTone = "emerald" | "amber" | "sky" | "violet";

export type MetricItem = {
  title: string;
  value: string;
  delta: string;
  detail: string;
  tone: MetricTone;
  icon: LucideIcon;
};

export type FeedStatus = "Recovered" | "Growth" | "Watch";

export type FeedItem = {
  label: string;
  time: string;
  summary: string;
  status: FeedStatus;
};

export type AccountHealth = "Stable" | "Expansion" | "At risk";

export type AccountRow = {
  company: string;
  owner: string;
  health: AccountHealth;
  mrr: string;
  lastTouch: string;
};

type CampaignStatus = "Scaling" | "Stable" | "Testing" | "Paused";

type CampaignCard = {
  name: string;
  roi: string;
  status: CampaignStatus;
  note: string;
};

type RiskLevel = "Low" | "Medium" | "High";

type RiskItem = {
  area: string;
  level: RiskLevel;
  owner: string;
  action: string;
};

export type NavigationItem = {
  id: SectionId;
  label: string;
  icon: LucideIcon;
};

export type NavigationGroup = {
  title: string;
  items: NavigationItem[];
};

export const navigationGroups: NavigationGroup[] = [
  {
    title: "Command",
    items: [
      { id: "overview", label: "Overview", icon: Sparkles },
      { id: "operations", label: "Operations", icon: Cable },
      { id: "customers", label: "Customers", icon: UsersRound },
      { id: "revenue", label: "Revenue", icon: CircleDollarSign },
    ],
  },
  {
    title: "Systems",
    items: [
      { id: "signals", label: "Signals", icon: Activity },
      { id: "campaigns", label: "Campaigns", icon: BriefcaseBusiness },
      { id: "risk", label: "Risk", icon: ShieldCheck },
      { id: "flow", label: "Flow", icon: Waypoints },
    ],
  },
];

export const sectionIntro: Record<
  SectionId,
  {
    eyebrow: string;
    title: string;
    description: string;
    badge: string;
  }
> = {
  overview: {
    eyebrow: "Editorial operations desk",
    title: "A clean command surface for fast executive decisions.",
    description:
      "Live commercial, operational and customer health in one place without decorative dashboard noise.",
    badge: "Overview",
  },
  operations: {
    eyebrow: "Daily execution",
    title: "Ops should show pressure, blockers and throughput at a glance.",
    description:
      "Queues, workforce balance and exception handling stay visible so operations can be managed, not guessed.",
    badge: "Operations",
  },
  customers: {
    eyebrow: "Account intelligence",
    title: "Customers need segmentation, risk context and owner visibility.",
    description:
      "Retention, expansion and account risk live together so teams can act on the next best move quickly.",
    badge: "Customers",
  },
  revenue: {
    eyebrow: "Commercial performance",
    title: "Revenue view focused on velocity, quality and forecast confidence.",
    description:
      "A disciplined commercial screen with targets, contribution sources and payout timing.",
    badge: "Revenue",
  },
  signals: {
    eyebrow: "Monitoring",
    title: "Signals should feel urgent only when urgency is real.",
    description:
      "Short-form event monitoring with severity and trend context instead of alert wallpaper.",
    badge: "Signals",
  },
  campaigns: {
    eyebrow: "Growth programs",
    title: "Campaign performance with momentum, fatigue and next action.",
    description:
      "A compact growth control panel for retention, lifecycle and paid programs.",
    badge: "Campaigns",
  },
  risk: {
    eyebrow: "Governance",
    title: "Risk review focused on exposure, owner and mitigation progress.",
    description:
      "The board version of operational risk: concise, ranked and action-oriented.",
    badge: "Risk",
  },
  flow: {
    eyebrow: "Workflow choreography",
    title: "Process flow should reveal bottlenecks, not just stages.",
    description:
      "A stage-by-stage operational map for approvals, handoffs and SLA friction.",
    badge: "Flow",
  },
};

export const metrics: MetricItem[] = [
  {
    title: "Gross revenue",
    value: "$284.9K",
    delta: "+18.4%",
    detail: "vs February",
    tone: "emerald",
    icon: CircleDollarSign,
  },
  {
    title: "Qualified pipeline",
    value: "412",
    delta: "+23",
    detail: "new this week",
    tone: "amber",
    icon: ChartColumnIncreasing,
  },
  {
    title: "Incident pressure",
    value: "03",
    delta: "-41%",
    detail: "below baseline",
    tone: "sky",
    icon: BellRing,
  },
  {
    title: "Conversion rate",
    value: "7.82%",
    delta: "+1.2%",
    detail: "checkout to paid",
    tone: "violet",
    icon: Sparkles,
  },
];

export const revenueSeries = [
  { name: "Mon", revenue: 32, target: 26 },
  { name: "Tue", revenue: 38, target: 29 },
  { name: "Wed", revenue: 34, target: 30 },
  { name: "Thu", revenue: 49, target: 34 },
  { name: "Fri", revenue: 54, target: 38 },
  { name: "Sat", revenue: 42, target: 35 },
  { name: "Sun", revenue: 58, target: 41 },
];

export const liveFeed: FeedItem[] = [
  {
    label: "Checkout anomaly contained",
    time: "2 min ago",
    summary: "Retry queue stabilized after Frankfurt edge spike.",
    status: "Recovered",
  },
  {
    label: "High intent segment expanded",
    time: "18 min ago",
    summary: "Lifecycle campaign pulled 124 warm accounts into follow-up.",
    status: "Growth",
  },
  {
    label: "Finance sync delayed",
    time: "43 min ago",
    summary: "ERP handoff is 6 minutes behind normal throughput.",
    status: "Watch",
  },
];

export const dealPipeline = [
  { lane: "Inbound", count: 148, amount: "$94K", fill: "74%" },
  { lane: "Discovery", count: 63, amount: "$61K", fill: "58%" },
  { lane: "Proposal", count: 24, amount: "$88K", fill: "82%" },
  { lane: "Negotiation", count: 12, amount: "$41K", fill: "46%" },
];

export const accountTable: AccountRow[] = [
  {
    company: "Northstar Labs",
    owner: "A. Romanov",
    health: "Stable",
    mrr: "$12.4K",
    lastTouch: "Today, 09:20",
  },
  {
    company: "Kiteframe",
    owner: "D. Sokol",
    health: "Expansion",
    mrr: "$8.1K",
    lastTouch: "Today, 08:12",
  },
  {
    company: "Volta Freight",
    owner: "M. Chen",
    health: "At risk",
    mrr: "$19.6K",
    lastTouch: "Yesterday, 22:44",
  },
  {
    company: "Canvas Union",
    owner: "L. Ahmed",
    health: "Stable",
    mrr: "$6.8K",
    lastTouch: "Yesterday, 18:03",
  },
];

export const actionCards = [
  {
    title: "Campaign pulse",
    text: "Retention loop is outperforming the paid funnel by 2.1x on net revenue retention.",
  },
  {
    title: "Ops readiness",
    text: "Support, billing and shipping queues are all under threshold for the first time in 11 days.",
  },
  {
    title: "Board note",
    text: "If the current pace holds, monthly recurring revenue closes 9.7% above the base plan.",
  },
];

export const operationsQueues = [
  { name: "Support queue", value: "14", target: "< 20", status: "Healthy" },
  { name: "Billing reviews", value: "08", target: "< 10", status: "On pace" },
  { name: "Warehouse holds", value: "03", target: "< 5", status: "Clear" },
  { name: "Refund approvals", value: "11", target: "< 12", status: "Watch" },
];

export const operationsSchedule = [
  { team: "Support", load: "78%", note: "Two agents free after 14:00" },
  { team: "Finance ops", load: "64%", note: "Ready for invoice sweep" },
  { team: "Logistics", load: "88%", note: "Monitor evening carrier handoff" },
  { team: "Success", load: "69%", note: "Enough room for outbound saves" },
];

export const customerSegments = [
  { segment: "Expansion candidates", size: "34", movement: "+7", impact: "$29K potential" },
  { segment: "Silent accounts", size: "19", movement: "-2", impact: "Needs save plan" },
  { segment: "New champions", size: "12", movement: "+4", impact: "Reference pipeline" },
  { segment: "Renewal due <30d", size: "8", movement: "+1", impact: "$44K at stake" },
];

export const customerMoments = [
  { company: "Kiteframe", event: "Expansion signal", summary: "Usage grew 28% in 7 days." },
  { company: "Volta Freight", event: "Risk event", summary: "CFO opened cancellation clause twice." },
  { company: "Northstar Labs", event: "Champion activity", summary: "Requested board-facing ROI sheet." },
];

export const revenueHighlights = [
  { label: "Net new MRR", value: "$48.2K", note: "Above plan by $6.4K" },
  { label: "Expansion MRR", value: "$17.1K", note: "Driven by top 6 accounts" },
  { label: "Collected cash", value: "$192K", note: "97.4% on-time collection" },
  { label: "Forecast confidence", value: "82%", note: "Improved from 74% last week" },
];

export const campaignCards: CampaignCard[] = [
  { name: "Lifecycle reactivation", roi: "4.8x", status: "Scaling", note: "Low fatigue, strong click depth" },
  { name: "Founder outbound", roi: "2.1x", status: "Stable", note: "High-quality meetings, low volume" },
  { name: "Partner webinar", roi: "1.7x", status: "Testing", note: "Good pipeline, weak attendance conversion" },
  { name: "Retargeting burst", roi: "0.9x", status: "Paused", note: "Creative fatigue after 6 days" },
];

export const riskRegister: RiskItem[] = [
  { area: "Payments", level: "Medium", owner: "Finance", action: "Switch fallback acquirer" },
  { area: "Data sync", level: "Low", owner: "Platform", action: "Close ERP retry gap" },
  { area: "Top renewal", level: "High", owner: "Success", action: "Executive outreach in 24h" },
  { area: "Carrier SLA", level: "Medium", owner: "Ops", action: "Escalate late lane provider" },
];

export const flowSteps = [
  { step: "Lead captured", time: "04m", owner: "Growth" },
  { step: "Qualified", time: "37m", owner: "Sales" },
  { step: "Proposal sent", time: "06h", owner: "AE" },
  { step: "Security review", time: "18h", owner: "Solutions" },
  { step: "Close + handoff", time: "11h", owner: "Ops" },
];

export const quickActions = [
  { title: "Open incident board", detail: "Review unresolved exceptions across teams." },
  { title: "Export board packet", detail: "Generate KPI summary with narrative notes." },
  { title: "Push save campaign", detail: "Launch retention flow for silent accounts." },
];

export const utilityStats = [
  { label: "Team availability", value: "84%", icon: UsersRound },
  { label: "Alert confidence", value: "91%", icon: ShieldAlert },
  { label: "Automations healthy", value: "27/29", icon: Activity },
];
