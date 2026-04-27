import React from 'react';
import { Download, Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center gap-2">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-sm rotate-45" />
              </div>
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600">
                Zenith
              </span>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#features" className="text-slate-600 hover:text-indigo-600 px-3 py-2 transition-colors">Features</a>
              <a href="#pricing" className="text-slate-600 hover:text-indigo-600 px-3 py-2 transition-colors">Pricing</a>
              <a href="#faq" className="text-slate-600 hover:text-indigo-600 px-3 py-2 transition-colors">FAQ</a>
              <button className="bg-indigo-600 text-white px-5 py-2 rounded-full font-medium hover:bg-indigo-700 transition-all shadow-md hover:shadow-lg flex items-center gap-2">
                <Download size={18} />
                Download
              </button>
            </div>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 p-2">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-b border-slate-100"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#features" className="block px-3 py-2 text-slate-600">Features</a>
            <a href="#pricing" className="block px-3 py-2 text-slate-600">Pricing</a>
            <a href="#faq" className="block px-3 py-2 text-slate-600">FAQ</a>
            <button className="w-full text-left flex items-center gap-2 px-3 py-2 text-indigo-600 font-medium">
              <Download size={18} />
              Download
            </button>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
