import posts from '@/data/posts.json';
import { notFound } from 'next/navigation';
import Link from 'next/link';

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="max-w-2xl mx-auto space-y-8 animate-fade-in">
      {/* Back Navigation */}
      <Link 
        href="/" 
        className="inline-flex items-center text-sm font-medium text-slate-400 hover:text-indigo-400 transition-colors"
      >
        ← Back to all posts
      </Link>

      {/* Article Header */}
      <header className="space-y-4 border-b border-slate-800 pb-8">
        <div className="flex items-center gap-2 text-xs font-semibold text-indigo-400 uppercase tracking-wider">
          <span>Blog</span>
          <span>•</span>
          <span>3 min read</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight leading-tight">
          {post.title}
        </h1>
      </header>

      {/* Article Content */}
      <div className="prose prose-invert max-w-none">
        <p className="text-slate-300 text-lg leading-relaxed">
          {post.content}
        </p>
      </div>
    </article>
  );
}