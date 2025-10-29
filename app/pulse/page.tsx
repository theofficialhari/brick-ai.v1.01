"use client"

import type React from "react"
import { useState } from "react"
import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { Card } from "@/components/ui/card"
import { IconHeart, IconDots, IconCloudRain, IconChevronDown } from "@tabler/icons-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function PulsePage() {
  const [selectedAssetClass, setSelectedAssetClass] = useState<string | null>(null)
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null)

  const assetClasses = [
    "Multifamily",
    "Office",
    "Logistics",
    "Retail",
    "Hotel",
    "Data Centre",
    "Industrial",
    "Mixed-Use",
  ]
  const regions = ["Asia Pacific", "Americas", "Europe", "Middle East"]

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
            {/* Top Navigation Bar */}
            <div className="border-b bg-background px-6 py-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-4">
                    <button className="rounded-full bg-primary px-4 py-1.5 text-sm font-medium text-primary-foreground">
                      For You
                    </button>
                    <button className="rounded-full px-4 py-1.5 text-sm font-medium text-muted-foreground hover:bg-muted">
                      Top
                    </button>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <button className="rounded-full px-4 py-1.5 text-sm font-medium text-muted-foreground hover:bg-muted flex items-center gap-1">
                          Topics <IconChevronDown className="size-4" />
                        </button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="start">
                        {regions.map((region) => (
                          <DropdownMenuItem
                            key={region}
                            onClick={() => setSelectedRegion(region)}
                            className={selectedRegion === region ? "bg-muted" : ""}
                          >
                            {region}
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <IconCloudRain className="size-4" />
                  <span className="font-medium">32°F</span>
                  <span className="text-muted-foreground">York Hill Estate, Singapore</span>
                </div>
              </div>
            </div>

            <div className="flex gap-6 p-6">
              {/* Main Content Area (70%) */}
              <div className="flex-[7] space-y-6">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-muted-foreground">Asset Class:</span>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button className="rounded-md border px-3 py-1.5 text-sm font-medium hover:bg-muted flex items-center gap-1">
                        {selectedAssetClass || "All Classes"} <IconChevronDown className="size-4" />
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start">
                      <DropdownMenuItem onClick={() => setSelectedAssetClass(null)}>All Classes</DropdownMenuItem>
                      {assetClasses.map((assetClass) => (
                        <DropdownMenuItem
                          key={assetClass}
                          onClick={() => setSelectedAssetClass(assetClass)}
                          className={selectedAssetClass === assetClass ? "bg-muted" : ""}
                        >
                          {assetClass}
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>

                {/* Hero Article Card */}
                <Card className="overflow-hidden p-6">
                  <div className="flex gap-6">
                    <div className="flex-1 space-y-3">
                      <h2 className="font-serif text-3xl font-bold leading-tight">
                        Musk calls Bitcoin 'unfakeable' energy-backed alternative to fiat currency
                      </h2>
                      <p className="text-sm text-muted-foreground">Published 15 hours ago</p>
                      <p className="text-muted-foreground leading-relaxed">
                        Tesla CEO Elon Musk has described Bitcoin as an "unfakeable" alternative to traditional fiat
                        currencies, emphasizing its energy-backed nature and decentralized structure...
                      </p>
                      <div className="flex items-center justify-between pt-4">
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-muted-foreground">41 sources</span>
                          <div className="flex -space-x-2">
                            {[1, 2, 3, 4].map((i) => (
                              <div key={i} className="size-6 rounded-full border-2 border-background bg-muted" />
                            ))}
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <button className="rounded-full p-2 hover:bg-muted">
                            <IconHeart className="size-5" />
                          </button>
                          <button className="rounded-full p-2 hover:bg-muted">
                            <IconDots className="size-5" />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="w-[400px] shrink-0">
                      <div className="aspect-video w-full rounded-lg bg-muted" />
                    </div>
                  </div>
                </Card>

                {/* Secondary Grid */}
                <div className="grid grid-cols-3 gap-4">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <Card key={i} className="overflow-hidden">
                      <div className="aspect-video w-full bg-muted" />
                      <div className="p-4">
                        <h3 className="font-semibold leading-tight">
                          Commercial Real Estate Market Shows Signs of Recovery
                        </h3>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Right Sidebar (30%) */}
              <div className="flex-[3] space-y-6">
                {/* Weather Widget */}
                <Card className="p-4">
                  <h3 className="mb-4 font-semibold">5-Day Forecast</h3>
                  <div className="grid grid-cols-5 gap-2">
                    {["Mon", "Tue", "Wed", "Thu", "Fri"].map((day) => (
                      <div key={day} className="text-center">
                        <p className="text-xs text-muted-foreground">{day}</p>
                        <IconCloudRain className="mx-auto my-2 size-6" />
                        <p className="text-sm font-medium">32°</p>
                      </div>
                    ))}
                  </div>
                </Card>

                {/* Market Outlook */}
                <Card className="p-4">
                  <h3 className="mb-4 font-semibold">Market Outlook</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { name: "S&P Future", ticker: "ES", change: "+1.2%", value: "5,234" },
                      { name: "NASDAQ", ticker: "NQ", change: "+0.8%", value: "18,456" },
                      { name: "Bitcoin", ticker: "BTC", change: "-2.3%", value: "43,210" },
                      { name: "VIX", ticker: "VIX", change: "-5.1%", value: "14.2" },
                    ].map((index) => (
                      <div key={index.ticker} className="rounded-lg border p-3">
                        <p className="text-xs text-muted-foreground">{index.name}</p>
                        <p className="text-xs font-medium text-muted-foreground">{index.ticker}</p>
                        <p
                          className={`mt-1 text-sm font-semibold ${
                            index.change.startsWith("+") ? "text-green-600" : "text-red-600"
                          }`}
                        >
                          {index.change}
                        </p>
                        <p className="text-lg font-bold">{index.value}</p>
                        <div className="mt-2 h-8 w-full rounded bg-muted" />
                      </div>
                    ))}
                  </div>
                </Card>

                {/* Trending Companies */}
                <Card className="p-4">
                  <h3 className="mb-4 font-semibold">Trending Companies</h3>
                  <div className="space-y-3">
                    {[
                      { name: "Apple Inc.", ticker: "AAPL", price: "$182.45", change: "+2.1%" },
                      { name: "Microsoft Corp.", ticker: "MSFT", price: "$378.91", change: "+1.5%" },
                      { name: "Tesla Inc.", ticker: "TSLA", price: "$248.23", change: "-0.8%" },
                    ].map((company) => (
                      <div key={company.ticker} className="flex items-center gap-3">
                        <div className="size-10 shrink-0 rounded-lg bg-muted" />
                        <div className="flex-1">
                          <p className="text-sm font-medium">{company.name}</p>
                          <p className="text-xs text-muted-foreground">{company.ticker}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium">{company.price}</p>
                          <p
                            className={`text-xs ${company.change.startsWith("+") ? "text-green-600" : "text-red-600"}`}
                          >
                            {company.change}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
