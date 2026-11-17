import type { Metadata } from "next";

export const links = {
  ownerName: "Shabil",
  ownerFullName: "Shabil Mahammad Rafeek",
  ownerEmail: "shabil.ahemd112@outlook.com",
  ownerPhone: "+974 7097 2853",
  ownerLocation: "Doha, Qatar",
  github: "https://github.com/shabil2284",
  linkedin: "https://www.linkedin.com/in/shabil-ahmed-2337b3316/",
  leetcode: "https://leetcode.com/u/shabil7422",
} as const;

export const siteConfig: Metadata = {
  title: `${links.ownerFullName} | AI/ML Engineer | Generative AI & Agentic AI Specialist`,
  description:
    "Portfolio of Shabil Mahammad Rafeek — AI/ML Engineer, Generative AI Developer, and Agentic AI Specialist building production-grade intelligent systems.",
  keywords: [
    "AI/ML Engineer",
    "Generative AI Developer",
    "Agentic AI Specialist",
    "LLM Fine-Tuning",
    "RAG",
    "LangChain",
    "Multi-Agent Systems",
    "Model Context Protocol",
    "Computer Vision",
    "NLP",
    "Python Developer",
    "FastAPI",
    "Doha",
    "Qatar",
  ] as Array<string>,
  authors: {
    name: links.ownerFullName,
    url: links.github,
  },
} as const;
