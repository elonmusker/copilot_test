const features = [
  {
    icon: "🔐",
    title: "Encrypted Vault",
    description:
      "All secrets, API keys, and credentials are stored with AES-256-GCM encryption. Agents receive just-in-time, scoped tokens — never raw secrets.",
    tags: ["AES-256-GCM", "JIT Access", "Zero-Knowledge"],
  },
  {
    icon: "📦",
    title: "Sandboxed Tools",
    description:
      "Every tool call your AI agent makes is executed inside an isolated sandbox. Network access, filesystem reads/writes are all controlled and audited.",
    tags: ["gVisor", "Network Isolation", "FS Controls"],
  },
  {
    icon: "🏰",
    title: "Encrypted Enclaves",
    description:
      "Sensitive computations run inside hardware-backed trusted execution environments (TEEs). Your code and data are protected even from the host OS.",
    tags: ["TEE/SGX", "Attestation", "Confidential Compute"],
  },
  {
    icon: "👁️",
    title: "Full Audit Log",
    description:
      "Every action your agent takes is logged, signed, and stored tamper-proof. Know exactly what ran, when, and why — with cryptographic proof.",
    tags: ["Signed Logs", "Tamper-Proof", "SIEM Ready"],
  },
  {
    icon: "🚫",
    title: "Policy Enforcement",
    description:
      "Define fine-grained policies for what your agents can and cannot do. Block dangerous operations, rate-limit API calls, and set approval workflows.",
    tags: ["OPA Policies", "Rate Limiting", "Human-in-Loop"],
  },
  {
    icon: "🔑",
    title: "Zero Trust Auth",
    description:
      "No implicit trust. Every agent, tool, and resource must authenticate. Short-lived tokens, mutual TLS, and continuous authorization verification.",
    tags: ["mTLS", "SPIFFE/SPIRE", "RBAC"],
  },
];

export default function Features() {
  return (
    <section id="features" className="relative bg-[#0d0f14] py-24 lg:py-32">
      {/* Gradient background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-orange-900/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-orange-800/5 rounded-full blur-[80px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-xs font-semibold tracking-widest uppercase mb-4">
            Security Built In
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-4">
            What You Get
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            A complete security stack for AI agents — from secret management to
            sandboxed execution.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <div
              key={i}
              className="group relative p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] hover:border-orange-500/30 transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-2xl mb-4 group-hover:bg-orange-500/20 transition-colors">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-white mb-2">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-400 leading-relaxed mb-4">
                {feature.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {feature.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded text-[10px] font-semibold tracking-wide text-orange-400/70 bg-orange-500/10 border border-orange-500/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Hover corner accent */}
              <div className="absolute top-0 right-0 w-16 h-16 rounded-br-2xl overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-orange-500/10 to-transparent" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
