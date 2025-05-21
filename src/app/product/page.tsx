import Link from 'next/link'

export default function ProductPage() {
  return (
    <div>
      <h1>Página de Produtos</h1>
      <p>Selecione um produto para ver detalhes.</p>
      <ul>
        <li>
          <Link href="/product/1">Produto 1</Link>
        </li>
        <li>
          <Link href="/product/2">Produto 2</Link>
        </li>
      </ul>
    </div>
  )
}
