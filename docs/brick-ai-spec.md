# Brick.ai Implementation Specification

## Overview
Transform Shadcn Dashboard template into Brick.ai, a commercial real estate intelligence platform.

**Key Principle**: Keep exact same UI/UX design, styling, and visual aesthetics as template - only change labels, icons, structure, and page content.

## 1. Sidebar Changes (Structure Unchanged)

### Top Section
- "Brick" (keep as-is)
- "Pulse" (keep as-is)
- "Agent" (was "Assistant") - Expandable
  - "Document AI" (was "Documents")
  - "Underwriting AI" (was "Underwriting")
  - "Powerpoint AI" (was "Presentation")
- "Research" (keep as-is)
- "Workflows" (keep as-is)
- "Team" (keep as-is)

### Vault Section
- "VAULT" label (keep as-is)
- "Secured" (keep as-is)
- "Collaboration" (keep as-is)
- "Archives" (keep as-is)

### More Dropdown
- "Brick Tutorial" (new)
- "Documentation" (new)
- Remove: Obligations, Risks, Critical Dates

### Bottom Section
- REMOVE: Settings, Get Help, Search
- KEEP: User profile with dropdown menu

## 2. Global Navigation Fix
Header must show active page name dynamically:
- When "Pulse" is clicked → Header shows "Pulse"
- When "Agent" is clicked → Header shows "Agent"
- When "Document AI" is clicked → Header shows "Document AI"
- Etc.

Active sidebar item has blue left border + light blue background.

## 3. Pulse Page
Keep exact same UI/UX as template.

### NEW: Add Filters
**"For You" Dropdown - Asset Class Filter**:
- Multifamily, Office, Logistics, Retail, Hotel, Data Centre, Industrial, Mixed-Use
- Checkboxes, white background, 8px rounded corners
- Apply button at bottom

**"Topics" Dropdown - Geographic Market Filter**:
- Grouped by region: Asia Pacific, Americas, Europe, Middle East
- Checkboxes for each location
- Same styling as "For You" dropdown

## 4. Agent Pages (Document/Underwriting/PowerPoint AI)
Layout: Two-column split (40% left, 60% right)

### LEFT COLUMN (Chat Interface)
- Tabs: "Assist" (active), "Draft"
- Helper text: "Quickly search, analyze, or understand material, then ask follow-up questions"
- Text input: "Ask Brick anything..."
- Buttons: "📄 Load prompt", "💾 Save prompt", "Ask Brick"
- Upload area: "Drag or click to upload files"
- Knowledge source selector

### RIGHT COLUMN
**Document AI**: Document review table with extraction details
**Underwriting AI**: Financial model viewer with deal metrics, sensitivity analysis, charts
**PowerPoint AI**: Presentation builder with template library (2x2 grid)

## 5. Research Page
Keep exact same UI/UX as template.

### Changes
1. Replace ALL "Harvey" with "Brick"
2. Knowledge Source Selection: Grid of selectable source cards (2x3)
   - JLL, CBRE, Cushman & Wakefield, Colliers, Web, Brick Proprietary
   - White background, 8px rounded corners, checkbox, selected state with blue border
3. Draft Tab: Add suggestion chips

## 6. Workflows Page
Keep template's card-based workflow step styling.

- Header: "Workflow" (left), "Share" + "Run workflow" buttons (right)
- Workflow steps as cards with step number, content, icons, tags
- White cards with subtle shadow, 16px padding, 24px margin between steps

## 7. Team (Dropdown, NOT Page)
Clicking "Team" opens dropdown menu overlay (does NOT navigate).

### Dropdown Contents
- Groups: Asset Management Team, Acquisitions Team, Legal & Compliance, Finance Team
- Direct Messages: Sarah Johnson, Michael Chen, Emma Davis, John Lee
- Actions: Create new group, Search people

### Styling
- Width: 280px, Max height: 400px (scrollable)
- White background, 8px rounded corners
- Slide-in animation from right
- Overlay backdrop (semi-transparent black)

## 8. Vault Pages (Secured/Collaboration/Archives)

### Level 1: Project List
Grid of project folders (3-4 cards per row):
- Folder icon, project name, file count + size, last updated, Share button

### Level 2: Inside Project
- Breadcrumb: "Vault / Project Name"
- Title: "Project Name" (32px semi-bold)
- Subtitle: "121 files • 328.91 MB"
- Share button (top right)

### Sections
1. **Create New Query**: Card with "Start a query from scratch", workflow suggestions
2. **Recent Queries**: List of queries with status, timestamp
3. **Project Files**: Table with search, create folder, upload, filters

## 9. Profile Dropdown
Trigger: Click user avatar or three dots at bottom of sidebar

### Menu Items
- User Info Section: Avatar + Name + Email
- Divider
- 👤 Account
- 🎨 Personalization
- 🔔 Notifications
- Divider
- 🚪 Log out

### Styling
- Width: 240px
- White background, 8px rounded corners
- Hover: light gray background
- Smooth slide-in animation

## 10. Account Page
- Page Title: "Account" (24px semi-bold)
- Section 1: Account Information (avatar, fields with change buttons)
- Section 2: Your Subscription (upgrade card)
- Section 3: System
- Section 4: Support
- Section 5: Session Management
- Section 6: Delete Account

## 11. Personalization Page
- Page Title: "Personalization" (24px semi-bold)
- Section 1: Introduce Yourself (textarea)
- Section 2: Location (toggle, device location display)
- Section 3: Memory (BETA tag, toggles for search library and saved memories)
- Section 4: Watchlists (Real Estate Markets, Properties, Tenants)

## 12. Notifications Page
- Page Title: "Email Notifications" (24px semi-bold)
- Deep Research (toggle ON)
- Asset Class Digest (toggle OFF)
- Market Digest (toggle OFF)

## Design System (KEEP EXACTLY AS-IS)

### Colors
- Primary: #2563eb (blue)
- Success: #22c55e (green)
- Warning: #f59e0b (yellow)
- Error: #ef4444 (red)
- Background: #ffffff (white) / #f9fafb (light gray)
- Text: #111827 (dark gray) / #6b7280 (medium gray)
- Border: #e5e7eb (light gray)

### Spacing
- 8px grid system throughout
- Card padding: 16-24px
- Section margins: 32-48px
- Button padding: 8px 16px
- Input padding: 8px 12px

### Borders & Corners
- Buttons: 6px rounded
- Cards: 8-12px rounded
- Inputs: 6px rounded
- Dropdowns: 8px rounded
- Badges: 4px rounded

### Shadows
- Cards: subtle (0 1px 3px rgba(0,0,0,0.1))
- Dropdowns: medium (0 4px 6px rgba(0,0,0,0.1))
- Modals: large (0 10px 15px rgba(0,0,0,0.1))

### Typography
- Font: Inter everywhere
- Line height: 1.5
- Letter spacing: normal
