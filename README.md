# MeowBlogs

A modern, dark-themed blog built with **Next.js 16** (App Router), **React 19**, **TypeScript**, and **Tailwind CSS v4**.

Posts are stored as structured JSON data and rendered as interactive article cards on the home page, with dedicated dynamic routes for each article.

## Features

- **Next.js App Router** — file-based routing with server components for fast, SEO-friendly pages
- **Tailwind CSS v4** — utility-first styling with a dark, ambient-glow design
- **JSON-driven content** — add new posts by editing a single data file
- **Dynamic post pages** — each article gets its own URL at `/posts/[slug]`
- **Responsive layout** — mobile-first grid that adapts from 1 to 2 columns
- **Zero-downtime deploys** — ready for Vercel with automatic preview environments

## Tech Stack

| Layer      | Technology                          |
| ---------- | ----------------------------------- |
| Framework  | Next.js 16.3.1 (App Router)         |
| UI         | React 19.2.8                        |
| Language   | TypeScript 5                        |
| Styling    | Tailwind CSS v4                     |
| Content    | JSON (`data/posts.json`)            |

## Getting Started

### Prerequisites

- Node.js 18.18+ (or 20+ recommended)
- npm, yarn, pnpm, or bun

### Installation

```bash
# Clone the repository
git clone https://github.com/mrithip-goml/blog_app.git
cd my_blog

# Install dependencies
npm install
```

### Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

The home page lists all blog posts as cards. Clicking a card navigates to the full article at `/posts/[slug]`.

## Project Structure

```
my_blog/
├── app/
│   ├── globals.css              # Tailwind CSS entry point
│   ├── layout.tsx               # Root layout (header, ambient glows, theme)
│   ├── page.tsx                 # Home page — blog card grid
│   └── posts/
│       └── [slug]/
│           └── page.tsx         # Dynamic article page
├── data/
│   └── posts.json               # All blog post content
├── public/                      # Static assets
├── next.config.ts               # Next.js configuration
├── tailwind.config.js           # Tailwind content paths
├── tsconfig.json                # TypeScript configuration (with @/ alias)
└── package.json
```

## Adding a New Post

All posts live in `data/posts.json`. Add a new object to the array:

```json
{
  "slug": "my-new-post",
  "title": "My New Post Title",
  "excerpt": "A short summary shown on the home page card.",
  "content": "The full article body text.",
  "category": "Category",
  "author": "Author Name",
  "date": "Aug 20, 2026",
  "readTime": "4 min read"
}
```

The post will automatically appear on the home page and be accessible at `/posts/my-new-post`.

> **Note:** The `slug` must be unique — it is used as the URL path and to look up the post.

## Available Scripts

| Command          | Description                          |
| ---------------- | ------------------------------------ |
| `npm run dev`    | Start the development server         |
| `npm run build`  | Create a production build            |
| `npm run start`  | Serve the production build           |
| `npm run lint`   | Run ESLint                           |

## Deployment

The easiest way to deploy is the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

1. Push the repository to GitHub.
2. Import the repo into Vercel.
3. Vercel automatically builds and deploys, creating a preview URL for every pull request.

See the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs) — learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) — an interactive Next.js tutorial.
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) — styling utilities and configuration.