import { links } from "@/config";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Skills", link: "#skills" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  { name: "Architecture", link: "#architecture" },
  { name: "Contact", link: "#contact" },
] as const;

export const stats = [
  { value: "98%", label: "Document Extraction Accuracy" },
  { value: "35%", label: "Faster Inference Latency" },
  { value: "96%", label: "Classification Accuracy (3D CNN + ViT)" },
  { value: "40%", label: "Web App Responsiveness Gain" },
] as const;

export const techStack = {
  stack1: ["Python", "LangChain", "PyTorch"],
  stack2: ["FastAPI", "RAG", "AWS"],
} as const;

export const skillGroups = [
  {
    title: "AI & Machine Learning",
    items: [
      "PyTorch",
      "TensorFlow",
      "Keras",
      "Scikit-learn",
      "Computer Vision",
      "NLP",
      "Deep Learning",
      "Model Evaluation",
    ],
  },
  {
    title: "Generative AI & LLMs",
    items: [
      "LangChain",
      "Hugging Face Transformers",
      "RAG Architecture",
      "LLM Fine-Tuning",
      "Embeddings",
      "Vector Databases",
      "Ollama",
      "Mistral API",
    ],
  },
  {
    title: "Agentic AI & Multi-Agent",
    items: [
      "Multi-Agent Systems",
      "Model Context Protocol (MCP)",
      "AI Tool Calling",
      "Agent Orchestration",
      "LangGraph",
      "Autonomous Workflows",
    ],
  },
  {
    title: "Backend & Development",
    items: [
      "Python",
      "SQL",
      "FastAPI",
      "Docker",
      "Git",
      "GitHub Actions",
      "RESTful APIs",
      "Streamlit",
    ],
  },
  {
    title: "Cloud & MLOps",
    items: [
      "AWS (S3, Bedrock)",
      "Amazon Bedrock",
      "Microsoft Azure",
      "Google Cloud",
      "CI/CD Pipelines",
      "Model Deployment",
    ],
  },
] as const;

export const projects = [
  {
    id: 1,
    title: "Agentic AI Stock Recommendation System",
    des: "Autonomous multi-agent system orchestrating real-time financial news collection, VADER/TextBlob sentiment analysis, and automated trade execution via FastAPI with Protecto API data security.",
    gradient: "from-emerald-500/30 via-teal-500/10 to-transparent",
    tech: ["Python", "LangChain", "FastAPI", "VADER", "TextBlob", "Protecto API"],
    link: "https://github.com/shabil2284/day-trader-skill-Chatgpt-MCP",
  },
  {
    id: 2,
    title: "Automated Trading Software",
    des: "High-frequency algorithmic trading software leveraging Angel One Smart API WebSocket v2. Built with Scikit-learn signal generation, automated risk mitigation, and Pandas-based backtesting.",
    gradient: "from-blue-500/30 via-cyan-500/10 to-transparent",
    tech: ["Python", "Pandas", "Scikit-learn", "Angel One API", "WebSocket"],
    link: "https://github.com/shabil2284/Angel-one-smart-Api-updated-websocket-version",
  },
  {
    id: 3,
    title: "AI-Enhanced Excel Query Assistant",
    des: "Offline generative AI analytics assistant powered by Ollama and Pandas. Translates natural language questions into structured queries and interactive visualizations with zero external cloud dependencies.",
    gradient: "from-sky-500/30 via-cyan-500/10 to-transparent",
    tech: ["Python", "Ollama", "Pandas", "Streamlit", "Local LLM"],
    link: "https://github.com/shabil2284/AI-Enhanced-Excel-Query-Solution",
  },
  {
    id: 4,
    title: "Intelligent Document Layout Analysis",
    des: "End-to-end computer vision and NLP pipeline using fine-tuned BERT/DistilBERT and OpenCV to convert complex, unstructured document layouts into verified structured JSON data.",
    gradient: "from-violet-500/30 via-fuchsia-500/10 to-transparent",
    tech: ["Python", "BERT", "DistilBERT", "OpenCV", "OCR"],
    link: "https://github.com/shabil2284/Agentic-Aurora-AI",
  },
  {
    id: 5,
    title: "Kidney Cancer Detection Using Deep Learning",
    des: "Medical imaging classification architecture combining 3D Convolutional Neural Networks (3D CNN) and Vision Transformers (ViT) on histopathology data, achieving 96% diagnostic accuracy.",
    gradient: "from-rose-500/30 via-orange-500/10 to-transparent",
    tech: ["PyTorch", "TensorFlow", "3D CNN", "Vision Transformer", "Medical AI"],
    link: "https://github.com/shabil2284/kidney-cancer-detection",
  },
  {
    id: 6,
    title: "GenAI & MCP-Based Stock Recommender",
    des: "Next-generation trading assistant built using Anthropic's Model Context Protocol (MCP) and LLM tool calling. Connects generative AI agents directly to live brokerage and market analytics tools.",
    gradient: "from-amber-500/30 via-orange-500/10 to-transparent",
    tech: ["Python", "MCP", "LLMs", "Agentic AI", "Tool Calling"],
    link: "https://github.com/shabil2284/day-trader-skill-Chatgpt-MCP",
  },
] as const;

export const workExperience = [
  {
    id: 1,
    title: "AI/ML Engineer",
    company: "Raasoft Infotech Pvt. Ltd.",
    period: "01/2025 – 09/2025",
    location: "Mangalore, India",
    points: [
      "Architected and deployed an invoice verification pipeline utilizing RAG, LangChain, and local LLMs to automatically cross-check multi-format enterprise document data.",
      "Engineered an OCR and machine learning extraction pipeline converting unstructured files into structured JSON with 98% accuracy and 35% reduced inference latency.",
      "Fine-tuned transformer models and established data annotation workflows to optimize information extraction across high-variance document structures.",
      "Integrated Protecto API for automated tokenization, data masking, and privacy-preserving inference across production document pipelines.",
    ],
    icon: "ai",
  },
  {
    id: 2,
    title: "Data Administrator",
    company: "Mukka Sea Food Industries Limited",
    period: "05/2024 – 12/2024",
    location: "Mangalore, India",
    points: [
      "Streamlined data analysis and operational reporting workflows to support enterprise decision-making and inventory forecasts.",
      "Maintained periodic departmental data pipelines, improving cross-functional data consistency and reporting efficiency.",
    ],
    icon: "data",
  },
  {
    id: 3,
    title: "Full Stack Web Development Intern",
    company: "Samagra Technologies",
    period: "09/2023 – 10/2023",
    location: "Mangalore, India",
    points: [
      "Boosted web application responsiveness by 40% through targeted frontend rendering optimizations and resolving Node.js backend bottlenecks.",
      "Developed robust backend API endpoints with JWT authentication and responsive React frontend components.",
    ],
    icon: "web",
  },
  {
    id: 4,
    title: "Operations Consultant",
    company: "Instakart Private Limited",
    period: "06/2021 – 04/2024",
    location: "Mangalore, India",
    points: [
      "Coordinated inventory management and automated order routing systems within a high-volume retail fulfillment environment.",
    ],
    icon: "ops",
  },
] as const;

export const education = {
  school: "Srinivas Institute of Technology, VTU",
  degree: "B.E. in Artificial Intelligence & Machine Learning",
  period: "2020 – 2024",
  location: "Mangalore, India",
} as const;

export const approachSteps = [
  {
    phase: "Phase 1",
    title: "Ingest, Clean & Extract",
    description:
      "Raw enterprise data is unstructured and noisy. I combine OCR, computer vision layout analysis, and fine-tuned models to extract clean, verified JSON data with automated quality gates.",
  },
  {
    phase: "Phase 2",
    title: "Retrieve, Reason & Coordinate",
    description:
      "Semantic embeddings, vector databases, and multi-agent orchestration frameworks (LangGraph, MCP) enable models to ground their reasoning, call external tools, and execute verified workflows.",
  },
  {
    phase: "Phase 3",
    title: "Harden, Containerize & Deploy",
    description:
      "Production-ready AI requires zero data leakage and predictable latency. Sensitive tokens are masked, services are wrapped in FastAPI and Docker, and deployed seamlessly to AWS, Azure, or GCP.",
  },
] as const;
