# Kathai Investor Brief

Kathai is a compact strategy dashboard for reviewing a premium hot chocolate concept, audience hypotheses, customer journey, and validation plan.

## Views

- **Overview** summarizes the concept, launch framing, and the operating data still needed for an investor growth readout.
- **Audiences** compares selected segments across the same journey stage and opens persona hypotheses on demand.
- **Journey** focuses on one audience and stage, with a working cross-segment stage comparison.
- **Measures** groups recommended indicators by journey stage.
- **Research** contains the validation agenda and source references.

## Evidence boundary

The supplied strategy materials do not include revenue, customer counts, retention actuals, unit economics, or a reporting period. The dashboard marks these values as unavailable; it does not present recommendations or hypotheses as actual performance or forecasts. Add sourced operating data before showing growth trends.

## Project structure

```text
public/              Brand logo and static assets
src/components/      Shared navigation and page primitives
src/data/            Audience, journey, measure, and research datasets
src/assets/          Source artwork and images
src/pages/           Overview and focused detail views
src/styles/          Dashboard visual system and responsive layout
src/App.tsx           Hash-based view selection
src/main.tsx          React entry point
```

Each source folder has a short `README.md` describing its ownership boundary and data conventions.

## Getting started

Install dependencies:

```bash
npm install
```

Run the app locally:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Notes

This is a strategy and research tool, not a commerce application. Audience profiles and journey statements are hypotheses. Recommended measures are not existing performance results.

## License

This project is for internal or portfolio use unless otherwise specified by the owner.
