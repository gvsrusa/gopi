"use client";

import { motion } from "framer-motion";
import {
  profile,
  about,
  experience,
  education,
  skillGroups,
} from "./data.js";

const avatar = "/gopi.png";

const nav = [
  ["About", "about"],
  ["Experience", "experience"],
  ["Education", "education"],
  ["Skills", "skills"],
  ["Contact", "contact"],
];

const fade = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

function Section({ id, kicker, title, children }) {
  return (
    <motion.section
      id={id}
      className="mx-auto w-full max-w-4xl px-6 py-20 sm:py-24"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={{ show: { transition: { staggerChildren: 0.08 } } }}
    >
      <motion.div variants={fade} className="mb-10">
        <p className="mb-2 font-mono text-sm tracking-widest text-accent2 uppercase">
          {kicker}
        </p>
        <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
          {title}
        </h2>
      </motion.div>
      {children}
    </motion.section>
  );
}

function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line/70 bg-ink/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2.5 font-display text-lg font-bold text-white">
          <img
            src={avatar}
            alt="Gopi Chand Gorantla"
            className="h-9 w-9 rounded-full object-cover ring-1 ring-line"
          />
          <span className="hidden sm:inline">Gopi Chand</span>
        </a>
        <nav className="hidden gap-7 text-sm text-mist sm:flex">
          {nav.map(([label, id]) => (
            <a
              key={id}
              href={`#${id}`}
              className="transition-colors hover:text-white"
            >
              {label}
            </a>
          ))}
        </nav>
        <a
          href={`mailto:${profile.email}`}
          className="rounded-full border border-line px-4 py-1.5 text-sm text-white transition-colors hover:border-accent hover:bg-accent/10"
        >
          Get in touch
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="backdrop relative overflow-hidden">
      <div className="mx-auto flex min-h-screen max-w-4xl flex-col justify-center px-6 pt-28 pb-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <img
            src={avatar}
            alt="Gopi Chand Gorantla"
            className="h-28 w-28 rounded-full object-cover shadow-2xl ring-2 ring-accent/40 sm:h-32 sm:w-32"
          />
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-4 font-mono text-sm tracking-widest text-accent2 uppercase"
        >
          {profile.location}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="font-display text-5xl leading-[1.05] font-bold tracking-tight text-white sm:text-7xl"
        >
          {profile.name}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-4 bg-gradient-to-r from-accent to-accent2 bg-clip-text text-xl font-semibold text-transparent sm:text-2xl"
        >
          {profile.role}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-6 max-w-2xl text-lg leading-relaxed text-mist"
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-8 flex flex-wrap gap-4"
        >
          <a
            href="#experience"
            className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5"
          >
            View my work
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-line px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-accent hover:bg-accent/10"
          >
            LinkedIn ↗
          </a>
        </motion.div>

        <motion.dl
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-14 grid max-w-lg grid-cols-3 gap-6"
        >
          {profile.stats.map((s) => (
            <div key={s.label}>
              <dt className="font-display text-3xl font-bold text-white">
                {s.value}
              </dt>
              <dd className="mt-1 text-sm text-mist">{s.label}</dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}

function Card({ children }) {
  return (
    <motion.div
      variants={fade}
      className="rounded-2xl border border-line bg-panel/60 p-6 transition-colors hover:border-accent/40"
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />

        <Section id="about" kicker="01 · About" title="Who I am">
          <div className="space-y-5 text-lg leading-relaxed text-mist">
            {about.map((p, i) => (
              <motion.p key={i} variants={fade}>
                {p}
              </motion.p>
            ))}
          </div>
        </Section>

        <Section id="experience" kicker="02 · Experience" title="Where I've worked">
          <div className="space-y-6">
            {experience.map((job) => (
              <Card key={job.role}>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-display text-xl font-semibold text-white">
                    {job.role}{" "}
                    <span className="text-accent">· {job.org}</span>
                  </h3>
                  <span className="font-mono text-sm text-mist">
                    {job.period}
                  </span>
                </div>
                <p className="mt-1 text-sm text-mist">
                  {job.type} · {job.location}
                </p>
                <ul className="mt-4 space-y-2">
                  {job.points.map((pt, i) => (
                    <li key={i} className="flex gap-3 text-mist">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent2" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-2">
                  {job.skills.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-line bg-ink px-3 py-1 text-xs text-mist"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </Section>

        <Section id="education" kicker="03 · Education" title="How I trained">
          <div className="space-y-6">
            {education.map((ed) => (
              <Card key={ed.school}>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-display text-xl font-semibold text-white">
                    {ed.school}
                  </h3>
                  <span className="font-mono text-sm text-mist">
                    {ed.period}
                  </span>
                </div>
                <p className="mt-1 font-medium text-accent">{ed.degree}</p>
                <p className="mt-2 text-mist">{ed.detail}</p>
              </Card>
            ))}
          </div>
        </Section>

        <Section id="skills" kicker="04 · Skills" title="What I work with">
          <div className="grid gap-6 sm:grid-cols-2">
            {skillGroups.map((group) => (
              <Card key={group.title}>
                <h3 className="font-display text-lg font-semibold text-white">
                  {group.title}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.skills.map((s) => (
                    <span
                      key={s}
                      className="rounded-lg border border-line bg-ink px-3 py-1.5 text-sm text-mist transition-colors hover:border-accent2/50 hover:text-white"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </Section>

        <Section id="contact" kicker="05 · Contact" title="Let's connect">
          <motion.div variants={fade}>
            <p className="max-w-xl text-lg leading-relaxed text-mist">
              Open to NDT roles, engineering collaborations, and projects that
              sit at the intersection of testing and software. The fastest way
              to reach me is email or LinkedIn.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={`mailto:${profile.email}`}
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5"
              >
                {profile.email}
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-line px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-accent hover:bg-accent/10"
              >
                LinkedIn ↗
              </a>
            </div>
          </motion.div>
        </Section>
      </main>

      <footer className="border-t border-line py-8 text-center text-sm text-mist">
        © {new Date().getFullYear()} {profile.name}. Built with Next.js, React &
        Tailwind.
      </footer>
    </>
  );
}
