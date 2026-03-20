import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { education } from "./portfolioData";

const focusCards = [
  {
    title: "Automation",
    value: "CI/CD",
    description: "Pipeline-first deployment mindset.",
  },
  {
    title: "Cloud-Native",
    value: "K8s",
    description: "Containers, orchestration, monitoring.",
  },
  {
    title: "AI Apps",
    value: "OpenAI",
    description: "Task workflows with smarter prioritization.",
  },
  {
    title: "Cloud",
    value: "Cloud",
    description: "Scalable deployment and infrastructure focus.",
  },
  {
    title: "ML",
    value: "ML",
    description: "Learning-driven intelligent product direction.",
  },
  {
    title: "Web",
    value: "Web Dev",
    description: "Responsive frontend and full stack application work.",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="section-shell py-20">
      <SectionHeading
        eyebrow="About"
        title="Focused on DevOps, cloud, and AI products."
        description="I build fast, scalable systems with clean and reliable delivery."
      />

      <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.article
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="panel-strong p-8"
        >
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {focusCards.map((card) => (
              <div key={card.title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-xs uppercase tracking-[0.18em] text-[var(--muted)]">{card.title}</p>
                <p className="mt-3 text-3xl font-semibold text-[var(--primary)]">{card.value}</p>
                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{card.description}</p>
              </div>
            ))}
          </div>
        </motion.article>

        <motion.article
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="panel p-8"
        >
          <p className="eyebrow">Education</p>
          <div className="mt-5 grid gap-4">
            {education.map((item) => (
              <div key={item.institution} className="rounded-2xl border border-white/8 bg-white/5 p-4">
                <p className="text-sm text-[var(--muted)]">{item.institution}</p>
                <p className="mt-2 font-semibold">{item.qualification}</p>
                <p className="mt-1 text-sm text-[var(--muted)]">{item.details}</p>
              </div>
            ))}
          </div>
        </motion.article>
      </div>
    </section>
  );
}
