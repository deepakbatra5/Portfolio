import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import HeroSection from "./HeroSection";
import StatsSection from "./StatsSection";
import AboutSection from "./AboutSection";
import SkillsSection from "./SkillsSection";
import ProjectsSection from "./ProjectsSection";
import CertificateSection from "./CertificateSection";
import GitHubSection from "./GitHubSection";
import PipelineSection from "./PipelineSection";
import ExperienceSection from "./ExperienceSection";
import ContactSection from "./ContactSection";
import PortfolioChatbot from "./PortfolioChatbot";
import ThemeToggle from "./ThemeToggle";
import { navigation } from "./portfolioData";

export default function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") {
      return "dark";
    }

    const saved = window.localStorage.getItem("deepak-theme");
    return saved || "dark";
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("deepak-theme", theme);
  }, [theme]);

  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 grid-glow opacity-70" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[32rem] bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.16),transparent_48%)]" />
      <div className="pointer-events-none absolute right-0 top-80 h-80 w-80 rounded-full bg-emerald-500/12 blur-3xl" />
      <div className="pointer-events-none absolute left-0 top-[28rem] h-80 w-80 rounded-full bg-sky-400/12 blur-3xl" />

      <motion.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="sticky top-0 z-50 border-b border-white/5 bg-[var(--surface)] backdrop-blur-xl"
      >
        <div className="section-shell flex items-center justify-between gap-4 py-4">
          <a
            href="https://github.com/deepakbatra5"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/8 bg-white/5 px-4 py-2 text-base font-semibold tracking-[0.08em] text-[var(--text)] transition-all duration-200 hover:-translate-y-0.5 hover:border-sky-400/40 hover:text-sky-300"
          >
            github.com/deepakbatra5
          </a>
          <div className="hidden items-center gap-2 rounded-full border border-white/8 bg-white/5 px-3 py-2 text-base text-[var(--muted)] md:flex">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-2 font-medium transition-all duration-200 hover:bg-white/8 hover:text-[var(--text)]"
              >
                {item.label}
              </a>
            ))}
          </div>
          <ThemeToggle
            theme={theme}
            onToggle={() => setTheme((current) => (current === "dark" ? "light" : "dark"))}
          />
        </div>
      </motion.header>

      <main className="relative">
        <HeroSection />
        <StatsSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <CertificateSection />
        <ExperienceSection />
        <GitHubSection />
        <PipelineSection />
        <ContactSection />
      </main>

      <footer className="section-shell pb-10 text-center text-sm text-[var(--muted)]">
        Deepak Kumar | {new Date().getFullYear()} | DevOps Engineer
      </footer>

      <PortfolioChatbot />
    </div>
  );
}
