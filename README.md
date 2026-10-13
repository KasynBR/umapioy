# Umamusume Atlas — The Tachyon Project

An English-first community reference for Umamusume: Pretty Derby, built with Next.js App Router and TypeScript for the Tachyon Project / agnesbot.xyz.

## Run locally
```bash
npm install
npm run dev
npm run typecheck
npm run build
```

## Current experience
- **Live roster** at `/roster`: retrieves character records from the public umapyoi.net API, with loading, error, and fallback states.
- **Characters, support cards, and skills**: searchable prototype catalogs. Entries in these legacy catalogs are explicitly illustrative until replaced with sourced records.
- **Race lab** at `/races`: a track reference and race-planning worksheet with shareable URL state.
- **Sources & data policy** at `/sources`: dataset provenance, regional-version caveats, and attribution.
- Responsive editorial interface with quick navigation and clear source status.

## Data provenance
The live roster uses the public API documented at https://monitoring.umapyoi.net/docs/ (API: https://monitoring.umapyoi.net/api/v1/character/list). The API author requests attribution; please credit **umapyoi.net**. Character translations are credited by that project to GameTora and Noccu's Translation Project. See `/sources` for current scope and limitations.

GameTora (https://gametora.com/umamusume), uma.guide (https://uma.guide/), UmamusumeDB (https://umamusumedb.com/), and TeioStep (https://teiostep.net/) are additional research references. They are not represented as integrated data feeds unless explicitly stated.

## Region handling
Global and Japanese releases differ in schedules, available cards/characters, translated skill names, and balance or event timing. The interface labels the live roster as a community-maintained JP-oriented source. The prototype catalogs do not claim region parity. Do not use unsourced sample effects to make competitive decisions.

## License and rights
This is an unofficial fan project and is not affiliated with or endorsed by Cygames. Game names, characters, and assets belong to their respective rights holders. Follow each source's terms and attribution requirements; avoid bulk mirroring proprietary game assets.
