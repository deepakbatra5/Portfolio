import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { githubProfile, profileInfo } from "./portfolioData";

export default function HeroSection() {
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    if (typedText === profileInfo.role) {
      return undefined;
    }

    const timeout = window.setTimeout(() => {
      setTypedText(profileInfo.role.slice(0, typedText.length + 1));
    }, 90);

    return () => window.clearTimeout(timeout);
  }, [typedText]);

  return (
    <section id="home" className="section-shell grid min-h-[calc(100vh-4rem)] items-center gap-10 py-16 lg:grid-cols-[1fr_0.95fr] lg:py-24">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
      >
        <div className="pill mb-6">
          <span className="h-2.5 w-2.5 rounded-full bg-[var(--accent)] shadow-[0_0_20px_rgba(34,197,94,0.8)]" />
          DevOps + Full Stack portfolio
        </div>
        <h1 className="mt-5 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
          {profileInfo.name}
          <span className="mt-3 block text-gradient text-3xl sm:text-4xl lg:text-5xl">
            {typedText}
            <span className="ml-1 inline-block h-9 w-[2px] animate-pulse bg-[var(--primary)] align-middle" />
          </span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)] sm:text-xl">
          {profileInfo.headline}
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <motion.a
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.98 }}
            href="#projects"
            className="inline-flex items-center justify-center rounded-full bg-sky-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_16px_40px_rgba(56,189,248,0.3)] transition-colors hover:bg-sky-300"
          >
            View Projects
          </motion.a>
          <motion.a
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.98 }}
            href="#github"
            className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-[var(--text)] hover:border-sky-400/40 hover:bg-sky-400/10"
          >
            GitHub Stats
          </motion.a>
          <motion.a
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.98 }}
            href={profileInfo.cvUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-emerald-400/25 bg-emerald-400/10 px-6 py-3 text-sm font-semibold text-emerald-300 hover:bg-emerald-400/15"
          >
            View CV
          </motion.a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 32 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.75, delay: 0.1, ease: "easeOut" }}
        className="relative flex justify-center p-6 sm:p-8"
      >
        <div className="absolute right-10 top-12 h-40 w-40 rounded-full bg-sky-400/20 blur-3xl" />
        <div className="absolute left-10 top-1/2 h-32 w-32 rounded-full bg-emerald-400/15 blur-3xl" />
        <img
          src={githubProfile.avatar}
          alt={`${profileInfo.name} profile`}
          className="relative h-80 w-80 rounded-full border border-white/10 object-cover object-[center_24%] shadow-[0_30px_80px_rgba(2,6,23,0.45)] sm:h-[26rem] sm:w-[26rem]"
        />
      </motion.div>
    </section>
  );
}
