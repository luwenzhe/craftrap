export interface User {
  id: string;
  email: string;
  name?: string;
  subscription: {
    type: 'free' | 'pro' | 'enterprise';
    expiresAt?: Date;
    active: boolean;
    stripeCustomerId?: string;
    stripePriceId?: string;
    stripeSubscriptionId?: string;
  };
  usage: {
    dailyGenerations: number;
    lastGenerationDate: Date;
    totalGenerations: number;
  };
  createdAt: Date;
  updatedAt: Date;
}

export interface ImageGenerationRequest {
  prompt: string;
  negativePrompt?: string;
  aspect: 'square' | 'portrait' | 'landscape';
  style?: string;
  color?: string;
  lighting?: string;
  composition?: string;
  userId?: string;
}

export interface ImageGenerationResponse {
  imageUrl: string;
  prompt: string;
  generatedAt: Date;
  success: boolean;
  error?: string;
}

// Function to determine daily generation limits based on subscription type
export function getUserDailyGenerationLimit(subscriptionType: 'free' | 'pro' | 'enterprise'): number {
  switch (subscriptionType) {
    case 'free':
      return 5;
    case 'pro':
      return 100;
    case 'enterprise':
      return Infinity; // Unlimited
    default:
      return 5;
  }
}

// Function to check if user can generate more images today
export function canUserGenerateMoreImages(user: User): boolean {
  // Check if subscription is active
  if (!user.subscription.active) {
    return false;
  }
  
  // For enterprise users, always return true
  if (user.subscription.type === 'enterprise') {
    return true;
  }
  
  // Get the limit based on user subscription
  const limit = getUserDailyGenerationLimit(user.subscription.type);
  
  // Check if it's a new day
  const today = new Date();
  const lastGeneration = new Date(user.usage.lastGenerationDate);
  
  // If the last generation was on a different day, reset the counter
  if (today.toDateString() !== lastGeneration.toDateString()) {
    return true;
  }
  
  // Check if user has reached their daily limit
  return user.usage.dailyGenerations < limit;
} 