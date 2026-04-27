import { NavLink, Outlet } from 'react-router-dom';
import { Download } from 'lucide-react';

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/product', label: 'Product' },
  { to: '/download', label: 'Download' },
];

export default function SiteLayout() {
  return (
    <div className="min-h-screen bg-[#090b12] text-white">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#090b12]/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-8">
          <NavLink to="/" className="text-lg font-semibold tracking-[0.18em] text-white">
            ZENITH
          </NavLink>

          <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `transition-colors hover:text-white ${isActive ? 'text-white' : 'text-slate-300'}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <NavLink
            to="/download"
            className="inline-flex items-center gap-2 border border-white/20 px-4 py-2 text-sm font-medium text-white transition hover:border-white/40"
          >
            <Download size={16} />
            Download
          </NavLink>
        </div>
      </header>

      <main className="pt-16">
        <Outlet />
      </main>

      <footer className="border-t border-white/10 py-10">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-4 px-5 text-sm text-slate-400 sm:flex-row sm:items-center sm:px-8">
          <p>© {new Date().getFullYear()} Zenith</p>
          <p>Made for teams that ship.</p>
        </div>
      </footer>
    </div>
  );
}
