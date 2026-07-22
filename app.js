let STORIES=[];let selected=0;let filtered=[];let scope=[];
const PAGE=document.body.dataset.page||'home';
const $=s=>document.querySelector(s);
const esc=(s='')=>String(s).replace(/[&<>\"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','\"':'&quot;'}[c]));
const unique=(arr,key)=>[...new Set(arr.map(s=>s[key]).filter(Boolean))].sort((a,b)=>String(a).localeCompare(String(b)));
const currentEdition=s=>s.isCurrent===true;
function renderReader(story){
  const el=$('#reader');
  if(!story){
    el.innerHTML='<p class="empty">Select a story from the display panel.</p>';
    return;
  }
  const category=story.mainCategory||story.category||'Good News';
  const date=story.editionDate||story.edition||'';
  el.innerHTML=`
    <div class="reader-topline"><span class="story-kicker">${esc(category)}</span><span class="story-position">Story ${selected+1} of ${filtered.length}</span></div>
    <h2>${esc(story.title)}</h2>
    <div class="meta">
      <span class="chip">${esc(story.location||'Global')}</span>
      <span class="chip">${esc(category)}</span>
      <span class="chip">${esc(date)}</span>
    </div>
    <div class="reader-section story-brief">
      <h4>The story</h4>
      <div class="story-copy"><p>${esc(story.summary||'Story details are being prepared.')}</p></div>
    </div>
    <div class="reader-takeaways">
      <div class="reader-section takeaway-card">
        <h4>Why it matters</h4>
        <p>${esc(story.why||'This development offers a meaningful example of progress in action.')}</p>
      </div>
      <div class="reader-section takeaway-card">
        <h4>Ripple effect</h4>
        <p>${esc(story.ripple||'Its impact may extend into communities, future decisions, and related work.')}</p>
      </div>
    </div>
    <div class="source">
      <span class="story-kicker">Source link</span>
      <a href="${esc(story.sourceUrl||'#')}" target="_blank" rel="noopener noreferrer">${esc(story.source||'View original source')} ↗</a>
    </div>`;
}
function selectStory(index){selected=index;renderReader(filtered[index]);document.querySelectorAll('.story-btn').forEach((b,i)=>b.classList.toggle('active',i===index));}
function renderList(){const list=$('#storyList');if(!list)return;selected=Math.min(selected,Math.max(0,filtered.length-1));list.innerHTML=filtered.map((s,i)=>`<button class="story-btn ${i===selected?'active':''}" data-i="${i}"><strong>${esc(s.title)}</strong><span>${esc(s.mainCategory||s.category)} · ${esc(s.location)}</span><small>${esc(s.editionDate||s.edition||'Perical archive')}</small></button>`).join('');list.querySelectorAll('button').forEach(b=>b.onclick=()=>selectStory(+b.dataset.i));$('#count').textContent=`${filtered.length} ${filtered.length===1?'story':'stories'}`;const wheelCount=$('#wheelResults');if(wheelCount)wheelCount.textContent=`${filtered.length} ${filtered.length===1?'story':'stories'}`;renderReader(filtered[selected]);}
function applyFilter(value){if(!value||value==='All')filtered=[...scope];else if(PAGE==='categories')filtered=scope.filter(s=>(s.mainCategory||s.category)===value);else if(PAGE==='location')filtered=scope.filter(s=>s.location===value);else if(PAGE==='archive')filtered=scope.filter(s=>(s.editionDate||s.edition)===value);else filtered=[...scope];selected=0;renderList();document.querySelectorAll('.wheel-option').forEach(b=>b.classList.toggle('active',b.dataset.value===value));const label=$('#wheelValue');if(label)label.textContent=value==='All'?(PAGE==='archive'?'All Editions':'All'):value;}
function setupToolbar(){
  const t=$('#toolbar');if(!t)return;
  let vals=[],title='Select';
  if(PAGE==='categories'){vals=['All',...unique(scope,'mainCategory')];title='Category';}
  else if(PAGE==='location'){vals=['All',...unique(scope,'location')];title='Location';}
  else if(PAGE==='archive'){vals=['All',...unique(scope,'editionDate').reverse()];title='Edition';}
  else{t.remove();return;}
  t.className='wheel-shell';
  t.innerHTML=`<div class="wheel-top"><span>${title}</span><strong id="wheelValue">${PAGE==='archive'?'All Editions':'All'}</strong></div><div class="selector-wheel" id="selectorWheel" role="listbox" aria-label="${title} selector"><div class="wheel-spacer" aria-hidden="true"></div>${vals.map((v,i)=>`<button class="wheel-option ${i===0?'active':''}" type="button" role="option" aria-selected="${i===0}" data-value="${esc(v)}">${v==='All'&&PAGE==='archive'?'All Editions':esc(v)}</button>`).join('')}<div class="wheel-spacer" aria-hidden="true"></div></div><div class="wheel-center" aria-hidden="true"></div><div class="wheel-footer"><p class="wheel-hint">Swipe or scroll. Centered choice applies automatically.</p><p class="wheel-results" id="wheelResults" aria-live="polite">${scope.length} stories</p></div>`;
  const wheel=$('#selectorWheel');
  const options=[...wheel.querySelectorAll('.wheel-option')];
  let timer=0,current=0;
  const choose=(index,scroll=true)=>{
    index=Math.max(0,Math.min(options.length-1,index));current=index;
    options.forEach((o,i)=>{const on=i===index;o.classList.toggle('active',on);o.setAttribute('aria-selected',String(on));});
    if(scroll){const target=options[index].offsetTop-(wheel.clientHeight-options[index].offsetHeight)/2;wheel.scrollTo({top:Math.max(0,target),behavior:'smooth'});}
    applyFilter(options[index].dataset.value);
  };
  options.forEach((o,i)=>o.addEventListener('click',()=>choose(i,true)));
  wheel.addEventListener('scroll',()=>{clearTimeout(timer);timer=setTimeout(()=>{const center=wheel.scrollTop+wheel.clientHeight/2;let best=0,dist=Infinity;options.forEach((o,i)=>{const c=o.offsetTop+o.offsetHeight/2;const d=Math.abs(c-center);if(d<dist){dist=d;best=i;}});if(best!==current)choose(best,false);else{const target=options[best].offsetTop-(wheel.clientHeight-options[best].offsetHeight)/2;wheel.scrollTo({top:Math.max(0,target),behavior:'smooth'});}},90);},{passive:true});
  wheel.addEventListener('keydown',e=>{if(e.key==='ArrowDown'){e.preventDefault();choose(current+1,true);}else if(e.key==='ArrowUp'){e.preventDefault();choose(current-1,true);}else if(e.key==='Home'){e.preventDefault();choose(0,true);}else if(e.key==='End'){e.preventDefault();choose(options.length-1,true);}});
  requestAnimationFrame(()=>{if(options[0]){const target=options[0].offsetTop-(wheel.clientHeight-options[0].offsetHeight)/2;wheel.scrollTop=Math.max(0,target);}});
}
function updateStats(){
  const current=STORIES.filter(currentEdition).length;
  const archived=STORIES.filter(s=>!currentEdition(s)).length;
  const categories=unique(STORIES,'mainCategory').length;
  const locations=unique(STORIES,'location').length;
  document.querySelectorAll('[data-stat="current"]').forEach(el=>el.textContent=current);
  document.querySelectorAll('[data-stat="archive"]').forEach(el=>el.textContent=archived);
  const title=document.querySelector('.page-title');
  if(title&&!title.querySelector('.edition-metrics')){
    const metrics=document.createElement('div');
    metrics.className='edition-metrics';
    metrics.innerHTML=`<span><b>${PAGE==='home'?current:PAGE==='archive'?archived:STORIES.length}</b>${PAGE==='home'?'Current stories':PAGE==='archive'?'Archived stories':'Stories available'}</span><span><b>${categories}</b>Editorial categories</span><span><b>${locations}</b>Places represented</span><span class="editorial-note">Evidence-led stories of people, nature, science, and progress.</span>`;
    title.appendChild(metrics);
  }
}
const bootStories=()=>{
  const data=window.PERICAL_STORIES;
  STORIES=Array.isArray(data)?data:[];
  if(!STORIES.length){
    const reader=$('#reader');
    if(reader)reader.innerHTML='<p class="empty">No story records were found in the embedded data.</p>';
    return;
  }
  scope=PAGE==='home'?STORIES.filter(currentEdition):PAGE==='archive'?STORIES.filter(s=>!currentEdition(s)):[...STORIES];
  filtered=[...scope];
  setupToolbar();
  applyFilter('All');
  updateStats();
};
bootStories();

// v11.2 unified active navigation
document.querySelectorAll('.nav a[data-nav]').forEach(a=>{if(a.dataset.nav===PAGE)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current');});
