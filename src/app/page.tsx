import ProductsSliderHome from '@/slider/ProductsSliderHome'
import { stripe } from '../lib/stripe'
import Stripe from 'stripe'

// Asynchronous function to fetch products from Stripe
async function getProducts() {
  const response = await stripe.products.list({
    expand: ['data.default_price'],
  })

  return response.data.map((product) => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: price.unit_amount ? price.unit_amount / 100 : 0,
    }
  })
}

// Server Component that fetches products and passes them to the Client Component
export default async function Home() {
  const products = await getProducts() // Now the fetching is done by the server component

  return <ProductsSliderHome products={products} /> // passing the products to the client component
}
