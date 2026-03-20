import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { githubProfile } from "./portfolioData";

const githubMetrics = [
  { label: "Contributions", value: `${githubProfile.contributions}+` },
  { label: "Commit Share", value: `${githubProfile.commits}%` },
  { label: "Pull Requests", value: `${githubProfile.pullRequests}%` },
  { label: "Issues", value: `${githubProfile.issues}%` },
];

export default function GitHubSection() {
  return (
    <section id="github" className="section-shell py-20">
      <SectionHeading
        eyebrow="GitHub"
        title="GitHub stats, graphs, and contribution."
      />

      <div className="mt-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.article
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="panel-strong p-6"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            {githubMetrics.map((item) => (
              <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs uppercase tracking-[0.18em] text-[var(--muted)]">{item.label}</p>
                <p className="mt-2 text-3xl font-semibold">{item.value}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 grid gap-4">
            <img
              src={githubProfile.statsCard}
              alt="GitHub stats card"
              className="w-full rounded-3xl border border-white/10 bg-slate-950/55"
              loading="lazy"
            />
            <div className="grid gap-4 lg:grid-cols-2">
              <img
                src={githubProfile.topLanguages}
                alt="Top languages card"
                className="w-full rounded-3xl border border-white/10 bg-slate-950/55"
                loading="lazy"
              />
              <img
                src={githubProfile.streak}
                alt="GitHub streak card"
                className="w-full rounded-3xl border border-white/10 bg-slate-950/55"
                loading="lazy"
              />
            </div>
          </div>
        </motion.article>

        <motion.article
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="panel overflow-hidden p-4"
        >
          <div className="grid gap-15">
            <div className="overflow-hidden rounded-[24px] border border-white/10 bg-slate-950/55">
              <img
                src={githubProfile.graph}
                alt="GitHub activity graph"
                className="w-full"
                loading="lazy"
              />
            </div>

            <div className="rounded-[24px] border border-emerald-400/15 bg-[linear-gradient(180deg,rgba(34,197,94,0.08),rgba(15,23,42,0.72))] p-4">
              <div className="mb-3 flex items-center justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300/90">
                    Contribution Map
                  </p>
                  <p className="mt-1 text-sm text-[var(--muted)]">
                    Yearly GitHub activity with stronger green contribution days.
                  </p>
                </div>
                <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-emerald-300">
                  184+
                </span>
              </div>

              <div className="overflow-hidden rounded-[20px] border border-white/10 bg-[#0d1117] shadow-[0_18px_40px_rgba(2,6,23,0.28)]">
                <img
                  src={githubProfile.contributionHeatmap}
                  alt="GitHub contribution heatmap"
                  className="w-full"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </motion.article>
      </div>
    </section>
  );
}
