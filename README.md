# Second Chance Slice — Design System

> A workforce development program of **First Stop Recovery** (nonprofit), serving justice-involved individuals in Philadelphia through vocational training in culinary arts (pizza making) and construction, plus employment pathways. Operated under the **Pizzaologist** umbrella.

---

## About the brand

**Second Chance Slice** is a neighborhood-rooted workforce program. The brand sits at an unusual intersection: a working pizzeria *and* a re-entry program. The design system has to feel like both — like a place you'd actually want to grab a slice from on a Tuesday night, and also like a serious second-chance employer that respects the dignity of the people it serves.

The tone is **hopeful, real, and empowering** — never clinical, never corporate, never saviorish. It's not "we help people." It's "we work alongside our team."

### Audience

- **Primary**: Justice-involved individuals in Philadelphia looking for training and employment
- **Secondary**: Community partners, donors, employers hiring graduates, returning customers of the pizzeria
- **Tertiary**: Press, City of Philadelphia partners, peer nonprofits

### Parent / sibling brands

- **First Stop Recovery** — parent nonprofit (the teal accent `#1D9E75` is the visual link)
- **Pizzaologist** — the consumer-facing pizza brand the program operates under

---

## Sources used to build this system

| Source | Status |
|---|---|
| Local codebase: `secondchanceslice/` | **Empty / not mounted** at build time — design system built from brief alone |
| GitHub: [Maxxwell69/secondchanceslice](https://github.com/Maxxwell69/secondchanceslice) | **Empty repo** — no default branch contents at build time |
| Website builder | GoHighLevel (GHL) — not directly inspectable |
| Brand brief | Provided in the kickoff message (colors, tone, audience, copy guidance) |

> ⚠️ **Caveat for the reader:** If you have access to the live site or the GitHub repo at a later commit, browse it and update this system. The current version is brief-driven, not screenshot-driven, and should be treated as a *strong starting point* rather than a faithful recreation.

---

## Index

| File | What it is |
|---|---|
| `README.md` | You are here — brand context, content & visual foundations, iconography |
| `colors_and_type.css` | Token file — color, type, spacing, radii, shadow CSS variables |
| `SKILL.md` | Agent Skill manifest — drop this folder into Claude Code to reuse |
| `fonts/` | Web font files (currently linked from Google Fonts via CDN; see Type) |
| `assets/` | Logos, illustrations, photography placeholders, icon sprites |
| `preview/` | Small HTML cards that populate the Design System tab |
| `ui_kits/website/` | UI kit for the Second Chance Slice marketing site (built in GHL) — see [`ui_kits/website/README.md`](ui_kits/website/README.md) |
| `assets/logo/` | Placeholder wordmark + mark SVGs |
| `assets/glyphs/` | Hand-cut brand glyphs (slice, apron, hardhat, paycheck, key) |

---

## CONTENT FUNDAMENTALS

### Voice in one sentence
A neighbor who's been doing the work for years — direct, warm, no jargon, no platitudes.

### Point of view & pronouns
- **"We"** for the program / kitchen / crew — "We train. We hire. We pay you while you learn."
- **"You"** for the reader who might apply, hire a graduate, or order a pizza.
- **Never "they"** for program participants. Participants are *the crew*, *the team*, *our cooks*, *our apprentices* — named, never described as a category.
- Avoid "second chance" *as a noun for a person*. Things get second chances. People earn paychecks, certifications, and a Tuesday-night shift.

### Casing
- Headlines: **Sentence case.** ("Pizza pays the bills. The program pays it forward.")
- Buttons: **Sentence case**, short verbs. ("Apply now", "Order a pie", "Hire a grad")
- Eyebrows / section labels: **ALL CAPS, letter-spaced 0.08em**, short — "OUR PROGRAM", "WHAT YOU LEARN"
- Never Title Case Every Word — feels corporate.

### Word-level rules
- ✅ **kitchen, crew, apprentice, graduate, cook, baker, framer, partner, neighbor, paycheck, shift, certification, ServSafe, OSHA-10**
- ⚠️ Use carefully: *re-entry, returning citizen, formerly incarcerated* — preferred over "ex-offender", "ex-con", or "criminal". When in doubt, **just say what the person does**: "Marcus is a pizza cook." "Dee is a framer."
- ❌ **Avoid**: *empower, transform, journey, holistic, stakeholder, leverage, beneficiary, at-risk, troubled, underserved, broken*. Also avoid clinical recovery-speak unless directly quoting a partner.

### Emoji
- **No emoji in headlines, buttons, or nav.**
- A 🍕 is *occasionally* fine in social copy, an Instagram caption, or an internal-feeling banner — never in product UI.
- Prefer real icons (see Iconography) and real photography.

### Numbers & specifics
The brand earns trust with **specifics**, not adjectives. Always reach for a number, a name, or a date.

> **Bad:** "Our graduates find meaningful employment."
> **Good:** "47 graduates placed in 2024. Average starting wage: $19/hr."

> **Bad:** "We offer extensive training."
> **Good:** "16-week paid program. ServSafe and OSHA-10 included. You leave with both certifications and 6 references."

### Sample copy

**Hero (homepage):**
> Pizza pays the bills.
> The program pays it forward.
>
> Second Chance Slice is a 16-week paid training program for Philadelphians coming home. Learn the kitchen. Learn the trades. Leave with a paycheck, two certifications, and a job.

**Apply CTA block:**
> If you've been home for less than a year, you qualify.
> No GED needed. No interview gauntlet. Show up Tuesday at 10am — 4501 Frankford Ave.

**Partner / hire-a-grad block:**
> Need a line cook, a framer, or a drywall apprentice?
> Our graduates show up. They've already passed a background check we know cold — because we placed them there.

**Donate block (avoid the savior trap):**
> Don't sponsor a person. Sponsor a shift.
> $40 covers an apprentice's wage for one Friday night. $640 covers a full 16-week run.

### Headline lengths
- Hero: ≤ 12 words, two lines, often a pair of parallel statements separated by a period
- Section heads: ≤ 8 words
- Card titles: ≤ 5 words
- Buttons: 2–4 words

### Punctuation
- **Periods at the end of headlines** are fine and on-brand — they sound like a statement, not a slogan.
- Em dashes — used freely, like this — for warmth.
- Oxford commas. Always.

---

## VISUAL FOUNDATIONS

### Overall vibe
Imagine a corner pizza shop in Kensington with the lights on at 9pm. Warm cream walls, a pizza-red awning, a brass-handled door, a chalkboard with the day's pies in espresso-brown marker, and a tiny teal sticker on the register from the parent nonprofit. **That's the design system.**

It is not Apple, it is not a SaaS dashboard, it is not a slick DTC restaurant brand. It's hand-built but professional. Approachable, not childish.

### Color

| Token | Hex | Use |
|---|---|---|
| `--pizza-red` | `#D85A30` | Primary CTA, key headlines emphasis, awning red. Use confidently but not excessively. |
| `--crust-gold` | `#EF9F27` | Secondary highlights, hover states for red CTA, banners, "new" tags |
| `--cream` | `#FAEEDA` | Alternating page background. Warm, never beige-clinical. |
| `--espresso` | `#4A1B0C` | All body text. **Never use pure black.** |
| `--teal-fsr` | `#1D9E75` | The First Stop Recovery accent — used **sparingly**: a small flag on partnership mentions, the link color in body copy, the success state |
| `--paper` | `#FFFFFF` | Alternating section background |
| `--char` | `#1A0E08` | Deepest brown, used for the bottom-strip footer only |

**Background rhythm:** Alternate sections strictly between `--paper` and `--cream`. Never stack two of the same in a row. The cream is what makes the brand feel like a *place*, not a website.

### Typography

| Role | Family | Notes |
|---|---|---|
| Display / headlines | **Oswald** | Bold condensed grotesque that **echoes the wordmark in the actual Second Chance Slice + Pizzaologists logos**. Use weights 600–700, ALL CAPS, tight tracking. |
| Body | **Inter** | Workhorse readable sans. 400 regular, 600 semibold, 700 for emphasis. |
| Story / quote | **Newsreader** | Warm serif used only for pull quotes and longer testimonials. |
| Mono | **JetBrains Mono** | Receipts, schedules, code-like elements (e.g., "16 weeks · 4 days/wk · $15/hr"). |

> 🔁 **Font substitution flag (less critical now):** Oswald is the closest Google Fonts match to the logo's condensed sans. If a specific licensed face (e.g. Anton, Barlow Condensed, or a custom cut) was used for the wordmark, drop it in `fonts/` and swap the `--font-display` family. Inter, Newsreader, and JetBrains Mono are workhorse substitutes — confirm or replace.

**Headlines are ALL CAPS** in this system because the logo wordmark is all caps. Section eyebrows stay all caps + letter-spaced. Body copy is mixed case.

**Type scale** (1.250 / major third, on a 16px base):
- `display`: 64 / 1.05 / -0.015em
- `h1`: 48 / 1.1 / -0.01em
- `h2`: 36 / 1.15
- `h3`: 28 / 1.2
- `h4`: 22 / 1.3
- `body`: 17 / 1.55  (deliberately slightly larger than the web default — accessibility for the audience)
- `small`: 14 / 1.45
- `eyebrow`: 13 / 1 / +0.08em / uppercase / semibold

### Spacing
8-pt soft grid with two larger "section" steps:
- `space-1`: 4px
- `space-2`: 8px
- `space-3`: 12px
- `space-4`: 16px
- `space-5`: 24px
- `space-6`: 32px
- `space-7`: 48px
- `space-8`: 64px
- `space-9`: 96px (section padding-y on desktop)
- `space-10`: 128px (hero padding-y)

Generous whitespace is non-negotiable. A cream section with a single big sentence and one button is more on-brand than three columns of content.

### Corner radii
- `radius-sm`: 6px — chips, tags, eyebrows
- `radius-md`: 12px — buttons, inputs
- `radius-lg`: 20px — cards
- `radius-xl`: 28px — feature cards, hero media
- `radius-full`: 999px — pills, avatars

The brand uses **rounded but not soft-and-bouncy** corners — think the curve on a hand-painted shop sign, not a kids' app.

### Backgrounds, imagery, texture
- **Photography is the dominant motif.** Warm-toned, slightly grainy photos of: pizzas being made, hands working dough, the kitchen at service, framers on a job site, graduates holding certificates, crew portraits looking at the camera (not staged).
- **No clinical imagery.** No stock photos of generic "diverse teams in conference rooms".
- Photos lean warm (golden hour / tungsten kitchen light). Avoid blue casts and cool desaturated "documentary" looks.
- **Subtle paper / kraft texture overlay** (5–8% opacity) is on-brand on cream sections — like a pizza box.
- **No gradient backgrounds.** No glassmorphism. No mesh blobs.
- A repeating subtle pattern of small pizza-slice silhouettes is allowed as a hero **accent** (low contrast, behind a single section heading) — not as wallpaper.

### Buttons
- **Primary**: `--pizza-red` background, white text, `radius-md`, 14px padding-y / 24px padding-x, 600 weight, sentence case. Hover: shifts to `--crust-gold`. Active: shrinks to 0.97 scale + ~6% darker.
- **Secondary**: espresso outline (1.5px), espresso text, cream-or-white background. Hover: cream fill. Active: shrinks to 0.97.
- **Ghost / link button**: teal text, no chrome, underline on hover.
- **Disabled**: cream background, espresso 40% opacity, no pointer.

### Hover & press states
- **Hover** on interactive cards: lifts 2px (`translateY(-2px)`), shadow deepens, no color change.
- **Hover** on links in body: underline thickens from 1px to 2px, color stays espresso (or teal if it's a teal link).
- **Press**: scale `0.97` + 80ms ease-out. No bounce.

### Borders & dividers
- Default border: `1px solid` of espresso at 12% opacity (use `color-mix`).
- Strong border: `1.5px solid` of espresso for outlined buttons / focus rings.
- Section dividers: a 1px line in espresso/12% — **or** a stylized 24px pizza-slice silhouette in `--crust-gold` centered between sections (used sparingly).

### Shadows
- `shadow-sm`: `0 1px 2px rgba(74,27,12,0.06)` — chips, inputs at rest
- `shadow-md`: `0 4px 14px rgba(74,27,12,0.08)` — cards
- `shadow-lg`: `0 12px 40px rgba(74,27,12,0.12)` — modals, focus cards
- `shadow-press`: `inset 0 1px 0 rgba(74,27,12,0.08)` — pressed buttons

Shadows are **espresso-tinted**, never gray. This keeps depth warm.

### Animation
- Default transition: `180ms cubic-bezier(0.2, 0.7, 0.2, 1)` — a soft ease-out that feels intentional.
- Page entries: a 12px upward fade-in, 320ms, staggered 60ms.
- **No bounces.** No spring physics. Nothing parallax-y.
- Avoid loading skeletons; prefer "Loading the kitchen…" style copy on slow states.

### Transparency & blur
- Used **only** on the sticky header — cream/80% with a 12px backdrop blur over scrolled content.
- No glassmorphism cards. No translucent overlays on photos.

### Cards
- Cream or white background, `radius-lg`, `shadow-md`, 24–32px inner padding.
- Top accent is allowed as **a 4px solid red line at the top edge** (not a left border — the left-colored-border-card is a forbidden tropes).
- Photo cards: photo bleeds to the top + side edges, espresso text block below with 24px padding.

### Layout rules
- **Max content width**: 1200px
- **Hero gutter**: 80px on desktop, 24px on mobile
- **Sticky header**: 72px tall, cream/80% with backdrop-blur, espresso text
- **Footer**: full-width `--char` (deep brown), cream text, generous padding, no rainbow of links

### Imagery color cast
Warm, golden, slightly grainy. Never desaturated. Never blue-cast. Never harsh studio lighting. The reference is *Bon Appétit kitchen photography* meets *Humans of New York portraiture*.

---

## ICONOGRAPHY

The logo establishes the visual vocabulary: **a slice of pepperoni pizza inside a sunburst / radiating-ray frame**, with the parent brand Pizzaologists adding **scientific instruments** (compass, ruler, protractor, math notation).

### Real brand assets (provided)
- `assets/logo/secondchanceslice.png` — full vertical lockup (slice + sunburst + wordmark + tagline "RISE. TRAIN. THRIVE.")
- `assets/logo/secondchanceslice-transparent.png` — same, with the white background knocked out
- `assets/logo/secondchanceslice-mark.png` — slice + sunburst only, transparent (for headers / favicons)
- `assets/logo/pizzaologists.png` — parent brand: whole pizza + compass/protractor + "PIZZAOLOGISTS / CRAFTED BY SCIENCE. PERFECTED BY PASSION."
- `assets/logo/pizzaologists-transparent.png` — same, transparent

### Icon system
- **Library**: [Lucide](https://lucide.dev) icons, loaded from CDN.
- **Stroke**: 2px (matches the heavier weight of the brand logo).
- **Size scale**: 16px (inline with body), 20px (buttons), 24px (nav), 32px (feature blocks).
- **Color**: inherits text color. Espresso by default; pizza-red when paired with red emphasis; teal for partner / success.

> 🔁 **Substitution flag**: Lucide is the closest CDN match. The brand has its own iconographic vocabulary (math + cooking instruments per the Pizzaologists mark) — if you have or want a **custom icon set** in that vein, send it and we'll replace the Lucide layer.

### Custom brand glyphs
A small set of brand-specific icons sits in `assets/glyphs/` as placeholders — they're plain hand-cut SVGs that work in the same single-weight 2px stroke as the Lucide set:
- `slice.svg` — simplified pizza slice (matches the hero mark)
- `hardhat.svg` — construction track
- `apron.svg` — culinary track
- `paycheck.svg` — "you get paid to learn"
- `key.svg` — re-entry / housing partner mark

If you want any of these redrawn in the **Pizzaologists "scientific-instrument" style** (rulers, protractors, π/4 notation), say the word.

### Emoji
- **Not used in product UI, marketing site, or printed materials.**
- One exception: a single 🍕 in Instagram captions is fine. That's it.

### Unicode characters as icons
- Never. (Use real SVGs / PNGs.)

### Logos — usage
- On **cream** or **paper** backgrounds: use `secondchanceslice-transparent.png`.
- On **char** (deep brown) backgrounds: same file works; the red + gold pop against dark.
- **Header / nav**: use `secondchanceslice-mark.png` (slice + sunburst only) at 48–56px tall to stay legible.
- **Minimum size**: 96px wide for the full lockup; 32px for the mark-only.
- **Clear space**: maintain padding equal to the gold crust-arc on all sides.
- **Never** recolor the slice mark, never stretch, never place on a low-contrast warm-orange photo — the red disappears.

---

## Open questions for the brand owner

1. ✅ **Logos received** (PNG — we'd still love vector / SVG versions if you have them, for crisp rendering at any size).
2. Are **Oswald + Inter** acceptable, or do you have a licensed brand font (the logo wordmark may use a specific cut)?
3. Is **Lucide** acceptable for the general icon system, or do you want us to draw a custom set in the Pizzaologists "scientific-instrument" style?
4. Can you share **3–6 production photographs** (kitchen, crew, jobsite, graduation, exterior of the shop) so we can replace the placeholders?
5. Do you want a separate visual treatment for the **First Stop Recovery** lockup, or always co-brand?
6. Are the outcome numbers in the stats strip directionally right, or should we wait on real figures before publishing?

---

Want to expand or correct this system? See [GitHub: Maxxwell69/secondchanceslice](https://github.com/Maxxwell69/secondchanceslice) for the upstream repo, and add real source materials there so the next pass can be code-faithful.
