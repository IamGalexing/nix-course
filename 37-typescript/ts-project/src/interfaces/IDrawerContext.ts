import { Dispatch, SetStateAction } from 'react'

export interface IDrawerContext {
  isOpenDrawer: boolean
  setIsOpenDrawer: Dispatch<SetStateAction<boolean>>
}
