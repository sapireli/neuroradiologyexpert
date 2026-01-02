# Repository Guidelines

## Project Structure & Module Organization
This is a Jekyll site rebuilt from a legacy WordPress scrape. Primary content lives at the repo root, with the scrape preserved under `neuroradiologyexpert.com/` for reference.
- Pages: `index.md`, `about-us/index.md`, `contact-us/index.md`, `frequently-asked-questions/index.md`, `our-services/index.md`.
- Services collection: `_services/*.md` (rendered via `_layouts/service.html`).
- Blog posts: `_posts/YYYY-MM-DD-slug.md` and `blog/index.md` for the listing.
- Layouts/includes/data: `_layouts/`, `_includes/`, `_data/`.
- Assets: `assets/css/main.css`, `assets/js/main.js`, and media under `wp-content/uploads/`.
- Legacy reference: `neuroradiologyexpert.com/wp-json/wp/v2/` for original page/post content.

## Build, Test, and Development Commands
- Install dependencies: `bundle install`.
- Local preview: `bundle exec jekyll serve --livereload`.
- Production build: `bundle exec jekyll build` (outputs to `_site/`).

## Coding Style & Naming Conventions
- Markdown-first: avoid raw HTML in `.md` unless necessary for embeds.
- Front matter: keep YAML keys lowercase; use 2-space indentation.
- Slugs and filenames: kebab-case (e.g., `forensic-neurology-services.md`).
- Posts: `YYYY-MM-DD-title.md` with title/description/author fields.
- Services: include `slug`, `order`, and `description` in front matter.

## Testing Guidelines
No automated tests. Validate with manual QA:
- Run `bundle exec jekyll serve` and check key pages on desktop + mobile widths.
- Verify images resolve from `wp-content/uploads/` and internal links use the new Jekyll paths.
- Spot-check SEO basics (title, meta description, H1 structure) on updated pages.

## Commit & Pull Request Guidelines
No established convention in git history. Use concise, imperative messages (e.g., “Refine services layout”). PRs should:
- Summarize pages/paths changed.
- Include before/after screenshots for visual updates.
- Note content parity checks against `neuroradiologyexpert.com/wp-json/wp/v2/` when applicable.

## SEO & Redirects
Preserve legacy URLs. Prefer adding `redirect_from` in front matter for any renamed paths and ensure canonical slugs match the original structure where possible.
