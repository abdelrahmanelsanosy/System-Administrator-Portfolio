// Experience + Credentials

function Experience({ t, lang }) {
  const jobs = window.EXPERIENCE;
  const cred = window.CREDENTIALS;
  const x = t.experience;
  return (
    <section id="experience">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="eyebrow">{x.eyebrow}</div>
            <h2 className="section-title serif" style={{marginTop: 20}}>
              {x.title[0]} <em>{x.title[1]}</em>
            </h2>
          </div>
          <div className="section-num">{x.num} / {window.fmtNum(5, lang)}</div>
        </div>

        <div className="exp-list">
          {jobs.map(job => (
            <div key={job.id} className="exp-item">
              <div className="exp-date">
                <span>{window.fmtDate(job.start, lang)}</span>
                <span className="sep">—</span>
                <span className={job.end === 'present' ? 'now' : ''}>
                  {job.end === 'present' ? x.present : window.fmtDate(job.end, lang)}
                </span>
              </div>
              <div className="exp-body">
                <h3 className="exp-title serif">{job.title[lang]}</h3>
                <div className="exp-meta">
                  <bdi>{job.company}</bdi> · {job.location[lang]} · {job.mode[lang]}
                </div>
                <ul className="exp-bullets">
                  {job.bullets[lang].map((b, i) => <li key={i}>{b}</li>)}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="skills-grid cred-grid">
          <div className="skill-cat">
            <div className="skill-cat-head">
              <div className="name">{x.education}</div>
            </div>
            <div className="skill-list">
              {cred.education.map((e, i) => (
                <div key={i} className="cred-entry">
                  <div className="cred-main">{e.degree[lang]}</div>
                  <div className="cred-sub">{e.school[lang]}</div>
                  <div className="cred-sub">{window.fmtDate(e.graduated, lang)} · {e.gpa[lang]}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="skill-cat">
            <div className="skill-cat-head">
              <div className="name">{x.certifications}</div>
            </div>
            <div className="skill-list">
              {cred.certifications.map(c => (
                <div key={c.name} className="cred-entry">
                  <div className="cred-main">{c.name}</div>
                  <div className="cred-sub">{c.full}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="skill-cat">
            <div className="skill-cat-head">
              <div className="name">{x.languages}</div>
            </div>
            <div className="skill-list">
              {cred.languages.map((l, i) => (
                <div key={i} className="cred-entry">
                  <div className="cred-main">{l.name[lang]}</div>
                  <div className="cred-sub">{l.level[lang]}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

window.Experience = Experience;
