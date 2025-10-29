import type React from "react"
import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function AccountPage() {
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
              {/* Account Information */}
              <Card className="p-6">
                <h2 className="mb-4 text-lg font-semibold">Account Information</h2>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium">Full Name</label>
                    <Input defaultValue="John Doe" className="mt-1" />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Username</label>
                    <Input defaultValue="johndoe" className="mt-1" />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Email</label>
                    <Input defaultValue="john@example.com" className="mt-1" />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Organization</label>
                    <Input defaultValue="Acme Corp" className="mt-1" />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Role</label>
                    <Input defaultValue="Admin" className="mt-1" />
                  </div>
                  <Button className="mt-4">Save Changes</Button>
                </div>
              </Card>

              {/* Subscription */}
              <Card className="p-6">
                <h2 className="mb-4 text-lg font-semibold">Your Subscription</h2>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Plan</span>
                    <span className="font-medium">Professional</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Renewal Date</span>
                    <span className="font-medium">Dec 31, 2024</span>
                  </div>
                  <Button variant="outline" className="w-full mt-4 bg-transparent">
                    Manage Subscription
                  </Button>
                </div>
              </Card>

              {/* System */}
              <Card className="p-6">
                <h2 className="mb-4 text-lg font-semibold">System</h2>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Theme</span>
                    <select className="rounded-md border bg-background px-3 py-1 text-sm">
                      <option>Light</option>
                      <option>Dark</option>
                      <option>Auto</option>
                    </select>
                  </div>
                </div>
              </Card>

              {/* Support */}
              <Card className="p-6">
                <h2 className="mb-4 text-lg font-semibold">Support</h2>
                <Button variant="outline" className="w-full bg-transparent">
                  Contact Support
                </Button>
              </Card>

              {/* Session Management */}
              <Card className="p-6">
                <h2 className="mb-4 text-lg font-semibold">Session Management</h2>
                <Button variant="outline" className="w-full bg-transparent">
                  Sign Out All Devices
                </Button>
              </Card>

              {/* Delete Account */}
              <Card className="border-red-200 p-6">
                <h2 className="mb-4 text-lg font-semibold text-red-600">Delete Account</h2>
                <p className="mb-4 text-sm text-muted-foreground">
                  Permanently delete your account and all associated data. This action cannot be undone.
                </p>
                <Button variant="destructive">Delete Account</Button>
              </Card>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
