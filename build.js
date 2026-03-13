#!/usr/bin/env node
// ============================================================
// BUILD SCRIPT — Generates index.html from content/ folder
// ============================================================
// Usage:  node build.js
// Output: index.html (in same directory)
//
// Edit files in content/ to change any text, then re-run this script.
// Verse text is fetched automatically from the Bolls.life Bible API.
//
// In each content file, passages can specify verses as either:
//   1. A reference string:  verses: 'Genesis 1:1-3,26-27,31'
//   2. An already-expanded array (legacy format still works)
//
// The build script will fetch text for any string references
// before generating the HTML.
// ============================================================

const fs = require('fs');
const path = require('path');
const { SITE_META, DAYS } = require('./content/index.js');
const { resolveAllVerses } = require('./bible-resolver.js');

// ── Translation setting ──
// Change this to use a different translation (must be available on Bolls.life)
const TRANSLATION = 'NASB';

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
// BUILD (async to support fetching)
// ============================================================
async function build() {
  console.log('Building The Joy Set Before Us...');

  // 0. Resolve all Bible references → fetch verse text from API
  await resolveAllVerses(DAYS, TRANSLATION);

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

  // 4. Runtime JavaScript
  const runtimeJS = `
<script>
(function() {
  var now = new Date();
  var jsDay = now.getDay();
  var epoch = new Date(2024, 0, 1);
  var daysSinceEpoch = Math.floor((now - epoch) / 86400000);
  var weekNumber = Math.floor(daysSinceEpoch / 7);

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

  // 5. Today CSS
  const todayCSS = `
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
}

build().catch(err => {
  console.error('Build failed:', err);
  process.exit(1);
});