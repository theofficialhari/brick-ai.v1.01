"use client"

import type React from "react"
import { useEffect } from "react"
import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { IconChartBar, IconUpload, IconTrendingUp, IconReportAnalytics } from "@tabler/icons-react"
import { useActivePage } from "@/lib/active-page-context"

const underwritingSources = [
  "Brick Cashflow Models",
  "ARGUS Exports",
  "Historical Operating Statements",
  "Debt Assumptions",
]

const dealMetrics = [
  { label: "Target IRR", value: "17.8%", change: "+1.2%" },
  { label: "Equity Multiple", value: "2.4x", change: "+0.1x" },
  { label: "Debt Service Coverage", value: "1.32×", change: "Stable" },
  { label: "Exit Cap Rate", value: "5.9%", change: "-20 bps" },
]

export default function UnderwritingAIPage() {
  const { setActivePage } = useActivePage()

  useEffect(() => {
    setActivePage("Underwriting AI")
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
            <div className="mx-auto w-full max-w-6xl space-y-6 p-6">
              <div className="flex flex-col gap-6 lg:flex-row">
                {/* Left Column */}
                <div className="lg:w-2/5 space-y-5">
                  <div className="flex items-center gap-4 border-b pb-2">
                    <button className="flex items-center gap-2 border-b-2 border-primary pb-2 text-sm font-medium">
                      <IconChartBar className="size-4" />
                      Assist
                    </button>
                    <button className="pb-2 text-sm font-medium text-muted-foreground hover:text-foreground">
                      Draft
                    </button>
                  </div>

                  <p className="text-xs text-muted-foreground">
                    Summarize underwriting assumptions, analyze sensitivities, or request a refreshed model.
                  </p>

                  <Card className="space-y-4 p-5">
                    <Textarea
                      placeholder="Ask Brick anything..."
                      className="min-h-[180px] resize-none bg-muted/40"
                    />
                    <div className="flex flex-wrap items-center gap-2">
                      <Button variant="outline" size="sm" className="gap-2">
                        📄 Load prompt
                      </Button>
                      <Button variant="outline" size="sm" className="gap-2">
                        💾 Save prompt
                      </Button>
                      <Button className="ml-auto">Ask Brick</Button>
                    </div>
                  </Card>

                  <Card className="flex flex-col items-center justify-center gap-3 border-dashed p-6 text-center">
                    <IconUpload className="size-8 text-muted-foreground" />
                    <div>
                      <p className="font-medium">Drag or click to upload financial models</p>
                      <p className="text-xs text-muted-foreground">Upload Excel, ARGUS, or connect a Vault project</p>
                    </div>
                    <Button variant="secondary" size="sm">
                      Add model
                    </Button>
                  </Card>

                  <Card className="space-y-3 p-5">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-semibold">Knowledge sources</h3>
                      <Badge variant="secondary" className="text-[10px]">Updated</Badge>
                    </div>
                    <div className="space-y-2">
                      {underwritingSources.map((source) => (
                        <label key={source} className="flex items-center gap-2 rounded-md border px-3 py-2 text-sm">
                          <Checkbox defaultChecked={source === "Brick Cashflow Models"} />
                          <span>{source}</span>
                        </label>
                      ))}
                    </div>
                  </Card>
                </div>

                {/* Right Column */}
                <div className="lg:w-3/5 space-y-5">
                  <Card className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-semibold">Deal metrics</h3>
                        <p className="text-sm text-muted-foreground">Current underwriting assumptions and live targets.</p>
                      </div>
                      <Button variant="outline" size="sm" className="gap-2">
                        <IconTrendingUp className="size-4" /> Update assumptions
                      </Button>
                    </div>
                    <div className="mt-6 grid gap-4 sm:grid-cols-2">
                      {dealMetrics.map((metric) => (
                        <div key={metric.label} className="rounded-lg border p-4">
                          <p className="text-xs text-muted-foreground uppercase tracking-wide">{metric.label}</p>
                          <p className="mt-2 text-2xl font-semibold">{metric.value}</p>
                          <p className="text-xs text-green-600">{metric.change}</p>
                        </div>
                      ))}
                    </div>
                  </Card>

                  <Card className="grid gap-4 p-6 md:grid-cols-2">
                    <div className="space-y-3">
                      <h3 className="text-sm font-semibold">Sensitivity analysis</h3>
                      {["Rent Growth ±200 bps", "Exit Cap ±50 bps", "LTV ±5%"].map((item) => (
                        <div key={item} className="rounded-lg border p-3">
                          <p className="text-xs text-muted-foreground">Scenario</p>
                          <p className="text-sm font-medium">{item}</p>
                          <p className="text-xs text-green-600">Favorable</p>
                        </div>
                      ))}
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-sm font-semibold">Cash flow preview</h3>
                      <div className="rounded-lg border p-4">
                        <div className="h-32 rounded-md bg-gradient-to-br from-blue-200 to-blue-500/60" />
                        <p className="mt-3 text-xs text-muted-foreground">
                          Year-by-year NOI, debt service, and cash-on-cash returns.
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card className="space-y-4 p-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold">Model activity</h3>
                      <Button variant="outline" size="sm" className="gap-2">
                        <IconReportAnalytics className="size-4" /> View audit log
                      </Button>
                    </div>
                    <div className="space-y-3">
                      {["Model refreshed with January actuals", "Debt assumptions updated", "Scenario: downside stress"].map(
                        (update) => (
                          <div key={update} className="rounded-lg border p-3 text-sm">
                            <p className="font-medium">{update}</p>
                            <p className="text-xs text-muted-foreground">5 minutes ago</p>
                          </div>
                        ),
                      )}
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
