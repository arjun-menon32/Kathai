# Kathai Customer Journey Experience

Kathai is an interactive view of the premium hot chocolate strategy, its audience personas, and their customer journeys. The overview is designed for a quick read; audience, journey, measures, and research detail are available as separate views.

## Views

- **Overview** summarizes the Bengaluru launch proposition, the three audience lenses, the community and belonging focus, and the five journey stages.
- **Audiences** presents one audience at a time, with persona detail available on demand.
- **Journey** follows a selected audience or persona through discovery, consideration, experience, retention, and advocacy.
- **Measures** groups growth signals by journey stage.
- **Research** contains focused learning paths and the source documents.

## Evidence boundary

The overview presents the customer strategy and intended audience focus. The app does not contain a live financial reporting feed; add sourced operating data separately if business performance views are introduced.

## Project structure

```text
public/               Brand logo and static assets
docs/                 Strategy source documents and working reference material
src/components/       Shared navigation and page primitives
src/data/              Audience, journey, service, measure, and research modules
src/assets/            Source artwork and images
src/pages/             Overview and focused detail views
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
