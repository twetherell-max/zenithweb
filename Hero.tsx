import { Download, Play, Zap, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-100/50 rounded-full blur-3xl" />
        <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-violet-100/50 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-indigo-50 text-indigo-600 text-sm font-semibold tracking-wide uppercase mb-6">
              Version 2.0 is now live
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight mb-8">
              Work smarter, not harder <br />
              <span className="text-indigo-600">with Zenith</span>
            </h1>
            <p className="max-w-2xl mx-auto text-xl text-slate-600 mb-10">
              The all-in-one platform for task management, real-time collaboration, and deep focus. Built for teams that ship fast.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button className="w-full sm:w-auto px-8 py-4 bg-indigo-600 text-white rounded-xl font-bold text-lg hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-200 flex items-center justify-center gap-2 group">
              <Download size={20} className="group-hover:translate-y-0.5 transition-transform" />
              Download for Mac
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-xl font-bold text-lg hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
              <Play size={20} fill="currentColor" />
              Watch Demo
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200">
              <img 
                src="/hero-app.png" 
                alt="Zenith Dashboard" 
                className="w-full h-auto"
              />
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -bottom-6 -left-6 hidden md:block">
              <div className="bg-white p-4 rounded-xl shadow-lg border border-slate-100 flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                  <Zap size={24} />
                </div>
                <div>
                  <div className="text-2xl font-bold text-slate-900">10x</div>
                  <div className="text-sm text-slate-500">Faster Workflow</div>
                </div>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 hidden md:block">
              <div className="bg-white p-4 rounded-xl shadow-lg border border-slate-100 flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                  <Globe size={24} />
                </div>
                <div>
                  <div className="text-2xl font-bold text-slate-900">50k+</div>
                  <div className="text-sm text-slate-500">Active Users</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
