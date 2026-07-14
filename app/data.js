// Single source of truth for portfolio content — edit here, UI follows.
export const profile = {
  name: "Gopi Chand Gorantla",
  role: "NDT Technician & Computer Science Engineer",
  location: "Andhra Pradesh, India",
  tagline:
    "ASNT Level 2 certified NDT technician with a Computer Science background — bridging hands-on radiographic testing with data analysis and software engineering.",
  email: "gopichandgorantla@example.com", // TODO: real email
  linkedin: "https://www.linkedin.com/in/gopi-chand-gorantla-46a8bb273",
  github: "", // TODO: add if available
  stats: [
    { value: "ASNT L2", label: "NDT Certification" },
    { value: "2026", label: "CS Engineering Grad" },
    { value: "7.28", label: "CGPA" },
  ],
};

export const about = [
  "I'm an NDT (Nondestructive Testing) technician certified to ASNT Level 2, currently working at Star NDT Services on radiographic testing and inspection data analysis.",
  "Alongside my testing work, I hold a B.Tech in Computer Science — I enjoy combining engineering rigor with software: analyzing inspection data, scripting, and building tools that make testing workflows faster and more reliable.",
];

export const experience = [
  {
    role: "NDT Technician",
    org: "Star NDT Services",
    type: "Full-time · On-site",
    location: "Balanagar, Telangana, India",
    period: "May 2026 — Present",
    points: [
      "Perform radiographic testing (RT) and nondestructive inspection on industrial components.",
      "Analyze inspection data and document defect findings against ASNT standards.",
    ],
    skills: ["Radiographic Testing", "Data Analysis", "NDT"],
  },
  {
    role: "Substitute Post Master",
    org: "Government of India",
    type: "Part-time · On-site",
    location: "Andhra Pradesh, India",
    period: "Mar 2023 — Jun 2023",
    points: [
      "Managed postal operations, records, and daily transactions for a rural post office.",
    ],
    skills: ["Operations", "Record Management"],
  },
];

export const education = [
  {
    school: "Right NDT Training Centre",
    degree: "Nondestructive Testing (NDT) — ASNT Level 2",
    period: "Mar 2026 — May 2026",
    detail: "ASNT Level 2 certification across multiple NDT methods.",
  },
  {
    school: "BVSR Engineering College",
    degree: "B.Tech, Computer Science",
    period: "Oct 2022 — Apr 2026",
    detail: "CGPA 7.28 · Coursework in C++, SQL, data structures, and software development.",
  },
];

export const skillGroups = [
  {
    title: "Nondestructive Testing",
    skills: ["Radiographic Testing", "NDT Methods", "ASNT Level 2", "Inspection & QA", "Data Analysis"],
  },
  {
    title: "Software & CS",
    skills: ["JavaScript", "C++", "SQL", "Data Structures", "Problem Solving"],
  },
];
