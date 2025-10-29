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
import { IconPresentation, IconUpload } from "@tabler/icons-react"
import { useActivePage } from "@/lib/active-page-context"

const presentationSources = [
  "Recent Investor Decks",
  "Vault Slides",
  "Market Insights",
  "Visual Library",
]

const templateLibrary = [
  { title: "Investor Update", description: "15 slides • Metrics, pipeline, outlook" },
  { title: "Acquisition IC", description: "20 slides • Deal thesis, underwriting, comps" },
  { title: "Quarterly Board", description: "18 slides • Financials, KPIs, initiatives" },
  { title: "Asset Spotlight", description: "12 slides • Property overview, performance" },
]

export default function PowerpointAIPage() {
  const { setActivePage } = useActivePage()

  useEffect(() => {
    setActivePage("Powerpoint AI")
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
                      <IconPresentation className="size-4" />
                      Assist
                    </button>
                    <button className="pb-2 text-sm font-medium text-muted-foreground hover:text-foreground">
                      Draft
                    </button>
                  </div>

                  <p className="text-xs text-muted-foreground">
                    Generate executive-ready slides, update visuals, or apply your brand template automatically.
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
                      <p className="text-xs text-muted-foreground">Attach brand guidelines or prior decks</p>
                    </div>
                    <Button variant="secondary" size="sm">
                      Upload slides
                    </Button>
                  </Card>

                  <Card className="space-y-3 p-5">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-semibold">Knowledge sources</h3>
                      <Badge variant="secondary" className="text-[10px]">Synced</Badge>
                    </div>
                    <div className="space-y-2">
                      {presentationSources.map((source) => (
                        <label key={source} className="flex items-center gap-2 rounded-md border px-3 py-2 text-sm">
                          <Checkbox defaultChecked={source === "Recent Investor Decks"} />
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
                        <h3 className="text-lg font-semibold">Template library</h3>
                        <p className="text-sm text-muted-foreground">
                          Choose from curated layouts optimized for commercial real estate storytelling.
                        </p>
                      </div>
                      <Button variant="outline" size="sm">
                        Create blank deck
                      </Button>
                    </div>
                    <div className="mt-6 grid gap-4 sm:grid-cols-2">
                      {templateLibrary.map((template) => (
                        <Card key={template.title} className="space-y-3 border p-4">
                          <div className="aspect-video w-full rounded-md bg-muted" />
                          <div className="space-y-1">
                            <h4 className="text-sm font-semibold">{template.title}</h4>
                            <p className="text-xs text-muted-foreground">{template.description}</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <Button size="sm">Use template</Button>
                            <Button variant="outline" size="sm">
                              Preview
                            </Button>
                          </div>
                        </Card>
                      ))}
                    </div>
                  </Card>

                  <Card className="space-y-4 p-6">
                    <h3 className="text-lg font-semibold">Slide outline</h3>
                    <div className="space-y-3">
                      {["Executive summary", "Investment highlights", "Financial overview", "Next steps"].map((item, index) => (
                        <div key={item} className="flex items-center justify-between rounded-lg border p-3 text-sm">
                          <div className="flex items-center gap-3">
                            <span className="flex size-6 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                              {index + 1}
                            </span>
                            <span>{item}</span>
                          </div>
                          <Button variant="ghost" size="sm">
                            Customize
                          </Button>
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
