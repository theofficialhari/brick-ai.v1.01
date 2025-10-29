import type React from "react"
import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { IconFileText, IconUpload } from "@tabler/icons-react"

export default function DocumentAIPage() {
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
            <div className="mx-auto w-full max-w-6xl space-y-6 p-6">
              <div className="flex gap-6">
                {/* Left Column - Chat Interface (40%) */}
                <div className="flex-[2] space-y-4">
                  <div className="flex items-center gap-4 border-b">
                    <button className="flex items-center gap-2 border-b-2 border-primary px-4 py-3 text-sm font-medium">
                      <IconFileText className="size-4" />
                      Assist
                    </button>
                    <button className="px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground">
                      Draft
                    </button>
                  </div>

                  <Card className="p-4">
                    <Textarea
                      placeholder="Ask about document analysis..."
                      className="min-h-[150px] resize-none bg-muted/50 text-sm"
                    />
                    <div className="mt-3 flex gap-2">
                      <Button variant="ghost" size="sm">
                        <IconUpload className="mr-2 size-4" />
                        Upload
                      </Button>
                      <Button size="sm" className="ml-auto">
                        Analyze
                      </Button>
                    </div>
                  </Card>

                  <Card className="p-4">
                    <h3 className="mb-3 font-semibold text-sm">Knowledge Source</h3>
                    <select className="w-full rounded-md border bg-background px-3 py-2 text-sm">
                      <option>Select source...</option>
                      <option>Brick Proprietary</option>
                      <option>EDGAR</option>
                    </select>
                  </Card>
                </div>

                {/* Right Column - Document Review (60%) */}
                <div className="flex-[3] space-y-4">
                  <Card className="p-4">
                    <h3 className="mb-4 font-semibold">Document Review</h3>
                    <div className="space-y-3">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <div key={i} className="flex items-center justify-between border-b pb-3 last:border-0">
                          <div className="flex-1">
                            <p className="text-sm font-medium">Document {i}</p>
                            <p className="text-xs text-muted-foreground">Uploaded 2 hours ago</p>
                          </div>
                          <Button variant="ghost" size="sm">
                            Review
                          </Button>
                        </div>
                      ))}
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
