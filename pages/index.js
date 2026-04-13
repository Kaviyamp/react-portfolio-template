import { useRef } from "react";
import Header from "../components/Header";
import Socials from "../components/Socials";
import Footer from "../components/Footer";
import Head from "next/head";
import Button from "../components/Button";
import Link from "next/link";
import Cursor from "../components/Cursor";
import { useIsomorphicLayoutEffect } from "../utils";
import { stagger } from "../animations";

import data from "../data/portfolio.json";

export default function Home() {
  const workRef = useRef();
  const aboutRef = useRef();
  const textOne = useRef();
  const textTwo = useRef();
  const textThree = useRef();
  const textFour = useRef();

  const handleWorkScroll = () => {
    window.scrollTo({ top: workRef.current.offsetTop, left: 0, behavior: "smooth" });
  };
  const handleAboutScroll = () => {
    window.scrollTo({ top: aboutRef.current.offsetTop, left: 0, behavior: "smooth" });
  };

  useIsomorphicLayoutEffect(() => {
    stagger(
      [textOne.current, textTwo.current, textThree.current, textFour.current],
      { y: 40, x: -10, transform: "scale(0.95) skew(10deg)" },
      { y: 0, x: 0, transform: "scale(1)" }
    );
  }, []);

  return (
    <div className={`relative ${data.showCursor && "cursor-none"}`} style={{ backgroundColor: "#0a0a0a", minHeight: "100vh", color: "#e5e5e5" }}>
      {data.showCursor && <Cursor />}
      <Head>
        <title>{data.name} | Cybersecurity Analyst</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
        <style>{`
          * { font-family: 'Inter', sans-serif; box-sizing: border-box; }
          body { background-color: #0a0a0a !important; color: #e5e5e5; }
          .section-divider { border: none; height: 1px; background: linear-gradient(to right, transparent, rgba(255,255,255,0.08), transparent); margin: 4rem 0; }
          .section-label { font-size: 0.7rem; font-weight: 600; letter-spacing: 0.15em; text-transform: uppercase; color: #6366f1; margin-bottom: 0.5rem; }
          .section-heading { font-size: 1.6rem; font-weight: 700; letter-spacing: -0.02em; color: #ffffff; margin-bottom: 2rem; }

          /* Cards */
          .card { background: #111111; border: 1px solid #1f1f1f; border-radius: 14px; padding: 1.5rem; transition: all 0.2s ease; }
          .card:hover { border-color: #333; transform: translateY(-3px); box-shadow: 0 8px 32px rgba(0,0,0,0.4); }

          /* Experience */
          .exp-card { background: #111111; border: 1px solid #1f1f1f; border-radius: 14px; padding: 1.75rem; margin-bottom: 1.25rem; transition: all 0.2s ease; }
          .exp-card:hover { border-color: #6366f1; }
          .exp-role { font-size: 1.05rem; font-weight: 600; color: #ffffff; }
          .exp-company { font-size: 0.9rem; color: #6366f1; font-weight: 500; margin-top: 2px; }
          .exp-dates { font-size: 0.75rem; color: #555; font-weight: 500; letter-spacing: 0.05em; }
          .exp-bullet { font-size: 0.85rem; color: #999; line-height: 1.7; padding-left: 1rem; position: relative; margin-bottom: 0.4rem; }
          .exp-bullet::before { content: "→"; position: absolute; left: 0; color: #6366f1; }

          /* Project cards */
          .proj-card { background: #111111; border: 1px solid #1f1f1f; border-radius: 14px; overflow: hidden; transition: all 0.2s ease; }
          .proj-card:hover { border-color: #333; transform: translateY(-3px); box-shadow: 0 8px 32px rgba(0,0,0,0.4); }
          .proj-img { width: 100%; height: 160px; object-fit: cover; }
          .proj-body { padding: 1.25rem; }
          .proj-title { font-size: 0.95rem; font-weight: 600; color: #fff; margin-bottom: 0.4rem; }
          .proj-dates { font-size: 0.7rem; color: #6366f1; font-weight: 500; letter-spacing: 0.05em; margin-bottom: 0.5rem; }
          .proj-desc { font-size: 0.82rem; color: #888; line-height: 1.65; margin-bottom: 1rem; }
          .tag { display: inline-block; background: #1a1a2e; color: #818cf8; font-size: 0.7rem; font-weight: 500; padding: 0.2rem 0.6rem; border-radius: 999px; margin: 0.15rem; border: 1px solid #2d2d5e; }
          .proj-links { display: flex; gap: 0.75rem; margin-top: 1rem; }
          .proj-link { font-size: 0.78rem; color: #6366f1; text-decoration: none; border: 1px solid #2d2d5e; padding: 0.3rem 0.75rem; border-radius: 6px; transition: all 0.2s; }
          .proj-link:hover { background: #6366f1; color: white; }
          .proj-link.youtube { color: #ef4444; border-color: #3d1a1a; }
          .proj-link.youtube:hover { background: #ef4444; color: white; }

          /* Undergrad projects */
          .ugrad-card { background: #111111; border: 1px solid #1f1f1f; border-radius: 12px; padding: 1.25rem 1.5rem; transition: all 0.2s ease; }
          .ugrad-card:hover { border-color: #333; }
          .ugrad-title { font-size: 0.92rem; font-weight: 600; color: #fff; margin-bottom: 0.4rem; }
          .ugrad-desc { font-size: 0.82rem; color: #888; line-height: 1.6; margin-bottom: 0.75rem; }
          .ugrad-badge { display: inline-block; background: #1a1f1a; color: #4ade80; font-size: 0.65rem; font-weight: 600; padding: 0.15rem 0.5rem; border-radius: 999px; border: 1px solid #1e3a1e; margin-left: 0.5rem; }

          /* Certification cards */
          .cert-card { background: #111111; border: 1px solid #1f1f1f; border-radius: 12px; padding: 1.1rem 1.25rem; display: flex; align-items: center; gap: 1rem; transition: all 0.2s ease; }
          .cert-card:hover { border-color: #6366f1; }
          .cert-icon { font-size: 1.5rem; width: 44px; height: 44px; display: flex; align-items: center; justify-content: center; background: #1a1a1a; border-radius: 10px; flex-shrink: 0; }
          .cert-title { font-size: 0.85rem; font-weight: 500; color: #e5e5e5; line-height: 1.4; }
          .cert-issuer { font-size: 0.7rem; font-weight: 500; letter-spacing: 0.05em; color: #555; margin-top: 2px; text-transform: uppercase; }

          /* Skills */
          .skill-pill { display: inline-block; border: 1px solid #1f1f1f; color: #aaa; font-size: 0.78rem; font-weight: 400; padding: 0.35rem 0.9rem; border-radius: 999px; margin: 0.2rem; transition: all 0.15s; }
          .skill-pill:hover { border-color: #6366f1; color: #818cf8; }
          .skill-category-label { font-size: 0.68rem; font-weight: 600; letter-spacing: 0.12em; color: #555; text-transform: uppercase; margin: 1.25rem 0 0.5rem; }

          /* Mindset */
          .mindset-card { background: linear-gradient(135deg, #111111, #0f0f1a); border: 1px solid #1f2a3a; border-radius: 14px; padding: 1.5rem; transition: all 0.2s; }
          .mindset-card:hover { border-color: #6366f1; }
          .mindset-title { font-size: 0.95rem; font-weight: 600; color: #818cf8; margin-bottom: 0.6rem; }
          .mindset-desc { font-size: 0.85rem; color: #888; line-height: 1.7; }

          /* Who am I */
          .whoami-block { border-left: 3px solid #6366f1; padding-left: 1.5rem; margin-bottom: 1.75rem; }
          .whoami-label { font-size: 0.68rem; font-weight: 700; letter-spacing: 0.12em; color: #6366f1; text-transform: uppercase; margin-bottom: 0.4rem; }
          .whoami-text { font-size: 1rem; color: #bbb; line-height: 1.8; font-weight: 300; }

          /* Contact */
          .contact-item { display: flex; align-items: center; gap: 0.75rem; padding: 0.9rem 1.25rem; background: #111111; border: 1px solid #1f1f1f; border-radius: 10px; margin-bottom: 0.75rem; text-decoration: none; color: #e5e5e5; transition: all 0.2s; }
          .contact-item:hover { border-color: #6366f1; color: #818cf8; }
          .contact-label { font-size: 0.7rem; color: #555; text-transform: uppercase; letter-spacing: 0.08em; }
          .contact-value { font-size: 0.9rem; font-weight: 500; }

          /* Publication */
          .pub-card { background: #111111; border: 1px solid #1f1f1f; border-radius: 12px; padding: 1.5rem; border-left: 3px solid #6366f1; }
          .pub-title { font-size: 0.95rem; font-weight: 600; color: #fff; margin-bottom: 0.4rem; }
          .pub-journal { font-size: 0.78rem; color: #6366f1; margin-bottom: 0.5rem; }
          .pub-desc { font-size: 0.82rem; color: #888; line-height: 1.6; }

          /* Resume download */
          .resume-btn { display: inline-flex; align-items: center; gap: 0.5rem; background: #6366f1; color: white; font-size: 0.85rem; font-weight: 600; padding: 0.75rem 1.5rem; border-radius: 8px; text-decoration: none; transition: all 0.2s; border: none; cursor: pointer; }
          .resume-btn:hover { background: #4f46e5; transform: translateY(-1px); }
        `}</style>
      </Head>

      <div className="gradient-circle" style={{ opacity: 0.3 }}></div>
      <div className="gradient-circle-bottom" style={{ opacity: 0.2 }}></div>

      <div className="container mx-auto mb-10 px-4 laptop:px-0" style={{ maxWidth: "1100px" }}>
        <Header handleWorkScroll={handleWorkScroll} handleAboutScroll={handleAboutScroll} />

        {/* ── HERO ── */}
        <div className="laptop:mt-20 mt-10">
          <div className="mt-5">
            <h1 ref={textOne} className="text-3xl tablet:text-5xl laptop:text-6xl p-1 tablet:p-2 font-bold tracking-tight" style={{ color: "#ffffff" }}>
              {data.headerTaglineOne}
            </h1>
            <h1 ref={textTwo} className="text-3xl tablet:text-5xl laptop:text-6xl p-1 tablet:p-2 font-bold tracking-tight" style={{ color: "#ffffff" }}>
              {data.headerTaglineTwo}
            </h1>
            <h1 ref={textThree} className="text-3xl tablet:text-5xl laptop:text-6xl p-1 tablet:p-2 font-bold tracking-tight" style={{ color: "#ffffff" }}>
              {data.headerTaglineThree}
            </h1>
            <h1 ref={textFour} className="text-base tablet:text-xl p-1 tablet:p-2 font-normal mt-3" style={{ color: "#666" }}>
              {data.headerTaglineFour}
            </h1>
          </div>
          <div className="mt-6 flex flex-wrap gap-3 items-center">
            <Socials className="mt-2 laptop:mt-5" />
            <a href="/Kaviya.pdf" download className="resume-btn">
              ⬇ Download Resume
            </a>
          </div>
        </div>

        <hr className="section-divider" />

        {/* ── WHO AM I ── */}
        <div className="mt-10 laptop:mt-16 p-2 laptop:p-0" ref={aboutRef}>
          <p className="section-label">Get to Know Me</p>
          <h2 className="section-heading">WHO AM I</h2>

          <div className="laptop:w-4/5">
            <div className="whoami-block">
              <p className="whoami-label">My Journey</p>
              <p className="whoami-text">{data.whoami.transition}</p>
            </div>
            <div className="whoami-block">
              <p className="whoami-label">What I Specialise In</p>
              <p className="whoami-text">{data.whoami.specialisation}</p>
            </div>
            <div className="whoami-block">
              <p className="whoami-label">Why to Hire Me</p>
              <p className="whoami-text">{data.whoami.whyhire}</p>
            </div>
          </div>
        </div>

        <hr className="section-divider" />

        {/* ── SECURITY MINDSET ── */}
        <div className="mt-10 laptop:mt-16 p-2 laptop:p-0">
          <p className="section-label">How I Think</p>
          <h2 className="section-heading">SECURITY MINDSET</h2>
          <div className="grid grid-cols-1 laptop:grid-cols-3 gap-5">
            {data.securityMindset.map((item) => (
              <div key={item.id} className="mindset-card">
                <p className="mindset-title">{item.title}</p>
                <p className="mindset-desc">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <hr className="section-divider" />

        {/* ── EXPERIENCE ── */}
        <div className="mt-10 laptop:mt-16 p-2 laptop:p-0" ref={workRef}>
          <p className="section-label">Work History</p>
          <h2 className="section-heading">EXPERIENCE</h2>
          {data.experiences.map((exp) => (
            <div key={exp.id} className="exp-card">
              <div className="flex flex-wrap justify-between items-start mb-3">
                <div>
                  <p className="exp-role">{exp.role}</p>
                  <p className="exp-company">{exp.company} · {exp.location}</p>
                </div>
                <span className="exp-dates mt-1">{exp.dates}</span>
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {exp.bullets.map((b, i) => (
                  <li key={i} className="exp-bullet">{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <hr className="section-divider" />

        {/* ── MASTERS PROJECTS ── */}
        <div className="mt-10 laptop:mt-16 p-2 laptop:p-0">
          <p className="section-label">Master of Cyber Security — University of Adelaide</p>
          <h2 className="section-heading">Cybersecurity Projects & Research</h2>
          <div className="grid grid-cols-1 tablet:grid-cols-2 gap-5">
            {data.mastersProjects.map((proj) => (
              <div key={proj.id} className="proj-card">
                <img src={proj.imageSrc} alt={proj.title} className="proj-img" />
                <div className="proj-body">
                  <p className="proj-dates">{proj.dates}</p>
                  <p className="proj-title">{proj.title}</p>
                  <p className="proj-desc">{proj.description}</p>
                  <div>{proj.tags.map((t) => <span key={t} className="tag">{t}</span>)}</div>
                  <div className="proj-links">
                    <a href={proj.url} target="_blank" rel="noreferrer" className="proj-link">View on GitHub →</a>
                    {proj.youtubeUrl && (
                      <a href={proj.youtubeUrl} target="_blank" rel="noreferrer" className="proj-link youtube">▶ Watch Demo</a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <hr className="section-divider" />

        {/* ── UNDERGRAD PROJECTS ── */}
        <div className="mt-10 laptop:mt-16 p-2 laptop:p-0">
          <p className="section-label">Bachelor of Electronics & Communication Engineering </p>
          <h2 className="section-heading">Undergraduate Projects</h2>
          <div className="grid grid-cols-1 tablet:grid-cols-2 gap-4">
            {data.undergradProjects.map((proj) => (
              <div key={proj.id} className="ugrad-card">
                <p className="ugrad-title">
                  {proj.title}
                  {proj.id === "4" && <span className="ugrad-badge">🏭 R&D Product</span>}
                </p>
                <p className="ugrad-desc">{proj.description}</p>
                <div style={{ marginBottom: "0.75rem" }}>
                  {proj.tags.map((t) => <span key={t} className="tag">{t}</span>)}
                </div>
                <a href={proj.url} target="_blank" rel="noreferrer" className="proj-link" style={{ fontSize: "0.78rem" }}>
                  View Project →
                </a>
              </div>
            ))}
          </div>
        </div>

        <hr className="section-divider" />

        {/* ── PUBLICATION ── */}
        <div className="mt-10 laptop:mt-16 p-2 laptop:p-0">
          <p className="section-label">Academic</p>
          <h2 className="section-heading">Published Research</h2>
          {data.publications.map((pub) => (
            <div key={pub.id} className="pub-card laptop:w-3/4">
              <p className="pub-title">📄 {pub.title}</p>
              <p className="pub-journal">{pub.journal} · {pub.volume}</p>
              <p className="pub-desc">{pub.description}</p>
            </div>
          ))}
        </div>

        <hr className="section-divider" />

        {/* ── EXPERTISE ── */}
        <div className="mt-10 laptop:mt-16 p-2 laptop:p-0">
          <p className="section-label">What I Do</p>
          <h2 className="section-heading">EXPERTISE</h2>
          <div className="grid grid-cols-1 laptop:grid-cols-2 gap-5">
            {data.services.map((service, index) => (
              <div key={index} className="card">
                <p style={{ fontSize: "0.95rem", fontWeight: 600, color: "#fff", marginBottom: "0.5rem" }}>{service.title}</p>
                <p style={{ fontSize: "0.85rem", color: "#888", lineHeight: 1.7 }}>{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        <hr className="section-divider" />

        {/* ── CERTIFICATIONS ── */}
        <div className="mt-10 laptop:mt-16 p-2 laptop:p-0">
          <p className="section-label">Credentials</p>
          <h2 className="section-heading">CERTIFICATIONS</h2>
          <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-4">
            {data.certifications.map((cert) => (
              <div key={cert.id} className="cert-card">
                <div className="cert-icon">{cert.icon}</div>
                <div>
                  <p className="cert-title">{cert.title}</p>
                  <p className="cert-issuer">{cert.issuer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <hr className="section-divider" />

        {/* ── SKILLS ── */}
        <div className="mt-10 laptop:mt-16 p-2 laptop:p-0">
          <p className="section-label">Capabilities</p>
          <h2 className="section-heading">TECHNICAL SKILLS</h2>

          <p className="skill-category-label">Cyber Skills</p>
          <div>{data.skills.cyber.map((s) => <span key={s} className="skill-pill">{s}</span>)}</div>

          <p className="skill-category-label">Frameworks</p>
          <div>{data.skills.frameworks.map((s) => <span key={s} className="skill-pill">{s}</span>)}</div>

          <p className="skill-category-label">Tools & Methodologies</p>
          <div>{data.skills.tools.map((s) => <span key={s} className="skill-pill">{s}</span>)}</div>

          <p className="skill-category-label">Programming & OS</p>
          <div>
            {data.skills.programming.map((s) => <span key={s} className="skill-pill">{s}</span>)}
            {data.skills.os.map((s) => <span key={s} className="skill-pill">{s}</span>)}
          </div>

          <p className="skill-category-label">AI & Machine Learning</p>
          <div>{data.skills.aiml.map((s) => <span key={s} className="skill-pill">{s}</span>)}</div>
        </div>

        <hr className="section-divider" />
<hr className="section-divider" />

{/* ── SOFT SKILLS ── */}
{data.softSkills && (
  <div className="mt-10 laptop:mt-16 p-2 laptop:p-0">
    <p className="section-label">What I Bring to a Team</p>
    <h2 className="section-heading">Beyond soft skills</h2>
    <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-5">
      {data.softSkills.map((skill) => (
        <div key={skill.id} className="mindset-card">
          <p style={{ fontSize: "1.75rem", marginBottom: "0.75rem" }}>{skill.icon}</p>
          <p className="mindset-title">{skill.title}</p>
          <p className="mindset-desc">{skill.description}</p>
        </div>
      ))}
    </div>
  </div>
)}
        {/* ── CONTACT ── */}
        <div className="mt-10 laptop:mt-16 p-2 laptop:p-0">
          <p className="section-label">Get in Touch</p>
          <div className="laptop:w-2/5">
            <a href={`mailto:${data.contact.email}`} className="contact-item">
              <span style={{ fontSize: "1.2rem" }}>✉️</span>
              <div>
                <p className="contact-label">Email</p>
                <p className="contact-value">{data.contact.email}</p>
              </div>
            </a>
            <a href={`tel:${data.contact.phone}`} className="contact-item">
              <span style={{ fontSize: "1.2rem" }}>📱</span>
              <div>
                <p className="contact-label">Phone</p>
                <p className="contact-value">{data.contact.phone}</p>
              </div>
            </a>
            <a href={data.contact.linkedin} target="_blank" rel="noreferrer" className="contact-item">
              <span style={{ fontSize: "1.2rem" }}>💼</span>
              <div>
                <p className="contact-label">LinkedIn</p>
                <p className="contact-value">kaviya-manickavasagam-panneerselvam</p>
              </div>
            </a>
            <a href={data.contact.github} target="_blank" rel="noreferrer" className="contact-item">
              <span style={{ fontSize: "1.2rem" }}>🐙</span>
              <div>
                <p className="contact-label">GitHub</p>
                <p className="contact-value">Kaviyamp</p>
              </div>
            </a>

            <div style={{ marginTop: "1.5rem" }}>
              <a href="/Kaviya.pdf" download className="resume-btn">
                ⬇ Download Full Resume (PDF)
              </a>
            </div>
          </div>
        </div>

        {process.env.NODE_ENV === "development" && (
          <div className="fixed bottom-5 right-5">
            <Link href="/edit">
              <Button type="primary">Edit Data</Button>
            </Link>
          </div>
        )}

        <Footer />
      </div>
    </div>
  );
}
