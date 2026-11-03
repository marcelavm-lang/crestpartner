// Minimal two-language setup: English at the root, Spanish under /es.
// Pages that exist in both languages are listed in ES_ROUTES (English path → Spanish path).
export type Locale = 'en' | 'es'

export const ES_ROUTES: Record<string, string> = {
  '/': '/es',
  '/services': '/es/services',
  '/why-costa-rica': '/es/why-costa-rica',
  '/who-we-are': '/es/who-we-are',
  '/contact': '/es/contact',
  '/ai-engineering-teams': '/es/ai-engineering-teams',
  '/case-studies': '/es/case-studies',
}

const EN_ROUTES: Record<string, string> = Object.fromEntries(Object.entries(ES_ROUTES).map(([en, es]) => [es, en]))

export function localeFromPath(pathname: string | null | undefined): Locale {
  return pathname === '/es' || pathname?.startsWith('/es/') ? 'es' : 'en'
}

/** Counterpart of a path in the other language, or null when that page isn't translated yet. */
export function alternatePath(pathname: string, target: Locale): string | null {
  const clean = pathname.replace(/\/$/, '') || '/'
  if (target === 'es') return ES_ROUTES[clean] ?? null
  return EN_ROUTES[clean] ?? null
}

/** Link target for a page in the given locale (falls back to the English page if not translated). */
export function localHref(enPath: string, locale: Locale): string {
  if (locale === 'en') return enPath
  const [base, hash] = enPath.split('#')
  const es = ES_ROUTES[base]
  return es ? es + (hash ? `#${hash}` : '') : enPath
}

export const UI = {
  en: {
    nav: [
      { label: 'Services', href: '/services' },
      { label: 'Case studies', href: '/case-studies' },
      { label: 'Why Costa Rica', href: '/why-costa-rica' },
      { label: 'Who we are', href: '/who-we-are' },
    ],
    bookCall: 'Book a 30-min call',
    bookCallShort: 'Book a call',
    buildPlan: 'Build your plan',
    buildPlanLong: 'Build your expansion plan',
    footerTagline:
      'We help tech companies establish and operate their own dedicated tech entity in Costa Rica — your team, your brand, fully administered by us.',
    footerServices: 'Services',
    footerCompany: 'Company',
    footerContact: 'Contact',
    services: [
      { label: 'Launch', href: '/services#launch' },
      { label: 'Build', href: '/services#build' },
      { label: 'Operate', href: '/services#operate' },
      { label: 'For engineering leaders', href: '/services#engineering' },
      { label: 'AI & ML teams', href: '/ai-engineering-teams' },
    ],
    company: [
      { label: 'Who we are', href: '/who-we-are' },
      { label: 'Case studies', href: '/case-studies' },
      { label: 'Why Costa Rica', href: '/why-costa-rica' },
      { label: 'Guides', href: '/guides' },
      { label: 'Careers', href: '/careers' },
    ],
    langSwitch: 'Español',
  },
  es: {
    nav: [
      { label: 'Servicios', href: '/es/services' },
      { label: 'Casos de éxito', href: '/es/case-studies' },
      { label: 'Por qué Costa Rica', href: '/es/why-costa-rica' },
      { label: 'Quiénes somos', href: '/es/who-we-are' },
    ],
    bookCall: 'Agende una llamada de 30 min',
    bookCallShort: 'Agende una llamada',
    buildPlan: 'Arme su plan',
    buildPlanLong: 'Arme su plan de expansión',
    footerTagline:
      'Ayudamos a empresas de tecnología a establecer y operar su propia entidad en Costa Rica — su equipo, su marca, administrado por completo por nosotros.',
    footerServices: 'Servicios',
    footerCompany: 'Empresa',
    footerContact: 'Contacto',
    services: [
      { label: 'Lanzar', href: '/es/services#launch' },
      { label: 'Construir', href: '/es/services#build' },
      { label: 'Operar', href: '/es/services#operate' },
      { label: 'Para líderes de ingeniería', href: '/es/services#engineering' },
      { label: 'Equipos de IA y ML', href: '/es/ai-engineering-teams' },
    ],
    company: [
      { label: 'Quiénes somos', href: '/es/who-we-are' },
      { label: 'Casos de éxito', href: '/es/case-studies' },
      { label: 'Por qué Costa Rica', href: '/es/why-costa-rica' },
      { label: 'Guías (en inglés)', href: '/guides' },
      { label: 'Empleo', href: '/careers' },
    ],
    langSwitch: 'English',
  },
} as const
