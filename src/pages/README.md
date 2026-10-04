# App Pages

- `DashboardPage.tsx` is the five-minute investor overview. It reports missing operating actuals explicitly and does not invent growth values.
- `SegmentsPage.tsx` compares selected audience hypotheses across one shared journey stage, with optional persona detail.
- `JourneyPage.tsx` shows one audience and journey stage at a time; its comparison expands actual stage content for all audiences.
- `MeasurementPage.tsx` groups recommended indicators by journey stage. These are not reported results.
- `ResearchPage.tsx` contains validation plans and source material behind disclosures.

`App.tsx` selects the active page; shared application state should stay there only when more than one page needs it.
