import type React from "react"
import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { Card } from "@/components/ui/card"
import { IconPlay } from "@tabler/icons-react"

export default function TutorialPage() {
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
            <div className="mx-auto w-full max-w-4xl space-y-6 p-6">
              <div>
                <h1 className="text-3xl font-bold">Brick Tutorial</h1>
                <p className="mt-2 text-muted-foreground">Learn how to use Brick.ai to its full potential</p>
              </div>

              {/* Getting Started */}
              <Card className="p-6">
                <h2 className="mb-4 text-xl font-semibold">Getting Started</h2>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { title: "Introduction to Brick", duration: "5 min" },
                    { title: "Setting Up Your Profile", duration: "3 min" },
                    { title: "Understanding the Dashboard", duration: "7 min" },
                    { title: "Navigating the Sidebar", duration: "4 min" },
                  ].map((video, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-4 rounded-lg border p-4 hover:bg-muted/50 cursor-pointer"
                    >
                      <div className="flex size-12 items-center justify-center rounded-lg bg-primary/10">
                        <IconPlay className="size-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-sm">{video.title}</p>
                        <p className="text-xs text-muted-foreground">{video.duration}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Core Features */}
              <Card className="p-6">
                <h2 className="mb-4 text-xl font-semibold">Core Features</h2>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { title: "Using Pulse", duration: "8 min" },
                    { title: "Research with Brick", duration: "10 min" },
                    { title: "Agent Tools", duration: "12 min" },
                    { title: "Vault Management", duration: "6 min" },
                  ].map((video, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-4 rounded-lg border p-4 hover:bg-muted/50 cursor-pointer"
                    >
                      <div className="flex size-12 items-center justify-center rounded-lg bg-primary/10">
                        <IconPlay className="size-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-sm">{video.title}</p>
                        <p className="text-xs text-muted-foreground">{video.duration}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Advanced Topics */}
              <Card className="p-6">
                <h2 className="mb-4 text-xl font-semibold">Advanced Topics</h2>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { title: "Workflows & Automation", duration: "15 min" },
                    { title: "Team Collaboration", duration: "9 min" },
                    { title: "Custom Integrations", duration: "11 min" },
                    { title: "Best Practices", duration: "8 min" },
                  ].map((video, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-4 rounded-lg border p-4 hover:bg-muted/50 cursor-pointer"
                    >
                      <div className="flex size-12 items-center justify-center rounded-lg bg-primary/10">
                        <IconPlay className="size-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-sm">{video.title}</p>
                        <p className="text-xs text-muted-foreground">{video.duration}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
