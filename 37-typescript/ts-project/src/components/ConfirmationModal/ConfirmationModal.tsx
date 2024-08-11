import React, { MouseEvent, useContext } from 'react'
import { CustomButton, Modal } from '../../components'
import { RecipeContext, DrawerContext, ConfirmContext } from '../../contexts'
import './confirmationNodal.scss'
import { IRecipe } from '../../interfaces'

export const ConfirmationModal = ({ openFunction }: { openFunction: (arg: boolean) => void }) => {
  const { recipeList, setRecipeList, setIsDeleteRecipe, currentRecipe } = useContext(RecipeContext)
  const { setIsOpenDrawer } = useContext(DrawerContext)
  const { setIsOpenConfirmModal } = useContext(ConfirmContext)

  const saveRecipe = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    setIsDeleteRecipe(false)
    setIsOpenConfirmModal(false)
    setIsOpenDrawer(false)
  }

  const deleteRecipe = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    setRecipeList(recipeList.filter((recipe: IRecipe) => recipe.id !== currentRecipe?.id))
    setIsOpenConfirmModal(false)
    setIsOpenDrawer(false)
  }
  return (
    <Modal
      openFunction={openFunction}
      modalTitle="Confirmation"
      onClick={(e: MouseEvent<HTMLDivElement>) => e.stopPropagation()}
    >
      <span className="confirmation__content">Are you sure you want to delete this recipe?</span>
      <div className="confirmation__buttons-container">
        <CustomButton className="button button__confirm" onClick={saveRecipe}>
          Cancel
        </CustomButton>
        <CustomButton className="button button__confirm button__confirm--active" onClick={deleteRecipe}>
          Yes, Delete
        </CustomButton>
      </div>
    </Modal>
  )
}
