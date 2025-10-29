"use client"

import type React from "react"
import { useEffect, useState } from "react"
import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  IconArchive,
  IconShare,
  IconSearch,
  IconFolderPlus,
  IconUpload,
  IconFilter,
  IconDots,
  IconFileText,
  IconFolder,
} from "@tabler/icons-react"
import { useActivePage } from "@/lib/active-page-context"

const archiveProjects = [
  { name: "Closed Transactions", files: 210, size: "842.6 MB", updated: "Jan 30, 2025" },
  { name: "Legacy Due Diligence", files: 168, size: "612.4 MB", updated: "Jan 24, 2025" },
  { name: "Historical Appraisals", files: 92, size: "284.1 MB", updated: "Jan 18, 2025" },
  { name: "Prior Investor Reports", files: 134, size: "496.9 MB", updated: "Jan 10, 2025" },
]

const archivedQueries = [
  { name: "2019 Portfolio Exit", type: "Archive", time: "Mar 4, 2024" },
  { name: "Legacy JV Agreements", type: "Archive", time: "Feb 18, 2024" },
  { name: "Historical Tenant Exposure", type: "Archive", time: "Jan 8, 2024" },
]

const archiveFiles = [
  { name: "Investor_Report_Q2_2019.pdf", type: "PDF", size: "4.2 MB", modified: "Mar 4, 2024" },
  { name: "Due_Diligence_Summary.xlsx", type: "Sheet", size: "2.8 MB", modified: "Feb 22, 2024" },
  { name: "Tenant_Credit_Review.docx", type: "Doc", size: "1.1 MB", modified: "Jan 15, 2024" },
]

export default function ArchivesPage() {
  const { setActivePage } = useActivePage()
  const [selectedProject, setSelectedProject] = useState<string | null>(null)

  useEffect(() => {
    setActivePage("Archives")
  }, [setActivePage])

  if (!selectedProject) {
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
            <div className="@container/main flex flex-1 flex-col gap-6 p-6">
              <div>
                <h1 className="mb-2 text-3xl font-bold">Archives</h1>
                <p className="text-muted-foreground">Browse historical projects, reports, and closed transactions</p>
              </div>

              <div className="grid gap-4 md:grid-cols-4">
                {archiveProjects.map((project) => (
                  <Card
                    key={project.name}
                    onClick={() => setSelectedProject(project.name)}
                    className="cursor-pointer p-6 transition-shadow hover:shadow-lg"
                  >
                    <div className="mb-4 flex items-start justify-between">
                      <IconFolder className="size-8 text-amber-500" />
                      <Button variant="ghost" size="sm">
                        <IconShare className="size-4" />
                      </Button>
                    </div>
                    <h3 className="mb-2 font-semibold">{project.name}</h3>
                    <p className="mb-3 text-sm text-muted-foreground">
                      {project.files} files • {project.size}
                    </p>
                    <p className="text-xs text-muted-foreground">Archived {project.updated}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </SidebarInset>
      </SidebarProvider>
    )
  }

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
          <div className="@container/main flex flex-1 flex-col gap-6 p-6">
            <div className="flex items-start justify-between">
              <div>
                <button onClick={() => setSelectedProject(null)} className="mb-2 text-sm text-primary hover:underline">
                  Vault / Archives /
                </button>
                <h1 className="mb-2 text-3xl font-bold">{selectedProject}</h1>
                <p className="text-muted-foreground">134 files • 496.9 MB</p>
              </div>
              <Button variant="outline">
                <IconShare className="mr-2 size-4" />
                Share
              </Button>
            </div>

            <div>
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-lg font-semibold">Restore archived query</h3>
                <a href="#" className="text-sm text-primary hover:underline">
                  Browse all archives →
                </a>
              </div>
              <div className="grid gap-4 md:grid-cols-3">
                <Card className="border-dashed p-6 text-center">
                  <div className="mb-4 flex items-center justify-center">
                    <IconArchive className="size-10 text-muted-foreground" />
                  </div>
                  <h4 className="mb-2 font-semibold">Start a query from archive</h4>
                  <p className="text-sm text-muted-foreground">Restore a saved thread or extraction to continue working</p>
                </Card>
                {archivedQueries.map((query) => (
                  <Card key={query.name} className="p-6">
                    <h4 className="mb-2 font-semibold">{query.name}</h4>
                    <p className="text-sm text-muted-foreground">Recovered {query.time}</p>
                    <Badge variant="secondary" className="mt-3 w-fit">{query.type}</Badge>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-lg font-semibold">Archived files</h3>
              <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                <div className="relative w-full max-w-md">
                  <IconSearch className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                  <Input placeholder="Search files" className="pl-10" />
                </div>
                <div className="flex flex-wrap gap-2">
                  <Button variant="outline" size="sm">
                    <IconFolderPlus className="mr-2 size-4" />
                    New folder
                  </Button>
                  <Button variant="outline" size="sm">
                    <IconUpload className="mr-2 size-4" />
                    Restore file
                  </Button>
                  <Button variant="outline" size="sm">
                    <IconFilter className="mr-2 size-4" />
                    Filters
                  </Button>
                </div>
              </div>

              <Card className="overflow-hidden">
                <div className="divide-y">
                  {archiveFiles.map((file) => (
                    <div key={file.name} className="flex items-center justify-between px-4 py-3">
                      <div className="flex items-center gap-3">
                        <div className="flex size-9 items-center justify-center rounded-lg bg-muted">
                          <IconFileText className="size-4 text-muted-foreground" />
                        </div>
                        <div>
                          <p className="text-sm font-medium">{file.name}</p>
                          <p className="text-xs text-muted-foreground">
                            {file.type} • {file.size}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span>{file.modified}</span>
                        <Button variant="ghost" size="icon">
                          <IconDots className="size-4" />
                        </Button>
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
