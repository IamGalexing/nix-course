import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { PHONE_MODELS } from '../constants/PhoneModels'
import { NotFoundPage } from './NotFoundPage'

export const ItemPage = () => {
  const [currentItem, setCurrentItem] = useState()

  const params = useParams()

  useEffect(() => {
    const item = PHONE_MODELS.find((item) => item.id === +params.id)
    if (item) {
      setCurrentItem(item)
    }
  }, [params.id])

  return currentItem ? (
    <div className="item-page">
      <div className="item-img-container">
        <img src={currentItem.img} alt={currentItem.title} />
      </div>
      <p>id: {currentItem.id}</p>
      <hr />
      <p> title: {currentItem.title}</p>
      <hr />
      <p>model: {currentItem.model}</p>
      <hr />
      <p>description: {currentItem.description}</p>
    </div>
  ) : (
    <NotFoundPage />
  )
}
