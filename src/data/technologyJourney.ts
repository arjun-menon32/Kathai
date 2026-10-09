import type { PersonaId, ResearchFindingId } from './types'

export type TechnologyEvidence = {
  findingIds: ResearchFindingId[]
  note: string
}

export type TechnologyArchitectureComponent = {
  id: string
  title: string
  purpose: string
  inputs: string[]
  outputs: string[]
  dataExchanged: string[]
  interface: string
  dependencies: string[]
  owner: string
  operations: string[]
  evidence: TechnologyEvidence
}

export const technologyArchitecture: TechnologyArchitectureComponent[] = [
  {
    id: 'touchpoints',
    title: 'Customer touchpoints',
    purpose: 'Make product discovery, ordering and post-experience feedback available through clear, low-friction channels.',
    inputs: ['Customer-selected occasion or flavour', 'Product/menu content', 'Voluntary feedback', 'Order intent'],
    outputs: ['Menu views', 'Customer-initiated product questions', 'Order requests', 'Optional feedback'],
    dataExchanged: ['Public product and ingredient information', 'Selected product and quantity', 'Feedback text or rating only when submitted'],
    interface: 'Responsive web pages and printed QR destinations; no account required for browsing or ordering where POS supports it.',
    dependencies: ['Approved product catalogue', 'Accessible web content', 'POS/menu availability'],
    owner: 'Proposed: digital product owner with marketing and operations review; no owner assigned.',
    operations: ['Keep pricing, availability, ingredient and allergen content in sync with the approved catalogue.', 'Provide a non-digital menu and staff route when QR/web access fails.'],
    evidence: { findingIds: ['market-indian-cacao', 'market-subko-position'], note: 'Competitor product and provenance examples suggest information to test, not proven KATHAI customer demand.' },
  },
  {
    id: 'experience-app',
    title: 'Experience application',
    purpose: 'Present transparent product discovery and non-binding flavour matches without inferring sensitive traits.',
    inputs: ['User-selected flavour preferences', 'Occasion selected for the current session', 'Approved product attributes and suitability information'],
    outputs: ['Rule-based flavour suggestions', 'Ingredient/allergen details', 'Current-session selections passed to checkout only after customer action'],
    dataExchanged: ['Short-lived session choices; no child profile or advertising identifier'],
    interface: 'Accessible responsive web application; read-only catalogue API after a future system-of-record is selected.',
    dependencies: ['Product/flavour/ingredient catalogue', 'Verified allergen data', 'Approved recommendation rules', 'Commerce integration'],
    owner: 'Proposed: digital product owner; product and food-safety approvers must review content.',
    operations: ['Keep suggestions explainable and optional.', 'Fall back to a complete menu if matching is unavailable.', 'Do not infer mood, age, health status or protected characteristics.'],
    evidence: { findingIds: ['ajji-cacao-tasting', 'market-indian-cacao'], note: 'Observed/benchmarked flavour variety informs catalogue design questions only.' },
  },
  {
    id: 'commerce-pos',
    title: 'Commerce and POS integration',
    purpose: 'Record accepted orders and sales in the selected commerce/POS source of truth.',
    inputs: ['Customer-approved basket', 'Current price and availability', 'POS payment/order confirmation'],
    outputs: ['Order and OrderItem records', 'Payment status reference', 'Sale, refund and cancellation events'],
    dataExchanged: ['Order ID, SKU, quantity, net/gross amount, tax/discount fields supplied by POS, event time and channel'],
    interface: 'Select a POS product only after procurement; prefer documented API/webhooks or scheduled export. Do not store card data in KATHAI analytics. For pilot, use controlled POS exports if integration is unavailable.',
    dependencies: ['POS contract and API/export access', 'Stable product identifiers', 'Finance-approved treatment of tax, refunds and discounts'],
    owner: 'Proposed: operations/POS administrator with finance and engineering support; no vendor or owner selected.',
    operations: ['Reconcile event totals to POS close reports.', 'Use idempotent import keys and quarantine malformed/duplicate events.', 'Manual close-sheet reconciliation is the fallback.'],
    evidence: { findingIds: ['market-serving-value'], note: 'Competitor pricing/serving examples justify clear price and yield information; they do not specify KATHAI checkout technology.' },
  },
  {
    id: 'operational-data',
    title: 'Operational and customer data',
    purpose: 'Maintain controlled product, ingredient, order, inventory, consent and feedback records for operations and reporting.',
    inputs: ['Approved catalogue edits', 'POS exports/events', 'Stock counts and inventory events', 'Voluntary feedback', 'Adult opt-in consent records where needed'],
    outputs: ['Validated operational records', 'Reconciliation exceptions', 'Aggregated reporting tables'],
    dataExchanged: ['Product, Flavour, Ingredient, Order, OrderItem, InventoryEvent, Feedback and ConsentRecord; AdultCustomerProfile only if a defined use requires it'],
    interface: 'Initially a documented, access-controlled relational store or managed POS exports selected during procurement; no database vendor is selected.',
    dependencies: ['Data dictionary and identifiers', 'Role-based access decisions', 'Retention schedule', 'POS/export controls'],
    owner: 'Proposed: data steward in operations with engineering/security support; no role assigned.',
    operations: ['Separate operational records from reporting extracts.', 'Limit profile collection; aggregate wherever an individual record is unnecessary.', 'Support correction/deletion requests and audited exports.'],
    evidence: { findingIds: ['parent-appeal-packaging'], note: 'Published research supports careful, clear family-facing information; it does not establish KATHAI consent or data requirements.' },
  },
  {
    id: 'analytics',
    title: 'Analytics and decision services',
    purpose: 'Turn reconciled sales, product, inventory and voluntary feedback into descriptive measures and bounded decision support.',
    inputs: ['Validated operational records', 'Approved product taxonomy', 'Defined time windows and denominators'],
    outputs: ['Sales/feedback aggregates', 'Forecast ranges only after adequate history', 'Explainable recommendations and exceptions'],
    dataExchanged: ['Aggregated metric values and provenance, not raw personal data by default'],
    interface: 'Scheduled SQL/BI transformations initially; model-serving APIs only after evaluation and governance approval.',
    dependencies: ['Reliable source records', 'Metric definitions', 'Sufficient observations for the intended analysis'],
    owner: 'Proposed: analytics owner; product/operations retains decision authority.',
    operations: ['Version transformation logic and reconcile totals.', 'Display freshness, exclusions and missing data.', 'If quality or sample thresholds fail, withhold output and use documented manual review.'],
    evidence: { findingIds: ['ajji-cacao-tasting', 'market-preparation-and-packaging'], note: 'Existing research provides product questions and validation considerations, not model training data.' },
  },
  {
    id: 'decision-support',
    title: 'Business decision support',
    purpose: 'Help an accountable operator decide whether to change menu, purchasing, staffing or communication.',
    inputs: ['Metric outputs with period, denominator and data-quality notes', 'Current stock and approved operating constraints'],
    outputs: ['Human-approved replenishment, menu or service action', 'Decision record and follow-up measurement'],
    dataExchanged: ['Aggregated performance, recommendation reason, action owner and review date'],
    interface: 'Role-restricted dashboard/report and existing operations checklist; recommendations are not automatically executed.',
    dependencies: ['Reviewed metrics', 'Named decision owner', 'Procurement/menu approval paths'],
    owner: 'Proposed: store/operations lead; role not assigned.',
    operations: ['Keep a human in the loop for purchasing, staffing, child-facing content and product changes.', 'Record overrides and reasons to improve rules.'],
    evidence: { findingIds: ['market-preparation-and-packaging'], note: 'The competitor report recommends testing feasibility; it does not prove a particular operating decision.' },
  },
  {
    id: 'experience-improvement',
    title: 'Customer experience improvement',
    purpose: 'Apply reviewed product, service and availability decisions to the next visit while keeping the customer in control.',
    inputs: ['Approved catalogue/service changes', 'Explicit, revocable adult preference consent if a saved preference is offered'],
    outputs: ['Updated public menu and staff guidance', 'Optional adult-directed preference recall', 'Measured follow-up outcomes'],
    dataExchanged: ['Public changes by default; adult preference data only within stated purpose and retention period'],
    interface: 'Content release process, POS catalogue and optional adult account/loyalty channel if separately approved.',
    dependencies: ['Evidence review', 'Product/allergen approval', 'Consent and deletion workflow'],
    owner: 'Proposed: product and operations; accountable owners remain to be assigned.',
    operations: ['No behavioural advertising, profiling or personalized targeting of children.', 'For Gen Alpha, suggestions are session-only; guardians decide suitability and purchase.', 'Offer generic menu and staff assistance when consent is absent or recalled data is unavailable.'],
    evidence: { findingIds: ['parent-appeal-packaging', 'child-food-marketing-effects'], note: 'Published reviews concern broad child-food marketing/packaging contexts and support cautious, non-pressuring design—not KATHAI demand.' },
  },
]

export type ExperienceUseCase = {
  id: string
  title: string
  inputs: string[]
  decisionRule: string[]
  output: string
  fallback: string
  personaIds: PersonaId[]
}

export const experienceUseCases: ExperienceUseCase[] = [
  {
    id: 'mood-flavour-discovery',
    title: 'Mood and flavour discovery',
    inputs: ['Customer-selected occasion, e.g. quiet pause, social outing or new-flavour exploration', 'Approved flavour descriptors'],
    decisionRule: ['Treat occasion as a current-session filter, not a psychological inference.', 'Show the catalogue and why each match appears.'],
    output: 'A short set of flavour options with plain-language taste descriptions.',
    fallback: 'Show the full menu in its default order; staff can explain options.',
    personaIds: ['premium-experience-explorer', 'urban-pause-seeker', 'young-independent-experience-collector', 'flavour-craft-enthusiast', 'on-the-go-comfort-seeker', 'gift-shared-moment-buyer', 'traveller-self-heating-utility-seeker'],
  },
  {
    id: 'transparent-flavour-match',
    title: 'Explainable flavour matching',
    inputs: ['Customer-selected flavour notes/intensity', 'Structured attributes reviewed by product team'],
    decisionRule: ['Score exact attribute matches with a transparent rule such as +1 per selected note.', 'Do not use demographic, health, inferred mood or protected-attribute features.', 'Treat ties equally; never imply a scientifically measured personal fit.'],
    output: 'Up to three options with matched notes explicitly shown.',
    fallback: 'If attributes are missing or the catalogue is empty, show all available items and no match score.',
    personaIds: ['premium-experience-explorer', 'flavour-craft-enthusiast', 'young-gen-alpha-participant', 'curious-ingredient-explorer'],
  },
  {
    id: 'ingredients-allergens',
    title: 'Ingredient and allergen information',
    inputs: ['Approved ingredient/allergen record per product and batch/process caveat where available'],
    decisionRule: ['Display only verified information and last-reviewed metadata.', 'Do not calculate or make unsupported health/nutrition suitability claims.', 'Route uncertain questions to a trained staff member.'],
    output: 'Readable ingredient and allergen details for the customer and a complete guardian-facing view.',
    fallback: 'If information is missing or stale, mark it unavailable and pause recommendation/sale until an authorized reviewer confirms suitability.',
    personaIds: ['young-gen-alpha-participant', 'pocket-money-treat-planner', 'curious-ingredient-explorer'],
  },
  {
    id: 'qr-exploration',
    title: 'QR-based product exploration',
    inputs: ['Printed QR mapped to stable product/content ID', 'Public product catalogue'],
    decisionRule: ['QR opens a public, accessible product page without requiring login.', 'Never encode a child identity, order number or personal token in the printed code.'],
    output: 'Product story, flavour notes, preparation and verified suitability information.',
    fallback: 'Use a short human-readable URL and printed menu; QR failure does not block purchase.',
    personaIds: ['premium-experience-explorer', 'young-independent-experience-collector', 'flavour-craft-enthusiast', 'young-gen-alpha-participant', 'curious-ingredient-explorer'],
  },
  {
    id: 'purchase-feedback',
    title: 'Purchase and feedback touchpoints',
    inputs: ['POS-confirmed transaction', 'Optional customer-submitted rating/comment'],
    decisionRule: ['Collect feedback separately from required checkout fields.', 'Do not gate service, discounts or purchase on feedback.', 'Restrict free-text handling and redact unnecessary personal data before analysis.'],
    output: 'Reconciled order records and voluntary feedback grouped for human review.',
    fallback: 'Paper/comment-free verbal route; POS close reconciliation for missing integrations.',
    personaIds: ['gift-shared-moment-buyer', 'trusted-ritual-seeker', 'creative-community-connector', 'flavour-craft-enthusiast'],
  },
  {
    id: 'adult-consent-preferences',
    title: 'Consent-based adult preference retention',
    inputs: ['Adult’s explicit opt-in, declared preference and purpose-specific consent record'],
    decisionRule: ['Preference is optional, purpose-limited and revocable.', 'Collect the minimum fields and define a retention period before enabling storage.', 'Do not create or retain a child preference profile.'],
    output: 'An adult may see a previously chosen preference after re-authentication or within the stated service context.',
    fallback: 'No consent means no saved preference; offer the same session-only discovery experience.',
    personaIds: ['urban-pause-seeker', 'trusted-ritual-seeker', 'young-independent-experience-collector', 'creative-community-connector', 'on-the-go-comfort-seeker', 'traveller-self-heating-utility-seeker'],
  },
  {
    id: 'repeat-suggestions',
    title: 'Appropriate repeat-experience suggestions',
    inputs: ['Adult’s active consent, prior completed orders and currently available catalogue'],
    decisionRule: ['For adults only, suggest a previously chosen item or a comparable available option.', 'Explain the basis and allow dismissal; do not imply health benefits or guaranteed preference.', 'Do not use children’s behaviour for targeting or advertising.'],
    output: 'An optional adult-facing reminder or menu shortcut.',
    fallback: 'Show the current public menu with no personalized content.',
    personaIds: ['urban-pause-seeker', 'trusted-ritual-seeker', 'young-independent-experience-collector', 'creative-community-connector', 'gift-shared-moment-buyer', 'traveller-self-heating-utility-seeker'],
  },
]

export type DataEntity = {
  name: string
  purpose: string
  minimumFields: string[]
  sourceOfTruth: string
  access: string
  retention: string
}

export const dataEntities: DataEntity[] = [
  { name: 'Product', purpose: 'Approved saleable item and current availability.', minimumFields: ['product_id', 'name', 'SKU', 'status', 'price effective dates'], sourceOfTruth: 'Approved catalogue/POS; no system selected.', access: 'Product owner edits; staff read.', retention: 'Retain versioned catalogue history per finance/product record policy.' },
  { name: 'Flavour', purpose: 'Structured sensory descriptors used in menu and explainable matching.', minimumFields: ['flavour_id', 'product_id', 'descriptor', 'reviewer', 'review date'], sourceOfTruth: 'Product-approved catalogue.', access: 'Product owner edits; public descriptors readable.', retention: 'Retain while referenced; archive discontinued descriptions.' },
  { name: 'Ingredient', purpose: 'Verified recipe ingredient, allergen and supplier/batch references.', minimumFields: ['ingredient_id', 'product_id', 'allergen status', 'source/batch reference', 'approver', 'effective date'], sourceOfTruth: 'Controlled recipe and food-safety record.', access: 'Restricted edits to authorized food/product roles; verified subset public.', retention: 'Follow applicable food-safety and record-retention advice; do not infer absent fields.' },
  { name: 'Order', purpose: 'Commercial transaction header reconciled to POS.', minimumFields: ['order_id', 'timestamp', 'channel', 'status', 'currency', 'net/gross/tax/refund fields if provided'], sourceOfTruth: 'POS/finance ledger.', access: 'Operations/finance by role; analysts use minimized extracts.', retention: 'Finance/legal retention policy to be set before launch.' },
  { name: 'OrderItem', purpose: 'Product-level quantity and price for sales and mix analysis.', minimumFields: ['order_id', 'product_id', 'quantity', 'unit price', 'discount/tax allocation if available'], sourceOfTruth: 'POS; reconciled export.', access: 'Same restrictions as order; aggregate for routine reporting.', retention: 'Align with order/finance policy.' },
  { name: 'InventoryEvent', purpose: 'Track receipts, transfers, counts, sale use, waste and adjustments.', minimumFields: ['event_id', 'ingredient/product_id', 'quantity', 'unit', 'event type', 'timestamp', 'reason'], sourceOfTruth: 'Controlled stock ledger and verified counts.', access: 'Store operations edit; finance/analytics read as needed.', retention: 'Retain auditable adjustment trail under operations policy.' },
  { name: 'Feedback', purpose: 'Voluntary service/product feedback and reviewed themes.', minimumFields: ['feedback_id', 'timestamp', 'channel', 'rating or text', 'product if volunteered', 'review status'], sourceOfTruth: 'Feedback service or controlled collection log.', access: 'Restricted raw-text access; aggregate report for operators.', retention: 'Short, documented schedule; remove identifiers unless essential.' },
  { name: 'ConsentRecord', purpose: 'Evidence of optional adult preference-storage consent and withdrawal.', minimumFields: ['subject token', 'purpose', 'notice version', 'choice', 'timestamp', 'withdrawal timestamp'], sourceOfTruth: 'Consent service, if approved.', access: 'Restricted privacy role; auditable access.', retention: 'Keep only as needed to demonstrate consent/withdrawal; legal review required.' },
  { name: 'AdultCustomerProfile (optional)', purpose: 'Only an adult’s declared preferences when a defined service requires it.', minimumFields: ['pseudonymous adult ID', 'declared preference', 'consent reference', 'created/updated/deleted timestamps'], sourceOfTruth: 'Optional identity/CRM service not yet selected.', access: 'Need-to-know role; no raw profile to general analytics.', retention: 'Consent-bound; support export/correction/deletion. Do not create child profiles.' },
]

export const dataControls = [
  { stage: 'Collect', controls: ['Document source, purpose and owner for each event.', 'Reject unexpected fields; do not collect child identity, inferred mood or payment-card data.'] },
  { stage: 'Validate', controls: ['Check required IDs, timestamps, units, currency, enumerations and positive quantities.', 'Quarantine duplicate, malformed, stale-catalogue or unreconciled POS events; surface an exception report.'] },
  { stage: 'Store', controls: ['Choose a supported source of truth by entity before implementation.', 'Encrypt in transit and at rest; separate production and analysis access; maintain backups and restore tests.'] },
  { stage: 'Transform', controls: ['Version SQL/metric definitions and record source period, exclusions and refresh time.', 'Reconcile order totals and inventory adjustments against POS/stock close.'] },
  { stage: 'Report', controls: ['Use aggregated outputs by default; suppress small cohorts where re-identification is possible.', 'Show data freshness, denominator and missingness beside each KPI.'] },
  { stage: 'Retain/delete', controls: ['Set purpose-specific retention and deletion rules before collection.', 'Propagate adult consent withdrawal/deletion to derived profile stores; retain required financial records separately under reviewed policy.'] },
  { stage: 'Secure', controls: ['Use role-based least privilege, MFA for administrative access, audit logs and incident response ownership.', 'Complete privacy, security and applicable India DPDP/FSSAI specialist review before launch; these are proposed controls, not a compliance certification.'] },
]

export type IntelligenceUseCase = {
  title: string
  inputs: string[]
  method: string
  output: string
  evaluation: string
  oversight: string
  fallback: string
}

export const intelligenceUseCases: IntelligenceUseCase[] = [
  { title: 'Rules-based flavour recommendation', inputs: ['Customer-selected flavour descriptors', 'Reviewed product-attribute catalogue'], method: 'Transparent deterministic matching; no learned model or personal profile.', output: 'At most three available catalogue items with matched descriptors and reasons.', evaluation: 'Catalogue coverage, correct attribute matches, availability accuracy, task completion and user comprehension in moderated testing.', oversight: 'Product owner approves attributes; customer chooses; no automatic purchase.', fallback: 'Full menu and staff explanation if attributes, availability or service fail.' },
  { title: 'Product performance analysis', inputs: ['POS Order/OrderItem', 'Product/Flavour catalogue', 'Defined selling period'], method: 'Descriptive SQL aggregation with net sales, units, contribution only when cost inputs are sourced.', output: 'Ranked sales/mix report with period, refunds, out-of-stock exposure and missing-data flags.', evaluation: 'Reconcile row counts and sales totals to POS/finance; review metric definition and refresh completeness.', oversight: 'Operations/product review context before a menu change.', fallback: 'Use reconciled POS close totals; label incomplete product tagging.' },
  { title: 'Feedback classification', inputs: ['Optional voluntary feedback', 'Approved limited theme taxonomy'], method: 'Begin with human-coded categories and counts; consider text classification only after consent, privacy review and representative labeled data.', output: 'Theme counts with examples redacted and uncertainty/coverage visible.', evaluation: 'On held-out, human-labeled text assess per-class precision/recall, disagreement, language coverage and drift; thresholds must be agreed before use.', oversight: 'Human reviewer confirms themes; never automatically act on an individual comment.', fallback: 'Manual coded sample or unclassified-feedback count; do not infer sentiment when uncertain.' },
  { title: 'Demand forecasting', inputs: ['Daily POS units by SKU', 'Opening days/hours', 'Stock-outs and promotions', 'Calendar/weather only when sourced and justified'], method: 'Start with seasonal-naive or moving-average baseline; evaluate a forecast only after sufficient representative history.', output: 'SKU/day demand range and replenishment suggestion, not automatic order.', evaluation: 'Rolling-origin backtest against a naive baseline; report WAPE/MAE, bias and stock-out/waste trade-off by SKU. Define minimum history and acceptance threshold before adoption.', oversight: 'Operations checks lead time, shelf life, event context and current stock before ordering.', fallback: 'Use par levels and manual count/reorder process; no forecast presented when sample/history is insufficient.' },
  { title: 'Inventory decision support', inputs: ['Verified on-hand quantity', 'Supplier lead time and pack size', 'Demand estimate', 'Expiry/shelf-life and open purchase orders'], method: 'Deterministic reorder point: expected demand during lead time plus an explicitly configured safety buffer.', output: 'Review queue of suggested reorder quantities and exception reasons.', evaluation: 'Inventory record accuracy, stock-out/waste outcomes and override rate over a defined period.', oversight: 'Authorized manager approves every order; buffer and supplier assumptions are visible.', fallback: 'Physical count and manager judgment when data is stale, expiry unknown or supplier lead time unconfirmed.' },
]

export type OperationalMetric = {
  name: string
  formula: string
  denominator: string
  period: string
  source: string
  decision: string
  example: { numerator: number; denominator: number; resultLabel: string }
}

export const operationalMetrics: OperationalMetric[] = [
  { name: 'Sell-through rate', formula: 'Units sold / Units available for sale', denominator: 'Units available for sale = opening sellable stock + received/produced sellable units during the same period; exclude transfers/returns consistently.', period: 'Daily or weekly, by SKU; compare like-for-like periods.', source: 'Reconciled POS sales and InventoryEvent.', decision: 'Review replenishment or menu placement only after stock-out and waste context.', example: { numerator: 72, denominator: 90, resultLabel: 'Illustrative: 72 ÷ 90 = 80%' } },
  { name: 'Waste rate', formula: 'Wasted quantity / Total relevant quantity handled', denominator: 'Handled quantity = opening stock + receipts/production in the period; define consistent units and exclude transfers/closing stock duplication.', period: 'Weekly or monthly, by ingredient/SKU.', source: 'InventoryEvent waste reason codes and verified counts.', decision: 'Investigate spoilage, batch sizing and handling; do not treat reduced waste alone as proof of demand.', example: { numerator: 5, denominator: 100, resultLabel: 'Illustrative: 5 ÷ 100 = 5%' } },
  { name: 'Repeat purchase rate', formula: 'Returning eligible customers / Eligible customers in the defined cohort', denominator: 'Eligible cohort = customers with an identifiable, consent-permitted first purchase and a complete observation window; anonymous buyers are excluded from customer-level numerator and denominator.', period: 'Choose a fixed cohort start and observation window (e.g. 30/60/90 days); compare the same window.', source: 'POS/CRM only where adult identity linkage and consent are valid.', decision: 'Use alongside anonymous sales and cohort-size/context; never infer a child profile.', example: { numerator: 12, denominator: 60, resultLabel: 'Illustrative: 12 ÷ 60 = 20%' } },
  { name: 'Feedback theme share', formula: 'Reviewed feedback items assigned to theme / All reviewed feedback items', denominator: 'Only submissions reviewed under a stable codebook; allow multiple themes or define single-label rules before counting.', period: 'Monthly; show response count and collection channel.', source: 'Voluntary feedback with personal details removed.', decision: 'Prioritize a follow-up check; small self-selected feedback samples are not population estimates.', example: { numerator: 18, denominator: 60, resultLabel: 'Illustrative: 18 ÷ 60 = 30%' } },
]

export type RoadmapPhase = {
  title: string
  deliverables: string[]
  inputs: string[]
  dependencies: string[]
  responsibleRole: string
  acceptance: string[]
  costCategories: string[]
  risksAndControls: string[]
}

export const technologyRoadmap: RoadmapPhase[] = [
  { title: 'Phase 0 · Define and govern', deliverables: ['Approved service blueprint and data map', 'Product/ingredient/allergen catalogue schema', 'POS/vendor requirements and measurement dictionary', 'Threat/privacy review and retention schedule'], inputs: ['Approved menu and recipe records', 'Operations workflow', 'Finance reconciliation needs', 'Specialist privacy/security and food-safety review'], dependencies: ['Business owner approval', 'Vendor discovery; no vendor assumed'], responsibleRole: 'Proposed product/operations owner with finance, privacy and engineering reviewers; roles unassigned.', acceptance: ['Every collected field has purpose, source, owner, sensitivity and retention.', 'Required allergen/suitability fields have an authorized verifier.', 'No child profile or card data is in scope.'], costCategories: ['Discovery and design', 'Legal/privacy/security review', 'POS/vendor assessment'], risksAndControls: ['Scope creep → approve use cases and data minimisation.', 'Unverified product claims → block publish until accountable review.'] },
  { title: 'Phase 1 · Reliable point-of-sale operations', deliverables: ['Configured POS/catalogue identifiers', 'Daily close and refund reconciliation', 'Manual inventory receipt/count/waste log', 'Accessible static digital/printed menu with verified information'], inputs: ['Menu, prices, taxes, recipes, opening calendar', 'Supplier and operating processes'], dependencies: ['Phase 0 definitions', 'Chosen POS and payment provider', 'Staff training and finance sign-off'], responsibleRole: 'Proposed store operations lead and finance/POS administrator; no staffing commitment.', acceptance: ['Daily POS totals reconcile to close report within an agreed tolerance.', 'Product IDs are consistent across menu and stock records.', 'Manual process exists for outage and corrections.'], costCategories: ['POS hardware/software', 'Payment processing', 'Menu/content setup', 'Training', 'Connectivity'], risksAndControls: ['Integration unavailable → controlled export/manual close.', 'Wrong allergen/price → approval and dated catalogue release.'] },
  { title: 'Phase 2 · Data quality and descriptive reporting', deliverables: ['Validated Order/OrderItem/InventoryEvent data', 'Versioned daily/weekly KPI transformations', 'Role-restricted reporting and exception log', 'Backups, access audit and restore procedure'], inputs: ['Reconciled POS records', 'Verified inventory events', 'Defined KPI denominators'], dependencies: ['Phase 1 stable IDs and close workflow', 'Selected storage/BI tools after procurement'], responsibleRole: 'Proposed data steward/analytics owner with engineering/security; unassigned.', acceptance: ['Revenue/units reconcile to POS for test periods.', 'Every metric shows period, denominator, refresh time and missingness.', 'Role access, retention and deletion controls are tested.'], costCategories: ['Data storage/BI', 'Integration engineering', 'Security/backup', 'Analytics configuration'], risksAndControls: ['Poor data quality → quarantine and manual reconciliation.', 'Unnecessary personal data → aggregate and restrict extracts.'] },
  { title: 'Phase 3 · Customer-led discovery and controlled tests', deliverables: ['Public QR product pages', 'Transparent session-only flavour matching', 'Voluntary feedback with human-coded themes', 'Optional adult consent workflow only if purpose and controls approved'], inputs: ['Reviewed flavour attributes', 'Verified ingredients/allergens', 'Moderated usability/customer tests'], dependencies: ['Phase 0 safety/privacy approval', 'Phases 1–2 catalogue and reporting'], responsibleRole: 'Proposed product/content owner with guardian-informed research and privacy review; no owner assigned.', acceptance: ['Rules explain the match and full-menu fallback is usable.', 'Ingredient/allergen content has an owner and review date.', 'Gen Alpha interaction has no profiling/behavioral targeting and leaves purchase authority with guardian.'], costCategories: ['UX/content', 'Usability research', 'QR/web hosting', 'Consent/privacy review'], risksAndControls: ['Misleading personalization → describe matches as suggestions.', 'Children pressured to share → no login/retention for child discovery.'] },
  { title: 'Phase 4 · Decision support after sufficient evidence', deliverables: ['Reorder suggestions using verified counts/lead times', 'Forecast baseline with backtest report if history is sufficient', 'Reviewed feedback theme reporting'], inputs: ['Stable, representative sales/inventory history', 'Supplier lead time, expiry, stock-out and promotion records'], dependencies: ['Phase 3 governance; reliable Phase 2 metrics; operations owner approval'], responsibleRole: 'Proposed analytics owner and operations approver; unassigned.', acceptance: ['Forecast beats agreed naive baseline on rolling backtest and exposes error/bias.', 'Recommendations are human-approved and overrides logged.', 'No model runs when required history/data-quality gates fail.'], costCategories: ['Analytics/engineering', 'Monitoring and review time', 'Potential vendor services'], risksAndControls: ['Model drift → monitor and revert to par-level process.', 'False precision → show range, uncertainty and baseline.'] },
]

export const selfHeatingWorkstream = [
  { stage: '1 · Engineering feasibility', detail: 'Compare candidate mechanism classes (e.g. exothermic reaction, electrical/phase-change or externally heated approaches) against food-contact separation, energy, packaging, intended use and disposal constraints. Do not select a chemistry from desk research alone.', gate: 'Documented hazard analysis and prototype test plan reviewed by qualified engineers and regulatory/food-safety specialists.' },
  { stage: '2 · Materials and thermal separation', detail: 'Define food-contact layers, barrier design, seals, insulation, thermal transfer path and misuse conditions. Verify material specifications and supplier declarations.', gate: 'Qualified food-contact and thermal review; no food-contact or consumer-safety claim without test evidence.' },
  { stage: '3 · Activation and use', detail: 'Test activation sequence, force, handling, orientation, time-to-heat, surface temperatures, drink temperature and cooling profile against a future approved use specification.', gate: 'Acceptance limits set by specialists before tests; adult-supervised usability and failure observations documented.' },
  { stage: '4 · Leakage, failure and transport', detail: 'Test seal/leakage, drop, compression, vibration, temperature/humidity storage and failure modes including incomplete activation or unexpected heat release.', gate: 'Risk controls and pass/fail criteria approved; adverse or ambiguous results stop progression.' },
  { stage: '5 · Stability, disposal and regulatory review', detail: 'Evaluate shelf/pack stability, transport, waste stream, consumer instructions, emergency handling and environmental claims. Obtain applicable FSSAI and other specialist advice for classification, food-contact, label, manufacturing and sale requirements.', gate: 'Written specialist regulatory review and documented compliant disposal route before commercial commitment; this plan is not certification.' },
]

