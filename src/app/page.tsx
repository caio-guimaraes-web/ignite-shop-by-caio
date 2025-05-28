export const revalidate = 100 // ISR Revalidation variable

import ProductsSliderHome from '@/slider/ProductsSliderHome'
import { stripe } from '../lib/stripe'
import Stripe from 'stripe'

// Asynchronous function to fetch products from Stripe
async function getProducts() {
  const response = await stripe.products.list({
    expand: ['data.default_price'],
  })

  const timestamp = new Date().toISOString()
  console.log(`[ISR] Produtos revalidados em: ${timestamp}`)

  return response.data.map((product) => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: price.unit_amount ? price.unit_amount / 100 : 0,
      fetchedAt: timestamp, // to see it on client
    }
  })
}

// Server Component that fetches products and passes them to the Client Component
export default async function Home() {
  const products = await getProducts()

  return <ProductsSliderHome products={products} />
}
