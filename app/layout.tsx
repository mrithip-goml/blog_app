import Link from 'next/link';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: 'sans-serif' }}>
        <nav style={{ padding: '1rem', borderBottom: '1px solid #ccc', background: '#f8f9fa' }}>
          <Link href="/" style={{ marginRight: '1rem', fontWeight: 'bold', textDecoration: 'none' }}>
            My Next.js Blog
          </Link>
        </nav>
        <main style={{ padding: '2rem' }}>{children}</main>
      </body>
    </html>
  );
}