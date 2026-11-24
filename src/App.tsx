import { useEffect } from "react";

const projects = [
  {
    index: "01",
    title: "Car Rental Booking System",
    type: "Web application",
    description:
      "Fleet booking platform where customers pick a location and dates, with total rental pricing calculated automatically.",
    stack: ["Laravel", "Tailwind CSS", "MySQL"],
    href: "https://jalainrentcar.vercel.app/",
    linkLabel: "Visit live site",
  },
  {
    index: "02",
    title: "UMKM Point of Sale (PosMart)",
    type: "Full-stack application",
    description:
      "Web-based POS system built for small businesses, complete with thermal receipt printing and daily revenue reports.",
    stack: ["React", "Laravel", "PostgreSQL"],
    href: "https://posmartdemo.vercel.app/",
    linkLabel: "Visit live demo",
  },
  {
    index: "03",
    title: "IoT Lab Monitoring Dashboard",
    type: "IoT web application",
    description:
      "Real-time ESP8266 monitoring and control dashboard used by students during Internet of Things practical sessions.",
    stack: ["ESP8266", "Firebase"],
    href: "https://iotkitdashboardums.vercel.app/",
    linkLabel: "Visit live site",
  },
  {
    index: "04",
    title: "Bayarku Payment Directory",
    type: "Web application",
    description:
      "Consolidates bank accounts, e-wallets, and QRIS into a single shareable link so customers can pick and copy payment details effortlessly.",
    stack: ["Next.js", "Tailwind CSS"],
    href: "https://bayarkuu.vercel.app/warungberkahjaya",
    linkLabel: "Visit live site",
  },
  {
    index: "05",
    title: "Outdoor Gear Rental",
    type: "Client landing page",
    description:
      "Landing page for an outdoor equipment rental business featuring a gear catalog and direct WhatsApp booking.",
    stack: ["Next.js", "Tailwind CSS"],
    href: "https://summitrentoutdoor.vercel.app/",
    linkLabel: "Visit live site",
  },
];

const experience = [
  {
    period: "PRESENT",
    role: "Internet of Things Laboratory Assistant",
    company: "Informatics Engineering, Universitas Muhammadiyah Surakarta",
    detail:
      "Built a browser-based dashboard for students to control IoT devices during practical sessions. Support students in the lab, troubleshoot devices and circuits, and help maintain the laboratory.",
  },
  {
    period: "MAR 2026 — MAY 2026",
    role: "Network & Cybersecurity Intern",
    company: "Dinas Komunikasi dan Informatika Kab. Karanganyar",
    detail:
      "MikroTik routing, Zabbix infrastructure monitoring, and IDS/IPS work with Wazuh and Suricata.",
  },
  {
    period: "NOV 2025 — NOW",
    role: "Freelance Web Developer",
    company: "Independent / Client Projects",
    detail:
      "Design, build, and deploy responsive websites and custom web applications for small businesses and client operations.",
  },
];

const skills = [
  {
    title: "Networking & Security",
    items: ["MikroTik", "Routing", "Network monitoring", "Wazuh", "Suricata", "IDS / IPS"],
  },
  {
    title: "Programming",
    items: ["TypeScript", "JavaScript", "Python", "PHP", "HTML", "CSS"],
  },
  {
    title: "Frameworks",
    items: ["Next.js", "React", "Laravel", "Tailwind CSS", "Shadcn UI", "Recharts"],
  },
  {
    title: "Database",
    items: ["PostgreSQL", "Supabase", "MySQL", "MariaDB"],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "Docker", "Vercel", "Zabbix", "ESP 32/8266"],
  },
];

const certifications = [
  { date: "JUN 2026", name: "MTCNA", issuer: "MikroTik" },
  { date: "DEC 2025", name: "Data Engineer Bootcamp", issuer: "dibimbing.id" },
  { date: "OCT 2025", name: "Introduction to APIs in Python", issuer: "DataCamp" },
  {
    date: "JUN 2025",
    name: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
  },
];

const profileLinks = {
  github: "https://github.com/afrizalfikrii",
  linkedin: "https://www.linkedin.com/in/afrizal-fikri-172bb8360",
  email: "mailto:afrizalfikridev@gmail.com",
};

function Arrow() {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" className="link-arrow">
      <path d="M3 13 13 3M5 3h8v8" />
    </svg>
  );
}

function NetworkDiagram() {
  const nodes = [
    { cx: 48, cy: 72, label: "RTR-01", lx: 20, ly: 52, primary: true },
    { cx: 152, cy: 42, label: "FW-01", lx: 132, ly: 22 },
    { cx: 250, cy: 86, label: "SW-01", lx: 260, ly: 80 },
    { cx: 358, cy: 54, label: "MON-01", lx: 370, ly: 46, primary: true },
    { cx: 165, cy: 148, label: "DMZ", lx: 130, ly: 176 },
    { cx: 296, cy: 174, label: "WEB-01", lx: 310, ly: 196 },
    { cx: 416, cy: 142, label: "DB-01", lx: 426, ly: 164 },
    { cx: 82, cy: 220, label: "IDS-01", lx: 20, ly: 242, primary: true },
    { cx: 220, cy: 248, label: "LAN-A", lx: 198, ly: 278 },
    { cx: 386, cy: 252, label: "LAN-B", lx: 364, ly: 282 },
  ];

  return (
    <figure className="network-figure" aria-labelledby="network-caption">
      <svg
        className="network-diagram"
        viewBox="0 0 470 300"
        role="img"
        aria-label="Network topology connecting a router, firewall, switches, monitoring, servers and local networks"
      >
        <g className="network-links">
          <path d="M48 72 152 42 250 86 358 54" />
          <path d="M152 42 165 148 82 220" />
          <path d="M165 148 296 174 416 142" />
          <path d="M250 86 296 174" />
          <path d="M82 220 220 248 386 252 416 142" />
          <path className="dashed" d="M358 54 416 142" />
        </g>
        {nodes.map((node) => (
          <g className={`network-node${node.primary ? " primary" : ""}`} key={node.label}>
            <circle cx={node.cx} cy={node.cy} r="10" />
            <circle className="node-core" cx={node.cx} cy={node.cy} r="2.5" />
            <text x={node.lx} y={node.ly}>
              {node.label}
            </text>
          </g>
        ))}
      </svg>
      <figcaption id="network-caption">FIG. 01 / A SMALL NETWORK, OBSERVED</figcaption>
    </figure>
  );
}

function SectionLabel({ number, children }: { number: string; children: React.ReactNode }) {
  return (
    <div className="section-label">
      <span>{number}</span>
      <h2>{children}</h2>
    </div>
  );
}

export default function App() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="site-shell">
      <header className="masthead">
        <a className="wordmark" href="#top" aria-label="Afrizal Fikri, back to top">
          AF
        </a>
        <nav aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>
        <span className="availability">INFORMATICS / INDONESIA</span>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-kicker">
            <span>AFRIZAL FIKRI</span>
            <span>PORTFOLIO</span>
          </div>
          <div className="hero-title-wrap">
            <h1 id="hero-title">
              Web <span>&amp;</span>
              <br />
              Systems
              <br />
              <em>Engineering.</em>
            </h1>
          </div>
          <div className="hero-intro">
            <p>
              I&apos;m an Informatics student building full-stack web applications, IoT dashboards,
              and reliable network infrastructure — from React and Laravel interfaces to MikroTik,
              Zabbix, and security monitoring.
            </p>
            <div className="social-links" aria-label="Profile links">
              <a href={profileLinks.github} target="_blank" rel="noreferrer">
                GitHub <Arrow />
              </a>
              <a href={profileLinks.linkedin} target="_blank" rel="noreferrer">
                LinkedIn <Arrow />
              </a>
              <a href={profileLinks.email}>
                Email <Arrow />
              </a>
            </div>
          </div>
          <NetworkDiagram />
          <div className="hero-note" aria-hidden="true">
            <span>FOCUS</span>
            <strong>WEB &amp; SYSTEMS ENG.</strong>
          </div>
        </section>

        <section className="section work-section" id="work" aria-labelledby="work-heading">
          <SectionLabel number="01">Selected work</SectionLabel>
          <p className="section-deck" id="work-heading">
            Systems made for actual operations, from internal workflows to a client-facing website.
          </p>
          <div className="project-list">
            {projects.map((project) => (
              <article className="project-row" data-reveal key={project.title}>
                <span className="project-index">{project.index}</span>
                <div className="project-main">
                  <p className="eyebrow">{project.type}</p>
                  <h3>{project.title}</h3>
                </div>
                <p className="project-description">{project.description}</p>
                <div className="project-meta">
                  <ul aria-label={`${project.title} technology stack`}>
                    {project.stack.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <a href={project.href} target="_blank" rel="noreferrer">
                    {project.linkLabel} <Arrow />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          className="section experience-section"
          id="experience"
          aria-labelledby="experience-heading"
        >
          <SectionLabel number="02">Field experience</SectionLabel>
          <div className="experience-heading">
            <h2 id="experience-heading">Where the work happened.</h2>
            <p>
              Hands-on infrastructure, laboratory support, and web delivery across education, public
              service, and client environments.
            </p>
          </div>
          <div className="timeline">
            {experience.map((item) => (
              <article className="timeline-item" data-reveal key={item.role}>
                <time>{item.period}</time>
                <div className="timeline-marker" aria-hidden="true" />
                <div>
                  <h3>{item.role}</h3>
                  <p className="company">{item.company}</p>
                  <p className="timeline-detail">{item.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section skills-section" id="skills" aria-labelledby="skills-heading">
          <SectionLabel number="03">Technical index</SectionLabel>
          <div className="skills-intro">
            <h2 id="skills-heading">Working knowledge, grouped by use.</h2>
            <p>
              No rating scales. Just the technologies and operational skills I use across
              infrastructure, IoT labs, and application work.
            </p>
          </div>
          <div className="skills-grid">
            {skills.map((group, index) => (
              <div className={`skill-group skill-${index + 1}`} data-reveal key={group.title}>
                <span className="skill-number">{String(index + 1).padStart(2, "0")}</span>
                <h3>{group.title}</h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section
          className="section certifications-section"
          id="certifications"
          aria-labelledby="certifications-heading"
        >
          <SectionLabel number="04">Certifications</SectionLabel>
          <h2 id="certifications-heading">Formal study, logged.</h2>
          <div className="certification-list">
            {certifications.map((certification, index) => (
              <article className="certification-row" data-reveal key={certification.name}>
                <span className="cert-index">{String(index + 1).padStart(2, "0")}</span>
                <time>{certification.date}</time>
                <h3>{certification.name}</h3>
                <p>{certification.issuer}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-heading">
          <span className="contact-label">05 / CONTACT</span>
          <h2 id="contact-heading">
            Have a web project
            <br />
            or a systems challenge?
          </h2>
          <a className="email-link" href={profileLinks.email}>
            afrizalfikridev@gmail.com <Arrow />
          </a>
        </section>
      </main>

      <footer>
        <p>© AFRIZAL FIKRI</p>
        <p>INFORMATICS / WEB &amp; SYSTEMS</p>
        <div>
          <a href={profileLinks.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={profileLinks.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </footer>
    </div>
  );
}
