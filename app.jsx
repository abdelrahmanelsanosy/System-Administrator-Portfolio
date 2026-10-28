// Root App — wires everything together

const { useState: useStateRoot, useEffect: useEffectRoot } = React;

function App() {
  // Tweaks (theme only)
  const t_defaults = /*EDITMODE-BEGIN*/{
    "theme": "dark"
  }/*EDITMODE-END*/;
  const [tweakState, setTweak] = useTweaks(t_defaults);

  // Language
  const [lang, setLang] = useStateRoot(() => {
    return localStorage.getItem('portfolio-lang') || 'en';
  });
  useEffectRoot(() => {
    localStorage.setItem('portfolio-lang', lang);
    document.body.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  // Theme application
  useEffectRoot(() => {
    document.documentElement.setAttribute('data-theme', tweakState.theme || 'dark');
  }, [tweakState.theme]);

  // Case study state
  const [caseIdx, setCaseIdx] = useStateRoot(null);
  const projects = window.PROJECTS;
  const t = window.I18N[lang];

  const openCase = (i) => setCaseIdx(i);
  const closeCase = () => setCaseIdx(null);
  const nextCase = () => setCaseIdx((caseIdx + 1) % projects.length);
  const prevCase = () => setCaseIdx((caseIdx - 1 + projects.length) % projects.length);

  // Reveal-on-scroll
  useEffectRoot(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [lang]);

  const onResume = () => {
    window.generateResume(lang);
  };

  return (
    <div className="app">
      <Nav t={t} lang={lang} setLang={setLang} />
      <Hero t={t} lang={lang} />
      <About t={t} lang={lang} />
      <Experience t={t} lang={lang} />
      <Skills t={t} lang={lang} />
      <Projects t={t} lang={lang} openCase={openCase} />
      <Contact t={t} lang={lang} />
      <Footer t={t} lang={lang} onResume={onResume} />

      {caseIdx !== null && (
        <CaseStudy
          project={projects[caseIdx]}
          t={t}
          lang={lang}
          onClose={closeCase}
          onNext={nextCase}
          onPrev={prevCase}
          nextProject={projects[(caseIdx + 1) % projects.length]}
          prevProject={projects[(caseIdx - 1 + projects.length) % projects.length]}
        />
      )}

      <TweaksPanel title="Tweaks">
        <TweakSection label="Theme" />
        <TweakRadio
          label="Mode"
          value={tweakState.theme || 'dark'}
          onChange={v => setTweak('theme', v)}
          options={[
            { value: 'dark', label: 'Dark' },
            { value: 'light', label: 'Light' }
          ]}
        />
      </TweaksPanel>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
