import Link from 'next/link';
import posts from '@/data/posts.json';

export default function HomePage() {
  return (
    <div className="space-y-8">
      {/* Hero Header */}
      <section className="space-y-3">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-100">
          Insights & <span className="bg-linear-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Stories</span>
        </h1>
        <p className="text-slate-400 text-lg">
          Exploring modern web development, Next.js patterns, and cloud deployments.
        </p>
      </section>

      {/* Blog Cards Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
        {posts.map((post) => (
          <Link 
            key={post.slug} 
            href={`/posts/${post.slug}`}
            className="group relative block p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:border-indigo-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/10 hover:-translate-y-1"
          >
            <div className="flex flex-col h-full justify-between space-y-4">
              <div>
                <span className="inline-block text-xs font-semibold px-2.5 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 mb-3">
                  Article
                </span>
                <h2 className="text-xl font-semibold text-slate-100 group-hover:text-indigo-300 transition-colors">
                  {post.title}
                </h2>
                <p className="text-slate-400 text-sm mt-2 line-clamp-2 leading-relaxed">
                  {post.content}
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 mb-2">
                <span>{post.category}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>

              <div className="flex items-center text-sm font-medium text-indigo-400 group-hover:translate-x-1 transition-transform">
                Read article <span className="ml-1">→</span>
              </div>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
}