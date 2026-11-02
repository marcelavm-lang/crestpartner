import Image from "next/image";

type Person = {
  name: string;
  role: string;
  img: string;
  bio: string;
  expertise: string[];
  credentials: string[];
  /** Optional career path, most recent first: [title, company, years] */
  career?: [string, string, string][];
  linkedin?: string;
};

const cofounders: Person[] = [
  {
    name: "Marcela Villalta",
    role: "Co-founder & CEO",
    img: "/team/marcela-villalta-cutout.webp",
    bio: "25+ years building U.S. technology operations in Costa Rica from the ground up — in leadership roles at TARGUSinfo, Infutor and LTV Co., and through Crest Partners. Across that career she has hired 500+ people, built entire departments and engineering teams from zero, launched data and software products, and grown hubs that went on to exits of up to $400M — with less than 1% involuntary turnover and a 97.6 GPTW Trust Index. MBA, Universidad de Costa Rica. Co-founder of Forward Costa Rica.",
    expertise: ["Operations leadership", "Culture model design", "Inclusive tech education", "HR & people strategy", "Entity setup & management", "U.S. client relations"],
    credentials: ["Business architecture", "Org & culture design", "Nearshore entity model", "Social tech impact"],
    career: [
      ["Co-founder", "Crest Partners", "2006 – present"],
      ["Country Manager", "LTV Co. (f.k.a. BeenVerified)", "2015 – 2025"],
      ["President", "Infutor Data Solutions de Costa Rica", "2007 – 2014"],
      ["Production Manager", "TARGUSinfo (now Neustar)", "2001 – 2007"],
      ["QA Analyst", "Equifax Costa Rica", "1998 – 2001"],
    ],
  },
];

const partners: Person[] = [
  {
    name: "José Villalta",
    role: "Partner & Head of Data Operations",
    img: "/team/jose-villalta-cutout.webp",
    bio: "25+ years building and scaling data operations for U.S. enterprise clients. Grew through every layer of one of Costa Rica's most sophisticated data intelligence operations — from production supervisor to Country Manager.",
    expertise: ["Enterprise data operations", "Product strategy", "Cross-functional technical leadership", "Data architecture & pipelines", "Country operations management", "U.S. enterprise delivery"],
    credentials: ["Data operations strategy", "Enterprise-scale data architecture", "Country-level operations leadership"],
  },
  {
    name: "Roberto Fernandez",
    role: "Partner & CTO",
    img: "/team/roberto-fernandez-cutout.webp",
    bio: "20+ years in software development, data engineering and modern systems architecture. Grew from developer to Director of Engineering and VP of Product Engineering across some of the most data-intensive companies in the U.S. market. Leads all technical delivery and engineering hiring for Crest Partners clients.",
    expertise: ["Software architecture", "Engineering org leadership", "Engineering talent strategy", "Data engineering", "Product engineering leadership", "Cross-border tech delivery"],
    credentials: ["Engineering vision & strategy", "AI strategy & adoption", "Modernization architecture"],
  },
  {
    name: "Gary Walter",
    role: "Strategic Partner",
    img: "/team/gary-walter-cutout.webp",
    bio: "Mid-market acceleration executive with extensive background in general management, strategic planning, SaaS and Big Data. Led Infutor Data Solutions from $1M to $250M — with the Costa Rica team at the core of that growth. Brings the operator perspective of someone who has lived the model from the client side for over a decade.",
    expertise: ["General management", "SaaS & Big Data", "Business development", "Strategic planning", "Private equity & M&A", "Harvard KSC certified"],
    credentials: ["SaaS & Big Data", "Private equity", "M&A", "Harvard KSC certified"],
  },
  {
    name: "Marco López Volio",
    role: "Legal Partner · Zurcher Odio & Raven",
    img: "/team/marco-lopez-cutout.webp",
    bio: "Partner & Director of the IP & Regulatory Department at Zurcher Odio & Raven — one of Costa Rica's most recognized law firms. 20+ years advising multinational companies in regulatory, antitrust, intellectual property, data privacy and compliance. All Crest Partners client entities are backed by his firm.",
    expertise: ["Entity setup & corporate law", "IP & trademark protection", "Antitrust & competition", "Labor & employment law", "Data privacy & regulatory", "Commercial contracts"],
    credentials: ["Chambers & Partners IP", "Chambers & Partners Antitrust", "Leaders League Band 1 IP"],
  },
];

function Row({ p, index, tag }: { p: Person; index: number; tag: string }) {
  const flip = index % 2 === 0; // alternate portrait side on desktop
  return (
    <article className={`grid items-center gap-10 lg:gap-20 ${flip ? "lg:grid-cols-[1fr_400px]" : "lg:grid-cols-[400px_1fr]"}`}>
      {/* 4:5 portrait frame (400×500 on desktop); whole photo, no zoom, resting on the bottom edge */}
      <div className={`relative aspect-[4/5] w-full max-w-[320px] lg:max-w-none overflow-hidden rounded-sm bg-[#1B2B3A] ${flip ? "lg:order-2" : ""}`}>
        <Image src={p.img} alt={p.name} fill sizes="(min-width:1024px) 400px, 320px" className="object-contain object-bottom" />
      </div>
      <div className="flex flex-col gap-5">
        <p className="text-[13px] font-semibold tracking-[0.16em] text-[#2BD4B4]">
          {String(index).padStart(2, "0")} — {tag}
        </p>
        <div className="flex flex-col gap-2.5">
          <h3 className="text-4xl font-bold leading-none text-white lg:text-[40px]">{p.name}</h3>
          <p className="text-base font-medium text-[#7FD8CC]">{p.role}</p>
        </div>
        <p className="text-base font-normal leading-[1.6] text-[#B9C6D2]">{p.bio}</p>
        <div className="h-px bg-[#26394A]" />
        <ul className="grid gap-x-8 gap-y-2.5 sm:grid-cols-2">
          {p.expertise.map((e) => (
            <li key={e} className="flex items-baseline gap-3 text-[15px] text-[#D5DEE6]">
              <span className="h-0.5 w-3.5 shrink-0 -translate-y-1 bg-[#2BD4B4]" aria-hidden />
              {e}
            </li>
          ))}
        </ul>
        {p.career && (
          <div className="flex flex-col gap-2.5">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#7E90A1]">Career</p>
            <ol className="flex flex-col">
              {p.career.map(([title, company, years]) => (
                <li
                  key={company}
                  className="grid grid-cols-[1fr_auto] gap-x-4 border-t border-[#26394A] py-2 text-[15px] first:border-t-0 first:pt-0"
                >
                  <span className="text-[#D5DEE6]">
                    <span className="font-semibold text-white">{title}</span> · {company}
                  </span>
                  <span className="whitespace-nowrap text-[#7E90A1]">{years}</span>
                </li>
              ))}
            </ol>
          </div>
        )}
        {p.credentials.length > 0 && (
          <p className="text-xs font-semibold uppercase leading-loose tracking-[0.12em] text-[#7E90A1]">
            {p.credentials.join(" · ")}
          </p>
        )}
      </div>
    </article>
  );
}

function Section({ label, people, start, tag }: { label: string; people: Person[]; start: number; tag: string }) {
  return (
    <div className="flex flex-col gap-14">
      <div className="flex items-center gap-5">
        <h2 className="text-[13px] font-semibold tracking-[0.16em] text-[#7E90A1]">{label}</h2>
        <div className="h-px flex-1 bg-[#26394A]" />
      </div>
      <div className="flex flex-col gap-24 lg:gap-[120px]">
        {people.map((p, i) => (
          <Row key={p.name} p={p} index={start + i} tag={tag} />
        ))}
      </div>
    </div>
  );
}

export default function TeamEditorial() {
  return (
    <section className="bg-[#0F1A24] text-white font-spartan">
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-20 lg:pb-36 lg:pt-32">
        <div className="mb-24 flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
          <div className="flex flex-col gap-5">
            <p className="text-[13px] font-bold tracking-[0.16em] text-[#2BD4B4]">OUR PEOPLE</p>
            <h2 className="text-5xl font-bold leading-[1.02] lg:text-[64px]">
              Built by operators.
              <br />
              Not by a sales team.
            </h2>
          </div>
          <p className="max-w-[420px] text-lg font-normal leading-relaxed text-[#B9C6D2]">
            A founder-led team with 20 years building Costa Rica&apos;s tech ecosystem from the inside — and the partners who back every entity we run.
          </p>
        </div>
        <div className="flex flex-col gap-[140px]">
          <Section label="CO-FOUNDER" people={cofounders} start={1} tag="CO-FOUNDER" />
          <Section label="PARTNERS" people={partners} start={cofounders.length + 1} tag="PARTNER" />
        </div>
      </div>
    </section>
  );
}
