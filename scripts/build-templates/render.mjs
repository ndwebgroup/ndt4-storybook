import './domshim.mjs';
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import path from 'node:path';

import { fileURLToPath } from 'node:url';
const REPO = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const OUT_DIR = path.join(REPO, 'public/downloads/templates');
mkdirSync(OUT_DIR, { recursive: true });

const iconsSprite = readFileSync(path.join(REPO, 'public/icons-nd-base.svg'), 'utf8')
  .replace('<svg ', '<svg id="nd-icons-sprite" ');
const stickersSprite = readFileSync(path.join(REPO, 'public/stickers-nd-base.svg'), 'utf8')
  .replace('<svg ', '<svg id="nd-stickers-sprite" ');

function wrapDocument({ title, bodyHTML }) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${title} — NDT4 Template</title>
<link rel="stylesheet" href="https://ndt4.conductor.nd.edu/stylesheets/ndt.css">
</head>
<body>
${stickersSprite}
${iconsSprite}
${bodyHTML}
<script src="/js/global.js"></script>
</body>
</html>
`;
}

const targets = [];

async function render(slug, title, modulePath, args) {
  const mod = await import(path.join(REPO, modulePath));
  const html = mod.default(args);
  const out = wrapDocument({ title, bodyHTML: html });
  const filePath = path.join(OUT_DIR, `${slug}.html`);
  writeFileSync(filePath, out, 'utf8');
  targets.push({ slug, title, bytes: out.length });
}

await render('default-page', 'Default Page', 'stories/templates/DefaultPage.js', {
  pageTitle: 'Do more than dream about the future. Fight for it.',
  featuredImage: false,
  navTop: false,
});

await render('event-landing-page', 'Event Landing Page', 'stories/templates/EventLanding.js', {
  title: 'Example Event Title',
  navTop: false,
  featuredImage: false,
  startDate: '2025-09-22T10:00',
  endDate: '2025-09-22T12:00',
  allDay: false,
  location: 'Raclin Murphy Art Museum',
  repeatDate: false,
});

await render('events-listing-page', 'Events Listing Page', 'stories/templates/EventsListing.js', {
  navTop: false,
});

await render('home-page', 'Home Page', 'stories/templates/Home.js', {
  heroLayout: 'Default',
  pageTitle: 'Do more than dream about the future. Fight for it.',
  pageLede: '',
  navTop: false,
  fullWidth: false,
});

await render('news-landing-page', 'News Landing Page', 'stories/templates/NewsLanding.js', {
  title: 'Example News Title',
  navTop: false,
  featuredImage: false,
  publishDate: '2025-09-22T10:00',
});

await render('news-listing-page', 'News Listing Page', 'stories/templates/NewsListing.js', {
  siteTitle: 'Department of Example',
  navTop: false,
});

await render('people-landing-page', 'People Landing Page', 'stories/templates/PeopleLanding.js', {
  personName: 'John Smith',
  personTitle: 'Chief Example Officer',
  profileImage: true,
  navTop: false,
  personCopy: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`,
  personBiography: `<p>John Smith has over 20 years of experience in the field of examples. He has worked on numerous high-profile projects and has been recognized for his contributions to the industry.</p>`,
  personResearch: `<ul><li>Research Topic 1</li><li>Research Topic 2</li><li>Research Topic 3</li></ul>`,
  personEducation: `<p>John holds a Ph.D. in Example Studies from Example University and a Master's degree in Exemplary Practices from Sample College.</p>`,
});

await render('people-listing-page', 'People Listing Page', 'stories/templates/PeopleListing.js', {
  navTop: false,
});

console.log(JSON.stringify(targets, null, 2));
