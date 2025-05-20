import Stripe from 'stripe'

const stripeSecretKey = process.env.STRIPE_SECRET_KEY

if (!stripeSecretKey) {
  throw new Error('STRIPE_SECRET_KEY não está definida no .env.local!')
}

export const stripe = new Stripe(stripeSecretKey, {
  apiVersion: '2025-04-30.basil',
  appInfo: {
    name: 'Ignite Shop',
  },
})
