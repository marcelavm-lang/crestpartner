'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import Link from 'next/link'

/* ─────────────────────────────────────────
   Animation variants
───────────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
}
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
}
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
}

/* ─────────────────────────────────────────
   Scroll-triggered section wrapper
───────────────────────────────────────── */
function Section({
  id,
  className = '',
  children,
}: {
  id?: string
  className?: string
  children: React.ReactNode
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.section
      id={id}
      ref={ref}
      variants={stagger}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      className={className}
    >
      {children}
    </motion.section>
  )
}

/* ─────────────────────────────────────────
   Inline icons
───────────────────────────────────────── */
function CheckIcon() {
  return (
    <span className="shrink-0 w-5 h-5 rounded-full bg-[#00A79D]/12 flex items-center justify-center">
      <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
        <path d="M1 4l3 3 5-6" stroke="#00A79D" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  )
}

function XIcon() {
  return (
    <span className="shrink-0 w-5 h-5 rounded-full bg-[#F3F4F6] flex items-center justify-center">
      <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
        <path d="M1 7l6-6M7 7L1 1" stroke="#9CA3AF" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    </span>
  )
}

function ArrowRight() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

type IconName = 'clock' | 'users' | 'shield' | 'globe' | 'chat' | 'map'

function FeatureIcon({ name }: { name: IconName }) {
  const icons: Record<IconName, React.ReactNode> = {
    clock: (
      <>
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </>
    ),
    users: (
      <>
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </>
    ),
    shield: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
    globe: (
      <>
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" />
      </>
    ),
    chat: <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />,
    map: (
      <>
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
        <circle cx="12" cy="10" r="3" />
      </>
    ),
  }
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {icons[name]}
    </svg>
  )
}

/* ─────────────────────────────────────────
   Marquee companies
───────────────────────────────────────── */
const marqueeItems = [
  'TargusInfo', 'Verisk', 'LTV Co.', '66degrees', 'Think Unlimited', 'Strategio',
  'TargusInfo', 'Verisk', 'LTV Co.', '66degrees', 'Think Unlimited', 'Strategio',
]

/* ─────────────────────────────────────────
   Page
───────────────────────────────────────── */
export default function LandingPage() {
  const [form, setForm] = useState({ name: '', company: '', email: '', teamSize: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    await new Promise(r => setTimeout(r, 900))
    setSubmitted(true)
    setLoading(false)
  }

  return (
    <div className="bg-white overflow-x-hidden">

      {/* ══════════════════════════════════════
          HERO
      ══════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-white">
        {/* Dot grid */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(#CBD5E1 1px, transparent 1px)',
            backgroundSize: '26px 26px',
            opacity: 0.38,
          }}
        />
        {/* Gradient orb */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/3 -translate-y-1/3 w-[1000px] h-[800px] pointer-events-none rounded-full"
          style={{
            background:
              'radial-gradient(ellipse, rgba(37,116,167,0.10) 0%, rgba(0,167,157,0.05) 45%, transparent 70%)',
          }}
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="relative max-w-7xl mx-auto px-6 pt-14 pb-24"
        >
          {/* Eyebrow */}
          <motion.div variants={fadeUp} className="flex items-center gap-3 mb-8">
            <div className="h-px w-7 bg-[#2574A7]" />
            <span className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#2574A7]">
              Nearshore Engineering Operations — Costa Rica
            </span>
          </motion.div>

          {/* H1 */}
          <motion.h1
            variants={fadeUp}
            className="text-[42px] sm:text-[54px] md:text-[66px] font-bold leading-[1.06] tracking-[-0.025em] text-[#0A0F1E] max-w-4xl mb-6"
          >
            Build your engineering hub
            <br className="hidden sm:block" /> in Costa Rica —{' '}
            <span className="text-[#2574A7]">without losing control.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={fadeUp}
            className="text-[18px] md:text-[20px] text-[#6B7280] font-light leading-relaxed max-w-2xl mb-10"
          >
            We help US companies launch, hire, and operate high-performing engineering teams in Costa Rica —
            fully owned, fully integrated, and built for long-term scale.
          </motion.p>

          {/* Bullets */}
          <motion.ul variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-11 max-w-2xl">
            {[
              'Launch in as little as 30 days',
              'Reduce engineering costs by 30–50%',
              'Full legal, HR, payroll & operational support',
              'Industry-leading retention & long-term stability',
            ].map(item => (
              <motion.li key={item} variants={fadeUp} className="flex items-center gap-3">
                <CheckIcon />
                <span className="text-[14px] text-[#374151] font-medium">{item}</span>
              </motion.li>
            ))}
          </motion.ul>

          {/* CTAs */}
          <motion.div variants={fadeUp} className="flex flex-wrap gap-3 mb-16">
            <a
              href="#get-plan"
              className="inline-flex items-center gap-2 bg-[#2574A7] text-white font-bold text-[14px] px-7 py-3.5 rounded-[10px] hover:bg-[#1d5f8a] transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-[#2574A7]/25"
            >
              Get your expansion plan
              <ArrowRight />
            </a>
            <a
              href="/contact"
              className="inline-flex items-center bg-white border border-[#D1D5DB] text-[#0A0F1E] font-bold text-[14px] px-7 py-3.5 rounded-[10px] hover:border-[#2574A7] hover:text-[#2574A7] transition-all duration-200"
            >
              Schedule a call
            </a>
          </motion.div>

          {/* Trust strip */}
          <motion.div variants={fadeIn}>
            <p className="text-[11px] font-bold tracking-[0.15em] uppercase text-[#9CA3AF] mb-4">
              Trusted by leading tech companies
            </p>
            <div className="overflow-hidden">
              <div className="flex animate-scroll gap-2.5 w-max">
                {marqueeItems.map((name, i) => (
                  <span
                    key={i}
                    className="text-[12px] font-semibold px-4 py-2 border border-[#E5E7EB] rounded-full text-[#6B7280] bg-white whitespace-nowrap"
                  >
                    {name}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ══════════════════════════════════════
          PROBLEM
      ══════════════════════════════════════ */}
      <Section className="bg-[#F9FAFB] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div variants={fadeUp} className="mb-16">
            <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#00A79D] mb-4">The problem</p>
            <h2 className="text-[32px] md:text-[44px] font-bold text-[#0A0F1E] leading-tight tracking-tight max-w-2xl">
              Why companies are rethinking traditional outsourcing.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
            {/* Traditional */}
            <motion.div
              variants={fadeUp}
              className="bg-white border border-[#E5E7EB] rounded-2xl p-8"
            >
              <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#9CA3AF] mb-7">
                Traditional Outsourcing
              </p>
              <ul className="space-y-4">
                {[
                  'Shared resources — not your team',
                  'High turnover, constant disruption',
                  'Limited operational visibility',
                  'Weak cultural integration',
                  'Permanent vendor dependency',
                ].map(item => (
                  <li key={item} className="flex items-start gap-3">
                    <XIcon />
                    <span className="text-[14px] text-[#6B7280] font-light leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Crest */}
            <motion.div
              variants={fadeUp}
              className="bg-white border border-[#00A79D]/25 rounded-2xl p-8 relative overflow-hidden"
            >
              <div
                className="absolute top-0 right-0 w-60 h-60 pointer-events-none"
                style={{
                  background: 'radial-gradient(ellipse, rgba(0,167,157,0.07) 0%, transparent 70%)',
                  transform: 'translate(30%, -30%)',
                }}
              />
              <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#00A79D] mb-7">
                Crest Partners Model
              </p>
              <ul className="space-y-4">
                {[
                  'Dedicated teams — owned by you',
                  'Full operational ownership & control',
                  'Long-term retention under 1%',
                  'Direct cultural & brand integration',
                  'Full transparency across operations',
                ].map(item => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckIcon />
                    <span className="text-[14px] text-[#0A0F1E] font-medium leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <motion.div
            variants={fadeUp}
            className="border-y border-[#E5E7EB] py-8 text-center"
          >
            <p className="text-[20px] md:text-[26px] font-bold text-[#0A0F1E] tracking-tight">
              This is not outsourcing.{' '}
              <span className="text-[#2574A7]">This is your operation.</span>
            </p>
          </motion.div>
        </div>
      </Section>

      {/* ══════════════════════════════════════
          HOW IT WORKS
      ══════════════════════════════════════ */}
      <Section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div variants={fadeUp} className="mb-16">
            <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#2574A7] mb-4">How it works</p>
            <h2 className="text-[32px] md:text-[44px] font-bold text-[#0A0F1E] leading-tight tracking-tight max-w-2xl">
              Your Costa Rica engineering hub — step by step.
            </h2>
          </motion.div>

          <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                num: '01',
                title: 'Launch',
                desc: 'Legal entity setup, payroll infrastructure, compliance, and full operational back office — your operation live before your first hire.',
                tag: 'Operational in 30 days',
                color: '#2574A7',
                bg: '#EBF4FA',
              },
              {
                num: '02',
                title: 'Build',
                desc: 'Recruit, onboard, and retain high-performing engineering talent directly under your brand — tested, integrated, yours.',
                tag: '<1% turnover',
                color: '#00A79D',
                bg: '#E6F7F6',
              },
              {
                num: '03',
                title: 'Operate',
                desc: 'HR, payroll, legal, compliance, and retention programs — the full operational layer, completely handled. You focus on engineering.',
                tag: 'Full accountability',
                color: '#2574A7',
                bg: '#EBF4FA',
              },
            ].map(card => (
              <motion.div
                key={card.num}
                variants={fadeUp}
                whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(0,0,0,0.07)', transition: { duration: 0.2 } }}
                className="border border-[#E5E7EB] rounded-2xl p-8 cursor-default group transition-colors hover:border-[#2574A7]/30"
              >
                <p
                  className="text-[11px] font-bold tracking-[0.18em] uppercase mb-6"
                  style={{ color: card.color }}
                >
                  {card.num}
                </p>
                <h3 className="text-[24px] font-bold text-[#0A0F1E] mb-4 group-hover:text-[#2574A7] transition-colors">
                  {card.title}
                </h3>
                <p className="text-[14px] text-[#6B7280] font-light leading-relaxed mb-8">{card.desc}</p>
                <span
                  className="inline-block text-[11px] font-bold tracking-wide px-3 py-1.5 rounded-[6px]"
                  style={{ color: card.color, background: card.bg }}
                >
                  {card.tag}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* ══════════════════════════════════════
          WHY COSTA RICA (dark)
      ══════════════════════════════════════ */}
      <Section className="bg-[#0A0F1E] py-24 relative overflow-hidden">
        <div
          className="absolute top-0 right-0 w-[700px] h-[700px] pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse, rgba(37,116,167,0.14) 0%, transparent 65%)',
            transform: 'translate(30%, -30%)',
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-[500px] h-[500px] pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse, rgba(0,167,157,0.09) 0%, transparent 65%)',
            transform: 'translate(-20%, 20%)',
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div variants={fadeUp} className="mb-16">
            <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#00A79D] mb-4">Why Costa Rica</p>
            <h2 className="text-[32px] md:text-[44px] font-bold text-white leading-tight tracking-tight max-w-2xl">
              Why leading companies build in Costa Rica.
            </h2>
          </motion.div>

          <motion.div variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {([
              {
                icon: 'clock' as IconName,
                title: 'US Time Zone Alignment',
                desc: 'Full overlap with US business hours. Real-time collaboration every day. No async delays or overnight handoffs.',
              },
              {
                icon: 'users' as IconName,
                title: 'Exceptional Engineering Talent',
                desc: 'World-class universities, high English proficiency, and a tech culture built for long-term ownership and performance.',
              },
              {
                icon: 'shield' as IconName,
                title: 'Industry-Leading Retention',
                desc: 'Less than 1% involuntary turnover vs. 13–25% industry average. Your people stay and grow with your company.',
              },
              {
                icon: 'globe' as IconName,
                title: 'Stable Business Environment',
                desc: '75+ years of uninterrupted democracy. One of the most reliable legal and business frameworks in Latin America.',
              },
              {
                icon: 'chat' as IconName,
                title: 'English Proficiency',
                desc: 'Ranked #1 in Central America. Engineers who communicate clearly, write good documentation, and integrate seamlessly.',
              },
              {
                icon: 'map' as IconName,
                title: 'Strategic LATAM Location',
                desc: 'Central time zone, direct flights to major US cities, and the natural hub for regional operations across Latin America.',
              },
            ] as { icon: IconName; title: string; desc: string }[]).map(f => (
              <motion.div
                key={f.title}
                variants={fadeUp}
                className="rounded-2xl p-7 transition-all duration-300 group hover:bg-white/5"
                style={{ border: '1px solid rgba(255,255,255,0.08)' }}
              >
                <div className="text-[#00A79D] mb-5">
                  <FeatureIcon name={f.icon} />
                </div>
                <h3 className="text-[15px] font-bold text-white mb-3">{f.title}</h3>
                <p className="text-[13px] font-light leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)' }}>
                  {f.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* ══════════════════════════════════════
          RESULTS
      ══════════════════════════════════════ */}
      <Section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div variants={fadeUp} className="mb-16">
            <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#2574A7] mb-4">Track record</p>
            <h2 className="text-[32px] md:text-[44px] font-bold text-[#0A0F1E] leading-tight tracking-tight max-w-2xl">
              Proven operational experience.
            </h2>
          </motion.div>

          <motion.div variants={stagger} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { val: '25+', label: 'Years operating in Costa Rica', color: '#2574A7' },
              { val: '500+', label: 'Professionals hired and retained', color: '#2574A7' },
              { val: '$1B+', label: 'Client operations built and scaled', color: '#00A79D' },
              { val: '<1%', label: 'Industry-leading attrition rate', color: '#00A79D' },
              { val: '97.6', label: 'Great Place to Work Trust Score', color: '#2574A7' },
            ].map(m => (
              <motion.div
                key={m.val}
                variants={fadeUp}
                className="bg-[#F9FAFB] border border-[#E5E7EB] rounded-2xl p-6 hover:border-[#2574A7]/30 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300"
              >
                <p
                  className="text-[46px] md:text-[52px] font-bold leading-none mb-2 tracking-tight"
                  style={{ color: m.color }}
                >
                  {m.val}
                </p>
                <p className="text-[12px] text-[#6B7280] font-light leading-snug">{m.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* ══════════════════════════════════════
          CASE STUDIES
      ══════════════════════════════════════ */}
      <Section className="bg-[#F9FAFB] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div variants={fadeUp} className="mb-16">
            <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#00A79D] mb-4">Case studies</p>
            <h2 className="text-[32px] md:text-[44px] font-bold text-[#0A0F1E] leading-tight tracking-tight max-w-2xl">
              Real companies. Real operations.
            </h2>
          </motion.div>

          <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                company: 'Verisk',
                badge: 'Consumer Identity · Data',
                period: '2007–2013',
                metric: '$250M exit',
                desc: 'Scaled long-term Costa Rica operations supporting global data and analytics teams — from zero to a full operational hub.',
                color: '#2574A7',
              },
              {
                company: '66degrees',
                badge: 'Cloud & DevOps',
                period: '2014–present',
                metric: '0% turnover · 11+ years',
                desc: 'Built and operated cloud engineering with long-term technical retention. Google Cloud Partner of the Year 2024 & 2025.',
                color: '#00A79D',
              },
              {
                company: 'Strategio',
                badge: 'Talent Operations',
                period: '2025–present',
                metric: '8 professionals',
                desc: 'Supported operational scaling and hiring infrastructure for a growth-stage talent company expanding into Costa Rica.',
                color: '#2574A7',
              },
            ].map(c => (
              <motion.div
                key={c.company}
                variants={fadeUp}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="bg-white border border-[#E5E7EB] rounded-2xl p-8 hover:border-[#2574A7]/25 hover:shadow-xl hover:shadow-gray-100 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-[6px] bg-[#F4F7FA] text-[#6B7280]">
                    {c.badge}
                  </span>
                  <span className="text-[12px] text-[#9CA3AF]">{c.period}</span>
                </div>
                <h3 className="text-[28px] font-bold text-[#0A0F1E] mb-4 tracking-tight">{c.company}</h3>
                <p className="text-[14px] text-[#6B7280] font-light leading-relaxed mb-8">{c.desc}</p>
                <div className="pt-5 border-t border-[#F3F4F6]">
                  <span className="text-[14px] font-bold" style={{ color: c.color }}>
                    {c.metric}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={fadeUp} className="mt-10">
            <Link
              href="/case-studies"
              className="text-[14px] font-bold text-[#2574A7] hover:underline inline-flex items-center gap-1.5"
            >
              See all case studies <ArrowRight />
            </Link>
          </motion.div>
        </div>
      </Section>

      {/* ══════════════════════════════════════
          FINAL CTA / FORM
      ══════════════════════════════════════ */}
      <Section id="get-plan" className="bg-[#0A0F1E] py-24 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(rgba(255,255,255,0.025) 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />
        <div
          className="absolute top-0 right-0 w-[800px] h-[700px] pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse, rgba(37,116,167,0.2) 0%, transparent 60%)',
            transform: 'translate(35%, -35%)',
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">

            {/* Left */}
            <motion.div variants={fadeUp}>
              <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#00A79D] mb-5">Get started</p>
              <h2 className="text-[32px] md:text-[44px] font-bold text-white leading-tight tracking-tight mb-6">
                Ready to build your engineering hub in Costa Rica?
              </h2>
              <p
                className="text-[17px] font-light leading-relaxed mb-10"
                style={{ color: 'rgba(255,255,255,0.5)' }}
              >
                Tell us about your company and we'll design a tailored expansion plan in 48 hours.
              </p>
              <div className="space-y-4">
                {[
                  'Dedicated team under your brand',
                  'Full legal & operational setup',
                  'Long-term retention model built in',
                  'One partner, complete accountability',
                ].map(b => (
                  <div key={b} className="flex items-center gap-3">
                    <CheckIcon />
                    <span className="text-[14px] font-light" style={{ color: 'rgba(255,255,255,0.6)' }}>
                      {b}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right: Form */}
            <motion.div variants={fadeUp}>
              {submitted ? (
                <div
                  className="rounded-2xl p-10 text-center"
                  style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}
                >
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-6"
                    style={{ background: 'rgba(0,167,157,0.15)' }}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00A79D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h3 className="text-[22px] font-bold text-white mb-3">We'll be in touch within 48 hours.</h3>
                  <p className="text-[14px] font-light" style={{ color: 'rgba(255,255,255,0.45)' }}>
                    Our team will review your information and reach out with a tailored expansion plan.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="rounded-2xl p-8"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.09)' }}
                >
                  <div className="space-y-5 mb-6">
                    {[
                      { name: 'name', label: 'Full name', type: 'text', placeholder: 'Jane Smith' },
                      { name: 'company', label: 'Company', type: 'text', placeholder: 'Acme Inc.' },
                      { name: 'email', label: 'Work email', type: 'email', placeholder: 'jane@acme.com' },
                    ].map(field => (
                      <div key={field.name}>
                        <label
                          className="block text-[11px] font-bold tracking-[0.12em] uppercase mb-2"
                          style={{ color: 'rgba(255,255,255,0.45)' }}
                        >
                          {field.label}
                        </label>
                        <input
                          type={field.type}
                          name={field.name}
                          value={(form as Record<string, string>)[field.name]}
                          onChange={handleChange}
                          placeholder={field.placeholder}
                          required
                          className="w-full rounded-[10px] px-4 py-3 text-[14px] text-white placeholder-white/20 focus:outline-none transition-all"
                          style={{
                            background: 'rgba(255,255,255,0.07)',
                            border: '1px solid rgba(255,255,255,0.12)',
                          }}
                          onFocus={e => { (e.target as HTMLInputElement).style.borderColor = '#2574A7' }}
                          onBlur={e => { (e.target as HTMLInputElement).style.borderColor = 'rgba(255,255,255,0.12)' }}
                        />
                      </div>
                    ))}

                    <div>
                      <label
                        className="block text-[11px] font-bold tracking-[0.12em] uppercase mb-2"
                        style={{ color: 'rgba(255,255,255,0.45)' }}
                      >
                        Team size
                      </label>
                      <select
                        name="teamSize"
                        value={form.teamSize}
                        onChange={handleChange}
                        required
                        className="w-full rounded-[10px] px-4 py-3 text-[14px] focus:outline-none transition-all"
                        style={{
                          background: 'rgba(255,255,255,0.07)',
                          border: '1px solid rgba(255,255,255,0.12)',
                          color: form.teamSize ? 'white' : 'rgba(255,255,255,0.25)',
                        }}
                      >
                        <option value="" disabled>Select team size</option>
                        <option value="1-10" style={{ background: '#1E293B', color: '#fff' }}>1–10 people</option>
                        <option value="11-50" style={{ background: '#1E293B', color: '#fff' }}>11–50 people</option>
                        <option value="51-200" style={{ background: '#1E293B', color: '#fff' }}>51–200 people</option>
                        <option value="200+" style={{ background: '#1E293B', color: '#fff' }}>200+ people</option>
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full font-bold text-[14px] py-4 rounded-[10px] transition-all duration-200 mb-4 disabled:opacity-60 hover:-translate-y-0.5"
                    style={{
                      background: '#2574A7',
                      color: 'white',
                      boxShadow: '0 8px 28px rgba(37,116,167,0.35)',
                    }}
                  >
                    {loading ? 'Sending…' : 'Get my expansion plan →'}
                  </button>

                  <p className="text-center text-[12px]" style={{ color: 'rgba(255,255,255,0.3)' }}>
                    Or{' '}
                    <a href="/contact" className="underline hover:opacity-60 transition-opacity">
                      schedule a call
                    </a>{' '}
                    with our team
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </Section>

      {/* ══════════════════════════════════════
          FOOTER
      ══════════════════════════════════════ */}
      <footer className="bg-white border-t border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <p className="text-[14px] font-bold text-[#0A0F1E] mb-2">Crest Partners</p>
              <p className="text-[13px] text-[#6B7280] font-light max-w-md leading-relaxed">
                We help technology companies build and scale engineering operations in Costa Rica —
                fully owned, long-term, and built to last.
              </p>
            </div>
            <div className="flex flex-wrap gap-6">
              <a href="#get-plan" className="text-[13px] font-bold text-[#2574A7] hover:underline">
                Get expansion plan
              </a>
              <a href="/contact" className="text-[13px] text-[#6B7280] hover:text-[#2574A7] transition-colors">
                Schedule a call
              </a>
              <Link href="/case-studies" className="text-[13px] text-[#6B7280] hover:text-[#2574A7] transition-colors">
                Case studies
              </Link>
            </div>
          </div>
          <div className="mt-10 pt-6 border-t border-[#F3F4F6]">
            <p className="text-[11px] text-[#9CA3AF]">© 2025 Crest Partners · San José, Costa Rica</p>
          </div>
        </div>
      </footer>

      {/* Mobile sticky CTA */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-t border-[#E5E7EB] px-4 py-3 flex gap-2.5 shadow-xl">
        <a
          href="#get-plan"
          className="flex-1 bg-[#2574A7] text-white text-[13px] font-bold py-3 rounded-[8px] text-center"
        >
          Get expansion plan
        </a>
        <a
          href="/contact"
          className="px-5 border border-[#D1D5DB] text-[#0A0F1E] text-[13px] font-bold py-3 rounded-[8px] whitespace-nowrap"
        >
          Schedule call
        </a>
      </div>
    </div>
  )
}
