"use client"

import { Button } from "@/components/ui/button"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { usePathname } from "next/navigation"

export function SiteHeader() {
  const pathname = usePathname()

  const getPageTitle = () => {
    if (pathname === "/pulse") return "Pulse"
    if (pathname === "/research") return "Research"
    if (pathname === "/workflows") return "Workflows"
    if (pathname === "/team") return "Team"
    if (pathname.startsWith("/agent")) {
      if (pathname.includes("documents")) return "Document AI"
      if (pathname.includes("underwriting")) return "Underwriting AI"
      if (pathname.includes("presentation")) return "Powerpoint AI"
      return "Agent"
    }
    if (pathname.startsWith("/vault")) {
      if (pathname.includes("secured")) return "Secured"
      if (pathname.includes("collaboration")) return "Collaboration"
      if (pathname.includes("archives")) return "Archives"
      return "Vault"
    }
    if (pathname.startsWith("/more")) {
      if (pathname.includes("tutorial")) return "Brick Tutorial"
      if (pathname.includes("documentation")) return "Documentation"
      return "More"
    }
    return "Documents"
  }

  return (
    <header className="flex h-[--header-height] shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-[--header-height]">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <h1 className="text-base font-medium">{getPageTitle()}</h1>
        <div className="ml-auto flex items-center gap-2">
          <SidebarTrigger />
          <Button variant="ghost" asChild size="sm" className="hidden sm:flex">
            <a
              href="https://github.com/shadcn-ui/ui/tree/main/apps/v4/app/(examples)/dashboard"
              rel="noopener noreferrer"
              target="_blank"
              className="dark:text-foreground"
            >
              GitHub
            </a>
          </Button>
        </div>
      </div>
    </header>
  )
}
