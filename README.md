# 🌐 **ShabilsPortfolio-**

*Personal AI/ML & Generative AI Engineer portfolio featuring an interactive Three.js 3D globe and fluid Next.js 14 animations.*

---

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js_14-000000?style=flat-square&logo=nextdotjs&logoColor=white)
![Three.js](https://img.shields.io/badge/Three.js-000000?style=flat-square&logo=threedotjs&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwindcss&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-blue?style=flat-square)

---

## 🚀 Overview

**ShabilsPortfolio-** is a sleek, modern personal portfolio website engineered to showcase the technical expertise, production systems, and career milestones of **Shabil Mahammad Rafeek**, an AI/ML & Generative AI Engineer based in Doha, Qatar. Built on **Next.js 14**, **TypeScript**, and **Tailwind CSS**, the application delivers an immersive visual experience powered by an interactive WebGL 3D globe built with **Three.js** and fluid micro-interactions via **Framer Motion**. The site presents machine learning projects, enterprise experience, technical proficiencies, and contact avenues across dedicated, fully responsive sections including Hero, About, Skills, Projects, Experience, and Contact. Architected for effortless maintainability, all content is centrally managed through `config/index.ts` and `data/index.ts`, enabling instant deployment to Vercel or Netlify with zero required environment variables.

---

## 🛠️ Tech Stack

| Layer / Role | Technology | Purpose |
| :--- | :--- | :--- |
| **Framework** | [Next.js 14](https://nextjs.org/) | App Router, static page optimization, and high-performance React rendering |
| **Language** | [TypeScript](https://www.typescriptlang.org/) | End-to-end type safety, reliable refactoring, and structured schemas |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) | Responsive, utility-first styling with a modern dark aesthetic |
| **3D Graphics** | [Three.js](https://threejs.org/) | WebGL-powered interactive 3D globe visualization in the hero view |
| **Animations** | [Framer Motion](https://www.framer.com/motion/) | Smooth entrance animations, scroll-triggered reveals, and gesture transitions |
| **Deployment** | [Netlify](https://www.netlify.com/) / [Vercel](https://vercel.com/) | Global edge hosting with automated continuous deployment and zero env vars |

---

## ✨ Features

- 🌐 **Interactive 3D Globe**: Captivating Three.js WebGL globe visualization with fluid rotation and responsive camera handling.
- ⚡ **Next.js 14 Performance**: Fast page loads, minimal client bundles, and modern App Router architecture.
- 🎨 **Modern Dark Aesthetic**: Developer-centric visual theme crafted with Tailwind CSS for high contrast and readability.
- 🎭 **Fluid Motion Design**: Seamless scroll reveals, card hover states, and smooth section transitions powered by Framer Motion.
- 📱 **Fully Responsive Layout**: Optimized layout providing an intuitive experience across mobile, tablet, and desktop screens.
- 🧩 **Centralized Content Management**: Update portfolio sections (Hero, About, Skills, Projects, Experience, Contact) cleanly via `config/index.ts` and `data/index.ts`.
- 🚀 **Zero-Config Deployment**: Production-ready setup deployable to Netlify or Vercel with zero environment variables needed.

---

## ⚡ Quick Start

1. **Clone the repository**

```bash
git clone https://github.com/shabil/ShabilsPortfolio-.git
cd ShabilsPortfolio-
```

2. **Install dependencies**

```bash
npm install
```

3. **Configure portfolio content**

Customize your personal biography, skills, projects, and contact links directly in the configuration files:

```bash
# Open configuration files to edit portfolio data
nano config/index.ts
nano data/index.ts
```

4. **Run the development server**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the site.

5. **Build for production**

```bash
npm run build
npm run start
```

---

## 📁 Project Structure

```text
ShabilsPortfolio-/
├── app/                  # Next.js App Router layout and pages
├── components/           # UI components (Hero, About, Skills, Projects, Experience, Contact)
├── config/
│   └── index.ts          # Central site configuration and metadata
├── data/
│   └── index.ts          # Structured project, experience, and skill datasets
├── public/               # Static assets, icons, and 3D globe textures
├── styles/               # Global CSS stylesheets and Tailwind directives
├── tailwind.config.ts    # Tailwind CSS design system configuration
└── tsconfig.json         # TypeScript compiler configuration
```

---

## 📸 Screenshots

> 🖼️ Add screenshots here

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.