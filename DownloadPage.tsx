import { motion } from 'framer-motion';
import { useMemo, useState } from 'react';

const platforms = [
  { id: 'mac', label: 'macOS', file: 'Zenith-macOS.dmg' },
  { id: 'intel', label: 'macOS (Intel)', file: 'Zenith-macOS-Intel.dmg' },
  { id: 'beta', label: 'macOS Beta', file: 'Zenith-macOS-Beta.dmg' },
];

const requirements = [
  'macOS 14.0 or later',
  'Xcode 15.0+ with Swift 5.9 tools',
  'Apple Silicon or Intel MacBook with camera notch',
];

export default function DownloadPage() {
  const [selectedPlatform, setSelectedPlatform] = useState(platforms[0]);
  const [status, setStatus] = useState<'idle' | 'preparing' | 'ready'>('idle');

  const ctaLabel = useMemo(() => {
    if (status === 'preparing') {
      return 'Preparing download...';
    }
    if (status === 'ready') {
      return `Download ${selectedPlatform.file}`;
    }
    return 'Generate download link';
  }, [selectedPlatform.file, status]);

  const handleGenerateDownload = () => {
    if (status === 'preparing') {
      return;
    }

    setStatus('preparing');
    window.setTimeout(() => setStatus('ready'), 1200);
  };

  return (
    <>
      <section className="border-b border-white/10 py-20">
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="text-xs font-semibold tracking-[0.24em] text-indigo-300"
          >
            DOWNLOAD
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl"
          >
            Get started on macOS.
          </motion.h1>
          <p className="mt-5 max-w-2xl text-slate-300">
            Build Zenith from source using the included Makefile or Swift Package Manager workflow.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8">
        <div className="border border-white/15 bg-[#10162a] p-6 sm:p-8">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Download Zenith</h2>
          <p className="mt-3 max-w-2xl text-slate-300">
            Pick your build, generate the installer link, then download directly.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {platforms.map((platform) => {
              const isActive = selectedPlatform.id === platform.id;

              return (
                <button
                  key={platform.id}
                  onClick={() => {
                    setSelectedPlatform(platform);
                    setStatus('idle');
                  }}
                  className={`px-4 py-2 text-sm transition ${
                    isActive
                      ? 'bg-white text-[#090b12]'
                      : 'border border-white/15 bg-white/5 text-slate-200 hover:border-white/35 hover:bg-white/10'
                  }`}
                >
                  {platform.label}
                </button>
              );
            })}
          </div>

          <div className="mt-6 border border-white/10 bg-[#0c101d] p-4">
            <p className="text-sm text-slate-300">Selected build: {selectedPlatform.file}</p>
            {status === 'preparing' && (
              <motion.div
                className="mt-3 h-1 w-full overflow-hidden bg-white/10"
                initial={false}
              >
                <motion.div
                  className="h-full w-1/3 bg-indigo-300"
                  initial={{ x: '-100%' }}
                  animate={{ x: '300%' }}
                  transition={{ duration: 0.9, repeat: Infinity, ease: 'linear' }}
                />
              </motion.div>
            )}
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <button
              onClick={handleGenerateDownload}
              className="bg-white px-5 py-3 text-sm font-semibold text-[#090b12] transition hover:bg-slate-200 disabled:cursor-not-allowed disabled:opacity-70"
              disabled={status === 'preparing'}
            >
              {ctaLabel}
            </button>
            {status === 'ready' && (
              <a
                href="#"
                className="border border-white/20 px-5 py-3 text-sm text-white transition hover:border-white/40"
              >
                Direct mirror
              </a>
            )}
          </div>
        </div>

        <h2 className="mt-16 text-3xl font-semibold tracking-tight sm:text-4xl">Prerequisites</h2>
        <div className="mt-10 divide-y divide-white/10 border-y border-white/10">
          {requirements.map((item) => (
            <div key={item} className="py-4 text-slate-200">
              {item}
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            className="border border-white/15 bg-[#12172a] p-6"
          >
            <p className="text-sm font-medium text-white">Using Makefile</p>
            <pre className="mt-4 overflow-x-auto text-sm leading-relaxed text-slate-300">{`make build\nmake run`}</pre>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: 0.08 }}
            className="border border-white/15 bg-[#12172a] p-6"
          >
            <p className="text-sm font-medium text-white">Using Swift PM</p>
            <pre className="mt-4 overflow-x-auto text-sm leading-relaxed text-slate-300">{`swift build\nswift run Zenith`}</pre>
          </motion.div>
        </div>
      </section>
    </>
  );
}
