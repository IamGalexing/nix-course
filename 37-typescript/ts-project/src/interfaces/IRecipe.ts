import { IIngredient } from '.'

export interface IRecipe {
  id?: string
  title?: string
  description?: string
  ingredients?: IIngredient[]
  cookingTime?: string
  isFavorite?: boolean
}
