import ProductList from './components/ProductsList'

const PRODUCTS = [
  { id: 0, title: 'Product 1', price: 100, category: 'Cooking' },
  { id: 1, title: 'Product 2', price: 200, category: 'Sport' },
  { id: 2, title: 'Product 3', price: 300, category: 'Cars' },
  { id: 3, title: 'Product 4', price: 400, category: 'Bikes' },
  { id: 4, title: 'Product 5', price: 500, category: 'Bikes' },
  { id: 5, title: 'Product 6', price: 600, category: 'Sport' },
]

function App() {
  return <ProductList products={PRODUCTS} />
}

export default App
