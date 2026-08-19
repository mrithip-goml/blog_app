import posts from '@/data/posts.json';
import { notFound } from 'next/navigation';

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
    <article>
      <h1>{post.title}</h1>
      <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>{post.content}</p>
    </article>
  );
}