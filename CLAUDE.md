# English for the Arts — notes for Claude Code

Static website (no build step) of English for Specific Purposes units (A1–B1) for the Escuela de Artes Plásticas y Audiovisuales (BUAP):
Licenciatura en Arte Digital, Artes Plásticas and Cinematografía. There is no official curriculum, so the units are based on the degree profiles.
Same engine as the sibling sites English for Communication (`~/english-for-communication/esp-comunicacion`) and CAA English Practice.
The owner is Angelica, an English teacher. Talk to her in Spanish; all student-facing content is in English.

## Structure
- `index.html` — home page. The `UNITS` array in its script lists every unit (title, subject, focus, level, url, isNew).
- `assets/unit.js` + `assets/unit.css` — shared engine. Each unit folder has an identical `index.html` that loads
  `../assets/config.js`, its own `data.js` (`window.UNIT = {...}`), then `../assets/unit.js`.
- `assets/config.js` — `writingEndpoint` (Google Apps Script web app URL), `speakingPlatformName/Url`, `homeUrl`.
- `_template/` — copy to start a new unit. `tools/writing-collector.gs` — Apps Script that stores writing submissions.
- 12 unit folders (4 per level: one per degree + one common unit).
  A1: meet-the-crew, my-studio, game-on, my-creative-routine. A2: art-through-time, storyboard, level-up, opening-night.
  B1: the-critics-eye, the-pitch, team-pipeline, art-in-the-community.
- `subject` in data.js (degree or area) is shown in the unit header.
- Speaker voices: each speaker name needs a gender, via `speakers: { "Name": "f" | "m" }` in data.js or the
  `SPEAKERS` list in unit.js.

## Conventions (keep them)
- Five steps per unit, IDs `mainsec-0` … `mainsec-4`; skill tabs `actsec-list`, `actsec-read`, `actsec-writ`, `actsec-spea`.
- Vary activity types; avoid repetitive multiple choice. Types: match, sort, gap (`[[answer|alt]]`), tiles, rewrite,
  tf, write, speak, repeat.
- Speaking activity 1 in every unit is `repeat` (6 short sentences from the unit, `items: [...]`): TTS plays each sentence and the
  browser's SpeechRecognition scores it (`scoreSpeech` in unit.js, ported from CAA English A2; 70% passes). Browsers without
  SpeechRecognition (Firefox) get listen + record + "I practiced" instead. Speaking activity 2 is a `speak` solo recording (the evidence).
  Keep repeat sentences short (3–10 words) and avoid proper names.
- Every unit: 4 objectives, 6 can-do statements rated 1–5, each with a `review` hint.
- Each `slug` in `data.js` must equal its folder name (saved progress: `localStorage["arts:" + slug]`).
- Colors are CSS tokens (violet accent) with light and dark themes; keep the home page and units on the same palette.

## Deploying to GitHub Pages
1. `git init && git add -A && git commit -m "English for the Arts site"`
2. `gh repo create english-for-the-arts --public --source=. --push` (ask Angelica for the repo name and account first).
3. Enable Pages: `gh api -X POST repos/{owner}/english-for-the-arts/pages -f "source[branch]=main" -f "source[path]=/"`
4. Site URL: `https://{owner}.github.io/english-for-the-arts/`.

## Checking changes
- Open a unit with a local server (`python3 -m http.server`) and click through all five steps and four skills.
  (Node isn't installed on this Mac, so `node --check` isn't available.)

## Possible next tasks
- Four B2 units (add `B2` to `GROUPS` and `LEVELS` in index.html).
- Fill in `assets/config.js` with the writing endpoint and speaking platform.
