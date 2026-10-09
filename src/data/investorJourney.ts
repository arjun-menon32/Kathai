import type { ResearchFindingId } from './types'

export type InvestorEvidenceReference = {
  findingIds: ResearchFindingId[]
  interpretation: string
}

export const marketContext: {
  title: string
  facts: string[]
  sourceUrl: string
  sourceLabel: string
  publishedContext: string
  findingIds: ResearchFindingId[]
}[] = [
  {
    title: 'India food-services sector context',
    facts: [
      'IBEF’s 10 July 2024 secondary article reports an estimated ₹5.69 lakh crore / US$68.31 billion 2024 food-services baseline and forecasts ₹7.76 trillion / US$93.16 billion by 2028 at 8.1% CAGR.',
      'This is a broad restaurant/food-services sector figure, not a hot-chocolate category estimate, KATHAI TAM, serviceable market or forecast.',
      'NRAI’s public About page independently lists ₹5.69 lakh crore but gives no valuation year. IBEF does not name NRAI in the article text. Neither public page exposes the underlying method or full report; verify before external investment use.',
    ],
    sourceUrl: 'https://www.ibef.org/news/indian-food-services-sector-to-grow-by-8-1-from-2024-to-2028-report',
    sourceLabel: 'IBEF · Food services sector forecast',
    publishedContext: 'Secondary industry article published 10 July 2024; accessed 8 October 2026.',
    findingIds: ['india-food-services-context'],
  },
]

export const marketSizingMethod = [
  {
    label: 'TAM · total addressable annual occasion spend',
    formula: 'Annual relevant hot-chocolate occasions in the defined geography × evidence-backed average spend per occasion',
    inputs: ['Defined target population or annual occasions', 'Annual purchase frequency / occasion count', 'Average spend per occasion', 'Geography and reference year'],
  },
  {
    label: 'SAM · serviceable annual market',
    formula: 'Relevant annual occasions reachable through selected geography/channels × evidenced average spend per occasion',
    inputs: ['Serviceable catchment population/occasions', 'Accessible venues/channels and trading coverage', 'Observed category frequency', 'Validated price/average spend'],
  },
  {
    label: 'SOM · capacity- and evidence-constrained obtainable sales',
    formula: 'Available sales capacity × open days × evidence-supported capture/utilisation × realized net price',
    inputs: ['Documented capacity and opening days', 'Observed conversion/orders or justified test range', 'Realized net selling price after discounts/refunds', 'Channel-specific constraints'],
  },
]

export const marketSizingCaveat = 'No defensible India hot-chocolate buyer count, category frequency, Bengaluru catchment sizing or KATHAI conversion data is currently in the shared evidence registry. The form starts blank and deliberately does not manufacture TAM/SAM/SOM values. Enter source, date, geography, method and uncertainty with each input before using a result externally. Food-services turnover is context only.'

export type CompetitorBenchmark = {
  name: string
  observedOffer: string
  relevance: string
  findingIds: ResearchFindingId[]
  limitation: string
}

export const competitorBenchmarks: CompetitorBenchmark[] = [
  { name: 'SMOOR', observedOffer: 'Research notes single-serve and gifting formats.', relevance: 'Benchmark packaging/occasion architecture and gifting presentation.', findingIds: ['market-single-serve-gifting'], limitation: 'Desk-research snapshot; no consumer preference, demand or KATHAI economics established.' },
  { name: 'ZOROY', observedOffer: 'Research notes a serving/value proposition and a dated listed price example.', relevance: 'Compare clearly stated serving, total price and perceived value in primary price testing.', findingIds: ['market-serving-value'], limitation: 'Price is from the source report dated 30 September 2026; recheck current offer, serving size and tax before comparison. Not a KATHAI price recommendation.' },
  { name: 'Manam and SOKLET', observedOffer: 'Research notes Indian cacao origin/craft positioning.', relevance: 'Inform provenance vocabulary and substantiation requirements for any origin claim.', findingIds: ['market-indian-cacao'], limitation: 'Competitor positioning is not evidence of KATHAI sourcing capability or customer demand.' },
  { name: 'Subko / Ajji House', observedOffer: 'Research describes craft, cacao, hospitality, sensory exploration and an observed nine-drink tasting at a competitor venue.', relevance: 'Inform service and tasting hypotheses to test; maintain credible craft and clear provenance.', findingIds: ['market-subko-position', 'ajji-cacao-tasting', 'ajji-heritage-setting'], limitation: 'Single competitor visit/team assessment and limited field observations; observed venue behavior is not representative KATHAI customer evidence.' },
  { name: 'International percentage-led formats', observedOffer: 'Research identifies cacao-percentage-led chocolate and multiple preparation formats.', relevance: 'Consider whether a clear intensity/percentage vocabulary and preparation instructions aid comparison.', findingIds: ['market-percentage-formats', 'market-preparation-and-packaging'], limitation: 'Desk research; product quality, import availability, current prices and local consumer comprehension require verification.' },
]

export const revenueStreams = [
  { stream: 'In-venue hot chocolate', status: 'Core proposed offer', evidence: 'Current product concept; demand, price acceptance, margins and repeat are not validated.' },
  { stream: 'Flavor/customisation add-ons', status: 'Optional test', evidence: 'Potential basket/value extension; only retain if observed attachment and contribution justify complexity.' },
  { stream: 'Packaged chocolate / gifting', status: 'Possible future stream', evidence: 'Competitor formats exist in desk research; KATHAI SKU, shelf-life, packaging, production and buyer demand are unverified.' },
  { stream: 'Self-heating product', status: 'Separate engineering workstream', evidence: 'A concept requiring feasibility, safety, regulatory, materials, use and disposal verification; excluded from base financial model.' },
  { stream: 'Partnerships / other channels', status: 'Possible future stream', evidence: 'No agreement, terms, audience or economics are recorded; do not count as committed revenue.' },
]

export const investorKpis = [
  { name: 'Average order value (AOV)', formula: 'Net realized sales / completed paid orders; define taxes, discounts, refunds and bundled items consistently.', decision: 'Compare actual basket value by product and channel against the editable model.' },
  { name: 'Customer acquisition cost (CAC)', formula: 'Attributable incremental acquisition spend / defined new first-time customers in the same campaign/cohort window.', decision: 'Measure only with documented attribution, spend, eligible exposure and adult-consented customer identity where individual cohorts are used; not currently calculated.' },
  { name: 'Gross margin', formula: '(Net revenue − direct ingredient, packaging and measured waste cost) / net revenue.', decision: 'Replace provisional waste allowance and ingredient/packaging assumptions with invoice, recipe and stock records.' },
  { name: 'Contribution by product/channel', formula: 'Net revenue − variable ingredients, packaging, waste, payment, platform/channel and delivery costs.', decision: 'Retain only product/channel combinations with verified positive contribution and repeatable quality.' },
  { name: 'Repeat purchase rate', formula: 'Customers with another completed purchase in the defined window / eligible first-purchase cohort.', decision: 'Report cohort size, identity/consent, observation window and anonymous-sales context; do not use stated intent as a substitute.' },
  { name: 'Waste rate', formula: 'Recorded waste quantity / consistently defined handled quantity for the same product, ingredient and period.', decision: 'Investigate stock, shelf life, production batch and demand context.' },
  { name: 'Offer-to-purchase conversion', formula: 'Completed purchases / eligible, uniquely counted exposures to the defined offer.', decision: 'Compare test variants only when exposure and audience definitions are consistent; not a market-wide preference estimate.' },
  { name: 'Unit/store operating contribution', formula: 'Channel or store contribution − attributable recurring labour, rent, utilities, marketing and maintenance.', decision: 'Use only after sourcing actual site, staffing and recurring operating costs; model output excludes several costs.' },
]

export const goToMarketExperiments = [
  { channel: 'Direct pilot / pop-up', hypothesis: 'An in-person tasting and service context may help customers understand the product.', test: 'Run a bounded, permitted pilot with a defined offer, tracked eligible visits, price/portion, completed purchases and feedback protocol.', gate: 'Proceed only with measured purchase, product quality, contribution and operating controls; competitor venue observations are context only.', findingIds: ['ajji-cacao-tasting', 'ajji-heritage-setting'] as ResearchFindingId[] },
  { channel: 'Friends, creators and discovery content', hypothesis: 'Peer or creator discovery may introduce the proposition to some Gen Z prospects.', test: 'Compare source-coded, clearly disclosed content/referrals with another discovery route; measure qualified visits and completed paid orders, not views alone.', gate: 'Use an acquisition channel only if incremental conversion, cost and audience fit are measured; Google’s cross-category findings are not KATHAI channel validation.', findingIds: ['google-gen-z-discovery'] as ResearchFindingId[] },
  { channel: 'Local community and venue partnerships', hypothesis: 'A relevant host may enable a useful group occasion or lower-friction pilot.', test: 'Interview possible hosts, document audience/context and written terms, then assess one small pilot if permission and operating requirements are met.', gate: 'No audience, partner, inclusion claim or revenue is assumed until a real partner and customer behavior are documented.', findingIds: ['ajji-creator-practices', 'ajji-safe-destination-conversation'] as ResearchFindingId[] },
  { channel: 'Search / product discovery pages', hypothesis: 'Clear product, ingredient, price and preparation pages may reduce uncertainty.', test: 'Test comprehension and task completion on accessible pages; compare source-tagged visits to real conversion where ordering exists.', gate: 'Do not treat search interest or page views as demand; publish only verified product and suitability content.', findingIds: ['google-gen-z-discovery', 'market-preparation-and-packaging'] as ResearchFindingId[] },
]

export type FinancialScenario = {
  key: 'conservative' | 'base' | 'upside'
  label: string
  disclaimer: string
  inputs: {
    cupPrice: number
    packagedPrice: number
    cupMixPercent: number
    packagedMixPercent: number
    ordersPerOpenDay: number
    openDaysPerMonth: number
    cupIngredientCost: number
    packagedIngredientCost: number
    cupPackagingCost: number
    packagedPackagingCost: number
    wastePercentOfIngredients: number
    paymentFeePercent: number
    onlineOrderSharePercent: number
    channelFeePercent: number
    monthlyLabour: number
    monthlyRent: number
    monthlyUtilities: number
    monthlyMarketing: number
    equipmentCapex: number
    equipmentLifeMonths: number
  }
}

export const initialFinancialScenarios: FinancialScenario[] = [
  {
    key: 'conservative',
    label: 'Conservative',
    disclaimer: 'Editable planning assumptions only; not a forecast, quote, validated price, operating plan or commitment.',
    inputs: {
      cupPrice: 450, packagedPrice: 300, cupMixPercent: 95, packagedMixPercent: 5,
      ordersPerOpenDay: 25, openDaysPerMonth: 26, cupIngredientCost: 145, packagedIngredientCost: 105,
      cupPackagingCost: 25, packagedPackagingCost: 35, wastePercentOfIngredients: 8, paymentFeePercent: 2,
      onlineOrderSharePercent: 20, channelFeePercent: 22, monthlyLabour: 160000, monthlyRent: 180000,
      monthlyUtilities: 30000, monthlyMarketing: 35000, equipmentCapex: 800000, equipmentLifeMonths: 60,
    },
  },
  {
    key: 'base',
    label: 'Base',
    disclaimer: 'Editable planning assumptions only; not a forecast, quote, validated price, operating plan or commitment.',
    inputs: {
      cupPrice: 525, packagedPrice: 350, cupMixPercent: 90, packagedMixPercent: 10,
      ordersPerOpenDay: 50, openDaysPerMonth: 26, cupIngredientCost: 135, packagedIngredientCost: 95,
      cupPackagingCost: 22, packagedPackagingCost: 32, wastePercentOfIngredients: 5, paymentFeePercent: 2,
      onlineOrderSharePercent: 25, channelFeePercent: 20, monthlyLabour: 210000, monthlyRent: 250000,
      monthlyUtilities: 45000, monthlyMarketing: 65000, equipmentCapex: 1000000, equipmentLifeMonths: 60,
    },
  },
  {
    key: 'upside',
    label: 'Upside',
    disclaimer: 'Editable planning assumptions only; not a forecast, quote, validated price, operating plan or commitment.',
    inputs: {
      cupPrice: 600, packagedPrice: 400, cupMixPercent: 85, packagedMixPercent: 15,
      ordersPerOpenDay: 80, openDaysPerMonth: 26, cupIngredientCost: 130, packagedIngredientCost: 90,
      cupPackagingCost: 20, packagedPackagingCost: 30, wastePercentOfIngredients: 3, paymentFeePercent: 2,
      onlineOrderSharePercent: 30, channelFeePercent: 18, monthlyLabour: 270000, monthlyRent: 320000,
      monthlyUtilities: 60000, monthlyMarketing: 100000, equipmentCapex: 1200000, equipmentLifeMonths: 60,
    },
  },
]

export type FinancialMetrics = {
  weightedAverageOrderValue: number
  monthlyOrders: number
  monthlyRevenue: number
  annualizedRevenue: number
  monthlyIngredientCost: number
  monthlyPackagingCost: number
  monthlyWasteAllowance: number
  monthlyCostOfGoods: number
  monthlyGrossProfit: number
  grossMarginPercent: number
  monthlyPaymentFees: number
  monthlyChannelFees: number
  monthlyContribution: number
  contributionMarginPercent: number
  monthlyLabour: number
  monthlyRent: number
  monthlyUtilities: number
  monthlyMarketing: number
  monthlyDepreciation: number
  monthlyOperatingCosts: number
  monthlyOperatingProfitBeforeTaxAndFinancing: number
  breakEvenOrdersPerOpenDay: number | null
}

export function financialScenarioErrors(scenario: FinancialScenario): string[] {
  const { inputs } = scenario
  const errors: string[] = []
  const numericInputs = Object.values(inputs)
  if (numericInputs.some((value) => !Number.isFinite(value) || value < 0)) {
    errors.push('All model inputs must be finite, non-negative numbers.')
  }
  if (inputs.cupMixPercent + inputs.packagedMixPercent !== 100) {
    errors.push('In-venue cup and packaged-format mix must total exactly 100%.')
  }
  if (inputs.paymentFeePercent > 100 || inputs.onlineOrderSharePercent > 100 || inputs.channelFeePercent > 100 || inputs.wastePercentOfIngredients > 100) {
    errors.push('Fee, share and waste percentages cannot exceed 100%.')
  }
  if (inputs.openDaysPerMonth <= 0) errors.push('Open days per month must be greater than zero.')
  if (inputs.equipmentLifeMonths <= 0) errors.push('Equipment life must be greater than zero months.')
  return errors
}

export function calculateFinancialMetrics(scenario: FinancialScenario): FinancialMetrics | null {
  const { inputs } = scenario
  if (financialScenarioErrors(scenario).length > 0) return null
  const cupMix = inputs.cupMixPercent / 100
  const packagedMix = inputs.packagedMixPercent / 100
  const averageOrderValue = (inputs.cupPrice * cupMix) + (inputs.packagedPrice * packagedMix)
  const monthlyOrders = inputs.ordersPerOpenDay * inputs.openDaysPerMonth
  const monthlyRevenue = averageOrderValue * monthlyOrders
  const monthlyIngredientCost = monthlyOrders * ((inputs.cupIngredientCost * cupMix) + (inputs.packagedIngredientCost * packagedMix))
  const monthlyPackagingCost = monthlyOrders * ((inputs.cupPackagingCost * cupMix) + (inputs.packagedPackagingCost * packagedMix))
  const monthlyWasteAllowance = monthlyIngredientCost * inputs.wastePercentOfIngredients / 100
  const monthlyCostOfGoods = monthlyIngredientCost + monthlyPackagingCost + monthlyWasteAllowance
  const monthlyGrossProfit = monthlyRevenue - monthlyCostOfGoods
  const monthlyPaymentFees = monthlyRevenue * inputs.paymentFeePercent / 100
  const monthlyChannelFees = monthlyRevenue * inputs.onlineOrderSharePercent / 100 * inputs.channelFeePercent / 100
  const monthlyContribution = monthlyGrossProfit - monthlyPaymentFees - monthlyChannelFees
  const monthlyDepreciation = inputs.equipmentLifeMonths > 0 ? inputs.equipmentCapex / inputs.equipmentLifeMonths : 0
  const monthlyOperatingCosts = inputs.monthlyLabour + inputs.monthlyRent + inputs.monthlyUtilities + inputs.monthlyMarketing + monthlyDepreciation
  const contributionPerOrder = monthlyOrders > 0 ? monthlyContribution / monthlyOrders : 0
  const breakEvenOrdersPerOpenDay = contributionPerOrder > 0 && inputs.openDaysPerMonth > 0
    ? monthlyOperatingCosts / contributionPerOrder / inputs.openDaysPerMonth
    : null

  return {
    weightedAverageOrderValue: averageOrderValue,
    monthlyOrders,
    monthlyRevenue,
    annualizedRevenue: monthlyRevenue * 12,
    monthlyIngredientCost,
    monthlyPackagingCost,
    monthlyWasteAllowance,
    monthlyCostOfGoods,
    monthlyGrossProfit,
    grossMarginPercent: monthlyRevenue > 0 ? monthlyGrossProfit / monthlyRevenue * 100 : 0,
    monthlyPaymentFees,
    monthlyChannelFees,
    monthlyContribution,
    contributionMarginPercent: monthlyRevenue > 0 ? monthlyContribution / monthlyRevenue * 100 : 0,
    monthlyLabour: inputs.monthlyLabour,
    monthlyRent: inputs.monthlyRent,
    monthlyUtilities: inputs.monthlyUtilities,
    monthlyMarketing: inputs.monthlyMarketing,
    monthlyDepreciation,
    monthlyOperatingCosts,
    monthlyOperatingProfitBeforeTaxAndFinancing: monthlyContribution - monthlyOperatingCosts,
    breakEvenOrdersPerOpenDay,
  }
}

export const financialModelDefinitions = [
  ['Revenue', 'Orders/day × open days/month × weighted average selling price; weighted price is derived from editable cup/packaged mix.'],
  ['Ingredient cost', 'Monthly orders × mix-weighted ingredient cost per order.'],
  ['Packaging cost', 'Monthly orders × mix-weighted packaging cost per order.'],
  ['Waste allowance', 'Ingredient cost × editable waste percentage; provisional proxy, replace with measured waste cost.'],
  ['Gross profit / margin', 'Revenue − ingredient cost − packaging cost − waste allowance; gross profit ÷ revenue.'],
  ['Payment fees', 'Revenue × editable payment processor fee rate.'],
  ['Channel fees', 'Revenue × online order share × channel fee rate; simplified blended assumption.'],
  ['Contribution / margin', 'Gross profit − payment fees − channel fees; contribution ÷ revenue.'],
  ['Monthly operating costs', 'Labour + rent + utilities + marketing + straight-line equipment depreciation (equipment capex ÷ useful-life months).'],
  ['Operating profit', 'Contribution − listed monthly operating costs; before tax, financing and unmodelled costs.'],
  ['Break-even orders per open day', 'Monthly operating costs ÷ contribution per order ÷ open days/month. No result when contribution/order or days are not positive.'],
  ['Annualized revenue', 'Monthly revenue × 12; assumes the same monthly run-rate for 12 months and is not a seasonality-adjusted annual forecast.'],
  ['Customer acquisition cost (CAC)', 'Attributable incremental acquisition spend ÷ defined new first-time customers in the same campaign/cohort window; not calculated because KATHAI acquisition-spend and attributable customer data are not recorded.'],
]

export const financialModelLimitations = [
  'Every starting value in the three scenarios is an editable modelling assumption, not a sourced quote, validated customer price, actual cost, forecast, result or investment commitment.',
  'The ₹450–₹600 in-venue cup price range is carried forward from the existing Customer Journey planning frame; it remains unvalidated and must be tested. Packaged price, volumes, mix and all cost/fee inputs are planning assumptions.',
  'Packaged chocolate is an illustrative placeholder SKU, not a confirmed product. Self-heating, customisation, partnerships and merchandise revenue are excluded.',
  'The simplified model omits GST/tax treatment, discounts/refunds, chargebacks, delivery subsidy, variable labour, founder compensation, startup/pre-opening costs, working capital, inventory financing, rent deposits, financing costs, tax, maintenance, utilities variability and cash timing. Validate actual accounting treatment before decisions.',
  'Annualized revenue multiplies one month by twelve; it is not a seasonal or multi-year projection. The model does not calculate valuation, investor returns, runway or required funding.',
  'Customer acquisition cost is not calculated: there are no attributable KATHAI campaign costs or defined new-customer observations in the evidence record.',
]

export type MarketScenarioInputs = {
  relevantAnnualOccasions: number | null
  serviceableAnnualOccasions: number | null
  achievableAnnualOrders: number | null
  averageSpendPerOccasion: number | null
  obtainableNetPrice: number | null
  sourceRegister: string
  geography: string
  referenceDate: string
  method: string
}

export const emptyMarketScenario = (): MarketScenarioInputs => ({
  relevantAnnualOccasions: null,
  serviceableAnnualOccasions: null,
  achievableAnnualOrders: null,
  averageSpendPerOccasion: null,
  obtainableNetPrice: null,
  sourceRegister: '',
  geography: '',
  referenceDate: '',
  method: '',
})

export function calculateMarketSizing(inputs: MarketScenarioInputs) {
  const hasProvenance = Boolean(inputs.sourceRegister.trim() && inputs.geography.trim() && inputs.referenceDate.trim() && inputs.method.trim())
  const tam = hasProvenance && inputs.relevantAnnualOccasions !== null && inputs.averageSpendPerOccasion !== null && inputs.relevantAnnualOccasions >= 0 && inputs.averageSpendPerOccasion >= 0
    ? inputs.relevantAnnualOccasions * inputs.averageSpendPerOccasion
    : null
  const sam = hasProvenance && inputs.serviceableAnnualOccasions !== null && inputs.averageSpendPerOccasion !== null && inputs.serviceableAnnualOccasions >= 0 && inputs.averageSpendPerOccasion >= 0
    ? inputs.serviceableAnnualOccasions * inputs.averageSpendPerOccasion
    : null
  const som = hasProvenance && inputs.achievableAnnualOrders !== null && inputs.obtainableNetPrice !== null && inputs.achievableAnnualOrders >= 0 && inputs.obtainableNetPrice >= 0
    ? inputs.achievableAnnualOrders * inputs.obtainableNetPrice
    : null
  return { tam, sam, som }
}

export const validationPlan = [
  { gate: 'Customer desirability', question: 'Do target customers understand and choose the proposed experience?', test: 'Moderated concept/menu tests followed by observed choices in a real service context.', passEvidence: 'Predefined recruitment, task completion, choice/conversion denominator, reasons for decline and contrary evidence; do not use stated enthusiasm alone.', failureAction: 'Revise the proposition/experience and repeat with a defined sample; do not proceed on favorable quotes only.', findingIds: ['ajji-cacao-tasting', 'ajji-creator-practices', 'google-gen-z-discovery'] as ResearchFindingId[] },
  { gate: 'Price and value', question: 'Does realized price and serving experience justify the choice against alternatives?', test: 'Randomized or sequential transparent price/portion tests; record real conversion and refunds where feasible.', passEvidence: 'Offer, price, serving size, exposure, eligible visits, conversion and unit contribution with confidence/uncertainty.', failureAction: 'Adjust offer/price/cost structure or stop the price thesis; competitor listed prices are comparison inputs only.', findingIds: ['market-serving-value', 'market-single-serve-gifting', 'market-percentage-formats'] as ResearchFindingId[] },
  { gate: 'Repeat behavior', question: 'Do customers return after actual consumption?', test: 'Cohort repeat analysis with an adult-consent path for identity-linked reporting and anonymous aggregate sales alongside it.', passEvidence: 'Cohort definition, observation window, eligible count, repeat count, channel and confidence bounds.', failureAction: 'Investigate product consistency, occasion and value; do not substitute stated intent for purchase.', findingIds: ['google-gen-z-discovery', 'pocket-money-food-behaviour'] as ResearchFindingId[] },
  { gate: 'Product and operations', question: 'Can the product be served consistently, safely and with measured waste?', test: 'Recipe/portion SOP, ingredient traceability, allergen verification, temperature/quality checks and stock/waste logs.', passEvidence: 'Approved specifications, audit samples, supplier documentation, reconciliation and qualified safety review.', failureAction: 'Pause launch or product claim until issues are resolved; no safety/certification claim from this plan.', findingIds: ['ajji-cacao-tasting', 'market-preparation-and-packaging'] as ResearchFindingId[] },
  { gate: 'Unit economics', question: 'Can observed sales cover sourced product and operating costs?', test: 'Replace scenario assumptions with supplier quotes, payroll/rent/POS data, actual mix and reconciled sales.', passEvidence: 'Documented contribution by product/channel and measured fixed costs over a representative operating period.', failureAction: 'Rework price, recipe, channel or cost base; do not infer profitability from scenario output.', findingIds: ['market-serving-value', 'market-preparation-and-packaging'] as ResearchFindingId[] },
  { gate: 'Repeatability and channel scale', question: 'Can the experience and economics be repeated beyond the first operating context?', test: 'Replicate SOP and measured pilot across site/channel only after first-site gates pass.', passEvidence: 'Comparable customer, quality, contribution, supply and service metrics with location/channel definitions.', failureAction: 'Do not expand until differences and operating dependencies are explained.', findingIds: ['market-single-serve-gifting', 'market-indian-cacao'] as ResearchFindingId[] },
]

export const channelDecisionPaths = [
  { name: 'Single owned café / pop-up pilot', fit: 'Direct learning on service, preparation and occasion.', dependencies: ['Site and permits', 'Staff and training', 'Verified supply and SOP', 'POS and measurement'], economicsToMeasure: ['Footfall to conversion', 'Average order value', 'Contribution per order', 'Rent/labour coverage', 'Waste and repeat'], gate: 'Proceed only after demand, product safety/quality, price and unit economics gates have measured evidence.' },
  { name: 'Additional owned locations', fit: 'More direct experience and local market coverage.', dependencies: ['Repeatable first unit', 'Location-specific site/lease economics', 'Management capacity', 'Supply reliability'], economicsToMeasure: ['Incremental capex', 'Ramp-up and utilization', 'Site contribution', 'Cannibalization', 'Central overhead'], gate: 'Compare site-level cohort and contribution evidence; do not assume one location represents Bengaluru.' },
  { name: 'Retail / packaged product', fit: 'Take-home/gifting availability beyond café occasions.', dependencies: ['Shelf-life/packaging validation', 'Manufacturing and quality systems', 'Retail margin/returns terms', 'Distribution and storage'], economicsToMeasure: ['Net wholesale price', 'Manufacturing/packaging cost', 'Trade margin', 'Expiry/returns', 'Sell-through'], gate: 'Require shelf-life, packaging, regulatory, retailer and positive contribution evidence.' },
  { name: 'Digital / delivery', fit: 'Convenient ordering where product quality survives delivery.', dependencies: ['Platform fees and terms', 'Packaging and travel quality tests', 'Reliable availability/inventory', 'Customer support'], economicsToMeasure: ['Net realized AOV', 'Commission/payment/delivery cost', 'Packaging and refunds', 'Incremental versus cannibalized orders'], gate: 'Test delivered quality and channel contribution after fees before scaling.' },
  { name: 'Partnerships / gifting', fit: 'Occasion-based access through organizations, venues or gifting.', dependencies: ['Qualified partner and audience fit', 'Service/fulfillment scope', 'Commercial terms', 'Brand and data responsibilities'], economicsToMeasure: ['Acquisition/commission', 'Batch cost and capacity', 'Payment timing', 'Repeat/renewal'], gate: 'Treat as opportunity, not revenue, until signed terms and pilot-level economics exist.' },
]

export const investmentCaseEvidence = [
  { claim: 'Craft and sensory discovery can be designed as a differentiated experience.', proofNeeded: 'Own recipes, sensory panels, blind/competitive tests and repeatable service specifications; current Ajji House observations are a competitor benchmark only.', findingIds: ['ajji-cacao-tasting', 'market-subko-position'] as ResearchFindingId[] },
  { claim: 'A premium price can be justified by the product and occasion.', proofNeeded: 'Real purchase behavior, price/portion test, contribution and alternatives considered; competitor prices are dated benchmarks, not willingness-to-pay evidence.', findingIds: ['market-serving-value', 'market-single-serve-gifting'] as ResearchFindingId[] },
  { claim: 'Indian cacao/provenance can support a credible proposition.', proofNeeded: 'Supplier and batch traceability, sourcing economics, quality consistency and consumer comprehension; competitors’ origin claims are not KATHAI capabilities.', findingIds: ['market-indian-cacao', 'market-subko-position'] as ResearchFindingId[] },
  { claim: 'Digital discovery and data can improve decisions.', proofNeeded: 'A privacy-minimized implementation, data completeness, measurable improvement over a manual baseline and adult consent where profiles are used.', findingIds: ['market-preparation-and-packaging'] as ResearchFindingId[] },
  { claim: 'The model can scale across products, channels or locations.', proofNeeded: 'Observed repeat, sourced unit economics, quality/supply repeatability, channel contribution and tested capacity; currently unproven.', findingIds: ['market-single-serve-gifting', 'market-preparation-and-packaging'] as ResearchFindingId[] },
]
