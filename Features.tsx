import { Zap, Shield, Layout, Users, MousePointer2, Cloud } from 'lucide-react';

const features = [
  {
    icon: <Zap className="text-amber-500" />,
    title: "Lightning Fast",
    description: "Built with speed in mind. Experience sub-millisecond response times across the entire interface."
  },
  {
    icon: <Shield className="text-emerald-500" />,
    title: "Secure by Design",
    description: "Your data is encrypted end-to-end. We never share your information with third parties."
  },
  {
    icon: <Layout className="text-blue-500" />,
    title: "Intuitive UI",
    description: "Clean, minimal, and highly customizable interface that adapts to your unique workflow."
  },
  {
    icon: <Users className="text-indigo-500" />,
    title: "Team Sync",
    description: "Collaborate in real-time with your team members. Share tasks, files, and updates instantly."
  },
  {
    icon: <MousePointer2 className="text-rose-500" />,
    title: "Smart Shortcuts",
    description: "Navigate the entire app without ever touching your mouse using our advanced command palette."
  },
  {
    icon: <Cloud className="text-sky-500" />,
    title: "Cloud Backup",
    description: "Automatic cloud synchronization ensures you never lose your work, no matter where you are."
  }
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Everything you need to succeed
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We've packed Zenith with powerful features that help you get more done in less time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="p-8 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
