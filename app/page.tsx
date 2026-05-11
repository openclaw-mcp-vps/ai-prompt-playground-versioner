export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <div className="inline-block bg-[#161b22] border border-[#30363d] rounded-full px-4 py-1 text-sm text-[#58a6ff] mb-6">
          Git-like versioning for AI prompts
        </div>
        <h1 className="text-5xl font-bold text-white mb-6 leading-tight">
          Stop Losing Your Best{" "}
          <span className="text-[#58a6ff]">AI Prompts</span>
        </h1>
        <p className="text-xl text-[#8b949e] mb-10 max-w-2xl mx-auto">
          Version control, A/B testing, and performance tracking for AI prompts.
          Commit changes, roll back mistakes, and ship better prompts faster.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-4 rounded-lg text-lg transition-colors"
        >
          Start for $19/mo
        </a>
        <div className="mt-16 bg-[#161b22] border border-[#30363d] rounded-xl p-6 text-left font-mono text-sm">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-3 h-3 rounded-full bg-[#ff5f57]"></span>
            <span className="w-3 h-3 rounded-full bg-[#febc2e]"></span>
            <span className="w-3 h-3 rounded-full bg-[#28c840]"></span>
            <span className="ml-2 text-[#8b949e]">prompt-vault</span>
          </div>
          <p className="text-[#8b949e]">$ <span className="text-[#58a6ff]">vault commit</span> -m "Improved tone for customer support"</p>
          <p className="text-[#3fb950] mt-1">✓ Committed v1.4.2 — accuracy +12%, latency -80ms</p>
          <p className="text-[#8b949e] mt-2">$ <span className="text-[#58a6ff]">vault ab-test</span> v1.3.0 v1.4.2 --provider openai,anthropic</p>
          <p className="text-[#3fb950] mt-1">✓ A/B test running across 2 providers — results in dashboard</p>
        </div>
      </section>

      {/* Features strip */}
      <section className="max-w-4xl mx-auto px-6 pb-20 grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { icon: "⎇", title: "Prompt Commits", desc: "Track every change with metadata, diffs, and performance deltas." },
          { icon: "⚡", title: "A/B Testing", desc: "Run prompts head-to-head across OpenAI, Anthropic, and more." },
          { icon: "↩", title: "One-Click Rollback", desc: "Instantly revert to any previous version when things go wrong." },
        ].map((f) => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <div className="text-3xl mb-3">{f.icon}</div>
            <h3 className="text-white font-semibold mb-2">{f.title}</h3>
            <p className="text-[#8b949e] text-sm">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20 text-center">
        <h2 className="text-3xl font-bold text-white mb-10">Simple Pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8">
          <div className="text-[#58a6ff] font-semibold mb-2">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$19</div>
          <div className="text-[#8b949e] mb-6">/month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited prompt repositories",
              "Full version history & diffs",
              "A/B testing across 5 providers",
              "Performance analytics dashboard",
              "One-click rollback",
              "Team collaboration (up to 5 seats)",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm">
                <span className="text-[#3fb950] font-bold">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-3xl font-bold text-white mb-10 text-center">FAQ</h2>
        <div className="space-y-6">
          {[
            {
              q: "Which AI providers are supported?",
              a: "PromptVault supports OpenAI, Anthropic, Google Gemini, Mistral, and any OpenAI-compatible API endpoint.",
            },
            {
              q: "How does A/B testing work?",
              a: "Select two prompt versions, choose your providers, and PromptVault runs both in parallel, collecting latency, cost, and quality scores side by side.",
            },
            {
              q: "Can I export my prompt history?",
              a: "Yes. Export your full repository as JSON or Markdown at any time — your data is always yours.",
            },
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="text-white font-semibold mb-2">{item.q}</h3>
              <p className="text-[#8b949e] text-sm">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#30363d] text-center py-8 text-[#8b949e] text-sm">
        © {new Date().getFullYear()} PromptVault. All rights reserved.
      </footer>
    </main>
  )
}
