# App Pages

- Customer Journey keeps its existing `DashboardPage.tsx`, `SegmentsPage.tsx`, `JourneyPage.tsx`, `MeasurementPage.tsx`, and `ResearchPage.tsx` views.
- `TechnologyJourneyPage.tsx` provides the technology architecture and illustrative end-to-end example, customer flow, proposed data pipeline, operating outcomes, logical foundation, and staged roadmap; its footer connects the five pages as one story.
- `InvestorJourneyPage.tsx` tells a six-step investor story: investment overview, opportunity framework, revenue and unit economics, validation plan, independent scaling paths, and investment-case synthesis. Evidence labels distinguish known propositions, hypotheses, and items to validate.

`App.tsx` selects the primary section and its active page from the URL hash. Customer page hashes remain compatible with the existing routes; Technology and Investor hashes are section-scoped.
