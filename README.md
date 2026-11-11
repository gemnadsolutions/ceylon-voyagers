# Ceylon Voyagers

A responsive Sri Lanka travel website with a custom trip planner, interactive island explorer, destination wishlist, and five detailed itinerary pages.

## Run locally

The website uses plain HTML, CSS, and JavaScript. No dependency installation or build step is required.

```sh
python3 -m http.server 8765 --directory dist
```

Open http://localhost:8765 in your browser.

## Project structure

- `dist/` — deployable website, scripts, styles, and photography.
- `dist/tours/` — five detailed itinerary pages and the journey collection.
- `dist/assets/tour-details.json` — full day-by-day itinerary content.
- `scripts/build-tour-pages.py` — regenerates the static tour pages from that JSON.
- `tests/` — checks for the planner, explorer, and detailed itinerary pages.
- `docs/` — content provenance, photo credits, and implementation notes.

## Checks

Node.js is required for the checks; no packages are needed.

```sh
npm test
```

Regenerate itinerary pages with Python 3:

```sh
python3 scripts/build-tour-pages.py
```

## Current functionality

- Responsive landing page, destination slideshows, and tour finder.
- Five-step journey planner with local draft saving and download.
- Interactive Sri Lanka map with interest filters and a saved destination wishlist.
- Five full itinerary pages with maps, photography, daily plans, and overnight areas.
- Enquiry handoffs from the planner, explorer, and tour pages.
- Current weather via Open-Meteo.

Enquiries currently download as local drafts; they are not sent to a backend. The Tripadvisor section is a placeholder awaiting a real reviews integration. Contact details are placeholders. Wishlist and planner drafts are saved in the visitor's browser.

## Deployment

Serve the `dist/` directory with any static website host. Keep directory structure and relative paths intact. Hosting-account configuration and credentials are intentionally excluded from this repository.

For GitHub Pages, select **Deploy from a branch**, **main**, and **/ (root)**. The root entry page forwards visitors to `dist/`, preserving enquiry parameters and section links. The `.nojekyll` file keeps the static website files unchanged during publication.

## Photography and content

Third-party photo credits and licenses are included beside the relevant images and documented in `docs/`. Those licenses continue to apply to the corresponding assets. Other supplied brand and image assets should only be reused with the owner's permission.
