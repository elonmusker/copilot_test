const badges = [
  {
    icon: "🔓",
    label: "OPEN SOURCE",
    description: "MIT licensed, fully auditable",
  },
  {
    icon: "🛡️",
    label: "DEFENSE-IN-DEPTH",
    description: "Multiple security layers",
  },
  {
    icon: "🦀",
    label: "BUILT ON RUST",
    description: "Memory-safe, blazing fast",
  },
  {
    icon: "⚡",
    label: "1-CLICK DEPLOY",
    description: "Up and running in seconds",
  },
];

export default function Badges() {
  return (
    <section className="relative bg-[#0d0f14] border-y border-white/5 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
          {badges.map((badge, i) => (
            <div
              key={i}
              className="flex items-center gap-3 px-5 py-3 rounded-xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] hover:border-white/20 transition-all duration-200 group"
            >
              <span className="text-2xl" role="img" aria-hidden="true">
                {badge.icon}
              </span>
              <div>
                <div className="text-xs font-bold tracking-widest text-orange-400 uppercase">
                  {badge.label}
                </div>
                <div className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors">
                  {badge.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
