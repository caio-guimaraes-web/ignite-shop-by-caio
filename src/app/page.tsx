export const revalidate = 10

import ProductsSliderHome from '@/slider/ProductsSliderHome'
import { getProducts } from '@/lib/getProducts'

// Server Component only consumes data from the lib (without directly accessing the SDK)
export default async function Home() {
  const products = await getProducts()

  return <ProductsSliderHome products={products} />
}
