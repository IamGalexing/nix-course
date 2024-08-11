import { Dispatch, SetStateAction } from 'react'

export interface IEditFormContext {
  isOpenEditForm: boolean
  setIsOpenEditForm: Dispatch<SetStateAction<boolean>>
}
