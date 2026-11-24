# Generates index.html from the moments below. Run: python3 build.py
import html
M=[
("Day one","Setup rating","Maya, a nurse and part-time painter","Maya opens her new dashboard for the first time.",
 "Today: the setup rating, the connected areas, and the next connectors to add are real parts of the downloadable claudebomb.com dashboard file. It scores 1 to 100 from what your assistant can actually read.",
 "In 2036: connecting an area takes one tap, and every service offers a safe read-only door, so most people start above 70.",
 [("","<b>Survey</b><small>Checking what can be read: email, calendar, tasks, files, money, fun</small>"),
  ("","<b>Setup rating</b> 35 of 100<div class='meter'><i style='--w:35%'></i></div>"),
  ("ok","<b>Connected</b> Email, calendar, tasks"),
  ("warn","<b>Missing</b> Money (read-only) would unlock spending and subscriptions"),
  ("draft","<b>Next</b> Add one connector, about two minutes. Rating goes to 45.")]),
("Morning","Ranked to-do list and voice journal","Tomas, a line cook who studies at night","Tomas starts the day with a plan he did not have to write.",
 "Today: a Today tab with a ranked list is in the dashboard file. Ranking uses deadlines, who is waiting, and what you said matters.",
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
 "Today: a Family and friends tab with birthdays, when you last talked, and a button that drafts a message is in the dashboard file. Shared plans are our vision; today you can add them by hand.",
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
 "Today: the dashboard file has a Work tab and a rule that keeps work and personal data apart. Whether your employer allows it is their call and ours to respect.",
 "In 2036: employers and people agree on the firewall in advance, so you can use one dashboard without work data going home or home data going to work.",
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
cards=[];rail=[]
for i,(t,sub,who,line,today,y36,steps) in enumerate(M,1):
    hl=" hl" if i==4 else ""
    badge="<span class='badge'>Highlight</span>" if i==4 else ""
    st="".join(f"<div class='step {c}'>{b}</div>" for c,b in steps)
    cards.append(f"""<article class="moment{hl}" id="m{i}" data-steps="{len(steps)}">
<div class="num">MOMENT {i} OF 9</div><h3>{html.escape(t)}: {html.escape(sub)}{badge}</h3>
<p class="who"><b>{html.escape(who.split(',')[0])}</b>,{html.escape(who.split(',',1)[1])}. {html.escape(line)}</p>
<div class="screen" aria-live="polite"><div class="bar"><span>Dashboard</span><span>{html.escape(t)}</span></div><div class="fw">{st}</div></div>
<div class="ctl"><button class="pill solid play" type="button">Press play</button><span class="status">Ready</span></div>
<div class="labels"><p class="today"><b>Works today</b>{html.escape(today.split(': ',1)[1])}</p><p class="y36"><b>In 2036</b>{html.escape(y36.split(': ',1)[1])}</p></div></article>""")
    rail.append(f'<a href="#m{i}" aria-label="Moment {i}: {html.escape(t)}"><span>{i}. {html.escape(t)}</span></a>')
page=f"""<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Endgame Life: a day in 2036</title>
<meta name="description" content="If claudebomb.com succeeds, this is what life looks like in 2036. A vision, with each claim labeled.">
<link rel="stylesheet" href="style.css"></head><body>
<a class="skip" href="#moments">Skip to the moments</a>
<header><a class="logo" href="#top">endgame<b>.</b>life</a><a class="pill solid" href="https://claudebomb.com">Start today</a></header>
<nav class="rail" aria-label="Moments">{''.join(rail)}</nav>
<section class="hero" id="top"><canvas id="gl" aria-hidden="true"></canvas>
<div class="hero-in"><div class="eyebrow">A vision of 2036</div><h1>One dashboard. <em>Your whole life</em> in view.</h1>
<p class="lede">Imagine everyone has a calm page that runs the day: the plan, the inbox, the people, the trip, the fun. Nine moments from people who live that way, each labeled for what works today and what is still a hope.</p>
<div class="cue"><a class="pill solid" href="#moments">See the nine moments</a><a class="pill" href="https://claudebomb.com">Start today</a></div></div></section>
<main id="moments"><section class="intro"><div class="eyebrow">If claudebomb.com succeeds</div><h2>This is life in 2036.</h2>
<p>Each person below is invented. Press play to watch a short storyboard. Under each one, <b>Works today</b> says what you can do now with the free dashboard file at claudebomb.com. <b>In 2036</b> says what we hope will be true.</p></section>
<div class="grid">{''.join(cards)}</div>
<section class="close" id="note"><div class="eyebrow">An honest note</div><h2>This is a vision, not a promise.</h2>
<p>The people are made up. The screens are storyboards, not screenshots. Here is where things stand.</p>
<div class="three">
<div class="card a"><h3>Real today</h3><ul><li>A free dashboard file at claudebomb.com that you give to an AI assistant to set up.</li><li>A setup rating from 1 to 100, based on what the assistant can read.</li><li>Tabs for today, agenda, inbox, messages, money, fun, family and friends, work, and you.</li><li>Rules: you are in charge, nothing leaves, read-only money.</li></ul></div>
<div class="card b"><h3>Hoped for</h3><ul><li>One tap to connect most services.</li><li>Standard read-only access at banks and apps.</li><li>Drafts that sound like you.</li><li>Shared plans among people who opt in.</li><li>Employers and people agreeing on a privacy firewall.</li></ul></div>
<div class="card c"><h3>Unsolved</h3><ul><li>How to share dashboards safely when they touch work data.</li><li>Security risks, including malicious files and tricked assistants.</li><li>Whether assistants stay accurate enough to trust with drafts.</li><li>Whether companies will allow it.</li></ul></div></div>
<p><a class="pill solid" href="https://claudebomb.com">Start today at claudebomb.com</a></p></section></main>
<footer>Endgame Life is the vision site for <a href="https://claudebomb.com">claudebomb.com</a>. Three.js is used under the MIT license (vendor/three.LICENSE.txt).</footer>
<script type="module" src="app.js"></script></body></html>"""
open("index.html","w").write(page)
