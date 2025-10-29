import type React from "react"
import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

export default function PersonalizationPage() {
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
          <div className="@container/main flex flex-1 flex-col">
            <div className="mx-auto w-full max-w-2xl space-y-6 p-6">
              {/* Introduce Yourself */}
              <Card className="p-6">
                <h2 className="mb-4 text-lg font-semibold">Introduce Yourself</h2>
                <Textarea
                  placeholder="Tell us about yourself, your interests, and how you use Brick..."
                  className="min-h-[150px] resize-none"
                />
                <Button className="mt-4">Save</Button>
              </Card>

              {/* Location */}
              <Card className="p-6">
                <h2 className="mb-4 text-lg font-semibold">Location</h2>
                <div className="space-y-3">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" defaultChecked className="rounded" />
                    <span className="text-sm">Use device location</span>
                  </label>
                  <div className="text-sm text-muted-foreground">Current location: Singapore</div>
                </div>
              </Card>

              {/* Memory */}
              <Card className="p-6">
                <div className="mb-4 flex items-center gap-2">
                  <h2 className="text-lg font-semibold">Memory</h2>
                  <span className="rounded-full bg-yellow-100 px-2 py-0.5 text-xs font-medium text-yellow-800">
                    BETA
                  </span>
                </div>
                <div className="space-y-3">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" defaultChecked className="rounded" />
                    <span className="text-sm">Search library</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" defaultChecked className="rounded" />
                    <span className="text-sm">Saved memories</span>
                  </label>
                </div>
              </Card>

              {/* Watchlists */}
              <Card className="p-6">
                <h2 className="mb-4 text-lg font-semibold">Watchlists</h2>
                <div className="space-y-3">
                  <div className="flex items-center justify-between border-b pb-3">
                    <span className="text-sm">Real Estate Markets</span>
                    <Button variant="ghost" size="sm">
                      Manage
                    </Button>
                  </div>
                  <div className="flex items-center justify-between border-b pb-3">
                    <span className="text-sm">Properties</span>
                    <Button variant="ghost" size="sm">
                      Manage
                    </Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Tenants</span>
                    <Button variant="ghost" size="sm">
                      Manage
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
