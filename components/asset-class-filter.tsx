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
} from "@/components/ui/dropdown-menu"

const ASSET_CLASSES = [
  "Multifamily",
  "Office",
  "Logistics",
  "Retail",
  "Hotel",
  "Data Centre",
  "Industrial",
  "Mixed-Use",
]

export function AssetClassFilter() {
  const [selected, setSelected] = useState<string[]>(["Multifamily", "Office"])

  const toggleAssetClass = (assetClass: string) => {
    setSelected((prev) => (prev.includes(assetClass) ? prev.filter((a) => a !== assetClass) : [...prev, assetClass]))
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2 bg-transparent">
          For You
          <IconChevronDown className="size-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-56">
        <div className="px-2 py-1.5">
          <p className="text-sm font-medium">Asset Classes</p>
        </div>
        <DropdownMenuSeparator />
        {ASSET_CLASSES.map((assetClass) => (
          <DropdownMenuCheckboxItem
            key={assetClass}
            checked={selected.includes(assetClass)}
            onCheckedChange={() => toggleAssetClass(assetClass)}
          >
            {assetClass}
          </DropdownMenuCheckboxItem>
        ))}
        <DropdownMenuSeparator />
        <div className="px-2 py-1.5">
          <Button size="sm" className="w-full">
            Apply Filters
          </Button>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
