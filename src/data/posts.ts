import rawPosts from "./posts.json";

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  body: string;
  publishedAt: string;
  tags: string[];
};

export const posts: Post[] = rawPosts;

export function findPost(
  slug: string | undefined,
): Post | undefined {
  return posts.find((post) => post.slug === slug);
}