// ============================================================
// CONTENT INDEX
// ============================================================
// This file pulls together all daily content files and site metadata.
// The build script imports from here — you never need to edit this file
// unless you add or remove a day.
//
// To add a new day:
//   1. Create content/newday.js following the same pattern
//   2. Add a require() line below
//   3. Add it to the DAYS array in order
//   4. Run: node build.js
// ============================================================

const SITE_META = {
  title: 'The <em>Joy</em> Set Before Us',
  subtitle: 'Our Responsibility to Increasingly Understand Life &amp; Respond Well',
  introText: 'Each day explores a fundamental question of life paired with a practice of responding well. Choose a topic to receive today\'s passage.',
};

const DAYS = [
  require('./monday'),
  require('./tuesday'),
  require('./wednesday'),
  require('./thursday'),
  require('./friday'),
  require('./saturday'),
  require('./sunday'),
];

module.exports = { SITE_META, DAYS };