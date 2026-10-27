import { Link } from "react-router";
import { posts } from "../data/posts";

const latestPosts = [...posts]
  .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
  .slice(0, 3);

export default function HomePage() {
  return (
    <section>
      <title>Home · My Blog</title>
      <h1 className="mb-8 text-3xl font-bold">Latest posts</h1>

      <ul className="space-y-6">
        {latestPosts.map((post) => (
          <li key={post.slug}>
            <Link
              to={`/posts/${post.slug}`}
              className="text-lg font-semibold text-violet-300 hover:underline"
            >
              {post.title}
            </Link>
            <p className="mt-1 text-zinc-400">{post.excerpt}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}