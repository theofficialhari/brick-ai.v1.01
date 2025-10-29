"use client"

import type React from "react"
import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useActivePage } from "@/lib/active-page-context"
import { useEffect } from "react"

export default function AccountPage() {
  const { setActivePage } = useActivePage()

  useEffect(() => {
    setActivePage("Account")
  }, [setActivePage])

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
          <div className="max-w-2xl space-y-8 p-6">
            <div>
              <h1 className="text-3xl font-bold">Account</h1>
            </div>

            {/* Account Information */}
            <Card className="p-6">
              <h2 className="text-lg font-semibold mb-6">Account Information</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-6">
                  <div className="size-20 rounded-lg bg-muted flex items-center justify-center text-2xl">👤</div>
                  <div className="flex-1 space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground">Full Name</p>
                        <p className="font-medium">John Anderson</p>
                      </div>
                      <Button variant="outline" size="sm">
                        Change
                      </Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground">Username</p>
                        <p className="font-medium">janderson</p>
                      </div>
                      <Button variant="outline" size="sm">
                        Change
                      </Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground">Email</p>
                        <p className="font-medium">john@example.com</p>
                      </div>
                      <Button variant="outline" size="sm">
                        Change
                      </Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground">Organization</p>
                        <p className="font-medium">ABC Real Estate Fund</p>
                      </div>
                      <Button variant="outline" size="sm">
                        Change
                      </Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground">Role</p>
                        <p className="font-medium">Asset Manager</p>
                      </div>
                      <Button variant="outline" size="sm">
                        Change
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Your Subscription */}
            <Card className="p-6 border-l-4 border-l-blue-500">
              <h2 className="text-lg font-semibold mb-4">Your Subscription</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Unlock the full power of Brick.ai Professional</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Get access to unlimited extractions, advanced workflows, and priority support.{" "}
                    <a href="#" className="text-primary hover:underline">
                      Learn more
                    </a>
                  </p>
                </div>
                <Button>Upgrade plan</Button>
              </div>
            </Card>

            {/* System */}
            <div>
              <h2 className="text-lg font-semibold mb-4">System</h2>
            </div>

            {/* Support */}
            <Card className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-lg font-semibold">Support</h2>
                </div>
                <Button variant="outline">Contact</Button>
              </div>
            </Card>

            {/* Session Management */}
            <Card className="p-6">
              <h2 className="text-lg font-semibold mb-6">Session Management</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between py-3 border-b">
                  <p className="text-sm">
                    You are signed in as <span className="font-medium">janderson</span>
                  </p>
                  <Button variant="outline" size="sm">
                    Sign out
                  </Button>
                </div>
                <div className="flex items-center justify-between py-3">
                  <div>
                    <p className="text-sm font-medium">Sign out of all sessions</p>
                    <p className="text-xs text-muted-foreground">This will sign you out on all devices</p>
                  </div>
                  <Button variant="outline" size="sm">
                    Sign out of all sessions
                  </Button>
                </div>
              </div>
            </Card>

            {/* Delete Account */}
            <Card className="p-6 border-l-4 border-l-red-500">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-lg font-semibold text-red-600">Delete account</h2>
                  <p className="text-sm text-muted-foreground mt-1">Permanently delete your account and data</p>
                </div>
                <Button variant="destructive">
                  <a href="#">Learn more</a>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
