import type React from "react"
import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { IconFileText, IconDatabase, IconUpload, IconStack2 } from "@tabler/icons-react"

export default function ResearchPage() {
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
              {/* Top Tab Bar */}
              <div className="flex items-center gap-4 border-b">
                <button className="flex items-center gap-2 border-b-2 border-primary px-4 py-3 text-sm font-medium">
                  <IconFileText className="size-4" />
                  Assist
                </button>
                <button className="px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground">
                  Draft
                </button>
              </div>

              {/* Helper Text */}
              <div className="flex items-center justify-between">
                <p className="text-sm text-muted-foreground">
                  Quickly search, analyze, or understand material, then ask follow-up questions
                </p>
                <a href="#" className="text-sm text-primary hover:underline">
                  View tips
                </a>
              </div>

              {/* Main Query Input Section */}
              <Card className="p-6">
                <div className="space-y-4">
                  <Textarea
                    placeholder="Ask Brick anything..."
                    className="min-h-[200px] resize-none bg-muted/50 text-base"
                  />

                  <div className="flex items-center justify-between">
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm">
                        <IconFileText className="mr-2 size-4" />
                        Load prompt
                      </Button>
                      <Button variant="ghost" size="sm">
                        <IconDatabase className="mr-2 size-4" />
                        Save prompt
                      </Button>
                    </div>
                    <Button size="lg" className="px-8">
                      Ask Brick
                    </Button>
                  </div>
                </div>
              </Card>

              {/* Upload Section */}
              <div className="grid grid-cols-2 gap-4">
                <Card className="border-dashed p-8 text-center hover:bg-muted/50 cursor-pointer transition-colors">
                  <IconUpload className="mx-auto mb-3 size-12 text-muted-foreground" />
                  <h3 className="mb-1 font-semibold">Drag or click to upload files</h3>
                  <p className="text-sm text-muted-foreground">Choose files from your computer or a Vault project</p>
                </Card>

                <Card className="p-8 text-center hover:bg-muted/50 cursor-pointer transition-colors">
                  <IconStack2 className="mx-auto mb-3 size-12 text-muted-foreground" />
                  <h3 className="mb-1 font-semibold">Choose knowledge source</h3>
                  <p className="text-sm text-muted-foreground">EDGAR, Legislation, Tax Law, and more</p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
