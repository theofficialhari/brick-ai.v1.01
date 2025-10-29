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
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { IconFileText, IconUpload, IconArchive, IconCheck } from "@tabler/icons-react"
import { useActivePage } from "@/lib/active-page-context"

const knowledgeSources = [
  "Brick Proprietary",
  "EDGAR Filings",
  "Lease Library",
  "Operating Statements",
  "Market Reports",
]

const documentRows = [
  {
    name: "York Hill Lease Agreement",
    counterparty: "York Hill Capital",
    lastUpdated: "2 hours ago",
    status: "Extracted",
  },
  {
    name: "Tenant Improvement Schedule",
    counterparty: "Acme Holdings",
    lastUpdated: "Yesterday",
    status: "In review",
  },
  {
    name: "Rent Roll - Q1 2025",
    counterparty: "Property Ops",
    lastUpdated: "3 days ago",
    status: "Extracted",
  },
  {
    name: "Loan Agreement Summary",
    counterparty: "First Capital Bank",
    lastUpdated: "Last week",
    status: "Pending",
  },
]

export default function DocumentAIPage() {
  const { setActivePage } = useActivePage()

  useEffect(() => {
    setActivePage("Document AI")
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
                {/* Left Column - Chat Interface (40%) */}
                <div className="lg:w-2/5 space-y-5">
                  <div className="flex items-center gap-4 border-b pb-2">
                    <button className="flex items-center gap-2 border-b-2 border-primary pb-2 text-sm font-medium">
                      <IconFileText className="size-4" />
                      Assist
                    </button>
                    <button className="pb-2 text-sm font-medium text-muted-foreground hover:text-foreground">
                      Draft
                    </button>
                  </div>

                  <p className="text-xs text-muted-foreground">
                    Quickly search, analyze, or understand material, then ask follow-up questions.
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
                      <p className="font-medium">Drag or click to upload files</p>
                      <p className="text-xs text-muted-foreground">
                        Connect a Vault project or browse from your device
                      </p>
                    </div>
                    <Button variant="secondary" size="sm">
                      Browse files
                    </Button>
                  </Card>

                  <Card className="space-y-3 p-5">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-semibold">Knowledge sources</h3>
                      <Badge variant="secondary" className="text-[10px]">Live</Badge>
                    </div>
                    <div className="space-y-2">
                      {knowledgeSources.map((source) => (
                        <label key={source} className="flex items-center gap-2 rounded-md border px-3 py-2 text-sm">
                          <Checkbox defaultChecked={source === "Brick Proprietary"} />
                          <span>{source}</span>
                        </label>
                      ))}
                    </div>
                  </Card>
                </div>

                {/* Right Column - Document Review (60%) */}
                <div className="lg:w-3/5 space-y-5">
                  <Card className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-semibold">Document review</h3>
                        <p className="text-sm text-muted-foreground">
                          Extraction summary with status, key counterparties, and outstanding actions.
                        </p>
                      </div>
                      <Button variant="outline" size="sm" className="gap-2">
                        <IconArchive className="size-4" /> Export table
                      </Button>
                    </div>
                    <div className="mt-6 overflow-hidden rounded-lg border">
                      <Table>
                        <TableHeader className="bg-muted/50">
                          <TableRow>
                            <TableHead>Document</TableHead>
                            <TableHead>Counterparty</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead className="text-right">Last updated</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {documentRows.map((row) => (
                            <TableRow key={row.name}>
                              <TableCell>
                                <div className="flex flex-col">
                                  <span className="font-medium">{row.name}</span>
                                  <span className="text-xs text-muted-foreground">Lease • 42 key fields</span>
                                </div>
                              </TableCell>
                              <TableCell className="text-sm">{row.counterparty}</TableCell>
                              <TableCell>
                                <div className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                                  <IconCheck className="size-3" /> {row.status}
                                </div>
                              </TableCell>
                              <TableCell className="text-right text-sm text-muted-foreground">{row.lastUpdated}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                  </Card>

                  <Card className="space-y-4 p-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold">Extraction details</h3>
                      <Button variant="outline" size="sm">
                        View history
                      </Button>
                    </div>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {["Rent escalations", "Termination clauses", "Operating expenses", "Guarantees"].map((item) => (
                        <div key={item} className="rounded-lg border p-3">
                          <p className="text-sm font-medium">{item}</p>
                          <p className="text-xs text-muted-foreground">Ready for review</p>
                        </div>
                      ))}
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
