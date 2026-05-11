import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'PromptVault — Version Control for AI Prompts',
  description: 'Git-like versioning for AI prompts with A/B testing, rollback capabilities, and performance tracking across iterations.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="e8611cbf-4f9c-48f1-96ed-0d0912f18c5c"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
