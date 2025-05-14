import Image from 'next/image'
import { HomeContainer, Product } from '../styles/pages/home'

export default function Home() {
  return (
    <HomeContainer>
      <Product>
        <Image
          src="/shirts/1.png"
          width={520}
          height={480}
          alt="Camiseta X"
          loading="lazy"
        />

        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product>
        <Image
          src="/shirts/2.png"
          width={520}
          height={480}
          alt="Camiseta X"
          loading="lazy"
        />

        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
    </HomeContainer>
  )
}
