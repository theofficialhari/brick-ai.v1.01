"use client"

import { useState } from "react"
import { IconChevronDown } from "@tabler/icons-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuCheckboxItem,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu"

const REGIONS = {
  "Asia Pacific": ["Singapore", "Australia", "Hong Kong", "Tokyo", "Seoul"],
  Americas: ["United States", "Canada", "Mexico"],
  Europe: ["United Kingdom", "Germany", "France", "Netherlands"],
  "Middle East": ["Dubai", "Saudi Arabia"],
}

export function GeographicFilter() {
  const [selected, setSelected] = useState<string[]>(["Singapore"])

  const toggleLocation = (location: string) => {
    setSelected((prev) => (prev.includes(location) ? prev.filter((l) => l !== location) : [...prev, location]))
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2 bg-transparent">
          Topics
          <IconChevronDown className="size-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-56 max-h-96 overflow-y-auto">
        {Object.entries(REGIONS).map(([region, locations]) => (
          <div key={region}>
            <DropdownMenuLabel className="text-xs font-semibold text-muted-foreground">{region}</DropdownMenuLabel>
            {locations.map((location) => (
              <DropdownMenuCheckboxItem
                key={location}
                checked={selected.includes(location)}
                onCheckedChange={() => toggleLocation(location)}
              >
                {location}
              </DropdownMenuCheckboxItem>
            ))}
            <DropdownMenuSeparator />
          </div>
        ))}
        <div className="px-2 py-1.5">
          <Button size="sm" className="w-full">
            Apply Filters
          </Button>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
