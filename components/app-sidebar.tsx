"use client"

import Link from "next/link"
import * as React from "react"
import {
  IconFileText,
  IconChartBar,
  IconPresentation,
  IconBuilding,
  IconLayoutGrid,
  IconSparkles,
  IconBolt,
  IconUsers,
  IconBook,
  IconSearch,
  IconShieldLock,
  IconUsersGroup,
  IconArchive,
  IconUsersPlus,
  IconMessageCircle2,
} from "@tabler/icons-react"

import { NavDocuments } from "@/components/nav-documents"
import { NavMain } from "@/components/nav-main"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
} from "@/components/ui/sidebar"
import { useActivePage } from "@/lib/active-page-context"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"

const data = {
  user: {
    name: "Rachel Liu",
    email: "rliu@brick.ai",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Pulse",
      url: "/pulse",
      icon: IconLayoutGrid,
    },
    {
      title: "Agent",
      url: "/agent",
      icon: IconSparkles,
      isActive: true,
      items: [
        {
          title: "Document AI",
          url: "/agent/document-ai",
          icon: IconFileText,
        },
        {
          title: "Underwriting AI",
          url: "/agent/underwriting-ai",
          icon: IconChartBar,
        },
        {
          title: "Powerpoint AI",
          url: "/agent/powerpoint-ai",
          icon: IconPresentation,
        },
      ],
    },
    {
      title: "Research",
      url: "/research",
      icon: IconSearch,
    },
    {
      title: "Workflows",
      url: "/workflows",
      icon: IconBolt,
    },
    {
      title: "Team",
      url: "#",
      icon: IconUsers,
      isDropdown: true,
    },
  ],
  vault: [
    { name: "Secured", url: "/vault/secured", icon: IconShieldLock },
    { name: "Collaboration", url: "/vault/collaboration", icon: IconUsersGroup },
    { name: "Archives", url: "/vault/archives", icon: IconArchive },
  ],
  more: [
    { title: "Brick Tutorial", url: "/more/tutorial", icon: IconBook },
    { title: "Documentation", url: "/more/documentation", icon: IconFileText },
  ],
  team: {
    groups: [
      { name: "Asset Management Team", members: 12 },
      { name: "Acquisitions Team", members: 9 },
      { name: "Legal & Compliance", members: 7 },
      { name: "Finance Team", members: 6 },
    ],
    directMessages: [
      { name: "Sarah Johnson", status: "Online", color: "bg-emerald-500" },
      { name: "Michael Chen", status: "In a meeting", color: "bg-amber-500" },
      { name: "Emma Davis", status: "Offline", color: "bg-muted" },
      { name: "John Lee", status: "Online", color: "bg-emerald-500" },
    ],
  },
}

function MoreNavSection({
  items,
}: {
  items: { title: string; url: string; icon: React.ComponentType<{ className?: string }> }[]
}) {
  const { activePage, setActivePage } = useActivePage()

  return (
    <SidebarGroup className="group-data-[collapsible=icon]:hidden">
      <SidebarGroupLabel>MORE</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => (
          <SidebarMenuItem key={item.title}>
            <SidebarMenuButton
              asChild
              isActive={activePage === item.title}
              className="[&[data-active=true]]:border-l-2 [&[data-active=true]]:border-l-primary [&[data-active=true]]:bg-primary/10 [&[data-active=true]]:font-semibold [&[data-active=true]]:text-primary"
              onClick={() => setActivePage(item.title)}
            >
              <Link href={item.url} className="flex items-center gap-2">
                <item.icon />
                <span>{item.title}</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  )
}

function TeamMenu({ open, onOpenChange }: { open: boolean; onOpenChange: (value: boolean) => void }) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="right" className="w-[280px] rounded-l-xl border-0 p-6">
        <SheetHeader className="text-left">
          <SheetTitle className="text-lg font-semibold">Team</SheetTitle>
        </SheetHeader>
        <div className="mt-4 flex h-full flex-col gap-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Groups</p>
            <div className="mt-3 space-y-3">
              {data.team.groups.map((group) => (
                <div key={group.name} className="rounded-lg border px-3 py-2">
                  <p className="text-sm font-medium">{group.name}</p>
                  <p className="text-xs text-muted-foreground">{group.members} members</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Direct Messages</p>
            <div className="mt-3 space-y-3">
              {data.team.directMessages.map((person) => (
                <div key={person.name} className="flex items-center justify-between rounded-lg border px-3 py-2">
                  <div>
                    <p className="text-sm font-medium">{person.name}</p>
                    <p className="text-xs text-muted-foreground">{person.status}</p>
                  </div>
                  <span className={`size-2 rounded-full ${person.color}`} aria-hidden />
                </div>
              ))}
            </div>
          </div>
          <div className="mt-auto space-y-2">
            <Separator />
            <Button variant="outline" className="w-full justify-start gap-2">
              <IconUsersPlus className="size-4" />
              Create new group
            </Button>
            <Button variant="outline" className="w-full justify-start gap-2">
              <IconMessageCircle2 className="size-4" />
              Search people
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const [isTeamOpen, setIsTeamOpen] = React.useState(false)

  const handleDropdownSelect = React.useCallback((item: { title: string }) => {
    if (item.title === "Team") {
      setIsTeamOpen(true)
    }
  }, [])

  return (
    <>
      <Sidebar collapsible="icon" {...props}>
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild className="data-[slot=sidebar-menu-button]:!p-1.5">
                <Link href="/pulse" className="flex items-center gap-2">
                  <IconBuilding className="!size-5" />
                  <span className="text-base font-semibold">Brick</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>
        <SidebarContent>
          <NavMain items={data.navMain} onDropdownSelect={handleDropdownSelect} />
          <NavDocuments items={data.vault} />
          <MoreNavSection items={data.more} />
        </SidebarContent>
        <SidebarFooter>
          <NavUser user={data.user} />
        </SidebarFooter>
      </Sidebar>
      <TeamMenu open={isTeamOpen} onOpenChange={setIsTeamOpen} />
    </>
  )
}
