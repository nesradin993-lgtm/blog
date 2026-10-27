import { Link, useSearchParams } from "react-router";
import { posts } from "../data/posts";

const allTags = Array.from(new Set(posts.flatMap((post) => post.tags))).sort();

export default function PostsIndex() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTag = searchParams.get("tag");

  const visiblePosts = activeTag
    ? posts.filter((post) => post.tags.includes(activeTag))
    : posts;

  function toggleTag(tag: string) {
    setSearchParams(tag === activeTag ? {} : { tag });
  }

  return (
    <section>
      <title>Posts · My Blog</title>
      <h1 className="mb-6 text-3xl font-bold">All posts</h1>

      <div
        className="flex flex-wrap gap-2"
        role="group"
        aria-label="Filter by tag"
      >
        <button
          type="button"
          onClick={() => setSearchParams({})}
          aria-pressed={!activeTag}
          className={
            !activeTag
              ? "rounded bg-violet-600 px-3 py-1 text-sm"
              : "rounded bg-zinc-800 px-3 py-1 text-sm"
          }
        >
          All
        </button>

        {allTags.map((tag) => (
          <button
            key={tag}
            type="button"
            onClick={() => toggleTag(tag)}
            aria-pressed={tag === activeTag}
            className={
              tag === activeTag
                ? "rounded bg-violet-600 px-3 py-1 text-sm"
                : "rounded bg-zinc-800 px-3 py-1 text-sm"
            }
          >
            #{tag}
          </button>
        ))}
      </div>

      {visiblePosts.length === 0 && (
        <p className="mt-6 text-zinc-400">No posts with that tag yet.</p>
      )}

      <ul className="mt-8 space-y-6">
        {visiblePosts.map((post) => (
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