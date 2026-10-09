# Strategy Data

`journeyData.ts` is the stable re-export barrel. Add or update data in the module that owns the subject:

- `types.ts` defines shared audience, persona, journey, and measure types.
- `audiences.ts` owns audience summaries, persona descriptions and paired child/guardian journeys, and the 10–20% LGBTQ+ strategic focus.
- `personaFramework.ts` owns the consistent purchase/decision profiles, differentiation notes, persona-specific insight previews, KATHAI implications, exploration opportunities, assumptions and validation gaps. Empty discovery-channel lists mean no channel is specified; do not fill them without support.
- `journeys.ts` owns audience stage journeys and the shared young-consumer stage journey.
- `experience.ts` owns touchpoints, service blueprint, emotional moments, and opportunities.
- `measurement.ts` owns growth signals.
- `research.ts` owns the shared source registry and canonical evidence findings. Findings carry stable source IDs, document locations, evidence types, context, limitations, relevant persona IDs and KATHAI implications. Link findings to personas through each finding's `personaIds`; do not copy the same finding into multiple persona records.

Original research documents are stored in `docs/research/sources/originals/`; derived notes belong in `docs/research/notes/`. The source registry in `research.ts` points to originals and external publications. Persona insights are interpretations, not customer validation. Research limitations and open validation questions remain available in the expandable Sources & Methodology view. The Pocket-Money Treat Planner and Curious Ingredient Explorer retain their existing research-status data; their linked studies support only narrow questions and do not validate either persona. Example persona statements are illustrative, not interview quotations. Keep LGBTQ+ safety, belonging, community, and destination choice visible across General Premium and Gen Z.

See [`../docs/KATHAI_PERSONA_COMPARISON.md`](../docs/KATHAI_PERSONA_COMPARISON.md) for the internal cross-persona need, purchase-role and overlap review. All profile-specific evidence statuses remain hypotheses or exploratory until relevant customer research is collected; a secondary source supports only the finding it directly addresses.
