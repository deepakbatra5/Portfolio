import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { training } from "./portfolioData";

export default function ExperienceSection() {
  return (
    <section id="training" className="section-shell py-20">
      <SectionHeading
        eyebrow="Training"
        title="Training"
        description="Java DSA course and certificate."
      />

      <div className="mt-10">
        <motion.article
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="panel-strong p-8"
        >
          <p className="eyebrow">Featured Training</p>
          <h3 className="mt-4 text-2xl font-semibold">{training.title}</h3>
          <p className="mt-2 text-[var(--muted)]">
            {training.provider} | {training.duration}
          </p>

          <a
            href={training.certificateLink}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex rounded-full bg-sky-400 px-4 py-2 text-sm font-semibold text-slate-950"
          >
            Certificate
          </a>

          <div className="mt-6 space-y-4">
            {training.points.map((point) => (
              <div key={point} className="flex gap-3 text-[var(--muted)]">
                <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[var(--accent)]" />
                <p className="leading-7">{point}</p>
              </div>
            ))}
          </div>
        </motion.article>
      </div>
    </section>
  );
}
