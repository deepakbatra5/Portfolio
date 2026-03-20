import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { pipelineSteps } from "./portfolioData";

export default function PipelineSection() {
  return (
    <section id="pipeline" className="section-shell py-20">
      <SectionHeading
        eyebrow="Pipeline Flow"
        title="A visual CI/CD path."
        description="DevOps flow from code to production rollout."
      />

      <div className="mt-10 panel-strong p-6 sm:p-8">
        <div className="grid gap-4 lg:grid-cols-[repeat(6,minmax(0,1fr))]">
          {pipelineSteps.map((step, index) => (
            <div key={step} className="relative flex items-center lg:block">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="relative z-10 flex-1 rounded-2xl border border-white/10 bg-slate-950/45 p-4 text-center"
              >
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-400/12 text-base font-semibold text-sky-300">
                  0{index + 1}
                </div>
                <p className="font-semibold">{step}</p>
              </motion.div>

              {index < pipelineSteps.length - 1 ? (
                <motion.div
                  initial={{ scaleX: 0, opacity: 0 }}
                  whileInView={{ scaleX: 1, opacity: 1 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.5, delay: 0.15 + index * 0.08 }}
                  className="mx-2 hidden h-0.5 origin-left bg-gradient-to-r from-sky-400 via-cyan-300 to-emerald-400 lg:block lg:flex-1"
                />
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
