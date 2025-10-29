import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { ActivePageProvider } from "@/lib/active-page-context"

export const metadata: Metadata = {
  title: "Brick.ai",
  description: "Commercial Real Estate Intelligence Platform",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <ActivePageProvider>{children}</ActivePageProvider>
      </body>
    </html>
  )
}
