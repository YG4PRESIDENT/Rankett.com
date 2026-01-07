export interface QuizQuestion {
  id: string;
  type: 'text' | 'yesno' | 'multi' | 'scale' | 'choice' | 'form';
  question: string;
  subtitle?: string;
  required?: boolean;
  options?: string[] | 'auto';
  min?: number;
  max?: number;
  placeholder?: string;
  multiSelect?: boolean;
}

export const quizFlow: QuizQuestion[] = [
  // Phase 1: Basic Information
  {
    id: 'email',
    type: 'text',
    question: "What's your email?",
    subtitle: "We'll send your personalized audit report here",
    required: true,
    placeholder: 'your@email.com'
  },
  {
    id: 'name',
    type: 'text',
    question: "What's your name?",
    subtitle: "Help us personalize your experience",
    required: true,
    placeholder: 'John Smith'
  },
  
  // Phase 2: Lead Qualification Questions
  {
    id: 'revenue_per_client',
    type: 'choice',
    question: "1. What's your average revenue per client/project?",
    options: ["Under $5K", "$5K - $20K", "$20K - $50K", "$50K+"],
    required: true
  },
  {
    id: 'client_retention',
    type: 'choice',
    question: "2. How long does your average client stay with you?",
    options: ["One-time transaction", "6-12 months", "1-3 years", "3+ years"],
    required: true
  },
  {
    id: 'competitor_awareness',
    type: 'choice',
    question: "3. Have you noticed competitors appearing in AI searches you're not showing up in?",
    options: ["No, we dominate", "Occasionally", "Frequently", "Don't track it"],
    required: true
  },
  {
    id: 'buying_intent',
    type: 'choice',
    question: "4. If we could guarantee you ranked #1 in AI for your service in your city in 90 days, and it brought 20% more qualified leads monthly, how interested would you be?",
    options: ["Not interested / we're maxed out", "Somewhat interested", "Very interested", "Extremely interested / we'd want to move immediately"],
    required: true
  },
  {
    id: 'brand_reach',
    type: 'choice',
    question: "5. What's your brand's reach?",
    options: ["Worldwide", "Nationwide", "Regional", "State", "City", "Neighborhood"],
    required: true
  }
];

export interface QuizAnswers {
  email?: string;
  name?: string;
  revenue_per_client?: string;
  client_retention?: string;
  competitor_awareness?: string;
  buying_intent?: string;
  brand_reach?: string;
  websiteUrl?: string; // From Hero form
}

