# AI Image Generator - Powered by FLUX.1-Dev

A Next.js web application for AI image generation similar to Raphael.app. This application allows users to generate high-quality AI images with FLUX.1-Dev model, with both free tier and paid subscription options.

## Features

- 🖼️ AI image generation with FLUX.1-Dev model
- 🆓 Free tier with 5 generations per day
- 💰 Paid subscription plans for additional features and higher limits
- 🌐 Multi-language support (English and Chinese)
- 💳 Stripe integration for handling payments
- 👤 User accounts and dashboard
- 📱 Responsive design for all devices

## Tech Stack

- **Frontend**: Next.js, React, TypeScript, Tailwind CSS
- **Backend**: Node.js, Next.js API routes
- **Database**: MongoDB (with Mongoose)
- **Authentication**: NextAuth.js
- **Payments**: Stripe
- **Localization**: react-i18next

## Getting Started

### Prerequisites

- Node.js 16.x or higher
- npm or yarn
- MongoDB database
- Stripe account for payments
- FLUX.1-Dev API credentials

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/ai-image-generator.git
   cd ai-image-generator
   ```

2. Install the dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Create a `.env.local` file in the root directory with the following variables:
   ```
   # MongoDB
   MONGODB_URI=your_mongodb_connection_string
   
   # NextAuth.js
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=your_nextauth_secret
   
   # Stripe
   STRIPE_PUBLIC_KEY=your_stripe_public_key
   STRIPE_SECRET_KEY=your_stripe_secret_key
   STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret
   
   # FLUX.1-Dev API
   FLUX_API_KEY=your_flux_api_key
   FLUX_API_URL=https://api.flux1dev.com/v1
   ```

4. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Deployment

This application can be deployed on any platform that supports Next.js, such as:

- [Vercel](https://vercel.com)
- [Netlify](https://netlify.com)
- [AWS](https://aws.amazon.com) or other cloud providers

For production deployment, make sure to:
1. Set up the proper environment variables
2. Configure the Stripe webhooks
3. Set up proper database connections
4. Configure the domain and HTTPS

## International Deployment Considerations

For deploying to international markets:

1. Ensure server locations comply with local regulations
2. Set up region-specific payment methods
3. Implement proper geo-routing for optimal performance
4. Configure currency handling for different regions
5. Implement appropriate data privacy measures (GDPR, CCPA, etc.)

## Project Structure

```
.
├── public/                  # Static files
│   ├── logo.png
│   └── ...
├── src/                     # Source code
│   ├── api/                 # API handlers
│   │   ├── generateImage.ts # Image generation API
│   │   └── payment.ts       # Stripe payment handling
│   ├── components/          # React components
│   │   └── PricingPlans.tsx # Pricing plans component
│   ├── models/              # Data models
│   │   └── User.ts          # User model
│   ├── pages/               # Next.js pages
│   │   ├── index.tsx        # Home page (English)
│   │   ├── zh.tsx           # Home page (Chinese)
│   │   ├── pricing.tsx      # Pricing page
│   │   └── login.tsx        # Login page
│   ├── styles/              # CSS files
│   ├── utils/               # Utility functions
│   └── context/             # React contexts
├── package.json             # Project dependencies
└── README.md                # Project documentation
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- [Raphael.app](https://raphael.app) for inspiration
- FLUX.1-Dev for the AI image generation model
- Next.js and React for the frontend framework
- Stripe for payment processing 