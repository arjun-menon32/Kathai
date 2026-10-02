# Kathai Customer Journey Map

Kathai is an interactive customer journey research dashboard built with React, TypeScript, and Vite. It presents a premium beverage brand strategy through audience segmentation, persona exploration, stage-by-stage journey analysis, experience touchpoints, and opportunity mapping.

## Overview

This project translates a customer journey map into a web-based experience for:

- General premium audience
- Gen Z consumers
- Gen Alpha customers and parents/guardians

It is designed to help teams explore:

- Audience segments and narrative positioning
- Key personas and need states
- Emotional and practical barriers across each stage
- Service touchpoints and brand responses
- Success metrics, research prompts, and strategic opportunities

## Features

- Audience switching across premium, Gen Z, and Gen Alpha segments
- Journey stage navigation with evidence and opportunity framing
- Persona cards and deep-dive insight panels
- Touchpoint analysis by category and audience context
- Metric and blueprint views for strategic planning
- Downloadable summary export in markdown format
- Responsive, polished interface for presentation and discussion

## Tech stack

- React 19
- TypeScript
- Vite
- Framer Motion
- Lucide React
- Recharts

## Project structure

```text
Kathai/
├── public/
├── src/
│   ├── data/
│   │   └── journeyData.ts
│   ├── App.tsx
│   ├── App.css
│   ├── index.css
│   └── main.tsx
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

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

This project is designed as a strategic research and presentation tool rather than a production commerce app. The content reflects journey-based insights and recommendations, not confirmed operational performance data.

## License

This project is for internal or portfolio use unless otherwise specified by the owner.
