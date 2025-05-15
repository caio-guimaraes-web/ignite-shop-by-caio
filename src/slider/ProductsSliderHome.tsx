'use client'

import Image from 'next/image'
import { useKeenSlider } from 'keen-slider/react'
import { HomeContainer, Product } from '../styles/pages/home'
import 'keen-slider/keen-slider.min.css'

interface ProductsSliderHomeProps {
  products: {
    id: string
    name: string
    imageUrl: string
    price: number
  }[]
}

// Client Component rendered on the client side
export default function ProductsSliderHome({
  products,
}: ProductsSliderHomeProps) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
    breakpoints: {
      '(max-width: 900px)': { slides: { perView: 2, spacing: 48 } },
      '(max-width: 600px)': { slides: { perView: 1, spacing: 48 } },
    },
  })

  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      {products.map((product) => (
        <Product key={product.id} className="keen-slider__slide">
          <Image src={product.imageUrl} width={520} height={480} alt="" />
          <footer>
            <strong>{product.name}</strong>
            <span>R$ {product.price.toFixed(2)}</span>
          </footer>
        </Product>
      ))}
    </HomeContainer>
  )
}
