import assert from 'node:assert/strict'
import test from 'node:test'
import {
  calculateFinancialMetrics,
  calculateMarketSizing,
  financialScenarioErrors,
  initialFinancialScenarios,
  emptyMarketScenario,
  competitorBenchmarks,
  validationPlan,
  goToMarketExperiments,
  investmentCaseEvidence,
} from '../src/data/investorJourney.ts'
import { pageNavigation } from '../src/data/navigation.ts'
import { researchFindings, researchSources } from '../src/data/research.ts'
import {
  dataEntities,
  experienceUseCases,
  intelligenceUseCases,
  operationalMetrics,
  selfHeatingWorkstream,
  technologyArchitecture,
  technologyRoadmap,
} from '../src/data/technologyJourney.ts'

const closeTo = (actual, expected, tolerance = 0.01) => {
  assert.ok(Math.abs(actual - expected) <= tolerance, `Expected ${actual} to be within ${tolerance} of ${expected}`)
}

test('default Conservative, Base and Upside model outputs match independently calculated values', () => {
  const expected = [
    { revenue: 287625, cogs: 116961, contribution: 152256, margin: 52.9355932203, operating: -266077.3333333, breakEven: 68.6891375928 },
    { revenue: 659750, cogs: 208715, contribution: 404852.5, margin: 61.3645320197, operating: -181814.1666667, breakEven: 72.4543712422 },
    { revenue: 1185600, cogs: 310377.6, contribution: 787488, margin: 66.4210526316, operating: 17488, breakEven: 78.2234141981 },
  ]

  assert.deepEqual(initialFinancialScenarios.map(({ label }) => label), ['Conservative', 'Base', 'Upside'])
  initialFinancialScenarios.forEach((scenario, index) => {
    const result = calculateFinancialMetrics(scenario)
    assert.ok(result)
    closeTo(result.monthlyRevenue, expected[index].revenue)
    closeTo(result.monthlyCostOfGoods, expected[index].cogs)
    closeTo(result.monthlyContribution, expected[index].contribution)
    closeTo(result.contributionMarginPercent, expected[index].margin)
    closeTo(result.monthlyOperatingProfitBeforeTaxAndFinancing, expected[index].operating)
    closeTo(result.breakEvenOrdersPerOpenDay, expected[index].breakEven)
  })
})

test('price, volume, variable-cost and fixed-cost edits recalculate independently', () => {
  const scenario = structuredClone(initialFinancialScenarios[0])
  scenario.inputs.cupPrice = 500
  scenario.inputs.ordersPerOpenDay = 30
  scenario.inputs.cupIngredientCost = 155
  scenario.inputs.monthlyRent = 190000

  const result = calculateFinancialMetrics(scenario)
  assert.ok(result)
  closeTo(result.monthlyRevenue, 382200)
  closeTo(result.monthlyCostOfGoods, 148356)
  closeTo(result.monthlyContribution, 209383.2)
  closeTo(result.contributionMarginPercent, 54.7836734694)
  closeTo(result.monthlyOperatingCosts, 428333.3333333)
  closeTo(result.monthlyOperatingProfitBeforeTaxAndFinancing, -218950.1333333)
  closeTo(result.breakEvenOrdersPerOpenDay, 61.3707307941)
})

test('scenario input objects are isolated and invalid values never produce stale metrics', () => {
  const [conservative, base, upside] = structuredClone(initialFinancialScenarios)
  conservative.inputs.cupPrice = 500
  base.inputs.ordersPerOpenDay = 55
  upside.inputs.ordersPerOpenDay = 85

  closeTo(calculateFinancialMetrics(conservative).monthlyRevenue, 318500)
  closeTo(calculateFinancialMetrics(base).monthlyRevenue, 725725)
  closeTo(calculateFinancialMetrics(upside).monthlyRevenue, 1259700)
  assert.equal(conservative.inputs.ordersPerOpenDay, 25)
  assert.equal(base.inputs.cupPrice, 525)
  assert.equal(upside.inputs.cupPrice, 600)

  for (const invalidValue of [-1, Number.NaN, Number.POSITIVE_INFINITY]) {
    const invalid = structuredClone(initialFinancialScenarios[1])
    invalid.inputs.ordersPerOpenDay = invalidValue
    assert.ok(financialScenarioErrors(invalid).some((error) => error.includes('finite, non-negative')))
    assert.equal(calculateFinancialMetrics(invalid), null)
  }

  const zeroVolume = structuredClone(initialFinancialScenarios[1])
  zeroVolume.inputs.ordersPerOpenDay = 0
  assert.deepEqual(financialScenarioErrors(zeroVolume), [])
  assert.equal(calculateFinancialMetrics(zeroVolume).monthlyRevenue, 0)
  assert.equal(calculateFinancialMetrics(zeroVolume).breakEvenOrdersPerOpenDay, null)
})

test('market sizing remains blank and withheld without all provenance fields', () => {
  const inputs = emptyMarketScenario()
  inputs.relevantAnnualOccasions = 1000
  inputs.averageSpendPerOccasion = 500
  assert.deepEqual(calculateMarketSizing(inputs), { tam: null, sam: null, som: null })

  inputs.sourceRegister = 'Test source, page 1'
  inputs.geography = 'Test geography'
  inputs.referenceDate = '2026-10-09'
  inputs.method = 'Test calculation and limitations'
  assert.equal(calculateMarketSizing(inputs).tam, 500000)
})

test('Technology and Investor route mappings and evidence links remain connected', () => {
  assert.deepEqual(pageNavigation.technology.map(({ id }) => id), [
    'overview', 'experience', 'data-intelligence', 'smart-operations', 'roadmap',
  ])
  assert.deepEqual(pageNavigation.investor.map(({ id }) => id), [
    'investment-overview', 'market-opportunity', 'business-model', 'validation-traction', 'growth-scale', 'investment-case',
  ])
  assert.equal(technologyArchitecture.length, 7)
  assert.equal(experienceUseCases.length, 7)
  assert.equal(dataEntities.length, 9)
  assert.equal(intelligenceUseCases.length, 5)
  assert.equal(operationalMetrics.length, 4)
  assert.equal(technologyRoadmap.length, 5)
  assert.equal(selfHeatingWorkstream.length, 5)

  const linkedFindingIds = [
    ...technologyArchitecture.flatMap((component) => component.evidence.findingIds),
    ...competitorBenchmarks.flatMap((item) => item.findingIds),
    ...validationPlan.flatMap((item) => item.findingIds),
    ...goToMarketExperiments.flatMap((item) => item.findingIds),
    ...investmentCaseEvidence.flatMap((item) => item.findingIds),
  ]
  linkedFindingIds.forEach((id) => {
    const finding = researchFindings[id]
    assert.ok(finding, `Missing research finding ${id}`)
    assert.ok(researchSources[finding.sourceId], `Missing source for research finding ${id}`)
  })
})
