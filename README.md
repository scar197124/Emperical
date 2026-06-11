# Emperical — Tree of Life Edition

GitHub-ready static site package.

## Files
- `index.html` — Current Home / latest edition
- `archive.html` — Edition vault
- `categories.html` — Simplified category branches
- `location.html` — Story map by location
- `about.html` — About page
- `emperical-recovered-stories.json` — Recovered story vault data
- `assets/tree-of-life-header-connected-single.png` — Header image

## Current build
- Latest homepage edition: June 10, 2026
- Total story vault: 101 stories
- Ticker: latest 10 homepage highlights
- Source fields preserved

## Mobile System v5 correct section flow
- Archive mobile: editions remain the archive; tap an edition to see stories from that update.
- Categories mobile: categories remain the entry point; tap a category to see stories in that branch.
- Location mobile: locations remain the entry point; tap a location to see stories from that place.
- Story cards use Home-style Open/Close/Next Story controls.
- Desktop remains the full three-card system.
- Build marker: mobile-system-v5-correct-section-flow.

## Mobile header image
- Added a mobile-only header image: `assets/emperical-mobile-header-tree-earth-human-ai.png`.
- Desktop keeps `assets/tree-of-life-header-connected-single.png`.
- Mobile swaps the header artwork to the new Earth + humanity + AI + Tree of Life image.
- Mobile nav and ticker stay outside the image.
- Build marker: mobile-system-v5-mobile-header-image.

## Mobile System v5 section flow cleanup
- Archive mobile clearly shows: 1 choose an edition/update, 2 open a story from that selected edition.
- Categories mobile clearly shows: 1 choose a category, 2 open a story from that selected category.
- Location mobile clearly shows: 1 choose a location, 2 open a story from that selected location.
- Selector cards remain meaningful; detail card stays hidden on mobile; story cards use Open/Close/Next.
- Build marker: mobile-system-v5-section-flow-cleanup.

## Mobile header wordmark visibility fix
- Kept the section-flow cleanup exactly as-is.
- Added a real mobile header image element instead of relying only on CSS image replacement.
- Disabled old desktop header overlay lines on mobile so the EMPERICAL wordmark remains visible.
- Desktop still uses the original wide header.
- Build marker: mobile-header-wordmark-visible-section-flow-cleanup.
