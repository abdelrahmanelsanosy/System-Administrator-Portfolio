// Case study overlay + Contact + Footer

function CaseStudy({ project, t, lang, onClose, onNext, onPrev, nextProject, prevProject }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [onClose, onNext, onPrev]);

  const names = project.name[lang];

  return (
    <div className="case-overlay">
      <button className="case-close" onClick={onClose} aria-label={t.case.close}>✕</button>

      <header className="case-hero">
        <div className="container">
          <div className="case-meta-row">
            <span className="gold">{project.num}</span>
            <span className="sep">/</span>
            <span>{project.type[lang]}</span>
            <span className="sep">·</span>
            <span>{project.year}</span>
          </div>
          <h1 className="case-title serif">
            <span className={project.nameItalic === 0 ? "" : ""} style={project.nameItalic === 0 ? {fontStyle: 'italic', color: 'var(--gold)'} : {}}>{names[0]}</span>{' '}
            <span style={project.nameItalic === 1 ? {fontStyle: 'italic', color: 'var(--gold)'} : {}}>{names[1]}</span>
          </h1>
          <p className="case-sub">{project.tagline[lang]}</p>

          <div className="case-facts">
            <div className="case-fact">
              <div className="lbl">{t.case.role}</div>
              <div className="val serif">{project.role[lang]}</div>
            </div>
            <div className="case-fact">
              <div className="lbl">{t.case.year}</div>
              <div className="val serif">{project.duration[lang]}</div>
            </div>
            <div className="case-fact">
              <div className="lbl">{t.case.stack}</div>
              <div className="val serif">{project.stack}</div>
            </div>
            {project.repo && (
              <div className="case-fact">
                <div className="lbl">{t.case.repo}</div>
                <div className="val serif" style={{fontSize: 14, wordBreak: 'break-all'}}>
                  <a href={`https://${project.repo}`} target="_blank" rel="noopener" style={{borderBottom: '1px solid currentColor'}}>{project.repo}</a>
                </div>
              </div>
            )}
          </div>
        </div>
      </header>

      {project.chapters.map((ch, i) => (
        <section key={i} className="case-section">
          <div className="container">
            <div className="case-chap">
              <div className="case-chap-lbl">
                <div>{ch.label[lang]}</div>
              </div>
              <div className="case-chap-body">
                {ch.body && <div dangerouslySetInnerHTML={{__html: ch.body[lang]}}></div>}
                {ch.code && (
                  <div className="code-block">
                    <div className="code-head">
                      <div className="dots"><span></span><span></span><span></span></div>
                      <div className="file">{ch.code.file}</div>
                    </div>
                    <div className="code-body">
                      {ch.code.lines.map((l, j) => (
                        <div key={j} dangerouslySetInnerHTML={{__html: l.html}}></div>
                      ))}
                    </div>
                  </div>
                )}
                {ch.visual && (
                  <div className="case-visual">{ch.visual}</div>
                )}
              </div>
            </div>
          </div>
        </section>
      ))}

      <div className="container">
        <div className="case-nav">
          <div className="case-nav-card" onClick={onPrev}>
            <div className="dir">← {t.case.prev}</div>
            <div className="ttl serif">{prevProject.name[lang].join(' ')}</div>
          </div>
          <div className="case-nav-card" onClick={onNext} style={{textAlign: 'end'}}>
            <div className="dir">{t.case.next} →</div>
            <div className="ttl serif">{nextProject.name[lang].join(' ')}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Contact({ t, lang }) {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errs, setErrs] = useState({});
  const [sent, setSent] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = t.contact.form.errs.name;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = t.contact.form.errs.email;
    if (form.message.trim().length < 15) e.message = t.contact.form.errs.message;
    return e;
  };

  const submit = (e) => {
    e.preventDefault();
    const v = validate();
    setErrs(v);
    if (Object.keys(v).length === 0) {
      setSent(true);
      setTimeout(() => {
        setSent(false);
        setForm({ name: '', email: '', message: '' });
      }, 5000);
    }
  };

  return (
    <section id="contact">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="eyebrow">{t.contact.eyebrow}</div>
            <h2 className="section-title serif" style={{marginTop: 20}}>
              {t.contact.title[0]} <em>{t.contact.title[1]}</em>
            </h2>
          </div>
          <div className="section-num">{t.contact.num} / {window.fmtNum(5, lang)}</div>
        </div>

        <div className="contact-grid">
          <div>
            <p className="contact-lead serif" dangerouslySetInnerHTML={{__html: t.contact.lead}}></p>
            <div className="contact-links">
              {t.contact.links.map((l, i) => (
                <a key={i} href={l.href} target="_blank" rel="noopener" className="contact-link">
                  <span className="platform serif">{l.platform}</span>
                  <span className="handle mono">{l.handle} <span style={{color: 'var(--gold)', marginInlineStart: 8}}>↗</span></span>
                </a>
              ))}
            </div>
          </div>

          <div className="contact-form">
            {sent ? (
              <div className="contact-sent">
                <div className="check">✓</div>
                <div className="ttl serif">{t.contact.form.sentTitle}</div>
                <div className="sub">{t.contact.form.sentSub}</div>
              </div>
            ) : (
              <form onSubmit={submit} noValidate>
                <div className="field">
                  <label>{t.contact.form.name}</label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={e => setForm({...form, name: e.target.value})}
                  />
                  {errs.name && <div className="err">{errs.name}</div>}
                </div>
                <div className="field">
                  <label>{t.contact.form.email}</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={e => setForm({...form, email: e.target.value})}
                  />
                  {errs.email && <div className="err">{errs.email}</div>}
                </div>
                <div className="field">
                  <label>{t.contact.form.message}</label>
                  <textarea
                    value={form.message}
                    onChange={e => setForm({...form, message: e.target.value})}
                    rows="4"
                  ></textarea>
                  {errs.message && <div className="err">{errs.message}</div>}
                </div>
                <button type="submit" className="btn btn-primary contact-submit">
                  {t.contact.form.send} <span className="arrow">→</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer({ t, lang, onResume }) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-mark serif">
              {t.footer.mark[0]}<br/>
              <span className="gold" style={{fontStyle: 'italic'}}>{t.footer.mark[1]}.</span>
            </div>
            <button className="btn btn-ghost" style={{marginTop: 28}} onClick={onResume}>
              ↓ {t.footer.resume}
            </button>
          </div>
          {t.footer.cols.map((col, i) => (
            <div key={i} className="footer-col">
              <h4>{col.h}</h4>
              <ul>
                {col.links.map((l, j) => (
                  <li key={j}><a href={l.h} target={l.h.startsWith('http') ? '_blank' : '_self'} rel="noopener">{l.t}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="footer-base">
          <span>{t.footer.copy}</span>
          <span>{t.footer.built}</span>
        </div>
      </div>
    </footer>
  );
}

window.CaseStudy = CaseStudy;
window.Contact = Contact;
window.Footer = Footer;
