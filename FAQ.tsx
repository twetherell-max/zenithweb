import { ChevronDown, ChevronUp } from 'lucide-react';
import React from 'react';

const faqs = [
  {
    question: "Is there a free version available?",
    answer: "Yes! We offer a Starter plan that is completely free forever for individual use."
  },
  {
    question: "Which platforms does Zenith support?",
    answer: "Zenith is available as a native application for macOS (Intel & Apple Silicon), Windows 10/11, and most major Linux distributions."
  },
  {
    question: "Can I use Zenith offline?",
    answer: "Absolutely. Zenith is designed to work offline. Your data will automatically sync when you reconnect to the internet."
  },
  {
    question: "How secure is my data?",
    answer: "We use AES-256 encryption for all data at rest and TLS for data in transit. Your privacy is our top priority."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-slate-200 rounded-2xl overflow-hidden">
              <button 
                className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-bold text-slate-900">{faq.question}</span>
                {openIndex === index ? <ChevronUp className="text-indigo-600" /> : <ChevronDown className="text-slate-400" />}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6 text-slate-600">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
