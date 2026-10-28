// Resume generator — opens a print-styled window with the résumé,
// user triggers Save as PDF from the print dialog.

window.generateResume = function(lang) {
  const isAr = lang === 'ar';
  const esc = (v) => String(v).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  // Keep Latin terms, dates and numbers intact inside RTL text
  const ltr = (v) => isAr ? `<bdi>${esc(v)}</bdi>` : esc(v);
  const sepList = isAr ? '، ' : ', ';

  // Content comes from the same data as the site so the two cannot drift apart
  const jobs = window.EXPERIENCE;
  const cred = window.CREDENTIALS;
  const present = isAr ? 'حتى الآن' : 'Present';

  const skillsHtml = window.SKILLS.map(c => `
      <div class="sk"><span class="sk-h">${esc(c.cat[lang])}</span> — ${c.items.map(i => ltr(i.name)).join(sepList)}</div>`).join('');

  const expHtml = jobs.map(j => `
  <div class="job">
    <div class="job-h">
      <div class="job-t">${esc(j.title[lang])}</div>
      <div class="job-meta">${esc(window.fmtDate(j.start, lang))} – ${j.end === 'present' ? present : esc(window.fmtDate(j.end, lang))}</div>
    </div>
    <div class="job-c">${ltr(j.company)} · ${esc(j.location[lang])} · ${esc(j.mode[lang])}</div>
    <ul>${j.bullets[lang].map(b => `<li>${esc(b)}</li>`).join('')}</ul>
  </div>`).join('');

  // October Rent (the CV project) keeps its description; the rest are one-line entries
  const projHtml = window.PROJECTS.map((p, i) => {
    const n = p.name[lang];
    const nm = [0, 1].map(k => p.nameItalic === k ? `<em>${esc(n[k])}</em>` : esc(n[k])).join(' ');
    return `
  <div class="project">
    <div class="project-h">
      <div class="project-t">${nm}</div>
      <div class="project-meta">${window.fmtNum(p.year, lang)}</div>
    </div>
    <div class="project-d">${esc(i === 0 ? p.tagline[lang] : p.type[lang])}${i === 0 ? '' : ' · '}${i === 0 ? '' : `<span class="project-tags">${p.tags.map(esc).join(' · ')}</span>`}</div>
    ${i === 0 ? `<div class="project-tags">${p.tags.map(esc).join(' · ')}</div>` : ''}
  </div>`;
  }).join('');

  const eduHtml = cred.education.map(e => `
  <div class="cred-line"><strong>${esc(e.degree[lang])}</strong> — ${esc(e.school[lang])} — ${esc(window.fmtDate(e.graduated, lang))} — ${esc(e.gpa[lang])}</div>`).join('');
  // TODO: confirm each certification is earned and add dates/IDs
  const certHtml = cred.certifications.map(c => `${ltr(c.name)} (${ltr(c.full)})`).join(sepList);
  const langHtml = cred.languages.map(l => `${esc(l.name[lang])}: ${esc(l.level[lang])}`).join(' · ');

  const html = `
<!DOCTYPE html>
<html lang="${lang}" dir="${isAr ? 'rtl' : 'ltr'}">
<head>
<meta charset="UTF-8">
<title>${isAr ? 'السيرة الذاتية — عبدالرحمن السنوسي' : 'Résumé — Abdelrahman Alsanosy'}</title>
<style>
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=Manrope:wght@300;400;500;600&family=Amiri:ital,wght@0,400;0,700;1,400&family=Tajawal:wght@300;400;500;700&family=JetBrains+Mono:wght@400&display=swap');

* { box-sizing: border-box; margin: 0; padding: 0; }

body {
  font-family: ${isAr ? "'Tajawal'" : "'Manrope'"}, sans-serif;
  font-size: 9.5pt;
  line-height: 1.4;
  color: #1A1714;
  background: #F4EFE2;
  padding: 40pt 48pt;
  max-width: 8.5in;
  margin: 0 auto;
  font-weight: 300;
}
@page { size: A4; margin: 12mm 14mm; }
@media print { body { padding: 0; max-width: none; } }

.serif { font-family: ${isAr ? "'Amiri'" : "'Cormorant Garamond'"}, serif; font-weight: 400; }
.mono { font-family: 'JetBrains Mono', monospace; }
.gold { color: #8E7842; }

.head { display: flex; justify-content: space-between; align-items: flex-end; padding-bottom: 8pt; border-bottom: 1pt solid #8E7842; margin-bottom: 8pt; }
.name { font-family: ${isAr ? "'Amiri'" : "'Cormorant Garamond'"}, serif; font-size: 34pt; line-height: 1; letter-spacing: -0.02em; font-weight: 400; }
.name em { font-style: italic; color: #8E7842; }
.contact { text-align: ${isAr ? 'left' : 'right'}; font-family: 'JetBrains Mono', monospace; font-size: 8pt; letter-spacing: 0.05em; line-height: 1.6; }
.contact a { color: inherit; text-decoration: none; }

.role { font-family: ${isAr ? "'Amiri'" : "'Cormorant Garamond'"}, serif; font-style: italic; font-size: 14pt; color: #8E7842; margin-bottom: 6pt; }

.summary { font-family: ${isAr ? "'Amiri'" : "'Cormorant Garamond'"}, serif; font-size: 10.5pt; line-height: 1.4; font-weight: 400; margin-bottom: 4pt; }
.summary em { color: #8E7842; font-style: italic; }

.section-h { font-family: 'JetBrains Mono', monospace; font-size: 9pt; letter-spacing: 0.25em; text-transform: uppercase; color: #8E7842; padding-bottom: 5pt; border-bottom: 0.5pt solid #BFB298; margin-bottom: 7pt; margin-top: 10pt; }

.skills-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 3pt 18pt; }
.sk { font-size: 8.8pt; color: #44403B; line-height: 1.35; page-break-inside: avoid; }
.sk-h { font-family: ${isAr ? "'Amiri'" : "'Cormorant Garamond'"}, serif; font-style: italic; font-size: 11pt; color: #1A1714; }

.job { margin-bottom: 8pt; page-break-inside: avoid; }
.job-h { display: flex; justify-content: space-between; align-items: baseline; }
.job-t { font-family: ${isAr ? "'Amiri'" : "'Cormorant Garamond'"}, serif; font-size: 13pt; font-weight: 500; }
.job-meta { font-family: 'JetBrains Mono', monospace; font-size: 8pt; color: #8E7842; letter-spacing: 0.08em; }
.job-c { font-family: 'JetBrains Mono', monospace; font-size: 8pt; color: #7A746A; margin: 1pt 0 3pt; }
.job ul { list-style: none; }
.job li { font-size: 8.8pt; color: #44403B; padding-${isAr ? 'right' : 'left'}: 10pt; position: relative; margin-bottom: 1pt; }
.job li::before { content: "·"; color: #8E7842; font-weight: 700; position: absolute; ${isAr ? 'right' : 'left'}: 0; }

.project { margin-bottom: 4pt; page-break-inside: avoid; }
.project-h { display: flex; justify-content: space-between; align-items: baseline; }
.project-t { font-family: ${isAr ? "'Amiri'" : "'Cormorant Garamond'"}, serif; font-size: 12.5pt; font-weight: 500; }
.project-t em { font-style: italic; color: #8E7842; }
.project-meta { font-family: 'JetBrains Mono', monospace; font-size: 8pt; color: #8E7842; letter-spacing: 0.1em; }
.project-d { font-size: 9pt; color: #44403B; margin: 1pt 0 2pt; line-height: 1.35; }
.project-tags { font-family: 'JetBrains Mono', monospace; font-size: 7.5pt; color: #8E7842; letter-spacing: 0.08em; text-transform: uppercase; }

.cred-line { font-size: 9pt; color: #44403B; margin-bottom: 3pt; page-break-inside: avoid; }
.cred-line strong { font-weight: 500; color: #1A1714; }

.foot { margin-top: 10pt; padding-top: 6pt; border-top: 0.5pt solid #BFB298; display: flex; justify-content: space-between; font-family: 'JetBrains Mono', monospace; font-size: 8.5pt; color: #7A746A; letter-spacing: 0.15em; text-transform: uppercase; }
</style>
</head>
<body>
  <div class="head">
    <div>
      <div class="name">${isAr ? 'عبدالرحمن<br><em>السنوسي</em>' : 'Abdelrahman<br><em>Alsanosy</em>'}</div>
    </div>
    <div class="contact">
      <div>${isAr ? 'القاهرة، مصر' : 'CAIRO · EGYPT'}</div>
      <div dir="ltr">abdoelsanosy1@gmail.com</div>
      <div dir="ltr">+20 109 752 5324</div>
      <div dir="ltr">github.com/abdelrahmanelsanosy</div>
      <div dir="ltr">/in/abdelrahman-alsanosy</div>
    </div>
  </div>

  <div class="role">${isAr ? 'رئيس قسم تقنية المعلومات | إدارة الأنظمة والبنية التحتية' : 'IT Section Head | Systems Administration & Infrastructure'}</div>

  <div class="summary">
    ${isAr
      ? 'مسؤول أنظمة ورئيس قسم تقنية المعلومات بخبرة تتجاوز ٦ سنوات في دعم بيئات مؤسسية يتراوح عدد مستخدميها بين ٣٠٠ وأكثر من ١٬٢٠٠ مستخدم، في Windows Server وActive Directory وVMware ESXi ومبدّلات Cisco وVLAN وجدران حماية Sophos وpfSense، إضافةً إلى إدارة أنظمة ERP ونشر البرمجيات المؤسسية. أقود حالياً فريق الدعم الفني في <em>Alamir Group</em>. خفضت التوقف غير المخطط بنسبة ٨٠٪ في Gharbia، وأحمل شهادات Cisco (CCNA/CCNP) وMicrosoft (MCSA/MCSE).'
      : 'IT Systems Administrator and IT Section Head with 6+ years supporting enterprise environments of 300–1,200+ users, across Windows Server, Active Directory, VMware ESXi, Cisco switching and VLANs, and Sophos and pfSense firewalls, plus ERP administration and enterprise software deployment. Currently leading the IT Support team at <em>Alamir Group</em>. Reduced unplanned downtime by 80% at Gharbia; holds Cisco (CCNA/CCNP) and Microsoft (MCSA/MCSE) certifications.'
    }
  </div>

  <div class="section-h">${isAr ? 'المهارات التقنية' : 'Technical Skills'}</div>
  <div class="skills-grid">${skillsHtml}
  </div>

  <div class="section-h">${isAr ? 'الخبرات المهنية' : 'Professional Experience'}</div>${expHtml}

  <div class="section-h">${isAr ? 'المشاريع' : 'Projects'}</div>${projHtml}

  <div class="section-h">${isAr ? 'التعليم' : 'Education'}</div>${eduHtml}

  <div class="section-h">${isAr ? 'الشهادات' : 'Certifications'}</div>
  <div class="cred-line">${certHtml}</div>

  <div class="section-h">${isAr ? 'اللغات' : 'Languages'}</div>
  <div class="cred-line">${langHtml}</div>

  <div class="foot">
    <span>${isAr ? 'عبدالرحمن السنوسي' : 'Abdelrahman Alsanosy'}</span>
    <span>abdoelsanosy1@gmail.com</span>
  </div>

  <script>window.onload = () => setTimeout(() => window.print(), 300);</script>
</body>
</html>`;

  const w = window.open('', '_blank');
  w.document.write(html);
  w.document.close();
};
