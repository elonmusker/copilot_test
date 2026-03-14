const plans = [
  {
    name: "Starter",
    price: "Free",
    period: "",
    description: "Perfect for personal projects and open-source work.",
    cta: "Get Started",
    ctaHref: "#",
    featured: false,
    features: [
      "1 agent concurrency",
      "Encrypted vault (10 secrets)",
      "Basic sandboxing",
      "7-day audit log retention",
      "Community support",
      "MIT licensed",
    ],
    missing: ["Policy engine", "TEE enclaves", "SLA guarantee"],
  },
  {
    name: "Basic",
    price: "$29",
    period: "/mo",
    description: "For small teams building production AI workflows.",
    cta: "Start Free Trial",
    ctaHref: "#",
    featured: true,
    features: [
      "10 agent concurrency",
      "Encrypted vault (unlimited secrets)",
      "Full gVisor sandboxing",
      "90-day audit log retention",
      "OPA policy engine",
      "Human-in-loop gates",
      "Email support",
      "MIT licensed",
    ],
    missing: ["TEE enclaves", "Dedicated infrastructure"],
  },
  {
    name: "Pro+",
    price: "$99",
    period: "/mo",
    description:
      "Enterprise-grade security for teams with compliance requirements.",
    cta: "Contact Sales",
    ctaHref: "#",
    featured: false,
    features: [
      "Unlimited agent concurrency",
      "Encrypted vault (unlimited secrets)",
      "Full gVisor sandboxing",
      "1-year audit log retention",
      "OPA policy engine + custom rules",
      "Human-in-loop gates",
      "TEE/SGX enclaves",
      "Dedicated infrastructure",
      "SSO / SAML",
      "99.9% SLA",
      "Priority support",
    ],
    missing: [],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative bg-[#0a0c10] py-24 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-orange-900/10 blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-xs font-semibold tracking-widest uppercase mb-4">
            Simple Pricing
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-4">
            Pricing
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Start free. Scale as you grow. No surprise bills.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`relative flex flex-col rounded-2xl border p-8 transition-all duration-300 ${
                plan.featured
                  ? "border-orange-500/50 bg-orange-950/10 shadow-xl shadow-orange-900/20 scale-[1.02]"
                  : "border-white/10 bg-white/[0.02] hover:border-white/20"
              }`}
            >
              {/* Featured badge */}
              {plan.featured && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="px-3 py-1 rounded-full bg-orange-500 text-white text-xs font-bold tracking-wide uppercase shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Plan name */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-1">
                  {plan.name}
                </h3>
                <p className="text-sm text-gray-500">{plan.description}</p>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-1 mb-8">
                <span
                  className={`text-5xl font-black ${
                    plan.featured ? "text-orange-400" : "text-white"
                  }`}
                >
                  {plan.price}
                </span>
                {plan.period && (
                  <span className="text-gray-500 text-sm">{plan.period}</span>
                )}
              </div>

              {/* CTA */}
              <a
                href={plan.ctaHref}
                className={`block text-center py-3 px-6 rounded-xl font-semibold text-sm transition-all duration-200 mb-8 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0c10] ${
                  plan.featured
                    ? "bg-orange-500 hover:bg-orange-400 text-white shadow-lg shadow-orange-900/30 focus-visible:ring-orange-400"
                    : "border border-white/20 hover:border-white/40 text-white hover:bg-white/5 focus-visible:ring-white/50"
                }`}
              >
                {plan.cta}
              </a>

              {/* Features */}
              <ul className="space-y-3">
                {plan.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-3 text-sm">
                    <span className="mt-0.5 flex-shrink-0 w-4 h-4 rounded-full bg-green-900/40 border border-green-700/40 flex items-center justify-center text-[9px] text-green-400">
                      ✓
                    </span>
                    <span className="text-gray-300">{feat}</span>
                  </li>
                ))}
                {plan.missing.map((feat) => (
                  <li key={feat} className="flex items-start gap-3 text-sm">
                    <span className="mt-0.5 flex-shrink-0 w-4 h-4 rounded-full bg-gray-900/40 border border-gray-700/40 flex items-center justify-center text-[9px] text-gray-600">
                      —
                    </span>
                    <span className="text-gray-600">{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-4">
            Need a custom plan?{" "}
            <a
              href="mailto:hello@ironclaw.com"
              className="text-orange-400 hover:text-orange-300 underline underline-offset-2 transition-colors"
            >
              Talk to us
            </a>
          </p>
          <p className="text-sm text-gray-600">
            All plans include: MIT-licensed core · No vendor lock-in · Self-host
            available
          </p>
        </div>
      </div>
    </section>
  );
}
