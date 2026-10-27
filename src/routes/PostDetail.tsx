import {
  Link,
  useLoaderData,
  
  type LoaderFunctionArgs,
} from "react-router";
import { findPost } from "../data/posts";

export function postLoader({ params }: LoaderFunctionArgs) {
  const post = findPost(params.slug);

  if (!post) {
    throw new Response("Not Found", { status: 404 });
  }

  return { post };
}

export default function PostDetail() {
  const { post } = useLoaderData<typeof postLoader>();
  

  return (
    <article>
      <title>{post.title} · My Blog</title>
      <h1 className="mb-4 text-3xl font-bold">{post.title}</h1>

      <p className="mb-6 text-sm text-zinc-400">
        Published {post.publishedAt}
      </p>

      <p className="mb-8 text-zinc-300">{post.body}</p>

      <div className="mb-8 flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <Link
            key={tag}
            to={`/posts?tag=${encodeURIComponent(tag)}`}
            className="rounded bg-zinc-800 px-3 py-1 text-sm text-violet-300 hover:bg-zinc-700"
          >
            #{tag}
          </Link>
        ))}
      </div>

      <Link to="/posts" className="text-violet-300 hover:underline">
        ← All posts
      </Link>
    </article>
  );
}