'use client'
import Image from 'next/image'
import { HomeContainer, Product } from '../styles/pages/home'

import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'

export default function Home() {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
    breakpoints: {
      '(max-width: 900px)': {
        slides: {
          perView: 2,
          spacing: 48,
        },
      },
      '(max-width: 600px)': {
        slides: {
          perView: 1,
          spacing: 48,
        },
      },
    },
  })

  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      <Product className="keen-slider__slide">
        <Image
          src="/shirts/1.png"
          width={520}
          height={480}
          alt="Camiseta X"
          loading="lazy"
        />

        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 69,90</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image
          src="/shirts/2.png"
          width={520}
          height={480}
          alt="Camiseta X"
          loading="lazy"
        />

        <footer>
          <strong>Camiseta y</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image
          src="/shirts/3.png"
          width={520}
          height={480}
          alt="Camiseta X"
          loading="lazy"
        />

        <footer>
          <strong>Camiseta z</strong>
          <span>R$ 89,90</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image
          src="/shirts/3.png"
          width={520}
          height={480}
          alt="Camiseta A"
          loading="lazy"
        />

        <footer>
          <strong>Camiseta A</strong>
          <span>R$ 99,90</span>
        </footer>
      </Product>
    </HomeContainer>
  )
}
