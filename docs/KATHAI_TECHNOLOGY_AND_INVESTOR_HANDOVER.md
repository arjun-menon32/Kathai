# KATHAI Technology and Investor Journeys — Technical Handover

**Purpose:** Read-only handover of the current application content and implementation for analysis and planning. This document records what the code currently renders; it does not assert that proposed capabilities, business assumptions, or outcomes exist in production.

**Application root:** `C:\Users\amenon04` (contains `package.json`, `vite.config.ts`, `tsconfig*.json`, `src/`, and the Git root). The active UI is a client-rendered React/Vite app. No Technology or Investor backend, external service integration, or financial model is wired into the pages described here.

## 1. Executive overview

The application has three primary hash-routed sections: Customer Journey, Technology Journey, and Investor Journey.

- **Technology Journey:** Five static, route-addressable pages present a proposed digital/data ecosystem, illustrative customer flows, analytical capabilities, operating use cases, responsible-data principles, and a Launch/Learn/Automate/Scale roadmap. The diagrams and data flows are explanatory React/HTML/CSS content, not deployed KATHAI systems.
- **Investor Journey:** Six static pages present an investment thesis, opportunity questions, hypothetical revenue architecture, conceptual unit-economics flow, validation plan, growth paths, and an investment-case framework. No market sizing, actual financial model, traction, funding ask, forecast, or citations are provided.
- **Connection to Customer Journey:** The content themes align (premium experience, customer learning, repeat, potential self-heating), but Technology and Investor pages do not import Customer Journey personas, evidence, research, measures, or customer/technical data. Their linkage is narrative rather than data-driven.
- **Evidence boundary:** Technology README says capabilities are an ecosystem/roadmap rather than claims of deployment. Investor content repeatedly labels uncertain claims as hypotheses or items to validate. Neither section reports measured outcomes.

## 2. Technology Journey — current state

### 2.1 Purpose, audience, navigation and hierarchy

The section explains how a customer interaction could move through proposed experience, business-system, data and intelligence layers, then inform a future action or experience. It is intended to communicate a technology strategy rather than an existing technical implementation.

The pages do not explicitly name a target reader. The wider application and content imply business, product, operations and technology stakeholders; the other primary sections also serve customer-strategy and investor readers.

Routes use `#technology/<page-id>`. The route order and page questions are:

| Route | Header label | Page question / role |
|---|---|---|
| `#technology/overview` | Technology Overview | How does everything connect? |
| `#technology/experience` | Experience & Personalisation | Where do customer signals originate? |
| `#technology/data-intelligence` | Data & Intelligence | How do signals become insight? |
| `#technology/smart-operations` | Smart Operations | How does insight change decisions? |
| `#technology/roadmap` | Technology Roadmap | How do we build it over time? |

Every page is inside the shared Technology Journey primary section and has a secondary page navigation. The page component also supplies Previous/Next story links, a current page number out of five, a page-specific question and a return link from the last page. There are no separate tabs or user-controlled technology filters.

Information hierarchy:

1. Shared page heading (eyebrow “Technology journey,” title, explanatory description).
2. Page-specific conceptual content (architecture, customer path, data flow, operations examples or roadmap).
3. Evidence/capability caveat on the page.
4. Story progression (previous/next, position and question).

### 2.2 Complete content inventory

#### Technology Overview

**Title:** “Technology that learns with every cup.”  
**Description:** “See how a customer interaction can move through Kathai’s data and intelligence layers into better decisions and a better experience.”

**A · How the ecosystem works — Technology Ecosystem**

Four conceptual layers, presented in sequence:

1. **Customer / Experience**
   - QR interaction
   - Website / digital menu
   - Mood & flavour discovery
   - Ordering / POS
   - Loyalty / customer profile
   - Feedback
2. **Platform & Data**
   - Customer profile / CRM
   - Transaction data
   - Preference data
   - Product & flavour data
   - Inventory / operational data
3. **Intelligence**
   - Recommendation engine
   - Customer segmentation
   - Demand forecasting
   - Flavour / product analytics
   - Feedback analysis
4. **Business Actions**
   - Personalised recommendations
   - Marketing / CRM actions
   - Inventory decisions
   - Menu optimisation
   - Product development
   - Location / expansion insights

The legend labels capabilities **“Launch capability”** and **“Future capability.”** Classification is derived from inline string sets. The first two architecture layers use the launch-capability set; the Intelligence layer uses the future-capability set; Business Actions receive a separate action style. An item shown in the conceptual architecture is not proof it has been delivered.

**B · See it in action · Illustrative future state — One interaction, through the system**

Eight illustrative steps:

1. Customer signal — Comforting + Nutty
2. Recommendation — Relevant flavour
3. Purchase — Customer chooses and buys
4. Captured signal — Preference + transaction
5. Pattern — Flavour / customer patterns
6. Insight — Useful preference or demand signal
7. Action — Adjust recommendation, stock or menu
8. Next experience — A more relevant visit

Caveat: **“Illustrative only: this example describes a possible future flow, not a live recommendation or analytics capability.”**

**C · What sits underneath it · Logical architecture — Technology Foundation**

- Experience Layer — Website / QR / Digital Menu / Loyalty
- Business Systems — POS / CRM / Inventory
- Data Layer — Customer / Transaction / Product / Operational Data
- Intelligence Layer — Analytics / Segmentation / Forecasting / Recommendation Models
- Activation Layer — Personalisation / Dashboard / CRM / Operational Decisions

Caveat: **“A logical view of the proposed stack, not a final technical design.”**

**D · Improve over time — Continuous Learning Loop**

“Actions → New Customer Interactions → New Data → Better Intelligence”

Final caveat: **“Proposed architecture only: horizons show launch practicality versus future capability, not deployment status.”**

#### Experience & Personalisation

**Title:** “Let technology enrich the ritual.”  
**Description:** “Follow the customer from discovery to return, and see how each step can be supported by a practical digital layer.”

Principle callout:

- **The principle**
- **“Digital should lead back to the cup.”**
- “Technology makes discovery, choice and feedback easier; the warmth, craft and human service remain at the heart of the experience.”

| Stage | Customer action | Technology enabling it |
|---|---|---|
| Discover | Encounters Kathai | Website / social / QR |
| Explore | Explores mood, flavour or occasion | Digital flavour discovery |
| Choose | Gets relevant recommendations | Rules-based initially → AI recommendation engine later |
| Experience | Orders and enjoys the physical product | POS / order data |
| Remember | Saves preferences or gives feedback | Customer profile / CRM |
| Return | Receives a more relevant future experience | Loyalty + personalisation |

Loop statement: **“A more relevant return”** — “With consent, remembered preferences and feedback can make the next visit feel more personal.”

#### Data & Intelligence

**Title:** “Turn useful signals into better decisions.”  
**Description:** “A proposed data pipeline for learning from interactions—without assuming Kathai already collects every signal shown.”

Banner:

- **“Potential data capability / proposed architecture”**
- “These are possible signals and capabilities to design for—not a claim that Kathai currently collects, joins or analyses this data.”

Five proposed pipeline stages:

1. **Data Sources:** Purchases; Flavour selections; Mood / occasion; QR interactions; Feedback; Loyalty behaviour; Location; Time / demand patterns.
2. **Customer Profile / Data Layer:** Customer profile; Transaction history; Product data; Preference history; Operational data.
3. **Analytics & AI:** Preference patterns; Customer segmentation; Recommendation models; Demand forecasting; Sentiment / feedback analysis.
4. **Insights:** What customers prefer; When they purchase; Which flavours perform; What drives repeat behaviour; Where demand differs.
5. **Action:** Personalisation; Marketing; Menu changes; Inventory; New product development; Expansion decisions.

Responsible-data section:

- **“Trust is part of the architecture”**
- **“Responsible data use”**
- Consent; Data minimisation; Privacy; Security.

#### Smart Operations

**Title:** “Connect operating signals to business outcomes.”  
**Description:** “Show how observed customer and operational signals can inform decisions that improve availability, products and experience.”

| Signal | Intelligence | Decision | Business impact |
|---|---|---|---|
| Historical sales + weather + time | Demand forecast | Prepare appropriate inventory | Lower stock-outs / waste |
| Product + flavour purchases | Product performance analysis | Adjust menu / product mix | Better-performing portfolio |
| Location demand | Location intelligence | Staffing, stock and expansion choices | Better unit performance |
| Customer feedback | Feedback analysis | Improve products and service | Better customer experience |

Caveat: **“Impacts are intended outcomes to measure, not results already achieved.”**

#### Technology Roadmap

**Title:** “Build the foundation before the advanced layer.”  
**Description:** “Start with practical tools, establish a usable data foundation, then add automation and scalable capabilities when evidence supports them.”

Legend: **Launch capability** / **Future capability**.

| Stage | Horizon label | Capabilities |
|---|---|---|
| Launch | Launch capability | POS; QR / digital menu; Basic customer feedback; Basic CRM / loyalty; Sales & inventory tracking; Analytics dashboard |
| Learn | Foundation building | Unified customer signals; Customer segmentation; Flavour / product analytics; Repeat behaviour analysis; Demand pattern analysis |
| Automate | Future capability | Recommendation engine; Automated CRM / personalisation; Demand forecasting; Inventory recommendations; AI-assisted feedback analysis |
| Scale | Future capability | Multi-location data platform; Central customer profile; Advanced forecasting; Scalable recommendation services; Location benchmarking; Product / market intelligence |

Caveat: **“The roadmap describes a sensible progression, not a statement that these capabilities are already deployed or funded.”**

### 2.3 Represented architecture and workflow

The represented logical architecture is:

**Experience / channels → Business systems and source data → Customer/data layer → Analytics and intelligence → Insights → Activation / operating decisions → New interactions.**

Data input examples include interaction, transaction, product, preference, loyalty, feedback, location, time, inventory/operations and weather. Outputs include recommendations, marketing/CRM actions, menu and product changes, inventory/staffing decisions and location/expansion choices.

The chain is conceptual. There are no diagrams with vendor-specific topology, APIs, schemas, ownership boundaries, runtime services, or production integration semantics. The visual architecture rows, customer-flow steps, data pipeline, outcome table and roadmap are static React content.

**AI and automation:** “AI” appears in the pipeline label “Analytics & AI,” the future AI recommendation phrase, and “AI-assisted feedback analysis” on the roadmap. There is no specified model/provider, training/evaluation set, recommendation quality metric, moderation, human review process, automation control, fallback or deployment plan.

**Product/self-heating technology:** No heating chemistry/mechanism, materials, product design, activation method, thermal results, pack format, engineering specification, safety case, regulatory assessment or technical dependencies appear in this Technology Journey. Elsewhere, the experience blueprint discusses an optional heating demonstration and says not to launch until reliability, instructions and safety are validated; it calls for technical validation, safe handling, disposal and regulatory review. Those are proposed service/validation requirements, not working product engineering.

### 2.4 Implemented UI vs proposed KATHAI technology

**Actually implemented in this application**

- Five hash-addressable Technology views.
- Static headings, text, architecture rows, stage cards, data-pipeline items, operating examples, roadmap, caveats and story navigation.
- Responsive CSS for the presentation.
- Reusable page heading and header/navigation.

**Not implemented by these pages**

- POS/commerce, QR destination, website/menu experience, CRM, loyalty, inventory, customer identity/profile, data store, analytics dashboard or external data feed.
- Consent capture, identity resolution, joining data, access control, retention/deletion, data-quality/lineage, recommendations, forecasting, sentiment analysis, decision automation or monitoring.
- Any live AI capability or self-heating product mechanism.

The terms “customer profile,” “personalisation,” “location,” “loyalty,” “mood,” and similar labels refer to proposed inputs/capabilities only.

### 2.5 Technology gaps and ambiguities

- No named products/vendors, hosting/runtime architecture, integrations/APIs, event/data schemas, source-of-truth, identity strategy, data-quality rules, retention, deletion, access control, recovery, latency, monitoring, ownership, or cost/scalability assumptions.
- Consent, data minimisation, privacy and security are named as principles but not decomposed into requirements or controls. The suggested customer/location/loyalty inputs have no data governance or age-appropriate handling detail.
- Location and weather data are used in an operations example without provider/source or integration assumptions.
- Launch/Learn/Automate/Scale have no dates, owners, duration, dependencies, funding status, gates, exit criteria or quantified acceptance conditions.
- Intended impact phrases—lower stock-outs/waste, better portfolio, unit performance and customer experience—have no metrics, baselines, targets, instrumentation, owners or measured results.
- “Launch capability” styling can imply readiness despite explicit caveats that the roadmap is not deployment status.
- Business Actions are styled as actions; future items in that layer do not consistently receive the Future capability label, even when similar capabilities are marked future elsewhere.
- Architecture, data pipeline, customer journey and roadmap repeat overlapping capability labels without one canonical system model.
- The technology customer journey's “saved preferences,” central profile and loyalty reuse raise unresolved consent, privacy and child-data questions.
- The page's systems are not explicitly connected to the existing Customer Journey research/measurement framework.
- `index.html` metadata describes only the customer journey, not the technology/investor sections.

## 3. Investor Journey — current state

### 3.1 Purpose, audience, navigation and hierarchy

The section is a six-page static investment thesis and validation framework. It asks an investor to consider what KATHAI is, whether an opportunity exists, how value could move through the business, what requires proof, how it could scale, and what could make it investable. It is not a full pitch deck, data room or financial model.

Routes use `#investor/<page-id>`:

1. Investment Overview
2. Market Opportunity
3. Business Model
4. Validation Plan
5. Growth & Scale
6. Investment Case

Each page has shared “Investor journey” heading and Known / Hypothesis / To Validate status key, page-specific content, Previous/Next links, a page position (`01 / 06` through `06 / 06`), and a question prompt. The final page links back to the start. Route changes follow the hash and browser history; an invalid investor subpage falls back to the first Investor page.

### 3.2 Complete displayed content

#### Investment Overview

**Title:** “A premium hot chocolate brand built to learn before it scales.”  
Description introduces “The proposition, starting point and disciplined thesis behind Kathai.”

- **The Proposition — Known:** “A premium hot chocolate brand built around flavour discovery, personalisation and ritual — launching in Bengaluru and designed to learn before it scales.”
- **Product — Known:** “Premium artisanal hot chocolate”; distinctive flavour experiences, with potential product extensions.
- **Customer — Hypothesis:** “A broad premium-treat customer base.” Gen Z and Gen Alpha are important audience lenses, not the only customers.
- **Differentiation — Hypothesis:** Taste; Flavour Discovery; Personalisation; Experience.
- **Starting Point — Known:** Bengaluru, described as the “Launch and learning market.”
- **Scale Thesis — Hypothesis:** more customers (locations / cities), more products (flavours / self-heating / retail), and more channels (physical / retail / digital / partnerships).

Closing thesis: **“Kathai's investment case depends on proving that a differentiated premium hot chocolate experience can generate sufficient demand, repeat behaviour and attractive unit economics before expansion.”**

“Known” here identifies stated proposition or intended launch focus, not commercial traction or validated demand.

#### Market Opportunity

**Title:** “A structured way to test the opportunity.”  
The page explicitly says the displayed content is opportunity hypotheses/questions, **not market findings**, and that no market sizes or validated results are asserted.

| Area | Displayed hypothesis | Questions displayed |
|---|---|---|
| Category — Premium Hot Chocolate | A dedicated premium hot chocolate offer may serve a distinct beverage occasion. | How large and relevant is the category? How quickly is it changing? What alternatives compete for the same occasion? |
| Consumer — Experience-led indulgence | Flavour discovery and ritual may make the experience more compelling than the drink alone. | Do customers value the experience enough to choose Kathai? Which occasions drive consumption? What creates repeat behaviour? |
| Price — Premiumisation | Distinctive flavours and experience may support a premium price customers accept. | What will customers actually pay? What features justify the premium? Where does price resistance begin? |
| Market — Bengaluru | Bengaluru is the intended launch and learning market; local demand remains unvalidated. | Which locations and customer clusters fit? What demand exists? What competitive alternatives exist? |
| Expansion — Beyond the first market | Evidence from Bengaluru may reveal which markets or channels are worth exploring next. | What evidence from Bengaluru would justify expansion? |

The static **Evidence Ladder** is: **Hypothesis → Research → Customer Test → Behavioural Evidence → Validated Opportunity**. It does not track study records or status changes.

#### Business Model

**Title:** “Understand how value could move through the business.”  
The description says to start with the core product, explore future extensions, then test whether sales and units can create sustainable value.

Potential revenue architecture (each group is a hypothesis; the section is To Validate):

- **Core Revenue:** Physical hot chocolate.
- **Value Expansion:** Premium flavours; Customisation / add-ons.
- **Product Expansion:** Retail products; Self-heating products.
- **Brand / Channel Expansion:** Partnerships; Selective merchandise; Future channels.

Ordering and visual “maturity” styling do not establish actual maturity or revenue.

Conceptual unit-economics sequence:

> Orders × Average Order Value → Revenue  
> Less Variable Costs → Contribution Margin  
> Less operating base / Fixed Costs → Unit Profitability

This is not a computed model: no input values, cost definitions, periods, store/channel allocation assumptions, calculations or outputs are supplied.

Metrics marked **To Validate**:

- Average Order Value — revenue generated per order.
- Gross Margin — economic quality of each sale.
- CAC — cost of creating customer demand.
- Repeat Purchase Rate — strength of customer retention.
- Unit / Store Economics — whether growth creates value at the unit level.

No selling price, pricing tiers, costs, margins, CAC, volume, revenue, break-even or contribution amount appears.

#### Validation Plan

**Title:** “What needs to be true for Kathai to work?”  
Status note: **“Current status: Not Tested unless evidence is collected and documented. The tests below are a plan, not reported results.”** All five rows are **Not Tested**, with success criteria **To Define**.

| Stage | Question | Proposed tests | Evidence to collect |
|---|---|---|---|
| Desirability | Do people want it? | Customer research; flavour testing; concept testing. | Customer responses; flavour feedback; concept preference. |
| Willingness to Pay | Will they pay the intended premium? | Pricing experiments; purchase simulation; real purchase behaviour where possible. | Price response; purchase choices; observed purchase behaviour. |
| Repeatability | Will they return? | Repeat intent; actual repeat purchase; loyalty behaviour. | Stated repeat intent; observed repeat visits; loyalty engagement. |
| Viability | Can we make money? | Average order value; gross margin; waste; labour; unit economics. | Order values; cost and margin inputs; waste and labour measures. |
| Scalability | Can the model work beyond the first location or channel? | Operational repeatability; location differences; demand consistency; channel economics. | Operating consistency; location demand patterns; channel-level costs and returns. |

A visual status legend also contains **Testing**, **Evidence Emerging**, and **Validated**, but there is no workflow/data to advance an item from Not Tested. No tests/results are reported.

#### Growth & Scale

**Title:** “Keep multiple paths to growth open.”  
Bengaluru is labeled **Known** as the “Intended launch and learning market.” The page labels the paths “Illustrative pathways — sequence determined by evidence,” and each is a hypothesis:

- **Geographic Scale:** Bengaluru → Additional locations → Additional cities → Wider India → Longer-term international opportunity.
- **Product Scale:** Hot chocolate → New flavours → New formats → Self-heating product → Retail products.
- **Channel Scale:** Physical experience → Retail → Digital → Partnerships.

Five scale gates, each **To Validate**: **Demand, Repeat behaviour, Unit economics, Operational repeatability, Brand strength.** No dates, locations, quantified thresholds or expansion criteria are supplied.

#### Investment Case

**Title:** “Turn the thesis into an investability framework.” The page answers six prompts:

- **Why Kathai?** A premium hot chocolate proposition built around flavour discovery and ritual.
- **Why this market?** A category and consumer opportunity to investigate, not yet quantify.
- **Why now?** A timing case to establish through customer and market evidence.
- **Why can it win?** A differentiation thesis across taste, discovery, personalisation and experience.
- **What needs to be proven?** Demand, willingness to pay, repeat behaviour and viable operations.
- **What could it become?** A product and experience platform with multiple possible paths to scale.

**What We Believe** (hypothesis): Product quality; Flavour discovery; Personalisation; Experience / ritual; Customer learning.

**What We Must Prove** (to validate): Customer demand; Willingness to pay; Repeat behaviour; Unit economics; Operational repeatability; Scalable acquisition.

**What Capital Could Unlock** explicitly says **“no amount assumed”** and lists:

- Product — Product development / testing.
- Experience — Launch environment / customer experience.
- Technology — Foundation capabilities and customer learning.
- Go-to-Market — Launch / customer acquisition.
- Operations — Supply / equipment / team / processes.
- Validation — Experiments and evidence gathering.

**Capital Required, Funding Structure, and Milestones** appear only as **To Validate** placeholders. There is no raise size, instrument, runway, round terms, allocation, budget, milestone schedule or investor return.

The **Investability Equation** is: Differentiated Proposition (Hypothesis) + Proven Customer Demand (To Validate) + Repeat Behaviour (To Validate) + Viable Unit Economics (To Validate) + Repeatable Operations (To Validate) → Scalable Investment Case.

Caveat: **“A potential outcome if the thesis is supported by evidence—not a claim that Kathai is currently investable.”**

### 3.3 Investor decision flow and coherence

The designed flow is:

**Understand proposition → frame category/customer/price/launch-market hypotheses → consider potential revenue and unit economics → test desirability, willingness to pay, repeatability, viability and scalability → gate expansion on evidence → assess the thesis, proof requirements and possible capital deployment.**

Evidence appears as Known / Hypothesis / To Validate labels and evidence questions. The Investor Journey itself contains no citations, source links, evidence records, dates, market data or completed customer/technical results. No source data is imported from the Customer research registry.

The story is internally coherent as a **hypothesis/validation framework** and carefully disclaims current investability. It is not yet a substantiated investment case: most of its critical assumptions remain explicitly untested and no financial or market evidence is attached.

### 3.4 Investor gaps and inconsistencies

- No TAM/SAM/SOM, category size/growth, market source, local demand, location sizing or segment sizing.
- No customer sample, interviews, conversions, orders, retention or other validated customer evidence.
- No product menu/specification, flavour list, product cost, defensibility or comparative proof. Taste/discovery/personalisation/experience remain thesis pillars.
- No named competitors, competitor benchmarks or competitive analysis on Investor pages.
- No actual selling price, price tests, discounts, order mix, channel economics or revenue splits.
- No ingredient, packaging, rent, labour, equipment, waste, fulfilment, acquisition or other cost inputs; no computed margin, contribution, break-even or store economics.
- No history/traction, forecasts, projection assumptions, scenario model or growth targets.
- No investment amount, instrument, terms, runway, allocation, return target or budget.
- No actionable GTM/channel plan, launch date, milestone date or measurable stage threshold.
- No explicit risk register or mitigation plan; uncertainties appear as prompts (price resistance, demand, repeat, waste, labour, CAC and operating repeatability).
- KPI names have no baselines, target values, operational definitions/formulas (other than the conceptual sales flow), owners, cadence or results.
- “Known” for Bengaluru can be mistaken for demand evidence unless read alongside the explicit caveat that it is intended launch/learning geography only.
- Evidence statuses indicate possible states but have no evidence attachment or status-management workflow.
- The unit-economics flow names variable costs, operating base and fixed costs but does not define their scope or formula. Gross Margin is separately listed without a formula.
- Navigation route order/labels are repeated in navigation configuration and a separate Investor progression list, which can drift.
- A responsive CSS selector for the Investor growth path appears stale: the markup uses `.investor-scale-path ul` and `span`, while a narrow-screen rule targets `.investor-scale-path ol` and `li b`.

## 4. Cross-journey relationships

### 4.1 Actual links vs conceptual links

| Relationship | Current status |
|---|---|
| Customer → Technology | Shared themes only. The Experience & Personalisation page describes discovery, mood/flavour exploration, choice, purchase, remembering and return. It does not import the 12 personas, their journey stages, customer research findings, metrics or consent/safety records. |
| Technology → Investor | Shared themes only. The Investor thesis lists technology and customer learning as possible capital uses and mentions personalisation, self-heating, digital and retail as hypotheses. No architecture capability, cost, dependency, delivery estimate or technical evidence is linked. |
| Customer → Investor | Shared narrative only. Investor pages refer to a broad premium-treat customer base and Gen Z/Gen Alpha lenses but do not use the Customer persona data, Consumer & Market Insights findings, journey measures or local research. |
| All three | No shared state store, cross-journey evidence model, live API or calculation joins these sections. Their pages are independently authored static UI content. |

### 4.2 Shared assumptions and potential contradictions

- **Premium proposition:** Customer strategy emphasizes premium taste, craft, comfort, ritual and belonging; Technology frames digital as supporting the cup; Investor assumes a differentiated premium experience can generate demand and attractive unit economics. These are aligned strategic intents, not demonstrated outcomes.
- **Customer learning/repeat:** Customer has stage journeys and a recommended measurement framework; Technology proposes CRM/loyalty, repeat analysis and personalisation; Investor asks for repeat behaviour and repeat purchase rate. The latter two do not consume actual Customer measures or results.
- **Price:** The Customer dashboard overview contains a `₹450–₹600` signature-drink price frame. Investor pages provide no actual price or price test result and label premium willingness-to-pay as unvalidated. The Customer figure must therefore not be mistaken for an investor-validated price.
- **Self-heating:** Customer personas and research discuss utility, guardian suitability and supervised safety/packaging validation. Investor lists self-heating as a possible product extension. Technology Journey has no self-heating mechanism/design or engineering workstream. There is no technical feasibility, safety approval, COGS or demand validation to support it as an investment assumption.
- **Data responsibility:** Technology names consent, minimisation, privacy and security but has no controls. Customer source material includes Gen Alpha guardian decision roles and research cautions. Neither is mapped to the proposed profile, location, loyalty and child-related data pipeline.
- **Geography:** Investor calls Bengaluru the intended launch/learning market but says demand is unknown. Customer profiles/field research reference Bengaluru, including competitor observations, not representative demand. Technology references location intelligence without data source or methodology.
- **Evidence labels:** Customer research registry differentiates primary field research, published research, market benchmark and strategic interpretation, with source limitations. Investor uses Known/Hypothesis/To Validate but does not cite that registry. Technology uses Launch/Future capability labels but does not track implementation evidence.

### 4.3 Reusing Customer research and insights

The existing [research.ts](../src/data/research.ts) registry contains stable source IDs and canonical findings with source IDs, document locations, evidence type, context, limitations, persona IDs and KATHAI implications. [PersonaEvidence.tsx](../src/components/PersonaEvidence.tsx) uses it to show Consumer & Market Insights and expandable Sources & Methodology. This architecture could be reused as an evidence foundation in future Technology/Investor work, but those sections currently do not import it.

Reuse should preserve source scope: the competitor report is market benchmarking, not consumer preference or willingness-to-pay evidence; Ajji House is a field observation at a competitor, not KATHAI demand; external Gen Z/child studies support only their specific findings. None automatically validates technology feasibility, pricing, unit economics, safety, market size or traction.

## 5. Architecture and file structure

### 5.1 Relevant tree

```text
package.json
vite.config.ts
tsconfig.json
tsconfig.app.json
index.html
src/
  App.tsx
  main.tsx
  components/
    AppHeader.tsx
    PageHeading.tsx
  data/
    navigation.ts
    types.ts
    journeyData.ts
    journeys.ts
    audiences.ts
    personaFramework.ts
    research.ts
    measurement.ts
    experience.ts
  pages/
    TechnologyJourneyPage.tsx
    InvestorJourneyPage.tsx
    DashboardPage.tsx
    SegmentsPage.tsx
    JourneyPage.tsx
    MeasurementPage.tsx
    ResearchPage.tsx
  styles/
    dashboard.css
docs/
  README.md
  KATHAI_PERSONA_COMPARISON.md
  research/
    README.md
    sources/originals/
      Ajji_House_by_Subko_-_Market_Research_Report (1).docx
      Artisanal_Hot_Chocolate_Competitors_Research_updated(1).docx
```

No test files or test script were found in the current project `src/` / package scripts.

### 5.2 Components and data dependency map

```text
main.tsx
  └─ imports dashboard.css; mounts App
      ├─ App.tsx
      │   ├─ reads navigation.ts to parse hash and render AppHeader
      │   ├─ #technology/* → TechnologyJourneyPage(page)
      │   │   ├─ inline technologyPages/pageHeadings/capability sets/content arrays
      │   │   ├─ shared PageHeading
      │   │   └─ hrefForPage for story progression
      │   └─ #investor/* → InvestorJourneyPage(page)
      │       ├─ inline investorPages/pageHeadings/content datasets
      │       ├─ shared PageHeading
      │       └─ hrefForPage for story progression
      └─ AppHeader.tsx
          └─ sectionNavigation/pageNavigation/hrefForPage from navigation.ts
```

- Technology content and inferred data structures are local to `TechnologyJourneyPage.tsx`; no `src/data/technology.ts`, technology API client or technology-specific type module is present.
- Investor content and all status labels/arrays are local to `InvestorJourneyPage.tsx`; no investor data module, financial model or source registry integration is present.
- Both use shared `AppPage` from `navigation.ts`; neither has a dedicated data interface for page content.
- `App.tsx` parses the URL hash. For a valid top-level section, an invalid/missing subpage resolves to the first configured page for that section. Customer legacy hashes remain unscoped; Technology/Investor hashes are section-scoped. `AppHeader` builds links from the shared navigation.
- Both pages are rendered statically from constants/JSX. They have no page-level form, filtering, fetching, calculation engine or stateful evidence workflow.
- `dashboard.css` is the common stylesheet for all sections; technology styles cluster around the architecture/pipeline/roadmap rules, investor styles around status, proposition, opportunity, economics, validation, scaling, case and progression rules.

### 5.3 Existing shared TypeScript types and interfaces

The following are relevant to routing, Customer Journey integration or evidence reuse. There are **no Technology-specific or Investor-specific page-data, financial-model, architecture-node, vendor, milestone or KPI interfaces**.

- `AppSection = 'customer' | 'technology' | 'investor'`.
- `AppPage`: union of customer page IDs (`overview`, `audiences`, `journey`, `measurement`, `research`), technology page IDs (`experience`, `data-intelligence`, `smart-operations`, `roadmap`; overview is shared), and investor page IDs (`investment-overview`, `market-opportunity`, `business-model`, `validation-traction`, `growth-scale`, `investment-case`).
- `NavigationItem = { id: AppPage; label: string }` (module-private to `navigation.ts`).
- `AppPage` is passed to both journey page components; Investor's page component prop is `{ page: AppPage }`.
- Customer-oriented types in `types.ts` include:
  - `StageName`: Awareness, Consideration, Purchase and Experience, Retention, Advocacy.
  - `AudienceId`: `general | gen-z | gen-alpha`.
  - `EvidenceStatus` and `PersonaEvidenceStatus`.
  - `ResearchSourceId`, `ResearchFindingId`, `ResearchEvidenceType`, `PersonaId`.
  - `Segment`, `Persona`, `PersonaDecisionProfile`, `PersonaResearchEvidence`, `ResearchSource`, `ResearchFinding`.
  - `JourneyDetail` (stage objective/actions/questions/touchpoints/emotions/pain points/barriers/opportunities/response/success measures/research questions/status).
  - `GuardianJourneyStage`, `GenAlphaJourney`, `Touchpoint`, `EmotionalPoint`, `Metric`, `BlueprintStep`.
- The Investor status categories are presentation labels/local constants rather than an investor status type with evidence attachments.
- Technology layer names, capability labels, roadmap stages, pipeline stages and operating outcomes are inferred from literal arrays/strings rather than a typed architecture schema.

### 5.4 Navigation interactions and calculations

- Header section links come from `sectionNavigation`; subnavigation comes from `pageNavigation`.
- `hrefForPage` leaves customer pages as `#<page>` and uses `#<section>/<page>` for Technology and Investor.
- `App.tsx` listens to `hashchange` and `popstate`, synchronizes selected route state and renders the corresponding view.
- Technology Previous/Next links navigate to the adjacent `technologyPages` entry and show static page prompts/position.
- Investor Previous/Next links navigate to the adjacent `investorPages` entry and show a position such as `01 / 06`; only progression position is derived from the current page.
- No investor revenue, market, unit economics, forecast, KPI or investment-return values are calculated. The displayed Orders × AOV flow is explanatory text/visual sequence only.
- No technology analytics, recommendation, forecast, pipeline or data-joining operation is calculated.

## 6. Content and evidence gaps

### Technology

1. Establish which capabilities are implemented, funded, planned or merely illustrative; labels presently describe horizons but are not deployment records.
2. Define architecture boundaries, system/source choices, interfaces, owners, schema, identity and data lifecycle, reliability, security/privacy controls, monitoring and cost.
3. Turn AI/analytics claims into bounded use cases, input/output definitions, human oversight, evaluation/acceptance criteria and operational fallbacks.
4. Define roadmap dependencies, gates, dates, owners, delivery estimates, milestones and success criteria.
5. Define KPI names, calculations, instrumentation, baseline, target, source and cadence; current impact language is qualitative.
6. Treat self-heating as a separate product/engineering/safety dependency, not a live capability; technical design and evidence are absent.
7. Link any customer data use to consent, minimisation, child/guardian protections and the actual Customer Journey research/measurement plan.

### Investor

1. Build a sourced market-sizing and competitor case; market opportunity currently has only questions and hypotheses.
2. Define customer/occasion and attach actual primary evidence, with sample/method/context and links to the customer research registry.
3. Provide product specifics and support differentiation with product comparisons and customer tests.
4. Define price hypotheses and test evidence; reconcile them with the customer-side ₹450–₹600 frame without treating that frame as validated.
5. Add a bottom-up operating and financial model with assumptions for orders, AOV, channel mix, variable/fixed costs, margin, contribution, break-even, CAC, repeat and scenarios.
6. State a real funding ask, structure, runway, allocated use of funds, gates, milestone budget and outcome/return assumptions—or clearly omit until available.
7. Define a measurable GTM/launch plan, risk register, mitigation owners and decision gates.
8. Attach evidence sources and maintain status history rather than static visual status labels.

### Cross-section

1. Share referenced evidence rather than copying or paraphrasing unsupported claims across sections.
2. Connect customer needs and validated findings to technology requirements, then map those requirements and their costs/dependencies to Investor assumptions.
3. Make the distinction between stated strategy, observed market/field evidence, validated KATHAI customer evidence and proposed capability consistent across the three journeys.
4. Explicitly reconcile child/guardian roles and data protection with technology profile/loyalty designs.
5. Keep source dates and limitations visible; competitor examples are not consumer preference proof, and secondary research does not validate an individual persona.

## 7. UI/UX observations

- Header/navigation is shared and horizontally scrollable; all three primary sections and subpage links are present. There is no sidebar.
- Technology content uses layer rows, process cards, pipeline steps, outcome rows and roadmap groupings; caveats are important to distinguish future diagrams from current systems.
- Investor pages use static status keys, cards, lists and CSS arrows rather than charts; there are no numbers or interactive models to inspect or change.
- The Technology page repeats some conceptual capability labels in the ecosystem, foundation, flow, data pipeline and roadmap; readers may mistake repeated representations for separately designed systems.
- “Launch capability” is ambiguous when visually detached from its deployment-status caveat.
- Investor Known/Hypothesis/To Validate labels appear without a linked evidence drawer/source, so the reader cannot inspect support directly.
- Investor roadmap and growth diagrams are conceptual; status colors/sequence can convey maturity that has not been evidenced.
- Investor mobile CSS includes a stale growth-path selector (`ol`/`li b`) that does not match the current `ul`/`span` markup, so that intended responsive rule has no effect.
- `index.html` has a customer-only description even though the app also presents Technology and Investor sections.
- No automated application tests or test script are present. No accessibility/browser regression test suite exists in the project.

## 8. Recommended improvement priorities (not implemented)

### Critical issues

1. **Evidence and claim boundaries:** Provide citations/evidence status for Investor claims and link source-backed Customer findings; clearly separate proposition, hypothesis, competitor benchmark, local observation, customer validation and measured traction.
2. **Financial credibility:** Do not present an investment case as quantitatively ready until a sourced, auditable unit-economics/forecast model and explicit assumptions are available.
3. **Technology feasibility and safety:** Before treating AI, customer profiles or self-heating as scale/investment paths, define scope, dependencies, privacy/security/age controls, technical validation and operational safety evidence.

### Important improvements

1. Define measurable, owned roadmap milestones and KPIs across technology delivery and business outcomes.
2. Connect Customer research/measurement → prioritized technology requirements → costed build/operations → Investor validation and funding gates through stable references, not duplicate free text.
3. Add explicit market, competitor, GTM, risk, pricing and funding information when evidence and decisions are available.
4. Align terminology and statuses across sections, especially “Known,” “Launch capability,” “Future capability,” “Hypothesis,” and “To Validate.”
5. Correct the stale responsive investor growth-path selector when the investor UI is next updated.

### Optional enhancements

1. Add an architecture/data-flow visual or interactive trace only after establishing a canonical, reviewed data model.
2. Add investor scenario visualization only when it is powered by sourced, auditable model inputs.
3. Add cross-journey progress navigation, source links and evidence-to-decision backlinks while retaining a single source of truth.
4. Add automated route, responsive, accessibility and evidence-integrity tests.

---

**Read-only scope:** This handover records the state inspected in source. Recommendations above are planning suggestions only. No Technology Journey, Investor Journey, existing application code, data or styling was modified to prepare this document.

---

## Implementation update · 8 October 2026

The following records the subsequent Technology and Investor Journey implementation. It supersedes the earlier “current state” statements above where they described the old static pages. The five Technology and six Investor routes remain unchanged. This update does not claim the proposed product or operating capabilities are deployed.

### Technology Journey now in source

- `src/data/technologyJourney.ts` is the typed source for seven architecture responsibilities, seven persona-linked experience use cases, nine conceptual data entities, lifecycle/security controls, five bounded intelligence use cases, four operational metric definitions/examples, five dependency-gated roadmap phases and five separate self-heating feasibility gates.
- `src/pages/TechnologyJourneyPage.tsx` renders those structures on the existing routes: overview, experience, data-intelligence, smart-operations and roadmap. The page explicitly distinguishes proposed design from deployed application functionality. POS/database/vendors are not selected; recommendation/forecast systems are not live; roles and costs are not assigned.
- `ResearchEvidenceReferences` renders canonical finding/source records from `src/data/research.ts` rather than copying research findings into each journey. Internal DOCX citations show the original filename and report location for local traceability; DOCX files are not bundled as web downloads. External publications use their original URLs.
- Persona-aware experience use cases draw persona IDs and names from `src/data/audiences.ts`. Gen Alpha design keeps discovery session-only and places suitability, activation instructions and payment with the parent/guardian.
- The data architecture calls for verified product/ingredient/allergen records, POS reconciliation, minimised and aggregated analytics, explicit retention/access controls, human approval of operational recommendations and a manual fallback where integrations/data are insufficient.
- The operational examples (including 72/90 sell-through, 5/100 waste and 12/60 repeat) are illustrative arithmetic only—not KATHAI results. Metric denominators and periods are displayed with them.
- Self-heating is a separate proposed engineering investigation. The page makes no claim about a selected mechanism, safety, certification, regulatory approval, materials, cost or readiness.

### Investor Journey now in source

- `src/data/investorJourney.ts` holds shared research references, competitor benchmarks, TAM/SAM/SOM methodology, potential revenue streams, go-to-market tests, KPI definitions, channel gates, validation plan and investment-claim/proof mapping.
- `src/pages/InvestorJourneyPage.tsx` preserves the six existing routes and adds direct Customer Journey audience links, evidence references, editable market-sizing inputs, an editable three-scenario model and decision gates. Research, competitor offerings and KATHAI hypotheses are explicitly separated.
- Food-services context: IBEF’s secondary article of 10 July 2024 reports a ₹5.69 lakh crore / US$68.31 billion 2024 estimate and forecasts ₹7.76 trillion / US$93.16 billion in 2028 at 8.1% CAGR. These are broad sector figures; the latter value/rate are forecasts published in 2024, not observed results. NRAI’s public About page independently lists ₹5.69 lakh crore but gives no valuation year. IBEF’s article does not identify NRAI in its text; neither page supplies the underlying methodology. These figures are not KATHAI’s hot-chocolate TAM, demand evidence or preference data.
- TAM and SAM use annual category occasions × average spend; SOM uses capacity-constrained annual orders × net price. Scenario values start blank. The UI withholds results until a scenario also records a source register, geography, reference date and method/limitations.
- Conservative, Base and Upside financial scenarios start with editable planning assumptions. The in-venue cup-price inputs (₹450/₹525/₹600) carry forward the existing Customer Journey’s unvalidated price frame; every other numeric input—including product mix, order volumes, packaged-format placeholder, ingredients, packaging, waste, fees, staffing, rent, utilities, marketing, equipment and useful life—is an illustrative assumption, not a quote or forecast. Self-heating revenue is excluded.
- The model exposes formulas for average order value, monthly and annualized revenue, direct costs, waste allowance, gross profit/margin, payment/channel fees, contribution, listed operating costs, equipment depreciation, pre-tax/pre-financing operating profit and break-even orders/day. Annualized revenue is a single monthly run-rate × 12. The model does not calculate CAC, valuation, returns, runway or funding required; it omits tax treatment, working capital, startup costs and other items listed in the UI methodology.
- The growth view compares owned pilot/additional sites, retail, digital/delivery and partnership/gifting paths. The go-to-market content consists of proposed experiments, not executed campaigns or proven channels.
- No KATHAI transactions, repeat cohort, signed partner, committed team, financing ask, valuation, cap table or operational performance is represented as existing. Current customer, market and competitor sources inform research questions but do not validate KATHAI demand.

### Current implementation file map

| Responsibility | File |
|---|---|
| Technology Journey data | `src/data/technologyJourney.ts` |
| Investor Journey research, market methodology and financial calculations | `src/data/investorJourney.ts` |
| Canonical sources and research findings | `src/data/research.ts` |
| Shared source/finding/persona ID types | `src/data/types.ts` |
| Technology page rendering | `src/pages/TechnologyJourneyPage.tsx` |
| Investor page rendering and editable inputs | `src/pages/InvestorJourneyPage.tsx` |
| Shared evidence details and external citations | `src/components/ResearchEvidenceReferences.tsx` |
| Existing route IDs/navigation | `src/data/navigation.ts`, `src/App.tsx` |
| Responsive page, navigation and wide-table styles | `src/styles/dashboard.css` |
| Vite dev-server watcher exclusions | `vite.config.ts` |

### Verification status

- `npm.cmd run lint` (scoped `oxlint src`): passed.
- `npm.cmd run build` (`tsc -b` and Vite production build): passed.
- No test script or automated test files are present in `package.json`; automated unit tests were therefore unavailable.
- Browser checks covered all 11 Technology/Investor routes at 320, 375, 390, 768 and 1024px. Main page content had no horizontal overflow. The audience/page navigation and editable model table use internal horizontal scrolling where needed.
- Browser interaction checks confirmed all three scenario controls update calculations, market-size outputs remain withheld until provenance fields are entered, source methodology disclosures open and expose external source links, and audience selection still returns 5 General, 4 Gen Z and 3 Gen Alpha personas with a paired journey for each Gen Alpha persona.
- Because the application root is also the Windows user-profile directory, Vite now watches only the application’s `src/`, `public/`, HTML/package files and TypeScript configs. User-profile data, unrelated OneDrive projects, local originals and other files are excluded from the development watcher.

## Presentation refresh · 9 October 2026

The five Technology and six Investor routes and the existing data/calculation sources remain in place. The page presentation now uses a shared Understand / Explore / Verify guide, concise visual summaries and native expandable detail panels. Research findings remain linked to the canonical registry; full source detail, links and limitations are grouped by source inside the disclosure.

- Technology Overview presents the proposed customer, operating, data and decision layers, with implementation status explicit. Experience, data and operations pages foreground flows; detailed architecture, controls, entities, metrics and rule logic remain available in disclosures.
- The roadmap now foregrounds four business phases. The earlier governance and reliable-POS phases are presented together in Reliable foundation; all existing deliverables, inputs, responsibilities, acceptance criteria, cost categories and risks remain in its expanded detail. Self-heating remains a separate engineering-feasibility workstream with no readiness or certification claim.
- Investor Overview emphasizes proposition, evidence boundaries and cross-journey dependencies. Market-scenario inputs and provenance fields remain blank/default-free and behind a collapsed editor. Financial scenario inputs and detailed outputs/formulas remain editable and available in collapsed editors; headline metrics are shown by scenario. Validation gates and channel paths are presented as planned/unproven, with their detailed criteria available on demand.
- The financial model and TAM/SAM/SOM calculation functions were not redesigned. A browser edit exposed a stale React event-target read in the revised financial input handler; the handler now captures the number before scheduling state updates. Lint and the production typecheck/build pass after this fix.
- The browser spot-check covered Technology Overview and Roadmap, Investor Overview, Market Opportunity and Business Model at the available desktop viewport. Market and financial disclosure controls were opened; the initial financial input attempt exposed the handler issue described above. A successful post-fix financial recalculation interaction and the requested 320/375/390/768/1024 viewport matrix were not completed in this refresh. Responsive breakpoints and stacked input/flow layouts are defined in `src/styles/dashboard.css`; do not treat that as a substitute for the outstanding viewport QA.
- Current source files for the shared layer guide and evidence disclosure are `src/components/JourneyLayerGuide.tsx` and `src/components/ResearchEvidenceReferences.tsx`. There are still no automated test scripts/files.
