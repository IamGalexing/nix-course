import { ProductCard } from './ProductCard'
import { products } from '../constants'
import { v4 as uuidv4 } from 'uuid'

export const ProductList = () => {
  return (
    <main className="main">
      <ul className="product-list">
        {products.map((product) => (
          <ProductCard key={uuidv4()} product={product} />
        ))}
      </ul>
    </main>
  )
}
