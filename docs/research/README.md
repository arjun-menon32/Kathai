# Research materials

## Original research

Store unmodified source files, such as supplied reports and their appendices, in `sources/originals/`. Keep each original as the authoritative copy; do not replace it with a transcription or summary.

## Derived notes

Use `notes/` for searchable summaries and extracted findings. Label these as derived material, retain the original source title, and cite the page, section, table, or figure for each finding. Keep source findings separate from interpretation and KATHAI-specific assumptions.

## Source IDs and persona evidence

Assign each source a stable, unique ID and record it with the source title, original filename or URL, and available publication or research details. Reuse that ID whenever citing the source in notes or persona evidence.

The application source registry and canonical finding records live in `src/data/research.ts`. Each finding links one source ID to its precise document location, evidence type, reported finding, context, limitations, relevant persona IDs, and KATHAI implication. Persona-specific previews and proposed exploration opportunities live in `src/data/personaFramework.ts`; link findings through their persona IDs rather than copying a finding into multiple persona records.

Technology and Investor Journey data should reuse these same source and finding IDs through `src/data/technologyJourney.ts` and `src/data/investorJourney.ts`. Add one canonical finding when a new piece of research supports a new claim; reference that finding from whichever journey uses it rather than duplicating its text. Technology and investor references may be strategic implications, but label them as such and keep the original research context and limitations accessible in the UI.

Distinguish primary field research, published consumer research, market benchmarks, strategic interpretation, and assumptions. A source supports only the findings it actually reports and does not, by itself, validate a persona or a commercial/technical hypothesis. Keep cited numerical inputs dated and source-linked. When an estimate is a planning assumption, label it as editable and do not present its calculated output as observed performance.

The shared `ResearchEvidenceReferences` component renders finding context, document location, limitations and source links in Technology and Investor sections. Original DOCX paths are shown for local source documents; external publications link to their source URL. Persona browsing keeps concise insights visible and presents full citations, methodology, limitations, assumptions, and validation questions in its expandable Sources & Methodology section.
