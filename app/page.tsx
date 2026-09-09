import styles from "../components/portfolio-enhancements.module.css";

const projects = [
  {
    number: "01",
    title: "FAHIM",
    type: "Local AI platform",
    description: "A modular AI assistant architecture focused on local-first inference, orchestration, voice interfaces, and dependable system boundaries.",
    tags: ["Python", "LLM", "STT / TTS"],
    accent: "violet",
  },
  {
    number: "02",
    title: "AIRA",
    type: "AI companion platform",
    description: "An AI companion platform concept built around natural interaction, modular services, clean architecture, and production-oriented engineering.",
    tags: ["React", "AI", "Architecture"],
    accent: "blue",
  },
];

const skills = [
  ["01", "Python", "Backend & AI systems"],
  ["02", "TypeScript", "Application engineering"],
  ["03", "React / Next.js", "Modern web products"],
  ["04", "AI / LLM", "Intelligent systems"],
  ["05", "SQLite", "Local data & tooling"],
  ["06", "Git / Linux", "Engineering workflow"],
];

const principles = [
  ["01", "Architecture", "Make boundaries explicit before complexity arrives."],
  ["02", "Quality", "Prefer tested, maintainable systems over fragile speed."],
  ["03", "Usability", "Technical depth should still produce clear experiences."],
  ["04", "Iteration", "Ship in small steps, measure, then improve."],
];

function OrbitalVisual() {
  return <div className="orbital-stage" aria-hidden="true"><div className="orbital-glow" /><div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="orbit orbit-three" /><div className="orbital-core"><span>AI</span></div><span className="orbital-node node-one" /><span className="orbital-node node-two" /><span className="orbital-node node-three" /><span className="orbital-node node-four" /><span className="orbital-label label-one">INTELLIGENCE</span><span className="orbital-label label-two">SOFTWARE</span></div>;
}

function ProjectVisual({ accent }: { accent: string }) {
  return <div className={`project-visual ${accent}`} aria-hidden="true"><div className="project-window"><div className="window-bar"><span /><span /><span /></div><div className="window-content"><div className="window-line wide" /><div className="window-line medium" /><div className="window-block"><i /><i /><i /></div><div className="window-line short" /></div></div><div className="project-chip">SYSTEM / VISUAL</div></div>;
}

export default function Home() {
  return (
    <main className={styles.enhancements}>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Sheik Jamsheer home"><span className="brand-mark">S</span><span>Sheik Jamsheer</span></a>
        <nav className="desktop-nav" aria-label="Primary navigation"><a href="#about">About</a><a href="#skills">Skills</a><a href="#work">Work</a><a href="#approach">Approach</a><a href="#credentials">Credentials</a><a href="#contact">Contact</a></nav>
        <a className="header-cta" href="#contact">Let&apos;s talk <span>↗</span></a>
      </header>

      <section className="hero section-shell" id="top"><div className="hero-copy"><div className="eyebrow"><span className="status-dot" /> Software · AI · Systems</div><h1>Software<br /><em>Developer</em><br />&amp; AI Engineer.</h1><p className="hero-description">I design and build intelligent software with a focus on clean architecture, thoughtful interfaces, and dependable engineering.</p><div className="hero-actions"><a className="button button-primary" href="#work">Explore my work <span>↓</span></a><a className="button button-secondary" href="https://github.com/sheikjamsheerbasha02" target="_blank" rel="noreferrer">GitHub <span>↗</span></a></div></div><div className="hero-art"><OrbitalVisual /></div><div className="hero-meta"><span>CHENNAI · INDIA</span><span>SOFTWARE / AI / SYSTEMS</span><span>SCROLL TO EXPLORE ↓</span></div></section>

      <section className="intro-band"><div className="section-shell intro-grid"><p className="section-kicker">01 / PROFILE</p><div><p className="statement">Building software is not just about making things work. It is about creating systems that are <strong>clear, resilient, and worth using.</strong></p><a className="text-link" href="#about">More about me <span>↗</span></a></div></div></section>

      <section className="section-shell content-section" id="about"><div className="section-heading"><p className="section-kicker">02 / ABOUT</p><h2>Engineering with<br /><em>intent.</em></h2></div><div className="about-grid"><div className="about-copy"><p>My work sits at the intersection of software engineering and applied AI. I enjoy taking an idea from a rough concept to a structured, testable product.</p><p>I care about the details behind the interface: architecture, boundaries, developer experience, performance, and the small interactions that make software feel finished.</p></div><div className="about-card"><span className="card-label">CURRENT FOCUS</span><strong>Intelligent software systems</strong><span>Local AI · Automation · Product engineering</span><div className="mini-orbit"><div /></div></div></div></section>

      <section className="section-shell content-section skills-section" id="skills"><div className="section-heading compact"><p className="section-kicker">03 / CAPABILITIES</p><h2>Tools I use to<br /><em>make ideas real.</em></h2></div><div className="skills-grid">{skills.map(([number,title,description]) => <div className="skill-item" key={number}><span>{number}</span><div><strong>{title}</strong><small>{description}</small></div><b>↗</b></div>)}</div></section>

      <section className="section-shell content-section work-section" id="work"><div className="work-header"><div className="section-heading compact"><p className="section-kicker">04 / SELECTED WORK</p><h2>Built with<br /><em>purpose.</em></h2></div><p>Selected engineering projects and product concepts. Each one is a place to explore architecture, implementation decisions, and the path from concept to system.</p></div><div className="projects-grid">{projects.map((project) => <article className="project-card" key={project.title}><ProjectVisual accent={project.accent} /><div className="project-info"><span className="project-number">{project.number}</span><div><span className="project-type">{project.type}</span><h3>{project.title}</h3><p>{project.description}</p><div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div><a href="#contact" aria-label={`Ask about ${project.title}`}>↗</a></div></article>)}</div></section>

      <section className="experience-band" id="approach"><div className="section-shell experience-grid"><p className="section-kicker">05 / ENGINEERING APPROACH</p><div><h2>Think clearly.<br />Build carefully.<br /><em>Ship confidently.</em></h2><div className="principles">{principles.map(([number,title,description]) => <div className="principle" key={number}><span>{number}</span><div><strong>{title}</strong><p>{description}</p></div></div>)}</div></div></div></section>

      <section className="section-shell content-section credentials-section" id="credentials"><div className="credentials-grid"><div className="section-heading compact"><p className="section-kicker">06 / CREDENTIALS</p><h2>Proof through<br /><em>practice.</em></h2></div><div className="credential-note"><p>This portfolio prioritizes shipped work, engineering decisions, and continuous learning over a long list of buzzwords.</p><a className="text-link" href="https://www.linkedin.com/in/sheik-jamsheer-basha/" target="_blank" rel="noreferrer">View LinkedIn <span>↗</span></a></div></div><div className="credential-strip"><div><span>01</span><strong>Software Engineering</strong><small>Product development · architecture · delivery</small></div><div><span>02</span><strong>Applied AI</strong><small>LLMs · local inference · intelligent interfaces</small></div><div><span>03</span><strong>Continuous Learning</strong><small>Certifications · experimentation · open source</small></div></div></section>

      <section className="contact-section" id="contact"><div className="section-shell contact-inner"><p className="section-kicker">07 / CONTACT</p><h2>Have an idea?<br /><em>Let&apos;s build it.</em></h2><p>For software, AI, product engineering, or a technical conversation.</p><div className="contact-actions"><a className="contact-link" href="https://www.linkedin.com/in/sheik-jamsheer-basha/" target="_blank" rel="noreferrer">Start a conversation <span>↗</span></a><a className="contact-link muted-link" href="https://github.com/sheikjamsheerbasha02" target="_blank" rel="noreferrer">GitHub <span>↗</span></a></div></div></section>

      <footer className="site-footer section-shell"><span>© 2026 Sheik Jamsheer</span><div><a href="https://github.com/sheikjamsheerbasha02" target="_blank" rel="noreferrer">GitHub</a><a href="https://www.linkedin.com/in/sheik-jamsheer-basha/" target="_blank" rel="noreferrer">LinkedIn</a><a href="#top">Back to top ↑</a></div></footer>
    </main>
  );
}
