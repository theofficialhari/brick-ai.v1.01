"use client"

import { IconBell, IconHelpCircle, IconSearch, IconSparkles } from "@tabler/icons-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { useActivePage } from "@/lib/active-page-context"

export function SiteHeader() {
  const { activePage } = useActivePage()

  return (
    <header className="flex h-[--header-height] shrink-0 items-center border-b bg-background/90 transition-[width,height] ease-linear backdrop-blur supports-[backdrop-filter]:bg-background/70 group-has-data-[collapsible=icon]/sidebar-wrapper:h-[--header-height]">
      <div className="flex w-full items-center gap-3 px-4 lg:px-6">
        <SidebarTrigger className="mr-1" />
        <div className="flex min-w-0 flex-col">
          <span className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground/80">Discover</span>
          <h1 className="truncate text-lg font-semibold tracking-tight">{activePage}</h1>
        </div>
        <div className="ml-auto flex w-full flex-1 items-center gap-3 pl-2 md:w-auto md:flex-none md:pl-0">
          <div className="relative hidden flex-1 items-center md:flex">
            <IconSearch className="pointer-events-none absolute left-3 size-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search assets, people, or briefs"
              className="h-11 w-full rounded-full bg-muted/60 pl-10 text-sm"
            />
          </div>
          <Button variant="outline" size="sm" className="gap-2 rounded-full">
            <IconHelpCircle className="size-4" />
            Ask Brick
          </Button>
          <Button
            size="sm"
            className="hidden items-center gap-2 rounded-full bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white shadow-sm hover:from-slate-800 hover:via-slate-700 hover:to-slate-800 md:inline-flex"
          >
            <IconSparkles className="size-4" />
            New briefing
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full">
            <IconBell className="size-5" />
            <span className="sr-only">Notifications</span>
          </Button>
        </div>
      </div>
    </header>
  )
}
