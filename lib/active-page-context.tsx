"use client"

import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react"
import { usePathname } from "next/navigation"

interface ActivePageContextType {
  activePage: string
  setActivePage: (page: string) => void
}

const ActivePageContext = createContext<ActivePageContextType | undefined>(undefined)

const routeToPageMap: Record<string, string> = {
  "/": "Pulse",
  "/pulse": "Pulse",
  "/agent": "Agent",
  "/agent/document-ai": "Document AI",
  "/agent/powerpoint-ai": "Powerpoint AI",
  "/agent/underwriting-ai": "Underwriting AI",
  "/research": "Research",
  "/workflows": "Workflows",
  "/notifications": "Notifications",
  "/account": "Account",
  "/personalization": "Personalization",
  "/settings": "Settings",
  "/vault/secured": "Secured",
  "/vault/collaboration": "Collaboration",
  "/vault/archives": "Archives",
  "/more/tutorial": "Brick Tutorial",
  "/more/documentation": "Documentation",
}

export function ActivePageProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  const [activePage, setActivePage] = useState(routeToPageMap[pathname ?? ""] ?? "Pulse")

  const derivedPage = useMemo(() => routeToPageMap[pathname ?? ""], [pathname])

  useEffect(() => {
    if (derivedPage) {
      setActivePage(derivedPage)
    }
  }, [derivedPage])

  return <ActivePageContext.Provider value={{ activePage, setActivePage }}>{children}</ActivePageContext.Provider>
}

export function useActivePage() {
  const context = useContext(ActivePageContext)
  if (!context) {
    throw new Error("useActivePage must be used within ActivePageProvider")
  }
  return context
}
