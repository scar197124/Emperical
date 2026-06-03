# Emperical — Trajectory & Next Steps

Current clean deploy baseline: **June 3, 2026 GitHub Ready Clean Deploy**

## Current identity

Emperical is a positive, source-transparent news-style site focused on measured progress, helpful discoveries, recovery stories, and evidence-based hope. The public tone should remain calm, readable, original, and non-sensational.

## Implemented in this baseline

- Current homepage edition: **Latest Edition · June 3, 2026**.
- Previous homepages preserved as archive copies before replacement.
- Header navigation is now direct and reader-facing: **Home / Archive / Categories / Location / About**.
- `categories.html` groups all indexed stories by story type across editions.
- `location.html` groups all indexed stories by place/region across editions.
- `explore.html` remains only as a compatibility fallback for old/cached Explore links.
- Categories and Location pages use individual small story cards inside larger group panels.
- Categories and Location include fixed **↑ Top** buttons for easier long-page navigation.
- Homepage story cards use consistent inner field styling for Category, Region, Summary, Why It Matters, Ripple Effect, and Source.
- Sources remain visible for verification.
- Story text is independently summarized in original Emperical wording and should not republish article wording.
- Black/gold visual identity is preserved.

## Locked update rules

1. **Archive before update**: before replacing the homepage with a new edition, save the current homepage as an archived homepage file.
2. **Manual date only**: the homepage date must be manually edited for each new edition; do not use auto-updating dates.
3. **Original summaries only**: do not copy article text. Use source links for verification, but write original summaries and original reflections.
4. **Visible source links**: every story card should keep a source link.
5. **Story card structure**: maintain Category, Region, Summary, Why It Matters, Ripple Effect, and Source sections.
6. **Navigation stability**: preserve Home / Archive / Categories / Location / About unless intentionally changing navigation.
7. **Compatibility fallback**: keep `explore.html` unless all old/cached Explore links are intentionally retired and tested.
8. **GitHub deploy cleanliness**: keep public deploy packages lean. Avoid including old experimental notes, editor files, duplicate explorer/editor markdown, or unused build scripts.

## Recommended next content direction

For the next edition, gather stories intentionally by shortage/gap areas, especially where the current archive is thinner:

- More location-specific batches, such as Africa, Canada, Caribbean, Asia, Indigenous communities, small islands, or rural communities.
- More topic-specific batches, such as Health & Medicine, Clean Water, Youth Innovation, Food Security, Ocean / Marine, Community Repair, and Nature Recovery.
- Balance each edition so Categories and Location pages become more useful over time.

## Suggested next build after GitHub push

After publishing this clean deploy package to GitHub:

1. Test every header link live.
2. Test `explore.html` fallback directly.
3. Test Categories and Location page scrolling plus **↑ Top** buttons.
4. Confirm source links open correctly.
5. Then continue with **Proxuma IT** work next, unless Emperical needs a live deployment patch.

## Hash guidance

Use SHA-256 for milestone public packages and GitHub-ready deploy builds. Small text-only experiments do not need a hash unless they become a release package.
