import { Context, ReactNode, createContext } from 'react'
import { IRecipeContext } from '../interfaces'

const noop = () => {
  throw new Error('setIsDeleteRecipe function must be overridden')
}
const RECIPE_CONTEXT_DEFAULT_VALUE: IRecipeContext = {
  recipeList: [],
  exploreRecipeList: [],
  favoriteRecipeList: [],
  currentRecipe: null,
  isDeleteRecipe: false,
  setFavoriteRecipeList: noop,
  setExploreRecipe: noop,
  setRecipeList: noop,
  setCurrentRecipe: noop,
  setIsDeleteRecipe: noop,
}

export const RecipeContext: Context<IRecipeContext> = createContext(RECIPE_CONTEXT_DEFAULT_VALUE)

export const RecipeContextContainer = ({ value, children }: { value: IRecipeContext; children: ReactNode }) => {
  return <RecipeContext.Provider value={value}>{children}</RecipeContext.Provider>
}
