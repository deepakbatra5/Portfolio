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
        <div className="section-shell flex flex-wrap items-center gap-3 py-3">
          <a
            href="https://github.com/deepakbatra5"
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-w-fit rounded-2xl border border-white/8 bg-white/5 px-4 py-2 text-sm font-semibold tracking-[0.08em] text-[var(--text)] transition-all duration-200 hover:-translate-y-0.5 hover:border-sky-400/40 hover:text-sky-300"
          >
            GitHub
          </a>

          <nav className="order-3 w-full md:order-none md:flex-1">
            <div className="flex items-center gap-2 overflow-x-auto rounded-full border border-white/8 bg-white/5 px-3 py-2 text-sm text-[var(--muted)] md:justify-center md:text-base">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                  className="whitespace-nowrap rounded-full px-4 py-2 font-medium transition-all duration-200 hover:bg-white/8 hover:text-[var(--text)]"
              >
                {item.label}
              </a>
            ))}
            </div>
          </nav>

          <div className="ml-auto">
            <ThemeToggle
              theme={theme}
              onToggle={() => setTheme((current) => (current === "dark" ? "light" : "dark"))}
            />
          </div>
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
