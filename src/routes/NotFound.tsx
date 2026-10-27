import { Link, useLocation } from "react-router";

export default function NotFound() {
  const { pathname } = useLocation();

  return (
    <section className="py-12">
      <title>Page not found · My Blog</title>
      <p className="text-sm uppercase tracking-widest text-zinc-400">404</p>
      <h1 className="mt-2 text-3xl font-bold">Page not found</h1>
      <p className="mt-4 text-zinc-300">
        There is nothing at <span className="text-violet-300">{pathname}</span>.
      </p>
      <Link
        to="/"
        className="mt-8 inline-block text-violet-300 hover:underline"
      >
        Back to home
      </Link>
    </section>
  );
}