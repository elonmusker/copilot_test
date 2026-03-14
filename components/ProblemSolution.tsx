const problems = [
  {
    problem: "API keys and secrets are passed directly to agents",
    solution: "Encrypted vault with JIT token injection — agents never see raw secrets",
  },
  {
    problem: "Agents can read/write any file on the host system",
    solution: "Sandboxed filesystem with fine-grained access control per task",
  },
  {
    problem: "No visibility into what your agent actually did",
    solution: "Cryptographically signed, append-only audit log for every action",
  },
  {
    problem: "Agents can make unlimited, uncontrolled API calls",
    solution: "Per-tool rate limiting and policy enforcement with OPA",
  },
  {
    problem: "Compromised agent = compromised entire environment",
    solution: "Blast-radius containment — each agent runs in its own enclave",
  },
  {
    problem: "No way to require human approval for sensitive operations",
    solution: "Built-in human-in-the-loop gates for high-risk actions",
  },
];

export default function ProblemSolution() {
  return (
    <section id="why-switch" className="relative bg-[#0a0c10] py-24 lg:py-32">
      {/* Subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-950/5 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-xs font-semibold tracking-widest uppercase mb-4">
            The Problem
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-4">
            Why Switch to IronClaw?
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            OpenClaw gives agents powerful capabilities — but with those
            capabilities come serious security risks. IronClaw solves them all.
          </p>
        </div>

        {/* Problems vs Solutions */}
        <div className="max-w-4xl mx-auto space-y-4">
          {/* Column headers */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-red-950/30 border border-red-800/30">
              <span className="text-red-400 text-lg">⚠️</span>
              <span className="text-sm font-bold text-red-400 tracking-wide uppercase">
                OpenClaw Risk
              </span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-green-950/30 border border-green-800/30">
              <span className="text-green-400 text-lg">✅</span>
              <span className="text-sm font-bold text-green-400 tracking-wide uppercase">
                IronClaw Solution
              </span>
            </div>
          </div>

          {problems.map((item, i) => (
            <div
              key={i}
              className="grid grid-cols-2 gap-4 group"
            >
              {/* Problem */}
              <div className="p-4 rounded-xl border border-red-900/30 bg-red-950/10 hover:bg-red-950/20 transition-colors">
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-red-900/40 border border-red-700/40 flex items-center justify-center text-xs text-red-400">
                    ✗
                  </span>
                  <p className="text-sm text-red-300/80 leading-relaxed">
                    {item.problem}
                  </p>
                </div>
              </div>

              {/* Solution */}
              <div className="p-4 rounded-xl border border-green-900/30 bg-green-950/10 hover:bg-green-950/20 transition-colors">
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-green-900/40 border border-green-700/40 flex items-center justify-center text-xs text-green-400">
                    ✓
                  </span>
                  <p className="text-sm text-green-300/80 leading-relaxed">
                    {item.solution}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
