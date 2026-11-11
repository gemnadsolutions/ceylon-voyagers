const assert=require('node:assert/strict');
const api=require('../dist/explorer-data.js');
assert.equal(api.places.length,8);
assert.equal(new Set(api.places.map(p=>p.id)).size,8);
for(const name of ['Sigiriya','Ella','Galle','Anuradhapura','Unawatuna','Arugam Bay'])assert(api.places.some(p=>p.name===name));
for(const category of ['Beaches','Nature','Culture','Wildlife','Adventure']){const places=api.matching(category);assert(places.length>0);assert(places.every(p=>p.categories.includes(category)));}
assert.deepEqual(api.cleanWishlist(['ella','unknown','ella',42,'yala']),['ella','yala']);
for(const value of [null,{},'ella',4])assert.deepEqual(api.cleanWishlist(value),[]);
assert.equal(api.inquiryText([]),'');
const inquiry=api.inquiryText(['ella','sigiriya','ella']);assert(inquiry.includes('Ella, Sigiriya.'));assert.equal((inquiry.match(/Ella/g)||[]).length,1);
const [gx,gy]=api.project(api.places.find(p=>p.id==='galle').coords),[ux,uy]=api.project(api.places.find(p=>p.id==='unawatuna').coords);
assert(ux>gx&&uy>gy);assert(Math.hypot(ux-gx,uy-gy)<6,'Adjacent coast towns stay adjacent on the map');
for(const p of api.places){const [x,y]=api.project(p.coords);assert(x>0&&x<640&&y>0&&y<610);assert(p.attractions.length>=3);assert(require('node:fs').existsSync('dist/'+p.image));}
const html=require('node:fs').readFileSync('dist/index.html','utf8');assert(html.indexOf('id="build-your-journey"')<html.indexOf('id="island-explorer"'));assert(html.indexOf('id="island-explorer"')<html.indexOf('id="traveller-stories"'));
console.log('Explorer data, category coverage, wishlist validation, accurate coastal positions, image assets, and section placement passed.');
