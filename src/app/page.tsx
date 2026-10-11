import Image from "next/image";
import Reveal from "./reveal";

const links = {
  email: "mailto:emmanuelmpamugo2002@gmail.com",
  github: "https://github.com/ifeanyiiiiiiii",
  linkedin: "https://www.linkedin.com/in/emmanuel-mpamugo-2b73872b7/",
  cv: "/cv.pdf",
};

type Project = {
  name: string;
  tagline: string;
  url?: string;
  image?: string;
  mock?: "dashboard" | "portal" | "phone";
  role: string;
  points: string[];
  stack: string[];
};

const work: Project[] = [
  {
    name: "Giro Pay Admin Dashboard",
    tagline: "Internal operations console for a Nigerian payments platform",
    mock: "dashboard",
    role: "Built v2 from scaffold to production",
    points: [
      "Accounts, businesses, transactions, analytics, wallets and admin-role modules, all wired to live APIs.",
      "Wallet withdraw / freeze / unfreeze, bank lookup, withdrawal fee quotes and custom fee management.",
      "Clickable analytics charts that open pre-filtered transaction views, debounced search, server pagination, dark mode.",
      "Caught a kobo-to-naira bug that showed analytics at 100× their real value.",
    ],
    stack: [
      "Next.js 14",
      "TypeScript",
      "TanStack Query",
      "Zustand",
      "Ant Design",
    ],
  },
  {
    name: "Giro Website",
    tagline: "Marketing site for the Giro payments API",
    url: "https://girostack.com/",
    image: "/projects/giro.png",
    role: "Built the redesign from Figma",
    points: [
      "Pixel-perfect responsive layout with an animated mobile menu.",
      "Collections and Disbursement product pages and a pricing calculator.",
      "System-aware dark mode; containerised with Docker.",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Docker"],
  },
  {
    name: "myStash Website & Loan Application",
    tagline: "Savings, investment and lending product site",
    url: "https://mystashapp.com/",
    image: "/projects/mystash.png",
    role: "Sole developer",
    points: [
      "Landing and product pages, fully responsive.",
      "Multi-step online loan application with webcam photo capture, submitted to the lending API.",
      "Enquiry form with mail delivery and deep links into the investment portal.",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    name: "myStash Investment Portal",
    tagline: "Customer web portal for investment plans",
    mock: "portal",
    role: "Lead frontend contributor",
    points: [
      "Forgot-password and 2-step verification flows, device registration.",
      "Plan creation, rollover and liquidation settings, transaction PIN and bank selection.",
      "Portfolio performance graphs and downloadable PDF statements.",
    ],
    stack: ["Next.js", "TypeScript", "Zustand", "React Hook Form", "Recharts"],
  },
  {
    name: "Bell Fields Apartments",
    tagline: "Booking site for serviced apartments in Ikeja GRA",
    url: "https://bellfieldsapartments.africa/",
    image: "/projects/bellfields.png",
    role: "Payments integration",
    points: [
      "Integrated Giro payments into the booking flow: payment routing and amount confirmation.",
      "Fixed the booking API in the client's admin dashboard.",
    ],
    stack: ["Next.js", "TypeScript", "Angular"],
  },
];

const personal: Project[] = [
  {
    name: "BiteTrail",
    tagline: "Discover and share great meals near you",
    url: "https://bitetrail.edatsu.com/",
    image: "/projects/bitetrail.png",
    role: "Personal project",
    points: [
      "Community app to log and review food spots, from restaurants to street vendors.",
      "Authentication, geo-tagged locations, secure image uploads and an installable PWA.",
      "Companion mobile app built with Expo.",
    ],
    stack: ["Next.js", "React", "React Native", "Expo"],
  },
  {
    name: "Habit Tracker",
    tagline: "Full-stack mobile habit tracking app",
    url: "https://github.com/ifeanyiiiiiiii/habit-tracker",
    mock: "phone",
    role: "Personal project",
    points: [
      "Cross-platform app with persisted state and EAS builds.",
      "Custom Laravel REST API backend, containerised with Docker.",
    ],
    stack: ["React Native", "Expo Router", "NativeWind", "Zustand", "Laravel"],
  },
];

const skills = [
  ["Core", "TypeScript, JavaScript, React, Next.js, React Native, Expo"],
  [
    "UI & state",
    "Tailwind CSS, Ant Design, shadcn/ui, TanStack Query, Zustand, Redux, React Hook Form, Zod",
  ],
  [
    "Data & auth",
    "REST APIs, Chart.js, Recharts, PDF export, JWT sessions, 2FA, protected routes",
  ],
  ["Tooling", "Git, Vitest, ESLint, Docker, Vercel, Netlify, Postman"],
];

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-line px-2.5 py-0.5 font-mono text-xs text-muted">
      {children}
    </span>
  );
}

const bar = "rounded bg-fg/10";

function Mock({ kind }: { kind: "dashboard" | "portal" | "phone" }) {
  const label =
    kind === "phone"
      ? "Mobile app · source on GitHub"
      : "Private internal tool";
  return (
    <div className="relative flex aspect-[16/10] items-center justify-center overflow-hidden border-b border-line bg-gradient-to-br from-accent-soft/60 to-bg p-6 pb-11">
      {kind === "phone" ? (
        <div className="flex h-full w-[38%] min-w-[120px] flex-col gap-2 rounded-[22px] border-4 border-fg/15 bg-surface p-3 shadow-xl">
          <div className="mx-auto h-1.5 w-10 rounded-full bg-fg/15" />
          <div className={`${bar} mt-1 h-2.5 w-2/3`} />
          {[0.9, 0.6, 1, 0.3].map((w, i) => (
            <div
              key={i}
              className="flex items-center gap-2 rounded-lg border border-line p-1.5"
            >
              <div
                className={`h-4 w-4 shrink-0 rounded-full ${i < 2 ? "bg-accent" : "border-2 border-fg/20"}`}
              />
              <div className="flex-1">
                <div className={`${bar} h-1.5 w-3/4`} />
                <div
                  className="mt-1 h-1 rounded bg-accent/40"
                  style={{ width: `${w * 100}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex h-full w-full overflow-hidden rounded-xl border border-line bg-surface shadow-xl">
          <div className="hidden w-[22%] flex-col gap-2 border-r border-line p-3 sm:flex">
            <div className="h-3 w-3/4 rounded bg-accent/70" />
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className={`${bar} h-2 ${i === 2 ? "bg-accent/30" : ""}`}
              />
            ))}
          </div>
          <div className="flex flex-1 flex-col gap-3 p-3 sm:p-4">
            <div className="grid grid-cols-3 gap-2">
              {[0, 1, 2].map((i) => (
                <div key={i} className="rounded-lg border border-line p-2">
                  <div className={`${bar} h-1.5 w-1/2`} />
                  <div className="mt-2 h-3 w-3/4 rounded bg-fg/25" />
                </div>
              ))}
            </div>
            {kind === "dashboard" ? (
              <div className="flex flex-1 items-end gap-1.5 rounded-lg border border-line p-3">
                {[40, 65, 35, 80, 55, 90, 60, 75, 45, 95].map((h, i) => (
                  <div
                    key={i}
                    className={`bar-grow flex-1 rounded-t ${i === 9 ? "bg-accent" : "bg-accent/35"}`}
                    style={{
                      height: `${h}%`,
                      animationDelay: `${0.2 + i * 0.06}s`,
                    }}
                  />
                ))}
              </div>
            ) : (
              <div className="relative flex-1 rounded-lg border border-line p-3">
                <svg
                  viewBox="0 0 100 40"
                  preserveAspectRatio="none"
                  className="h-full w-full"
                >
                  <path
                    className="draw"
                    pathLength={1}
                    d="M0 34 L12 30 L24 31 L36 24 L48 26 L60 17 L72 19 L84 10 L100 6"
                    fill="none"
                    stroke="var(--accent)"
                    strokeWidth="1.6"
                    vectorEffect="non-scaling-stroke"
                  />
                </svg>
              </div>
            )}
          </div>
        </div>
      )}
      <span className="absolute bottom-2.5 right-3 rounded-full border border-line bg-surface/90 px-2.5 py-1 font-mono text-[11px] text-muted">
        {label}
      </span>
    </div>
  );
}

function ProjectCard({ p }: { p: Project }) {
  return (
    <article className="group h-full overflow-hidden rounded-2xl border border-line bg-surface transition duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-2xl hover:shadow-accent/10">
      {p.image ? (
        <a
          href={p.url}
          target="_blank"
          rel="noreferrer"
          className="block overflow-hidden border-b border-line"
        >
          <Image
            src={p.image}
            alt={`${p.name} homepage`}
            width={1440}
            height={900}
            className="aspect-[16/10] w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </a>
      ) : (
        <Mock kind={p.mock ?? "dashboard"} />
      )}
      <div className="p-5 sm:p-6">
        <p className="font-mono text-xs uppercase tracking-wider text-accent">
          {p.role}
        </p>
        <h3 className="mt-1 text-xl font-semibold">
          {p.url ? (
            <a
              href={p.url}
              target="_blank"
              rel="noreferrer"
              className="hover:text-accent"
            >
              {p.name} ↗
            </a>
          ) : (
            p.name
          )}
        </h3>
        <p className="mt-1 text-muted">{p.tagline}</p>
        <ul className="mt-4 space-y-2 text-[15px] leading-relaxed">
          {p.points.map((pt) => (
            <li key={pt} className="flex gap-2">
              <span className="text-accent">–</span>
              <span>{pt}</span>
            </li>
          ))}
        </ul>
        <div className="mt-5 flex flex-wrap gap-2">
          {p.stack.map((s) => (
            <Tag key={s}>{s}</Tag>
          ))}
        </div>
      </div>
    </article>
  );
}

export default function Home() {
  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-8">
      <Reveal />
      <header className="flex items-center justify-between py-6">
        <a
          href="#"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-fg font-semibold text-bg"
        >
          EM
        </a>
        <nav className="flex gap-5 text-sm text-muted">
          <a href="#work" className="hover:text-fg">
            Work
          </a>
          <a href="#projects" className="hover:text-fg">
            Projects
          </a>
          <a href="#contact" className="hover:text-fg">
            Contact
          </a>
        </nav>
      </header>

      <section className="grid items-center gap-10 py-12 sm:py-20 md:grid-cols-[1fr_300px]">
        <div>
          <p className="rise font-mono text-sm text-accent">
            Frontend & Mobile Engineer · Lagos, Nigeria · Open to remote
          </p>
          <h1
            style={{ animationDelay: "0.1s" }}
            className="rise mt-4 text-4xl font-semibold tracking-tight sm:text-6xl"
          >
            Emmanuel Mpamugo
          </h1>
          <p
            style={{ animationDelay: "0.2s" }}
            className="rise mt-6 max-w-2xl text-lg leading-relaxed text-muted"
          >
            I&apos;ve been coding for 3 years, nearly 2 of them professionally,
            building fintech products in React, Next.js and TypeScript: payment
            admin dashboards, investment portals and loan applications, wired
            end-to-end to live APIs. I also build cross-platform mobile apps
            with React Native.
          </p>
          <div
            style={{ animationDelay: "0.3s" }}
            className="rise mt-8 flex flex-wrap gap-3"
          >
            <a
              href={links.email}
              className="rounded-full bg-fg px-5 py-2.5 text-sm font-medium text-bg hover:opacity-90"
            >
              Email me
            </a>
            <a
              href={links.cv}
              download="Emmanuel-Mpamugo-Frontend-Engineer-CV.pdf"
              className="rounded-full border border-line px-5 py-2.5 text-sm font-medium hover:border-fg"
            >
              Download CV
            </a>
            <a
              href={links.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-line px-5 py-2.5 text-sm font-medium hover:border-fg"
            >
              GitHub
            </a>
            <a
              href={links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-line px-5 py-2.5 text-sm font-medium hover:border-fg"
            >
              LinkedIn
            </a>
          </div>
        </div>
        <div
          style={{ animationDelay: "0.25s" }}
          className="rise mx-auto aspect-[4/5] w-full max-w-[300px] overflow-hidden rounded-3xl border border-line"
        >
          <Image
            src="/emmanuel.jpg"
            alt="Emmanuel Mpamugo"
            width={810}
            height={1080}
            priority
            className="h-full w-full origin-[45%_80%] scale-[1.75] object-cover"
          />
        </div>
      </section>

      <section id="work" className="scroll-mt-8 py-12">
        <h2 className="reveal text-2xl font-semibold">Work</h2>
        <p className="mt-2 text-muted">
          Frontend Developer at Princeps Credit Systems, March 2025 – present.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {work.map((p, i) => (
            <div
              key={p.name}
              className="reveal"
              style={{ transitionDelay: `${(i % 2) * 0.1}s` }}
            >
              <ProjectCard p={p} />
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="scroll-mt-8 py-12">
        <h2 className="reveal text-2xl font-semibold">Personal projects</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {personal.map((p, i) => (
            <div
              key={p.name}
              className="reveal"
              style={{ transitionDelay: `${(i % 2) * 0.1}s` }}
            >
              <ProjectCard p={p} />
            </div>
          ))}
        </div>
      </section>

      <section className="reveal py-12">
        <h2 className="text-2xl font-semibold">Skills</h2>
        <dl className="mt-6 divide-y divide-line rounded-2xl border border-line bg-surface">
          {skills.map(([k, v]) => (
            <div
              key={k}
              className="grid gap-1 p-4 sm:grid-cols-[140px_1fr] sm:gap-6 sm:px-6"
            >
              <dt className="font-mono text-sm text-accent">{k}</dt>
              <dd>{v}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section id="contact" className="reveal scroll-mt-8 py-16 sm:py-24">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Let&apos;s work together.
        </h2>
        <p className="mt-4 max-w-xl text-muted">
          I&apos;m open to remote frontend and mobile roles. The fastest way to
          reach me is email.
        </p>
        <a
          href={links.email}
          className="mt-6 inline-block text-lg font-medium text-accent hover:underline"
        >
          emmanuelmpamugo2002@gmail.com
        </a>
      </section>

      <footer className="border-t border-line py-8 text-sm text-muted">
        © {new Date().getFullYear()} Emmanuel Mpamugo
      </footer>
    </div>
  );
}
