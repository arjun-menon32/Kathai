# App Pages

- `DashboardPage.tsx` is the five-minute overview: launch proposition, audience lenses, community priority, and journey path.
- `SegmentsPage.tsx` selects one audience, opens persona details on demand, and keeps cross-audience comparison optional.
- `JourneyPage.tsx` follows an audience or named persona stage by stage; actions, questions, and touchpoints stay tucked into a detail disclosure.
- `MeasurementPage.tsx` groups growth signals by journey stage.
- `ResearchPage.tsx` contains focused learning paths and primary source material.

`App.tsx` selects the active page; shared application state should stay there only when more than one page needs it.
