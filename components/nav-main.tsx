"use client"

import { IconChevronRight, type Icon } from "@tabler/icons-react"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { SidebarMenuButton } from "@/components/ui/sidebar"
import { useActivePage } from "@/lib/active-page-context"

import { SidebarGroup, SidebarGroupContent, SidebarMenu, SidebarMenuItem } from "@/components/ui/sidebar"

export function NavMain({
  items,
}: {
  items: {
    title: string
    url: string
    icon?: Icon
    isActive?: boolean
    isDropdown?: boolean
    items?: { title: string; url: string; icon?: Icon }[]
  }[]
}) {
  const { setActivePage } = useActivePage()

  return (
    <SidebarGroup>
      <SidebarGroupContent className="flex flex-col gap-2">
        <SidebarMenu>
          {items.map((item) => {
            const hasChildren = Array.isArray(item.items) && item.items.length > 0

            if (!hasChildren && !item.isDropdown) {
              return (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton tooltip={item.title} asChild onClick={() => setActivePage(item.title)}>
                    <a href={item.url}>
                      {item.icon && <item.icon />}
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              )
            }

            if (item.isDropdown) {
              return (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton tooltip={item.title} onClick={() => setActivePage(item.title)}>
                    {item.icon && <item.icon />}
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              )
            }

            return (
              <SidebarMenuItem key={item.title}>
                <Collapsible defaultOpen={item.isActive} className="group/collapsible">
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton tooltip={item.title} onClick={() => setActivePage(item.title)}>
                      {item.icon && <item.icon />}
                      <span>{item.title}</span>
                      <IconChevronRight className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenu className="ml-6 mt-1">
                      {item.items?.map((child) => (
                        <SidebarMenuItem key={child.title}>
                          <SidebarMenuButton asChild size="sm" onClick={() => setActivePage(child.title)}>
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
