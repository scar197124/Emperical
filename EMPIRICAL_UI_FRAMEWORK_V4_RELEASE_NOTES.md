# Empirical UI Framework v4.0 — Universal Framework

## Core architecture
- One shared two-panel reading system across Home, Archive, Categories, and Location.
- Original Tree of Life header and primary navigation retained.
- Full-width ticker retained directly beneath the header.
- Redundant secondary header removed.
- Fixed reading panel on the left and fixed navigator on the right.
- Internal scrolling prevents page drift and card resizing.

## Archive
- Edition selector loads each preserved publication into the universal reader.
- All, Categories, and Locations modes are available.
- Category and location filters are generated from the selected edition’s actual story data.
- Empty categories and locations are never displayed.

## Categories and Location
- Both sections use the same two-panel framework.
- Only categories and locations represented in published stories are shown.
- Selecting a story changes the reader content without changing the page geometry.

## About
- Reworked to match the same visual language and navigation system.

## Deployment
Upload the contents of this folder to the root of the GitHub Pages repository.
