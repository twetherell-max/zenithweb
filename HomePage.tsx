import { type MouseEvent, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, Bot, Command, ListTodo, Music } from 'lucide-react';
import { Link } from 'react-router-dom';

const notchFeatures = [
  {
    title: 'Zenith Droplet',
    body: 'A subtle interaction point beneath the notch that appears when you need it and stays out of your way when you do not.',
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

const interactionModes = [
  {
    id: 'ai',
    label: 'AI',
    icon: Bot,
    headline: 'Ask without context switching',
    detail: 'AIQueryWindow opens instantly from the notch so you can draft, refine, and continue without breaking flow.',
    lines: ['Summarize today\'s project updates', 'Create release notes from sprint tasks', 'Draft a concise reply to design feedback'],
  },
  {
    id: 'music',
    label: 'Music',
    icon: Music,
    headline: 'Control audio in one gesture',
    detail: 'Play, pause, and skip tracks from a compact control strip powered by native script automation.',
    lines: ['Now Playing: Focus Session 02', 'Volume: 62%', 'Output: MacBook Pro Speakers'],
  },
  {
    id: 'shortcuts',
    label: 'Shortcuts',
    icon: Command,
    headline: 'Run actions from the radial dock',
    detail: 'Launch tools, open folders, and trigger repeated commands from your personalized arc menu.',
    lines: ['Open: Daily Notes', 'Run: Clear Downloads', 'Launch: Slack + Calendar'],
  },
  {
    id: 'tasks',
    label: 'Tasks',
    icon: ListTodo,
    headline: 'Keep tasks in your peripheral view',
    detail: 'See priorities and check items directly from the notch zone without opening another full window.',
    lines: ['Review pull request comments', 'Finalize roadmap updates', 'Send QA handoff checklist'],
  },
];

export default function HomePage() {
  const [activeMode, setActiveMode] = useState(interactionModes[0]);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const updateHeroTilt = (event: MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 8;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * -8;
    setTilt({ x, y });
  };

  return (
    <>
      <section className="relative min-h-screen overflow-hidden border-b border-white/10 pt-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(108,92,231,0.25),transparent_45%),radial-gradient(circle_at_80%_0%,rgba(59,130,246,0.18),transparent_35%)]" />

        <div className="relative mx-auto flex w-full max-w-6xl flex-col px-5 pb-16 pt-8 sm:px-8 lg:pb-20">
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
              <Link
                to="/download"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#07090f] transition hover:bg-slate-200"
              >
                Download Zenith
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/product"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/40"
              >
                Explore Product
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.22 }}
            className="mt-12"
            onMouseMove={updateHeroTilt}
            onMouseLeave={() => setTilt({ x: 0, y: 0 })}
          >
            <motion.img
              src="/zenith-hero.png"
              alt="Zenith notch interface on MacBook"
              className="w-full rounded-xl border border-white/15 object-cover shadow-[0_30px_120px_rgba(0,0,0,0.55)]"
              animate={{ rotateX: tilt.y, rotateY: tilt.x }}
              transition={{ type: 'spring', stiffness: 130, damping: 18, mass: 0.4 }}
              style={{ transformStyle: 'preserve-3d' }}
            />
          </motion.div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#0f1320] py-20">
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Interactive preview</h2>
          <p className="mt-4 max-w-2xl text-slate-300">
            Switch modules to see how Zenith behaves in real use, from AI prompts to radial dock shortcuts.
          </p>

          <div className="mt-10 border border-white/15 bg-[#0c101d] p-6 sm:p-8">
            <div className="flex flex-wrap gap-2 border-b border-white/10 pb-5">
              {interactionModes.map((mode) => {
                const Icon = mode.icon;
                const active = activeMode.id === mode.id;

                return (
                  <button
                    key={mode.id}
                    onClick={() => setActiveMode(mode)}
                    className={`inline-flex items-center gap-2 px-4 py-2 text-sm transition ${
                      active
                        ? 'bg-white text-[#090b12]'
                        : 'border border-white/15 bg-white/5 text-slate-200 hover:border-white/35 hover:bg-white/10'
                    }`}
                  >
                    <Icon size={15} />
                    {mode.label}
                  </button>
                );
              })}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeMode.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.24 }}
                className="pt-7"
              >
                <p className="text-2xl font-medium text-white">{activeMode.headline}</p>
                <p className="mt-3 max-w-2xl text-slate-300">{activeMode.detail}</p>
                <div className="mt-7 space-y-2">
                  {activeMode.lines.map((line) => (
                    <motion.div
                      key={line}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.24 }}
                      className="border border-white/10 bg-[#10162a] px-4 py-3 text-sm text-slate-200"
                    >
                      {line}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">What lives in the notch</h2>
        <div className="mt-14 divide-y divide-white/10 border-y border-white/10">
          {notchFeatures.map((item) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.45 }}
              whileHover={{ backgroundColor: 'rgba(255,255,255,0.03)' }}
              className="grid gap-4 py-8 md:grid-cols-[1.15fr_1fr] md:gap-10"
            >
              <h3 className="text-xl font-medium text-white">{item.title}</h3>
              <p className="text-slate-300">{item.body}</p>
            </motion.article>
          ))}
        </div>
      </section>
    </>
  );
}
