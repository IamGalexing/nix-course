import { useEffect, useState } from 'react'
import { Link, Outlet, useNavigate, useParams } from 'react-router-dom'
import { ELECTRONICS } from '../constants/electronics'

export const ElectronicsSubCategory = () => {
  const [marks, setMarks] = useState([])
  const { mark, category } = useParams()

  const navigate = useNavigate()

  useEffect(() => {
    const marks = ELECTRONICS[category].map((item) => item.mark)
    setMarks(marks)
  }, [category])

  return (
    <div>
      {marks.map((mark) => (
        <button key={mark} className="mark-button" type="button" onClick={() => navigate(`${mark}`)}>
          {mark}
        </button>
      ))}

      {mark ? null : (
        <ul>
          {ELECTRONICS[category].map(({ model: models, mark: itemMark }) =>
            models.map(({ model, id }) => {
              return (
                <li key={id}>
                  <Link to={`${itemMark}/${model}`}>
                    <p>mark: {itemMark}</p>
                    <p>model: {model}</p>
                  </Link>
                </li>
              )
            })
          )}
        </ul>
      )}
      <Outlet />
    </div>
  )
}
