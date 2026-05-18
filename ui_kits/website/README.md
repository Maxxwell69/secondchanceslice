# Second Chance Slice — Marketing Website UI Kit

A recreation of the Second Chance Slice marketing site as it should look, built against this design system. The original site is hosted in GoHighLevel (GHL) and was not available for direct inspection, so this kit is **brief-driven** — it should be reviewed against the live site and updated.

## Files
- `index.html` — assembles a click-through marketing-site experience
- `Header.jsx` — sticky header with logo lockup + nav + apply CTA
- `Hero.jsx` — big two-line headline + photo placeholder
- `Stats.jsx` — outcome numbers strip
- `ProgramTracks.jsx` — culinary + construction track cards
- `HowItWorks.jsx` — 4-step program flow
- `Testimonial.jsx` — graduate pull quote with attribution
- `HireBlock.jsx` — employer / community partner CTA section
- `DonateBlock.jsx` — "Sponsor a shift" donation prompt
- `Footer.jsx` — dark espresso footer with address, links, FSR lockup
- `ApplyModal.jsx` — apply-now dialog reachable from any "Apply" button

## Click-through behavior
- Click **Apply now** anywhere — opens `ApplyModal`
- Submit modal — flips to "Got it. We'll text you Tuesday's address." success state
- Click **Hire a graduate** — scrolls to `HireBlock`
- Click **Order a pie** in nav — toast: "Coming soon — order at the counter for now"

This kit is intentionally cosmetic; nothing posts to a server.
