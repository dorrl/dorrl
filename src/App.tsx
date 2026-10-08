import './App.css'

const links = [
  { label: 'GitHub', href: 'https://github.com/dorrl', external: true },
  { label: 'Discord', href: '@dorrl', external: true },
  { label: 'Email', href: 'dor@dorrl.com', external: true },
]

function App() {
  return (
    <main className="site">
      <header className="hero">
        <p className="eyebrow">dorrl</p>
        <h1>살아 숨쉬는 무언가</h1>
        <p className="intro">
          생각이 있을수도 없을수도
        </p>
      </header>

      <section className="section" aria-labelledby="projects-title">
        <div className="section-heading">
          <p className="section-number">01</p>
          <h2 id="projects-title">만든거</h2>
        </div>
        <div className="empty-projects">
          <p>아직 뭔가 놓을게 없다.</p>
          <span>언젠간 가득 차게 될지도</span>
        </div>
      </section>

      <section className="section about" aria-labelledby="about-title">
        <div className="section-heading">
          <p className="section-number">02</p>
          <h2 id="about-title">개인정보</h2>
        </div>
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
      </section>

      <footer>
        <span>© 2026 dorrl</span>
      </footer>
    </main>
  )
}

export default App
