// ============================================================
// BIBLE REFERENCE RESOLVER
// ============================================================
// Parses human-readable Bible references like "Genesis 1:1-3,26-27"
// and fetches verse text from the Bolls.life API (NASB translation).
//
// Usage:
//   const { resolveAllVerses } = require('./bible-resolver');
//   await resolveAllVerses(DAYS, 'NASB');
// ============================================================

const https = require('https');

// ── Book name → Bolls.life book ID mapping ──
// Standard Protestant canon, 66 books. IDs match Bolls.life numbering.
const BOOK_IDS = {
  'genesis': 1, 'gen': 1,
  'exodus': 2, 'exod': 2, 'ex': 2,
  'leviticus': 3, 'lev': 3,
  'numbers': 4, 'num': 4,
  'deuteronomy': 5, 'deut': 5,
  'joshua': 6, 'josh': 6,
  'judges': 7, 'judg': 7,
  'ruth': 8,
  '1 samuel': 9, '1samuel': 9, '1 sam': 9, '1sam': 9,
  '2 samuel': 10, '2samuel': 10, '2 sam': 10, '2sam': 10,
  '1 kings': 11, '1kings': 11, '1 kgs': 11,
  '2 kings': 12, '2kings': 12, '2 kgs': 12,
  '1 chronicles': 13, '1chronicles': 13, '1 chr': 13, '1 chron': 13,
  '2 chronicles': 14, '2chronicles': 14, '2 chr': 14, '2 chron': 14,
  'ezra': 15,
  'nehemiah': 16, 'neh': 16,
  'esther': 17, 'esth': 17,
  'job': 18,
  'psalm': 19, 'psalms': 19, 'ps': 19, 'psa': 19,
  'proverbs': 20, 'prov': 20,
  'ecclesiastes': 21, 'eccl': 21, 'eccles': 21,
  'song of solomon': 22, 'song of songs': 22, 'song': 22, 'sos': 22,
  'isaiah': 23, 'isa': 23,
  'jeremiah': 24, 'jer': 24,
  'lamentations': 25, 'lam': 25,
  'ezekiel': 26, 'ezek': 26,
  'daniel': 27, 'dan': 27,
  'hosea': 28, 'hos': 28,
  'joel': 29,
  'amos': 30,
  'obadiah': 31, 'obad': 31,
  'jonah': 32,
  'micah': 33, 'mic': 33,
  'nahum': 34, 'nah': 34,
  'habakkuk': 35, 'hab': 35,
  'zephaniah': 36, 'zeph': 36,
  'haggai': 37, 'hag': 37,
  'zechariah': 38, 'zech': 38,
  'malachi': 39, 'mal': 39,
  'matthew': 40, 'matt': 40, 'mat': 40, 'mt': 40,
  'mark': 41, 'mk': 41,
  'luke': 42, 'lk': 42,
  'john': 43, 'jn': 43, 'jhn': 43,
  'acts': 44,
  'romans': 45, 'rom': 45,
  '1 corinthians': 46, '1corinthians': 46, '1 cor': 46, '1cor': 46,
  '2 corinthians': 47, '2corinthians': 47, '2 cor': 47, '2cor': 47,
  'galatians': 48, 'gal': 48,
  'ephesians': 49, 'eph': 49,
  'philippians': 50, 'phil': 50, 'php': 50,
  'colossians': 51, 'col': 51,
  '1 thessalonians': 52, '1thessalonians': 52, '1 thess': 52, '1thess': 52,
  '2 thessalonians': 53, '2thessalonians': 53, '2 thess': 53, '2thess': 53,
  '1 timothy': 54, '1timothy': 54, '1 tim': 54, '1tim': 54,
  '2 timothy': 55, '2timothy': 55, '2 tim': 55, '2tim': 55,
  'titus': 56,
  'philemon': 57, 'phlm': 57, 'phm': 57,
  'hebrews': 58, 'heb': 58,
  'james': 59, 'jas': 59,
  '1 peter': 60, '1peter': 60, '1 pet': 60, '1pet': 60,
  '2 peter': 61, '2peter': 61, '2 pet': 61, '2pet': 61,
  '1 john': 62, '1john': 62, '1 jn': 62, '1jn': 62,
  '2 john': 63, '2john': 63, '2 jn': 63, '2jn': 63,
  '3 john': 64, '3john': 64, '3 jn': 64, '3jn': 64,
  'jude': 65,
  'revelation': 66, 'rev': 66,
};

/**
 * Parse a human-readable Bible reference into structured data.
 *
 * Supports formats like:
 *   "Genesis 1:1-3,26-27,31"      → book 1, chapter 1, verses [1,2,3,26,27,31]
 *   "John 3:16"                    → book 43, chapter 3, verses [16]
 *   "Exodus 3:13–15"              → book 2, chapter 3, verses [13,14,15]
 *   "Matthew 5:1–12"              → book 40, chapter 5, verses [1..12]
 *   "Psalm 23"                    → book 19, chapter 23, ALL verses
 *   "Genesis 22"                  → book 1, chapter 22, ALL verses
 *   "Revelation 4–5"              → book 66, chapters 4 AND 5, ALL verses
 *   "Esther 4–7"                  → book 17, chapters 4,5,6,7, ALL verses
 *   "Genesis 16 & 21"             → book 1, chapters 16 AND 21, ALL verses
 *   "Luke 10:25–37"               → book 42, chapter 10, verses [25..37]
 *   "Revelation 21–22"            → book 66, chapters 21 AND 22, ALL verses
 *
 * Returns an array of { bookId, chapter, verses } objects.
 * When verses is null, it means "fetch the whole chapter".
 */
function parseReference(ref) {
  // Normalize dashes and whitespace
  let s = ref.trim()
    .replace(/\u2013|\u2014/g, '-')  // em/en dash → hyphen
    .replace(/\s+/g, ' ');

  // Handle "&" style multi-chapter refs like "Genesis 16 & 21"
  // Split on "&" and parse each part with the same book
  if (s.includes('&')) {
    const parts = s.split('&').map(p => p.trim());
    // First part has the book name
    const firstResult = parseReference(parts[0]);
    if (firstResult.length === 0) return [];

    const bookId = firstResult[0].bookId;
    const results = [...firstResult];

    // Remaining parts are just chapter numbers
    for (let i = 1; i < parts.length; i++) {
      const chapNum = parseInt(parts[i], 10);
      if (!isNaN(chapNum)) {
        results.push({ bookId, chapter: chapNum, verses: null });
      }
    }
    return results;
  }

  // Separate book name from chapter:verse portion
  // Book names can start with a number (e.g., "1 Corinthians")
  // Pattern: optional leading digit+space, then letters+spaces, then the rest
  const bookMatch = s.match(/^(\d?\s*[a-zA-Z][a-zA-Z\s]+?)[\s]+(\d.*)$/);

  if (!bookMatch) {
    // Might be a whole-book reference like "Jude"
    const bookId = lookupBook(s);
    if (bookId) return [{ bookId, chapter: 1, verses: null }];
    console.warn(`  ⚠ Could not parse reference: "${ref}"`);
    return [];
  }

  const bookName = bookMatch[1].trim();
  const rest = bookMatch[2].trim();

  const bookId = lookupBook(bookName);
  if (!bookId) {
    console.warn(`  ⚠ Unknown book: "${bookName}" in "${ref}"`);
    return [];
  }

  // Check if rest contains a colon → chapter:verse format
  if (rest.includes(':')) {
    const [chapPart, versePart] = rest.split(':');
    const chapter = parseInt(chapPart, 10);
    const verses = expandVerseList(versePart);
    return [{ bookId, chapter, verses }];
  }

  // No colon → could be "22" (whole chapter) or "4-7" (chapter range) or "21-22"
  if (rest.includes('-')) {
    const [startStr, endStr] = rest.split('-');
    const start = parseInt(startStr, 10);
    const end = parseInt(endStr, 10);
    const results = [];
    for (let ch = start; ch <= end; ch++) {
      results.push({ bookId, chapter: ch, verses: null });
    }
    return results;
  }

  // Single chapter, all verses
  const chapter = parseInt(rest, 10);
  return [{ bookId, chapter, verses: null }];
}

function lookupBook(name) {
  const key = name.toLowerCase().replace(/\./g, '').trim();
  if (BOOK_IDS[key]) return BOOK_IDS[key];
  // Try partial match
  for (const [k, v] of Object.entries(BOOK_IDS)) {
    if (k.startsWith(key) || key.startsWith(k)) return v;
  }
  return null;
}

/**
 * Expand "1-3,26-27,31" → [1,2,3,26,27,31]
 */
function expandVerseList(str) {
  const verses = [];
  const parts = str.split(',');
  for (const part of parts) {
    const trimmed = part.trim();
    if (trimmed.includes('-')) {
      const [a, b] = trimmed.split('-').map(Number);
      for (let v = a; v <= b; v++) verses.push(v);
    } else {
      verses.push(parseInt(trimmed, 10));
    }
  }
  return verses;
}

// ── HTTP fetching ──

function fetchJSON(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => {
        try { resolve(JSON.parse(data)); }
        catch (e) { reject(new Error(`JSON parse error for ${url}: ${e.message}`)); }
      });
    }).on('error', reject);
  });
}

/**
 * Fetch verses from Bolls.life API.
 * Returns array of { num, text } objects.
 */
async function fetchVerses(bookId, chapter, verseNums, translation) {
  const url = `https://bolls.life/get-text/${translation}/${bookId}/${chapter}/`;
  const allVerses = await fetchJSON(url);

  // allVerses is an array of { pk, verse, text, ... }
  let selected;
  if (verseNums === null) {
    // Whole chapter requested
    selected = allVerses;
  } else {
    const wanted = new Set(verseNums);
    selected = allVerses.filter(v => wanted.has(v.verse));
  }

  return selected.map(v => ({
    num: v.verse,
    text: stripHTML(v.text),
  }));
}

/**
 * Strip HTML tags from verse text (Bolls sometimes includes <br>, <i>, etc.)
 */
function stripHTML(html) {
  return html
    .replace(/<br\s*\/?>/gi, ' ')
    .replace(/<\/?[^>]+>/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

// ── Main resolver ──

/**
 * Walk through all DAYS and resolve any passage whose `verses` is a string
 * (a Bible reference) into the full array of { num, text } objects.
 *
 * Passages with an already-expanded verses array are left untouched.
 */
async function resolveAllVerses(days, translation = 'NASB') {
  const fetches = [];

  for (const day of days) {
    for (const section of ['fundamental', 'response']) {
      for (const passage of day[section].passages) {
        if (typeof passage.verses === 'string') {
          fetches.push({ passage, ref: passage.verses });
        }
      }
    }
  }

  if (fetches.length === 0) {
    console.log('  No string references found — all verses already expanded.');
    return;
  }

  console.log(`  Fetching ${fetches.length} passage(s) from Bolls.life (${translation})...`);

  // Process sequentially to respect rate limits (15 req / 30 sec)
  let count = 0;
  for (const { passage, ref } of fetches) {
    const parsed = parseReference(ref);
    if (parsed.length === 0) {
      console.warn(`  ⚠ Skipping unresolvable reference: "${ref}"`);
      passage.verses = [];
      continue;
    }

    let allVerses = [];
    for (const seg of parsed) {
      const verses = await fetchVerses(seg.bookId, seg.chapter, seg.verses, translation);
      allVerses = allVerses.concat(verses);

      // Small delay to stay within rate limits
      await new Promise(r => setTimeout(r, 120));
    }

    passage.verses = allVerses;
    count++;
    process.stdout.write(`\r  Fetched ${count}/${fetches.length}`);
  }

  console.log('\n  ✓ All verses resolved.');
}

module.exports = { resolveAllVerses, parseReference };
