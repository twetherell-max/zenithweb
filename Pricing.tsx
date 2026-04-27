import { Check } from 'lucide-react';

const tiers = [
  {
    name: "Starter",
    price: "0",
    description: "Perfect for individuals and side projects.",
    features: [
      "Unlimited tasks",
      "Up to 3 projects",
      "Basic collaboration",
      "5GB Storage",
      "Community support"
    ],
    cta: "Get Started",
    popular: false
  },
  {
    name: "Professional",
    price: "12",
    description: "Ideal for power users and small teams.",
    features: [
      "Everything in Starter",
      "Unlimited projects",
      "Advanced permissions",
      "50GB Storage",
      "Priority email support",
      "Custom branding"
    ],
    cta: "Start Free Trial",
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For organizations with custom needs.",
    features: [
      "Everything in Pro",
      "Single Sign-On (SSO)",
      "Dedicated account manager",
      "Unlimited storage",
      "24/7 Phone support",
      "Custom integrations"
    ],
    cta: "Contact Sales",
    popular: false
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Choose the plan that's right for you. No hidden fees.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <div 
              key={index}
              className={`relative p-8 rounded-3xl border ${
                tier.popular 
                  ? 'border-indigo-600 shadow-xl ring-4 ring-indigo-50' 
                  : 'border-slate-200 shadow-sm'
              } flex flex-col`}
            >
              {tier.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-indigo-600 text-white px-4 py-1 rounded-full text-sm font-bold">
                  Most Popular
                </div>
              )}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{tier.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-slate-900">
                    {tier.price === 'Custom' ? '' : '$'}{tier.price}
                  </span>
                  {tier.price !== 'Custom' && <span className="text-slate-500">/mo</span>}
                </div>
                <p className="mt-4 text-slate-600">{tier.description}</p>
              </div>
              
              <ul className="space-y-4 mb-8 flex-grow">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-600 text-sm">
                    <Check size={18} className="text-indigo-600 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 rounded-xl font-bold transition-all ${
                tier.popular 
                  ? 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg shadow-indigo-200' 
                  : 'bg-slate-100 text-slate-900 hover:bg-slate-200'
              }`}>
                {tier.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
