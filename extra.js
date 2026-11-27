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
 {n:4,name:"Calm sea"}
];
var LEVELS=[["strong-like","Strong like"],["like","Like"],["dislike","Dislike"],["strong-dislike","Strong dislike"]];
var KEY="endgame.designRatings.v1";
function load(){try{var r=localStorage.getItem(KEY);return r?JSON.parse(r)||{}:{}}catch(e){return {}}}
function save(o){try{localStorage.setItem(KEY,JSON.stringify(o))}catch(e){}}
var ratings=load();
function byN(n){return DESIGNS.filter(function(d){return d.n===n})[0]}
function qdesign(){var m=/[?&]design=(\d)/.exec(location.search);var n=m?+m[1]:1;return byN(n)?n:1}
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
/* Submit, like every design picker: "Submit with my email" (shows the email field) or "Submit anonymously". */
var sub=el("div","dsub");
var emr=el("div","demr");emr.hidden=true;
var eml=el("label",null,"Your email, so we can reply");eml.setAttribute("for","dsub-em");
var em=document.createElement("input");em.type="email";em.id="dsub-em";em.setAttribute("autocomplete","email");
emr.appendChild(eml);emr.appendChild(em);
var bMail=el("button","pill solid","Submit with my email");bMail.type="button";
var bAnon=el("button","pill","Submit anonymously");bAnon.type="button";
var cmsg=el("div","cmsg");cmsg.setAttribute("role","status");cmsg.setAttribute("aria-live","polite");
sub.appendChild(emr);sub.appendChild(bMail);sub.appendChild(bAnon);
panel.appendChild(ph);panel.appendChild(tabs);panel.appendChild(dbody);panel.appendChild(sub);panel.appendChild(cmsg);
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
 var d=byN(design)||DESIGNS[0],r=ratings[design]||{};
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
function ratingText(){
 var lines=["Endgame Life design ratings"];
 DESIGNS.forEach(function(d){var r=ratings[d.n]||{};var lv=LEVELS.filter(function(L){return L[0]===r.level})[0];
  lines.push("Design "+d.n+" ("+d.name+"): "+(lv?lv[1]:"not rated")+(r.note?". Note: "+r.note.replace(/\s+/g," "):""))});
 return lines.join("\n");
}
function submitRatings(email){
 if(!window.HMRDock||!window.HMRDock.send){cmsg.textContent="Still loading. Try again in a moment.";return}
 cmsg.textContent="Sending...";
 window.HMRDock.send({kind:"design",subject:"Endgame Life design ratings",message:ratingText(),email:email||"",details:{ratings:ratings}}).then(function(r){
  cmsg.textContent=r&&r.ok?"Sent. Thank you so much for your contribution.":"Your email app should have opened with your ratings. They are still saved here.";
 },function(){cmsg.textContent="Not sent. Your ratings are still saved here. Try again."});
}
bMail.addEventListener("click",function(){
 if(emr.hidden){emr.hidden=false;em.focus();cmsg.textContent="Add your email, then press Submit with my email again.";return}
 var v=em.value.trim();
 if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)){cmsg.textContent="That email does not look complete. Check it, or submit anonymously.";em.focus();return}
 submitRatings(v);
});
bAnon.addEventListener("click",function(){submitRatings("")});

/* ---------- Optional feedback pop-up near the bottom ---------- */
(function(){
 var box=document.getElementById("egfb"),f=document.getElementById("egfb-f");
 if(!box||!f)return;
 var K="endgame.feedback.v1",last=null;
 function get(){try{return localStorage.getItem(K)}catch(e){return null}}
 function put(v){try{localStorage.setItem(K,v)}catch(e){}}
 function open(){if(!box.hidden)return;last=document.activeElement;box.hidden=false;var q=box.querySelector("input");if(q)try{q.focus({preventScroll:true})}catch(e){q.focus()}}
 function close(){box.hidden=true;if(get()!=="sent")put("closed");if(last&&last.focus)try{last.focus({preventScroll:true})}catch(e){}}
 box.querySelector("[data-egfb-close]").addEventListener("click",close);
 box.addEventListener("keydown",function(e){if(e.key==="Escape"){e.stopPropagation();close()}});
 [].forEach.call(document.querySelectorAll("[data-egfb-open]"),function(b){b.addEventListener("click",open)});
 /* Shows itself once, when the visitor reaches the honest note at the bottom. The X closes it for good on this device. */
 var note=document.getElementById("note");
 if(note&&!get()&&"IntersectionObserver" in window){
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){io.disconnect();if(!get())open()}})},{threshold:.25});
  io.observe(note);
 }
 f.addEventListener("submit",function(e){
  var want=document.getElementById("egfb-d");
  if(want&&want.checked){try{window.open("https://personaldash.life/","_blank","noopener")}catch(x){}}
  put("sent");
  if(!window.HMRDock){e.preventDefault();var st=f.querySelector("[data-hmr-anon-status]");if(st)st.textContent="Sending is not available right now. Thank you for trying."}
 });
})();
})();
