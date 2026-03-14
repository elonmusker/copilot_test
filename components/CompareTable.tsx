const rows = [
  {
    feature: "Secret Management",
    openclaw: { value: "Plaintext env vars", good: false },
    ironclaw: { value: "Encrypted vault, JIT tokens", good: true },
  },
  {
    feature: "Tool Sandboxing",
    openclaw: { value: "No isolation", good: false },
    ironclaw: { value: "gVisor + syscall filtering", good: true },
  },
  {
    feature: "Audit Logging",
    openclaw: { value: "Basic stdout logs", good: false },
    ironclaw: { value: "Signed, tamper-proof append-only log", good: true },
  },
  {
    feature: "Network Control",
    openclaw: { value: "Full host network access", good: false },
    ironclaw: { value: "Per-tool network allowlists", good: true },
  },
  {
    feature: "Filesystem Access",
    openclaw: { value: "Unrestricted host FS", good: false },
    ironclaw: { value: "Scoped per-task mounts", good: true },
  },
  {
    feature: "Policy Engine",
    openclaw: { value: "None", good: false },
    ironclaw: { value: "OPA-based policy enforcement", good: true },
  },
  {
    feature: "Human-in-Loop",
    openclaw: { value: "Not supported", good: false },
    ironclaw: { value: "Built-in approval gates", good: true },
  },
  {
    feature: "Confidential Compute",
    openclaw: { value: "None", good: false },
    ironclaw: { value: "TEE/SGX enclaves", good: true },
  },
  {
    feature: "Zero Trust Auth",
    openclaw: { value: "API key per agent", good: false },
    ironclaw: { value: "SPIFFE/SPIRE + mTLS", good: true },
  },
  {
    feature: "Open Source",
    openclaw: { value: "Partially", good: null },
    ironclaw: { value: "100% MIT Licensed", good: true },
  },
];

export default function CompareTable() {
  return (
    <section id="compare" className="relative bg-[#0d0f14] py-24 lg:py-32">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-xs font-semibold tracking-widest uppercase mb-4">
            Side By Side
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-4">
            IronClaw vs OpenClaw
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            See exactly what you get with IronClaw that you don&apos;t get with
            standard OpenClaw.
          </p>
        </div>

        {/* Table */}
        <div className="overflow-x-auto rounded-2xl border border-white/10">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left px-6 py-4 text-gray-400 font-semibold bg-white/[0.02] w-1/3">
                  Feature
                </th>
                <th className="px-6 py-4 text-center bg-red-950/20">
                  <div className="inline-flex flex-col items-center gap-1">
                    <span className="text-base font-black text-red-400">
                      OpenClaw
                    </span>
                    <span className="text-[10px] text-red-500/60 tracking-widest uppercase">
                      Unprotected
                    </span>
                  </div>
                </th>
                <th className="px-6 py-4 text-center bg-orange-950/20">
                  <div className="inline-flex flex-col items-center gap-1">
                    <span className="text-base font-black text-orange-400">
                      🦀 IronClaw
                    </span>
                    <span className="text-[10px] text-orange-500/60 tracking-widest uppercase">
                      Defense-in-Depth
                    </span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr
                  key={i}
                  className={`border-b border-white/5 hover:bg-white/[0.02] transition-colors ${
                    i % 2 === 0 ? "bg-transparent" : "bg-white/[0.01]"
                  }`}
                >
                  <td className="px-6 py-4 text-gray-300 font-medium">
                    {row.feature}
                  </td>
                  <td className="px-6 py-4 text-center">
                    <div className="inline-flex items-center gap-2">
                      <span
                        className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] ${
                          row.openclaw.good === false
                            ? "bg-red-900/40 border border-red-700/40 text-red-400"
                            : "bg-yellow-900/40 border border-yellow-700/40 text-yellow-400"
                        }`}
                      >
                        {row.openclaw.good === false ? "✗" : "~"}
                      </span>
                      <span
                        className={
                          row.openclaw.good === false
                            ? "text-red-400/80"
                            : "text-yellow-400/80"
                        }
                      >
                        {row.openclaw.value}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <div className="inline-flex items-center gap-2">
                      <span className="w-4 h-4 rounded-full bg-green-900/40 border border-green-700/40 flex items-center justify-center text-[10px] text-green-400">
                        ✓
                      </span>
                      <span className="text-green-400/80">
                        {row.ironclaw.value}
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
