---
name: second-chance-slice-design
description: Use this skill to generate well-branded interfaces and assets for Second Chance Slice (a workforce-development pizza program of First Stop Recovery in Philadelphia), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files (`colors_and_type.css`, `assets/`, `preview/`, `ui_kits/`).

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

Key guardrails (do not skip):

- **Tone**: hopeful, real, empowering — not clinical, not corporate, not saviorish. Use specifics (numbers, names, dates) over adjectives.
- **Colors**: pizza-red `#D85A30` (primary CTA only — use confidently but not constantly), crust-gold `#EF9F27` (secondary/hover), cream `#FAEEDA` (alternating section bg), espresso `#4A1B0C` (all body text — never pure black), teal `#1D9E75` (sparingly — links and First Stop Recovery accents only).
- **Backgrounds**: strictly alternate paper white and cream — never two same-color sections in a row. No gradients, no glassmorphism, no mesh blobs.
- **Type**: Bricolage Grotesque (display), Public Sans (body), Newsreader (pull quotes), JetBrains Mono (specs). Loaded from Google Fonts as flagged substitutes — confirm with brand owner.
- **Icons**: Lucide via CDN, 1.75px stroke. Flagged substitution.
- **Emoji**: not used in product UI, marketing, or print.
- **Headlines**: sentence case, often paired with a period. Buttons sentence case, 2–4 words. Section eyebrows ALL CAPS letter-spaced.
- **People language**: "the crew", "our cooks", "apprentices", "graduates" — never "they" or "beneficiaries". Avoid "ex-offender", "at-risk", "transform", "journey", "empower".
- **Photography**: warm-toned, slightly grainy, golden-hour kitchen + jobsite + portraits. Never blue-cast or clinical stock.
- **Cards**: top-edge 4px red accent allowed; left-colored-border cards are forbidden.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions (audience, surface, format, tone within the spectrum), and act as an expert designer who outputs HTML artifacts *or* production code, depending on the need.

Useful files in this skill:
- `README.md` — full brand bible
- `colors_and_type.css` — drop-in CSS tokens + semantic styles + buttons + cards
- `preview/` — small HTML cards demonstrating each token cluster
- `ui_kits/website/` — recreation of the marketing site, with reusable JSX components
- `assets/` — logos, glyphs, icon notes
