import { motion } from 'framer-motion';

const architectureRows = [
  ['ZenithState', 'Single source of truth for settings, persistent data, and real-time UI updates across windows.'],
  ['AppDelegate', 'Owns lifecycle events and global mouse monitoring for detecting interaction with the notch zone.'],
  ['NotchManager', 'Calculates notch geometry and keeps interface alignment physically accurate on MacBook displays.'],
  ['ZenithWindow', 'Transparent NSPanel host for the droplet, dock, and interactive overlays.'],
];

const philosophyRows = [
  ['Customization first', 'Every major feature can be tailored in size, color, and behavior so Zenith fits your workflow instead of forcing one.'],
  ['Centralized settings', 'All user-facing configuration belongs in ZenithSettingsWindow and updates ZenithState.shared for consistent app-wide behavior.'],
  ['Additive-only UI', 'Existing interfaces are preserved. New capabilities are introduced as optional toggles, not disruptive replacements.'],
];

export default function ProductPage() {
  return (
    <>
      <section className="border-b border-white/10 bg-[#0f1320] py-20">
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="text-xs font-semibold tracking-[0.24em] text-indigo-300"
          >
            PRODUCT
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl"
          >
            Built for notch-first interaction.
          </motion.h1>
          <p className="mt-5 max-w-2xl text-slate-300">
            Zenith uses a state-driven architecture to keep every interface responsive and visually consistent from droplet to dock.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Architecture overview</h2>
        <div className="mt-12 divide-y divide-white/10 border-y border-white/10">
          {architectureRows.map(([name, desc]) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.35 }}
              className="grid gap-3 py-7 md:grid-cols-[220px_1fr] md:gap-10"
            >
              <p className="font-medium text-white">{name}</p>
              <p className="text-slate-300">{desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#0f1320] py-20">
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Design philosophy</h2>
          <div className="mt-12 divide-y divide-white/10 border-y border-white/10">
            {philosophyRows.map(([title, desc]) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.35 }}
                className="grid gap-3 py-7 md:grid-cols-[1fr_1.2fr] md:gap-10"
              >
                <p className="text-base font-medium text-white">{title}</p>
                <p className="text-slate-300">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
