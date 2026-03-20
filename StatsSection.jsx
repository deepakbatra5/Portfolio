import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { stats } from "./portfolioData";

function AnimatedCounter({ value, suffix }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isInView) {
      return;
    }

    let startTime;
    let frameId;
    const duration = 1400;

    const step = (timestamp) => {
      if (!startTime) {
        startTime = timestamp;
      }

      const progress = Math.min((timestamp - startTime) / duration, 1);
      if (Number.isInteger(value)) {
        setDisplayValue(Math.round(progress * value));
      } else {
        setDisplayValue(Number((progress * value).toFixed(1)));
      }

      if (progress < 1) {
        frameId = window.requestAnimationFrame(step);
      }
    };

    frameId = window.requestAnimationFrame(step);
    return () => window.cancelAnimationFrame(frameId);
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {Number.isInteger(value) ? displayValue : displayValue.toFixed(1)}
      {suffix}
    </span>
  );
}

export default function StatsSection() {
  return (
    <section className="section-shell py-6 sm:py-10">
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-6">
        {stats.map((stat, index) => (
          <motion.article
            key={stat.label}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.55, delay: index * 0.08 }}
            className="panel p-5"
          >
            <div className="text-3xl font-semibold text-[var(--text)]">
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
            </div>
            <p className="mt-2 text-sm uppercase tracking-[0.18em] text-[var(--muted)]">
              {stat.label}
            </p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
