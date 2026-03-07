#!/usr/bin/env node
// ============================================================
// BUILD SCRIPT — Generates index.html from content/ folder
// ============================================================
// Usage:  node build.js
// Output: index.html (in same directory)
//
// Edit files in content/ to change any text, then re-run this script.
// ============================================================

const fs = require('fs');
const path = require('path');
const { SITE_META, DAYS } = require('./content/index.js');

// Helper: escape HTML entities
function esc(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

// Helper: render verses
function renderVerses(verses) {
  return verses.map(v =>
    `<span class='verse-num'>${v.num}</span>${v.text}`
  ).join(' ');
}

// Helper: build a detail page
function buildDetailPage(dayKey, dayLabel, type, topic, passageIndex, passages) {
  const typeKey = type === 'fundamental' ? 'f' : 'r';
  const typeLabel = type === 'fundamental' ? "Life's Fundamental" : 'Responding Well';
  const id = `${dayKey}-${typeKey}-${passageIndex}`;
  const p = passages[passageIndex];

  return `
<div class="page" id="${id}">
  <a href="#home" class="back">&#8592; Overview</a>
  <div class="dh">
    <div class="dh-day">${esc(dayLabel)}</div>
    <div class="dh-type ${typeKey}">${typeLabel}</div>
    <h2>${esc(topic.title)}</h2>
    <div class="dh-q">${esc(topic.question)}</div>
    <div class="dh-desc">${esc(topic.description)}</div>
  </div>
  <div class="pc">
    <div class="pc-head">
      <div class="pc-t">${esc(p.title)}</div>
      <div class="pc-ref">${esc(p.ref)}</div>
      <div class="pc-sum">${esc(p.summary)}</div>
      <div class="pc-rq">${esc(p.rq)}</div>
    </div>
    <div class="pc-body">
      <div class="pc-sl">Scripture</div>
      <div class="pc-sc">${renderVerses(p.verses)}</div>
    </div>
  </div>
</div>`;
}

// ============================================================
// BUILD
// ============================================================

// 1. Build all detail pages
let detailPages = '';
DAYS.forEach((day) => {
  day.fundamental.passages.forEach((_, i) => {
    detailPages += buildDetailPage(day.key, day.label, 'fundamental', day.fundamental, i, day.fundamental.passages);
  });
  day.response.passages.forEach((_, i) => {
    detailPages += buildDetailPage(day.key, day.label, 'response', day.response, i, day.response.passages);
  });
});

// 2. Build overview day rows with data attributes for JS
// Our DAYS array: 0=Mon, 1=Tue, 2=Wed, 3=Thu, 4=Fri, 5=Sat, 6=Sun
// JS getDay():    1=Mon, 2=Tue, 3=Wed, 4=Thu, 5=Fri, 6=Sat, 0=Sun
let overviewRows = '';
DAYS.forEach((day, dayIndex) => {
  const jsDayNum = dayIndex < 6 ? dayIndex + 1 : 0;
  const fCount = day.fundamental.passages.length;
  const rCount = day.response.passages.length;

  overviewRows += `
  <div class="day-row" data-day="${jsDayNum}">
    <div class="dr-label"><span>${esc(day.label)}</span></div>
    <a href="#" class="tc" data-key="${day.key}" data-type="f" data-count="${fCount}">
      <span class="tc-type f">Life's Fundamental</span>
      <span class="tc-title">${esc(day.fundamental.title)}</span>
      <span class="tc-q">${esc(day.fundamental.question)}</span>
      <span class="tc-arrow">&#8250;</span>
    </a>
    <a href="#" class="tc" data-key="${day.key}" data-type="r" data-count="${rCount}">
      <span class="tc-type r">Responding Well</span>
      <span class="tc-title">${esc(day.response.title)}</span>
      <span class="tc-q">${esc(day.response.question)}</span>
      <span class="tc-arrow">&#8250;</span>
    </a>
  </div>`;
});

// 3. Read CSS
const css = fs.readFileSync(path.join(__dirname, 'styles.css'), 'utf8');

// 4. Runtime JavaScript — runs in the browser
const runtimeJS = `
<script>
(function() {
  // ── Today's date info ──
  var now = new Date();
  var jsDay = now.getDay(); // 0=Sun, 1=Mon ... 6=Sat

  // Days since a fixed epoch (Jan 1 2024, a Monday).
  // Used to pick which passage index everyone sees on any given date.
  var epoch = new Date(2024, 0, 1);
  var daysSinceEpoch = Math.floor((now - epoch) / 86400000);

  // Week number — increments every 7 days.
  // Everyone on the same calendar week sees the same passage.
  var weekNumber = Math.floor(daysSinceEpoch / 7);

  // ── 1. Highlight today's row on the overview ──
  var rows = document.querySelectorAll('.day-row[data-day]');
  for (var i = 0; i < rows.length; i++) {
    if (parseInt(rows[i].getAttribute('data-day')) === jsDay) {
      rows[i].classList.add('today');
      var label = rows[i].querySelector('.dr-label');
      if (label) {
        var badge = document.createElement('span');
        badge.className = 'today-badge';
        badge.textContent = 'TODAY';
        label.appendChild(badge);
      }
    }
  }

  // ── 2. Set each topic link to today's passage ──
  // weekNumber % passageCount gives the same index for everyone
  // on the same week. Next week it rotates to the next passage.
  var links = document.querySelectorAll('.tc[data-key]');
  for (var j = 0; j < links.length; j++) {
    var key = links[j].getAttribute('data-key');
    var type = links[j].getAttribute('data-type');
    var count = parseInt(links[j].getAttribute('data-count'));
    var index = weekNumber % count;
    links[j].setAttribute('href', '#' + key + '-' + type + '-' + index);
  }
})();
</script>`;

// 5. Additional CSS for today highlight
const todayCSS = `
/* Today's day row highlight */
.day-row.today {
  border-color: var(--gold-pale);
  background: linear-gradient(135deg, rgba(184,148,62,.06) 0%, #fff 100%);
  box-shadow: 0 2px 12px rgba(184,148,62,.1);
}
.day-row.today::before {
  background: var(--gold);
}
`;

// 6. Assemble full HTML
const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>The Joy Set Before Us</title>
<style>
${css}
${todayCSS}
</style>
</head>
<body>

<header class="hero">
  <div class="hero-inner">
    <div class="hero-orn">&#10022; &#10022; &#10022;</div>
    <h1>${SITE_META.title}</h1>
    <p class="hero-sub">${SITE_META.subtitle}</p>
  </div>
</header>

${detailPages}

<!-- OVERVIEW -->
<div class="page" id="home">
  <div class="ov-intro">${esc(SITE_META.introText)}</div>
${overviewRows}
</div>

<footer class="ft"><span class="o">&#10022;</span>The Joy Set Before Us</footer>
${runtimeJS}
</body>
</html>`;

// 7. Write output
const outPath = path.join(__dirname, 'index.html');
fs.writeFileSync(outPath, html, 'utf8');
console.log('✓ Built ' + outPath + ' (' + (html.length / 1024).toFixed(1) + ' KB)');
console.log('  ' + DAYS.length + ' days, ' + DAYS.reduce(function(n, d) { return n + d.fundamental.passages.length + d.response.passages.length; }, 0) + ' total passages');