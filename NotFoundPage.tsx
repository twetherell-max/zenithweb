import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <section className="mx-auto flex min-h-[70vh] w-full max-w-6xl flex-col items-start justify-center px-5 sm:px-8">
      <p className="text-xs font-semibold tracking-[0.24em] text-indigo-300">404</p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight">Page not found</h1>
      <p className="mt-4 max-w-xl text-slate-300">The page you are looking for does not exist or has been moved.</p>
      <Link to="/" className="mt-8 border border-white/20 px-5 py-3 text-sm text-white transition hover:border-white/40">
        Back to home
      </Link>
    </section>
  );
}
