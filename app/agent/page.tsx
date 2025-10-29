"use client"

import Link from "next/link"
import { useEffect } from "react"
import {
  IconArrowRight,
  IconBolt,
  IconChartBar,
  IconFileText,
  IconPresentation,
  IconRobot,
} from "@tabler/icons-react"

import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useActivePage } from "@/lib/active-page-context"

const agentModules = [
  {
    title: "Document AI",
    description: "Extract, summarise, and benchmark documents with Brick's contextual reasoning engine.",
    icon: IconFileText,
    href: "/agent/document-ai",
    badge: "In workspace",
  },
  {
    title: "Underwriting AI",
    description: "Generate dynamic cash flows, risk flags, and investor-ready memos in minutes.",
    icon: IconChartBar,
    href: "/agent/underwriting-ai",
    badge: "Beta",
  },
  {
    title: "Powerpoint AI",
    description: "Translate insights into polished investment decks that stay linked to live data.",
    icon: IconPresentation,
    href: "/agent/powerpoint-ai",
    badge: "New",
  },
]

const automations = [
  {
    title: "Recurring insights",
    description: "Schedule weekly or monthly digests that synthesise your portfolio activity and market moves.",
  },
  {
    title: "Deal room copilots",
    description: "Orchestrate due diligence tasks, reference Vault knowledge, and assign follow-ups automatically.",
  },
  {
    title: "Portfolio monitors",
    description: "Track leasing, risk, and ESG milestones in real time with alerts routed to the right teams.",
  },
]

export default function AgentLandingPage() {
  const { setActivePage } = useActivePage()

  useEffect(() => {
    setActivePage("Agent")
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
          <div className="flex flex-1 flex-col gap-6 p-6">
            <Card className="relative overflow-hidden rounded-3xl border border-muted-foreground/10 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 p-10 text-white shadow-lg">
              <div className="pointer-events-none absolute -right-32 top-1/2 hidden h-64 w-64 -translate-y-1/2 rounded-full bg-emerald-400/30 blur-3xl lg:block" />
              <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                <div className="space-y-4 lg:max-w-2xl">
                  <Badge className="w-fit rounded-full bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-wide text-white/80">
                    Workspace AI
                  </Badge>
                  <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                    Meet Brick Agent — your commercial real estate copilot
                  </h1>
                  <p className="text-sm text-white/75 sm:text-base">
                    Compose deep-dive analyses, prepare investor-ready materials, and automate underwriting workflows with a system trained on trusted market data and your own Vault.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Button size="sm" className="rounded-full bg-white text-slate-900 hover:bg-white/90">
                      Launch workspace
                    </Button>
                    <Button size="sm" variant="outline" className="gap-2 rounded-full border-white/30 text-white hover:bg-white/10">
                      <IconArrowRight className="size-4" />
                      See release notes
                    </Button>
                  </div>
                </div>
                <div className="flex h-full min-h-[240px] w-full max-w-sm items-center justify-center rounded-2xl border border-white/20 bg-white/5 p-8 backdrop-blur">
                  <div className="space-y-3 text-sm text-white/80">
                    <div className="flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-100">
                      <IconRobot className="size-4" />
                      Context aware
                    </div>
                    <p>
                      Auto-synthesise insights across Vault files, market feeds, and analyst annotations without leaving the chat interface.
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <div className="grid gap-5 lg:grid-cols-3">
              {agentModules.map((module) => (
                <Card
                  key={module.title}
                  className="flex flex-col justify-between rounded-2xl border border-muted-foreground/10 bg-muted/40 p-6 shadow-sm"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex size-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <module.icon className="size-5" />
                      </div>
                      <Badge variant="secondary" className="rounded-full px-3 py-1 text-[11px]">
                        {module.badge}
                      </Badge>
                    </div>
                    <div className="space-y-2">
                      <h2 className="text-lg font-semibold">{module.title}</h2>
                      <p className="text-sm text-muted-foreground">{module.description}</p>
                    </div>
                  </div>
                  <Button asChild variant="ghost" className="mt-6 justify-start gap-2 rounded-full">
                    <Link href={module.href}>
                      Open module
                      <IconArrowRight className="size-4" />
                    </Link>
                  </Button>
                </Card>
              ))}
            </div>

            <Card className="rounded-3xl border border-muted-foreground/10 bg-muted/30 p-8">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                <div className="space-y-3 lg:max-w-3xl">
                  <h2 className="text-2xl font-semibold tracking-tight">Automation recipes</h2>
                  <p className="text-sm text-muted-foreground">
                    Combine Agent modules with Workflows to create end-to-end processes that push insights to the right channels.
                  </p>
                </div>
                <Button variant="outline" className="gap-2 rounded-full">
                  Browse workflow gallery
                  <IconArrowRight className="size-4" />
                </Button>
              </div>
              <div className="mt-6 grid gap-4 md:grid-cols-3">
                {automations.map((automation) => (
                  <Card key={automation.title} className="rounded-2xl border border-muted-foreground/10 bg-background/80 p-5 shadow-none">
                    <div className="space-y-3">
                      <div className="flex size-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <IconBolt className="size-5" />
                      </div>
                      <div className="space-y-1">
                        <h3 className="text-base font-semibold">{automation.title}</h3>
                        <p className="text-sm text-muted-foreground">{automation.description}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
