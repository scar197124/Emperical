# Emperical — GitHub Push Checklist

## Upload these files/folders

Upload the contents of this clean deploy folder to the GitHub repository root.

Required public files:

- `index.html`
- `archive.html`
- `categories.html`
- `location.html`
- `about.html`
- `explore.html`
- `edition1.html` through `edition5.html`
- `homepage_may25_2026_archived.html`
- `homepage_may30_2026_archived.html`
- `sitemap.xml`
- `README.md`
- `CHANGELOG.md`
- `EMPERICAL_UPDATE_SYSTEM.md`
- `EMPERICAL_TRAJECTORY_NEXT_STEPS.md`
- `GITHUB_PUSH_CHECKLIST.md`

## Do not upload from older working folders unless intentionally needed

Avoid old experimental files such as editor drafts, explorer experiment markdown, temporary build scripts, duplicate notes from past patch stages, and `index.md` if it exists outside this clean package.

## Browser test after push

Open the live site and check:

- Home loads the June 30, 2026 edition.
- Archive loads and links to archived editions.
- Categories opens and story cards are grouped by story type.
- Location opens and story cards are grouped by region/place.
- About opens.
- `explore.html` opens as a compatibility fallback and does not 404.
- **↑ Top** buttons work on Categories and Location.
