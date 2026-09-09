import styles from "../components/portfolio-enhancements.module.css";

const skills = [
  ["Python", "Backend & AI systems", "py"],
  ["TypeScript", "Application engineering", "ts"],
  ["React", "Interactive interfaces", "react"],
  ["Next.js", "Modern web products", "next"],
  ["LLM / AI", "Intelligent systems", "ai"],
  ["SQLite", "Local data & tooling", "db"],
  ["Git", "Version control", "git"],
  ["Linux", "Engineering workflow", "linux"],
  ["Docker", "Reproducible environments", "docker"],
  ["VS Code", "Development workflow", "code"],
];

const projects = [
  {
    title: "FAHIM",
    type: "Local AI Assistant Platform",
    description: "A modular local-first AI assistant architecture focused on orchestration, voice interfaces, tools, and dependable system boundaries.",
    tags: ["Python", "LLM", "STT / TTS"],
    visual: "fahim",
  },
  {
    title: "AIRA",
    type: "AI Companion Platform",
    description: "An AI companion platform concept built around natural interaction, modular services, memory, and production-oriented engineering.",
    tags: ["React", "AI", "Architecture"],
    visual: "aira",
  },
];

const experience = [
  ["NOW", "Software + AI Engineering", "Building intelligent software, product experiences, and local-first AI systems."],
  ["01", "Engineering Projects", "Turning ideas into structured, testable applications with clear technical boundaries."],
  ["02", "Continuous Learning", "Deepening software engineering, AI, systems, and modern product development skills."],
];

function Hero3D() {
  return (
    <div className="hero-3d" aria-hidden="true">
      <div className="hero-orb hero-orb-one" />
      <div className="hero-orb hero-orb-two" />
      <div className="hero-grid" />
      <div className="hero-card hero-card-ai"><b>AI</b><span>Build</span><span>Automate</span></div>
      <div className="hero-card hero-card-system"><span>Software</span><b>01</b><small>Systems</small></div>
      <div className="developer-figure">
        <div className="figure-head"><div className="figure-hair" /><div className="figure-glasses"><i /><i /></div></div>
        <div className="figure-neck" />
        <div className="figure-body"><div className="figure-hood" /><div className="figure-arm left" /><div className="figure-arm right" /></div>
      </div>
      <div className="laptop"><div className="laptop-screen"><span>AI</span><i /><i /><i /></div><div className="laptop-base" /></div>
      <div className="desk-cup">IDEAS<br /><b>BUILD</b></div>
      <span className="hero-particle p1" /><span className="hero-particle p2" /><span className="hero-particle p3" /><span className="hero-particle p4" />
    </div>
  );
}

function Globe3D() {
  return (
    <div className="globe-scene" aria-hidden="true">
      <div className="globe-glow" />
      <div className="globe"><div className="globe-land land-a" /><div className="globe-land land-b" /><div className="globe-land land-c" /></div>
      <div className="globe-orbit orbit-a"><span>AI</span></div>
      <div className="globe-orbit orbit-b"><span>Automation</span></div>
      <div className="globe-orbit orbit-c"><span>Solutions</span></div>
      <span className="globe-dot dot-a" /><span className="globe-dot dot-b" /><span className="globe-dot dot-c" />
    </div>
  );
}

function SkillIcon({ kind }: { kind: string }) {
  return <div className={`skill-icon ${kind}`} aria-hidden="true"><span>{kind === "py" ? "⌁" : kind === "ts" ? "TS" : kind === "react" ? "✦" : kind === "next" ? "N" : kind === "ai" ? "AI" : kind === "db" ? "◫" : kind === "git" ? "⌘" : kind === "linux" ? "λ" : kind === "docker" ? "▣" : "</>"}</span></div>;
}

function ProjectVisual({ type }: { type: string }) {
  return <div className={`project-visual-3d ${type}`} aria-hidden="true"><div className="project-backdrop" /><div className="project-console"><div className="console-top"><span /><span /><span /><b>{type === "fahim" ? "FAHIM CORE" : "AIRA"}</b></div><div className="console-body"><div className="console-code"><i /><i /><i /><i /><i /></div><div className="console-chart"><span /><span /><span /><span /><span /></div></div></div><div className="floating-badge badge-one">{type === "fahim" ? "LOCAL AI" : "MEMORY"}</div><div className="floating-badge badge-two">{type === "fahim" ? "TOOLS" : "VOICE"}</div></div>;
}

export default function Home() {
  return (
    <main className={styles.enhancements}>
      <header className="site-header template-header">
        <a className="brand" href="#top" aria-label="Sheik Jamsheer home"><span className="brand-mark">S</span><span>SHEIK</span></a>
        <nav className="desktop-nav" aria-label="Primary navigation"><a className="active" href="#top">Home</a><a href="#about">About</a><a href="#work">Projects</a><a href="#experience">Experience</a><a href="#contact">Contact</a></nav>
        <a className="header-cta" href="#contact">Let&apos;s Connect</a>
      </header>

      <section className="template-hero section-shell" id="top">
        <div className="template-hero-copy">
          <p className="template-eyebrow">◉ &nbsp; Hello, I&apos;m</p>
          <h1>Sheik <em>Jamsheer</em></h1>
          <h2>Software Developer &amp; AI Engineer</h2>
          <p className="hero-description">Building intelligent software and AI systems that turn ideas into useful, dependable products.</p>
          <div className="hero-actions"><a className="button button-primary" href="#work">View My Work <span>→</span></a><a className="button button-secondary" href="#contact">Start a Conversation</a></div>
          <div className="social-row"><a href="https://github.com/sheikjamsheerbasha02" target="_blank" rel="noreferrer">◉ &nbsp; GitHub</a><a href="https://www.linkedin.com/in/sheik-jamsheer-basha/" target="_blank" rel="noreferrer">in &nbsp; LinkedIn</a></div>
        </div>
        <div className="template-hero-art"><Hero3D /></div>
      </section>

      <section className="template-panel section-shell" id="about">
        <div className="panel-copy"><p className="template-eyebrow">◉ &nbsp; ABOUT ME</p><h2>Turning Ideas Into<br /><em>Intelligent Solutions</em></h2><p>I&apos;m a software developer and AI engineer with a focus on building practical, reliable, and scalable solutions. I enjoy working where software engineering meets artificial intelligence.</p><div className="stats-row"><div><b>AI</b><span>Engineering Focus</span></div><div><b>2+</b><span>Core AI Projects</span></div><div><b>100%</b><span>Commitment to Quality</span></div></div><blockquote>“Better tools.<br />A smarter tomorrow.”</blockquote></div>
        <Globe3D />
      </section>

      <section className="template-panel skills-panel section-shell" id="skills">
        <div className="section-topline"><div><p className="template-eyebrow">◉ &nbsp; SKILLS</p><h2>Tools &amp; Technologies</h2><p>A focused stack for building modern, intelligent applications.</p></div><a className="view-link" href="#work">Explore projects →</a></div>
        <div className="skill-grid">{skills.map(([name, description, kind]) => <div className="skill-card" key={name}><SkillIcon kind={kind} /><strong>{name}</strong><span>{description}</span></div>)}</div>
      </section>

      <section className="template-panel projects-panel section-shell" id="work">
        <div className="section-topline"><div><p className="template-eyebrow">◉ &nbsp; FEATURED PROJECTS</p><h2>Building Real-World Solutions</h2><p>A selection of projects that showcase my work in software development and AI.</p></div><a className="view-link" href="https://github.com/sheikjamsheerbasha02" target="_blank" rel="noreferrer">View GitHub →</a></div>
        <div className="project-grid">{projects.map((project) => <article className="template-project-card" key={project.title}><ProjectVisual type={project.visual} /><div className="template-project-info"><span className="project-type">{project.type}</span><h3>{project.title}</h3><div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><p>{project.description}</p><a href="https://github.com/sheikjamsheerbasha02" target="_blank" rel="noreferrer">View Project →</a></div></article>)}</div>
      </section>

      <section className="template-panel experience-panel section-shell" id="experience">
        <div className="experience-copy"><p className="template-eyebrow">◉ &nbsp; EXPERIENCE</p><h2>My Engineering<br /><em>Journey</em></h2><p>A timeline of building, learning, and turning technical ideas into working systems.</p><div className="timeline">{experience.map(([date, title, description]) => <div className="timeline-item" key={date}><span className="timeline-date">{date}</span><span className="timeline-dot" /><div><strong>{title}</strong><p>{description}</p></div></div>)}</div></div><div className="journey-3d" aria-hidden="true"><div className="mountain mountain-one" /><div className="mountain mountain-two" /><div className="journey-road"><span>LEARN</span><span>BUILD</span><span>IMPACT</span></div><div className="flag">⚑</div></div>
      </section>

      <section className="template-panel contact-panel section-shell" id="contact"><div className="contact-copy"><p className="template-eyebrow">◉ &nbsp; GET IN TOUCH</p><h2>Let&apos;s Build Something<br /><em>Amazing Together</em></h2><p>I&apos;m open to discussing software, AI, product engineering, new opportunities, or interesting technical ideas.</p><div className="contact-list"><a href="https://www.linkedin.com/in/sheik-jamsheer-basha/" target="_blank" rel="noreferrer"><b>in</b><span><strong>LinkedIn</strong><small>linkedin.com/in/sheik-jamsheer-basha</small></span></a><a href="https://github.com/sheikjamsheerbasha02" target="_blank" rel="noreferrer"><b>◉</b><span><strong>GitHub</strong><small>github.com/sheikjamsheerbasha02</small></span></a></div><a className="button button-primary" href="https://www.linkedin.com/in/sheik-jamsheer-basha/" target="_blank" rel="noreferrer">Send a Message →</a></div><div className="workspace-3d" aria-hidden="true"><div className="workspace-glow" /><div className="workspace-screen"><span>IDEAS</span><b>CODE</b><i>AI</i><small>IMPACT</small></div><div className="workspace-desk" /><div className="workspace-chair" /><div className="workspace-plant"><span /><i /><b /></div></div></section>

      <footer className="template-footer section-shell"><span>© 2026 Sheik Jamsheer</span><div><a href="https://github.com/sheikjamsheerbasha02" target="_blank" rel="noreferrer">GitHub</a><a href="https://www.linkedin.com/in/sheik-jamsheer-basha/" target="_blank" rel="noreferrer">LinkedIn</a><a href="#top">Back to top ↑</a></div></footer>
    </main>
  );
}
