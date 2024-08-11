import { Context, ReactNode, createContext } from 'react'
import { IConfirmContext } from '../interfaces'

const CONFIRM_MODAL_DEFAULT_VALUE: IConfirmContext = {
  isOpenConfirmModal: false,
  setIsOpenConfirmModal: () => {
    throw new Error('setIsDeleteRecipe function must be overridden')
  },
}

export const ConfirmContext: Context<IConfirmContext> = createContext(CONFIRM_MODAL_DEFAULT_VALUE)

export const ConfirmContextContainer = ({ value, children }: { value: IConfirmContext; children: ReactNode }) => {
  return <ConfirmContext.Provider value={value}>{children}</ConfirmContext.Provider>
}
