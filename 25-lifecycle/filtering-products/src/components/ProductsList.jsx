import { useState, useEffect, useMemo } from 'react'
import PropTypes from 'prop-types'
import Product from './Product'
import SelectList from './SelectList'

function ProductList({ products }) {
  const [filteredProducts, setFilteredProducts] = useState(products)
  const [selectedCategory, setSelectedCategory] = useState('')

  const categories = useMemo(() => [...new Set(products.map((product) => product.category))], [products])

  useEffect(() => {
    selectedCategory === ''
      ? setFilteredProducts(products)
      : setFilteredProducts(products.filter((product) => product.category === selectedCategory))
  }, [products, selectedCategory])

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value)
  }

  return (
    <div>
      <SelectList id="category-select" categories={categories} onChange={handleCategoryChange} />
      <h3>Product list:</h3>
      <ul>
        {filteredProducts.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </ul>
    </div>
  )
}

ProductList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    })
  ).isRequired,
}

export default ProductList
