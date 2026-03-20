import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { skillGroups } from "./portfolioData";

function CategoryIcon({ title }) {
  const classes = "h-5 w-5 fill-current";

  const icons = {
    Languages: <path d="M4 5h16v2H4zm0 6h10v2H4zm0 6h16v2H4z" />,
    DevOps: <path d="M12 2 4 6v6c0 5.25 3.5 10.74 8 12 4.5-1.26 8-6.75 8-12V6zm0 5 3 5h-2v4h-2v-4H9z" />,
    Web: <path d="M3 5h18v14H3zm2 2v10h14V7zm2 2h10v2H7zm0 4h6v2H7z" />,
    Domains: <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm6.9 9h-3.05a15.5 15.5 0 0 0-1.35-4.3A8.05 8.05 0 0 1 18.9 11ZM12 4.15c1.05 1.15 1.87 3.02 2.27 5.35H9.73C10.13 7.17 10.95 5.3 12 4.15ZM9.5 6.7A15.5 15.5 0 0 0 8.15 11H5.1A8.05 8.05 0 0 1 9.5 6.7ZM5.1 13h3.05a15.5 15.5 0 0 0 1.35 4.3A8.05 8.05 0 0 1 5.1 13Zm6.9 6.85c-1.05-1.15-1.87-3.02-2.27-5.35h4.54c-.4 2.33-1.22 4.2-2.27 5.35Zm2.5-2.55A15.5 15.5 0 0 0 15.85 13h3.05a8.05 8.05 0 0 1-4.4 4.3Z" />,
    Tools: <path d="m14.7 6.3 3 3-8.4 8.4H6.3v-3zm3.6-2.1 1.1 1.1a1.5 1.5 0 0 1 0 2.1l-.6.6-3-3 .6-.6a1.5 1.5 0 0 1 2.1 0Z" />,
  };

  return (
    <svg viewBox="0 0 24 24" className={classes}>
      {icons[title]}
    </svg>
  );
}

export default function SkillsSection() {
  return (
    <section id="skills" className="section-shell py-20">
      <SectionHeading
        eyebrow="Skills"
        title="Tools I use."
        description="DevOps, full stack, cloud."
      />

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {skillGroups.map((group, index) => (
          <motion.article
            key={group.title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, delay: index * 0.08 }}
            className="panel p-6 sm:p-7"
          >
            <div className="flex items-center gap-4">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-400/12 text-sky-300">
                <CategoryIcon title={group.title} />
              </div>
              <div>
                <h3 className="text-xl font-semibold">{group.title}</h3>
                <p className="text-sm text-[var(--muted)]">{group.summary}</p>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              {group.items.map((item) => (
                <span key={item} className="rounded-full border border-white/8 bg-white/5 px-4 py-2 text-sm font-medium">
                  {item}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
