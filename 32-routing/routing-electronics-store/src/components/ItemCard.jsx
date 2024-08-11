import { useParams } from 'react-router-dom'

export const ItemCard = () => {
  const { mark, model } = useParams()

  return (
    <>
      <h3>Item Details:</h3>
      <p>mark: {mark}</p>
      <p>model: {model}</p>
    </>
  )
}
