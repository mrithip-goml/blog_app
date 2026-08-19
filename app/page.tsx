import Link from 'next/link';
import posts from '@/data/posts.json';

export default function HomePage() {
  return (
    <div>
      <h1>Blog Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug} style={{ marginBottom: '1rem' }}>
            <Link href={`/posts/${post.slug}`}>
              <h2 style={{ color: '#0070f3' }}>{post.title}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}