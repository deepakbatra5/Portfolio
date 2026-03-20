import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  certifications,
  contactLinks,
  education,
  githubProfile,
  profileInfo,
  projects,
  quickFacts,
  skillGroups,
  training,
} from "./portfolioData";

const quickQuestions = [
  "Tell me about Deepak",
  "What projects has he built?",
  "What skills does he have?",
  "How can I contact him?",
  "What training and certifications does he have?",
];

const initialMessages = [
  {
    id: "assistant-welcome",
    role: "assistant",
    text: `Hi, I'm ${profileInfo.name}'s portfolio assistant. Ask me about projects, skills, education, training, certificates, GitHub, or contact details.`,
  },
];

function normalize(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9+\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function formatList(items) {
  if (items.length <= 1) {
    return items[0] || "";
  }

  if (items.length === 2) {
    return `${items[0]} and ${items[1]}`;
  }

  return `${items.slice(0, -1).join(", ")}, and ${items[items.length - 1]}`;
}

function createMessage(role, text) {
  return {
    id: `${role}-${Date.now()}-${Math.random().toString(16).slice(2)}`,
    role,
    text,
  };
}

function hasWord(query, target) {
  return query.split(" ").includes(target);
}

function getFact(label) {
  return quickFacts.find((item) => item.label === label)?.value || "";
}

function getContact(label) {
  return contactLinks.find((item) => item.label.toLowerCase() === label.toLowerCase());
}

function getIntroReply() {
  return `${profileInfo.name} is a ${profileInfo.role} based in ${getFact("Location")}. He is focused on ${getFact("Focus")} and works with ${getFact("Tools")}.`;
}

function getSkillsReply() {
  const skillSummary = skillGroups
    .map((group) => `${group.title}: ${group.items.join(", ")}`)
    .join(" | ");

  return `${profileInfo.name}'s core skills are ${skillSummary}.`;
}

function getProjectsReply() {
  return `${profileInfo.name} has ${projects.length} featured projects: ${projects
    .map((project) => `${project.name} (${project.tag})`)
    .join(", ")}. Ask me about any project name for more detail.`;
}

function getProjectReply(project) {
  const figures = project.figures.map((figure) => `${figure.label}: ${figure.value}`).join(", ");

  return `${project.name} is a ${project.tag} project. ${project.description} Tech stack: ${project.tech.join(
    ", "
  )}. Highlights: ${figures}. GitHub: ${project.github}`;
}

function getEducationReply() {
  const entries = education
    .map((item) => `${item.qualification} at ${item.institution} (${item.details})`)
    .join(" | ");

  return `${profileInfo.name}'s education includes ${entries}.`;
}

function getTrainingReply() {
  return `${training.title} by ${training.provider} (${training.duration}). Focus areas: ${training.points.join(
    ", "
  )}. Certificate: ${training.certificateLink}`;
}

function getCertificationsReply() {
  const summary = certifications
    .map((certificate) => `${certificate.title} from ${certificate.provider} (${certificate.date})`)
    .join(" | ");

  return `${profileInfo.name}'s certifications include ${summary}.`;
}

function getGitHubReply() {
  return `${profileInfo.name}'s GitHub username is ${githubProfile.username}. Snapshot date: ${githubProfile.snapshotDate}. Stats: ${githubProfile.contributions}+ contributions, ${githubProfile.reposTouched}+ repos touched, ${githubProfile.commits}% commit share, and ${githubProfile.pullRequests}% pull requests. Profile: ${githubProfile.profile}`;
}

function getContactReply() {
  const email = getContact("Email");
  const phone = getContact("Phone");
  const linkedin = getContact("LinkedIn");
  const github = getContact("GitHub");

  return `You can contact ${profileInfo.name} via email at ${email?.value}, phone at ${phone?.value}, LinkedIn at ${linkedin?.value}, or GitHub at ${github?.value}.`;
}

function getAvailabilityReply() {
  return `${profileInfo.name} is open to hiring conversations, collaborations, and technical discussions around scalable systems, automation, and DevOps-focused products.`;
}

function getFallbackReply() {
  return `I can help with ${profileInfo.name}'s background, projects, skills, education, training, certificates, GitHub stats, and contact details. Try asking "Tell me about Deepak", "What skills does he have?", or "How can I contact him?"`;
}

function findProject(question) {
  const query = normalize(question);

  if (query.includes("zomato")) {
    return projects.find((project) => project.name === "Zomato Clone");
  }

  if (query.includes("task manager") || query.includes("ai powered") || query.includes("ai task")) {
    return projects.find((project) => project.name === "AI-Powered Task Manager");
  }

  if (query.includes("e commerce") || query.includes("ecommerce") || query.includes("shopping")) {
    return projects.find((project) => project.name === "E-Commerce Website");
  }

  return null;
}

function buildAssistantReply(question) {
  const query = normalize(question);

  if (!query) {
    return getFallbackReply();
  }

  const project = findProject(query);

  if (project) {
    return getProjectReply(project);
  }

  if (
    hasWord(query, "hello") ||
    hasWord(query, "hi") ||
    hasWord(query, "hey") ||
    hasWord(query, "namaste")
  ) {
    return `${getIntroReply()} ${getFallbackReply()}`;
  }

  if (
    query.includes("who is deepak") ||
    query.includes("tell me about deepak") ||
    query.includes("introduce") ||
    query.includes("about him") ||
    query.includes("about deepak")
  ) {
    return getIntroReply();
  }

  if (query.includes("location") || query.includes("where") || query.includes("from")) {
    return `${profileInfo.name} is based in ${getFact("Location")}.`;
  }

  if (query.includes("degree") || query.includes("education") || query.includes("college") || query.includes("school")) {
    return getEducationReply();
  }

  if (query.includes("skill") || query.includes("tech stack") || query.includes("stack") || query.includes("tools")) {
    return getSkillsReply();
  }

  if (query.includes("project") || query.includes("portfolio work") || query.includes("work")) {
    return getProjectsReply();
  }

  if (query.includes("training") || query.includes("course")) {
    return getTrainingReply();
  }

  if (query.includes("certificate") || query.includes("certification")) {
    return getCertificationsReply();
  }

  if (
    query.includes("github") ||
    query.includes("contribution") ||
    query.includes("commit") ||
    query.includes("pull request")
  ) {
    return getGitHubReply();
  }

  if (query.includes("phone")) {
    const phone = getContact("Phone");
    return `${profileInfo.name}'s phone number is ${phone?.value}.`;
  }

  if (query.includes("email")) {
    const email = getContact("Email");
    return `${profileInfo.name}'s email is ${email?.value}.`;
  }

  if (query.includes("linkedin")) {
    const linkedin = getContact("LinkedIn");
    return `${profileInfo.name}'s LinkedIn is ${linkedin?.href}.`;
  }

  if (query.includes("contact") || query.includes("reach") || query.includes("connect")) {
    return getContactReply();
  }

  if (query.includes("hire") || query.includes("available") || query.includes("collaborat")) {
    return getAvailabilityReply();
  }

  if (query.includes("resume") || query.includes("cv")) {
    return `You can open ${profileInfo.name}'s CV from the hero section using the "View CV" button.`;
  }

  return getFallbackReply();
}

export default function PortfolioChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState(initialMessages);
  const [isThinking, setIsThinking] = useState(false);
  const scrollRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const node = scrollRef.current;

    if (node) {
      node.scrollTop = node.scrollHeight;
    }
  }, [messages, isThinking, isOpen]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const sendQuestion = (question) => {
    const text = question.trim();

    if (!text || isThinking) {
      return;
    }

    setIsOpen(true);
    setMessages((current) => [...current, createMessage("user", text)]);
    setInput("");
    setIsThinking(true);

    timeoutRef.current = window.setTimeout(() => {
      setMessages((current) => [...current, createMessage("assistant", buildAssistantReply(text))]);
      setIsThinking(false);
    }, 320);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    sendQuestion(input);
  };

  return (
    <div className="fixed bottom-5 right-5 z-[70] flex max-w-[calc(100vw-1.5rem)] flex-col items-end gap-3">
      <AnimatePresence>
        {isOpen ? (
          <motion.section
            initial={{ opacity: 0, y: 18, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 14, scale: 0.97 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="panel-strong w-[24rem] max-w-[calc(100vw-1.5rem)] overflow-hidden"
          >
            <div className="border-b border-white/10 p-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="eyebrow">Portfolio AI</p>
                  <h3 className="mt-2 text-lg font-semibold">{profileInfo.name} Assistant</h3>
                  <p className="mt-1 text-sm text-[var(--muted)]">
                    Ask about skills, projects, education, training, GitHub, or contact info.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="rounded-full border border-white/10 px-3 py-1.5 text-xs font-semibold text-[var(--muted)] transition hover:border-sky-400/30 hover:text-[var(--text)]"
                >
                  Close
                </button>
              </div>
            </div>

            <div ref={scrollRef} className="max-h-[24rem] space-y-4 overflow-y-auto p-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] rounded-3xl px-4 py-3 text-sm leading-6 ${
                      message.role === "user"
                        ? "bg-sky-400 text-slate-950"
                        : "border border-white/10 bg-white/5 text-[var(--text)]"
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}

              {isThinking ? (
                <div className="flex justify-start">
                  <div className="rounded-3xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-[var(--muted)]">
                    Thinking...
                  </div>
                </div>
              ) : null}
            </div>

            <div className="border-t border-white/10 p-4">
              <div className="mb-3 flex flex-wrap gap-2">
                {quickQuestions.map((question) => (
                  <button
                    key={question}
                    type="button"
                    onClick={() => sendQuestion(question)}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-[var(--muted)] transition hover:border-sky-400/35 hover:text-[var(--text)]"
                  >
                    {question}
                  </button>
                ))}
              </div>

              <form onSubmit={handleSubmit} className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  placeholder="Ask about Deepak's portfolio..."
                  className="w-full rounded-full border border-white/10 bg-slate-950/45 px-4 py-3 text-sm outline-none transition focus:border-sky-400/50"
                />
                <button
                  type="submit"
                  disabled={isThinking}
                  className="rounded-full bg-emerald-400 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  Send
                </button>
              </form>
            </div>
          </motion.section>
        ) : null}
      </AnimatePresence>

      <motion.button
        type="button"
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => setIsOpen((current) => !current)}
        className="inline-flex items-center gap-3 rounded-full bg-sky-400 px-5 py-3 text-sm font-semibold text-slate-950 shadow-[0_18px_40px_rgba(56,189,248,0.35)]"
      >
        <span className="inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
        Ask Portfolio AI
      </motion.button>
    </div>
  );
}
