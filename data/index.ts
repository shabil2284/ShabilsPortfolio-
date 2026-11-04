import { links } from "@/config";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Skills", link: "#skills" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  { name: "Contact", link: "#contact" },
] as const;

export const stats = [
  { value: "98%", label: "document extraction accuracy" },
  { value: "35%", label: "faster inference" },
  { value: "96%", label: "classification accuracy (3D CNN + ViT)" },
  { value: "40%", label: "web app responsiveness gain" },
] as const;

export const gridItems = [
  {
    id: 1,
    title:
      "I build document intelligence systems that turn messy files into structured, verified data",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "",
    spareImg: "",
  },
  {
    id: 2,
    title: "Based in Doha, flexible across time zones",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My AI stack",
    description: "Always sharpening it",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "B.E. in AI & ML with a taste for shipping real systems.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "",
  },
  {
    id: 5,
    title: "Exploring RAG pipelines, AI agents and local LLMs",
    description: "Currently",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Have an AI project in mind? Let's talk.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
] as const;

export const techStack = {
  stack1: ["Python", "LangChain", "PyTorch"],
  stack2: ["FastAPI", "RAG", "AWS"],
} as const;

export const skillGroups = [
  {
    title: "Languages & Core AI/ML",
    items: ["Python", "SQL", "Machine Learning", "Deep Learning", "NLP"],
  },
  {
    title: "Generative AI & LLMs",
    items: [
      "RAG",
      "LangChain",
      "LLM Fine-Tuning",
      "Hugging Face Transformers",
      "OCR",
      "Semantic Search",
    ],
  },
  {
    title: "ML / DL Frameworks",
    items: ["PyTorch", "TensorFlow", "Keras", "Scikit-learn"],
  },
  {
    title: "Computer Vision",
    items: ["OpenCV", "YOLOv5", "YOLOv8"],
  },
  {
    title: "APIs & Backend",
    items: ["FastAPI", "REST API", "Mistral API", "Protecto API"],
  },
  {
    title: "Cloud & Deployment",
    items: ["AWS (S3, Bedrock)", "Microsoft Azure", "Google Cloud", "Docker"],
  },
  {
    title: "Data & Vector DBs",
    items: [
      "Pandas",
      "NumPy",
      "ChromaDB",
      "Embeddings",
      "SentenceTransformers",
      "spaCy",
    ],
  },
  {
    title: "Tools",
    items: ["Ollama", "Streamlit", "Matplotlib", "MCP", "Git"],
  },
] as const;

export const projects = [
  {
    id: 1,
    title: "AI Agents Automatic Trading & Decision-Making System",
    des: "Autonomous LangChain agents that collect market news, run NLP sentiment analysis and execute automated buy/sell trades via FastAPI, with Protecto API protecting sensitive data.",
    gradient: "from-emerald-500/30 via-teal-500/10 to-transparent",
    tech: ["Python", "LangChain", "FastAPI", "VADER", "TextBlob", "Protecto API"],
    link: links.github,
  },
  {
    id: 2,
    title: "Intelligent Document Layout Analysis",
    des: "A BERT and DistilBERT extraction pipeline that converts document layouts into structured JSON key-value pairs, using OpenCV to filter out non-text elements.",
    gradient: "from-violet-500/30 via-fuchsia-500/10 to-transparent",
    tech: ["Python", "BERT", "DistilBERT", "OpenCV"],
    link: links.github,
  },
  {
    id: 3,
    title: "AI-Enhanced Excel Query Assistant",
    des: "An offline Streamlit chatbot powered by Ollama that answers natural-language questions about uploaded Excel data, with no external API dependency.",
    gradient: "from-sky-500/30 via-cyan-500/10 to-transparent",
    tech: ["Python", "Ollama", "Pandas", "Streamlit"],
    link: links.github,
  },
  {
    id: 4,
    title: "Kidney Cancer Detection via Deep Learning",
    des: "A hybrid 3D CNN and Vision Transformer model combining genomic and histopathology features, achieving 96% classification accuracy.",
    gradient: "from-rose-500/30 via-orange-500/10 to-transparent",
    tech: ["Python", "PyTorch", "TensorFlow", "3D CNN", "Vision Transformer"],
    link: links.github,
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
      "Built an invoice verification pipeline using RAG, LangChain and local LLMs to validate and cross-check document data.",
      "Built an OCR and ML extraction pipeline converting unstructured documents into structured JSON, reaching 98% accuracy and 35% faster inference.",
      "Fine-tuned models and led data annotation to improve information extraction accuracy across document types.",
      "Integrated Protecto API for data masking and unmasking, securing sensitive data across the document pipeline.",
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
      "Managed and analyzed operational data to support business reporting and decision-making.",
      "Maintained periodic departmental reports, improving data workflow consistency.",
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
      "Improved web application responsiveness by 40% by resolving front-end rendering and Node.js bottlenecks.",
      "Built MERN-based backend modules with JWT-secured authentication.",
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
      "Coordinated inventory and order processing in a Myntra BMR-Dexter retail environment.",
    ],
    icon: "ops",
  },
] as const;

export const education = {
  school: "Srinivas Institute of Technology (VTU)",
  degree: "B.E. in Artificial Intelligence & Machine Learning",
  period: "08/2020 – 07/2024",
  location: "Mangalore, India",
} as const;

export const approachSteps = [
  {
    phase: "Phase 1",
    title: "Ingest & Extract",
    description:
      "Documents come in messy. I combine OCR, layout analysis and fine-tuned models to pull clean, structured JSON out of unstructured files, and annotate data where the models need to learn.",
  },
  {
    phase: "Phase 2",
    title: "Retrieve & Reason",
    description:
      "Embeddings, vector databases and RAG with LangChain let LLMs cross-check and answer against real data, including fully local setups with Ollama when data can't leave the machine.",
  },
  {
    phase: "Phase 3",
    title: "Secure & Deploy",
    description:
      "Sensitive fields are masked, models are served behind FastAPI, and everything is containerized with Docker for AWS, Azure or GCP, so it works outside the notebook too.",
  },
] as const;
