/* Shared vector icons: identical rendering on mobile and desktop, including dynamic UI. */
(()=>{'use strict';
const paths={
'↗':'M5 19 19 5M5 5h14v14','↙':'M19 5 5 19M5 5v14h14','→':'M4 12h16m-6-6 6 6-6 6','←':'M20 12H4m6-6-6 6 6 6','↑':'M12 20V4m-6 6 6-6 6 6','↓':'M12 4v16m-6-6 6 6 6-6',
'☰':'M4 6h16M4 12h16M4 18h16','×':'m6 6 12 12M18 6 6 18','+':'M5 12h14M12 5v14','−':'M5 12h14','✓':'m5 12 4 4L19 6',
'▶':'m8 5 11 7-11 7Z','Ⅱ':'M8 5v14M16 5v14','↻':'M20 10a8 8 0 1 0-1 8M20 4v6h-6',
'✈':'m3 10 7 2 4 8 2-1-1-7 5-5c2-2 0-4-2-2l-5 5-7-1Z',
'✳':'M12 3v18M3 12h18M6 6l12 12M6 18 18 6','◷':'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm0 4v5l4 2','◎':'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm0 5a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z',
'◈':'m12 3 9 9-9 9-9-9Zm0 5 4 4-4 4-4-4Z','≈':'M3 8c4-5 7 5 11 0s6 0 7 0M3 16c4-5 7 5 11 0s6 0 7 0','♧':'M12 21v-9M7 17c-6 0-5-8 0-8-1-8 11-8 10 0 5 0 6 8 0 8Z','⌁':'m2 18 7-12 4 7 3-5 6 10M7 18h12',
'☀':'M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8ZM12 2v2m0 16v2M2 12h2m16 0h2M5 5l1 1m12 12 1 1M5 19l1-1M18 6l1-1',
'☾':'M20 15A9 9 0 0 1 9 4a9 9 0 1 0 11 11Z',
'☁':'M6 18h12a4 4 0 0 0 0-8h-1A6 6 0 0 0 5 9a4.5 4.5 0 0 0 1 9Z',
'⛅':'M8 3v2M2 9h2m0-5 2 2m8-2-2 2M4 12a5 5 0 1 1 9-4M8 20h10a4 4 0 0 0 0-8h-1a5 5 0 0 0-9 0 4 4 0 0 0 0 8Z',
'≋':'M3 7h18M5 12h14M3 17h18',
'⛈':'M5 15a4 4 0 0 1 0-8 6 6 0 0 1 12-1 4 4 0 0 1 1 8M13 11l-4 6h5l-3 5',
'❄':'M12 2v20M3 7l18 10M3 17 21 7m-12-3 3 3 3-3M9 20l3-3 3 3',
'🌦':'M7 2v2M1 8h2m0-5 2 2M4 11a4 4 0 1 1 8-4M6 16h12a4 4 0 0 0 0-8h-1a5 5 0 0 0-9 0 4 4 0 0 0-2 8Zm2 3-1 3m6-3-1 3m6-3-1 3',
'🌧':'M6 15h12a4 4 0 0 0 0-8h-1A6 6 0 0 0 5 6a4.5 4.5 0 0 0 1 9Zm1 3-1 3m6-3-1 3m6-3-1 3'
};paths['☼']=paths['☀'];
const glyphs=new Set(Object.keys(paths));
function convert(node){
 if(node.nodeType!==3||!node.parentElement||node.parentElement.closest('script,style,textarea,input,select,option,svg,code,pre,[contenteditable]'))return;
 const value=node.nodeValue;if(![...value].some(c=>glyphs.has(c)))return;
 const fragment=document.createDocumentFragment();let text='';
 for(const c of value){
  // Keep ordinary plus signs in durations, prices and prose as text.
  if(!glyphs.has(c)||(c==='+'&&value.trim()!=='+'&&!node.parentElement.closest('button'))){text+=c;continue;}
  if(text){fragment.append(document.createTextNode(text));text='';}
  const icon=document.createElementNS('http://www.w3.org/2000/svg','svg');icon.setAttribute('viewBox','0 0 24 24');icon.setAttribute('class','cv-icon');icon.setAttribute('aria-hidden','true');icon.setAttribute('focusable','false');icon.setAttribute('data-icon',c);
  const path=document.createElementNS(icon.namespaceURI,'path');path.setAttribute('d',paths[c]);icon.append(path);fragment.append(icon);
 }
 if(text)fragment.append(document.createTextNode(text));node.replaceWith(fragment);
}
function scan(root){if(root.nodeType===3){convert(root);return;}if(root.nodeType!==1||root.closest('svg,script,style'))return;const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);const nodes=[];while(walker.nextNode())nodes.push(walker.currentNode);nodes.forEach(convert);}
scan(document.body);
new MutationObserver(records=>{for(const r of records){if(r.type==='attributes'){if(r.target.matches('.menu-toggle'))r.target.textContent=r.target.getAttribute('aria-expanded')==='true'?'×':'☰';}else if(r.type==='characterData')convert(r.target);else r.addedNodes.forEach(scan);}}).observe(document.body,{subtree:true,childList:true,characterData:true,attributes:true,attributeFilter:['aria-expanded']});
})();
