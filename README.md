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
- `/supports`: live support-card records from the umapyoi.net API, searchable with inspectable raw metadata. `/characters` and `/skills` remain illustrative until sourced and verified.
- `/races`: track reference and race-planning worksheet with shareable URL state.
- `/sources`: provenance, attribution, regional version notes and methodology.

## Data provenance
The live roster uses the public API documented at https://v2.umapyoi.net/docs/ and endpoint https://umapyoi.net/api/v1/character/list. Credit **umapyoi.net**. Character translations are credited by that project to GameTora and community translation projects.
Additional references: https://gametora.com/umamusume, https://uma.guide/, https://umamusumedb.com/, https://teiostep.net/. These are references, not integrated feeds unless explicitly stated.

Global and Japanese releases differ in schedules, availability, translated skill names, and sometimes balance/event timing. The roster is a community-maintained JP-oriented source; prototype catalogs do not claim region parity.

Unofficial fan project; not affiliated with Cygames. Respect source terms, attribution and game asset rights.