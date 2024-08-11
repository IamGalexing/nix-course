import { ItemCard } from '../components/ItemCard'
import { PHONE_MODELS } from '../constants/PhoneModels'

export const ItemList = () => {
  return (
    <div className="item-container">
      {PHONE_MODELS.map((item) => {
        return (
          <ItemCard
            key={item.id}
            id={item.id}
            title={item.title}
            model={item.model}
            description={item.description}
            img={item.img}
          />
        )
      })}
    </div>
  )
}
