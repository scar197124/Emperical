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

## Mobile repair
- Mobile uses a visible mobile-only nav under the Tree header.
- Desktop keeps the original header/hotspot navigation.
- Ticker moves below the mobile nav to prevent overlap.

## Mobile nav fit patch
- Mobile nav now uses a five-column grid so About stays visible.
- Mobile ticker animation is slowed down without changing desktop speed.

## Mobile accordion reader
- Desktop keeps the three-card layout.
- Mobile hides separate detail panels and opens selected story details directly under the tapped story record.
- Applies to Home, Archive, Categories, and Location.

## Universal mobile reader patch
- Home, Archive, Categories, and Location now use inline mobile story reading.
- Archive, Categories, and Location use the same mobile reading settings as Home.
- Desktop remains unchanged.
