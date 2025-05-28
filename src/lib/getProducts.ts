import { stripe } from './stripe'
import Stripe from 'stripe'

export async function getProducts() {
  const response = await stripe.products.list({
    expand: ['data.default_price'],
  })

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: price.unit_amount ? price.unit_amount / 100 : 0,
    }
  })

  // ISR Log Viewer
  console.log(
    '[Revalidate - getProducts.ts] Timestamp:',
    new Date().toISOString()
  )

  return products
}
