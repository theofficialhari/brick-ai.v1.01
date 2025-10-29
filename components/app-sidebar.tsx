"use client"

import type * as React from "react"
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
  IconChevronRight,
  IconSearch,
  IconDatabase,
  IconFileAi,
  IconFileDescription,
  IconFolder,
} from "@tabler/icons-react"

import { NavDocuments } from "@/components/nav-documents"
import { NavMain } from "@/components/nav-main"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarGroup,
  SidebarGroupContent,
} from "@/components/ui/sidebar"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
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
      url: "/assistant",
      icon: IconSparkles,
      isActive: true,
      items: [
        {
          title: "Document AI",
          url: "/assistant/documents",
          icon: IconFileText,
        },
        {
          title: "Underwriting AI",
          url: "/assistant/underwriting",
          icon: IconChartBar,
        },
        {
          title: "Powerpoint AI",
          url: "/assistant/presentation",
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
      url: "/team",
      icon: IconUsers,
    },
  ],
  documents: [
    {
      name: "Files",
      url: "/vault/files",
      icon: IconFolder,
      items: [
        { name: "Secured", url: "/vault/secured", icon: IconFileDescription },
        { name: "Collaboration", url: "/vault/collaboration", icon: IconFileAi },
        { name: "Archives", url: "/vault/archives", icon: IconDatabase },
      ],
    },
    {
      name: "Brick Tutorial",
      url: "/tutorial",
      icon: IconBook,
    },
    {
      name: "Documentation",
      url: "/documentation",
      icon: IconFileText,
    },
  ],
  navSecondary: [],
}

function CustomNavSecondary({
  items,
  ...props
}: {
  items: {
    title: string
    url: string
    icon: any
    items?: { title: string; url: string; icon?: any }[]
  }[]
} & React.ComponentPropsWithoutRef<typeof SidebarGroup>) {
  return (
    <SidebarGroup {...props}>
      <SidebarGroupContent>
        <SidebarMenu>
          {items.map((item) => {
            const hasChildren = Array.isArray(item.items) && item.items.length > 0

            if (!hasChildren) {
              return (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              )
            }

            return (
              <SidebarMenuItem key={item.title}>
                <Collapsible className="group/collapsible">
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton>
                      <item.icon />
                      <span>{item.title}</span>
                      <IconChevronRight className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenu className="ml-6 mt-1">
                      {item.items?.map((child) => (
                        <SidebarMenuItem key={child.title}>
                          <SidebarMenuButton asChild size="sm">
                            <a href={child.url}>
                              {child.icon && <child.icon className="!size-4" />}
                              <span className="text-sm">{child.title}</span>
                            </a>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      ))}
                    </SidebarMenu>
                  </CollapsibleContent>
                </Collapsible>
              </SidebarMenuItem>
            )
          })}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild className="data-[slot=sidebar-menu-button]:!p-1.5">
              <a href="/">
                <IconBuilding className="!size-5" />
                <span className="text-base font-semibold">Brick</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavDocuments items={data.documents} />
        <CustomNavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
