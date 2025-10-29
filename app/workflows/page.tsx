"use client"

import type React from "react"
import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { IconPlay, IconStack2, IconPencil, IconShare2 } from "@tabler/icons-react"
import { useActivePage } from "@/lib/active-page-context"
import { useEffect } from "react"

export default function WorkflowsPage() {
  const { setActivePage } = useActivePage()

  useEffect(() => {
    setActivePage("Workflows")
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
          <div className="flex flex-1 flex-col p-6">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              <h1 className="text-2xl font-bold">Workflow</h1>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <IconShare2 className="mr-2 size-4" />
                  Share
                </Button>
                <Button size="sm">
                  <IconPlay className="mr-2 size-4" />
                  Run workflow
                </Button>
              </div>
            </div>

            {/* Workflow Steps */}
            <div className="space-y-4 max-w-3xl">
              {/* Step 1 */}
              <Card className="p-6 border-l-4 border-l-primary">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center size-8 rounded-full bg-primary/10">
                      <IconPlay className="size-4 text-primary" />
                    </div>
                    <h3 className="font-semibold">Run Tabular Review</h3>
                  </div>

                  <div className="ml-11 space-y-2">
                    <div className="flex items-center gap-2 p-3 rounded-lg bg-orange-50 border border-orange-200">
                      <div className="size-6 rounded bg-orange-200 flex items-center justify-center text-sm">📋</div>
                      <span className="text-sm font-medium">Customer Agreements (Template)</span>
                    </div>

                    <div className="flex items-center gap-2 p-3 rounded-lg border">
                      <IconPencil className="size-4 text-muted-foreground" />
                      <span className="text-sm">Input: Customer Agreements</span>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Step 2 */}
              <Card className="p-6 border-l-4 border-l-blue-500">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center size-8 rounded-full bg-blue-100">
                      <span className="text-sm font-bold text-blue-600">2</span>
                    </div>
                    <h3 className="font-semibold">Review & Draft Summary</h3>
                  </div>

                  <div className="ml-11">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Review [Step 1] and draft a brief, clear summary of potential red flags, key terms, and
                      obligations that require attention.
                    </p>
                  </div>
                </div>
              </Card>

              {/* Step 3 */}
              <Card className="p-6 border-l-4 border-l-green-500">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center size-8 rounded-full bg-green-100">
                      <IconPlay className="size-4 text-green-600" />
                    </div>
                    <h3 className="font-semibold">Search Database</h3>
                  </div>

                  <div className="ml-11 space-y-2">
                    <div className="flex items-center gap-2 p-3 rounded-lg border">
                      <IconStack2 className="size-4 text-muted-foreground" />
                      <span className="text-sm font-medium">DD Reports</span>
                    </div>

                    <p className="text-sm text-muted-foreground leading-relaxed">
                      For each red flag, check database for related due diligence reports and historical data.
                    </p>
                  </div>
                </div>
              </Card>

              {/* Step 4 */}
              <Card className="p-6 border-l-4 border-l-purple-500">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center size-8 rounded-full bg-purple-100">
                      <span className="text-sm font-bold text-purple-600">4</span>
                    </div>
                    <h3 className="font-semibold">Present Findings</h3>
                  </div>

                  <div className="ml-11">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Present findings in a table with four columns: Red Flag, Severity, Related Documents, and
                      Recommended Action.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
