(function(){
"use strict";
var reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
function el(t,c,h){var e=document.createElement(t);if(c)e.className=c;if(h!=null)e.textContent=h;return e}

/* The "Choose your path" stories now run on the shared card player: hmr-card/cards/path-<name>.json, screen hmr-card/screens/path.js. */

/* ---------- Vision: hardware key switch ---------- */
var sw=document.querySelector(".keysw");
if(sw){var st=document.querySelector(".vcard .state");
 sw.addEventListener("click",function(){
  var on=sw.getAttribute("aria-pressed")!=="true";
  sw.setAttribute("aria-pressed",on?"true":"false");
  sw.querySelector(".kl").textContent=on?"On":"Locked";
  st.textContent=on?"Key is on. Payments you approve can go through, only while the switch stays on.":"Money is locked. No agent can move it.";
 });}

/* ---------- Design picker ---------- */
var DESIGNS=[
 {n:1,name:"Sunset (current)"},
 {n:2,name:"Paper"},
 {n:3,name:"Night terminal"},
 {n:4,name:"Calm sea"}
];
var LEVELS=[["strong-like","Strong like"],["like","Like"],["dislike","Dislike"],["strong-dislike","Strong dislike"]];
var KEY="endgame.designRatings.v1";
function load(){try{var r=localStorage.getItem(KEY);return r?JSON.parse(r)||{}:{}}catch(e){return {}}}
function save(o){try{localStorage.setItem(KEY,JSON.stringify(o))}catch(e){}}
var ratings=load();
function qdesign(){var m=/[?&]design=(\d)/.exec(location.search);var n=m?+m[1]:1;return n>=1&&n<=DESIGNS.length?n:1}
var design=qdesign();
function applyDesign(n,push){
 design=n;document.documentElement.setAttribute("data-design",String(n));
 try{var u=new URL(location.href);if(n===1)u.searchParams.delete("design");else u.searchParams.set("design",String(n));history.replaceState(null,"",u.toString())}catch(e){}
}
applyDesign(design);

var fab=el("button","dfab","Design");fab.type="button";fab.setAttribute("aria-haspopup","dialog");fab.setAttribute("aria-expanded","false");
var panel=el("div","dpanel");panel.setAttribute("role","dialog");panel.setAttribute("aria-label","Design picker");panel.hidden=true;
var ph=el("div","dph");ph.appendChild(el("b",null,"Pick a design"));
var x=el("button","dx","×");x.type="button";x.setAttribute("aria-label","Close design picker");ph.appendChild(x);
var tabs=el("div","dtabs");tabs.setAttribute("role","group");tabs.setAttribute("aria-label","Designs");
var dbody=el("div","dbody");
var copy=el("button","pill solid","Copy all ratings");copy.type="button";
var cmsg=el("div","cmsg");cmsg.setAttribute("aria-live","polite");
panel.appendChild(ph);panel.appendChild(tabs);panel.appendChild(dbody);panel.appendChild(copy);panel.appendChild(cmsg);
document.body.appendChild(fab);document.body.appendChild(panel);

function renderPanel(){
 tabs.textContent="";
 DESIGNS.forEach(function(d){
  var b=el("button","dtab"+(d.n===design?" on":""),"Design "+d.n);b.type="button";
  b.setAttribute("aria-pressed",d.n===design?"true":"false");
  b.addEventListener("click",function(){applyDesign(d.n);renderPanel();var t=tabs.querySelector(".dtab.on");if(t)t.focus()});
  tabs.appendChild(b);
 });
 dbody.textContent="";
 var d=DESIGNS[design-1],r=ratings[design]||{};
 dbody.appendChild(el("p","dname","Design "+d.n+": "+d.name));
 var fs=el("fieldset","dfs");fs.appendChild(el("legend",null,"Your rating"));
 LEVELS.forEach(function(L){
  var lab=el("label","dopt"+(r.level===L[0]?" on":""));
  var inp=document.createElement("input");inp.type="radio";inp.name="dr"+design;inp.value=L[0];inp.checked=r.level===L[0];
  inp.addEventListener("change",function(){var o=ratings[design]||{};o.level=L[0];ratings[design]=o;save(ratings);renderPanel();var q=dbody.querySelector("input:checked");if(q)q.focus()});
  lab.appendChild(inp);lab.appendChild(document.createTextNode(" "+L[1]));fs.appendChild(lab);
 });
 dbody.appendChild(fs);
 var lb=el("label","dnote","Note (optional)");lb.setAttribute("for","dnote");
 var ta=document.createElement("textarea");ta.id="dnote";ta.rows=3;ta.value=r.note||"";
 ta.addEventListener("input",function(){var o=ratings[design]||{};o.note=ta.value;ratings[design]=o;save(ratings)});
 dbody.appendChild(lb);dbody.appendChild(ta);
}
var lastFocus=null;
function openPanel(){lastFocus=document.activeElement;panel.hidden=false;fab.setAttribute("aria-expanded","true");renderPanel();x.focus()}
function closePanel(){panel.hidden=true;fab.setAttribute("aria-expanded","false");(lastFocus&&lastFocus.focus?lastFocus:fab).focus()}
fab.addEventListener("click",function(){panel.hidden?openPanel():closePanel()});
x.addEventListener("click",closePanel);
document.addEventListener("keydown",function(e){if(e.key==="Escape"&&!panel.hidden){e.preventDefault();closePanel()}});
copy.addEventListener("click",function(){
 var lines=["Endgame Life design ratings"];
 DESIGNS.forEach(function(d){var r=ratings[d.n]||{};var lv=LEVELS.filter(function(L){return L[0]===r.level})[0];
  lines.push("Design "+d.n+" ("+d.name+"): "+(lv?lv[1]:"not rated")+(r.note?". Note: "+r.note.replace(/\s+/g," "):""))});
 var text=lines.join("\n");
 function done(ok){cmsg.textContent=ok?"Copied.":"Could not copy. Select the text below and copy it by hand.";
  if(!ok){var t=document.createElement("textarea");t.className="cfall";t.value=text;t.readOnly=true;panel.appendChild(t);t.focus();t.select()}}
 try{navigator.clipboard.writeText(text).then(function(){done(true)},function(){done(false)})}catch(e){done(false)}
});
})();
