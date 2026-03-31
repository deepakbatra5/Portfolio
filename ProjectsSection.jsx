import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { projects } from "./portfolioData";

function ProjectVisual({ project }) {
  if (project.image) {
    return (
      <img
        src={project.image}
        alt={`${project.name} project preview`}
        className="h-52 w-full rounded-3xl border border-white/10 object-cover"
        loading="lazy"
      />
    );
  }

  return (
    <div className="h-52 w-full rounded-3xl border border-white/10 bg-[linear-gradient(135deg,rgba(56,189,248,0.18),rgba(34,197,94,0.12),rgba(15,23,42,0.95))] p-5">
      <div className="grid h-full gap-3">
        <div className="h-4 w-28 rounded-full bg-sky-400/25" />
        <div className="grid flex-1 gap-3 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-black/20" />
          <div className="rounded-2xl border border-white/10 bg-black/20" />
        </div>
        <div className="grid gap-3 md:grid-cols-3">
          <div className="h-8 rounded-2xl bg-white/10" />
          <div className="h-8 rounded-2xl bg-white/10" />
          <div className="h-8 rounded-2xl bg-white/10" />
        </div>
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="section-shell py-20">
      <SectionHeading
        eyebrow="Projects"
        title="My latest projects."
        description="Recent work and GitHub links."
      />

      <div className="mt-10 grid gap-6 xl:grid-cols-3">
        {projects.map((project, index) => (
          <motion.article
            key={project.name}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.55, delay: index * 0.08 }}
            className="panel group flex h-full flex-col p-5"
          >
            <ProjectVisual project={project} />

            <div className="mt-5 flex items-center justify-between gap-4">
              <span className="pill text-xs">{project.tag}</span>
              <span className="text-sm text-[var(--muted)]">0{index + 1}</span>
            </div>

            <h3 className="mt-5 text-2xl font-semibold">{project.name}</h3>
            <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{project.description}</p>

            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {project.figures.map((figure) => (
                <div key={figure.label} className="rounded-2xl border border-white/8 bg-white/5 p-3 text-center">
                  <p className="text-lg font-semibold text-[var(--primary)]">{figure.value}</p>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-[var(--muted)]">{figure.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.tech.map((item) => (
                <span key={item} className="rounded-full bg-slate-900/60 px-3 py-1.5 text-xs font-medium text-slate-200 ring-1 ring-white/10">
                  {item}
                </span>
              ))}
            </div>

            {project.impact.length > 0 ? (
              <div className="mt-5 space-y-2">
                {project.impact.map((line) => (
                  <div key={line} className="flex gap-3 text-sm leading-6 text-[var(--muted)]">
                    <span className="mt-1.5 h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_16px_rgba(34,197,94,0.8)]" />
                    <span>{line}</span>
                  </div>
                ))}
              </div>
            ) : null}

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-full bg-sky-400 px-4 py-2 text-sm font-semibold text-slate-950"
              >
                GitHub
              </a>
              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center rounded-full border border-emerald-300/40 bg-emerald-400/15 px-4 py-2 text-sm font-semibold text-emerald-100"
                >
                  Live
                </a>
              ) : null}
              {project.secondaryGithub ? (
                <a
                  href={project.secondaryGithub}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold"
                >
                  GitHub
                </a>
              ) : null}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
