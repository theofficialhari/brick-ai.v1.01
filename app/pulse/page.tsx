"use client"

import type React from "react"
import { useEffect, useMemo, useState } from "react"
import Link from "next/link"
import {
  IconAdjustments,
  IconArrowUpRight,
  IconBookmark,
  IconBuildingCommunity,
  IconChevronDown,
  IconCloudRain,
  IconFlame,
  IconSparkles,
  IconTrendingUp,
  IconWorld,
} from "@tabler/icons-react"

import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { useActivePage } from "@/lib/active-page-context"

const heroStory = {
  category: "Daily Briefing",
  title: "Energy-backed demand keeps capital flowing into APAC logistics",
  summary:
    "Sovereign funds rotate out of US offices into Singapore and Tokyo sheds while tenants chase sustainable space and automation upgrades.",
  updated: "15 minutes ago",
  interest: "+62% week over week",
  tags: ["Logistics", "Capital Markets", "Sustainability"],
}

const highlightStories = [
  {
    tag: "Capital Markets",
    title: "Singapore REITs rally as retail footfall eclipses 2019 baselines",
    summary: "Downtown malls book double-digit leasing spreads while suburban assets show resilient NOI growth across Q2 earnings.",
    signal: "+18% investor searches this week",
    time: "2 hours ago",
  },
  {
    tag: "Hospitality",
    title: "Tokyo business hotels convert excess inventory into mid-stay flex",
    summary: "Operators reconfigure meeting floors into turnkey offices, pushing ADRs higher even as tourism normalises.",
    signal: "Most saved in Hospitality Briefing",
    time: "4 hours ago",
  },
  {
    tag: "Data Centres",
    title: "Jakarta hyperscale pipeline tightens amid power procurement crunch",
    summary: "Grid upgrades lag demand, nudging operators toward private microgrids and cross-border joint ventures.",
    signal: "High conviction from 27 analysts",
    time: "6 hours ago",
  },
]

const quickQuestions = [
  {
    question: "How exposed are APAC lenders to US office repricing this quarter?",
    context: "Credit Risk",
    growth: "+142%",
  },
  {
    question: "What green lease incentives are working in Singapore business parks?",
    context: "Leasing",
    growth: "+78%",
  },
  {
    question: "Which logistics funds are still deploying capital above USD 500m?",
    context: "Capital Raising",
    growth: "+55%",
  },
  {
    question: "How are data centre operators mitigating power price spikes in Jakarta?",
    context: "Operations",
    growth: "+37%",
  },
]

const marketMovers = [
  { name: "FTSE ST REIT", value: "777.12", change: "+1.4%" },
  { name: "MSCI APAC Real Estate", value: "298.70", change: "+0.9%" },
  { name: "10Y SG Govt", value: "3.08%", change: "-6bp" },
  { name: "WTI Crude", value: "$78.12", change: "-1.1%" },
]

const weatherForecast = [
  { day: "Mon", temp: "32° / 27°", condition: "Showers" },
  { day: "Tue", temp: "31° / 26°", condition: "Storms" },
  { day: "Wed", temp: "33° / 27°", condition: "Humid" },
  { day: "Thu", temp: "32° / 26°", condition: "Showers" },
  { day: "Fri", temp: "31° / 26°", condition: "Overcast" },
]

const trendingTopics = [
  { title: "Green lease clauses", change: "+64%", sentiment: "Bullish" },
  { title: "Hospitality conversions", change: "+22%", sentiment: "Rising" },
  { title: "Alternative data underwriting", change: "+38%", sentiment: "Neutral" },
  { title: "Data centre zoning", change: "+17%", sentiment: "Watched" },
]

const collections = [
  {
    title: "Capital deployment playbook",
    description: "Macro briefs, liquidity screens, and investor memos for deployment committees.",
    updated: "Updated 3 days ago",
  },
  {
    title: "Singapore deal comps",
    description: "57 stabilised asset trades across office, retail, and logistics since 2023.",
    updated: "Refreshed yesterday",
  },
]

const expertNotes = [
  {
    analyst: "Avery Tan",
    focus: "Logistics & Data Centres",
    summary: "Expect blended cap rates to compress another 20bps as Japanese insurers re-enter shed acquisitions.",
    signal: "Saved 214 times",
  },
  {
    analyst: "Miguel Herrera",
    focus: "Hospitality",
    summary: "Watch business hotels pivot to hybrid workspace products to defend ADR as new supply opens in Ginza.",
    signal: "Followed by 87 teams",
  },
]

export default function PulsePage() {
  const { setActivePage } = useActivePage()
  const [selectedAssetClasses, setSelectedAssetClasses] = useState<string[]>([])
  const [selectedTopics, setSelectedTopics] = useState<string[]>([])
  const [assetPopoverOpen, setAssetPopoverOpen] = useState(false)
  const [topicsPopoverOpen, setTopicsPopoverOpen] = useState(false)
  const [activeFeed, setActiveFeed] = useState("for-you")

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

  const topicFilters = useMemo(
    () => [
      "Capital Markets",
      "Sustainability",
      "Operations",
      "Hospitality",
      "Proptech",
      "Financing",
      "Asia Pacific",
      "North America",
      "Europe",
    ],
    [],
  )

  const toggleAssetClass = (value: string) => {
    setSelectedAssetClasses((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value],
    )
  }

  const toggleTopic = (value: string) => {
    setSelectedTopics((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value],
    )
  }

  const activeAssetLabel = selectedAssetClasses.length
    ? `${selectedAssetClasses.length} selected`
    : "All asset classes"

  const activeTopicLabel = selectedTopics.length ? `${selectedTopics.length} topics` : "All topics"

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
          <div className="@container/main flex flex-1 flex-col bg-gradient-to-b from-background via-background to-muted/30">
            <div className="flex flex-col gap-6 p-6">
              <Tabs value={activeFeed} onValueChange={setActiveFeed} className="w-full">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <TabsList className="h-auto rounded-full bg-muted/80 p-1 text-sm shadow-sm">
                    <TabsTrigger
                      value="for-you"
                      className="rounded-full px-4 py-2 data-[state=active]:bg-background data-[state=active]:text-foreground"
                    >
                      For you
                    </TabsTrigger>
                    <TabsTrigger
                      value="markets"
                      className="rounded-full px-4 py-2 data-[state=active]:bg-background data-[state=active]:text-foreground"
                    >
                      Markets
                    </TabsTrigger>
                    <TabsTrigger
                      value="insights"
                      className="rounded-full px-4 py-2 data-[state=active]:bg-background data-[state=active]:text-foreground"
                    >
                      Insights
                    </TabsTrigger>
                    <TabsTrigger
                      value="saved"
                      className="rounded-full px-4 py-2 data-[state=active]:bg-background data-[state=active]:text-foreground"
                    >
                      Saved
                    </TabsTrigger>
                  </TabsList>

                  <div className="flex flex-wrap items-center gap-2 text-sm">
                    <Popover open={assetPopoverOpen} onOpenChange={setAssetPopoverOpen}>
                      <PopoverTrigger asChild>
                        <Button variant="outline" size="sm" className="gap-2 rounded-full border-dashed">
                          <IconBuildingCommunity className="size-4" />
                          {activeAssetLabel}
                          <IconChevronDown className="size-4" />
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-64 rounded-lg">
                        <div className="space-y-3">
                          <div>
                            <p className="text-sm font-semibold">Asset focus</p>
                            <p className="text-xs text-muted-foreground">
                              Tailor the feed by narrowing down your preferred asset classes.
                            </p>
                          </div>
                          <div className="grid grid-cols-1 gap-2">
                            {assetClasses.map((assetClass) => (
                              <label key={assetClass} className="flex items-center gap-2 rounded-md border px-3 py-2 text-sm">
                                <Checkbox
                                  checked={selectedAssetClasses.includes(assetClass)}
                                  onCheckedChange={() => toggleAssetClass(assetClass)}
                                />
                                <span>{assetClass}</span>
                              </label>
                            ))}
                          </div>
                          <Button className="w-full" onClick={() => setAssetPopoverOpen(false)}>
                            Apply filters
                          </Button>
                        </div>
                      </PopoverContent>
                    </Popover>

                    <Popover open={topicsPopoverOpen} onOpenChange={setTopicsPopoverOpen}>
                      <PopoverTrigger asChild>
                        <Button variant="outline" size="sm" className="gap-2 rounded-full border-dashed">
                          <IconWorld className="size-4" />
                          {activeTopicLabel}
                          <IconChevronDown className="size-4" />
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-72 rounded-lg">
                        <div className="space-y-3">
                          <div>
                            <p className="text-sm font-semibold">Topics & regions</p>
                            <p className="text-xs text-muted-foreground">
                              Combine themes, strategies, or geographies you want surfaced first.
                            </p>
                          </div>
                          <div className="grid grid-cols-2 gap-2">
                            {topicFilters.map((topic) => (
                              <label key={topic} className="flex items-center gap-2 rounded-md border px-3 py-2 text-sm">
                                <Checkbox checked={selectedTopics.includes(topic)} onCheckedChange={() => toggleTopic(topic)} />
                                <span>{topic}</span>
                              </label>
                            ))}
                          </div>
                          <Button className="w-full" onClick={() => setTopicsPopoverOpen(false)}>
                            Apply filters
                          </Button>
                        </div>
                      </PopoverContent>
                    </Popover>

                    <Button size="sm" variant="ghost" className="gap-2 rounded-full">
                      <IconAdjustments className="size-4" />
                      Feed settings
                    </Button>
                  </div>
                </div>
              </Tabs>

              <div className="grid gap-6 xl:grid-cols-[minmax(0,2.25fr)_minmax(0,1fr)]">
                <div className="space-y-6">
                  <Card className="relative overflow-hidden border-none bg-[radial-gradient(circle_at_top,_#0f172a,_#030712)] p-8 text-white shadow-xl">
                    <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 translate-x-16 rounded-l-full bg-[linear-gradient(135deg,rgba(56,189,248,0.35),rgba(99,102,241,0.2))] blur-3xl lg:block" />
                    <div className="relative flex flex-col gap-10 lg:flex-row lg:items-start">
                      <div className="space-y-6 lg:max-w-xl">
                        <Badge className="w-fit rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur">
                          {heroStory.category}
                        </Badge>
                        <div className="space-y-3">
                          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                            {heroStory.title}
                          </h2>
                          <p className="text-sm text-white/70 sm:text-base">{heroStory.summary}</p>
                        </div>
                        <div className="flex flex-wrap items-center gap-2 text-xs text-white/60">
                          {heroStory.tags.map((tag) => (
                            <span key={tag} className="rounded-full border border-white/15 px-3 py-1">
                              {tag}
                            </span>
                          ))}
                        </div>
                        <div className="flex flex-wrap items-center gap-4 text-xs">
                          <div className="flex items-center gap-2 text-white/70">
                            <IconSparkles className="size-4" /> Trending {heroStory.interest}
                          </div>
                          <div className="flex items-center gap-2 text-white/70">
                            <IconFlame className="size-4" /> Updated {heroStory.updated}
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-3">
                          <Button size="sm" className="rounded-full bg-white text-slate-900 hover:bg-white/90">
                            Read full briefing
                          </Button>
                          <Button size="sm" variant="outline" className="gap-2 rounded-full border-white/30 text-white hover:bg-white/10">
                            <IconBookmark className="size-4" /> Save to workspace
                          </Button>
                        </div>
                      </div>
                      <div className="w-full max-w-sm space-y-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                        <p className="text-xs uppercase tracking-wide text-white/60">Key story signals</p>
                        <div className="space-y-4 text-sm text-white/80">
                          <div className="flex items-start justify-between gap-4">
                            <span>Occupier demand index</span>
                            <span className="rounded-full bg-emerald-500/10 px-2 py-1 text-xs font-semibold text-emerald-200">
                              Rising 12%
                            </span>
                          </div>
                          <div className="flex items-start justify-between gap-4">
                            <span>Capital deployed YTD</span>
                            <span className="rounded-full bg-sky-500/10 px-2 py-1 text-xs font-semibold text-sky-200">
                              USD 4.2B
                            </span>
                          </div>
                          <Separator className="border-white/10" />
                          <div className="space-y-2 text-xs text-white/60">
                            <p>Top sources synthesised</p>
                            <div className="flex flex-wrap gap-2">
                              {["MSCI", "CBRE", "EDB", "The Economist"].map((source) => (
                                <span key={source} className="rounded-full border border-white/15 px-3 py-1">
                                  {source}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>

                  <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                    {highlightStories.map((story) => (
                      <Card key={story.title} className="flex flex-col justify-between rounded-2xl border border-muted-foreground/10 p-5 shadow-sm">
                        <div className="space-y-3">
                          <Badge variant="secondary" className="w-fit rounded-full px-3 py-1 text-xs">
                            {story.tag}
                          </Badge>
                          <Link href="#" className="text-base font-semibold leading-tight hover:text-primary">
                            {story.title}
                          </Link>
                          <p className="text-sm text-muted-foreground">{story.summary}</p>
                        </div>
                        <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
                          <span>{story.signal}</span>
                          <span>{story.time}</span>
                        </div>
                      </Card>
                    ))}
                  </div>

                  <Card className="rounded-2xl border border-muted-foreground/10 p-6">
                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <div>
                        <h3 className="text-lg font-semibold">Quick questions from teams like yours</h3>
                        <p className="text-sm text-muted-foreground">
                          Tap a question to open a prompt with Brick or save it to your playbook.
                        </p>
                      </div>
                      <Button variant="outline" className="gap-2 rounded-full">
                        Browse prompt library
                        <IconArrowUpRight className="size-4" />
                      </Button>
                    </div>
                    <div className="mt-6 grid gap-3 md:grid-cols-2">
                      {quickQuestions.map((item) => (
                        <Button
                          key={item.question}
                          variant="secondary"
                          className="justify-start gap-3 rounded-xl border border-muted-foreground/20 bg-muted/40 px-4 py-5 text-left text-sm font-medium"
                        >
                          <div className="flex-1 space-y-1 text-left">
                            <p className="text-sm font-semibold leading-snug">{item.question}</p>
                            <p className="text-xs text-muted-foreground">{item.context}</p>
                          </div>
                          <span className="rounded-full bg-emerald-100 px-3 py-1 text-[11px] font-semibold text-emerald-700">
                            {item.growth}
                          </span>
                        </Button>
                      ))}
                    </div>
                  </Card>

                  <Card className="rounded-2xl border border-muted-foreground/10 p-6">
                    <div className="flex items-center justify-between gap-2">
                      <div>
                        <h3 className="text-lg font-semibold">Collections from your workspace</h3>
                        <p className="text-sm text-muted-foreground">
                          Curated packets and living documents that the team revisits often.
                        </p>
                      </div>
                      <Button variant="ghost" className="gap-2 rounded-full">
                        Manage collections
                        <IconArrowUpRight className="size-4" />
                      </Button>
                    </div>
                    <div className="mt-5 grid gap-4 md:grid-cols-2">
                      {collections.map((collection) => (
                        <Card key={collection.title} className="rounded-xl border border-muted-foreground/20 bg-muted/30 p-5 shadow-none">
                          <div className="space-y-3">
                            <h4 className="text-base font-semibold">{collection.title}</h4>
                            <p className="text-sm text-muted-foreground">{collection.description}</p>
                            <div className="flex items-center gap-2 text-xs text-muted-foreground">
                              <IconBookmark className="size-4" />
                              {collection.updated}
                            </div>
                          </div>
                        </Card>
                      ))}
                    </div>
                  </Card>
                </div>

                <div className="space-y-6">
                  <Card className="rounded-2xl border border-muted-foreground/10 p-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold">Live market radar</h3>
                      <Button variant="ghost" size="sm" className="gap-2 rounded-full">
                        View chart
                        <IconArrowUpRight className="size-4" />
                      </Button>
                    </div>
                    <div className="mt-4 space-y-3">
                      {marketMovers.map((market) => (
                        <div key={market.name} className="flex items-center justify-between rounded-xl border border-muted-foreground/10 bg-muted/40 px-4 py-3 text-sm">
                          <div>
                            <p className="font-medium">{market.name}</p>
                            <p className="text-xs text-muted-foreground">Session close</p>
                          </div>
                          <div className="text-right">
                            <p className="text-sm font-semibold">{market.value}</p>
                            <p className={`text-xs font-semibold ${market.change.startsWith("+") ? "text-emerald-600" : "text-rose-600"}`}>
                              {market.change}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </Card>

                  <Card className="rounded-2xl border border-muted-foreground/10 p-6">
                    <h3 className="text-lg font-semibold">Weather & site conditions</h3>
                    <p className="text-sm text-muted-foreground">York Hill Estate, Singapore</p>
                    <div className="mt-5 grid grid-cols-5 gap-3 text-center">
                      {weatherForecast.map((day) => (
                        <div key={day.day} className="space-y-2 rounded-xl border border-muted-foreground/10 bg-muted/40 px-3 py-4">
                          <p className="text-xs font-medium text-muted-foreground">{day.day}</p>
                          <IconCloudRain className="mx-auto size-6 text-sky-500" />
                          <p className="text-xs text-muted-foreground">{day.condition}</p>
                          <p className="text-sm font-semibold">{day.temp}</p>
                        </div>
                      ))}
                    </div>
                  </Card>

                  <Card className="rounded-2xl border border-muted-foreground/10 p-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold">Trending topics</h3>
                      <Button variant="ghost" size="sm" className="gap-2 rounded-full">
                        See all
                        <IconArrowUpRight className="size-4" />
                      </Button>
                    </div>
                    <div className="mt-4 space-y-3">
                      {trendingTopics.map((topic) => (
                        <div key={topic.title} className="flex items-center justify-between rounded-xl border border-muted-foreground/10 bg-muted/30 px-4 py-3">
                          <div>
                            <p className="text-sm font-semibold">{topic.title}</p>
                            <p className="text-xs text-muted-foreground">Sentiment: {topic.sentiment}</p>
                          </div>
                          <span className="flex items-center gap-1 text-xs font-semibold text-emerald-600">
                            <IconTrendingUp className="size-4" />
                            {topic.change}
                          </span>
                        </div>
                      ))}
                    </div>
                  </Card>

                  <Card className="rounded-2xl border border-muted-foreground/10 p-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold">Expert notes</h3>
                      <Button variant="ghost" size="sm" className="gap-2 rounded-full">
                        View roster
                        <IconArrowUpRight className="size-4" />
                      </Button>
                    </div>
                    <div className="mt-5 space-y-4">
                      {expertNotes.map((expert) => (
                        <Card key={expert.analyst} className="rounded-xl border border-muted-foreground/20 bg-muted/30 p-4 shadow-none">
                          <div className="space-y-2">
                            <div className="flex items-center justify-between text-sm">
                              <div>
                                <p className="font-semibold">{expert.analyst}</p>
                                <p className="text-xs text-muted-foreground">{expert.focus}</p>
                              </div>
                              <span className="rounded-full bg-primary/10 px-3 py-1 text-[11px] font-semibold text-primary">
                                {expert.signal}
                              </span>
                            </div>
                            <p className="text-sm text-muted-foreground">{expert.summary}</p>
                            <Button variant="secondary" size="sm" className="gap-2 rounded-full">
                              Follow briefings
                              <IconArrowUpRight className="size-4" />
                            </Button>
                          </div>
                        </Card>
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
