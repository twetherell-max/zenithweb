import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';

const notchFeatures = [
  {
    title: 'Zenith Droplet',
    body: 'A subtle interaction point beneath the notch that appears exactly when you need it and stays out of your way when you do not.',
  },
  {
    title: 'Native Radial Dock',
    body: 'A semi-circular dock that expands from the droplet for quick app launches, folder access, and favorite actions.',
  },
  {
    title: 'AI Query Window',
    body: 'Ask questions, draft ideas, and get focused help from LLM-powered assistants without leaving your current flow.',
  },
  {
    title: 'Quick Actions Panel',
    body: 'Reach system shortcuts, music controls, and task utilities through a compact gesture-driven panel.',
  },
];

const architectureRows = [
  ['ZenithState', 'Single source of truth for settings, persistent data, and real-time UI updates across windows.'],
  ['AppDelegate', 'Owns lifecycle events and global mouse monitoring for detecting interaction with the notch zone.'],
  ['NotchManager', 'Calculates notch geometry and keeps interface alignment physically accurate on MacBook displays.'],
  ['ZenithWindow', 'Transparent NSPanel host for the droplet, dock, and interactive overlays.'],
];

export default function App() {
  return (
    <div className="min-h-screen bg-[#090b12] text-white">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#090b12]/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-8">
          <a href="#top" className="text-lg font-semibold tracking-[0.18em] text-white">
            ZENITH
          </a>
          <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            <a href="#product" className="hover:text-white transition-colors">Product</a>
            <a href="#architecture" className="hover:text-white transition-colors">Architecture</a>
            <a href="#build" className="hover:text-white transition-colors">Build</a>
          </nav>
          <a
            href="#build"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm font-medium text-white transition hover:border-white/40"
          >
            <Download size={16} />
            Download
          </a>
        </div>
      </header>

      <main id="top">
        <section className="relative min-h-screen overflow-hidden border-b border-white/10 pt-28">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(108,92,231,0.25),transparent_45%),radial-gradient(circle_at_80%_0%,rgba(59,130,246,0.18),transparent_35%)]" />

          <div className="relative mx-auto flex w-full max-w-6xl flex-col px-5 pb-16 sm:px-8 lg:pb-20">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65 }}
              className="max-w-2xl"
            >
              <p className="text-xs font-semibold tracking-[0.24em] text-indigo-300">ZENITH</p>
              <h1 className="mt-5 text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-6xl">
                Aura-inspired productivity hub for the MacBook notch.
              </h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
                Zenith turns the camera notch into a dynamic command surface for AI, music, shortcuts, and tasks on macOS 14+.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="#build"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#07090f] transition hover:bg-slate-200"
                >
                  Download Zenith
                  <ArrowRight size={16} />
                </a>
                <a
                  href="#architecture"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/40"
                >
                  Explore Architecture
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.22 }}
              className="mt-12"
            >
              <img
                src="/zenith-hero.png"
                alt="Zenith notch interface on MacBook"
                className="w-full rounded-xl border border-white/15 object-cover shadow-[0_30px_120px_rgba(0,0,0,0.55)]"
              />
            </motion.div>
          </div>
        </section>

        <section id="product" className="mx-auto w-full max-w-6xl px-5 py-24 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55 }}
          >
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">What lives in the notch</h2>
            <p className="mt-4 max-w-2xl text-slate-300">
              Every interaction starts from one elegant touchpoint, then expands into purpose-built tools that stay lightweight and fast.
            </p>
          </motion.div>

          <div className="mt-14 divide-y divide-white/10 border-y border-white/10">
            {notchFeatures.map((item) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.45 }}
                className="grid gap-4 py-8 md:grid-cols-[1.15fr_1fr] md:gap-10"
              >
                <h3 className="text-xl font-medium text-white">{item.title}</h3>
                <p className="text-slate-300">{item.body}</p>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="architecture" className="border-y border-white/10 bg-[#0f1320]">
          <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-semibold tracking-tight sm:text-4xl"
            >
              Architecture overview
            </motion.h2>
            <p className="mt-4 max-w-2xl text-slate-300">
              Built with Swift and SwiftUI for macOS 14.0+, with a state-driven model that keeps every window consistent.
            </p>

            <div className="mt-12 divide-y divide-white/10 border-y border-white/10">
              {architectureRows.map(([name, desc]) => (
                <div key={name} className="grid gap-3 py-7 md:grid-cols-[220px_1fr] md:gap-10">
                  <p className="font-medium text-white">{name}</p>
                  <p className="text-slate-300">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-5 py-24 sm:px-8">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Design philosophy</h2>
          <div className="mt-12 divide-y divide-white/10 border-y border-white/10">
            {[
              ['Customization first', 'Every major feature can be tailored in size, color, and behavior so Zenith fits your workflow instead of forcing one.'],
              ['Centralized settings', 'All user-facing configuration belongs in ZenithSettingsWindow and updates ZenithState.shared for consistent app-wide behavior.'],
              ['Additive-only UI', 'Existing interfaces are preserved. New capabilities are introduced as optional toggles, not disruptive replacements.'],
            ].map(([question, answer]) => (
              <div key={question} className="grid gap-3 py-7 md:grid-cols-[1fr_1.2fr] md:gap-10">
                <p className="text-base font-medium text-white">{question}</p>
                <p className="text-slate-300">{answer}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="build" className="border-y border-white/10 bg-[#0f1320]">
          <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Get started on macOS</h2>
            <p className="mt-4 max-w-2xl text-slate-300">
              Requires macOS 14.0+, Xcode 15+, and Swift 5.9 tools. Build with Makefile or Swift Package Manager.
            </p>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <div className="border border-white/15 bg-[#12172a] p-6">
                <p className="text-sm font-medium text-white">Using Makefile</p>
                <pre className="mt-4 overflow-x-auto text-sm leading-relaxed text-slate-300">{`make build\nmake run`}</pre>
              </div>
              <div className="border border-white/15 bg-[#12172a] p-6">
                <p className="text-sm font-medium text-white">Using Swift PM</p>
                <pre className="mt-4 overflow-x-auto text-sm leading-relaxed text-slate-300">{`swift build\nswift run Zenith`}</pre>
              </div>
            </div>
          </div>
        </section>
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
