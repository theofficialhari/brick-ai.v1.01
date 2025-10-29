import type React from "react"
import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { Card } from "@/components/ui/card"

export default function NotificationsPage() {
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
              {/* Email Notifications */}
              <Card className="p-6">
                <h2 className="mb-4 text-lg font-semibold">Email Notifications</h2>
                <div className="space-y-4">
                  <label className="flex items-center gap-3">
                    <input type="checkbox" defaultChecked className="rounded" />
                    <div>
                      <p className="text-sm font-medium">Deep Research</p>
                      <p className="text-xs text-muted-foreground">Get notified about new research findings</p>
                    </div>
                  </label>
                  <label className="flex items-center gap-3">
                    <input type="checkbox" defaultChecked className="rounded" />
                    <div>
                      <p className="text-sm font-medium">Asset Class Digest</p>
                      <p className="text-xs text-muted-foreground">Weekly digest of your asset class updates</p>
                    </div>
                  </label>
                  <label className="flex items-center gap-3">
                    <input type="checkbox" defaultChecked className="rounded" />
                    <div>
                      <p className="text-sm font-medium">Market Digest</p>
                      <p className="text-xs text-muted-foreground">Weekly market overview and trends</p>
                    </div>
                  </label>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
