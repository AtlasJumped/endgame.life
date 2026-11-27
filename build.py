# Generates index.html from the moments below. Run: python3 build.py
import html
M=[
("Day one","Setup rating","Maya, a nurse and part-time painter","Maya opens her new dashboard for the first time.",
 "Today: the setup rating, the connected areas, and the next connectors to add are real parts of the free personaldash.life dashboard, which starts as text you paste into your AI assistant. It scores 1 to 100 from what your assistant can actually read.",
 "In 2036: connecting an area takes one tap, and every service offers a safe read-only door, so most people start above 70.",
 [("","<b>Assessing environment</b><small>Checking what can be read: email, calendar, tasks, files, money, fun</small>"),
  ("","<b>Setup rating</b> 35 of 100<div class='meter'><i style='--w:35%'></i></div>"),
  ("ok","<b>Connected</b> Email, calendar, tasks"),
  ("warn","<b>Missing</b> Money (read-only) would unlock spending and subscriptions"),
  ("draft","<b>Next</b> Add one connector, about two minutes. Rating goes to 45.")]),
("Morning","Ranked to-do list and voice journal","Tomas, a line cook who studies at night","Tomas starts the day with a plan he did not have to write.",
 "Today: a Today tab with a ranked list is in the personaldash.life dashboard. Ranking uses deadlines, who is waiting, and what you said matters.",
 "In 2036: the list reshapes itself as the day changes, and you can talk to it while you walk.",
 [("","<b>Last refreshed</b> 6:42 AM"),
  ("","<b>1. Submit lab report</b><small>Due noon. Professor is waiting.</small>"),
  ("","<b>2. Call the landlord</b><small>You said this matters.</small>"),
  ("","<b>3. Buy rice and eggs</b>"),
  ("ok","<b>Voice journal</b><small>\"Slept badly, but the lab report is nearly done.\" Saved to your private notes.</small>")]),
("Inbox","Drafted replies, never sent without a yes","Priya, a freelance translator","Priya clears forty messages in five minutes.",
 "Today: the Inbox tab groups mail into Needs a reply, Waiting on others, and FYI, with a short draft in your voice. Nothing is sent without your yes.",
 "In 2036: drafts match your voice closely enough that most edits are one word. The yes still belongs to you.",
 [("","<b>Needs a reply</b> 3 &nbsp; <b>Waiting</b> 5 &nbsp; <b>FYI</b> 32"),
  ("draft","<b>Draft to the agency</b><small>\"Thanks, I can deliver Thursday.\"</small>"),
  ("","<span>Edit</span> &nbsp; <b>Send</b> (waits for Priya)"),
  ("ok","<b>Priya taps Send</b><small>Only now does anything leave.</small>")]),
("Family and friends","The people who matter, first","Dev, a father of two who travels for work","Dev never again misses a birthday or a long silence.",
 "Today: a Family and friends tab with birthdays, when you last talked, and a button that drafts a message is in the personaldash.life dashboard. Shared plans are our vision; today you can add them by hand.",
 "In 2036: your people can opt in to share plans with you, so a visit, a dinner, or a call finds a free evening for everyone.",
 [("","<b>Birthdays soon</b>"),
  ("","<div class='cols'><div class='step show'><b>Nia</b> (daughter)<small>Birthday in 6 days</small></div><div class='step show'><b>Grandma Ruth</b><small>Birthday in 19 days</small></div></div>"),
  ("warn","<b>Last talked</b><small>Uncle Sam: 74 days ago. Old friend Jun: 41 days ago.</small>"),
  ("draft","<b>Drafted message to Sam</b><small>\"Thinking of you. Free Sunday for a call?\" Waits for Dev's yes.</small>"),
  ("ok","<b>Shared plans</b><small>Sunday 4 PM: call with Sam. Saturday: Nia's recital.</small>")]),
("Planning a trip","One conversation, one itinerary","Lena, a retired teacher","Lena plans a week by the sea without opening ten tabs.",
 "Today: a Travel and places area counts toward your setup rating, and an assistant can help plan from what you tell it. Booking needs your yes.",
 "In 2036: trips are drafted around your calendar, your budget, and your people's availability, then confirmed with one yes.",
 [("","<b>Lena says</b><small>\"A quiet week by the sea in April, under my budget.\"</small>"),
  ("","<b>Calendar check</b><small>April 12 to 19 is free.</small>"),
  ("draft","<b>Draft itinerary</b><small>Train out, small inn, three walks, one day of nothing.</small>"),
  ("ok","<b>Lena says yes</b><small>Only then are bookings made.</small>")]),
("Have fun","Your house and your town","Amara, a college student","Amara finds tonight's plan without scrolling.",
 "Today: a Have fun tab suggests events, shows, music, and places based on what you said you enjoy, and leaves out what you never want.",
 "In 2036: it also knows what is in the house, such as the board games, the guitar, and the ingredients, and offers ideas that use them.",
 [("","<b>In the house</b><small>Board games, a guitar, flour and eggs</small>"),
  ("","<b>Near you tonight</b><small>Open mic at 8. Free outdoor film at 9.</small>"),
  ("draft","<b>Idea</b><small>Bake first, then walk to the open mic.</small>"),
  ("ok","<b>Left out</b><small>Horror, as you asked.</small>")]),
("Work","Behind a privacy firewall","Jonas, a project coordinator","Jonas keeps work at work and home at home.",
 "Today: the personaldash.life dashboard has a Work tab and a rule that keeps work and personal data apart. Whether your employer allows it is their call and ours to respect.",
 "In 2036: employers and people agree on the firewall in advance, so you can use one dashboard without work data going home or home data going to work. The work version is being built in the open at workdash.life.",
 [("","<div class='cols'><div class='step show'><b>Work</b><small>Standup 9:30. Budget draft due.</small></div><div class='step show'><b>Personal</b><small>Dentist 5:15. Call Mom.</small></div></div>"),
  ("warn","<b>Firewall</b><small>The dentist stays off the work calendar. The budget stays off the personal side.</small>"),
  ("ok","<b>Unsure item</b><small>The assistant asks which side it belongs to.</small>")]),
("Money","Read-only, always","Rosa, a small bakery owner","Rosa sees where her money goes and cannot lose it by accident.",
 "Today: the dashboard reads spending and subscriptions only when you connect a read-only view. It never moves money.",
 "In 2036: read-only access is a standard setting at every bank, so an assistant can notice trouble early without any power to act.",
 [("","<b>This month</b><small>Groceries, rent, supplies</small>"),
  ("","<b>Subscriptions</b><small>7 found. 2 unused for 90 days.</small>"),
  ("warn","<b>Unusual</b><small>A charge twice the usual amount.</small>"),
  ("ok","<b>Read-only</b><small>No button here moves money.</small>")]),
("Public profile","Share only what you choose","Noor, a woodworker","Noor shares one page and nothing else.",
 "Today: your dashboard is private unless you choose to share it. A public profile page is our vision, not a feature today.",
 "In 2036: you pick a few things to publish, such as your projects, your hours, and how to reach you, and everything else stays yours.",
 [("","<b>Choose what to share</b>"),
  ("ok","<b>Projects</b> shared"),
  ("ok","<b>Hours</b> shared"),
  ("warn","<b>Calendar, mail, money</b> private"),
  ("draft","<b>Your page</b><small>endgame life, Noor, woodworker</small>")]),
]
SL=["day-one","morning","inbox","family","trip","fun","work","money","profile"]
GUARD='<script>/* hmr-card fallback: if the card player never loads, demo buttons open a still picture */(function(){var d=document,w=window,up=0;if(!d.addEventListener)return;w.addEventListener("load",function(){up=1},false);d.addEventListener("click",function(e){if(!up||w.HMRCard)return;var t=e.target;while(t&&t.getAttribute&&!t.getAttribute("data-hmr-card"))t=t.parentNode;if(t&&t.getAttribute){e.preventDefault();w.location.href="hmr-card/still.html"}},false)})();</script>\n'
PM={"ORDER": ["overview", "family", "money", "time", "fun", "work"], "meta": {"overview": {"name": "Overview: how the world will probably change", "rec": True}, "family": {"name": "Family and relationships", "rec": False}, "money": {"name": "Saving money", "rec": False}, "time": {"name": "Saving time", "rec": False}, "fun": {"name": "Having fun", "rec": False}, "work": {"name": "Work", "rec": False}}}
PATHS="".join('<button type="button" class="pill%s" data-hmr-card="path-%s">%s%s</button>'%(" solid" if PM["meta"][k]["rec"] else "",k,html.escape(PM["meta"][k]["name"]),'<span class="badge">Recommended</span>' if PM["meta"][k]["rec"] else "") for k in PM["ORDER"])
cards=[];rail=[]
for i,(t,sub,who,line,today,y36,steps) in enumerate(M,1):
    hl=" hl" if i==4 else ""
    badge="<span class='badge'>Highlight</span>" if i==4 else ""
    st="".join(f"<div class='step {c}'>{b}</div>" for c,b in steps)
    cards.append(f"""<article class="moment{hl}" id="m{i}" data-steps="{len(steps)}">
<div class="num">MOMENT {i} OF 9</div><h3>{html.escape(t)}: {html.escape(sub)}{badge}</h3>
<p class="who"><b>{html.escape(who.split(',')[0])}</b>,{html.escape(who.split(',',1)[1])}. {html.escape(line)}</p>
<div class="screen" aria-live="polite"><div class="bar"><span>Dashboard</span><span>{html.escape(t)}</span></div><div class="fw">{st}</div></div>
<div class="ctl"><button class="pill solid" type="button" data-hmr-card="moment-{SL[i-1]}" aria-label="Press play: {html.escape(t)}">Press play</button></div>
<div class="labels"><p class="today"><b>Works today</b>{html.escape(today.split(': ',1)[1][0].upper()+today.split(': ',1)[1][1:])}</p><p class="y36"><b>In 2036</b>{html.escape(y36.split(': ',1)[1][0].upper()+y36.split(': ',1)[1][1:])}</p></div></article>""")
    rail.append(f'<a href="#m{i}" aria-label="Moment {i}: {html.escape(t)}"><span>{i}. {html.escape(t)}</span></a>')
page=f"""<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Endgame Life: a day in 2036</title>
<meta name="description" content="If the free personal AI dashboard at personaldash.life succeeds, this is what life looks like in 2036. A vision, with each claim labeled.">
<link rel="stylesheet" href="style.css"><style>header .hacts{{display:flex;gap:.5rem;align-items:center;flex:none;margin-left:auto}}@media(min-width:821px){{header .hacts{{margin-left:0}}}}header .hacts .pill{{white-space:nowrap}}@media(max-width:560px){{header .hacts .pill{{padding:.45rem .75rem;font-size:.85rem}}header .hacts .hx{{display:none}}}}</style></head><body>
<a class="skip" href="#moments">Skip to the moments</a>
<div class="elv8-cap" data-elv8-cap role="note" style="font:13px/1.45 system-ui,-apple-system,'Segoe UI',Roboto,sans-serif;text-align:center;padding:6px 12px;background:#fffdf8;color:#4a4760;border-bottom:1px solid #e8e3d6;position:fixed;top:0;left:0;right:0;z-index:40">This website is owned by the person who owns this website. <a href="https://elevat.ing/" style="color:inherit;font-weight:700">elevat.ing</a></div>
<header><a class="logo" href="#top">endgame<b>.</b>life</a><nav class="hnav" aria-label="Sections"><a href="#path">Choose your path</a><a href="#vision">The vision</a><a href="#pitch">Why not now?</a></nav><span class="hacts"><button type="button" class="pill" data-hmr-login aria-label="Log in (coming soon)">Log in</button><a class="pill solid" href="https://personaldash.life" aria-label="Start now: personaldash.life">Start now<span class="hx">: personaldash.life</span></a></span></header>
<nav class="rail" aria-label="Moments">{''.join(rail)}</nav>
<section class="hero" id="top"><canvas id="gl" aria-hidden="true"></canvas>
<div class="hero-in"><div class="eyebrow">A vision of 2036</div><h1>One dashboard. <em>Your whole life</em> in view.</h1>
<p class="lede">Imagine everyone has a calm page that runs the day: the plan, the inbox, the people, the trip, the fun. Nine moments from people who live that way, each labeled for what works today and what is still a hope.</p>
<div class="cue"><a class="pill solid" href="#moments">See the nine moments</a><a class="pill" href="https://personaldash.life">Start today</a></div></div></section>
<main id="moments"><section class="intro"><div class="eyebrow">If personaldash.life succeeds</div><h2>This is life in 2036.</h2>
<p>Each person below is invented. Press play to watch a short storyboard. Under each one, <b>Works today</b> says what you can do now with the free dashboard at personaldash.life. <b>In 2036</b> says what we hope will be true.</p>
<p class="soon"><b>We are really not that far.</b> We built this as a ten-year vision. If everybody jumps on it today, it is more like a one-year vision. The only thing missing is open-source contributions. If this site blows up, everybody could have this technology at the beginning of 2027: about 90% of it in the first couple of months, then the integrations. With smart-home links like Zigbee and Wi-Fi, that means almost everything in your home.</p></section>
<div class="grid">{''.join(cards)}</div>
<section class="path" id="path" aria-labelledby="path-h"><div class="eyebrow">Choose your path</div><h2 id="path-h">Where do you want to go first?</h2>
<p class="note">Short invented scenes of life around 2036. The people are made up. This is our vision, not fact. Press Play, or step through with Next.</p>
<div id="story" class="story"><div class="smenu" role="group" aria-label="Choose a path">{PATHS}</div><noscript><p>The story scenes need JavaScript. The nine moments above work without it.</p></noscript></div></section>
<section class="vision" id="vision" aria-labelledby="vision-h"><div class="eyebrow">The vision</div><h2 id="vision-h">Our picture of about 2036</h2>
<p class="tag"><b>Our vision, not fact.</b> Nothing on this page is a forecast or a promise. It is where we think this could go.</p>
<div class="vgrid">
<article class="vcard"><div class="phone" aria-hidden="true"><div class="pscr"><i></i><i></i><i></i></div><button class="mic" type="button" tabindex="-1"><span></span></button></div>
<h3>A microphone button that never goes away</h3><p>In the bottom left corner of every phone, always, is a microphone button. Press it and talk. It goes straight to your own AI agent.</p></article>
<article class="vcard"><div class="db" aria-hidden="true"><b></b><b></b><b></b></div><h3>Your agent learns you, in your own database</h3><p>It records what you say and learns about you. The record is stored in a database that belongs to you, not to an app company.</p></article>
<article class="vcard"><div class="keyd"><button class="keysw" type="button" aria-pressed="false"><span class="knob"></span><span class="kl">Locked</span></button></div><h3>Danger assets stay behind a physical key</h3><p>Money is the main danger asset. We picture a hardware key that you carry, or keep in a lockbox at home, with a manual switch. Nothing that moves money works until you flip it. Try the switch.</p><p class="state" aria-live="polite">Money is locked. No agent can move it.</p></article>
<article class="vcard"><div class="pair" aria-hidden="true"><div><b>You</b><small>voice, habits, places match</small></div><div class="fake"><b>Fake</b><small>does not match</small></div></div><h3>Oversharing with the right ally protects you</h3><p>Our idea is that if your agent holds your voice and your activity, it can tell the real you from a fake, so a stolen ID matters much less once money is locked. Whether this holds up against fast-improving fakes is <b>unknown</b>. It needs testing.</p></article>
<article class="vcard"><div class="home" aria-hidden="true"><span></span><span></span><span></span><span></span></div><h3>A home that runs itself</h3><p>Every light and every plug is automated. The thermostat, the door locks, the garage door, even the ceiling fans answer to your dashboard. Lights and heating turn off when nobody needs them, which saves money. Air filters check the air quality and switch on by themselves, which protects your health. Cameras are there only if you choose them.</p></article>
<article class="vcard"><div class="wear" aria-hidden="true"><span></span></div><h3>Fewer screens, more faces</h3><p>A watch or a bracelet does what a phone does, so more of us leave the phone at home. We hope the time saved goes to looking at each other.</p></article>
</div>
<div class="urgent"><h3>Why this is urgent</h3><p>Phone AI may soon be controlled by a few companies. If that happens before an open picture exists, the open-source community loses its grip. We want to share this vision first, and build it together as an open-source community.</p></div>
<div class="far" aria-labelledby="far-h"><h3 id="far-h">Here is the endgame, and here is how far we are from it</h3>
<p class="note">Our own reading, November 2026. Not a measurement, and it will change.</p>
<ul class="farl">
<li><span class="st part">Partly here</span><b>A microphone button that goes to your own agent</b><small>Phones already have voice assistants. One that is yours, learns you, and works across your whole life is not standard yet.</small></li>
<li><span class="st part">Partly here</span><b>A record of you that you own</b><small>You can keep your own notes and files. An agent that learns from a database you control is not the default anywhere.</small></li>
<li><span class="st yes">Here today, early</span><b>One dashboard for your day</b><small>The free personal dashboard at personaldash.life works now, with the assistant you already use.</small></li>
<li><span class="st part">Partly here</span><b>Read-only connections everywhere</b><small>Many services connect to assistants. Read-only access as a standard setting, especially at banks, is rare.</small></li>
<li><span class="st part">Partly here</span><b>A home run from the same dashboard</b><small>Smart lights, plugs, thermostats, locks, and air filters exist today and connect over Zigbee and Wi-Fi. One open dashboard for all of them is not standard yet.</small></li>
<li><span class="st no">Not yet</span><b>A physical key for money</b><small>An idea of ours. Nobody sells it as described.</small></li>
<li><span class="st part">Starting</span><b>Built in the open, by everyone</b><small>That part is up to us. It is why this page exists.</small></li>
</ul></div>
<div class="links"><a class="pill solid" href="https://personaldash.life">Start now: personaldash.life</a><a class="pill" href="https://elevat.ing/">The elevat.ing family of websites</a></div></section>
<section class="pitch" id="pitch" aria-labelledby="pitch-h"><div class="eyebrow">Why not now?</div><h2 id="pitch-h">There is no good reason not to have this today.</h2>
<p class="big">This vision is not far off. It is around the corner. The tools mostly exist. The only thing missing is people building it together, in the open.</p>
<p>We describe the absolute endgame of what AI can do at its best, and then we say: we are really not that far. It is built as a ten-year vision. If everybody jumps on it today, it is a one-year vision.</p>
<div class="pgrid">
<article class="vcard"><h3>Imagine</h3><p>Imagine the world's best engineer and the world's best designer took all of humanity's tools and made the one best tool for you. What would it be?</p><p>We think it would be a dashboard: one place you open on your phone or your computer, a one-stop shop for everything you want.</p><p>And it still would not be as good as what the whole world could make together in an open-source effort. The world's best engineer is all of us.</p></article>
<article class="vcard"><h3>What "everything you want" means</h3><ul class="want"><li>Control over your time</li><li>Control over your money</li><li>Your family and relationships</li><li>Your power: where you stand, how to grow it, how to protect it</li><li>Fun</li><li>Good health</li><li>High productivity</li><li>More happiness, and less suffering, per hour</li><li>Less time on things you do not enjoy</li><li>More confidence that your actions are the best ones for your mission</li></ul></article>
<article class="vcard"><h3>Why it must be open source</h3><p>If someone takes this over and tries to monetize it, it loses its open-source nature, and that corrupts it.</p><p><b>This tool needs to be an open source tool.</b> Free forever, no ads, no in-app purchases.</p><p>If this is the first place you have seen this idea, share it.</p></article>
</div>
<div class="block"><h3>What is blocking us</h3><ul class="want">
<li>Dashboards today are made for one field of work, or they cost money, or they are free with in-app purchases.</li>
<li>They are limited by the few engineers building them.</li>
<li>Phone AI may soon be controlled by a few companies.</li>
<li>Safe, read-only access is not yet standard at banks and apps.</li>
<li>Not enough of us are building it yet.</li>
</ul><p>Help us build this list. <button type="button" class="pill" data-egfb-open>Tell us what is blocking it</button></p></div>
<div class="urgent mission"><h3>Your mission statement</h3><p>We want every person alive to have their own mission statement: something you can read when you wake up and say, "This is why I woke up this morning. This is what I am doing."</p><p>Right now most of us could not say what our mission is if asked. You can live aimlessly or with purpose, and if you live with purpose, you have a mission. Whether it is to enjoy life, build something, or help others does not matter.</p><p><b>If you cannot say what your mission is right now, reading this, you owe it to yourself to participate.</b></p></div>
<p class="links"><a class="pill solid" href="https://personaldash.life">Here is the dashboard you can use today</a></p>
<p class="note">It is simple today, and it is already good. The vision is to make it beautiful for all of humanity, together.</p>
</section>
<section class="close" id="note"><div class="eyebrow">An honest note</div><h2>This is a vision, not a promise.</h2>
<p>The people are made up. The screens are storyboards, not screenshots. Here is where things stand.</p>
<div class="three">
<div class="card a"><h3>Real today</h3><ul><li>A free dashboard at personaldash.life: text you paste into an AI assistant, which then sets it up.</li><li>A setup rating from 1 to 100, based on what the assistant can read.</li><li>Tabs for today, agenda, inbox, messages, money, fun, family and friends, work, and you.</li><li>Rules: you are in charge, nothing leaves, read-only money.</li></ul></div>
<div class="card b"><h3>Hoped for</h3><ul><li>One tap to connect most services.</li><li>Standard read-only access at banks and apps.</li><li>Drafts that sound like you.</li><li>Shared plans among people who opt in.</li><li>Employers and people agreeing on a privacy firewall.</li></ul></div>
<div class="card c"><h3>Unsolved</h3><ul><li>How to share dashboards safely when they touch work data.</li><li>Security risks, including malicious files and tricked assistants.</li><li>Whether assistants stay accurate enough to trust with drafts.</li><li>Whether companies will allow it.</li></ul></div></div>
<p class="links"><a class="pill solid" href="https://personaldash.life">Start today at personaldash.life</a><button type="button" class="pill" data-egfb-open>Tell us what you think</button></p></section></main>
<footer><p><a href="https://personaldash.life">Start now: personaldash.life</a> &nbsp; <a href="https://elevat.ing/">The elevat.ing family of websites</a></p>Endgame Life is the vision site for our dashboards: <a href="https://personaldash.life">personaldash.life</a>, free today, and <a href="https://workdash.life">workdash.life</a>, the work version we are building next. Free prompts: <a href="https://claudebomb.com">claudebomb.com</a>. Three.js is used under the MIT license (vendor/three.LICENSE.txt).</footer>
<div class="egfb" id="egfb" role="dialog" aria-modal="false" aria-labelledby="egfb-h" hidden>
<button type="button" class="egx" aria-label="Close, this is optional" data-egfb-close>&times;</button>
<form data-hmr-anon-form action="#" id="egfb-f">
<h3 id="egfb-h">Optional: two minutes for the vision?</h3>
<fieldset><legend>1. Do you think this is a good idea?</legend><label><input type="radio" name="good_idea" value="Yes"> Yes</label><label><input type="radio" name="good_idea" value="Not sure"> Not sure</label><label><input type="radio" name="good_idea" value="No"> No</label></fieldset>
<label class="fl" for="egfb-b">2. Is somebody else already doing it better? If so, a link</label><input id="egfb-b" name="doing_it_better" type="text" inputmode="url" autocomplete="off" placeholder="https://">
<label class="fl" for="egfb-e">3. Your email (optional)</label><input id="egfb-e" name="email" type="email" autocomplete="email">
<label class="chk"><input type="checkbox" name="wants_dashboard" value="Yes" id="egfb-d"> 4. I want to download the prototype (the free dashboard opens at personaldash.life when you press Submit)</label>
<label class="fl" for="egfb-m">Anything else, like what is blocking this (optional)</label><textarea id="egfb-m" name="message" rows="3"></textarea>
<input type="text" name="botcheck" class="hp" tabindex="-1" autocomplete="off" aria-hidden="true">
<p class="small">Nothing here is required. Your answers come to us so we can read them. Your email is used only to reply.</p>
<button type="submit" class="pill solid">Submit</button>
<p data-hmr-anon-status role="status" aria-live="polite"></p>
</form></div>
<script type="module" src="app.js"></script><script src="extra.js" defer></script>
{GUARD}<script src="hmr-card/hmr-card.js?v=4" defer></script>
<script src="hmr-dock.js?v=6.10.2" data-site="endgame.life" data-design=".dfab" data-design-panel=".dpanel" defer></script><script src="https://hmrfamily.life/x/hmr-aud.js?v=1" defer></script>
<script>(function(){{var c=document.querySelector("[data-elv8-cap]"),h=document.querySelector("body>header");if(!c||!h)return;function f(){{var y=c.offsetHeight;h.style.top=y+"px";document.body.style.paddingTop=y+"px"}}f();addEventListener("resize",f)}})();</script>
</body></html>"""
open("index.html","w").write(page)
