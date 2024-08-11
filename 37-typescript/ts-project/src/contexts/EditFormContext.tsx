import { Context, ReactNode, createContext } from 'react'
import { IEditFormContext } from '../interfaces'

const EDIT_FROM_DEFAULT_VALUE: IEditFormContext = {
  isOpenEditForm: false,
  setIsOpenEditForm: () => {
    throw new Error('setIsDeleteRecipe function must be overridden')
  },
}

export const EditFormContext: Context<IEditFormContext> = createContext(EDIT_FROM_DEFAULT_VALUE)

export const EditFormContextContainer = ({ value, children }: { value: IEditFormContext; children: ReactNode }) => {
  return <EditFormContext.Provider value={value}>{children}</EditFormContext.Provider>
}
