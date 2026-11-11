# Detailed itinerary pages

Content source: the user-supplied Ceylon_Voyagers_All_5_Detailed_Itineraries.pdf (18 pages). Daily titles, descriptions, highlights, overnight areas, route overview stops and durations are stored in dist/assets/tour-details.json. The five itineraries contain 10, 7, 7, 8 and 7 days (39 total). Internal editorial/snapshot notes in the source are not public-facing instructions; the pages present flexible suggestions, not confirmed inclusions or services.

Regenerate the static pages with scripts/build-tour-pages.py after changing the JSON. Homepage summary data lives in dist/assets/itineraries.json and dist/app.js; slugs link each selection to its full static page. dist/tour-links.js validates the chosen tour before prefilling the existing enquiry draft. Existing enquiries still download locally; nothing is automatically sent.

Photography: existing user-supplied assets plus the credited photos below. Wikimedia images are resized to WebP; layout crops them to fit. Required author/source/license credits are displayed with the images. Share-alike adapted images retain their original license.

- Galle Fort: Grayswoodsurrey, CC BY-SA 4.0. https://commons.wikimedia.org/wiki/File:Galle_Fort,_Sri_Lanka.JPG
- Tea estate near Nanuoya, Nuwara Eliya: Keshani Kaveesha, CC BY-SA 4.0. https://commons.wikimedia.org/wiki/File:Tea_Estate_Nuwara_Eliya.jpg
- Sinharaja foliage: Jesminez, CC BY-SA 4.0. https://commons.wikimedia.org/wiki/File:Thick_foliage_in_the_Sinharaja_Forest_Reserve.jpg
- Offerings at the Temple of the Tooth, Kandy: Ernest Jourdier, CC BY 4.0. https://commons.wikimedia.org/wiki/File:Temple_of_the_Tooth_Kandy.jpg

Map outline: Natural Earth public-domain coastline, matching the existing explorer. Route lines connect geographic stop coordinates and are explicitly not driving directions.
