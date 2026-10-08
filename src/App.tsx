import './App.css'

const links = [
  { label: 'GitHub', href: 'https://github.com/dorrl', external: true },
  { label: 'Discord', href: 'https://discord.com/app', external: true },
]

function App() {
  return (
    <main className="site">
      <header className="hero">
        <p className="eyebrow">dorrl</p>
        <h1>Developer · Student · Builder</h1>
        <p className="intro">
          만들고, 실험하고, 배우는 과정을 기록합니다.
        </p>

        <nav className="links" aria-label="외부 링크">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noreferrer' : undefined}
            >
              {link.label}
              <span aria-hidden="true">↗</span>
            </a>
          ))}
        </nav>
      </header>

      <section className="section" aria-labelledby="projects-title">
        <div className="section-heading">
          <p className="section-number">01</p>
          <h2 id="projects-title">Projects</h2>
        </div>
        <div className="empty-projects">
          <p>아직 공개할 프로젝트가 없습니다.</p>
          <span>완성된 프로젝트를 하나씩 추가할 예정입니다.</span>
        </div>
      </section>

      <section className="section about" aria-labelledby="about-title">
        <div className="section-heading">
          <p className="section-number">02</p>
          <h2 id="about-title">About</h2>
        </div>
        <p>
          이것저것 만들고 실험하면서 배우고 있습니다.
          <br />
          관심 있는 기술을 직접 사용해 보고, 필요한 것을 만들어 갑니다.
        </p>
      </section>

      <footer>
        <span>© 2026 dorrl</span>
        <span>Built with React</span>
      </footer>
    </main>
  )
}

export default App
