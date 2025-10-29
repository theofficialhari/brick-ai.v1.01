"use client"

import type React from "react"
import { useState } from "react"
import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { Card } from "@/components/ui/card"
import { useActivePage } from "@/lib/active-page-context"
import { useEffect } from "react"

export default function NotificationsPage() {
  const { setActivePage } = useActivePage()
  const [deepResearch, setDeepResearch] = useState(true)
  const [assetClassDigest, setAssetClassDigest] = useState(false)
  const [marketDigest, setMarketDigest] = useState(false)

  useEffect(() => {
    setActivePage("Notifications")
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
              <h1 className="text-3xl font-bold">Email Notifications</h1>
            </div>

            <Card className="p-6">
              <div className="space-y-4">
                {/* Deep Research */}
                <div className="flex items-start justify-between p-4 border rounded-lg">
                  <div>
                    <p className="text-sm font-medium">Deep Research</p>
                    <p className="text-xs text-muted-foreground">Updates when the research is complete</p>
                  </div>
                  <button
                    onClick={() => setDeepResearch(!deepResearch)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      deepResearch ? "bg-primary" : "bg-muted"
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        deepResearch ? "translate-x-6" : "translate-x-1"
                      }`}
                    />
                  </button>
                </div>

                {/* Asset Class Digest */}
                <div className="flex items-start justify-between p-4 border rounded-lg">
                  <div>
                    <p className="text-sm font-medium">Asset Class Digest</p>
                    <p className="text-xs text-muted-foreground">
                      Daily summary of news and market updates for your selected asset classes
                    </p>
                  </div>
                  <button
                    onClick={() => setAssetClassDigest(!assetClassDigest)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      assetClassDigest ? "bg-primary" : "bg-muted"
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        assetClassDigest ? "translate-x-6" : "translate-x-1"
                      }`}
                    />
                  </button>
                </div>

                {/* Market Digest */}
                <div className="flex items-start justify-between p-4 border rounded-lg">
                  <div>
                    <p className="text-sm font-medium">Market Digest</p>
                    <p className="text-xs text-muted-foreground">
                      Weekly roundup of market data, transactions, and trends in your tracked locations
                    </p>
                  </div>
                  <button
                    onClick={() => setMarketDigest(!marketDigest)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      marketDigest ? "bg-primary" : "bg-muted"
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        marketDigest ? "translate-x-6" : "translate-x-1"
                      }`}
                    />
                  </button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
