import { QuizAnswers } from './quizFlow';

export type TierType = 'Basic' | 'Advanced' | 'Premium';

export interface TierRecommendation {
  tier: TierType;
  score: number;
  reasons: string[];
  benefits: string[];
}

export function calculateTier(answers: QuizAnswers): TierRecommendation {
  let score = 0;
  const reasons: string[] = [];

  // 1. Revenue Per Client (higher revenue = more qualified)
  switch (answers.revenue_per_client) {
    case "$50K+":
      score += 4;
      reasons.push("High-value client relationships.");
      break;
    case "$20K - $50K":
      score += 3;
      reasons.push("Strong client revenue potential.");
      break;
    case "$5K - $20K":
      score += 2;
      reasons.push("Solid client revenue base.");
      break;
    case "Under $5K":
      score += 1;
      break;
  }

  // 2. Client Retention (longer retention = higher LTV)
  switch (answers.client_retention) {
    case "3+ years":
      score += 4;
      reasons.push("Excellent client retention and LTV.");
      break;
    case "1-3 years":
      score += 3;
      reasons.push("Strong client retention.");
      break;
    case "6-12 months":
      score += 2;
      reasons.push("Moderate client retention period.");
      break;
    case "One-time transaction":
      score += 1;
      break;
  }

  // 3. Competitor Awareness (pain point indicator)
  switch (answers.competitor_awareness) {
    case "Frequently":
      score += 3;
      reasons.push("Competitors frequently appearing in AI searches you're not in.");
      break;
    case "Occasionally":
      score += 2;
      reasons.push("Some competitor visibility gaps in AI search.");
      break;
    case "Don't track it":
      score += 1;
      reasons.push("AI search visibility not currently tracked.");
      break;
    case "No, we dominate":
      score += 0;
      break;
  }

  // 4. Buying Intent (urgency indicator)
  switch (answers.buying_intent) {
    case "Extremely interested / we'd want to move immediately":
      score += 4;
      reasons.push("Ready to take immediate action.");
      break;
    case "Very interested":
      score += 3;
      reasons.push("High interest in improving AI visibility.");
      break;
    case "Somewhat interested":
      score += 1;
      break;
    case "Not interested / we're maxed out":
      score += 0;
      break;
  }

  // 5. Brand Reach (scope indicator - local businesses may need different approach)
  switch (answers.brand_reach) {
    case "Worldwide":
    case "Nationwide":
      score += 3;
      reasons.push("Broad market reach requiring comprehensive AI visibility.");
      break;
    case "Regional":
    case "State":
      score += 2;
      reasons.push("Regional presence with growth opportunity.");
      break;
    case "City":
    case "Neighborhood":
      score += 1;
      break;
  }
  
  // Determine tier based on score
  let tier: TierType;
  let benefits: string[] = [];
  
  // Max score: 4+4+3+4+3 = 18
  if (score <= 6) {
    tier = 'Basic';
    benefits = [
      "Directory optimization across major platforms",
      "Reddit presence building",
      "Content network distribution",
      "AI crawl audit",
      "Monthly reporting"
    ];
  } else if (score <= 11) {
    tier = 'Advanced';
    benefits = [
      "Everything in Basic",
      "Schema markup implementation",
      "AI bot crawling enablement",
      "Q&A format conversion",
      "XML tag optimization",
      "Priority support"
    ];
  } else {
    tier = 'Premium';
    benefits = [
      "Everything in Advanced",
      "Weekly AI presence score",
      "Visibility tracking across ChatGPT, Perplexity, Gemini",
      "Email reports",
      "Real-time monitoring dashboard",
      "Dedicated success manager"
    ];
  }
  
  return {
    tier,
    score,
    reasons: reasons.slice(0, 3), // Top 3 reasons
    benefits
  };
}

export function getTierPrice(tier: TierType): number {
  switch (tier) {
    case 'Basic':
      return 199;
    case 'Advanced':
      return 399;
    case 'Premium':
      return 499;
  }
}

export function getTierTagline(tier: TierType): string {
  switch (tier) {
    case 'Basic':
      return 'External Boost';
    case 'Advanced':
      return 'Full Optimization';
    case 'Premium':
      return 'Full Stack';
  }
}

