"use client"

import type React from "react"
import { useState } from "react"
import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { useActivePage } from "@/lib/active-page-context"
import { useEffect } from "react"

export default function PersonalizationPage() {
  const { setActivePage } = useActivePage()
  const [locationSharing, setLocationSharing] = useState(true)
  const [searchLibrary, setSearchLibrary] = useState(true)
  const [savedMemories, setSavedMemories] = useState(false)

  useEffect(() => {
    setActivePage("Personalization")
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
          <div className="max-w-2xl space-y-8 p-6">
            <div>
              <h1 className="text-3xl font-bold">Personalization</h1>
            </div>

            {/* Introduce Yourself */}
            <Card className="p-6">
              <h2 className="text-lg font-semibold mb-4">Introduce Yourself</h2>
              <div className="space-y-4">
                <Textarea
                  placeholder="I'm a real estate professional focused on commercial acquisitions in Asia Pacific..."
                  className="min-h-[120px]"
                />
                <div className="flex gap-2">
                  <Button variant="outline">Clear</Button>
                  <Button>Save</Button>
                </div>
              </div>
            </Card>

            {/* Location */}
            <Card className="p-6">
              <h2 className="text-lg font-semibold mb-4">Location</h2>
              <p className="text-sm text-muted-foreground mb-4">
                Enter a location for accurate market data and property insights
              </p>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium">You are sharing your location via your device</p>
                  </div>
                  <button
                    onClick={() => setLocationSharing(!locationSharing)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      locationSharing ? "bg-primary" : "bg-muted"
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        locationSharing ? "translate-x-6" : "translate-x-1"
                      }`}
                    />
                  </button>
                </div>
                {locationSharing && (
                  <div className="p-3 rounded-lg bg-muted">
                    <p className="text-sm">Device location: Singapore, Singapore</p>
                  </div>
                )}
              </div>
            </Card>

            {/* Memory */}
            <Card className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <h2 className="text-lg font-semibold">Memory</h2>
                <span className="text-xs font-semibold px-2 py-1 rounded bg-yellow-100 text-yellow-800">BETA</span>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <p className="text-sm font-medium">Reference search library</p>
                    <p className="text-xs text-muted-foreground">Let Brick.ai use previous searches when answering</p>
                  </div>
                  <button
                    onClick={() => setSearchLibrary(!searchLibrary)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      searchLibrary ? "bg-primary" : "bg-muted"
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        searchLibrary ? "translate-x-6" : "translate-x-1"
                      }`}
                    />
                  </button>
                </div>

                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <p className="text-sm font-medium">Reference saved memories</p>
                    <p className="text-xs text-muted-foreground">Let Brick.ai save and use memories when answering</p>
                  </div>
                  <button
                    onClick={() => setSavedMemories(!savedMemories)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      savedMemories ? "bg-primary" : "bg-muted"
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        savedMemories ? "translate-x-6" : "translate-x-1"
                      }`}
                    />
                  </button>
                </div>

                <Button variant="outline" className="w-full bg-transparent">
                  Edit your saved memories
                </Button>
              </div>
            </Card>

            {/* Watchlists */}
            <Card className="p-6">
              <h2 className="text-lg font-semibold mb-4">Manage your watchlists</h2>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <p className="text-sm font-medium">Real Estate Markets</p>
                    <p className="text-xs text-muted-foreground">Market updates, cap rates, and transaction data</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-primary">
                      <span className="inline-block h-4 w-4 transform rounded-full bg-white translate-x-6" />
                    </button>
                    <Button variant="outline" size="sm">
                      Manage
                    </Button>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <p className="text-sm font-medium">Properties</p>
                    <p className="text-xs text-muted-foreground">Track specific properties, buildings, or portfolios</p>
                  </div>
                  <Button variant="outline" size="sm">
                    Manage
                  </Button>
                </div>

                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <p className="text-sm font-medium">Tenants</p>
                    <p className="text-xs text-muted-foreground">
                      Follow tenant news, credit updates, and lease activity
                    </p>
                  </div>
                  <Button variant="outline" size="sm">
                    Manage
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
