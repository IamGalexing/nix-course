import { Context, ReactNode, createContext } from 'react'
import { IDrawerContext } from '../interfaces'

const DRAWER_DEFAULT_VALUE: IDrawerContext = {
  isOpenDrawer: false,
  setIsOpenDrawer: () => {
    throw new Error('setIsDeleteRecipe function must be overridden')
  },
}

export const DrawerContext: Context<IDrawerContext> = createContext(DRAWER_DEFAULT_VALUE)

export const DrawerContextContainer = ({ value, children }: { value: IDrawerContext; children: ReactNode }) => {
  return <DrawerContext.Provider value={value}>{children}</DrawerContext.Provider>
}
