import { useState } from 'react'
import { fetchTracksThunk } from '../store/tracksSlice'
import { useDispatch } from 'react-redux'

export const Search = () => {
  const [inputValue, setInputValue] = useState('')
  const dispatch = useDispatch()

  const handleSearch = () => {
    dispatch(fetchTracksThunk(inputValue))
    setInputValue('')
  }

  return (
    <div className="search">
      <input
        className="search-input"
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="input search text"
      />
      <button className="search-btn" onClick={handleSearch} type="button" role="button">
        Search
      </button>
    </div>
  )
}
