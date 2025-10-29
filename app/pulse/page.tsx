"use client"

import type React from "react"
import { useEffect, useMemo, useState } from "react"
import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { Card } from "@/components/ui/card"
import { IconHeart, IconDots, IconCloudRain, IconChevronDown } from "@tabler/icons-react"
import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Checkbox } from "@/components/ui/checkbox"
import { useActivePage } from "@/lib/active-page-context"

export default function PulsePage() {
  const { setActivePage } = useActivePage()
  const [selectedAssetClasses, setSelectedAssetClasses] = useState<string[]>([])
  const [selectedMarkets, setSelectedMarkets] = useState<string[]>([])
  const [assetPopoverOpen, setAssetPopoverOpen] = useState(false)
  const [topicsPopoverOpen, setTopicsPopoverOpen] = useState(false)

  useEffect(() => {
    setActivePage("Pulse")
  }, [setActivePage])

  const assetClasses = useMemo(
    () => [
      "Multifamily",
      "Office",
      "Logistics",
      "Retail",
      "Hotel",
      "Data Centre",
      "Industrial",
      "Mixed-Use",
    ],
    [],
  )

  const geographicMarkets = useMemo(
    () => ({
      "Asia Pacific": ["Singapore", "Sydney", "Tokyo", "Hong Kong"],
      Americas: ["New York", "San Francisco", "Toronto", "São Paulo"],
      Europe: ["London", "Paris", "Berlin", "Amsterdam"],
      "Middle East": ["Dubai", "Riyadh", "Doha", "Abu Dhabi"],
    }),
    [],
  )

  const toggleAssetClass = (value: string) => {
    setSelectedAssetClasses((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value],
    )
  }

  const toggleMarket = (value: string) => {
    setSelectedMarkets((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value],
    )
  }

  const activeAssetLabel = selectedAssetClasses.length
    ? `${selectedAssetClasses.length} selected`
    : "All asset classes"

  const activeMarketLabel = selectedMarkets.length
    ? `${selectedMarkets.length} markets`
    : "All topics"

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
                    <Popover open={assetPopoverOpen} onOpenChange={setAssetPopoverOpen}>
                      <PopoverTrigger asChild>
                        <Button
                          variant="default"
                          className="rounded-full px-4 py-1.5 text-sm font-medium"
                        >
                          For You
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-64 rounded-lg">
                        <p className="text-sm font-semibold">Asset Class Filter</p>
                        <p className="text-xs text-muted-foreground">
                          Choose the asset classes that matter most to you.
                        </p>
                        <div className="mt-4 space-y-2">
                          {assetClasses.map((assetClass) => (
                            <label key={assetClass} className="flex items-center gap-2 text-sm">
                              <Checkbox
                                checked={selectedAssetClasses.includes(assetClass)}
                                onCheckedChange={() => toggleAssetClass(assetClass)}
                              />
                              <span>{assetClass}</span>
                            </label>
                          ))}
                        </div>
                        <Button
                          className="mt-4 w-full"
                          onClick={() => setAssetPopoverOpen(false)}
                        >
                          Apply filters
                        </Button>
                      </PopoverContent>
                    </Popover>
                    <button className="rounded-full px-4 py-1.5 text-sm font-medium text-muted-foreground hover:bg-muted">
                      Top
                    </button>
                    <Popover open={topicsPopoverOpen} onOpenChange={setTopicsPopoverOpen}>
                      <PopoverTrigger asChild>
                        <button className="flex items-center gap-1 rounded-full px-4 py-1.5 text-sm font-medium text-muted-foreground hover:bg-muted">
                          Topics <IconChevronDown className="size-4" />
                        </button>
                      </PopoverTrigger>
                      <PopoverContent className="w-72 rounded-lg">
                        <p className="text-sm font-semibold">Geographic Market Filter</p>
                        <p className="text-xs text-muted-foreground">
                          Select the markets you want to track.
                        </p>
                        <div className="mt-4 space-y-4">
                          {Object.entries(geographicMarkets).map(([region, markets]) => (
                            <div key={region} className="space-y-2">
                              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                                {region}
                              </p>
                              <div className="grid grid-cols-2 gap-2">
                                {markets.map((market) => (
                                  <label key={market} className="flex items-center gap-2 rounded-md border px-2 py-1.5 text-xs">
                                    <Checkbox
                                      checked={selectedMarkets.includes(market)}
                                      onCheckedChange={() => toggleMarket(market)}
                                    />
                                    <span>{market}</span>
                                  </label>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                        <Button className="mt-4 w-full" onClick={() => setTopicsPopoverOpen(false)}>
                          Apply filters
                        </Button>
                      </PopoverContent>
                    </Popover>
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
                <div className="flex flex-wrap items-center gap-3 text-sm">
                  <span className="font-medium text-muted-foreground">Asset Class:</span>
                  <span className="rounded-full bg-muted px-3 py-1 text-xs font-medium">{activeAssetLabel}</span>
                  <span className="font-medium text-muted-foreground">Topics:</span>
                  <span className="rounded-full bg-muted px-3 py-1 text-xs font-medium">{activeMarketLabel}</span>
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
