import type React from "react"
import { useEffect } from "react"
import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { IconBook, IconCode, IconHelp } from "@tabler/icons-react"
import { useActivePage } from "@/lib/active-page-context"

export default function DocumentationPage() {
  const { setActivePage } = useActivePage()

  useEffect(() => {
    setActivePage("Documentation")
  }, [setActivePage])

  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col">
            <div className="mx-auto w-full max-w-4xl space-y-6 p-6">
              <div>
                <h1 className="text-3xl font-bold">Documentation</h1>
                <p className="mt-2 text-muted-foreground">Complete reference guide for Brick.ai</p>
              </div>

              {/* Getting Started */}
              <Card className="p-6">
                <div className="mb-4 flex items-center gap-2">
                  <IconBook className="size-5 text-primary" />
                  <h2 className="text-xl font-semibold">Getting Started</h2>
                </div>
                <div className="space-y-2">
                  {["Installation & Setup", "First Steps", "Configuration", "System Requirements"].map((item, i) => (
                    <Button key={i} variant="ghost" className="w-full justify-start text-left">
                      {item}
                    </Button>
                  ))}
                </div>
              </Card>

              {/* API Reference */}
              <Card className="p-6">
                <div className="mb-4 flex items-center gap-2">
                  <IconCode className="size-5 text-primary" />
                  <h2 className="text-xl font-semibold">API Reference</h2>
                </div>
                <div className="space-y-2">
                  {["REST API", "Authentication", "Endpoints", "Rate Limiting", "Error Handling"].map((item, i) => (
                    <Button key={i} variant="ghost" className="w-full justify-start text-left">
                      {item}
                    </Button>
                  ))}
                </div>
              </Card>

              {/* FAQ */}
              <Card className="p-6">
                <div className="mb-4 flex items-center gap-2">
                  <IconHelp className="size-5 text-primary" />
                  <h2 className="text-xl font-semibold">Frequently Asked Questions</h2>
                </div>
                <div className="space-y-4">
                  {[
                    {
                      q: "How do I reset my password?",
                      a: "Go to Settings > Account and click 'Reset Password'",
                    },
                    {
                      q: "Can I export my data?",
                      a: "Yes, you can export data from the Vault section",
                    },
                    {
                      q: "How do I contact support?",
                      a: "Visit Settings > Support or email support@brick.ai",
                    },
                    {
                      q: "What are the system requirements?",
                      a: "Brick works on all modern browsers with JavaScript enabled",
                    },
                  ].map((faq, i) => (
                    <div key={i} className="border-b pb-4 last:border-0">
                      <p className="font-medium text-sm">{faq.q}</p>
                      <p className="mt-1 text-sm text-muted-foreground">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
