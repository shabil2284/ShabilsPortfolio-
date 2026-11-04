import type { Metadata } from "next";

export const links = {
  ownerName: "Shabil",
  ownerFullName: "Shabil Mahammad Rafeek",
  ownerEmail: "shabil.ahmed112@outlook.com",
  ownerPhone: "+974 7097 2853",
  ownerLocation: "Doha, Qatar",
  github: "https://github.com/shabil2284",
  linkedin: "https://linkedin.com/in/shabil-ahmed-2337b3316",
  leetcode: "https://leetcode.com/u/shabil7422",
} as const;

export const siteConfig: Metadata = {
  title: `${links.ownerFullName} | AI/ML & Generative AI Engineer`,
  description:
    "AI/ML Engineer in Doha, Qatar building Generative AI, RAG and OCR-based document intelligence systems with Python, LangChain and local LLMs.",
  keywords: [
    "AI engineer",
    "ML engineer",
    "Generative AI",
    "RAG",
    "LangChain",
    "LLM",
    "OCR",
    "document intelligence",
    "Python developer",
    "FastAPI",
    "Doha",
    "Qatar",
    "portfolio",
  ] as Array<string>,
  authors: {
    name: links.ownerFullName,
    url: links.github,
  },
} as const;
