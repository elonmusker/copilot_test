import CodeBlock from "./CodeBlock";

const steps = [
  {
    number: "01",
    title: "1-Click Deploy",
    description:
      "Deploy IronClaw to your infrastructure in seconds. No complex configuration, no vendor lock-in. Just one command and you're protected.",
    code: `# Deploy IronClaw with one command
curl -fsSL https://install.ironclaw.com | sh

# Or with Docker
docker run -d --name ironclaw \\
  -e IRONCLAW_LICENSE=your-key \\
  -p 8080:8080 \\
  ironclaw/ironclaw:latest`,
    language: "bash",
    filename: "terminal",
  },
  {
    number: "02",
    title: "Store Your Credentials",
    description:
      "IronClaw's encrypted vault securely stores all your API keys, tokens, and secrets. Your AI agents get just-in-time access — no secrets ever exposed in plaintext.",
    code: `# Store credentials in the encrypted vault
ironclaw vault set GITHUB_TOKEN ghp_xxxxxxxxxxxx
ironclaw vault set OPENAI_API_KEY sk-xxxxxxxxxxxx
ironclaw vault set AWS_SECRET_ACCESS_KEY xxxxxxxxxxxx

# List stored credentials (values hidden)
ironclaw vault list
# GITHUB_TOKEN     [encrypted]
# OPENAI_API_KEY   [encrypted]
# AWS_SECRET_ACCESS_KEY [encrypted]`,
    language: "bash",
    filename: "terminal",
  },
  {
    number: "03",
    title: "Work As Usual",
    description:
      "Your AI agents interact with IronClaw transparently. All tool calls are sandboxed and audited. You get full observability without changing how you work.",
    code: `// Your agent code stays the same
const result = await agent.run({
  task: "Refactor the auth module",
  tools: ["read_file", "write_file", "run_tests"],
});

// IronClaw automatically:
// ✓ Sandboxes every tool call
// ✓ Injects credentials securely
// ✓ Logs all actions for audit
// ✓ Blocks suspicious behavior`,
    language: "typescript",
    filename: "agent.ts",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative bg-[#0a0c10] py-24 lg:py-32">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-xs font-semibold tracking-widest uppercase mb-4">
            Simple Setup
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Get enterprise-grade security for your AI agents in three simple
            steps. No security expertise required.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-16 lg:space-y-24">
          {steps.map((step, i) => (
            <div
              key={i}
              className={`flex flex-col ${
                i % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
              } gap-8 lg:gap-16 items-start`}
            >
              {/* Text */}
              <div className="flex-1 flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <span className="text-5xl font-black text-orange-500/30 leading-none tabular-nums">
                    {step.number}
                  </span>
                  <div className="h-px flex-1 bg-gradient-to-r from-orange-500/30 to-transparent" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  {step.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-base lg:text-lg">
                  {step.description}
                </p>
              </div>

              {/* Code block */}
              <div className="flex-1 w-full">
                <CodeBlock
                  code={step.code}
                  language={step.language}
                  filename={step.filename}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
