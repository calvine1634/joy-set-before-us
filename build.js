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
  const nextIndex = (passageIndex + 1) % passages.length;
  const nextId = `${dayKey}-${typeKey}-${nextIndex}`;

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
  <a href="#${nextId}" class="more-link">&#8635; Another Passage</a>
  <div class="ra"><h4>Reflections</h4><textarea placeholder="Write your reflections here..."></textarea></div>
</div>`;
}

// Helper: pick a starting passage index for overview links
function pickStartIndex(passages, dayIndex) {
  return dayIndex % passages.length;
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

// 2. Build overview day rows
let overviewRows = '';
DAYS.forEach((day, dayIndex) => {
  const fStart = pickStartIndex(day.fundamental.passages, dayIndex);
  const rStart = pickStartIndex(day.response.passages, dayIndex);

  overviewRows += `
  <div class="day-row">
    <div class="dr-label"><span>${esc(day.label)}</span></div>
    <a href="#${day.key}-f-${fStart}" class="tc">
      <span class="tc-type f">Life's Fundamental</span>
      <span class="tc-title">${esc(day.fundamental.title)}</span>
      <span class="tc-q">${esc(day.fundamental.question)}</span>
      <span class="tc-arrow">&#8250;</span>
    </a>
    <a href="#${day.key}-r-${rStart}" class="tc">
      <span class="tc-type r">Responding Well</span>
      <span class="tc-title">${esc(day.response.title)}</span>
      <span class="tc-q">${esc(day.response.question)}</span>
      <span class="tc-arrow">&#8250;</span>
    </a>
  </div>`;
});

// 3. Read CSS
const css = fs.readFileSync(path.join(__dirname, 'styles.css'), 'utf8');

// 4. Assemble full HTML
const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>The Joy Set Before Us</title>
<style>
${css}
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
</body>
</html>`;

// 5. Write output
const outPath = path.join(__dirname, 'index.html');
fs.writeFileSync(outPath, html, 'utf8');
console.log(`✓ Built ${outPath} (${(html.length / 1024).toFixed(1)} KB)`);
console.log(`  ${DAYS.length} days, ${DAYS.reduce((n, d) => n + d.fundamental.passages.length + d.response.passages.length, 0)} total passages`);
