import { Dispatch, SetStateAction } from 'react'

export interface IConfirmContext {
  isOpenConfirmModal: boolean
  setIsOpenConfirmModal: Dispatch<SetStateAction<boolean>>
}
