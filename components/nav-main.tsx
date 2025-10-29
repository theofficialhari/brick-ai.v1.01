"use client"

import Link from "next/link"
import { IconChevronRight, type Icon } from "@tabler/icons-react"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { SidebarMenuButton } from "@/components/ui/sidebar"
import { useActivePage } from "@/lib/active-page-context"

import { SidebarGroup, SidebarGroupContent, SidebarMenu, SidebarMenuItem } from "@/components/ui/sidebar"

interface NavItem {
  title: string
  url: string
  icon?: Icon
  isActive?: boolean
  isDropdown?: boolean
  items?: { title: string; url: string; icon?: Icon }[]
}

interface NavMainProps {
  items: NavItem[]
  onDropdownSelect?: (item: NavItem) => void
}

export function NavMain({ items, onDropdownSelect }: NavMainProps) {
  const { activePage, setActivePage } = useActivePage()

  const isItemActive = (item: NavItem) => {
    if (item.isDropdown) {
      return activePage === item.title
    }

    if (item.items?.length) {
      return activePage === item.title || item.items.some((child) => child.title === activePage)
    }

    return activePage === item.title
  }

  return (
    <SidebarGroup>
      <SidebarGroupContent className="flex flex-col gap-2">
        <SidebarMenu>
          {items.map((item) => {
            const hasChildren = Array.isArray(item.items) && item.items.length > 0

            if (!hasChildren && !item.isDropdown) {
              return (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    tooltip={item.title}
                    asChild
                    isActive={isItemActive(item)}
                    className="[&[data-active=true]]:border-l-2 [&[data-active=true]]:border-l-primary [&[data-active=true]]:bg-primary/10 [&[data-active=true]]:font-semibold [&[data-active=true]]:text-primary"
                    onClick={() => setActivePage(item.title)}
                  >
                    <Link href={item.url} className="flex items-center gap-2">
                      {item.icon && <item.icon />}
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              )
            }

            if (item.isDropdown) {
              return (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    tooltip={item.title}
                    isActive={isItemActive(item)}
                    className="[&[data-active=true]]:border-l-2 [&[data-active=true]]:border-l-primary [&[data-active=true]]:bg-primary/10 [&[data-active=true]]:font-semibold [&[data-active=true]]:text-primary"
                    onClick={() => {
                      setActivePage(item.title)
                      onDropdownSelect?.(item)
                    }}
                  >
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
                    <SidebarMenuButton
                      tooltip={item.title}
                      isActive={isItemActive(item)}
                      className="[&[data-active=true]]:border-l-2 [&[data-active=true]]:border-l-primary [&[data-active=true]]:bg-primary/10 [&[data-active=true]]:font-semibold [&[data-active=true]]:text-primary"
                      onClick={() => setActivePage(item.title)}
                    >
                      {item.icon && <item.icon />}
                      <span>{item.title}</span>
                      <IconChevronRight className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenu className="ml-6 mt-1">
                      {item.items?.map((child) => (
                        <SidebarMenuItem key={child.title}>
                          <SidebarMenuButton
                            asChild
                            size="sm"
                            isActive={activePage === child.title}
                            className="[&[data-active=true]]:border-l-2 [&[data-active=true]]:border-l-primary [&[data-active=true]]:bg-primary/10 [&[data-active=true]]:font-semibold [&[data-active=true]]:text-primary"
                            onClick={() => setActivePage(child.title)}
                          >
                            <Link href={child.url} className="flex items-center gap-2">
                              {child.icon && <child.icon className="!size-4" />}
                              <span className="text-sm">{child.title}</span>
                            </Link>
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
