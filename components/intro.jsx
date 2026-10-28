// Nav, Hero, About sections

const { useState, useEffect, useRef } = React;

function Nav({ t, lang, setLang, openCase }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: t.nav.about, href: "#about" },
    { label: t.nav.experience, href: "#experience" },
    { label: t.nav.skills, href: "#skills" },
    { label: t.nav.projects, href: "#work" },
    { label: t.nav.contact, href: "#contact" }
  ].map((l, i) => ({ ...l, num: window.fmtNum(i + 1, lang) }));

  return (
    <nav className={"nav " + (scrolled ? "scrolled" : "")}>
      <a href="#top" className="nav-logo">
        <span className="mark"><img src="portrait.jpg" alt="Abdelrahman" /></span>
        <span>Abdelrahman Alsanosy</span>
      </a>
      <div className="nav-links">
        {links.map(l => (
          <a key={l.href} href={l.href} className="nav-link" data-num={l.num}>{l.label}</a>
        ))}
      </div>
      <div className="nav-actions">
        <div className="lang-toggle">
          <button className={lang === 'en' ? "active" : ""} onClick={() => setLang('en')}>EN</button>
          <button className={lang === 'ar' ? "active" : ""} onClick={() => setLang('ar')}>ع</button>
        </div>
      </div>
    </nav>
  );
}

function Hero({ t, lang }) {
  return (
    <section className="hero" id="top">
      <div className="hero-orn"></div>
      <div className="container">
        <div className="hero-eyebrow-row">
          <span className="eyebrow">{t.hero.eyebrow}</span>
          <span className="eyebrow" style={{color: 'var(--ink-mute)'}}>
            {lang === 'en' ? '✦ Cairo · Egypt' : '✦ القاهرة · مصر'}
          </span>
        </div>
        <h1 className="hero-name serif">
          <span className="line">
            <span className="word">{t.hero.name[0]}</span>
          </span>
          <span className="line">
            <span className="word italic">{t.hero.name[1]}</span>
          </span>
        </h1>
        <div className="hero-meta">
          {t.hero.meta.map((m, i) => (
            <div key={i} className="hero-meta-item">
              <div className="label">{m.lbl}</div>
              <div className="value serif">{m.val} <span className="gold">{m.gold}</span></div>
            </div>
          ))}
        </div>
      </div>
      <div className="hero-scroll">
        <span>{t.hero.scroll}</span>
        <div className="line-v"></div>
      </div>
    </section>
  );
}

function About({ t, lang }) {
  return (
    <section id="about">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="eyebrow">{t.about.eyebrow}</div>
            <h2 className="section-title serif" style={{marginTop: 20}}>
              {lang === 'en' ? <>The <em>Practitioner</em></> : <>المُمارس <em>الحرفي</em></>}
            </h2>
          </div>
          <div className="section-num">{t.about.num} / {window.fmtNum(5, lang)}</div>
        </div>
        <div className="about-grid">
          <div>
            <div className="about-photo">
              <img src="portrait.jpg" alt="Abdelrahman Alsanosy" />
            </div>
            <div className="about-photo-label">
              <span>{t.about.photoLabel}</span>
              <span>{t.about.photoRole}</span>
            </div>
          </div>
          <div>
            <div className="about-body serif">
              {t.about.body.map((p, i) => (
                <p key={i} dangerouslySetInnerHTML={{__html: p}}></p>
              ))}
            </div>
            <div className="about-stats">
              {t.about.stats.map((s, i) => (
                <div key={i} className="about-stat">
                  <div className="num serif">{s.num}<sup>{s.sup}</sup></div>
                  <div className="lbl">{s.lbl}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

window.Nav = Nav;
window.Hero = Hero;
window.About = About;
