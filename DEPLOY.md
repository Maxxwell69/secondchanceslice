# Deploying to Vercel via GitHub

This repo is a **static site** — no build step, no server, no Node.js required to deploy. The marketing site lives in `site/` and Vercel serves it directly.

## What's in the repo

```
secondchanceslice/
├── site/                    ← The deployable static site (Vercel serves this)
│   ├── index.html
│   ├── *.jsx                ← Component files, loaded via in-browser Babel
│   ├── styles.css
│   ├── colors_and_type.css
│   └── assets/              ← Logos + glyphs
│
├── ui_kits/website/         ← Design-system version of the same site (kept in sync, used in the design system tab)
├── preview/                 ← Design-system preview cards
├── assets/                  ← Master assets (logos, glyphs)
├── colors_and_type.css      ← Master design tokens
├── README.md                ← Brand bible (colors, type, voice)
├── SKILL.md                 ← Agent Skill manifest (for Claude Code)
├── vercel.json              ← Tells Vercel to serve from /site
└── .gitignore
```

> **Why two copies of the site?** `site/` is flat and self-contained so Vercel can host it. `ui_kits/website/` is the design-system version with paths pointed at the master `assets/` and `colors_and_type.css` so the design-system preview tab keeps working.
>
> When you change the marketing site, edit `site/` and copy changes back to `ui_kits/website/` (or vice versa). I can help keep them synced.

---

## Step 1 — Push this project to GitHub

If you've never pushed before, do it from your terminal (open Terminal on Mac, "Command Prompt" or "PowerShell" on Windows):

```bash
# inside the unzipped project folder
git init
git add .
git commit -m "Initial design system + deployable marketing site"

# Connect to your repo
git branch -M main
git remote add origin https://github.com/Maxxwell69/secondchanceslice.git
git push -u origin main
```

If the repo already has files (it shouldn't — it's currently empty), force-push: `git push -u origin main --force`.

---

## Step 2 — Connect Vercel

1. Go to **[vercel.com/new](https://vercel.com/new)** and sign in (use the GitHub option for the cleanest flow).
2. Click **"Import"** next to `Maxxwell69/secondchanceslice` in the repo list.
3. Vercel will detect the project. **Leave all defaults**:
   - Framework Preset: **Other** (or "No Framework")
   - Build Command: *blank*
   - Output Directory: **`site`** (already set in `vercel.json`)
   - Install Command: *blank*
4. Click **Deploy**.
5. ~20 seconds later you'll have a URL like `secondchanceslice.vercel.app`.

That's it. Every future `git push` re-deploys automatically.

---

## Step 3 — Custom domain (optional)

In your Vercel project settings → **Domains**, add a custom domain. Common picks:
- `secondchanceslice.org`
- `secondchanceslice.app`
- `apply.secondchanceslice.org`

Vercel will give you DNS records to point at it from your registrar (GoDaddy, Namecheap, Squarespace Domains, etc).

---

## Want to use Railway instead?

Railway works too but needs one extra file because it expects a server. Add `package.json` to the project root:

```json
{
  "name": "secondchanceslice-site",
  "private": true,
  "scripts": {
    "start": "npx --yes serve site -l 8080"
  }
}
```

Then in Railway: New Project → Deploy from GitHub repo. Railway picks up the `start` script and runs `serve` on the `site/` directory. **Vercel is still the better fit** for pure static HTML — only use Railway if you later need a backend or scheduled jobs.

---

## Important reminder

This is the **branded design preview**, not your production application. It looks like the Second Chance Slice site should look, but:

- Form submissions don't actually send anywhere
- "Order a pie" toasts a message instead of opening a cart
- "Sponsor a shift" doesn't process payment
- All photography is gradient placeholders

To make it real, a developer would need to wire forms to email/CRM, hook up Stripe (or your existing GHL workflows) for donations, and swap in real photos. Your existing GoHighLevel site continues to serve as the live production site until you decide to switch.

---

## Questions? Hand off this folder to any developer

This README + the master `README.md` + `SKILL.md` together describe the full brand system. Any web developer can take this folder and build out the real backend in a day or two.
