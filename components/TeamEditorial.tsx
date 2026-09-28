import Image from "next/image";

type Person = {
  name: string;
  role: string;
  img: string;
  bio: string;
  expertise: string[];
  credentials: string[];
  linkedin?: string;
};

const cofounders: Person[] = [
  {
    name: "Marcela Villalta",
    role: "Co-founder & CEO",
    img: "/team/marcela-villalta-cutout.webp",
    bio: "25+ years building tech operations in Costa Rica for U.S. companies. Architect of the culture model behind less than 1% turnover and a 97.6 GPTW Trust Index — among the highest scores globally. Former Country Manager at LTV Co. (f.k.a. BeenVerified). Co-founder of Forward Costa Rica.",
    expertise: ["Operations leadership", "Culture model design", "Inclusive tech education", "HR & people strategy", "Entity setup & management", "U.S. client relations"],
    credentials: ["Business architecture", "Org & culture design", "Nearshore entity model", "Social tech impact"],
  },
  {
    name: "José Villalta",
    role: "Co-founder & Head of Data Operations",
    img: "/team/jose-villalta-cutout.webp",
    bio: "25+ years building and scaling data operations for U.S. enterprise clients. Grew through every layer of one of Costa Rica's most sophisticated data intelligence operations — from production supervisor to Country Manager.",
    expertise: ["Enterprise data operations", "Product strategy", "Cross-functional technical leadership", "Data architecture & pipelines", "Country operations management", "U.S. enterprise delivery"],
    credentials: ["Data operations strategy", "Enterprise-scale data architecture", "Country-level operations leadership"],
  },
  {
    name: "Roberto Fernandez",
    role: "Co-founder & CTO",
    img: "/team/roberto-fernandez-cutout.webp",
    bio: "20+ years in software development, data engineering and modern systems architecture. Grew from developer to Director of Engineering and VP of Product Engineering across some of the most data-intensive companies in the U.S. market. Leads all technical delivery and engineering hiring for Crest Partners clients.",
    expertise: ["Software architecture", "Engineering org leadership", "Engineering talent strategy", "Data engineering", "Product engineering leadership", "Cross-border tech delivery"],
    credentials: ["Engineering vision & strategy", "AI strategy & adoption", "Modernization architecture"],
  },
];

const partners: Person[] = [
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
    <article className="grid items-center gap-10 lg:grid-cols-[480px_1fr] lg:gap-[88px]">
      <div className={`relative aspect-[4/5] w-full overflow-hidden rounded-sm bg-[#1B2B3A] ${flip ? "lg:order-2" : ""}`}>
        <Image src={p.img} alt={p.name} fill sizes="(min-width:1024px) 480px, 100vw" className="object-cover object-bottom" />
      </div>
      <div className="flex flex-col gap-7">
        <p className="text-sm font-semibold tracking-[0.16em] text-[#2BD4B4]">
          {String(index).padStart(2, "0")} — {tag}
        </p>
        <div className="flex flex-col gap-2.5">
          <h3 className="text-4xl font-bold leading-none text-white lg:text-[52px]">{p.name}</h3>
          <p className="text-lg font-medium text-[#7FD8CC]">{p.role}</p>
        </div>
        <p className="text-lg font-normal leading-relaxed text-[#B9C6D2]">{p.bio}</p>
        <div className="h-px bg-[#26394A]" />
        <ul className="grid gap-x-8 gap-y-3.5 sm:grid-cols-2">
          {p.expertise.map((e) => (
            <li key={e} className="flex items-baseline gap-3 text-base text-[#D5DEE6]">
              <span className="h-0.5 w-3.5 shrink-0 -translate-y-1 bg-[#2BD4B4]" aria-hidden />
              {e}
            </li>
          ))}
        </ul>
        <p className="text-xs font-semibold uppercase leading-loose tracking-[0.12em] text-[#7E90A1]">
          {p.credentials.join(" · ")}
        </p>
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
            Three co-founders with 25+ years building Costa Rica&apos;s tech ecosystem from the inside — and the partners who back every entity we run.
          </p>
        </div>
        <div className="flex flex-col gap-[140px]">
          <Section label="CO-FOUNDERS" people={cofounders} start={1} tag="CO-FOUNDER" />
          <Section label="PARTNERS" people={partners} start={cofounders.length + 1} tag="PARTNER" />
        </div>
      </div>
    </section>
  );
}
