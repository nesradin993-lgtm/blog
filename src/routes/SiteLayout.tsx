import { Outlet } from "react-router";
import MainNav from "../components/MainNav";
import ScrollToTop from "../components/ScrollToTop";

export default function SiteLayout() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <ScrollToTop />
      <header className="sticky top-0 z-10 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
          <span className="font-semibold">My Blog</span>
          <MainNav />
        </div>
        
      </header>

      <main className="mx-auto w-full max-w-3xl px-6 py-10">
        <Outlet />
      </main>

      <footer className="border-t border-zinc-800 py-6 text-center text-sm text-zinc-400">
        Blog footer
      </footer>
    </div>
  );
}