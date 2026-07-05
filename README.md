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

## Single mobile header fix
- Removed the duplicate mobile header behavior.
- Desktop shows one desktop header.
- Mobile shows one mobile Empirical wordmark header.
- Old content-url image swap rule removed.
- Build marker: single-mobile-header-wordmark-visible.

## Mobile System v6 compact section picker
- Archive mobile now uses one compact edition selector at the top, then stories immediately below.
- Categories mobile now uses one compact category selector at the top, then stories immediately below.
- Location mobile now uses one compact location selector at the top, then stories immediately below.
- Removed forced auto-scroll after changing edition/category/location.
- Home remains unchanged. Desktop remains unchanged.
- Build marker: mobile-system-v6-compact-section-picker.

## Mobile System v6.1 slimmer section picker
- Kept the compact selector card on Archive, Categories, and Location.
- Reduced unused vertical space in the selector card.
- Kept wording and function unchanged.
- Home, desktop, mobile header, and story open/close behavior remain unchanged.
- Build marker: mobile-system-v6-1-slim-section-picker.

## Mobile System v6.2 shrink actual selector card
- Targeted the outer selector card container on Archive, Categories, and Location.
- Forced the selector card to fit its content instead of holding extra vertical height.
- Kept the selector text, dropdown, stories, header, Home page, and desktop unchanged.
- Build marker: mobile-system-v6-2-shrink-selector-card.

## Mobile System v6.3 location card shrink
- Applied the selector-card shrink directly to Location.
- Added an explicit mobile-location-picker-card class so mobile browsers target the right Location card.
- Archive and Categories remain unchanged from v6.2.
- Build marker: mobile-system-v6-3-location-card-shrink.

## Mobile System v6.4 selected stories header lift
- Raised/tightened the Selected Stories card header on Archive, Categories, and Location.
- Removed the sticky overlay behavior from that header on mobile.
- Added clean top spacing so the first story is not cut off.
- Kept compact selectors, mobile header, Home, and desktop unchanged.
- Build marker: mobile-system-v6-4-selected-stories-header-lift.

## Mobile System v6.5 source and open button polish
- Made the Source badge/link stand out more without increasing size.
- Highlighted the Source box inside opened stories.
- Centered the Open button text and highlighted the button without making it bigger.
- Kept Home, Archive, Categories, Location, desktop, mobile header, and compact selectors unchanged.
- Build marker: mobile-system-v6-5-source-open-polish.

## Mobile System v6.6 simplified story chips
- Closed mobile story cards now show only Topic + Location chips.
- Full metadata remains inside opened story cards: Main Category, Topic, Location, and Source.
- Source badge and Open button polish remain unchanged.
- Home, Archive, Categories, Location, desktop, and mobile header remain unchanged.
- Build marker: mobile-system-v6-6-simplified-story-chips.

## Mobile System v6.7 close and next button alignment
- Centered Close button text inside the button.
- Centered Next Story button text inside the button.
- Gave Next Story enough width so the text fits cleanly.
- Applied across Home, Archive, Categories, and Location.
- Desktop and mobile header remain unchanged.
- Build marker: mobile-system-v6-7-close-next-button-align.

## Crawler / Meta / AI Harmony Package
- Added robots.txt.
- Added sitemap.xml.
- Added llms.txt and ai.txt for machine-readable AI/human collaboration context.
- Added Open Graph and Twitter preview metadata to all main pages.
- Added JSON-LD structured data.
- Added machine-readable AI-HUMAN-HARMONY comments and meta tags.
- Added share image: assets/empirical-og-earth-human-ai.png.
- Assumed GitHub Pages base URL: https://venomas56.github.io/Emperical/
- Build marker: crawler-meta-ai-harmony-package.


## June 13, 2026 Gap-Balance Edition
- Added 10 source-grounded stories.
- Moved the June 10 homepage edition into the continuing archive sequence.
- Rebuilt archive, category, and location groupings.
- Total stories: 111.
- Focused on underrepresented categories and regions: Culture & Heritage,
  Education & Youth, Science & Discovery, Measured Progress, Canada,
  Latin America, South Asia, and country-specific African stories.


## Latest-edition update badges
- Archive, Categories, and Locations now show small counts for stories added in the newest edition.
- Groups with no new stories remain unmarked.

## Full-width clean ticker
- Removed the Good News label and Live badge.
- Ticker now uses the full strip width on desktop and mobile.


## Latest edition

June 30, 2026 — 10 verified stories organized by category and location. 
