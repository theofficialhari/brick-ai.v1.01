"use client"

import type React from "react"
import { useEffect, useState } from "react"
import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { IconFileText, IconUpload } from "@tabler/icons-react"
import { useActivePage } from "@/lib/active-page-context"

const knowledgeSources = [
  "JLL",
  "CBRE",
  "Cushman & Wakefield",
  "Colliers",
  "Web",
  "Brick Proprietary",
]

const draftSuggestions = [
  "Summarize latest APAC office trends",
  "Compare cap rates across logistics markets",
  "Outline tenant risk for York Hill",
  "Highlight 2025 development pipeline",
]

export default function ResearchPage() {
  const { setActivePage } = useActivePage()
  const [activeTab, setActiveTab] = useState<"assist" | "draft">("assist")

  useEffect(() => {
    setActivePage("Research")
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
              <div className="flex items-center gap-4 border-b">
                <button
                  className={`flex items-center gap-2 pb-3 text-sm font-medium ${
                    activeTab === "assist" ? "border-b-2 border-primary" : "text-muted-foreground"
                  }`}
                  onClick={() => setActiveTab("assist")}
                >
                  <IconFileText className="size-4" />
                  Assist
                </button>
                <button
                  className={`pb-3 text-sm font-medium ${
                    activeTab === "draft" ? "border-b-2 border-primary" : "text-muted-foreground"
                  }`}
                  onClick={() => setActiveTab("draft")}
                >
                  Draft
                </button>
              </div>

              <div className="flex items-center justify-between">
                <p className="text-sm text-muted-foreground">
                  Quickly search, analyze, or understand material, then ask follow-up questions
                </p>
                <a href="#" className="text-sm text-primary hover:underline">
                  View tips
                </a>
              </div>

              <Card className="p-6">
                <div className="space-y-4">
                  <Textarea
                    placeholder="Ask Brick anything..."
                    className="min-h-[200px] resize-none bg-muted/40 text-base"
                  />

                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex flex-wrap gap-2">
                      <Button variant="outline" size="sm" className="gap-2">
                        📄 Load prompt
                      </Button>
                      <Button variant="outline" size="sm" className="gap-2">
                        💾 Save prompt
                      </Button>
                    </div>
                    <Button size="lg" className="px-8">
                      Ask Brick
                    </Button>
                  </div>
                </div>
              </Card>

              <div className="grid gap-4 md:grid-cols-2">
                <Card className="border-dashed p-8 text-center">
                  <IconUpload className="mx-auto mb-3 size-12 text-muted-foreground" />
                  <h3 className="mb-1 font-semibold">Drag or click to upload files</h3>
                  <p className="text-sm text-muted-foreground">Choose files from your computer or a Vault project</p>
                  <Button variant="outline" size="sm" className="mt-4">
                    Browse files
                  </Button>
                </Card>

                <Card className="p-6">
                  <div className="mb-4 flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold">Knowledge sources</h3>
                      <p className="text-sm text-muted-foreground">Select up to six sources to ground responses</p>
                    </div>
                    <Badge variant="secondary" className="text-[10px]">Real-time</Badge>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {knowledgeSources.map((source) => (
                      <label key={source} className="flex items-center gap-2 rounded-lg border px-3 py-2 text-sm">
                        <Checkbox defaultChecked={source === "Brick Proprietary"} />
                        <span>{source}</span>
                      </label>
                    ))}
                  </div>
                </Card>
              </div>

              {activeTab === "draft" && (
                <Card className="p-6">
                  <h3 className="mb-3 text-sm font-semibold">Try one of these starting points</h3>
                  <div className="flex flex-wrap gap-2">
                    {draftSuggestions.map((suggestion) => (
                      <Button key={suggestion} variant="outline" size="sm" className="rounded-full">
                        {suggestion}
                      </Button>
                    ))}
                  </div>
                </Card>
              )}
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
