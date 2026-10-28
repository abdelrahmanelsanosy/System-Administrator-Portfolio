// Skills + Projects list

function Skills({ t, lang }) {
  const skills = window.SKILLS;
  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="eyebrow">{t.skills.eyebrow}</div>
            <h2 className="section-title serif" style={{marginTop: 20}}>
              {t.skills.title[0]} <em>{t.skills.title[1]}</em>
            </h2>
          </div>
          <div className="section-num">{t.skills.num} / {window.fmtNum(5, lang)}</div>
        </div>
        <div className="skills-grid">
          {skills.map((c, i) => (
            <div key={i} className="skill-cat">
              <div className="skill-cat-head">
                <div className="name">{c.cat[lang]}</div>
                <div className="idx">{window.fmtNum(i + 1, lang)}</div>
              </div>
              <div className="skill-list">
                {c.items.map((s, j) => (
                  <div key={j} className="skill-item">
                    <span className="dot"></span>
                    <span className="name">{s.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// SVG project thumbnails — abstract, on-brand, no real screenshots
function ProjectThumb({ id }) {
  const thumbs = {
    octoberrent: (
      <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">
        <rect width="400" height="300" fill="#1C1916"/>
        <rect x="150" y="24" width="100" height="204" rx="14" fill="#14110F" stroke="#C9A961" strokeWidth="1.5" opacity="0.8"/>
        <rect x="186" y="32" width="28" height="4" rx="2" fill="#3D3830"/>
        <rect x="162" y="52" width="76" height="52" fill="#0A0908" stroke="#3D3830"/>
        <path d="M 176 92 L 200 66 L 224 92 Z" fill="none" stroke="#C9A961" strokeWidth="1.5"/>
        <rect x="193" y="80" width="14" height="12" fill="none" stroke="#C9A961" strokeWidth="1"/>
        <rect x="162" y="114" width="52" height="6" fill="#F0E9D6" opacity="0.7"/>
        <rect x="162" y="128" width="34" height="5" fill="#7A746A"/>
        <rect x="162" y="148" width="76" height="22" fill="#14110F" stroke="#C9A961" strokeWidth="0.5" opacity="0.7"/>
        <rect x="162" y="178" width="76" height="22" fill="#14110F" stroke="#3D3830"/>
        <rect x="162" y="204" width="76" height="14" fill="#C9A961"/>
        <circle cx="82" cy="150" r="22" fill="none" stroke="#C9A961" strokeWidth="1.5" opacity="0.6"/>
        <circle cx="76" cy="150" r="7" fill="none" stroke="#C9A961" strokeWidth="1.5"/>
        <path d="M 83 150 H 104 M 96 150 V 158 M 103 150 V 156" stroke="#C9A961" strokeWidth="1.5" fill="none"/>
        <text x="20" y="280" fill="#7A746A" fontSize="11" fontFamily="monospace" letterSpacing="0.2em">FLUTTER · FIREBASE</text>
      </svg>
    ),
    advancedreact: (
      <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">
        <rect width="400" height="300" fill="#1C1916"/>
        <circle cx="200" cy="150" r="60" fill="none" stroke="#C9A961" strokeWidth="1.5" opacity="0.4"/>
        <ellipse cx="200" cy="150" rx="100" ry="38" fill="none" stroke="#C9A961" strokeWidth="1.5" opacity="0.6"/>
        <ellipse cx="200" cy="150" rx="100" ry="38" fill="none" stroke="#C9A961" strokeWidth="1.5" opacity="0.6" transform="rotate(60 200 150)"/>
        <ellipse cx="200" cy="150" rx="100" ry="38" fill="none" stroke="#C9A961" strokeWidth="1.5" opacity="0.6" transform="rotate(120 200 150)"/>
        <circle cx="200" cy="150" r="6" fill="#C9A961"/>
        <text x="20" y="280" fill="#7A746A" fontSize="11" fontFamily="monospace" letterSpacing="0.2em">REACT · CHAKRA</text>
      </svg>
    ),
    tour: (
      <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1C1916"/>
            <stop offset="100%" stopColor="#0A0908"/>
          </linearGradient>
        </defs>
        <rect width="400" height="300" fill="url(#sky)"/>
        <path d="M 0 220 L 80 160 L 140 190 L 220 130 L 300 175 L 400 140 L 400 300 L 0 300 Z" fill="#14110F" stroke="#C9A961" strokeWidth="1" opacity="0.7"/>
        <circle cx="320" cy="80" r="22" fill="#C9A961" opacity="0.8"/>
        <circle cx="320" cy="80" r="40" fill="none" stroke="#C9A961" strokeWidth="0.5" opacity="0.3"/>
        <text x="20" y="280" fill="#7A746A" fontSize="11" fontFamily="monospace" letterSpacing="0.2em">REACT · SCSS · AOS</text>
      </svg>
    ),
    amazon: (
      <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">
        <rect width="400" height="300" fill="#1C1916"/>
        <rect x="20" y="20" width="360" height="28" fill="#14110F" stroke="#3D3830"/>
        <rect x="20" y="60" width="360" height="14" fill="#14110F" stroke="#3D3830"/>
        <rect x="20" y="86" width="170" height="100" fill="#14110F" stroke="#C9A961" strokeWidth="0.5" opacity="0.6"/>
        <rect x="210" y="86" width="170" height="100" fill="#14110F" stroke="#3D3830"/>
        <rect x="20" y="200" width="80" height="80" fill="#14110F" stroke="#3D3830"/>
        <rect x="110" y="200" width="80" height="80" fill="#14110F" stroke="#3D3830"/>
        <rect x="200" y="200" width="80" height="80" fill="#14110F" stroke="#3D3830"/>
        <rect x="290" y="200" width="80" height="80" fill="#14110F" stroke="#3D3830"/>
        <circle cx="40" cy="34" r="6" fill="#C9A961"/>
        <text x="20" y="296" fill="#7A746A" fontSize="9" fontFamily="monospace" letterSpacing="0.2em">HTML · CSS</text>
      </svg>
    ),
    gharbia: (
      <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">
        <rect width="400" height="300" fill="#1C1916"/>
        <rect x="0" y="0" width="400" height="80" fill="#14110F"/>
        <rect x="40" y="34" width="80" height="12" fill="#C9A961" opacity="0.8"/>
        <rect x="260" y="34" width="40" height="8" fill="#3D3830"/>
        <rect x="310" y="34" width="50" height="8" fill="#3D3830"/>
        <rect x="0" y="80" width="400" height="160" fill="#0A0908"/>
        <rect x="40" y="120" width="180" height="6" fill="#F0E9D6" opacity="0.4"/>
        <rect x="40" y="140" width="240" height="14" fill="#F0E9D6" opacity="0.8"/>
        <rect x="40" y="170" width="60" height="14" fill="#C9A961"/>
        <circle cx="60" cy="270" r="10" fill="none" stroke="#C9A961" strokeWidth="1"/>
        <circle cx="100" cy="270" r="10" fill="none" stroke="#C9A961" strokeWidth="1"/>
        <circle cx="140" cy="270" r="10" fill="none" stroke="#C9A961" strokeWidth="1"/>
        <text x="20" y="294" fill="#7A746A" fontSize="9" fontFamily="monospace" letterSpacing="0.2em">CLIENT · LIVE</text>
      </svg>
    )
  };
  return thumbs[id] || null;
}

function Projects({ t, lang, openCase }) {
  const projects = window.PROJECTS;
  return (
    <section id="work">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="eyebrow">{t.projects.eyebrow}</div>
            <h2 className="section-title serif" style={{marginTop: 20}}>
              {t.projects.title[0]} <em>{t.projects.title[1]}</em>
            </h2>
          </div>
          <div className="section-num">{t.projects.num} / {window.fmtNum(5, lang)}</div>
        </div>
        <div className="projects-list">
          {projects.map((p, i) => {
            const names = p.name[lang];
            return (
              <div key={p.id} className="project-row" onClick={() => openCase(i)}>
                <div className="project-row-main">
                  <div className="project-num">{p.num}</div>
                  <div className="project-name serif">
                    <span className={p.nameItalic === 0 ? "em" : ""}>{names[0]}</span>{' '}
                    <span className={p.nameItalic === 1 ? "em" : ""} style={p.nameItalic === 1 ? {color: 'var(--gold)'} : {}}>{names[1]}</span>
                  </div>
                  <div className="project-tags">
                    {p.tags.map(tag => <span key={tag} className="project-tag">{tag}</span>)}
                  </div>
                  <div className="project-arrow">↗</div>
                </div>
                <div className="project-preview">
                  <div className="project-preview-inner">
                    <div className="project-preview-frame">
                      <ProjectThumb id={p.id} />
                      <div className="project-preview-meta">
                        <span className="project-preview-tag">{p.type[lang]} · {p.year}</span>
                        <span className="project-preview-cta">
                          {lang === 'en' ? 'View case study' : 'عرض دراسة الحالة'}
                          <span className="arrow"></span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

window.Skills = Skills;
window.Projects = Projects;
window.ProjectThumb = ProjectThumb;
