export type StageName = 'Awareness' | 'Consideration' | 'Purchase and Experience' | 'Retention' | 'Advocacy'

export type AudienceId = 'general' | 'gen-z' | 'gen-alpha'

export type EvidenceStatus = 'Validated' | 'Working hypothesis' | 'To be validated' | 'Research question'

export type Segment = {
  id: AudienceId
  label: string
  tagline: string
  detail: string
  focus: string[]
  priorities: string[]
  audienceNote: string
}

export type JourneyDetail = {
  stage: StageName
  objective: string
  actions: string[]
  questions: string[]
  touchpoints: string[]
  emotions: string[]
  negativeEmotion: string
  painPoints: string[]
  barriers: string[]
  opportunities: string[]
  response: string
  successMeasures: string[]
  researchQuestions: string[]
  evidenceStatus: EvidenceStatus
}

export type Persona = {
  id: string
  segment: AudienceId
  name: string
  priority: 'Lead' | 'Lead · Gen Z weighted' | 'Secondary' | 'Exploratory' | 'Working hypothesis'
  needState: string
  recruitmentLens: string
  primaryContext: string
  launchFit: string
  profile: string
  jobToBeDone: string
  needs: string[]
  motivations: string[]
  challenges: string[]
  expectations: string[]
  alternatives: string[]
  occasions: string[]
  statement: string
  implications: string[]
  stageFocus: Partial<Record<StageName, string>>
  questionsToValidate: string[]
  evidenceStatus: EvidenceStatus
}

export type Touchpoint = {
  category: string
  name: string
  audience: string
  stage: StageName
  need: string
  minimumExperienceStandard: string
  commonFailure: string
  response: string
  evidenceStatus: EvidenceStatus
}

export type EmotionalPoint = {
  moment: string
  desiredEmotion: string
  negativeEmotion: string
  friction: string
  cause: string
  response: string
}

export type Metric = {
  category: string
  metric: string
  description: string
  evidenceStatus: EvidenceStatus
}

export type GenAlphaJourney = {
  id: 'young-consumer' | 'parent-guardian'
  title: string
  subtitle: string
  decisionRole: string
  priorities: string[]
  stages: {
    name: StageName
    goal: string
    actions: string[]
    questions: string[]
    kathaiResponse: string
  }[]
}

export type BlueprintStep = {
  step: string
  customerInteraction: string
  visibleService: string
  backstageCapability: string
  responsibleTeam: string
  failurePrevention: string
  measurement: string
}

export const segments: Segment[] = [
  {
    id: 'general',
    label: 'General Premium Audience',
    tagline: 'Premium taste, comfort and thoughtful rituals',
    detail:
      'The core premium audience responds to crafted flavour, calm ambience, repeatable rituals and human service. This segment prioritizes consistency, gifting, comfort and meaningful conversation.',
    focus: ['Premium taste', 'Craftsmanship', 'Comfort', 'Evening rituals', 'Gifting'],
    priorities: ['Consistency', 'Ambience', 'Repeat visits', 'Thoughtful service'],
    audienceNote:
      'This audience is not price-driven only; they respond to sensory quality, comfort and trusted brand reassurance.',
  },
  {
    id: 'gen-z',
    label: 'Gen Z',
    tagline: 'Social discovery with authenticity and self-expression',
    detail:
      'Gen Z adds strategic weight through discovery, creator influence, visual culture, personalization and community. The experience must feel authentic and culturally relevant without stereotype.',
    focus: ['Social discovery', 'Creator influence', 'Authenticity', 'Group experiences', 'Visual sharing'],
    priorities: ['Community', 'Personalization', 'Cultural relevance', 'Advocacy'],
    audienceNote:
      'Gen Z should be treated as a nuanced audience with diverse tastes and spending patterns rather than a single pattern.',
  },
  {
    id: 'gen-alpha',
    label: 'Gen Alpha',
    tagline: 'Age-appropriate delight with family trust',
    detail:
      'Gen Alpha must be represented as a distinct segment with a dual journey: the young consumer and the parent or guardian decision-maker. The experience must feel exciting, safe and transparent.',
    focus: ['Visual discovery', 'Curiosity', 'Flavor involvement', 'Storytelling', 'Family trust'],
    priorities: ['Ingredients', 'Safety', 'Age suitability', 'Repeat permission'],
    audienceNote:
      'This audience requires responsible design, careful pricing language and clear reassurance around ingredients and value.',
  },
]

export const journeyStages: StageName[] = [
  'Awareness',
  'Consideration',
  'Purchase and Experience',
  'Retention',
  'Advocacy',
]

export const segmentJourney: Record<AudienceId, JourneyDetail[]> = {
  general: [
    {
      stage: 'Awareness',
      objective: 'Discover a premium hot chocolate ritual that feels special and worth repeating.',
      actions: ['Explore premium café culture', 'Follow recommendations', 'See social and editorial inspiration'],
      questions: ['Is this a refined, sensory experience?', 'Does it feel worth a premium spend?'],
      touchpoints: ['Instagram and creator content', 'Editorial mentions', 'Word of mouth'],
      emotions: ['Curiosity', 'Warm anticipation'],
      negativeEmotion: 'Skepticism about value or superficiality',
      painPoints: ['Generic premium positioning', 'Unclear differentiation'],
      barriers: ['Low trust in new brands', 'Price sensitivity'],
      opportunities: ['Story-led positioning', 'Premium sensory cues'],
      response: 'Introduce a calm, evocative brand story built around taste, comfort and ritual.',
      successMeasures: ['Branded search lift', 'Page engagement', 'Visit intent'],
      researchQuestions: ['Which discovery channels are most credible for premium beverage discovery in Bengaluru?'],
      evidenceStatus: 'Working hypothesis',
    },
    {
      stage: 'Consideration',
      objective: 'Decide whether the experience feels premium, trustworthy and worth the visit.',
      actions: ['Compare menu and ambience', 'Read reviews', 'Check reservation and service cues'],
      questions: ['Does it match my expectations for premium quality?', 'Is the setup comfortable and polished?'],
      touchpoints: ['Menu pages', 'Reviews', 'Reservation flow'],
      emotions: ['Confidence', 'Quiet excitement'],
      negativeEmotion: 'Uncertainty around delivery and value',
      painPoints: ['Unclear menu value', 'Inconsistent review quality'],
      barriers: ['Price-value ambiguity', 'No clear proof of craftsmanship'],
      opportunities: ['Transparent taste story', 'Clear luxury without extravagance'],
      response: 'Show ingredient quality, sensory cues and a premium but not intimidating experience framework.',
      successMeasures: ['Menu engagement', 'Reservation intent', 'Perceived-value score'],
      researchQuestions: ['What signals best communicate premium value without feeling inaccessible?'],
      evidenceStatus: 'To be validated',
    },
    {
      stage: 'Purchase and Experience',
      objective: 'Enjoy a polished ritual that feels memorable and worth the spend.',
      actions: ['Reserve or walk in', 'Order the signature experience', 'Receive service and presentation'],
      questions: ['Will the drink live up to the premium promise?', 'Does the service create trust and ease?'],
      touchpoints: ['Arrival', 'Service', 'Preparation', 'Consumption'],
      emotions: ['Comfort', 'Delight', 'Satisfaction'],
      negativeEmotion: 'Worry about overpromising or slow service',
      painPoints: ['Long waits', 'Inconsistent execution', 'Poor presentation'],
      barriers: ['Service mismatch', 'Taste not meeting expectation'],
      opportunities: ['Guided choice', 'Structured theatre', 'High-touch service'],
      response: 'Create a warm, guided experience with clear sensory cues, service confidence and memorable presentation.',
      successMeasures: ['Arrival-to-order conversion', 'Average spend', 'Sensory satisfaction'],
      researchQuestions: ['Which service moments create premium trust and repeat purchase intent?'],
      evidenceStatus: 'Working hypothesis',
    },
    {
      stage: 'Retention',
      objective: 'Return because the experience feels grounded, reassuring and worth repeating.',
      actions: ['Return for a familiar ritual', 'Try another variant', 'Share with friends or gifting occasions'],
      questions: ['Will it remain consistent on repeat visits?', 'Does it fit my social or weekend routine?'],
      touchpoints: ['Follow-up messages', 'Visit history', 'Return offers'],
      emotions: ['Comfort', 'Attachment'],
      negativeEmotion: 'Fear of inconsistency or losing the magic',
      painPoints: ['No reason to return', 'Lack of ritual structure'],
      barriers: ['Weak retention loop', 'Low after-visit engagement'],
      opportunities: ['Repeat rituals', 'Occasion-based moments'],
      response: 'Build subtle, value-adding follow-ups that reinforce comfort and anticipation without pressure.',
      successMeasures: ['30-day revisit', '60-day revisit', 'Second-visit satisfaction'],
      researchQuestions: ['What keeps premium beverage rituals sticky beyond the first visit?'],
      evidenceStatus: 'To be validated',
    },
    {
      stage: 'Advocacy',
      objective: 'Recommend a brand that feels thoughtful, elevated and emotionally resonant.',
      actions: ['Share with friends', 'Recommend a gift occasion', 'Leave reviews'],
      questions: ['Did the experience become part of my ritual?', 'Would I happily repeat and recommend it?'],
      touchpoints: ['Referrals', 'Reviews', 'UGC'],
      emotions: ['Pride', 'Connection'],
      negativeEmotion: 'Low confidence in recommending a brand that disappoints',
      painPoints: ['No emotional memory', 'Unclear advocacy trigger'],
      barriers: ['No visible community or social proof'],
      opportunities: ['Gift occasions', 'Story-led advocacy'],
      response: 'Nurture advocacy through memorable rituals, shareable moments and authentic storytelling.',
      successMeasures: ['Recommendation intent', 'Referral visits', 'Review rate'],
      researchQuestions: ['What moments are most likely to convert premium beverage delight into advocacy?'],
      evidenceStatus: 'Research question',
    },
  ],
  'gen-z': [
    {
      stage: 'Awareness',
      objective: 'Find a place that feels culturally relevant, photogenic and worth talking about.',
      actions: ['Scroll creator content', 'Save references', 'Compare options with friends'],
      questions: ['Does this feel authentic and current?', 'Will it create a good story to share?'],
      touchpoints: ['Creators', 'Social feeds', 'Peer recommendations'],
      emotions: ['Curiosity', 'Connection'],
      negativeEmotion: 'Concern about trend-chasing or inauthenticity',
      painPoints: ['Generic trends', 'Overly polished but hollow branding'],
      barriers: ['Low trust in brands without identity', 'Over-saturation'],
      opportunities: ['Creator-led storytelling', 'Visual identity with depth'],
      response: 'Command attention with authentic, culturally aware storytelling and distinct sensory cues.',
      successMeasures: ['Qualified reach', 'Branded search', 'Review engagement'],
      researchQuestions: ['Which creator and social moments feel credible and not forced for premium indulgence?'],
      evidenceStatus: 'Working hypothesis',
    },
    {
      stage: 'Consideration',
      objective: 'Assess whether the experience fits social plans and self-expression.',
      actions: ['Review menu', 'Check social proof', 'Look for group suitability'],
      questions: ['Does this match my vibe and budget?', 'Will it be good in a group setting?'],
      touchpoints: ['Menu previews', 'Instagram stories', 'Group chat recommendations'],
      emotions: ['Interest', 'Selection energy'],
      negativeEmotion: 'FOMO or decision fatigue',
      painPoints: ['Lack of social proof', 'Unclear value for group spending'],
      barriers: ['A vague experience proposition', 'Limited customization cues'],
      opportunities: ['Shareable moments', 'Community cues'],
      response: 'Make the experience feel social, expressive and easy to discuss with friends.',
      successMeasures: ['Menu engagement', 'Reservation intent', 'Perceived-value score'],
      researchQuestions: ['What makes a premium experience feel worth group social sharing?'],
      evidenceStatus: 'To be validated',
    },
    {
      stage: 'Purchase and Experience',
      objective: 'Enjoy a memorable, shareable ritual without friction or over-complication.',
      actions: ['Arrive with friends', 'Choose a signature item', 'Capture a moment and enjoy'],
      questions: ['Will the experience feel special enough to post?', 'Is the space comfortable and social?'],
      touchpoints: ['Physical arrival', 'Human service', 'Product experience'],
      emotions: ['Excitement', 'Belonging'],
      negativeEmotion: 'Feeling underwhelmed or too much effort',
      painPoints: ['Slow setups', 'No real sense of ritual'],
      barriers: ['Ambience that doesn’t fit the group mood', 'Service friction'],
      opportunities: ['Signature presentation', 'Playful but polished service'],
      response: 'Design a premium but not sterile environment where the experience feels both social and memorable.',
      successMeasures: ['Wait time', 'Service satisfaction', 'Average spend'],
      researchQuestions: ['What is the right balance between social theatre and calm service for this audience?'],
      evidenceStatus: 'Working hypothesis',
    },
    {
      stage: 'Retention',
      objective: 'Return because the ritual feels personal, shareable and rewarding.',
      actions: ['Revisit with a new group', 'Try seasonal options', 'Bring friends'],
      questions: ['Does it remain relevant after the first thrill?', 'Can I make this part of my routine?'],
      touchpoints: ['Loyalty touchpoints', 'Social reminders', 'Follow-up community'],
      emotions: ['Affection', 'Routine comfort'],
      negativeEmotion: 'Concern that the novelty fades',
      painPoints: ['No continuity', 'Low relevance beyond the hype cycle'],
      barriers: ['Inconsistent interactions', 'No community feel'],
      opportunities: ['Seasonal storytelling', 'Creator collaborations'],
      response: 'Create a retention loop that respects individuality while building a credible community feeling.',
      successMeasures: ['30-day revisit', 'Second-visit satisfaction', 'Return reason'],
      researchQuestions: ['Which repeated interactions keep Gen Z engaged without feeling transactional?'],
      evidenceStatus: 'To be validated',
    },
    {
      stage: 'Advocacy',
      objective: 'Turn delight into organic advocacy without forcing a performative brand narrative.',
      actions: ['Post or recommend', 'Bring others', 'Create repeat community moments'],
      questions: ['Will I proudly bring people here?', 'Does it feel authentic and worth sharing?'],
      touchpoints: ['UGC', 'Social content', 'Referral behaviour'],
      emotions: ['Pride', 'Cultural alignment'],
      negativeEmotion: 'Awkwardness about inauthentic amplification',
      painPoints: ['Brand noise', 'Pay-to-play feel'],
      barriers: ['Low authenticity signal', 'No easy community proof'],
      opportunities: ['Community-led advocacy', 'Creator collaborations'],
      response: 'Focus on genuine, experience-led advocacy rather than forced shouty campaigns.',
      successMeasures: ['User-generated content', 'Word-of-mouth acquisition', 'Referral visits'],
      researchQuestions: ['Which advocacy triggers feel authentic versus forced in premium social discovery?'],
      evidenceStatus: 'Research question',
    },
  ],
  'gen-alpha': [
    {
      stage: 'Awareness',
      objective: 'Be curious about a flavour story that looks fun, safe and exciting to try.',
      actions: ['Notice a visual concept', 'Ask a parent or guardian', 'Explore the menu with curiosity'],
      questions: ['Is this fun and safe?', 'Would a parent trust it?'],
      touchpoints: ['Visual discovery', 'Family conversations', 'In-store signboards'],
      emotions: ['Wonder', 'Curiosity'],
      negativeEmotion: 'Uncertainty about safety or appropriateness',
      painPoints: ['Confusing language', 'Unclear suitability information'],
      barriers: ['Parent concern', 'No story clarity'],
      opportunities: ['Story-led discovery', 'Clear age-appropriate cues'],
      response: 'Present the experience as playful, safe and easy for families to understand.',
      successMeasures: ['Category understanding', 'Visit intent', 'Brand trust signal'],
      researchQuestions: ['Which discovery cues feel trustworthy and age-appropriate for both child and parent?'],
      evidenceStatus: 'Working hypothesis',
    },
    {
      stage: 'Consideration',
      objective: 'Compare ingredients, safety and value before deciding whether to purchase.',
      actions: ['Read ingredients and allergens', 'Review portion size', 'Ask about sugar and nutrition'],
      questions: ['Is it suitable for my child?', 'Does the value match the price and portion?', 'How safe is the product?'],
      touchpoints: ['Menu cards', 'Parent review', 'Staff guidance'],
      emotions: ['Caution', 'Assessing trust'],
      negativeEmotion: 'Worry about hidden sugar or safety risks',
      painPoints: ['Unclear ingredient transparency', 'Pressure-based upselling'],
      barriers: ['Trust gap', 'Price-value uncertainty'],
      opportunities: ['Clear ingredient communication', 'Family-friendly standards'],
      response: 'Avoid dark patterns: use transparent language, age-suitable guidance and family-friendly service.',
      successMeasures: ['Perceived-value score', 'Reservation intent', 'Trust signal'],
      researchQuestions: ['What information is most influential for family purchase confidence?'],
      evidenceStatus: 'To be validated',
    },
    {
      stage: 'Purchase and Experience',
      objective: 'Have a positive, safe and enjoyable experience with clear guidance and shared excitement.',
      actions: ['Visit with family', 'Discuss menu choices', 'Watch preparation and participate'],
      questions: ['Is the experience fun and safe?', 'Will the child understand what is happening?'],
      touchpoints: ['Reservation', 'Arrival', 'Self-heating demonstration', 'Product consumption'],
      emotions: ['Delight', 'Shared trust'],
      negativeEmotion: 'Anxiety about heating, handling or cleanliness',
      painPoints: ['Unclear activation', 'Safety uncertainty'],
      barriers: ['Technical complexity', 'Pressure or confusion'],
      opportunities: ['Product theatre', 'Clear guided preparation'],
      response: 'Present self-heating and preparation as optional, clear, safe and supported by staff rather than as a gimmick.',
      successMeasures: ['Reservation completion', 'Wait time', 'Sensory satisfaction'],
      researchQuestions: ['How can family comfort and product safety be reinforced without creating anxiety?'],
      evidenceStatus: 'Working hypothesis',
    },
    {
      stage: 'Retention',
      objective: 'Earn permission to return by delivering a positive, repeatable and age-appropriate experience.',
      actions: ['Request a revisit', 'Choose a familiar favourite', 'Review the next visit with family'],
      questions: ['Was this worthy of another visit?', 'Will the next visit feel as safe and fun?'],
      touchpoints: ['Follow-up', 'Reservation planning', 'Family reassurance'],
      emotions: ['Security', 'Anticipation'],
      negativeEmotion: 'Concern that it becomes too intense or too sugary',
      painPoints: ['No return permission', 'Low clarity on suitability'],
      barriers: ['Trust erosion', 'Overly aggressive recommendation'],
      opportunities: ['Clear next-step guidance', 'Responsible repeat framing'],
      response: 'Build repeat permission through safe, reassuring and age-appropriate consistency.',
      successMeasures: ['90-day revisit', 'Return reason', 'Second-visit satisfaction'],
      researchQuestions: ['Which rituals or communication patterns support safe and trusted repeat visits for families?'],
      evidenceStatus: 'To be validated',
    },
    {
      stage: 'Advocacy',
      objective: 'Recommend a brand that families trust and that feels exciting without being manipulative.',
      actions: ['Share with friends', 'Recommend to family', 'Celebration gifting'],
      questions: ['Would I be comfortable recommending this to other parents?', 'Did the experience feel responsible and worth repeating?'],
      touchpoints: ['Word-of-mouth', 'Family recommendations', 'Celebration occasions'],
      emotions: ['Trust', 'Confidence'],
      negativeEmotion: 'Worry about overstating a child-safe claim',
      painPoints: ['No clear family trust story', 'No proof of safety standards'],
      barriers: ['Suspicion of gimmicks', 'Pressure-based messaging'],
      opportunities: ['Responsible family advocacy', 'Trust-first proof'],
      response: 'Use gentle, transparent advocacy rooted in trust, safety and shared delight.',
      successMeasures: ['Word-of-mouth acquisition', 'Gifted experiences', 'Recommendation intent'],
      researchQuestions: ['What evidence and communication modes best support family advocacy without pressure?'],
      evidenceStatus: 'Research question',
    },
  ],
}

export const personas: Persona[] = [
  {
    id: 'premium-experience-explorer',
    segment: 'general',
    name: 'The Premium Experience Explorer',
    priority: 'Lead',
    needState: 'Craft and sensory discovery',
    recruitmentLens: '25–40 is a useful recruitment band, not a definition.',
    primaryContext: 'A deliberate tasting, café visit, cultural outing or discovery with a companion.',
    launchFit: 'Very high; a potential early adopter and social-proof source.',
    profile: 'A need-state profile for someone seeking a distinctive, story-rich beverage experience. The same person may move between profiles by occasion.',
    jobToBeDone: 'Discover a distinctive, story-rich beverage experience.',
    needs: ['Sensory quality', 'Originality', 'Credible craft', 'Social currency'],
    motivations: ['Explore new tastes', 'Recognize craftsmanship', 'Share a discovery'],
    challenges: ['Paying a premium for an ordinary drink', 'Experience feeling performative'],
    expectations: ['Balanced flavour and texture', 'Thoughtful service', 'Credible ingredients', 'Memorable presentation'],
    alternatives: ['Specialty café', 'Premium dessert', 'Matcha experience', 'Cocktail or mocktail', 'Artisan chocolate'],
    occasions: ['Deliberate tasting', 'Café visit', 'Cultural outing', 'Discovery with a companion'],
    statement: 'Show me why this is worth remembering.',
    implications: ['Lead with cocoa quality, texture, origin and craft', 'Make service theatre elegant and informative', 'Use tastings and credible reviews to reduce sensory uncertainty'],
    stageFocus: {
      Awareness: 'Craft, originality and credible critic or creator discovery.',
      Consideration: 'Cocoa, technique, reviews and ambience.',
      'Purchase and Experience': 'Guided discovery and an exceptional cup.',
      Retention: 'New stories without quality drift.',
      Advocacy: 'Taste authority and discovery pride.',
    },
    questionsToValidate: ['Does the complete experience justify ₹450–₹600?', 'Which quality cue is most credible: taste, ingredient origin, service, atmosphere or exclusivity?'],
    evidenceStatus: 'Working hypothesis',
  },
  {
    id: 'urban-pause-seeker',
    segment: 'general',
    name: 'The Urban Pause Seeker',
    priority: 'Lead',
    needState: 'Comfort and decompression',
    recruitmentLens: 'Working adults across age groups.',
    primaryContext: 'After work, weekend reset, reflective break or conversation.',
    launchFit: 'High; supports repeat visits and comfort positioning.',
    profile: 'A need-state profile for someone seeking a restorative, dependable pause. The same person may move between profiles by occasion.',
    jobToBeDone: 'Create a restorative break or evening ritual.',
    needs: ['Comfort', 'Decompression', 'Consistency', 'An intentional place'],
    motivations: ['Unwind after work', 'Reset at the weekend', 'Make conversation feel unhurried'],
    challenges: ['Long waits', 'Overcomplicated ritual', 'Overly sweet product', 'Hard-to-repeat occasion'],
    expectations: ['Reliable quality', 'Calm service', 'Easy choice', 'A reason to return'],
    alternatives: ['Coffee', 'Tea', 'Dessert', 'Streaming at home', 'No treat'],
    occasions: ['After work', 'Weekend reset', 'Reflective break', 'Conversation'],
    statement: 'Make the pause feel meaningful, not like another task.',
    implications: ['Build a recognizable evening or weekend ritual', 'Protect calmness and service consistency', 'Create return reasons through seasonal stories without losing the signature cup'],
    stageFocus: {
      Awareness: 'Comfort and an intentional break.',
      Consideration: 'Ease, calmness and consistency.',
      'Purchase and Experience': 'A low-friction restorative ritual.',
      Retention: 'Habit, recognition and reliable quality.',
      Advocacy: 'A recommendation for a meaningful pause.',
    },
    questionsToValidate: ['What recent occasion required a comforting break?', 'What would make the customer return within 30 days?'],
    evidenceStatus: 'Working hypothesis',
  },
  {
    id: 'trusted-ritual-seeker',
    segment: 'general',
    name: 'The Trusted Ritual Seeker',
    priority: 'Lead',
    needState: 'Comfort, consistency and inclusive service',
    recruitmentLens: 'Working professionals in Bengaluru, especially a transgender woman seeking a premium, comfortable place to pause and return to.',
    primaryContext: 'An after-work pause, weekend café visit or unhurried conversation with a partner or friend.',
    launchFit: 'High for repeat premium visits where hospitality and consistency matter.',
    profile: 'An illustrative Bengaluru working-professional profile for Nandita, a 36-year-old transgender woman, who wants a dependable premium experience and respectful service. This is a working hypothesis to validate through research.',
    jobToBeDone: 'Find a dependable premium experience where she can relax, enjoy a well-crafted drink and receive respectful service.',
    needs: ['Consistent flavour', 'Balanced sweetness', 'Comfortable surroundings', 'Welcoming service'],
    motivations: ['Build a favourite place and repeatable ritual', 'Enjoy craftsmanship and thoughtful guidance', 'Spend on an experience that delivers reliability and care'],
    challenges: ['Uncertainty about how staff will treat her at an unfamiliar venue', 'Inclusive messaging that is not reflected in everyday service', 'Paying a premium for inconsistent taste or an uncomfortable visit'],
    expectations: ['Comfortable, respectful service', 'A premium drink that is reliably excellent', 'Thoughtful hospitality and remembering of preferences'],
    alternatives: ['A familiar specialty café', 'A premium dessert venue', 'Hot chocolate prepared at home'],
    occasions: ['After work', 'Weekend café visit', 'Unhurried conversation with a partner or friend'],
    statement: 'I want a lovely cup and somewhere I can settle in and enjoy my evening.',
    implications: ['Build trust through calm, respectful service and inclusive communication', 'Pair a signature premium cup with dependable hospitality', 'Use memory and repeat rituals to deepen loyalty'],
    stageFocus: {
      Awareness: 'A venue that feels comfortable, premium and respectful before she commits.',
      Consideration: 'Menu confidence, reviews, service cues and reassurance about comfort.',
      'Purchase and Experience': 'A premium cup and a welcoming environment that feels effortless to enjoy.',
      Retention: 'Consistency in both drink and service, plus remembered preferences.',
      Advocacy: 'A reliable recommendation based on comfort, craft and care.',
    },
    questionsToValidate: ['What makes a new venue feel comfortable enough to try?', 'What would make Kathai become a regular choice?', 'Which elements justify the premium price?'],
    evidenceStatus: 'Working hypothesis',
  },
  {
    id: 'young-independent-experience-collector',
    segment: 'gen-z',
    name: 'The Young Independent Experience Collector',
    priority: 'Lead · Gen Z weighted',
    needState: 'Cultural discovery and self-expression',
    recruitmentLens: 'Gen Z weighted; recruit by behavior and spending autonomy.',
    primaryContext: 'Social discovery, outings with friends, date or friendship moments, creative community events.',
    launchFit: 'High if access and perceived value are credible.',
    profile: 'A need-state profile for a young independent consumer who values exploration and expression. It is not a claim that all Gen Z customers behave alike.',
    jobToBeDone: 'Express taste, discover culture and share an experience.',
    needs: ['Exploration', 'Identity', 'Aesthetics', 'Authenticity', 'Personalization', 'Shareability'],
    motivations: ['Explore culture', 'Express individual taste', 'Share discoveries with friends'],
    challenges: ['Premium price without experience depth', 'Forced trendiness', 'An inaccessible tone'],
    expectations: ['Visually and culturally distinctive experience', 'Transparent value', 'Choice without complexity'],
    alternatives: ['Specialty beverages', 'Themed cafés', 'Boba or matcha', 'Dessert outings', 'Events'],
    occasions: ['Social discovery', 'Outing with friends', 'Date or friendship moment', 'Creative community event'],
    statement: 'Give me something real, expressive and worth sharing.',
    implications: ['Use culturally relevant creators and communities, not generic youth slang', 'Make the experience easy to understand, photograph and retell', 'Provide personalization while keeping the journey simple'],
    stageFocus: {
      Awareness: 'Culture, identity, creators and friends.',
      Consideration: 'Authenticity, access, price-value and shareability.',
      'Purchase and Experience': 'An expressive, personal and socially fluid experience.',
      Retention: 'Events, collaborations and community.',
      Advocacy: 'User-generated content, invitations and group return.',
    },
    questionsToValidate: ['Will the experience feel worth choosing over another outing?', 'Would the customer choose Kathai over another outing at the displayed total price?'],
    evidenceStatus: 'Working hypothesis',
  },
  {
    id: 'creative-community-connector',
    segment: 'gen-z',
    name: 'The Creative Community Connector',
    priority: 'Lead · Gen Z weighted',
    needState: 'Expressive social discovery with genuine inclusion',
    recruitmentLens: 'Bengaluru design students and freelance creatives; Alex, 22, is an illustrative transgender man profile, not a researched customer.',
    primaryContext: 'Meeting friends, attending a creative event or discovering a new flavour during a weekend outing.',
    launchFit: 'High if pricing, inclusion and collaboration feel authentic and not tokenistic.',
    profile: 'An illustrative Bengaluru design-student profile for Alex, a 22-year-old transgender man, who wants an expressive and inclusive outing with friends. This is a working hypothesis to validate through research.',
    jobToBeDone: 'Find an expressive, enjoyable experience he can explore with friends, with genuine inclusion and clear value.',
    needs: ['Distinctive flavours', 'Simple personalisation', 'Options within his outing budget', 'A welcoming group setting'],
    motivations: ['Discover new tastes through trusted friends and creators', 'Connect over shared creative interests', 'Support brands whose collaborations and behaviour match their messaging'],
    challenges: ['Attractive presentation that fails to deliver on taste', 'Tokenistic representation or invitations focused only on his transgender identity', 'Unclear group costs or pressure to post about the experience'],
    expectations: ['Meaningful, authentic inclusion', 'Transparent group pricing', 'An experience he can enjoy with friends without pressure'],
    alternatives: ['Boba or matcha outings', 'Independent cafés', 'Dessert spots', 'Creative community events'],
    occasions: ['Meeting friends', 'Creative event', 'Weekend outing'],
    statement: 'I’d bring my friends for something interesting, as long as it feels genuine and worth what we’re spending.',
    implications: ['Offer accessible tasting choices and transparent group pricing', 'Use collaborations with transgender creatives based on their work and interests, not identity alone', 'Make photography and sharing optional and respectful'],
    stageFocus: {
      Awareness: 'Friend and creator recommendations that feel authentic and relevant.',
      Consideration: 'Flavour, price and whether the brand’s messaging matches its everyday behaviour.',
      'Purchase and Experience': 'A low-pressure group outing with good value and genuine inclusion.',
      Retention: 'A safe, enjoyable return experience that supports community trust.',
      Advocacy: 'Recommendations grounded in authenticity, not performative representation.',
    },
    questionsToValidate: ['Would Alex choose Kathai for a small group outing, given the total price?', 'Does the experience feel authentic and inclusive rather than tokenistic?', 'What makes a collaboration with transgender creatives feel credible and valued?'],
    evidenceStatus: 'Working hypothesis',
  },
  {
    id: 'flavour-craft-enthusiast',
    segment: 'gen-z',
    name: 'The Flavour and Craft Enthusiast',
    priority: 'Lead · Gen Z weighted',
    needState: 'Sensory discovery and credible craftsmanship',
    recruitmentLens: 'Bengaluru young professionals who regularly visit specialty cafés; Meera, 27, is an illustrative profile, not a researched customer.',
    primaryContext: 'Exploring artisan chocolate, specialty beverages and unfamiliar flavour combinations.',
    launchFit: 'Potential fit for guided flavour discovery across KLASSICS and MOOD MELT if product quality supports the premium.',
    profile: 'An illustrative Bengaluru young-professional profile for a regular specialty-café visitor who explores artisan chocolate and unfamiliar flavours. This is a working hypothesis to validate through research.',
    jobToBeDone: 'Find a distinctive drink with credible craftsmanship.',
    needs: ['Quality cocoa', 'Balanced flavours', 'Good texture', 'Ingredient transparency', 'Discovery'],
    motivations: ['Explore unfamiliar flavour combinations', 'Understand the craft and ingredients', 'Find a distinctive sensory experience'],
    challenges: ['Generic taste behind premium branding', 'Flavour descriptions that reveal little'],
    expectations: ['Distinctive, balanced taste and texture', 'Specific flavour descriptions', 'Transparent product details'],
    alternatives: ['Artisan chocolate', 'Specialty café beverages', 'Familiar premium hot chocolate'],
    occasions: ['Specialty café visit', 'Artisan chocolate discovery', 'Trying an unfamiliar flavour'],
    statement: 'Tell me what makes the flavour different—and let the cup prove it.',
    implications: ['Guide flavour discovery across KLASSICS and MOOD MELT', 'Describe flavour and craft specifically rather than relying on premium language', 'Test self-heating against conventionally prepared product quality'],
    stageFocus: {
      Awareness: 'Distinctive flavour and credible craft cues.',
      Consideration: 'Cocoa quality, ingredient details and informative flavour descriptions.',
      'Purchase and Experience': 'A cup whose sensory quality proves its flavour promise.',
      Retention: 'New flavour discoveries without compromising quality.',
      Advocacy: 'Specific, credible recommendations about taste and craft.',
    },
    questionsToValidate: ['Which sensory qualities justify a premium?', 'Does self-heating preserve the expected flavour and texture?', 'Which product details help her distinguish one flavour from another?'],
    evidenceStatus: 'Working hypothesis',
  },
  {
    id: 'on-the-go-comfort-seeker',
    segment: 'gen-z',
    name: 'The On the Go Comfort Seeker',
    priority: 'Exploratory',
    needState: 'Portable warmth away from usual facilities',
    recruitmentLens: 'Bengaluru recent graduates who take weekend trips; Dev, 23, is an illustrative profile, not a researched customer.',
    primaryContext: 'Road trips and short getaways with friends, away from usual drink-preparation facilities.',
    launchFit: 'Exploratory, occasion-specific fit; compare practical value with carrying a flask or buying a drink en route.',
    profile: 'An illustrative Bengaluru recent-graduate profile for someone who enjoys weekend trips and wants a good hot drink away from usual preparation facilities. This is a working hypothesis to validate through research.',
    jobToBeDone: 'Enjoy a good hot drink away from usual preparation facilities.',
    needs: ['Portable warmth', 'Reliable heating', 'Simple use'],
    motivations: ['Enjoy a hot drink on a trip', 'Carry practical comfort', 'Prepare a drink without usual facilities'],
    challenges: ['Bulky packaging', 'Uncertain heating time', 'Difficult handling', 'Disposal'],
    expectations: ['Compact, manageable packaging', 'Predictable heating time', 'Safe, simple handling', 'Clear disposal guidance'],
    alternatives: ['Carrying a flask', 'Buying a drink en route'],
    occasions: ['Road trip', 'Weekend getaway', 'Short trip with friends'],
    statement: 'If I’m carrying it on a trip, it needs to be easy to use and worth the space.',
    implications: ['Position artisan self-heating hot chocolate for settings where its mechanism has practical value', 'Clearly communicate size, heating time, handling and disposal', 'Compare the full experience with a flask and buying en route'],
    stageFocus: {
      Awareness: 'A useful hot drink for a trip away from preparation facilities.',
      Consideration: 'Space, weight, heating time, handling, disposal and alternatives.',
      'Purchase and Experience': 'Reliable heating and simple use while travelling.',
      Retention: 'Repurchase only if the travel experience proves practical.',
      Advocacy: 'A practical recommendation based on carrying and using it on a trip.',
    },
    questionsToValidate: ['Would he carry and repurchase it after experiencing its weight, heating time and waste?', 'How does it compare with carrying a flask or buying a drink en route?', 'Does the heating mechanism provide enough practical value for the space it takes?'],
    evidenceStatus: 'Working hypothesis',
  },
  {
    id: 'gift-shared-moment-buyer',
    segment: 'general',
    name: 'The Gift and Shared-Moment Buyer',
    priority: 'Secondary',
    needState: 'Thoughtful gifting and togetherness',
    recruitmentLens: 'Recruit buyers and recipients separately; they may be different people.',
    primaryContext: 'Birthday, celebration, festive gift, hosting or shared invitation.',
    launchFit: 'High for acquisition and seasonal value.',
    profile: 'A need-state profile for someone who wants to express care through a memorable shared experience.',
    jobToBeDone: 'Express care through a memorable shared experience.',
    needs: ['Care', 'Thoughtfulness', 'Surprise', 'Recipient delight'],
    motivations: ['Create a shared memory', 'Give something distinctive', 'Make an occasion feel considered'],
    challenges: ['Gimmicky presentation', 'Unclear recipient preferences', 'Damaged delivery', 'Hard redemption'],
    expectations: ['Elegant invitation', 'Clear experience description', 'Flexible booking', 'Recipient-friendly choices'],
    alternatives: ['Chocolate box', 'Hamper', 'Dessert', 'Experience voucher', 'Dining gift'],
    occasions: ['Birthday', 'Celebration', 'Festive gift', 'Hosting', 'Shared invitation'],
    statement: 'Help me give a story, not just an object.',
    implications: ['Separate purchaser and recipient journeys', 'Design around invitation, booking and shared experience', 'Measure recipient enjoyment independently of presentation'],
    stageFocus: {
      Awareness: 'Occasion and thoughtfulness.',
      Consideration: 'Recipient fit and redemption clarity.',
      'Purchase and Experience': 'An elegant shared moment.',
      Retention: 'Seasonal or event calendar.',
      Advocacy: 'Recipient delight and gifting confidence.',
    },
    questionsToValidate: ['Does the recipient value the drink after the presentation?', 'What makes the buyer confident the recipient will use and enjoy it?'],
    evidenceStatus: 'Working hypothesis',
  },
  {
    id: 'traveller-self-heating-utility-seeker',
    segment: 'general',
    name: 'The Traveller / Self-Heating Utility Seeker',
    priority: 'Exploratory',
    needState: 'Portable warmth away from facilities',
    recruitmentLens: 'Separate research stream; recruit by observed travel and outdoor behavior.',
    primaryContext: 'Road trip, outdoor setting, rest stop or location without ordinary heating.',
    launchFit: 'Conditional; may conflict with venue-led premium positioning. Treat as a separate proposition test.',
    profile: 'A provisional utility profile for someone seeking a quality hot drink away from ordinary facilities; not a core launch persona.',
    jobToBeDone: 'Access a quality hot drink away from ordinary facilities.',
    needs: ['Portable warmth', 'Quality', 'Simple and safe use'],
    motivations: ['Enjoy a hot drink in a remote context', 'Carry useful comfort while travelling'],
    challenges: ['Weight', 'Waste', 'Handling', 'Restrictions', 'Heating reliability', 'Mismatch with a premium venue promise'],
    expectations: ['Safe and reliable performance', 'Portability', 'Clear instructions'],
    alternatives: ['Flask', 'Roadside beverage', 'Stove', 'Cold drink', 'Going without'],
    occasions: ['Road trip', 'Outdoor setting', 'Rest stop', 'Remote location without facilities'],
    statement: 'Make it genuinely useful, not merely novel.',
    implications: ['Treat portability and heating utility as a separate proposition test', 'Validate safety, handling, disposal and venue or transport suitability', 'Compare conventionally prepared and self-heated drinks'],
    stageFocus: {
      Awareness: 'A real need without access to facilities.',
      Consideration: 'Safety, portability and utility.',
      'Purchase and Experience': 'Reliable heating and simple handling.',
      Retention: 'Repeat utility in proven contexts.',
      Advocacy: 'A practical recommendation.',
    },
    questionsToValidate: ['When was a hot drink wanted without facilities?', 'What weight, waiting time, disposal and risk are acceptable?', 'Is this a separate portable line rather than the launch proposition?'],
    evidenceStatus: 'Working hypothesis',
  },
  {
    id: 'young-gen-alpha-participant',
    segment: 'gen-alpha',
    name: 'The Curious Young Participant',
    priority: 'Working hypothesis',
    needState: 'Guided story and flavour discovery',
    recruitmentLens: 'Age suitability and ethical research protocol to be defined with guardians before participation.',
    primaryContext: 'Family visit or other age-appropriate guided experience.',
    launchFit: 'A separate young-consumer perspective within a guardian-led family decision.',
    profile: 'A provisional role in the dual journey. Curiosity and participation should be explored responsibly with guardian consent.',
    jobToBeDone: 'Explore a flavour story and participate safely in a family experience.',
    needs: ['Visual discovery', 'Curiosity', 'Flavor involvement', 'Interactive participation', 'Story-driven experience'],
    motivations: ['Explore flavours', 'Take part in a guided moment', 'Share a positive family memory'],
    challenges: ['Unclear instructions', 'Heat or handling uncertainty', 'Not feeling included'],
    expectations: ['Simple age-appropriate explanations', 'Safe adult-supported participation', 'A welcoming experience'],
    alternatives: ['Family cafés', 'Dessert outings', 'Other family activities'],
    occasions: ['Family visit', 'Weekend outing', 'Celebration'],
    statement: '',
    implications: ['Offer clear story-led discovery', 'Keep participation optional and supervised', 'Never direct purchase pressure or advocacy prompts at children'],
    stageFocus: {
      Awareness: 'Visual discovery and curiosity.',
      Consideration: 'Flavor involvement and a clear story.',
      'Purchase and Experience': 'Interactive participation with family and staff support.',
      Retention: 'Desire to revisit, subject to guardian permission.',
      Advocacy: 'Organic sharing only; no child-directed content requests.',
    },
    questionsToValidate: ['Which visual and flavour cues engage children without pressure?', 'What participation feels safe and age-appropriate to both child and guardian?'],
    evidenceStatus: 'Working hypothesis',
  },
  {
    id: 'parent-guardian-decision-maker',
    segment: 'gen-alpha',
    name: 'The Parent / Guardian Decision-Maker',
    priority: 'Working hypothesis',
    needState: 'Family trust and suitability',
    recruitmentLens: 'Guardian-led research; include the decision-maker and separate purchase authority from child influence.',
    primaryContext: 'Family visit, weekend outing, celebration or other guardian-approved occasion.',
    launchFit: 'The purchase-authority journey connected to the young consumer experience.',
    profile: 'A provisional decision-maker profile focused on family trust, product suitability, transparent information and value.',
    jobToBeDone: 'Choose an age-suitable experience with confidence and retain authority over purchase and repeat permission.',
    needs: ['Ingredients and allergens', 'Nutrition and sugar information', 'Portion size', 'Safety', 'Age suitability', 'Price-value clarity'],
    motivations: ['Support a positive family experience', 'Make an informed treat choice', 'Trust the service and product'],
    challenges: ['Incomplete ingredient information', 'Unclear allergens', 'Safety uncertainty', 'Pressure-based persuasion'],
    expectations: ['Verified, accessible information', 'Transparent pricing', 'Respectful staff guidance', 'Adult purchase control'],
    alternatives: ['Family cafés', 'Dessert venues', 'Other family experiences'],
    occasions: ['Family visit', 'Weekend outing', 'Celebration'],
    statement: '',
    implications: ['Make the adult journey cover reservation, payment and purchase permission', 'Clearly communicate ingredients, allergens, portions and suitability', 'Earn repeat permission without pressure'],
    stageFocus: {
      Awareness: 'Recognize a trustworthy family experience.',
      Consideration: 'Assess ingredients, allergens, nutrition, portion, safety, suitability and value.',
      'Purchase and Experience': 'Retain adult decision authority while supporting safe participation.',
      Retention: 'Grant repeat permission only if the experience merits it.',
      Advocacy: 'Recommend only when trust and experience justify it.',
    },
    questionsToValidate: ['What information supports an informed family purchase?', 'How are safety, age suitability, price-value and repeat permission assessed?'],
    evidenceStatus: 'Working hypothesis',
  },
]

export const touchpoints: Touchpoint[] = [
  {
    category: 'Earned discovery',
    name: 'Word-of-mouth and recommendation',
    audience: 'All',
    stage: 'Awareness',
    need: 'Trust and social proof',
    minimumExperienceStandard: 'The story must feel credible and aligned with the experience',
    commonFailure: 'Claims feel generic or over-marketed',
    response: 'Use authentic storytelling and real sensory cues instead of exaggerated claims.',
    evidenceStatus: 'Working hypothesis',
  },
  {
    category: 'Owned digital',
    name: 'Website and menu content',
    audience: 'General Premium Audience',
    stage: 'Consideration',
    need: 'Understand premium value and setting',
    minimumExperienceStandard: 'Clear taste story, pricing context and service cues',
    commonFailure: 'Thin content and unclear quality signals',
    response: 'Use elegant, editorial storytelling to communicate value without discount language.',
    evidenceStatus: 'To be validated',
  },
  {
    category: 'Physical arrival',
    name: 'Arrival and first impression',
    audience: 'All',
    stage: 'Purchase and Experience',
    need: 'Feel comfortable and welcome',
    minimumExperienceStandard: 'Warm greeting, ease of entry and clear service flow',
    commonFailure: 'Cluttered space or confusing flow',
    response: 'Create a calm and tactile visual atmosphere that reinforces premium handling.',
    evidenceStatus: 'Working hypothesis',
  },
  {
    category: 'Human service',
    name: 'Service guidance and menu recommendation',
    audience: 'Gen Alpha',
    stage: 'Purchase and Experience',
    need: 'Trust and suitability assurance',
    minimumExperienceStandard: 'Staff can explain ingredients and safety with calm confidence',
    commonFailure: 'No clear guidance or overbearing sales language',
    response: 'Train team members to explain suitability and value without pressure.',
    evidenceStatus: 'To be validated',
  },
  {
    category: 'Product experience',
    name: 'Preparation and tasting ritual',
    audience: 'All',
    stage: 'Purchase and Experience',
    need: 'Taste quality and sensory delight',
    minimumExperienceStandard: 'Product matches the premium promise and service theatre',
    commonFailure: 'A weak or inconsistent product experience',
    response: 'Keep the ritual centred on flavour, texture, warmth and presentation rather than gimmicks.',
    evidenceStatus: 'Working hypothesis',
  },
  {
    category: 'Post-visit relationship',
    name: 'Follow-up and retention conversation',
    audience: 'All',
    stage: 'Retention',
    need: 'Remember the experience and create reasons to return',
    minimumExperienceStandard: 'Follow-up should feel personal and unforced',
    commonFailure: 'Discount-led or repetitive messaging',
    response: 'Use meaningful, occasion-based contact rather than hurried promotional language.',
    evidenceStatus: 'Research question',
  },
  {
    category: 'Paid discovery',
    name: 'Local creator and cultural collaboration',
    audience: 'Gen Z',
    stage: 'Awareness',
    need: 'Discover new experiences through relevant voices',
    minimumExperienceStandard: 'Paid partnerships are disclosed and aligned with the creator’s real point of view',
    commonFailure: 'A scripted endorsement feels like advertising dressed as a recommendation',
    response: 'Choose collaborators for genuine fit and make the partnership transparent.',
    evidenceStatus: 'To be validated',
  },
  {
    category: 'Owned digital',
    name: 'Reservation and visit planning',
    audience: 'All',
    stage: 'Consideration',
    need: 'Know where to go, when to arrive and what to expect',
    minimumExperienceStandard: 'Clear hours, access details, pricing context and easy contact route',
    commonFailure: 'Missing or outdated practical information creates avoidable doubt',
    response: 'Keep visit information current and make questions easy to answer.',
    evidenceStatus: 'Working hypothesis',
  },
  {
    category: 'Human service',
    name: 'Welcome, pacing and farewell',
    audience: 'General Premium Audience',
    stage: 'Purchase and Experience',
    need: 'Feel welcomed without being rushed or over-served',
    minimumExperienceStandard: 'Attentive, calm service with clear ownership of delays or questions',
    commonFailure: 'A warm brand promise is undermined by inconsistent or inattentive service',
    response: 'Set a service rhythm and empower staff to resolve small friction quickly.',
    evidenceStatus: 'To be validated',
  },
  {
    category: 'Community and advocacy',
    name: 'Guest-led sharing and recommendations',
    audience: 'Gen Z',
    stage: 'Advocacy',
    need: 'Share a moment that feels personally meaningful',
    minimumExperienceStandard: 'Sharing is invited, never required; guest privacy is respected',
    commonFailure: 'Reward pressure turns an authentic moment into a transaction',
    response: 'Give guests a memorable story and let sharing remain their choice.',
    evidenceStatus: 'Working hypothesis',
  },
  {
    category: 'Product experience',
    name: 'Ingredient, allergen and portion information',
    audience: 'Gen Alpha',
    stage: 'Consideration',
    need: 'Make an informed family choice',
    minimumExperienceStandard: 'Staff and menu information are consistent, accessible and transparent',
    commonFailure: 'Unclear or incomplete answers erode family trust',
    response: 'Publish verified ingredient and allergen information and train staff to say when they need to check.',
    evidenceStatus: 'To be validated',
  },
]

export const genAlphaJourneys: GenAlphaJourney[] = [
  {
    id: 'young-consumer',
    title: 'Young consumer',
    subtitle: 'Curiosity, participation and a flavour story',
    decisionRole: 'Influences interest and flavour choice; does not hold purchase authority.',
    priorities: ['Visual discovery', 'Curiosity', 'Flavor involvement', 'Interactive participation', 'Family and peer influence'],
    stages: [
      { name: 'Awareness', goal: 'Notice a welcoming, story-led experience.', actions: ['Notice visual cues', 'Ask a trusted adult what it is'], questions: ['What might this taste like?', 'Can I be part of the experience?'], kathaiResponse: 'Use age-appropriate visual storytelling and invite questions without creating urgency.' },
      { name: 'Consideration', goal: 'Explore flavours and understand what participation involves.', actions: ['Look at flavour descriptions', 'Share preferences with a guardian'], questions: ['Which flavour sounds good?', 'What will happen when it is served?'], kathaiResponse: 'Offer clear flavour descriptions and simple, supervised choices.' },
      { name: 'Purchase and Experience', goal: 'Enjoy a warm, safe experience with a meaningful role.', actions: ['Join a guided choice', 'Watch or participate in preparation when appropriate'], questions: ['Can I help?', 'Is this hot or safe to touch?'], kathaiResponse: 'Let trained staff guide participation; keep handling and heat safety explicit.' },
      { name: 'Retention', goal: 'Remember a positive ritual and express interest in returning.', actions: ['Recall a favourite flavour', 'Ask family about a future visit'], questions: ['Can we come back?', 'Could I try another flavour?'], kathaiResponse: 'Make repeat visits a family choice; keep suggestions gentle and age-suitable.' },
      { name: 'Advocacy', goal: 'Share excitement with family or peers naturally.', actions: ['Tell others about the experience', 'Share a memory or drawing'], questions: ['Would my friend enjoy this too?'], kathaiResponse: 'Never ask children to create content or advocate; let sharing remain organic.' },
    ],
  },
  {
    id: 'parent-guardian',
    title: 'Parent or guardian',
    subtitle: 'Trust, suitability and purchase authority',
    decisionRole: 'Evaluates suitability, authorizes the purchase, reservation and payment, and grants repeat permission.',
    priorities: ['Ingredients and allergens', 'Nutrition and sugar', 'Portion size', 'Safety and age suitability', 'Price-value assessment'],
    stages: [
      { name: 'Awareness', goal: 'Recognize a family-appropriate experience worth considering.', actions: ['Notice the offer', 'Check whether the setting welcomes families'], questions: ['Is this appropriate for our family?', 'Is the positioning responsible?'], kathaiResponse: 'Use family-inclusive information; do not target children with urgency or pressure.' },
      { name: 'Consideration', goal: 'Assess ingredients, allergens, portion, safety and value.', actions: ['Review verified menu information', 'Ask staff about ingredients or suitability'], questions: ['What is in it?', 'Are allergens clearly identified?', 'Is the portion suitable?'], kathaiResponse: 'Provide verified, accessible information and a clear route to ask questions.' },
      { name: 'Purchase and Experience', goal: 'Make an informed purchase and feel confident during the visit.', actions: ['Decide and pay', 'Guide participation', 'Observe service and handling'], questions: ['Is the serving temperature safe?', 'Does the experience justify the price?'], kathaiResponse: 'Keep decision-making with the adult; explain heat, service and any optional mechanism.' },
      { name: 'Retention', goal: 'Decide whether a repeat visit is appropriate and worthwhile.', actions: ['Reflect on the experience', 'Consider a future occasion'], questions: ['Was the child comfortable?', 'Would I permit another visit?'], kathaiResponse: 'Earn repeat permission through consistency and transparency, not pressure.' },
      { name: 'Advocacy', goal: 'Recommend only if trust and experience merit it.', actions: ['Share a recommendation with other families', 'Consider gifting'], questions: ['Would I confidently recommend this to another guardian?'], kathaiResponse: 'Support honest reviews and word of mouth; avoid implying safety claims without evidence.' },
    ],
  },
]

export const experienceBlueprint: BlueprintStep[] = [
  { step: 'Discovery', customerInteraction: 'Sees a story, creator, collaboration or recommendation.', visibleService: 'Clear, truthful brand cues with an invitation to explore.', backstageCapability: 'Content governance, creator fit checks and disclosure review.', responsibleTeam: 'Brand and partnerships', failurePrevention: 'Review claims and partnership disclosures before publishing.', measurement: 'Qualified reach; branded search; category understanding.' },
  { step: 'Reservation', customerInteraction: 'Checks availability, access details and price expectations.', visibleService: 'Simple reservation and responsive pre-visit information.', backstageCapability: 'Accurate hours, capacity and contact information.', responsibleTeam: 'Operations and digital', failurePrevention: 'Confirm booking details and keep listings updated.', measurement: 'Reservation intent; completion; cancellation reasons.' },
  { step: 'Arrival', customerInteraction: 'Finds the venue and arrives with expectations.', visibleService: 'Warm greeting, clear wayfinding and comfortable first impression.', backstageCapability: 'Arrival checklist, accessible route and queue awareness.', responsibleTeam: 'Front of house', failurePrevention: 'Opening checks and clear ownership of delays.', measurement: 'Arrival-to-order conversion; arrival feedback.' },
  { step: 'Guided choice', customerInteraction: 'Explores the menu and asks questions.', visibleService: 'Thoughtful recommendations with ingredient and price clarity.', backstageCapability: 'Verified menu, allergen details and staff training.', responsibleTeam: 'Service and product', failurePrevention: 'Use current menu information; escalate unknown ingredient questions.', measurement: 'Menu engagement; order confidence; perceived value.' },
  { step: 'Preparation', customerInteraction: 'Waits, watches or participates in the ritual.', visibleService: 'Careful preparation with clear pacing and presentation.', backstageCapability: 'Recipe standards, equipment checks and service timing.', responsibleTeam: 'Kitchen and service', failurePrevention: 'Opening calibration, recipe cards and exception process.', measurement: 'Wait time; consistency checks; preparation issues.' },
  { step: 'Optional heating demonstration', customerInteraction: 'Chooses whether to observe or participate in a self-heating layer.', visibleService: 'Clear consent, staff guidance and visible safety reassurance.', backstageCapability: 'Technical validation, safe handling, disposal and regulatory review.', responsibleTeam: 'Product, safety and trained service staff', failurePrevention: 'Do not launch until reliability, instructions and safety are validated; offer a non-heating alternative.', measurement: 'Activation success; incident/near-miss log; confidence feedback.' },
  { step: 'Consumption', customerInteraction: 'Tastes, talks and experiences the product.', visibleService: 'Comfortable pacing and attentive, non-intrusive service.', backstageCapability: 'Quality control, portion consistency and feedback recovery.', responsibleTeam: 'Product and front of house', failurePrevention: 'Taste checks and clear recovery standards.', measurement: 'Sensory satisfaction; service satisfaction; perceived value.' },
  { step: 'Payment', customerInteraction: 'Settles the bill and assesses the value received.', visibleService: 'Accurate, calm payment with transparent itemization.', backstageCapability: 'Reliable POS and bill accuracy process.', responsibleTeam: 'Front of house and finance', failurePrevention: 'Check order-to-bill reconciliation and resolve questions respectfully.', measurement: 'Average spend; payment friction; value score.' },
  { step: 'Farewell', customerInteraction: 'Leaves with a final impression.', visibleService: 'Genuine thanks, easy exit and no forced upsell.', backstageCapability: 'Service handoff and incident capture.', responsibleTeam: 'Front of house', failurePrevention: 'End-of-visit cues and prompt issue escalation.', measurement: 'Departure sentiment; immediate feedback.' },
  { step: 'Follow-up and return', customerInteraction: 'Receives a relevant note or decides to revisit.', visibleService: 'Permission-based, useful communication and a consistent next visit.', backstageCapability: 'Consent, preference and visit data handling.', responsibleTeam: 'Guest relationship team', failurePrevention: 'Respect opt-outs and avoid repetitive discount-led messaging.', measurement: '30/60/90-day revisit; return reason; churn reason.' },
  { step: 'Advocacy', customerInteraction: 'Chooses to recommend, review, refer or gift.', visibleService: 'An authentic experience worthy of voluntary sharing.', backstageCapability: 'Review response process and privacy-aware UGC handling.', responsibleTeam: 'Brand and guest experience', failurePrevention: 'No coerced reviews or child-directed content prompts.', measurement: 'Recommendation intent; review rate; referral visits; UGC.' },
]

export const emotionalJourney: EmotionalPoint[] = [
  {
    moment: 'Initial discovery',
    desiredEmotion: 'Curiosity',
    negativeEmotion: 'Low trust',
    friction: 'Hard to distinguish from generic beverage brands',
    cause: 'Weak differentiation or unclear story',
    response: 'Establish an intentional premium narrative and sensory visual language.',
  },
  {
    moment: 'Price exposure',
    desiredEmotion: 'Confidence',
    negativeEmotion: 'Price anxiety',
    friction: 'Price does not feel justified',
    cause: 'No proof of craftsmanship or value framing',
    response: 'Position ₹450–₹600 as an experience-led premium spend with clear quality cues.',
  },
  {
    moment: 'Planning',
    desiredEmotion: 'Ease',
    negativeEmotion: 'Decision fatigue',
    friction: 'Too much effort to understand the offer',
    cause: 'Weak menu and trust signals',
    response: 'Provide clear, elegant planning information and reservation support.',
  },
  {
    moment: 'Arrival',
    desiredEmotion: 'Warm welcome',
    negativeEmotion: 'Uncertainty',
    friction: 'Arrival does not match the expectation created by the brand',
    cause: 'Mismatch between story and physical experience',
    response: 'Design polished, calm physical signage, service cues and environment.',
  },
  {
    moment: 'Menu choice',
    desiredEmotion: 'Confidence',
    negativeEmotion: 'Overwhelm',
    friction: 'Too many options without guidance',
    cause: 'Limited guidance and unclear cues',
    response: 'Offer thoughtful menu guidance and easy discovery moments.',
  },
  {
    moment: 'Preparation or heating',
    desiredEmotion: 'Fascination',
    negativeEmotion: 'Anxiety',
    friction: 'Self-heating is unclear or feels risky',
    cause: 'Poor activation clarity or unproven reliability',
    response: 'Keep it optional, explained clearly and supported by staff for confidence.',
  },
  {
    moment: 'First sip',
    desiredEmotion: 'Delight',
    negativeEmotion: 'Letdown',
    friction: 'Drink fails to match the premium promise',
    cause: 'Taste and presentation do not align with story',
    response: 'Keep the centre of the experience taste, texture and service quality.',
  },
  {
    moment: 'Payment',
    desiredEmotion: 'Satisfaction',
    negativeEmotion: 'Doubt',
    friction: 'Charge feels hard to justify',
    cause: 'No value logic communicated',
    response: 'Use quality cues, sensory framing and service trust to justify the premium spend.',
  },
  {
    moment: 'Follow-up',
    desiredEmotion: 'Anticipation',
    negativeEmotion: 'Indifference',
    friction: 'No reason to return',
    cause: 'Retention loop lacks emotional value',
    response: 'Create a thoughtful follow-up rhythm based on meaning, not promotion.',
  },
  {
    moment: 'Return visit',
    desiredEmotion: 'Comfort',
    negativeEmotion: 'Inconsistency fear',
    friction: 'The first experience was special but not repeatable',
    cause: 'Weak ritual and delivery consistency',
    response: 'Engineer the experience for repeat comfort and brand trust.',
  },
  {
    moment: 'Advocacy',
    desiredEmotion: 'Pride',
    negativeEmotion: 'Reluctance',
    friction: 'Not enough emotional memory to recommend',
    cause: 'No clear memory anchor or community proof',
    response: 'Create shareable, heartfelt moments that invite real advocacy.',
  },
]

export const opportunityMatrix = [
  { label: 'Story-led value creation', text: 'Position taste and ritual as the reason for premium spend.' },
  { label: 'Calm premium design', text: 'Use warmth, editorial layouts and sensory cues without clutter.' },
  { label: 'Guided discovery', text: 'Make menu and service choices easy and confidence-building.' },
  { label: 'Responsible family trust', text: 'Design age-suitable and transparent messages for Gen Alpha.' },
  { label: 'Creator-credible social proof', text: 'Encourage authentic discovery with cultural relevance and community trust.' },
  { label: 'Repeat rituals', text: 'Turn the first visit into a meaningful returnable experience.' },
]

export const metrics: Metric[] = [
  ...['Qualified reach', 'Branded search', 'Category understanding', 'Visit intent'].map((metric) => ({
    category: 'Awareness',
    metric,
    description: 'Recommended measure. Define the audience, source and baseline before launch.',
    evidenceStatus: 'To be validated' as EvidenceStatus,
  })),
  ...['Menu engagement', 'Review engagement', 'Reservation intent', 'Perceived-value score'].map((metric) => ({
    category: 'Consideration',
    metric,
    description: 'Recommended measure. Define the audience, source and baseline before launch.',
    evidenceStatus: 'To be validated' as EvidenceStatus,
  })),
  ...['Reservation completion', 'Arrival-to-order conversion', 'Wait time', 'Average spend', 'Sensory satisfaction', 'Service satisfaction', 'Perceived value', 'Return intent'].map((metric) => ({
    category: 'Purchase and Experience',
    metric,
    description: 'Recommended measure. Define the audience, source and baseline before launch.',
    evidenceStatus: 'To be validated' as EvidenceStatus,
  })),
  ...['30-day revisit', '60-day revisit', '90-day revisit', 'Second-visit satisfaction', 'Return reason', 'Churn reason'].map((metric) => ({
    category: 'Retention',
    metric,
    description: 'Recommended measure. Define the audience, source and baseline before launch.',
    evidenceStatus: 'To be validated' as EvidenceStatus,
  })),
  ...['Recommendation intent', 'Review rate', 'Referral visits', 'Gifted experiences', 'User-generated content', 'Word-of-mouth acquisition'].map((metric) => ({
    category: 'Advocacy',
    metric,
    description: 'Recommended measure. Define the audience, source and baseline before launch.',
    evidenceStatus: 'To be validated' as EvidenceStatus,
  })),
]

export const researchPlan = [
  {
    title: 'Discovery credibility',
    objective: 'Understand which channels best establish trust and premium value for the launch audience.',
    status: 'To be validated',
    suggestedMethod: 'Short discovery interviews and a channel diary with prospective premium experience-seekers.',
    capture: 'Discovery trigger, trust cue, expectations formed, and what participants understood Kathai to offer.',
    decision: 'Prioritize channels and story cues that demonstrate authentic interest; do not treat reach alone as demand.',
  },
  {
    title: 'Menu and value confidence',
    objective: 'Test whether price is experienced as premium ritual rather than as a convenience cost.',
    status: 'Working hypothesis',
    suggestedMethod: 'Concept and menu walkthroughs followed by an observed tasting prototype.',
    capture: 'Taste language, expected service, value rationale, portion expectations, and price comprehension.',
    decision: 'Refine menu, portion and experience proof before establishing price or service targets.',
  },
  {
    title: 'Family and safety trust',
    objective: 'Validate age-appropriate communication and responsibility standards for Gen Alpha.',
    status: 'To be validated',
    suggestedMethod: 'Guardian-led concept review, with age-appropriate child participation only where suitable and consented.',
    capture: 'Ingredient and allergen questions, nutrition and sugar concerns, portion needs, safety expectations, purchase authority.',
    decision: 'Resolve transparency and safety gaps before exposing families to any self-heating concept.',
  },
  {
    title: 'Retention and advocacy',
    objective: 'Understand what encourages repeat visits and genuine recommendation behaviour.',
    status: 'Research question',
    suggestedMethod: 'Post-visit interviews followed by consent-based revisit tracking.',
    capture: 'Return reason, second-visit experience, advocacy trigger, churn reason and preferred follow-up frequency.',
    decision: 'Build repeat and sharing moments from observed guest value; avoid forced advocacy and discount dependence.',
  },
]

export const sources = [
  'Kathai Complete Customer Journey Map (primary source)',
  'User-supplied Artisan Self Heating Hot Chocolate Customer Personas 1.docx (provisional persona framework, as cited in the primary source)',
  'Bengaluru launch positioning and experience-led premium concept',
  'Customer journey mapping framework and qualitative stage structure',
  'Brand strategy direction: premium taste, ritual, comfort and human connection',
  'Responsible Gen Alpha framework with family-first trust and transparency',
]

export const contextualLinks = [
  {
    label: 'FSSAI',
    title: 'FSSAI product standards and regulations',
    description: 'Official starting point for food-safety standards and regulatory resources. Confirm applicable requirements with qualified counsel before launch.',
    href: 'https://fssai.gov.in/standards/product-standards',
  },
  {
    label: 'Bengaluru field scan',
    title: 'Explore cafés and experience venues on Maps',
    description: 'A live map search for desk research and venue planning—not a market-size or customer-behaviour source.',
    href: 'https://www.google.com/maps/search/premium+cafes+Bengaluru/',
  },
]

export const researchReferences = [
  {
    reference: '[1]',
    title: 'What Is a Customer Journey Map? Examples & Process',
    publisher: 'Harvard Business School Online',
    href: 'https://online.hbs.edu/blog/post/customer-journey-map',
  },
  {
    reference: '[2]',
    title: 'Mastering the Buying Journey: Key Stages & Examples',
    publisher: 'Harvard Business School Online',
    href: 'https://online.hbs.edu/blog/post/buying-journey',
  },
  {
    reference: '[3]',
    title: 'Espresso Yourself: How Gen Z is Redefining India’s Café Culture',
    publisher: 'IMPACT Magazine',
    href: 'https://www.impactonnet.com/impact-stories/espresso-yourself-how-gen-z-is-redefining-indias-caf-culture-11237.html',
  },
  {
    reference: '[4]',
    title: 'Report Examines Gen Z Preferences and Consumption Behaviors in India',
    publisher: 'Branding in Asia / Publicis Groupe India + Kantar',
    href: 'https://www.brandinginasia.com/report-examines-gen-z-preferences-and-consumption-behaviors-in-india/',
  },
  {
    reference: '[5]',
    title: '6 Bengaluru Cafés That Are Setting the Bar in 2026',
    publisher: 'Homegrown',
    href: 'https://homegrown.co.in/homegrown-explore/on-our-radar-6-bengaluru-cafs-that-are-setting-the-bar-in-2026',
  },
  {
    reference: '[6]',
    title: 'The Indian Consumer at 2030',
    publisher: 'Fireside Ventures',
    href: 'https://firesideventures.com/pages/the-indian-consumer-report',
  },
  {
    reference: '[7]',
    title: 'Project Café India 2025',
    publisher: 'World Coffee Portal',
    href: 'https://www.worldcoffeeportal.com/industry-report/project-cafe-india-2025/',
  },
  {
    reference: '[8]',
    title: 'How Self-Heating Food Packaging Heats Meals Without External Power',
    publisher: 'News-Medical',
    href: 'https://www.news-medical.net/health/How-Self-Heating-Food-Packaging-Heats-Meals-Without-External-Power.aspx',
  },
  {
    reference: '[9]',
    title: 'Product standards and relevant regulations',
    publisher: 'Food Safety and Standards Authority of India',
    href: 'https://fssai.gov.in/standards/product-standards',
  },
  {
    reference: '[10]',
    title: 'Journey map elements: touchpoints, stages, emotions, and what to include',
    publisher: 'Smaply',
    href: 'https://www.smaply.com/blog/journey-map-elements',
  },
]
