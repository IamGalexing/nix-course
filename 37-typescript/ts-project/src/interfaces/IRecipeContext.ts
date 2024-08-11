import { IRecipe } from '.'
import { Dispatch, SetStateAction } from 'react'

export interface IRecipeContext {
  recipeList: IRecipe[]
  exploreRecipeList: IRecipe[]
  favoriteRecipeList: IRecipe[]
  currentRecipe: IRecipe | null
  isDeleteRecipe: boolean
  setFavoriteRecipeList: Dispatch<SetStateAction<IRecipe[]>>
  setExploreRecipe: Dispatch<SetStateAction<IRecipe[]>>
  setRecipeList: Dispatch<SetStateAction<IRecipe[]>>
  setCurrentRecipe: Dispatch<SetStateAction<IRecipe | null>>
  setIsDeleteRecipe: Dispatch<SetStateAction<boolean>>
}
