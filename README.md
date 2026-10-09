# Kathai Journey Experience

Kathai is an interactive view of the premium hot chocolate strategy, its customer experience, technology ecosystem, and investor case. The application is organised into three primary sections, each with its own secondary navigation.

## Primary sections

- **Customer Journey** retains the overview, audiences, journey, measures, and research views.
- **Technology Journey** covers the technology ecosystem, experience and personalisation, data and intelligence, smart operations, and the technology roadmap.
- **Investor Journey** covers the investment overview, market opportunity, business model, validation and traction, growth and scale, and investment case.

## Evidence boundary

Technology capabilities are presented as an ecosystem and roadmap, not as claims about systems already deployed. Investor pages distinguish the stated Bengaluru launch focus from future possibilities and mark missing market evidence, traction, and financial figures for validation. No market sizes, traction metrics, financial numbers, or investment returns are invented.

## Project structure

```text
public/               Brand logo and static assets
docs/                 Strategy source documents and working reference material
src/components/       Shared navigation and page primitives
src/data/              Audience, journey, service, measure, and research modules
src/assets/            Source artwork and images
src/pages/             Customer, technology, and investor views
src/styles/            Dashboard visual system and responsive layout
src/App.tsx             Hash-based view selection
src/main.tsx            React entry point
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

This is a strategy and research tool, not a commerce application. Audience profiles and journey statements follow the supplied strategy documents and customer conversation notes.

## License

This project is for internal or portfolio use unless otherwise specified by the owner.
