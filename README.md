# Shabil Mahammad Rafeek — AI/ML Engineer Portfolio

Personal portfolio built with Next.js, Tailwind CSS, Framer Motion and a Three.js globe. The layout and UI components are adapted from the open-source MIT template [sanidhyy/next-portfolio](https://github.com/sanidhyy/next-portfolio); all content is based on my resume.

## Run locally

```bash
npm install --legacy-peer-deps
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Editing content

Nearly everything lives in two files:

- `config/index.ts` — name, email, phone, social links, SEO metadata
- `data/index.ts` — nav, stats, skills, projects, experience, education, approach

Project cards currently link to the GitHub profile. Replace each project's `link` in `data/index.ts` with its repo URL.

## Deploy

Push to GitHub and import the repo on [Vercel](https://vercel.com/new) or Netlify. No environment variables needed.

## License

MIT (template by Sanidhya Kumar Verma; see `LICENSE`).
