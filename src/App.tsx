import './App.css'

const links = [
  { label: 'GitHub', value: 'github.com/dorrl', href: 'https://github.com/dorrl', type: 'github', external: true },
  { label: 'Discord', value: '@dorrl', href: 'https://discord.com/app', type: 'discord', external: true },
  { label: 'Youtube', value: '@dordorrl', href: 'https://www.youtube.com/@dordorrl', type: 'youtube', external: true },
  { label: 'Email', value: 'dor@dorrl.com', href: 'mailto:dor@dorrl.com', type: 'email' },
]

function LinkIcon({ type }: { type: string }) {
  if (type === 'github') {
    return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C6.48 2 2 6.58 2 12.24c0 4.52 2.87 8.36 6.85 9.71.5.1.68-.22.68-.49v-1.7c-2.79.63-3.38-1.38-3.38-1.38-.46-1.19-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.59 2.36 1.13 2.94.86.09-.67.35-1.13.64-1.39-2.23-.26-4.58-1.15-4.58-5.08 0-1.12.39-2.04 1.03-2.76-.1-.26-.45-1.31.1-2.73 0 0 .84-.28 2.75 1.05A9.2 9.2 0 0 1 12 6.97c.85 0 1.7.12 2.5.36 1.9-1.33 2.74-1.05 2.74-1.05.55 1.42.2 2.47.1 2.73.64.72 1.03 1.64 1.03 2.76 0 3.94-2.35 4.81-4.59 5.07.36.32.68.95.68 1.92v2.84c0 .27.18.6.69.49A10.3 10.3 0 0 0 22 12.24C22 6.58 17.52 2 12 2Z"/></svg>
  }
  if (type === 'discord') {
    return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19.54 4.2A16.3 16.3 0 0 0 15.5 3l-.5 1.02a14.2 14.2 0 0 0-6 0L8.5 3a16.3 16.3 0 0 0-4.04 1.2C1.9 8.1 1.2 11.9 1.55 15.65a16.4 16.4 0 0 0 4.95 2.5l1.2-1.65c-.66-.25-1.3-.57-1.9-.94l.46-.36c3.67 1.7 7.65 1.7 11.28 0l.47.36c-.61.37-1.25.69-1.91.94l1.2 1.65a16.4 16.4 0 0 0 4.95-2.5c.41-4.36-.7-8.13-2.71-11.45ZM8.85 14.02c-1.07 0-1.94-.98-1.94-2.18s.85-2.18 1.94-2.18 1.95.98 1.94 2.18c0 1.2-.85 2.18-1.94 2.18Zm6.3 0c-1.07 0-1.94-.98-1.94-2.18s.85-2.18 1.94-2.18 1.95.98 1.94 2.18c0 1.2-.85 2.18-1.94 2.18Z"/></svg>
  }
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5.5A3.5 3.5 0 0 1 7.5 2h9A3.5 3.5 0 0 1 20 5.5v.72a3.5 3.5 0 0 1-1.02 2.47l-6.98 6.98-6.98-6.98A3.5 3.5 0 0 1 4 6.22V5.5Zm0 6.06 5.17 5.17a4 4 0 0 0 5.66 0L20 11.56v6.94A3.5 3.5 0 0 1 16.5 22h-9A3.5 3.5 0 0 1 4 18.5v-6.94Z"/></svg>
}

function App() {
  return (
    <main className="site">
      <header className="hero">
        <p className="eyebrow">dorrl</p>
        <h1>살아 숨쉬는 무언가</h1>
        <p className="intro">생각이 있을수도 없을수도</p>
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
        <div className="links" aria-label="연락처 및 외부 링크">
          {links.map((link) => (
            <a key={link.label} className={`link-card link-card--${link.type}`} href={link.href}
              target={link.external ? '_blank' : undefined} rel={link.external ? 'noreferrer' : undefined}>
              <span className="link-icon"><LinkIcon type={link.type} /></span>
              <span className="link-content"><strong>{link.label}</strong><small>{link.value}</small></span>
              <span className="link-arrow" aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
      </section>

      <footer><span>© 2026 dorrl</span></footer>
    </main>
  )
}

export default App
