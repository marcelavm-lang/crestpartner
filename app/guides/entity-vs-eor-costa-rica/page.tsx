import Link from 'next/link'
import { BookCallLink } from '@/components/CtaLinks'
import { pageMetadata } from '@/lib/metadata'
import { GUIDES } from '@/lib/guides'
import { SITE } from '@/lib/site'

const guide = GUIDES.find((g) => g.slug === 'entity-vs-eor-costa-rica')!

export const metadata = {
  ...pageMetadata({
    title: 'Entity vs EOR in Costa Rica (2026 Guide) | Crest Partners',
    description: guide.description,
    path: `/guides/${guide.slug}`,
  }),
}

// Every figure below comes from the sources listed at the end of the page (checked Nov 2026).
const comparison: [string, string, string][] = [
  ['Who is the legal employer', 'The EOR provider', 'Your own Costa Rican company'],
  ['Brand the team works under', 'Yours day to day, but employed by the EOR', 'Yours — employer and brand are the same'],
  ['IP and data', 'Assigned to you by contract', 'Created inside your own entity'],
  ['Typical cost structure', 'EOR fee of about $400–$600 per employee, per month, on top of salary and employer costs', 'One-time setup plus running costs — no per-head markup'],
  ['Time to first hire', 'Days', 'Entity in about 3–6 weeks; hiring can run in parallel'],
  ['Free Trade Zone eligibility', 'No — you don’t own the company', 'Yes, if you qualify'],
  ['Going fully in-house later', 'Every employee has to be moved', 'Nothing to move — it is already yours'],
]

const faqs = [
  {
    q: 'Can a foreign company own 100% of a Costa Rican company?',
    a: 'Yes. Both the S.A. (corporation) and the S.R.L. (limited liability company) allow 100% foreign ownership, and both offer limited liability.',
  },
  {
    q: 'How long does it take to set up a company in Costa Rica?',
    a: 'Typically 3–6 weeks: notarized incorporation deed, National Registry filing (about 5–7 business days for the corporate ID), tax registration with Hacienda, beneficial-owner (RTBF) filing, bank account and CCSS employer registration before the first payroll.',
  },
  {
    q: 'How much does an Employer of Record cost in Costa Rica?',
    a: 'Published EOR prices for Costa Rica are typically about $400–$600 per employee per month. That fee is on top of salary and mandatory employer costs, which are the same under an EOR or your own entity.',
  },
  {
    q: 'What does it cost to employ someone in Costa Rica beyond salary?',
    a: 'Employer CCSS social charges are 26.83% of gross salary (2026), plus the mandatory 13th-month bonus (aguinaldo, about 8.33%) and work-risk insurance (around 1%) — roughly 36% on top of salary, before vacation, severance reserves and optional benefits.',
  },
  {
    q: 'Can a service company benefit from Costa Rica’s Free Trade Zone regime?',
    a: 'Yes, if it qualifies. Service companies inside the Greater Metropolitan Area can get 0% income tax for years 1–8 and 15% for years 9–12, among other exemptions. Requirements include a strategic-sector activity, a minimum new investment (USD 150,000 inside an industrial park) and a minimum score on PROCOMER’s eligibility index. Admission takes about three months on average.',
  },
  {
    q: 'When is an EOR the better choice?',
    a: 'When you are hiring one to a few people, testing the market, or need someone to start within days. For a team you plan to keep and grow, owning the entity usually costs less over time and keeps the IP and the people inside your company.',
  },
]

function H2({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2 id={id} className="text-[26px] md:text-[30px] font-bold text-black mt-14 mb-4 leading-tight scroll-mt-28">
      {children}
    </h2>
  )
}
function P({ children }: { children: React.ReactNode }) {
  return <p className="text-[17px] text-[#3E4C59] leading-relaxed mb-5">{children}</p>
}
function UL({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="list-disc pl-6 space-y-2 mb-6 text-[17px] text-[#3E4C59] leading-relaxed">
      {items.map((it, i) => (
        <li key={i}>{it}</li>
      ))}
    </ul>
  )
}

export default function EntityVsEorGuide() {
  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: guide.title,
    description: guide.description,
    dateModified: guide.updated,
    datePublished: guide.updated,
    author: { '@type': 'Organization', name: 'Crest Partners' },
    publisher: { '@type': 'Organization', name: 'Crest Partners', url: SITE.url },
    mainEntityOfPage: `${SITE.url.replace(/\/$/, '')}/guides/${guide.slug}`,
  }
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  }

  return (
    <article className="bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* Header */}
      <header className="bg-[#F7FAFB] border-b border-[#D8E2EA]">
        <div className="max-w-3xl mx-auto px-6 py-16 md:py-20">
          <nav className="text-[14px] text-[#5A6A7A] mb-6" aria-label="Breadcrumb">
            <Link href="/guides" className="hover:text-[#2574A7]">Guides</Link> <span aria-hidden="true">/</span> Entity vs EOR
          </nav>
          <h1 className="text-[34px] md:text-[44px] font-bold text-black leading-[1.12] mb-5">{guide.title}</h1>
          <p className="text-[18px] text-[#3E4C59] leading-relaxed mb-6">
            If you want an engineering team in Costa Rica, there are two ways to employ it: through an Employer of
            Record (EOR), or through your own Costa Rican company. This guide compares both — cost, IP, control and
            timelines — so you can choose with the numbers in front of you.
          </p>
          <p className="text-[14px] text-[#5A6A7A]">
            By Crest Partners · Updated November 2026 · {guide.readMinutes} min read
          </p>
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-6 py-12">
        {/* TL;DR */}
        <div className="border border-[#B3D4EC] bg-[#EBF4FA] rounded-[12px] p-6 mb-4">
          <p className="text-[13px] font-bold tracking-widest uppercase text-[#2574A7] mb-3">The short answer</p>
          <UL
            items={[
              <><strong>EOR</strong> is the fastest way to hire one or a few people, or to test the market.</>,
              <><strong>Your own entity</strong> is usually the better choice for a team you plan to keep and grow: no per-head fee, the IP is created inside your company, and you can apply for Free Trade Zone benefits.</>,
              <>The mandatory employer costs (about 36% on top of salary) are the same either way.</>,
            ]}
          />
        </div>

        <H2 id="what-is-an-eor">What an Employer of Record does</H2>
        <P>
          An EOR is a company that legally employs people on your behalf. It signs the employment contract under
          Costa Rica’s Labor Code, registers the employee with the CCSS (the social security fund), runs payroll and
          administers mandatory benefits, while you direct the day-to-day work. In exchange it charges a fee per
          employee, per month — published prices for Costa Rica are typically around <strong>$400–$600</strong>.
        </P>

        <H2 id="what-is-an-entity">What owning your entity means</H2>
        <P>
          With your own entity, your company incorporates a Costa Rican subsidiary — usually a Sociedad Anónima
          (S.A.) or a Sociedad de Responsabilidad Limitada (S.R.L.). Both allow 100% foreign ownership and limited
          liability. Your subsidiary is the employer: the contracts, the payroll and the IP all sit inside your
          company. You then need someone to run the legal, HR, payroll, accounting and compliance layer — in-house or
          with a partner.
        </P>

        <H2 id="comparison">Side-by-side comparison</H2>
        <div className="overflow-x-auto -mx-6 px-6 mb-6">
          <table className="w-full min-w-[560px] border-collapse text-left text-[15px]">
            <thead>
              <tr className="border-b-2 border-[#0E2233]">
                <th className="py-3 pr-4 font-bold text-black w-[30%]"> </th>
                <th className="py-3 pr-4 font-bold text-black">Employer of Record</th>
                <th className="py-3 font-bold text-[#00A79D]">Your own entity</th>
              </tr>
            </thead>
            <tbody>
              {comparison.map(([k, eor, ent]) => (
                <tr key={k} className="border-b border-[#D8E2EA] align-top">
                  <th scope="row" className="py-3 pr-4 font-bold text-black">{k}</th>
                  <td className="py-3 pr-4 text-[#3E4C59]">{eor}</td>
                  <td className="py-3 text-[#3E4C59]">{ent}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <H2 id="cost">The cost math</H2>
        <P>
          Salary and employer costs are the same under both models. The difference is how you pay for the
          infrastructure around them. An EOR fee scales with every hire: at <strong>$500 per employee per month</strong>,
          a 20-person team costs <strong>$120,000 a year in EOR fees alone</strong>. An entity has a one-time setup —
          typically <strong>$2,000–$5,000 in the first year</strong> for a standard S.A. or S.R.L. — plus the cost of
          running it, which does not grow one-for-one with headcount.
        </P>
        <P>Costs you pay either way, on top of gross salary:</P>
        <UL
          items={[
            <><strong>CCSS employer charges: 26.83%</strong> (2026).</>,
            <><strong>Aguinaldo</strong> (mandatory 13th month): about 8.33%.</>,
            <><strong>Work-risk insurance (INS):</strong> around 1%.</>,
            <>Not included: vacation, severance reserve and optional benefits such as private medical insurance.</>,
          ]}
        />
        <P>
          Ending employment without just cause requires notice (up to one month, depending on tenure) and severance
          (<em>cesantía</em>) of up to about eight months of salary for long-tenured employees.
        </P>

        <H2 id="when-eor">When an EOR makes sense</H2>
        <UL
          items={[
            'You are hiring one to a few people.',
            'You are testing Costa Rica before committing.',
            'You need someone to start within days.',
            'The engagement is short-term.',
          ]}
        />

        <H2 id="when-entity">When your own entity makes sense</H2>
        <UL
          items={[
            'You are building a team you plan to keep and grow.',
            'Your code, data or models are core IP you want created inside your own company.',
            'You want the team under your brand and culture, not a provider’s.',
            'You may qualify for Free Trade Zone benefits.',
            'You want the option to run it yourself later without moving every employee.',
          ]}
        />

        <H2 id="setup">How to set up an entity in Costa Rica</H2>
        <ol className="list-decimal pl-6 space-y-2 mb-6 text-[17px] text-[#3E4C59] leading-relaxed">
          <li>Choose the structure (S.A. or S.R.L.) and ownership.</li>
          <li>A Costa Rican notary drafts the incorporation deed.</li>
          <li>File with the National Registry — about 5–7 business days to get the <em>cédula jurídica</em> (corporate ID).</li>
          <li>Register with Hacienda (tax authority) for income tax and VAT.</li>
          <li>File the beneficial-ownership declaration (RTBF) with the Central Bank.</li>
          <li>Open a bank account and register with the CCSS as an employer before the first payroll.</li>
        </ol>
        <P>
          Typical total: <strong>3–6 weeks</strong>. Ongoing obligations include the annual corporate tax, the annual
          income-tax return (even with no revenue), monthly VAT if you sell locally, and keeping corporate books and
          the RTBF up to date.
        </P>

        <H2 id="free-trade-zone">The Free Trade Zone option</H2>
        <P>
          Costa Rica’s Free Zone regime also covers service companies. For a services company inside the Greater
          Metropolitan Area, the income-tax benefit is <strong>0% for years 1–8 and 15% for years 9–12</strong>, plus
          exemptions on imports, local purchases and remittances, among others. Typical requirements: a strategic
          activity, a new investment of at least <strong>USD 150,000</strong> (inside an industrial park), a minimum
          score on PROCOMER’s eligibility index, a monthly fee (0.30% of sales inside a park, minimum USD 200) and a
          guarantee deposit. Admission takes about <strong>three months</strong> on average. Only a company you own can
          apply — an EOR setup cannot.
        </P>

        <H2 id="crest">How Crest Partners does it</H2>
        <P>
          We set up your own legal entity in Costa Rica, build your engineering team under your brand and run payroll,
          HR, accounting and compliance for you — so the team, the IP and the upside stay yours. It’s the ownership of
          an entity with the simplicity of a single partner.
        </P>
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <BookCallLink className="text-center bg-[#2574A7] text-white font-bold text-[15px] px-7 py-3.5 rounded-[10px] hover:bg-[#1f6391] transition-colors">
            Book a 30-min call →
          </BookCallLink>
          <Link
            href="/expansion-plan"
            className="text-center border border-[#D8E2EA] text-[#0E2233] font-bold text-[15px] px-7 py-3.5 rounded-[10px] hover:border-[#2574A7] transition-colors"
          >
            Build your expansion plan →
          </Link>
        </div>
        <P>
          See also: <Link href="/services" className="text-[#2574A7] font-bold hover:underline">Services</Link> ·{' '}
          <Link href="/why-costa-rica" className="text-[#2574A7] font-bold hover:underline">Why Costa Rica</Link> ·{' '}
          <Link href="/case-studies" className="text-[#2574A7] font-bold hover:underline">Case studies</Link>
        </P>

        <H2 id="faq">FAQ</H2>
        <dl className="space-y-6 mb-10">
          {faqs.map((f) => (
            <div key={f.q}>
              <dt className="text-[18px] font-bold text-black mb-2">{f.q}</dt>
              <dd className="text-[17px] text-[#3E4C59] leading-relaxed">{f.a}</dd>
            </div>
          ))}
        </dl>

        <div className="border-t border-[#D8E2EA] pt-8 text-[14px] text-[#5A6A7A] leading-relaxed">
          <p className="font-bold text-[#3E4C59] mb-2">Sources</p>
          <ul className="space-y-1 mb-6">
            <li><a className="underline" href="https://taxsummaries.pwc.com/costa-rica/corporate/other-taxes" target="_blank" rel="noopener noreferrer">PwC Tax Summaries — Costa Rica, other taxes (CCSS employer rate)</a></li>
            <li><a className="underline" href="https://aglegal.com/companies-in-costa-rica/" target="_blank" rel="noopener noreferrer">AG Legal — Company formation in Costa Rica</a></li>
            <li><a className="underline" href="https://procomer.com/wp-content/uploads/2026/01/Free-Zone-Regime-Guide-EN-1.pdf" target="_blank" rel="noopener noreferrer">PROCOMER — Free Zone Regime Guide (2026)</a></li>
            <li><a className="underline" href="https://www.hivedesk.com/compliance/employer-of-record-costa-rica" target="_blank" rel="noopener noreferrer">Hivedesk — Employer of Record in Costa Rica (2026)</a></li>
            <li><a className="underline" href="https://rivermate.com/guides/costa-rica/employment-cost-calculator" target="_blank" rel="noopener noreferrer">Rivermate — Costa Rica employment costs (aguinaldo)</a></li>
          </ul>
          <p>
            This guide is general information, not legal or tax advice. Rates and requirements change — confirm the
            details for your situation with a Costa Rican attorney and tax advisor.
          </p>
        </div>
      </div>
    </article>
  )
}
