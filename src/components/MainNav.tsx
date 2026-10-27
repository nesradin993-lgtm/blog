import { NavLink } from "react-router";

const linkClass = ({ isActive }: { isActive: boolean }) =>
  isActive
    ? "text-violet-300 font-semibold"
    : "text-zinc-400 hover:text-zinc-100";

export default function MainNav() {
  return (
    <nav aria-label="Main" className="flex gap-6 text-sm">
      <NavLink to="/" end className={linkClass}>
        Home
      </NavLink>
      <NavLink to="/posts" className={linkClass}>
        Posts
      </NavLink>
      <NavLink to="/about" className={linkClass}>
        About
      </NavLink>
    </nav>
  );
}