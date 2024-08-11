import { useEffect, useState } from 'react'
import { Link, Outlet, useParams } from 'react-router-dom'
import { ELECTRONICS } from '../constants/electronics'

export const ListCards = () => {
  const [models, setModels] = useState([])
  const { mark, category } = useParams()

  useEffect(() => {
    const filteredItems = ELECTRONICS[category].find((item) => item.mark === mark)
    const models = filteredItems ? filteredItems.model : []
    setModels(models)
  }, [category, mark])

  return (
    <>
      <ul>
        {models.map(({ model, id }) => (
          <li key={id}>
            <Link to={`${model}`}>
              <p>mark: {mark}</p>
              <p>model: {model}</p>
            </Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </>
  )
}
