(function(){
"use strict";
var reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
function el(t,c,h){var e=document.createElement(t);if(c)e.className=c;if(h!=null)e.textContent=h;return e}

/* ---------- Story: choose your path ---------- */
var ORDER=["overview","family","money","time","fun","work"];
var P={
overview:{name:"Overview: how the world will probably change",short:"Overview",rec:true,
 steps:[
 {cap:"Your own agents handle the routine: messages, forms, bookings, quotes. They work on their own while you live your day.",tasks:[["Sorting today's messages","run"],["Renewing the car registration","run"],["Comparing two roof quotes","run"]],you:["dog","Sam walks the dog"]},
 {cap:"Only what needs a human decision reaches you. A ping on the watch, a few spoken words, and the reply goes out.",tasks:[["Comparing two roof quotes","done"],["Waiting for Sam: pick a quote","warn"]],you:["dog","Sam walks the dog"],watch:["Two roof quotes are ready. Option A or B?","Option A, and ask for a start date."]},
 {cap:"The reply is sent and the agent keeps going. Sam never stopped walking.",tasks:[["Waiting for Sam: pick a quote","done"],["Reply sent: Option A, asking for a start date","done"],["Renewing the car registration","done"]],you:["dog","Sam walks the dog"]},
 {cap:"Over time you read what your agent drafts. Once you stop needing to change it, it can speak for you more often. You set the bar.",tasks:[["Drafting replies in Sam's voice","run"],["Sam reviews drafts each evening","warn"]],you:["tv","Sam watches TV"]},
 {cap:"Screens fade into the background. A watch or a bracelet does the job of a phone, and more of us leave the phone at home. Money stays behind a physical key that only you switch on.",tasks:[["Payment ready: waiting for Sam's hardware key","warn"],["Everything else running quietly","run"]],you:["table","Sam eats with friends, phones at home"]}]},
family:{name:"Family and relationships",short:"Family",
 steps:[
 {cap:"Your agent keeps track of the people who matter: birthdays, and how long since you last talked.",tasks:[["Checking birthdays this month","run"],["Noting who Sam has not talked to lately","run"]],you:["kitchen","Sam cooks dinner"]},
 {cap:"A draft is ready, in Sam's voice. Sam hears about it on the watch and answers out loud.",tasks:[["Draft to Grandma Ruth is ready","warn"]],you:["kitchen","Sam cooks dinner"],watch:["Draft to Grandma Ruth for her birthday is ready. Send?","Yes, and say I will call Sunday."]},
 {cap:"The message goes out. The agent adds Sunday to the calendar.",tasks:[["Draft to Grandma Ruth is ready","done"],["Sent, and Sunday call added","done"]],you:["kitchen","Sam cooks dinner"]},
 {cap:"If the people in Sam's life opt in to share plans, agents can find an evening that works for everyone, without a group chat.",tasks:[["Finding a free evening for four people who opted in","run"],["Found: Saturday at 6","done"]],you:["kitchen","Sam cooks dinner"]},
 {cap:"Saturday comes. Phones stay home. The point of all the automation is more time looking at each other.",tasks:[["Nothing needs Sam right now","done"]],you:["table","Dinner with family, phones at home"]}]},
money:{name:"Saving money",short:"Saving money",
 steps:[
 {cap:"Your agent can see spending and subscriptions in a read-only way. It cannot move money.",tasks:[["Reading this month's spending (read-only)","run"],["Listing subscriptions","run"]],you:["tv","Sam watches TV"]},
 {cap:"It notices a subscription that has gone unused for a long time and asks.",tasks:[["Listing subscriptions","done"],["Unused music subscription found","warn"]],you:["tv","Sam watches TV"],watch:["Music subscription unused for months. Cancel?","Yes, cancel it."]},
 {cap:"The cancellation goes out. A cancellation is a request, not a transfer of money.",tasks:[["Unused music subscription found","done"],["Cancellation sent","done"]],you:["tv","Sam watches TV"]},
 {cap:"Money itself is a danger asset. When something needs a payment, the agent stops and waits for Sam's physical key and manual switch.",tasks:[["Annual insurance payment due","warn"],["Waiting for Sam's hardware key","warn"]],you:["desk","Sam flips the switch at home"]},
 {cap:"Sam flips the switch, confirms, and flips it back. Money is locked again. Nothing moved while the key was off.",tasks:[["Annual insurance payment due","done"],["Key off. Money locked again","done"]],you:["desk","Sam flips the switch at home"]}]},
time:{name:"Saving time",short:"Saving time",
 steps:[
 {cap:"Forms, scheduling, and follow-ups are the first things agents take over.",tasks:[["Filling in the school form","run"],["Moving the dentist visit","run"],["Chasing a late invoice","run"]],you:["dog","Sam walks the dog"]},
 {cap:"Most of it finishes without Sam. One item needs a human choice.",tasks:[["Filling in the school form","done"],["Moving the dentist visit","done"],["Landlord asks to move the repair to Tuesday","warn"]],you:["dog","Sam walks the dog"],watch:["Landlord asks to move the repair to Tuesday. Okay?","Tuesday is fine, any time after noon."]},
 {cap:"The reply goes out in Sam's words. Total time Sam spent: a few seconds.",tasks:[["Landlord asks to move the repair to Tuesday","done"],["Reply sent","done"]],you:["dog","Sam walks the dog"]},
 {cap:"Sam's evening review is short because the drafts already sound like Sam.",tasks:[["Summary of the day ready","done"]],you:["tv","Sam watches TV"]}]},
fun:{name:"Having fun",short:"Having fun",
 steps:[
 {cap:"Your agent knows what you enjoy, what you do not want, and what is in the house: games, a guitar, ingredients.",tasks:[["Looking for tonight's ideas","run"],["Leaving out what Sam said no to","run"]],you:["ball","Sam plays catch in the park"]},
 {cap:"Something good turns up and it is worth a ping.",tasks:[["Open mic tonight at 8","warn"]],you:["ball","Sam plays catch in the park"],watch:["Open mic tonight at 8, near you. Go?","Yes, and ask Jun to come."]},
 {cap:"The invitation goes to Jun, who opted in to share plans. Jun's agent checks Jun's evening.",tasks:[["Open mic tonight at 8","done"],["Invitation sent to Jun","done"],["Jun is free: added to both calendars","done"]],you:["ball","Sam plays catch in the park"]},
 {cap:"Sam never opened an app to search. The evening just got better.",tasks:[["Nothing else needs Sam","done"]],you:["table","Open mic with Jun"]}]},
work:{name:"Work",short:"Work",
 steps:[
 {cap:"Work stays at work and home stays at home. A firewall keeps work data out of personal tools and the other way round. Your employer decides what is allowed.",tasks:[["Drafting the weekly report (work side)","run"],["Filing expenses (work side)","run"],["Booking the dentist (personal side, not shown to work)","run"]],you:["desk","Sam works on one hard problem"]},
 {cap:"Agents do the routine. Sam does the thinking only a person can do.",tasks:[["Drafting the weekly report (work side)","done"],["Filing expenses (work side)","done"]],you:["desk","Sam works on one hard problem"]},
 {cap:"Something truly important shows up and the agent knows to interrupt.",tasks:[["Manager needs a yes on the Friday plan","warn"]],you:["desk","Sam works on one hard problem"],watch:["Your manager needs a yes on the Friday plan.","Yes, Friday works. Send the agenda."]},
 {cap:"Done in seconds. Sam keeps working on the hard problem, then goes home. Work stays behind.",tasks:[["Manager needs a yes on the Friday plan","done"],["Agenda sent","done"]],you:["dog","Sam walks the dog after work"]}]}
};

var root=document.getElementById("story");
if(root){
 var cur=null,idx=0,timers=[],playing=false;
 var menu=el("div","smenu");menu.setAttribute("role","group");menu.setAttribute("aria-label","Choose a path");
 var stage=el("div","stage");stage.hidden=true;
 root.appendChild(menu);root.appendChild(stage);

 function pathButtons(container,exclude){
  container.textContent="";
  ORDER.forEach(function(k){
   if(k===exclude)return;
   var b=el("button","pill"+(P[k].rec&&!exclude?" solid":""),P[k].name);
   b.type="button";
   if(P[k].rec){var r=el("span","badge","Recommended");b.appendChild(r)}
   b.addEventListener("click",function(){open(k,true)});
   container.appendChild(b);
  });
 }
 pathButtons(menu);

 // build stage skeleton
 var title=el("h3","stitle");title.tabIndex=-1;
 var split=el("div","split");
 var left=el("div","pane agents");var lh=el("div","phd","Your agents, working on their own");var ltasks=el("ul","tasks");left.appendChild(lh);left.appendChild(ltasks);
 var right=el("div","pane you");var rh=el("div","phd","You, living your day");
 var scene=el("div","scene");var fig=el("div","fig");var prop=el("div","prop");scene.appendChild(prop);scene.appendChild(fig);
 var rlabel=el("div","rlabel");
 var watch=el("div","watch");watch.hidden=true;
 var wmsg=el("div","wmsg"),wvoice=el("div","wvoice"),wsent=el("div","wsent");
 var bars=el("div","bars");for(var i=0;i<5;i++)bars.appendChild(el("i"));
 wvoice.appendChild(bars);var wtext=el("span","wtext");wvoice.appendChild(wtext);
 watch.appendChild(el("div","wping","Ping"));watch.appendChild(wmsg);watch.appendChild(wvoice);watch.appendChild(wsent);
 right.appendChild(rh);right.appendChild(scene);right.appendChild(rlabel);right.appendChild(watch);
 split.appendChild(left);split.appendChild(right);
 var cap=el("p","scap");cap.setAttribute("aria-live","polite");
 var ctl=el("div","sctl");
 var back=el("button","pill","Back"),next=el("button","pill solid","Next"),play=el("button","pill","Play"),menuBtn=el("button","pill","All paths");
 [back,next,play,menuBtn].forEach(function(b){b.type="button"});
 var prog=el("span","sprog");
 ctl.appendChild(back);ctl.appendChild(next);ctl.appendChild(play);ctl.appendChild(menuBtn);ctl.appendChild(prog);
 var endBox=el("div","send");endBox.hidden=true;
 var endH=el("h4",null,"Choose your next path");var endB=el("div","smenu");endB.setAttribute("role","group");endB.setAttribute("aria-label","Choose your next path");
 endBox.appendChild(endH);endBox.appendChild(endB);
 var fiction=el("p","note","Sam is an invented person. This scene is our vision for about 2036, not fact.");
 [title,fiction,split,cap,ctl,endBox].forEach(function(n){stage.appendChild(n)});

 function clear(){timers.forEach(clearTimeout);timers=[]}
 function stopPlay(){playing=false;play.textContent="Play";clear()}
 function open(k,focus){
  cur=k;idx=0;stopPlay();
  menu.hidden=false;
  stage.hidden=false;title.textContent=P[k].name;
  render();
  stage.scrollIntoView({behavior:reduce?"auto":"smooth",block:"start"});
  if(focus)title.focus({preventScroll:true});
 }
 function render(){
  var p=P[cur],n=p.steps.length,s=p.steps[idx];
  // tasks: cumulative with overrides
  var map={},order=[];
  for(var i=0;i<=idx;i++)p.steps[i].tasks.forEach(function(t){if(!(t[0] in map))order.push(t[0]);map[t[0]]=t[1]});
  // drop warn items that are later resolved under a different text is handled by authors using same text
  ltasks.textContent="";
  order.forEach(function(t){
   var li=el("li","t "+map[t]);
   var ic=el("span","ti");ic.setAttribute("aria-hidden","true");
   li.appendChild(ic);li.appendChild(el("span","tt",t));
   var st=map[t]==="done"?"Done":map[t]==="warn"?"Needs attention":"Working";
   var sr=el("span","sr"," ("+st+")");li.appendChild(sr);
   ltasks.appendChild(li);
  });
  scene.className="scene m-"+s.you[0];
  rlabel.textContent=s.you[1];
  cap.textContent=s.cap;
  prog.textContent="Step "+(idx+1)+" of "+n;
  back.disabled=idx===0;
  next.textContent=idx===n-1?"Finish":"Next";
  // watch
  clear();
  if(s.watch){
   watch.hidden=false;watch.className="watch ping";
   wmsg.textContent=s.watch[0];
   wvoice.hidden=true;wsent.hidden=true;
   if(reduce){wvoice.hidden=false;wtext.textContent="You say: "+s.watch[1];wsent.hidden=false;wsent.textContent="Reply sent";watch.className="watch"}
   else{
    timers.push(setTimeout(function(){wvoice.hidden=false;wtext.textContent="You say: "+s.watch[1];watch.className="watch talk"},1100));
    timers.push(setTimeout(function(){wsent.hidden=false;wsent.textContent="Reply sent";watch.className="watch"},3000));
   }
  }else{watch.hidden=true}
  var fin=idx===n-1&&false;
  endBox.hidden=true;
  if(playing){timers.push(setTimeout(advance,s.watch?5200:3800))}
 }
 function advance(){
  var n=P[cur].steps.length;
  if(idx<n-1){idx++;render()}
  else{stopPlay();finish()}
 }
 function finish(){
  pathButtons(endB,cur);
  endBox.hidden=false;
  endH.tabIndex=-1;
  endH.focus({preventScroll:true});
  endBox.scrollIntoView({behavior:reduce?"auto":"smooth",block:"nearest"});
 }
 next.addEventListener("click",function(){stopPlay();advance()});
 back.addEventListener("click",function(){stopPlay();if(idx>0){idx--;render()}});
 play.addEventListener("click",function(){
  if(playing){stopPlay();return}
  if(reduce){ // no timed motion: step manually
   cap.textContent="Reduced motion is on, so playback is manual. Use Next.";return}
  playing=true;play.textContent="Pause";
  if(idx===P[cur].steps.length-1)idx=0;
  endBox.hidden=true;render();
 });
 menuBtn.addEventListener("click",function(){stopPlay();stage.hidden=true;var b=menu.querySelector("button");if(b)b.focus();menu.scrollIntoView({block:"nearest"})});
}

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
