# Open Power Data Website - Design Guidelines

## Design Approach

**Selected Framework:** Material Design System (Data-focused variant)

**Justification:** This research data portal requires clear information hierarchy, excellent data table patterns, and robust component structure for handling complex nested datasets. Material Design provides proven patterns for data-dense applications while maintaining professional aesthetics suitable for academic/research contexts.

**Key Design Principles:**
- Data Accessibility First: Every interaction optimized for quick dataset discovery and access
- Clear Visual Hierarchy: Multi-level navigation (Country → Category → Dataset) must be immediately scannable
- Professional Credibility: Design conveys research legitimacy and data reliability
- Progressive Disclosure: Complex information revealed through intentional interaction patterns

## Typography System

**Font Families:**
- Primary: Inter (via Google Fonts) - Excellent readability for data-heavy content
- Monospace: JetBrains Mono - For dataset identifiers, code snippets, and technical metadata

**Hierarchy:**
- H1 (Hero): text-5xl, font-bold, leading-tight
- H2 (Section Headers): text-4xl, font-semibold
- H3 (Country/Category Names): text-2xl, font-semibold
- H4 (Dataset Titles): text-xl, font-medium
- Body: text-base, leading-relaxed
- Small/Meta: text-sm, font-normal
- Caption/Labels: text-xs, uppercase tracking-wide

## Layout System

**Spacing Primitives:** Consistently use Tailwind units of **2, 4, 8, 12, 16** (e.g., p-4, gap-8, space-y-12)

**Container Strategy:**
- Max-width: max-w-7xl for main content areas
- Page padding: px-6 md:px-12 lg:px-16
- Section spacing: py-16 md:py-24 (between major sections)
- Component spacing: space-y-8 within sections, gap-6 for grids

**Grid Systems:**
- Country Gallery: grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6
- Dataset Icons: grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4
- Latest Data Row: grid-cols-1 md:grid-cols-3 gap-6

## Component Library

### Navigation
**Top Banner:** Fixed header with logo left, navigation center-right
- Logo area: h-16 flex items-center
- Nav links: inline-flex gap-8, text-base font-medium
- Active state: underline decoration-2 underline-offset-8
- Mobile: Hamburger menu triggering slide-out drawer

### Homepage Components

**Hero Section:**
- Height: min-h-[70vh] with centered content
- Layout: Two-column split (60/40) - left: headline + CTA, right: visualization/map imagery
- Headline structure: Overline (text-sm uppercase tracking-wide) + Main (text-5xl font-bold) + Subhead (text-xl)
- CTA buttons: Blurred background (backdrop-blur-lg bg-white/20), px-8 py-4 rounded-lg text-lg font-semibold

**Introduction Section:**
- Single column max-w-4xl centered
- Content: Research group badge + paragraph text + key statistics in 3-column grid

**Latest Data Row:**
- Three dataset preview cards in horizontal layout
- Card structure: Icon/visual (h-48), Title (text-xl), Description (2 lines), Metadata badges, Link arrow
- Hover: Subtle elevation lift (transform scale)

**Country Gallery:**
- Masonry-style grid with country cards
- Card: Flag/map thumbnail (h-64), Country name (text-2xl), Dataset count badge, "Explore →" link
- 6-8 countries displayed, "View All Countries →" link at bottom

### Data Explore/Gallery Page

**Accordion Structure:**
- Country-level accordions with full-width trigger bars
- Trigger: Country name (text-2xl) + dataset count + chevron icon, py-6 px-8
- Expanded state reveals category sections with gap-8

**Category Sections:**
- Category header: text-xl font-semibold mb-4 with icon
- Dataset grid: Icon view cards in responsive grid
- Dataset card: 200x200px icon area, title below, metadata tags, download indicator

### Dataset Page Layout

**Page Structure (Vertical flow):**

1. **Header Banner:** Full-width with dataset title (text-4xl), breadcrumb navigation, download button (prominent, top-right)

2. **Metadata Bar:** Horizontal info strip with key details (Updated date, Format, Size, License) in 4-column grid

3. **Two-Column Layout (60/40 split):**
   - **Left Column:** Data preview table (scrollable, max-h-96) + methodology accordion
   - **Right Column:** Sticky sidebar with About card, Quick stats, Related datasets

4. **Data Request Form Section:** Full-width card with form fields (2-column on desktop), centered max-w-4xl

**Data Table Specifications:**
- Striped rows with border-b
- Header: sticky top-0, font-semibold, uppercase text-xs
- Cells: py-3 px-4, font-mono for numeric values
- Sortable columns with arrow indicators

### About & Contact Pages

**About Page:**
- Hero banner with research group image (h-80)
- Mission statement in max-w-3xl centered
- Team grid: 3-4 columns, photo cards with name/role
- Publications/Timeline section with vertical timeline component

**Contact Page:**
- Two-column layout (50/50):
  - Left: Contact form (stacked fields with gap-6)
  - Right: Contact information card + office location map placeholder
- Form fields: Full-width inputs with labels above, rounded-lg borders

## Interaction Patterns

**Accordions:**
- Smooth height transitions (duration-300)
- Rotate chevron 180deg on expand
- Only one country expanded at a time (auto-collapse others)

**Cards:**
- Base: Subtle border, rounded-xl, p-6
- Hover: Border emphasis + shadow-lg
- Clickable cards: cursor-pointer with entire card as click target

**Buttons:**
- Primary: px-6 py-3 rounded-lg font-semibold
- Secondary: Similar size, lighter treatment
- Icon buttons: p-2 rounded-md
- Blurred buttons on images: backdrop-blur-md with semi-transparent background

**Badges/Tags:**
- Rounded-full px-3 py-1 text-xs font-medium
- Dataset type badges (CSV, JSON, API)
- Metadata tags (Country, Category, Updated)

## Images

**Hero Section:**
Include a large hero image (70vh) featuring abstract data visualization, power grid network map, or global energy infrastructure. Image should convey technological sophistication and global data scope. Position: Right side of split layout or full-width with overlay gradient.

**Country Gallery Cards:**
Each country card includes representative imagery - satellite view of power infrastructure, national map with data points, or iconic energy landmarks. Size: 16:9 aspect ratio, fills card top portion.

**About Page:**
Team photo or research facility image in hero banner (h-80), maintaining professional academic aesthetic.

**Dataset Icons:**
Use icon library (Material Icons) for dataset type indicators - avoid custom imagery. Icons represent data categories: demand (trending_up), generation (bolt), capacity (battery_charging_full).

This comprehensive framework creates a professional, data-focused experience that prioritizes information accessibility while maintaining visual interest through thoughtful layout and imagery.