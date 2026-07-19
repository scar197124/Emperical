
(function(){
 const genreMap={
  'nature & wildlife':'moss','environment & recovery':'moss','climate & energy':'olive',
  'health & medicine':'rose','health':'rose','medical innovation':'rose',
  'science & discovery':'blue','technology & engineering':'violet','technology & innovation':'violet',
  'space & cosmos':'indigo','community & kindness':'amber','education & youth':'cyan',
  'culture & heritage':'copper','history & archaeology':'copper','measured progress':'teal'
 };
 const locationMap={
  'canada':'red','united states':'blue','caribbean & latin america':'coral',
  'united kingdom':'lilac','europe':'violet','africa':'copper','asia':'jade',
  'australia':'ochre','oceans':'teal','space':'indigo','global':'amber',
  'north america':'slate'
 };
 const locationIdMap={
  'canada':'red','united-states':'blue','caribbean-latin-america':'coral','caribbean-&-latin-america':'coral',
  'united-kingdom':'lilac','europe':'violet','africa':'copper','asia':'jade','australia':'ochre',
  'oceans':'teal','space':'indigo','global':'amber','north-america':'slate'
 };
 const editionPalette=['copper','teal','violet','moss','rose','blue','ochre','lilac','jade','coral','indigo','amber'];
 function norm(s){return (s||'').trim().toLowerCase()}
 function genreAccent(text){const n=norm(text);for(const [k,v] of Object.entries(genreMap)){if(n.includes(k))return v}return 'slate'}
 function locationAccent(text){const n=norm(text);for(const [k,v] of Object.entries(locationMap)){if(n.includes(k))return v}return 'slate'}
 function accentVar(name){return `var(--accent-${name||'slate'})`}
 function decorate(){
   const body=document.body;
   document.querySelectorAll('.story-btn').forEach(el=>{
     const chips=el.querySelectorAll('.chip');
     chips.forEach((chip,i)=>chip.dataset.kind=i===0?'genre':'location');
     const genre=chips[0]?.textContent||el.querySelector('strong')?.textContent||'';
     const location=chips[1]?.textContent||'';
     let a=genreAccent(genre);
     if(body.classList.contains('location-page')){
       const activeGroup=document.querySelector('.group-btn.active');
       a=activeGroup?.dataset.accent||locationAccent(location);
     }
     el.dataset.accent=a;
     el.style.setProperty('--location-accent',accentVar(locationAccent(location)));
   });
   document.querySelectorAll('.group-btn').forEach((el,i)=>{
     const text=el.querySelector('strong')?.textContent||el.textContent;
     let a='slate';
     if(body.classList.contains('location-page')) a=locationIdMap[el.dataset.group]||locationAccent(text);
     else if(body.classList.contains('categories-page')) a=genreAccent(text);
     else a=editionPalette[i%editionPalette.length];
     el.dataset.accent=a;
   });
   document.querySelectorAll('.edition-btn').forEach((el,i)=>el.dataset.accent=editionPalette[i%editionPalette.length]);
   const active=document.querySelector('.story-btn.active,.group-btn.active,.edition-btn.active');
   const accent=active?.dataset.accent||'slate';
   document.querySelectorAll('.detail').forEach(d=>d.style.setProperty('--detail-accent',accentVar(accent)));
 }
 const observer=new MutationObserver(decorate);observer.observe(document.body,{subtree:true,childList:true,attributes:true,attributeFilter:['class']});
 decorate();
})();
