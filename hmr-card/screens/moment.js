/* HMR card screen module: moment (storyboard steps from endgame.life, made-up data). Loaded on demand by hmr-card.js.
   One screen holds all nine moments, hidden. A card shows its own group (data-t="m1".."m9") and its steps ("m1.s1"...). */
(function () {
var W = window, H = W.HMRCard; if (!H) return;
H.css('hc-scr-moment', [
'.hc-moment{position:absolute;inset:0;display:flex;flex-direction:column;font-size:14px;line-height:1.4;color:@F;background:@S}',
'.hc-moment [hidden]{display:none!important}',
'.hc-moment-bar{display:flex;justify-content:space-between;gap:8px;padding:8px 12px;border-bottom:1px solid @L;background:@B;color:@M;font-size:12px}',
'.hc-moment-bar b{color:@F}',
'.hc-moment-pane{flex:1;overflow:auto;padding:10px 12px;display:flex;flex-direction:column;gap:8px}',
'.hc-moment-g{display:flex;flex-direction:column;gap:8px}',
'.hc-moment-st{padding:8px 10px;border:1px solid @L;border-radius:10px;background:@B}',
'.hc-moment-st b{color:@F}',
'.hc-moment-st small{display:block;color:@M;font-size:12px}',
'.hc-moment-ok{border-left:4px solid @A}',
'.hc-moment-warn{border-left:4px double @F}',
'.hc-moment-draft{border-style:dashed;border-left:4px dashed @A}',
'.hc-moment-cols{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,130px),1fr));gap:8px}',
'.hc-moment-cols .hc-moment-st{margin:0;background:@S}',
'.hc-moment-meter{height:12px;margin-top:6px;border:1px solid @F;border-radius:99px;background:@S;overflow:hidden}',
'.hc-moment-meter i{display:block;height:100%;width:var(--w);background:@A}'
].join(''));
var D = {
 "m1": {
  "steps": [
   [
    "",
    "<b>Survey</b><small>Checking what can be read: email, calendar, tasks, files, money, fun</small>"
   ],
   [
    "",
    "<b>Setup rating</b> 35 of 100<div class='hc-moment-meter'><i style='--w:35%'></i></div>"
   ],
   [
    "ok",
    "<b>Connected</b> Email, calendar, tasks"
   ],
   [
    "warn",
    "<b>Missing</b> Money (read-only) would unlock spending and subscriptions"
   ],
   [
    "draft",
    "<b>Next</b> Add one connector, about two minutes. Rating goes to 45."
   ]
  ]
 },
 "m2": {
  "steps": [
   [
    "",
    "<b>Last refreshed</b> 6:42 AM"
   ],
   [
    "",
    "<b>1. Submit lab report</b><small>Due noon. Professor is waiting.</small>"
   ],
   [
    "",
    "<b>2. Call the landlord</b><small>You said this matters.</small>"
   ],
   [
    "",
    "<b>3. Buy rice and eggs</b>"
   ],
   [
    "ok",
    "<b>Voice journal</b><small>\"Slept badly, but the lab report is nearly done.\" Saved to your private notes.</small>"
   ]
  ]
 },
 "m3": {
  "steps": [
   [
    "",
    "<b>Needs a reply</b> 3 &nbsp; <b>Waiting</b> 5 &nbsp; <b>FYI</b> 32"
   ],
   [
    "draft",
    "<b>Draft to the agency</b><small>\"Thanks, I can deliver Thursday.\"</small>"
   ],
   [
    "",
    "<span>Edit</span> &nbsp; <b>Send</b> (waits for Priya)"
   ],
   [
    "ok",
    "<b>Priya taps Send</b><small>Only now does anything leave.</small>"
   ]
  ]
 },
 "m4": {
  "steps": [
   [
    "",
    "<b>Birthdays soon</b>"
   ],
   [
    "",
    "<div class='hc-moment-cols'><div class='hc-moment-st'><b>Nia</b> (daughter)<small>Birthday in 6 days</small></div><div class='hc-moment-st'><b>Grandma Ruth</b><small>Birthday in 19 days</small></div></div>"
   ],
   [
    "warn",
    "<b>Last talked</b><small>Uncle Sam: 74 days ago. Old friend Jun: 41 days ago.</small>"
   ],
   [
    "draft",
    "<b>Drafted message to Sam</b><small>\"Thinking of you. Free Sunday for a call?\" Waits for Dev's yes.</small>"
   ],
   [
    "ok",
    "<b>Shared plans</b><small>Sunday 4 PM: call with Sam. Saturday: Nia's recital.</small>"
   ]
  ]
 },
 "m5": {
  "steps": [
   [
    "",
    "<b>Lena says</b><small>\"A quiet week by the sea in April, under my budget.\"</small>"
   ],
   [
    "",
    "<b>Calendar check</b><small>April 12 to 19 is free.</small>"
   ],
   [
    "draft",
    "<b>Draft itinerary</b><small>Train out, small inn, three walks, one day of nothing.</small>"
   ],
   [
    "ok",
    "<b>Lena says yes</b><small>Only then are bookings made.</small>"
   ]
  ]
 },
 "m6": {
  "steps": [
   [
    "",
    "<b>In the house</b><small>Board games, a guitar, flour and eggs</small>"
   ],
   [
    "",
    "<b>Near you tonight</b><small>Open mic at 8. Free outdoor film at 9.</small>"
   ],
   [
    "draft",
    "<b>Idea</b><small>Bake first, then walk to the open mic.</small>"
   ],
   [
    "ok",
    "<b>Left out</b><small>Horror, as you asked.</small>"
   ]
  ]
 },
 "m7": {
  "steps": [
   [
    "",
    "<div class='hc-moment-cols'><div class='hc-moment-st'><b>Work</b><small>Standup 9:30. Budget draft due.</small></div><div class='hc-moment-st'><b>Personal</b><small>Dentist 5:15. Call Mom.</small></div></div>"
   ],
   [
    "warn",
    "<b>Firewall</b><small>The dentist stays off the work calendar. The budget stays off the personal side.</small>"
   ],
   [
    "ok",
    "<b>Unsure item</b><small>The assistant asks which side it belongs to.</small>"
   ]
  ]
 },
 "m8": {
  "steps": [
   [
    "",
    "<b>This month</b><small>Groceries, rent, supplies</small>"
   ],
   [
    "",
    "<b>Subscriptions</b><small>7 found. 2 unused for 90 days.</small>"
   ],
   [
    "warn",
    "<b>Unusual</b><small>A charge twice the usual amount.</small>"
   ],
   [
    "ok",
    "<b>Read-only</b><small>No button here moves money.</small>"
   ]
  ]
 },
 "m9": {
  "steps": [
   [
    "",
    "<b>Choose what to share</b>"
   ],
   [
    "ok",
    "<b>Projects</b> shared"
   ],
   [
    "ok",
    "<b>Hours</b> shared"
   ],
   [
    "warn",
    "<b>Calendar, mail, money</b> private"
   ],
   [
    "draft",
    "<b>Your page</b><small>endgame life, Noor, woodworker</small>"
   ]
  ]
 }
};
H.registerScreen('moment', function (root) {
  var h = '<div class="hc-moment-bar"><b>Dashboard</b><span>Made-up data</span></div><div class="hc-pane hc-moment-pane">', k, j, g, s;
  for (k in D) {
    g = D[k]; h += '<div class="hc-moment-g" data-t="' + k + '" hidden>';
    for (j = 0; j < g.steps.length; j++) { s = g.steps[j]; h += '<div class="hc-moment-st' + (s[0] ? ' hc-moment-' + s[0] : '') + '" data-t="' + k + '.s' + (j + 1) + '" hidden>' + s[1] + '</div>'; }
    h += '</div>';
  }
  root.className += ' hc-moment';
  root.innerHTML = h + '</div>';
});
})();
