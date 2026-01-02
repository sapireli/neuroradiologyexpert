# Side Quest: Design Overhaul Tracker

## Mission
Act as a master web designer: intelligently lay out and refine all content across the site, enhance readability and SEO, and design every element so there are no unstyled text blocks. Update navigation and visual system, fixing mismatched colors (e.g., the teal footer bar).

## Approach (Baseline Standard for Every Page)
- Segment long content into intentional sections with clear headings and layout patterns.
- Pair content with designed components (cards, grids, checklists, split layouts).
- Use curated imagery only where it supports the narrative; avoid random or excessive images.
- Keep copy concise, improve flow, and preserve all meaning/context.
- Ensure every page reads like a designed experience, not a raw text dump.

## Scope Pages
- Home
- Services (index + each service detail page)
- About
- FAQ
- Blog (index + posts)
- Contact

## Polish Pass (Current) To-Do
### Global
- [x] Normalize container widths so hero, cards, and body content align across every page.
- [x] Reduce density with better rhythm (heading spacing, paragraph spacing, list spacing).
- [x] Unify card, shadow, and border styles across layouts (home, services, posts, FAQ).
- [x] Standardize image treatment (consistent aspect ratios, max heights, and captions).
- [x] Review navigation, header bar, and footer for visual balance and spacing.
- [x] Add overflow-safe wrapping and equal-height alignment for grids and cards.
- [x] Add responsive table styling for blog content.

### Home
- [x] Verify full legacy content parity and fold missing copy into designed sections.
- [x] Redesign the “Clinical Focus Areas” and “Modalities” content into a clean split or card layout.
- [x] Tighten hero + counter section spacing and improve hierarchy for faster scan.
- [x] Curate gallery and align imagery to narrative (remove or replace weak assets).

### Services Index
- [x] Ensure all services are visible above the fold on desktop.
- [x] Redesign list to avoid truncation and emphasize service differentiators.
- [x] Add a strong “How to choose a service” module or CTA.

### Service Detail Pages (All)
- [x] Restructure each page into consistent modules (Overview, Who we serve, Deliverables, Process, FAQ, CTA).
- [x] Reduce oversized imagery and align each image to its related section.
- [x] Break long paragraphs into bullets, callouts, or cards for scanability.
- [x] Add cross-links to related services and contact CTA at the end.
- [x] Forensic Neuropsychology: reorganized services into bullet-driven cards and added scan-friendly callouts.

### About
- [x] Replace the current long-form wall of text with designed sections (mission, leadership, clinical team, values, credibility).
- [x] Convert team bios into a structured grid with consistent headshots and contact links.
- [ ] Curate imagery and remove redundant or low-value photos.

### FAQ
- [x] Group questions by theme with section headers.
- [x] Improve accordion styling and add a contact CTA for unanswered questions.

### Blog
- [x] Improve blog index cards (visual hierarchy, excerpt consistency, optional featured row).
- [x] Clean up all posts (spacing, headings, broken inline links, stray “Table of Contents” text).
- [x] Add post-level CTA blocks tying back to relevant services.
- [x] Repair Table of Contents anchors across all posts.
- [x] Convert scraped inline tables into readable markdown tables.

### Contact + Misc
- [x] Redesign contact page into a two-column layout with clear contact card and expectations.
- [x] Polish the team member profile page with consistent styling.
- [x] Refresh the 404 page with a cleaner layout and stronger CTAs.

## Checklist
### Global Design System
- [x] Redefine color palette and background system (remove mismatched teal footer bar).
- [x] Update typography scale and spacing rhythm for readability.
- [x] Establish component library (hero, cards, sections, stats, quote-style blocks).
- [x] Refine navigation structure and hierarchy.
- [x] Ensure consistent buttons, links, and CTAs across pages.

### Home
- [x] Recompose the hero with stronger value prop and proof points.
- [x] Design a structured services preview section.
- [x] Add a “process” or “how we work” section.
- [x] Add credibility sections (capabilities + impact).
- [x] Ensure SEO-friendly H1 + logical H2 structure.
- [x] Re-import missing legacy homepage copy and gallery content.

### Services (Index)
- [x] Create services overview grid with clear categories.
- [x] Add a discovery/CTA block tailored for legal vs clinical audiences.
- [x] Improve content scannability with bullets and subheads.
- [x] Draft modular index content (legacy page returned 410 in scrape).
- [x] Redesign layout with image cards and clearer service-line framing.

### Services (Detail Pages)
- [x] Forensic Neuroradiology: re-imported full legacy content + modular layout.
- [x] Forensic Neuropsychology: re-imported full legacy content + modular layout.
- [x] Forensic Neurology: re-imported full legacy content + modular layout.
- [x] Clinical Neuroradiology Consulting: re-imported full legacy content + modular layout.
- [x] Research & Clinical Trial Consulting: re-imported full legacy content + modular layout.
- [x] Radiology Business Consulting: re-imported full legacy content + modular layout.
- [x] Add redesigned service hero + highlight blocks for stronger visual hierarchy.

### Content Parity Checks (Legacy vs Jekyll)
- [x] Services index and detail pages.
- [x] About page.
- [x] FAQ page.
- [x] Blog index and posts.
- [x] Contact page.

### About
- [x] Create a structured narrative (mission, team, values, credentials).
- [x] Add a leadership/team module with readable profiles.
- [x] Improve credibility section (certifications, affiliations, experience).

### FAQ
- [x] Add intro text and structured Q&A layout.

### Blog
- [x] Redesign blog index for readability and discovery.
- [x] Enhance post layout with clearer navigation cues.

### Contact
- [x] Redesign contact layout (primary CTA, methods, expectations).
- [x] Add trust/support notes (response time, consultations).

## QA
- [ ] Verify all pages have clean hierarchy and visual spacing.
- [ ] Validate SEO structure and meta summaries.
- [ ] Review mobile layouts for each page.
- [ ] Remove or redesign any leftover legacy elements that look out of place.
- [ ] Resolve Jekyll build error writing `404.html` (EPERM).
