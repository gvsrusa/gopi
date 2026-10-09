"use client";

import { useEffect, useRef, useState } from "react";
import {
  MotionConfig,
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  profile,
  about,
  experience,
  education,
  skillGroups,
} from "./data.js";

const avatar = "/gopi.webp";

const nav = [
  ["About", "about"],
  ["Experience", "experience"],
  ["Education", "education"],
  ["Skills", "skills"],
  ["Contact", "contact"],
];

const NewTab = () => <span className="sr-only"> (opens in a new tab)</span>;

// Apple globalnav: 44px, translucent, saturate+blur backdrop
function Nav() {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    const onResize = () => window.innerWidth >= 640 && setOpen(false);
    document.body.style.overflow = "hidden";
    menuRef.current?.querySelector("a")?.focus();
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 bg-[rgba(250,250,252,0.8)] backdrop-blur-[20px] backdrop-saturate-[1.8]">
      <nav
        aria-label="Primary"
        className="relative mx-auto flex h-[44px] max-w-[1024px] items-center justify-between px-[22px] text-xs text-ink/80"
      >
        <a
          href="#top"
          aria-label={`${profile.name}, home`}
          className="flex items-center gap-2 font-semibold text-ink"
          onClick={() => setOpen(false)}
        >
          <img src={avatar} alt="" width={24} height={24} className="h-6 w-6 rounded-full object-cover" />
          <span>Gopi Chand</span>
        </a>

        <ul className="hidden gap-9 sm:flex">
          {nav.map(([label, id]) => (
            <li key={id}>
              <a href={`#${id}`} className="transition-colors hover:text-ink">
                {label}
              </a>
            </li>
          ))}
        </ul>

        <button
          ref={buttonRef}
          type="button"
          className="-mr-3 grid h-11 w-11 place-items-center sm:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(!open)}
        >
          <span aria-hidden="true" className="text-lg leading-none">{open ? "✕" : "☰"}</span>
        </button>
      </nav>

      {open && (
        <ul
          id="mobile-menu"
          ref={menuRef}
          className="absolute inset-x-0 top-[44px] h-[calc(100dvh-44px)] overflow-y-auto bg-[#fafafc] px-12 pt-6 sm:hidden"
        >
          {nav.map(([label, id]) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className="block py-2 text-[28px] font-semibold text-ink"
                onClick={() => setOpen(false)}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="bg-white">
      <div className="mx-auto max-w-[1024px] px-[22px] pt-16 pb-20 text-center md:pt-24">
        <img
          src={avatar}
          alt={profile.name}
          width={160}
          height={160}
          className="mx-auto h-32 w-32 rounded-full object-cover shadow-[0_10px_40px_rgba(0,0,0,0.12)] md:h-40 md:w-40"
        />
        <p className="mt-8 text-[17px] font-semibold text-ink-2">{profile.location}</p>
        {/* Only slide, never fade: the h1 is the LCP element */}
        <motion.h1
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="mt-2 text-[40px] leading-[1.05] tracking-[-0.015em] text-balance sm:text-[56px] md:text-[80px]"
        >
          {profile.name}
        </motion.h1>
        {/* Apple's Pro-page gradient headline treatment */}
        <p className="mt-3 bg-gradient-to-r from-[#0071e3] via-[#6e5cf6] to-[#bf4800] bg-clip-text text-[24px] leading-tight font-semibold text-transparent md:text-[32px]">
          {profile.role}
        </p>
        <p className="mx-auto mt-5 max-w-2xl text-[19px] leading-[1.42] text-pretty text-ink-2 md:text-[21px]">
          {profile.tagline}
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
          <a href="#experience" className="btn-pill">View my work</a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="link-chevron text-[17px]">
            LinkedIn<NewTab />
          </a>
        </div>

        {/* Apple-style big-number row */}
        <dl className="mx-auto mt-16 grid max-w-3xl grid-cols-3 gap-2 border-y border-black/10 py-10 sm:gap-4">
          {profile.stats.map((s) => (
            <div key={s.label} className="flex flex-col">
              <dt className="order-2 mt-2 text-[13px] font-semibold sm:text-[17px]">{s.label}</dt>
              <dd className="order-1 bg-gradient-to-b from-[#2997ff] to-[#0071e3] bg-clip-text text-[26px] leading-none font-semibold whitespace-nowrap text-transparent sm:text-[48px] md:text-[64px]">
                {s.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

// Each word brightens as it scrolls through the viewport (apple.com text-highlight effect)
function Word({ children, progress, range }) {
  const opacity = useTransform(progress, range, [0.2, 1]);
  return <motion.span style={{ opacity }}>{children} </motion.span>;
}

function About() {
  const textRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: textRef, offset: ["start 0.85", "end 0.4"] });
  const [lead, ...rest] = about;
  const words = lead.split(" ");

  return (
    <section id="about" className="bg-black py-24 text-[#f5f5f7] md:py-40">
      <div className="mx-auto max-w-[1024px] px-[22px]">
        <h2 className="text-[21px] font-semibold text-[#86868b]">About</h2>
        <p ref={textRef} className="mt-4 text-[28px] leading-[1.14] font-semibold tracking-[-0.01em] md:text-[48px] md:leading-[1.08]">
          {reduceMotion ? lead : (
            <>
              <span className="sr-only">{lead}</span>
              <span aria-hidden="true">
                {words.map((w, i) => (
                  <Word key={i} progress={scrollYProgress} range={[i / words.length, (i + 1) / words.length]}>{w}</Word>
                ))}
              </span>
            </>
          )}
        </p>
        {rest.map((p) => (
          <p key={p} className="reveal mt-10 max-w-3xl text-[19px] leading-[1.42] text-[#86868b] md:text-[21px]">{p}</p>
        ))}
      </div>
    </section>
  );
}

function SectionHead({ children }) {
  return (
    <h2 className="reveal text-[40px] leading-[1.1] md:text-[56px] md:leading-[1.07]">{children}</h2>
  );
}

function Experience() {
  return (
    <section id="experience" className="bg-tile py-24 md:py-32">
      <div className="mx-auto max-w-[1024px] px-[22px]">
        <SectionHead>Where I’ve worked.</SectionHead>
        <ul className="mt-12 grid gap-5">
          {experience.map((job, i) => (
            <li
              key={job.role}
              className={`reveal rounded-tile p-8 md:p-12 ${i === 0 ? "bg-black text-[#f5f5f7]" : "bg-white"}`}
            >
              <p className={`text-sm font-semibold ${i === 0 ? "text-[#f56300]" : "text-ink-2"}`}>
                {i === 0 ? "Current · " : ""}{job.period}
              </p>
              <h3 className="mt-2 text-[28px] leading-[1.14] md:text-[40px] md:leading-[1.1]">{job.role}</h3>
              <p className={`mt-1 text-[19px] md:text-[21px] ${i === 0 ? "text-[#86868b]" : "text-ink-2"}`}>
                {job.org} · {job.type} · {job.location}
              </p>
              <ul className="mt-6 max-w-3xl space-y-2 text-[17px]">
                {job.points.map((pt) => (
                  <li key={pt} className="flex gap-3">
                    <span aria-hidden="true" className="mt-[0.6em] h-1.5 w-1.5 shrink-0 rounded-full bg-apple-blue" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
              <ul aria-label="Skills used" className="mt-6 flex flex-wrap gap-2">
                {job.skills.map((s) => (
                  <li
                    key={s}
                    className={`rounded-full border px-4 py-1.5 text-[14px] ${i === 0 ? "border-white/20" : "border-black/15"}`}
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section id="education" className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-[1024px] px-[22px]">
        <SectionHead>How I trained.</SectionHead>
        <ul className="mt-12 grid gap-5 md:grid-cols-2">
          {education.map((ed) => (
            <li key={ed.school} className="reveal flex flex-col rounded-tile bg-tile p-8 md:p-10">
              <p className="text-sm font-semibold text-[#bf4800]">{ed.period}</p>
              <h3 className="mt-2 text-[24px] leading-[1.16] md:text-[28px]">{ed.degree}</h3>
              <p className="mt-1 text-[17px] font-semibold text-ink-2">{ed.school}</p>
              <p className="mt-4 text-[17px] text-ink-2">{ed.detail}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="bg-tile py-24 md:py-32">
      <div className="mx-auto max-w-[1024px] px-[22px]">
        <SectionHead>What I work with.</SectionHead>
        <ul className="mt-12 grid gap-5 md:grid-cols-2">
          {skillGroups.map((group) => (
            <li key={group.title} className="reveal rounded-tile bg-white p-8 md:p-10">
              <h3 className="text-[24px] leading-[1.16] md:text-[28px]">{group.title}</h3>
              <ul aria-label={group.title} className="mt-6 flex flex-wrap gap-2">
                {group.skills.map((s) => (
                  <li key={s} className="rounded-full border border-black/15 px-4 py-1.5 text-[14px]">
                    {s}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

// Apple globalfooter: 12px, muted ink, hairline divider
function Contact() {
  return (
    <footer id="contact" className="bg-white text-xs leading-4 text-black/56">
      <div className="mx-auto max-w-[1024px] px-[22px] py-24">
        <h2 className="text-[40px] leading-[1.1] text-ink md:text-[56px]">Let’s connect.</h2>
        <p className="mt-4 max-w-xl text-[19px] leading-[1.42] text-ink-2 md:text-[21px]">
          Open to NDT roles, engineering collaborations, and projects that sit at
          the intersection of testing and software.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-6">
          <a href={`mailto:${profile.email}`} className="btn-pill">Email me</a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="link-chevron text-[17px]">
            LinkedIn<NewTab />
          </a>
        </div>

        <div className="mt-20 border-t border-black/15 pt-4">
          <p>Copyright © {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    // reducedMotion="user": every framer-motion animation honours the OS setting
    <MotionConfig reducedMotion="user">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[60] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:text-ink focus:shadow"
      >
        Skip to content
      </a>
      <Nav />
      <main id="content">
        <Hero />
        <About />
        <Experience />
        <Education />
        <Skills />
      </main>
      <Contact />
    </MotionConfig>
  );
}
