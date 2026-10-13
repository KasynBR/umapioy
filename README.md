# Umamusume Atlas — The Tachyon Project
English-first community reference for Umamusume: Pretty Derby, built with Next.js App Router and TypeScript for Tachyon Project / agnesbot.xyz.

## Run locally
```bash
npm install
npm run dev
npm run typecheck
npm run build
```

## Experience
- `/roster`: live character records from the public umapyoi.net API, with search, source IDs, raw metadata, loading and error states.
- `/supports`: live support-card records from the umapyoi.net API, searchable with inspectable raw metadata. `/skills`: searchable live skill records from Tsuyuchan-jp/umamusume-data. `/courses`: searchable 140-course Japanese reference. `/characters` remains illustrative until sourced and verified.
- `/races`: race-planning worksheet with shareable URL state.
- `/sources`: provenance, attribution, regional version notes and methodology.

## Data provenance
The live roster and support index use the public API documented at https://console.umapyoi.net/docs/index.html. Skills and courses load the public generated datasets from https://github.com/Tsuyuchan-jp/umamusume-data; the course feed currently contains 140 Japanese course records. Credit **umapyoi.net**. The upstream project credits its English translations to its maintainer, GameTora and Hachimi; verify attribution against the current API documentation.
Additional references: https://gametora.com/umamusume, https://uma.guide/, https://umamusumedb.com/, https://teiostep.net/. These are references, not integrated feeds unless explicitly stated.

Global and Japanese releases differ in schedules, availability, translated skill names, and sometimes balance/event timing. The roster is a community-maintained JP-oriented source; prototype catalogs do not claim region parity.

Unofficial fan project; not affiliated with Cygames. Respect source terms, attribution and game asset rights.