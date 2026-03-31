import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { certifications } from "./portfolioData";

export default function CertificateSection() {
  return (
    <section id="certificates" className="section-shell py-20">
      <SectionHeading
        eyebrow="Certificates"
        title="Certified learning highlights."
        description="Course and certificate links."
      />

      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {certifications.map((item, index) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="panel p-6"
          >
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-slate-950/55">
              {item.previewImage.toLowerCase().endsWith(".pdf") ? (
                <iframe
                  src={item.previewImage}
                  title={`${item.title} certificate preview`}
                  className="h-48 w-full"
                  loading="lazy"
                />
              ) : (
                <img
                  src={item.previewImage}
                  alt={`${item.title} certificate preview`}
                  className="h-48 w-full object-cover object-top"
                  loading="lazy"
                />
              )}
            </div>
            <p className="text-sm text-[var(--muted)]">0{index + 1}</p>
            <h3 className="mt-3 text-lg font-semibold">{item.title}</h3>
            <p className="mt-2 text-sm text-[var(--muted)]">
              {item.provider} | {item.date}
            </p>
            <a
              href={item.link}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex rounded-full bg-sky-400 px-4 py-2 text-sm font-semibold text-slate-950"
            >
              Certificate
            </a>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
