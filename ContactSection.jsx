import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { contactLinks } from "./portfolioData";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name || "a visitor"}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );

    window.location.href = `mailto:deepamkumar2004@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="section-shell py-20">
      <SectionHeading
        eyebrow="Contact"
        title="Let's connect."
        description="Hiring, collaboration, or a quick conversation about scalable systems and automation."
      />

      <div className="mt-10 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="grid gap-5">
          {contactLinks.map((link, index) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noreferrer" : undefined}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="panel group block p-6 transition-transform duration-200 hover:-translate-y-1"
            >
              <p className="eyebrow">{link.label}</p>
              <p className="mt-3 text-lg font-semibold">{link.value}</p>
              <p className="mt-2 text-sm text-[var(--muted)] group-hover:text-[var(--text)]">
                Open {link.label}
              </p>
            </motion.a>
          ))}
        </div>

        <motion.form
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55 }}
          onSubmit={handleSubmit}
          className="panel-strong p-6 sm:p-8"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block">
              <span className="mb-2 block text-sm font-medium text-[var(--muted)]">Name</span>
              <input
                type="text"
                value={form.name}
                onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))}
                className="w-full rounded-2xl border border-white/10 bg-slate-950/45 px-4 py-3 outline-none transition focus:border-sky-400/60"
                placeholder="Your name"
              />
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-medium text-[var(--muted)]">Email</span>
              <input
                type="email"
                value={form.email}
                onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))}
                className="w-full rounded-2xl border border-white/10 bg-slate-950/45 px-4 py-3 outline-none transition focus:border-sky-400/60"
                placeholder="you@example.com"
              />
            </label>
          </div>

          <label className="mt-5 block">
            <span className="mb-2 block text-sm font-medium text-[var(--muted)]">Message</span>
            <textarea
              rows="6"
              value={form.message}
              onChange={(event) => setForm((current) => ({ ...current, message: event.target.value }))}
              className="w-full rounded-2xl border border-white/10 bg-slate-950/45 px-4 py-3 outline-none transition focus:border-sky-400/60"
              placeholder="Tell me about the role, project, or collaboration idea."
            />
          </label>

          <button
            type="submit"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_18px_40px_rgba(34,197,94,0.28)] transition hover:bg-emerald-300"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
}
