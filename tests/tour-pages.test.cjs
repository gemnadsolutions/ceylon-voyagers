const assert=require('node:assert/strict'),fs=require('node:fs');
const tours=JSON.parse(fs.readFileSync('dist/assets/tour-details.json','utf8'));
assert.deepEqual(tours.map(t=>t.duration),[10,7,7,8,7]);assert.equal(tours.reduce((sum,t)=>sum+t.days.length,0),39);
const esc=s=>s.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#x27;'}[c]));
for(const t of tours){const page=fs.readFileSync('dist/tours/'+t.slug+'.html','utf8');assert.equal((page.match(/class="tour-day"/g)||[]).length,t.duration);assert.equal((page.match(/class="tour-moment"/g)||[]).length,4);assert(page.includes('?tour='+t.slug+'#inquiry'));
for(const d of t.days){assert(page.includes(esc(d.title)));assert(page.includes(esc(d.description)));assert(page.includes(esc(d.overnight)));assert(d.description.length>60);assert(!d.description.includes('HIGHLIGHTS'));assert(!d.overnight.includes('CEYLON'));}
for(const m of page.matchAll(/(?:src|href)="([^"#?]+)(?:[?#][^"]*)?"/g)){if(/^(https?:|mailto:)/.test(m[1]))continue;const path=require('node:path').resolve('dist/tours',m[1]);assert(fs.existsSync(path),'Missing reference '+m[1]+' in '+t.slug);}}
const homepage=fs.readFileSync('dist/index.html','utf8');assert(homepage.includes('class="itinerary-plan" href="tours/island-overture.html"'));assert(homepage.includes('class="build-sample" href="tours/index.html"'));
const summaries=JSON.parse(fs.readFileSync('dist/assets/itineraries.json','utf8'));for(let i=0;i<5;i++)assert.deepEqual(summaries[i].stops,tours[i].route);
console.log('All 5 pages preserve all 39 daily descriptions and overnight areas. Images, relative links, enquiry handoffs, and home route summaries passed.');
