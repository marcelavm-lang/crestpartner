// Costa Rica salary reference used by the expansion-plan calculator (form + API).
// Single source of truth: annual BASE salary ranges in USD; all-in cost is derived with EMPLOYER_COST_MULTIPLIER.
//
// Market review (Nov 2026): Glassdoor Costa Rica/San José, Levels.fyi Costa Rica, Paylab CR, Mismo, ERI;
// FX at BCCR ≈ ₡453/USD. Junior floors kept at/above the legal minimum for degree holders (≈ $1,466/mo in 2026).
//
// Employer cost ≈ 36%: CCSS employer charges 26.83% (PwC Tax Summaries, 2026) + aguinaldo 8.33% + INS ≈ 1%.
// Vacation, severance (cesantía) and optional benefits are not included.

export const EMPLOYER_COST_MULTIPLIER = 1.36
export const EMPLOYER_COST_PCT = Math.round((EMPLOYER_COST_MULTIPLIER - 1) * 100) // 36

export const GROUPS = [
  'Engineering',
  'AI & Machine Learning',
  'Data Science',
  'Data Engineering',
  'Business Intelligence',
  'DevOps & Cloud',
  'QA',
  'Product',
  'UI/UX Design',
  'Business Analysis',
] as const

export type Group = (typeof GROUPS)[number]

type PositionDef = {
  key: string
  label: string
  group: Group
  years: string
  baseMin: number
  baseMax: number
}

const DEFS = [
  // Engineering
  { key: 'devMgr',     label: 'Engineering Manager',            group: 'Engineering',           years: '10+ yrs',  baseMin: 84000, baseMax: 120000 },
  { key: 'srLead',     label: 'Staff Engineer',                 group: 'Engineering',           years: '5–10 yrs', baseMin: 60000, baseMax: 84000 },
  { key: 'techLead',   label: 'Tech Lead',                      group: 'Engineering',           years: '3–5 yrs',  baseMin: 48000, baseMax: 72000 },
  { key: 'srDev',      label: 'Senior Software Engineer',       group: 'Engineering',           years: '5+ yrs',   baseMin: 48000, baseMax: 78000 },
  { key: 'midDev',     label: 'Mid-Level Software Engineer',    group: 'Engineering',           years: '2–4 yrs',  baseMin: 25200, baseMax: 48000 },
  { key: 'jrDev',      label: 'Junior Software Engineer',       group: 'Engineering',           years: '1–2 yrs',  baseMin: 18000, baseMax: 24000 },
  { key: 'intern',     label: 'Software Engineering Intern',    group: 'Engineering',           years: '0–1 yrs',  baseMin: 10800, baseMax: 13200 },
  // AI & Machine Learning (new, Nov 2026)
  { key: 'aiLead',     label: 'AI/ML Lead',                     group: 'AI & Machine Learning', years: '8+ yrs',   baseMin: 78000, baseMax: 100000 },
  { key: 'srAI',       label: 'Senior AI/ML Engineer',          group: 'AI & Machine Learning', years: '5+ yrs',   baseMin: 58000, baseMax: 80000 },
  { key: 'midAI',      label: 'Mid-Level AI/ML Engineer',       group: 'AI & Machine Learning', years: '2–4 yrs',  baseMin: 42000, baseMax: 58000 },
  { key: 'jrAI',       label: 'Junior AI/ML Engineer',          group: 'AI & Machine Learning', years: '0–2 yrs',  baseMin: 30000, baseMax: 42000 },
  // Data Science
  { key: 'srDS',       label: 'Senior Data Scientist',          group: 'Data Science',          years: '5+ yrs',   baseMin: 54000, baseMax: 84000 },
  { key: 'ds',         label: 'Data Scientist',                 group: 'Data Science',          years: '2–5 yrs',  baseMin: 33600, baseMax: 54000 },
  { key: 'jrDS',       label: 'Junior Data Scientist',          group: 'Data Science',          years: '1–2 yrs',  baseMin: 21600, baseMax: 33600 },
  // Data Engineering
  { key: 'srDataEng',  label: 'Senior Data Engineer',           group: 'Data Engineering',      years: '5+ yrs',   baseMin: 48000, baseMax: 78000 },
  { key: 'midDataEng', label: 'Mid-Level Data Engineer',        group: 'Data Engineering',      years: '2–4 yrs',  baseMin: 30000, baseMax: 48000 },
  { key: 'jrDataEng',  label: 'Junior Data Engineer',           group: 'Data Engineering',      years: '1–2 yrs',  baseMin: 18000, baseMax: 30000 },
  // Business Intelligence (new, Nov 2026)
  { key: 'srBI',       label: 'Senior BI Analyst / Developer',  group: 'Business Intelligence', years: '5+ yrs',   baseMin: 37000, baseMax: 50000 },
  { key: 'midBI',      label: 'BI Analyst / Developer',         group: 'Business Intelligence', years: '2–4 yrs',  baseMin: 26000, baseMax: 37000 },
  { key: 'jrBI',       label: 'Junior BI Analyst',              group: 'Business Intelligence', years: '0–2 yrs',  baseMin: 18000, baseMax: 26000 },
  // DevOps & Cloud
  { key: 'srDevOps',   label: 'Senior DevOps/Cloud Engineer',   group: 'DevOps & Cloud',        years: '5+ yrs',   baseMin: 48000, baseMax: 84000 },
  { key: 'midDevOps',  label: 'Mid-Level DevOps/Cloud Eng.',    group: 'DevOps & Cloud',        years: '2–4 yrs',  baseMin: 30000, baseMax: 54000 },
  { key: 'jrDevOps',   label: 'Junior DevOps/Cloud Engineer',   group: 'DevOps & Cloud',        years: '1–2 yrs',  baseMin: 18000, baseMax: 30000 },
  // QA
  { key: 'srQaMgr',    label: 'Senior QA Manager',              group: 'QA',                    years: '10+ yrs',  baseMin: 48000, baseMax: 66000 },
  { key: 'srQa',       label: 'Senior QA Engineer',             group: 'QA',                    years: '5+ yrs',   baseMin: 33600, baseMax: 54000 },
  { key: 'midQa',      label: 'Mid-Level QA Engineer',          group: 'QA',                    years: '2–4 yrs',  baseMin: 24000, baseMax: 32400 },
  { key: 'jrQa',       label: 'Junior QA Engineer',             group: 'QA',                    years: '0–2 yrs',  baseMin: 18000, baseMax: 22800 },
  // Product
  { key: 'srPM',       label: 'Senior Product Manager',         group: 'Product',               years: '5+ yrs',   baseMin: 48000, baseMax: 78000 },
  { key: 'pm',         label: 'Product Manager',                group: 'Product',               years: '2–5 yrs',  baseMin: 36000, baseMax: 54000 },
  { key: 'assocPM',    label: 'Associate Product Manager',      group: 'Product',               years: '0–2 yrs',  baseMin: 21600, baseMax: 33600 },
  // UI/UX Design
  { key: 'srUX',       label: 'Senior UI/UX Designer',          group: 'UI/UX Design',          years: '5+ yrs',   baseMin: 33600, baseMax: 48000 },
  { key: 'midUX',      label: 'Mid-Level UI/UX Designer',       group: 'UI/UX Design',          years: '2–4 yrs',  baseMin: 24000, baseMax: 42000 },
  { key: 'jrUX',       label: 'Junior UI/UX Designer',          group: 'UI/UX Design',          years: '0–2 yrs',  baseMin: 18000, baseMax: 24000 },
  // Business Analysis
  { key: 'srBA',       label: 'Senior Business Analyst',        group: 'Business Analysis',     years: '5+ yrs',   baseMin: 36000, baseMax: 54000 },
  { key: 'ba',         label: 'Business Analyst',               group: 'Business Analysis',     years: '2–4 yrs',  baseMin: 24000, baseMax: 36000 },
  { key: 'jrBA',       label: 'Junior Business Analyst',        group: 'Business Analysis',     years: '0–2 yrs',  baseMin: 18000, baseMax: 24000 },
] as const satisfies readonly PositionDef[]

export type PositionKey = (typeof DEFS)[number]['key']

const usd = (n: number) => `$${n.toLocaleString('en-US')}`

export const POSITIONS = DEFS.map((d) => {
  const annualMin = Math.round(d.baseMin * EMPLOYER_COST_MULTIPLIER)
  const annualMax = Math.round(d.baseMax * EMPLOYER_COST_MULTIPLIER)
  return {
    ...d,
    key: d.key as PositionKey,
    annualMin,
    annualMax,
    /** All-in annual range, formatted */
    annualRange: `${usd(annualMin)} – ${usd(annualMax)}`,
    /** All-in annual midpoint used for cost estimates */
    avg: Math.round((annualMin + annualMax) / 2),
  }
})

export const POSITION_BY_KEY = Object.fromEntries(POSITIONS.map((p) => [p.key, p])) as Record<
  PositionKey,
  (typeof POSITIONS)[number]
>

export const GROUP_TO_PROFILE: Record<Group, string[]> = {
  'Engineering': ['Software Engineers', 'Engineering Leadership'],
  'AI & Machine Learning': ['AI & ML Engineers'],
  'Data Science': ['Data Scientists'],
  'Data Engineering': ['Data Engineers'],
  'Business Intelligence': ['BI Analysts'],
  'DevOps & Cloud': ['DevOps & Cloud Engineers'],
  'QA': ['QA Engineers'],
  'Product': ['Product Managers'],
  'UI/UX Design': ['UI/UX Designers'],
  'Business Analysis': ['Business Analysts'],
}
