import './globals.css';
import Link from 'next/link';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-zinc-950 text-zinc-100 min-h-screen antialiased selection:bg-emerald-500 selection:text-zinc-950">
        {/* Ambient Glows */}
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-emerald-600/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/3 -right-40 w-96 h-96 bg-teal-600/20 rounded-full blur-3xl"></div>
        </div>

        {/* Header */}
        <header className="sticky top-0 z-50 backdrop-blur-md bg-zinc-900/60 border-b border-zinc-800/80">
          <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
            <Link 
              href="/" 
              className="text-lg font-bold bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
            >
              MeowBlogs
            </Link>
            <div className="flex gap-4 text-sm font-medium text-zinc-400">
              <Link href="/" className="hover:text-emerald-300 transition-colors">
                Articles
              </Link>
            </div>
          </div>
        </header>

        <main className="max-w-4xl mx-auto px-6 py-12">{children}</main>
      </body>
    </html>
  );
}