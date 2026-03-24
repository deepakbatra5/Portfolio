const baseUrl = import.meta.env.BASE_URL;

export function withBase(path) {
  return `${baseUrl}${path.replace(/^\/+/, "")}`;
}

export const profileInfo = {
  name: "Deepak Kumar",
  role: "DevOps Engineer",
  headline: "I build scalable systems and automate deployments.",
  cvUrl: withBase("/docs/deepak-cv.pdf"),
};

export const navigation = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Certificates", href: "#certificates" },
  { label: "Training", href: "#training" },
  { label: "GitHub", href: "#github" },
  { label: "Pipeline", href: "#pipeline" },
  { label: "Contact", href: "#contact" },
];

export const stats = [
  { value: 184, suffix: "+", label: "GitHub Contributions" },
  { value: 23, suffix: "+", label: "Repos Touched" },
  { value: 100, suffix: "%", label: "CI/CD Automation" },
  { value: 95, suffix: "%", label: "Commit Share" },
  { value: 4, suffix: "%", label: "Pull Requests" },
  { value: 3, suffix: "+", label: "Major Projects" },
];

export const quickFacts = [
  { label: "Location", value: "West Champaran, Bihar" },
  { label: "Degree", value: "B.Tech CSE" },
  { label: "Focus", value: "DevOps + AI Apps" },
  { label: "Tools", value: "Docker | Jenkins | K8s" },
];

export const education = [
  {
    institution: "Lovely Professional University",
    qualification: "B.Tech CSE",
    details: "Phagwara, Punjab | CGPA 7.5",
  },
  {
    institution: "Central Public School",
    qualification: "Class 12",
    details: "Kota, Rajasthan | 87%",
  },
  {
    institution: "Sanskriti Public School",
    qualification: "Class 10",
    details: "Motihari, Bihar | 93%",
  },
];

export const skillGroups = [
  {
    title: "Languages",
    summary: "Problem-solving and application logic.",
    items: ["C++", "Java", "Python", "JavaScript"],
  },
  {
    title: "DevOps",
    summary: "Delivery, orchestration, and infrastructure flow.",
    items: ["Docker", "Jenkins", "Ansible", "Kubernetes"],
  },
  {
    title: "Web",
    summary: "Frontend and backend product stack.",
    items: ["React", "Node.js", "Express", "MongoDB"],
  },
  {
    title: "Domains",
    summary: "Specialized working areas from the new CV.",
    items: ["CI/CD Pipeline", "Cloud Computing", "Automation", "Monitoring"],
  },
];

export const projects = [
  {
    name: "Zomato Clone",
    tag: "DevOps Pipeline",
    description: "Visual-first DevOps build with automated delivery and Kubernetes deployment flow.",
    tech: ["GitHub", "Jenkins", "Docker", "Kubernetes"],
    figures: [
      { label: "Automation", value: "100%" },
      { label: "Downtime", value: "0" },
      { label: "Core Tools", value: "6" },
    ],
    impact: [],
    github: "https://github.com/deepakbatra5/fullstack-cicd-project",
    image: withBase("/images/zomato-devops.png"),
  },
  {
    name: "AI-Powered Task Manager",
    tag: "AI + Full Stack",
    description: "AI-assisted task workflow focused on prioritization, authentication, and live status flow.",
    tech: ["React", "Node.js", "Express", "OpenAI API"],
    figures: [
      { label: "AI Flow", value: "1" },
      { label: "Live Sync", value: "Real-time" },
      { label: "Core Stack", value: "5" },
    ],
    impact: [],
    github: "https://github.com/deepakbatra5/trueroadmap.github.io",
    image: withBase("/images/ai-task-manager.png"),
  },
  {
    name: "E-Commerce Website",
    tag: "Frontend Commerce",
    description: "Responsive commerce UI built for browsing, cart actions, and clean mobile-first flow.",
    tech: ["HTML5", "CSS3", "JavaScript", "GitHub"],
    figures: [
      { label: "Responsive", value: "100%" },
      { label: "Cart Flow", value: "Enabled" },
      { label: "Frontend Stack", value: "4" },
    ],
    impact: [],
    github: "https://github.com/deepakbatra5/project",
    image: withBase("/images/ecommerce-project.png"),
  },
];

export const githubProfile = {
  username: "deepakbatra5",
  name: "Deepak Kumar",
  avatar: withBase("/images/profile-photo.png"),
  profile: "https://github.com/deepakbatra5",
  contributions: 184,
  reposTouched: 23,
  commits: 95,
  pullRequests: 4,
  issues: 1,
  achievements: 3,
  snapshotDate: "March 20, 2026",
  statsCard:
    "https://github-readme-stats.vercel.app/api?username=deepakbatra5&show_icons=true&count_private=true&include_all_commits=true&rank_icon=github&theme=tokyonight&hide_border=true",
  topLanguages:
    "https://github-readme-stats.vercel.app/api/top-langs/?username=deepakbatra5&layout=compact&theme=tokyonight&hide_border=true",
  streak:
    "https://streak-stats.demolab.com?user=deepakbatra5&theme=tokyonight&hide_border=true",
  graph:
    "https://github-readme-activity-graph.vercel.app/graph?username=deepakbatra5&bg_color=0f172a&color=e2e8f0&line=38bdf8&point=22c55e&area=true&hide_border=true",
  contributionHeatmap: withBase("/images/github-contributions-heatmap.png"),
};

export const pipelineSteps = [
  "Code",
  "GitHub",
  "Jenkins",
  "Docker",
  "Kubernetes",
  "Deployment",
];

export const trainingPrograms = [
  {
    title: "Data Structures & Algorithms Using Java",
    provider: "Cipher Schools",
    duration: "May 2025 - July 2025",
    certificateLink:
      "https://www.cipherschools.com/certificate/preview?id=6930969c09c57b51f7f14a40",
    points: [
      "Java-based DSA training",
      "Trees, graphs, and linked lists",
      "Hands-on coding and logic practice",
    ],
  },
  {
    title: "Python Programming",
    provider: "Udemy",
    duration: "Oct 2023 - Dec 2023",
    certificateLink: "https://www.udemy.com/certificate/UC-9072d5fb-cf43-427c-95fa-15671e9dd1c9/",
    points: [
      "Core Python programming concepts",
      "Hands-on coding exercises",
      "Problem-solving with Python",
    ],
  },
];

export const certifications = [
  {
    title: "Git and GitHub",
    provider: "Cipher Schools",
    date: "Dec 2025",
    link: "https://www.cipherschools.com/certificate/preview?id=688224e2ca64e035786b17d6",
    previewImage: withBase("/images/certificate-git-github.png"),
  },
  {
    title: "Data Structures",
    provider: "Cipher Schools",
    date: "Jul 2025",
    link: "https://www.cipherschools.com/certificate/preview?id=6930969c09c57b51f7f14a40",
    previewImage: withBase("/images/certificate-data-structures.png"),
  },
  {
    title: "Web Development",
    provider: "Udemy",
    date: "Jul 2025",
    link: "https://www.udemy.com/certificate/UC-92d60b03-e7ac-49d3-a1ab-5b5986b254f2/",
    previewImage: withBase("/images/certificate-web-development.png"),
  },
  {
    title: "Cyber Security",
    provider: "Encrypt Edge",
    date: "March 2024",
    link: withBase("/docs/encrypt-edge-cyber-security.pdf"),
    previewImage: withBase("/images/certificate-cyber-security.png"),
  },
];

export const contactLinks = [
  {
    label: "Email",
    value: "deepamkumar2004@gmail.com",
    href: "mailto:deepamkumar2004@gmail.com",
  },
  {
    label: "Phone",
    value: "+91 9798919579",
    href: "tel:+919798919579",
  },
  {
    label: "GitHub",
    value: "github.com/deepakbatra5",
    href: "https://github.com/deepakbatra5",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/deepakumar04",
    href: "https://www.linkedin.com/in/deepakumar04/",
  },
];
