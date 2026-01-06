# Master Plan

## Goals
- Modern, mobile-first, SEO-friendly marketing site.
- Jekyll-based static build with clean content workflows.
- Preserve all existing pages, blog posts, and media with stable URLs and redirects where needed.
- Host on GitHub Pages without breaking legacy URLs.

## Current Site Inventory (from scrape)
- Core pages: `//`, `/about-us/`, `/contact-us/`, `/frequently-asked-questions/`.
- Services: `/our-services/` plus 6 service detail pages under `our-services/`.
- Blog: 25+ post slugs under `blog/` with `/` pages; additional archive/index pages exist under `blog/2020/`, `blog/2021/`, `blog/2024/`, `blog/2025/`.
- Media: migrated assets under `assets/images/uploads/`.

## Master Checklist
### 1) Discovery + Content Audit
- [x] Review current scrape and list primary content areas.
- [x] Deeper blog audit: scrape contains 25+ unique post slugs plus yearly/monthly archive pages.
- [ ] Confirm whether additional posts exist outside this scrape (WXR export, DB dump, or live site crawl).
- [x] Extract full page list (including nested pages) and confirm canonical slugs (`content_inventory.csv`).
- [ ] Build content map: old URL -> new Jekyll path.
- [ ] Identify reusable media and flag low-quality/outdated images for replacement.

### 2) Information Architecture + SEO Plan
- [ ] Define new sitemap (top-level nav, footer nav, support pages).
- [ ] Draft SEO keyword targets per page and map to titles/H1s/meta.
- [ ] Plan schema usage (Organization, Article, FAQ where applicable).
- [ ] Specify redirect strategy to preserve old URLs (no 404s for existing slugs).
- [x] Create a URL parity checklist: old URL -> new URL -> redirect rule (`url_parity.csv`).

### 3) Visual + UX Design
- [x] Establish design direction (typography, color system, grid, imagery).
- [x] Create responsive page templates: home, service detail, blog index, post, contact, FAQ.
- [x] Define component library (hero, CTA, stat blocks, cards, grid layouts).
- [x] Add interactive homepage impact counter for serviced cases.
- [x] Validate accessibility (contrast, focus, keyboard navigation).

### 4) Jekyll Architecture
- [x] Decide structure: `_layouts/`, `_includes/`, `_data/`, `_posts/`, `assets/`.
- [x] Create base layout and SEO partials (meta, OG, JSON-LD).
- [x] Configure collections for services and pages.
- [x] Set up GitHub Pages redirect strategy (use `jekyll-redirect-from` and/or redirect pages).
- [ ] Add build tooling (minified CSS, optional JS bundling if needed).

### 5) Content Migration
- [x] Convert service detail pages from HTML to Markdown (preserve headings and links).
- [x] Convert services index (legacy 410 page required new content).
- [x] Convert blog posts to `_posts/YYYY-MM-DD-slug.md` with front matter.
- [x] Migrate `wp-content/uploads/` into `assets/images/uploads/` and update image references.
- [x] Convert About page with full legacy content.
- [x] Convert FAQ page with full legacy content.
- [x] Convert Contact page with full legacy content.
- [ ] Audit internal links and fix to Jekyll paths across all pages.

### 6) QA + Performance
- [ ] Run link checks across site (internal + external).
- [ ] Verify mobile layouts and key CTAs.
- [ ] Check SEO basics (titles, descriptions, canonicals, schema).
- [x] Ensure Markdown files contain Markdown (no raw HTML in content body).
- [ ] Verify local images resolve and render correctly.
- [x] Confirm full content coverage for services (no missing sections after conversion).
- [ ] Optimize images (size, format, lazy loading).

### 7) Launch Readiness
- [ ] Create deployment plan (GitHub Pages, Netlify, or preferred host).
- [ ] Add analytics and cookie policy (if required).
- [ ] Confirm redirects list and final sitemap.xml/robots.txt.
- [ ] Run a pre-launch crawl to verify all legacy URLs return 200 or 301.

## Open Questions
- (Resolved) Hosting platform: GitHub Pages.
- Brand assets to keep vs. replace (logo, color palette, imagery)?
- Required integrations (forms, analytics, CRM)?
