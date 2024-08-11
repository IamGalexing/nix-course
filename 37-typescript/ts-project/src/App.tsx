import { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { DUMMY_DATA } from './constants'
import { ConfirmationModal, Sidebar, EditForm, Drawer } from './components'
import { DEFAULT_EXPLORE_IDS } from './constants'
import {
  RecipeContextContainer,
  EditFormContextContainer,
  DrawerContextContainer,
  ConfirmContextContainer,
} from './contexts'
import { IRecipe } from './interfaces'

export function App() {
  const [recipeList, setRecipeList] = useState<IRecipe[]>(DUMMY_DATA)
  const [exploreRecipeList, setExploreRecipe] = useState<IRecipe[]>(
    recipeList.filter((recipe: IRecipe) => recipe.id && DEFAULT_EXPLORE_IDS.indexOf(+recipe.id) != -1)
  )
  const [favoriteRecipeList, setFavoriteRecipeList] = useState<IRecipe[]>(
    recipeList.filter((item: IRecipe) => item.isFavorite === true)
  )
  const [isOpenEditForm, setIsOpenEditForm] = useState<boolean>(false)
  const [currentRecipe, setCurrentRecipe] = useState<IRecipe | null>(null)
  const [isOpenConfirmModal, setIsOpenConfirmModal] = useState<boolean>(false)
  const [isDeleteRecipe, setIsDeleteRecipe] = useState<boolean>(false)
  const [isOpenDrawer, setIsOpenDrawer] = useState<boolean>(false)

  useEffect(() => {
    setExploreRecipe(
      recipeList.filter((recipe: IRecipe) => recipe?.id && DEFAULT_EXPLORE_IDS.indexOf(+recipe.id) != -1)
    )
    setFavoriteRecipeList(recipeList.filter((item: IRecipe) => item.isFavorite === true))
  }, [recipeList])

  return (
    <RecipeContextContainer
      value={{
        recipeList,
        exploreRecipeList,
        favoriteRecipeList,
        currentRecipe,
        isDeleteRecipe,
        setFavoriteRecipeList,
        setExploreRecipe,
        setRecipeList,
        setCurrentRecipe,
        setIsDeleteRecipe,
      }}
    >
      <EditFormContextContainer
        value={{
          isOpenEditForm,
          setIsOpenEditForm,
        }}
      >
        <DrawerContextContainer
          value={{
            isOpenDrawer,
            setIsOpenDrawer,
          }}
        >
          <ConfirmContextContainer
            value={{
              isOpenConfirmModal,
              setIsOpenConfirmModal,
            }}
          >
            {isOpenEditForm && <EditForm />}
            {isOpenDrawer && (
              <Drawer
                closeFunction={setIsOpenDrawer}
                id={currentRecipe?.id}
                title={currentRecipe?.title}
                description={currentRecipe?.description}
                ingredients={currentRecipe?.ingredients}
                cookingTime={currentRecipe?.cookingTime}
                isFavorite={currentRecipe?.isFavorite}
              />
            )}
            {isOpenConfirmModal && <ConfirmationModal openFunction={setIsOpenConfirmModal} />}
            <div className="main-container">
              <Sidebar />
              <Outlet />
            </div>
          </ConfirmContextContainer>
        </DrawerContextContainer>
      </EditFormContextContainer>
    </RecipeContextContainer>
  )
}
