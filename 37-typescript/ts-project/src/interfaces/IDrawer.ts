import { Dispatch, SetStateAction } from 'react'
import { IIngredient } from './IIngredient'

export interface IDrawer {
  id?: string
  title?: string
  description?: string
  ingredients?: IIngredient[]
  cookingTime?: string
  isFavorite?: boolean
  closeFunction: Dispatch<SetStateAction<boolean>>
}
