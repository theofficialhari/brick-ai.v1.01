"use client"

import type React from "react"
import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import {
  IconPlus,
  IconShare,
  IconSearch,
  IconFolderPlus,
  IconUpload,
  IconFilter,
  IconDots,
  IconFileTypePdf,
  IconFolder,
} from "@tabler/icons-react"
import { useActivePage } from "@/lib/active-page-context"
import { useEffect, useState } from "react"

export default function CollaborationPage() {
  const { setActivePage } = useActivePage()
  const [selectedProject, setSelectedProject] = useState<string | null>(null)

  useEffect(() => {
    setActivePage("Collaboration")
  }, [setActivePage])

  const projects = [
    { name: "Joint Venture Agreements", files: 67, size: "234.5 MB", updated: "Feb 14, 2025" },
    { name: "Partnership Contracts", files: 52, size: "189.3 MB", updated: "Feb 13, 2025" },
    { name: "Shared Development Projects", files: 98, size: "445.2 MB", updated: "Feb 12, 2025" },
    { name: "Team Collaboration Docs", files: 41, size: "127.8 MB", updated: "Feb 11, 2025" },
  ]

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
                <h1 className="text-3xl font-bold mb-2">Collaboration</h1>
                <p className="text-muted-foreground">Manage your collaborative project folders</p>
              </div>

              <div className="grid grid-cols-4 gap-4">
                {projects.map((project) => (
                  <Card
                    key={project.name}
                    onClick={() => setSelectedProject(project.name)}
                    className="p-6 cursor-pointer hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <IconFolder className="size-8 text-green-500" />
                      <Button variant="ghost" size="sm">
                        <IconShare className="size-4" />
                      </Button>
                    </div>
                    <h3 className="font-semibold mb-2">{project.name}</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      {project.files} files • {project.size}
                    </p>
                    <p className="text-xs text-muted-foreground">Updated {project.updated}</p>
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
            {/* Page Header */}
            <div className="flex items-start justify-between">
              <div>
                <button onClick={() => setSelectedProject(null)} className="text-sm text-primary hover:underline mb-2">
                  Vault / Collaboration /
                </button>
                <h1 className="text-3xl font-bold mb-2">{selectedProject}</h1>
                <p className="text-muted-foreground">87 files • 245.32 MB</p>
              </div>
              <Button variant="outline">
                <IconShare className="mr-2 size-4" />
                Share
              </Button>
            </div>

            {/* Section 1: Create New Query */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Create new query</h3>
                <a href="#" className="text-sm text-primary hover:underline">
                  View all workflows →
                </a>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <Card className="border-dashed p-6 text-center hover:bg-muted/50 cursor-pointer transition-colors">
                  <div className="mb-4 flex items-center justify-center">
                    <div className="rounded-full border-2 border-dashed border-muted-foreground/50 p-4">
                      <IconPlus className="size-8 text-muted-foreground" />
                    </div>
                  </div>
                  <h4 className="mb-2 font-semibold">Start a query from scratch</h4>
                  <p className="text-sm text-muted-foreground">Choose either a review table or thread</p>
                </Card>

                <Card className="p-6 hover:shadow-md cursor-pointer transition-shadow">
                  <h4 className="mb-2 font-semibold">Collaborative Document Review</h4>
                  <p className="mb-4 text-sm text-muted-foreground">
                    Review and annotate shared documents with your team in real-time...
                  </p>
                  <Badge variant="secondary" className="gap-1">
                    <span className="size-2 rounded-full bg-blue-500" />
                    Collaboration
                  </Badge>
                </Card>

                <Card className="p-6 hover:shadow-md cursor-pointer transition-shadow">
                  <h4 className="mb-2 font-semibold">Team Workflow Analysis</h4>
                  <p className="mb-4 text-sm text-muted-foreground">
                    Analyze team collaboration patterns and document access history.
                  </p>
                  <Badge variant="secondary" className="gap-1">
                    <span className="size-2 rounded-full bg-blue-500" />
                    Collaboration
                  </Badge>
                </Card>
              </div>
            </div>

            {/* Section 2: Recent Queries */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Recent queries</h3>
              <div className="space-y-4">
                {[
                  { name: "Team Document Review Session", type: "Review table", time: "2 hours ago" },
                  { name: "Shared Contract Analysis", type: "Review table", time: "Yesterday" },
                  { name: "Collaborative Due Diligence", type: "Assist", time: "3 days ago" },
                ].map((query, i) => (
                  <div key={i} className="flex items-center justify-between py-3 border-b last:border-0">
                    <span className="font-medium">{query.name}</span>
                    <div className="flex items-center gap-4">
                      <Badge variant="outline">{query.type}</Badge>
                      <span className="text-sm text-muted-foreground">{query.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 3: Project Files */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Project files</h3>

              {/* Toolbar */}
              <div className="mb-4 flex items-center justify-between">
                <div className="relative w-80">
                  <IconSearch className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                  <Input placeholder="Search" className="pl-9" />
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <IconFolderPlus className="mr-2 size-4" />
                    Create folder
                  </Button>
                  <Button variant="outline" size="sm">
                    <IconUpload className="mr-2 size-4" />
                    Upload files
                  </Button>
                  <Button variant="outline" size="sm">
                    <IconFilter className="mr-2 size-4" />
                    Filters
                  </Button>
                </div>
              </div>

              {/* Data Table */}
              <div className="rounded-lg border">
                <table className="w-full">
                  <thead className="border-b bg-muted/50">
                    <tr>
                      <th className="w-10 p-3">
                        <Checkbox />
                      </th>
                      <th className="p-3 text-left text-sm font-medium">File name</th>
                      <th className="w-44 p-3 text-left text-sm font-medium">Category</th>
                      <th className="w-20 p-3 text-left text-sm font-medium">Type</th>
                      <th className="w-36 p-3 text-left text-sm font-medium">Last modified</th>
                      <th className="w-24 p-3 text-left text-sm font-medium">Size</th>
                      <th className="w-16 p-3"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        name: "Team Collaboration Guidelines.pdf",
                        category: "Shared Document",
                        date: "February 14, 2025",
                        size: "5.21 KB",
                      },
                      {
                        name: "Project Roadmap Q1 2025.pdf",
                        category: "Shared Document",
                        date: "February 13, 2025",
                        size: "4.87 KB",
                      },
                      {
                        name: "Stakeholder Meeting Notes.pdf",
                        category: "Shared Document",
                        date: "February 12, 2025",
                        size: "3.45 KB",
                      },
                      {
                        name: "Collaborative Review Template.pdf",
                        category: "Shared Document",
                        date: "February 11, 2025",
                        size: "6.12 KB",
                      },
                    ].map((file, i) => (
                      <tr
                        key={i}
                        className={`border-b last:border-0 hover:bg-muted/50 ${i % 2 === 1 ? "bg-muted/20" : ""}`}
                      >
                        <td className="p-3">
                          <Checkbox />
                        </td>
                        <td className="p-3">
                          <div className="flex items-center gap-2">
                            <IconFileTypePdf className="size-5 text-red-500" />
                            <span className="font-medium">{file.name}</span>
                          </div>
                        </td>
                        <td className="p-3">
                          <Badge variant="secondary" className="gap-1">
                            <span className="size-2 rounded-full bg-blue-500" />
                            {file.category}
                          </Badge>
                        </td>
                        <td className="p-3 text-sm text-muted-foreground">PDF</td>
                        <td className="p-3 text-sm text-muted-foreground">{file.date}</td>
                        <td className="p-3 text-sm text-muted-foreground">{file.size}</td>
                        <td className="p-3">
                          <Button variant="ghost" size="sm">
                            <IconDots className="size-4" />
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
