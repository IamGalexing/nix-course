import { DUMMY_DATA } from './constants/dummy_data'
import { SingleCard } from './components/SingleCard'
import './index.css'
import { useState, useEffect } from 'react'

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState('')
  const [selectedSort, setSelectedSort] = useState('')
  const [filteredData, setFilteredData] = useState([])

  useEffect(() => {
    const filteredData = DUMMY_DATA.filter((data) => data.categories.toLowerCase() === selectedCategory)
    setSelectedSort('')
    setFilteredData(filteredData)
  }, [selectedCategory])

  useEffect(() => {
    if (selectedSort !== '') {
      setFilteredData((prevFilteredData) => {
        const sortedData = [...prevFilteredData].sort((a, b) => {
          return a[selectedSort] - b[selectedSort]
        })
        return sortedData
      })
    } else {
      document.getElementById('sort').value = ''
    }
  }, [selectedSort])

  const handleCategoryChange = ({ target }) => {
    setSelectedCategory(target.value)
  }

  const handleSortChange = ({ target }) => {
    setSelectedSort(target.value)
  }

  return (
    <>
      <label htmlFor="filtration">Filtration by categories</label>
      <select name="filter" id="filtration" data-testid="filter-select" onChange={handleCategoryChange}>
        <option value="">choose option</option>
        <option value="outdoors">outdoors</option>
        <option value="tools">tools</option>
        <option value="films">films</option>
        <option value="empty">empty</option>
      </select>
      <br />
      <label htmlFor="sort">Sort by</label>
      <select name="sort" id="sort" data-testid="sort-select" onChange={handleSortChange}>
        <option value="">Choose option</option>
        <option value="price">Price</option>
        <option value="rating">Rating</option>
      </select>
      <div className="card-container">
        {filteredData.length ? (
          filteredData.map((item) => (
            <SingleCard
              key={item.id}
              title={item.title}
              price={item.price}
              rating={item.rating}
              categories={item.categories}
            />
          ))
        ) : (
          <p>List of data is empty please change filter param</p>
        )}
      </div>
    </>
  )
}
