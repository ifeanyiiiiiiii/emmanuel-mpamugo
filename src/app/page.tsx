import Image from "next/image";

const links = {
  email: "mailto:emmanuelmpamugo2002@gmail.com",
  github: "https://github.com/ifeanyiiiiiiii",
  linkedin: "https://www.linkedin.com/in/emmanuel-mpamugo-2b73872b7/",
  cv: "/Emmanuel-Mpamugo-Frontend-Engineer-CV.pdf",
};

type Project = {
  name: string;
  tagline: string;
  url?: string;
  image?: string;
  role: string;
  points: string[];
  stack: string[];
};

const work: Project[] = [
  {
    name: "Giro Pay Admin Dashboard",
    tagline: "Internal operations console for a Nigerian payments platform",
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

function ProjectCard({ p }: { p: Project }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-line bg-surface">
      {p.image ? (
        <a
          href={p.url}
          target="_blank"
          rel="noreferrer"
          className="block border-b border-line"
        >
          <Image
            src={p.image}
            alt={`${p.name} homepage`}
            width={1440}
            height={900}
            className="aspect-[16/10] w-full object-cover object-top transition-opacity hover:opacity-90"
          />
        </a>
      ) : (
        <div className="flex aspect-[16/10] items-center justify-center border-b border-line bg-accent-soft/40 p-6 text-center">
          <p className="font-mono text-sm text-muted">
            {p.url
              ? "Source on GitHub"
              : "Internal tool, screenshots not public"}
          </p>
        </div>
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
          <p className="font-mono text-sm text-accent">
            Frontend & Mobile Engineer · Lagos, Nigeria · Open to remote
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-6xl">
            Emmanuel Mpamugo
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            I&apos;ve been coding for 3 years, nearly 2 of them professionally,
            building fintech products in React, Next.js and TypeScript: payment
            admin dashboards, investment portals and loan applications, wired
            end-to-end to live APIs. I also build cross-platform mobile apps
            with React Native.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={links.email}
              className="rounded-full bg-fg px-5 py-2.5 text-sm font-medium text-bg hover:opacity-90"
            >
              Email me
            </a>
            <a
              href={links.cv}
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
        <div className="mx-auto aspect-[4/5] w-full max-w-[300px] overflow-hidden rounded-3xl border border-line">
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
        <h2 className="text-2xl font-semibold">Work</h2>
        <p className="mt-2 text-muted">
          Frontend Developer at Princeps Credit Systems, March 2025 – present.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {work.map((p) => (
            <ProjectCard key={p.name} p={p} />
          ))}
        </div>
      </section>

      <section id="projects" className="scroll-mt-8 py-12">
        <h2 className="text-2xl font-semibold">Personal projects</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {personal.map((p) => (
            <ProjectCard key={p.name} p={p} />
          ))}
        </div>
      </section>

      <section className="py-12">
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

      <section id="contact" className="scroll-mt-8 py-16 sm:py-24">
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
