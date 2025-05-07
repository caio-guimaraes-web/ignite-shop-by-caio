/* // Usage at next.js12

 import { useRouter } from 'next/router'

export default function Product() {
  const { query } = useRouter()

  return <h1>Product {JSON.stringify(query)}</h1>
} */

// Usage at next.js15
'use client'

import { useParams } from 'next/navigation'

export default function ProductDetailPage() {
  const params = useParams()

  return (
    <div>
      <h1>Produto ID: {params.id}</h1>
      <p>Detalhes do produto {params.id}.</p>
      <a href="/product">Voltar para Produtos</a>
    </div>
  )
}
