import { createPortal } from 'react-dom'
import { CustomButton } from '../../components'
import { CloseIcon } from '../../assets/icons'
import './modal.scss'
import { MouseEvent, ReactNode } from 'react'

type ModalProps = {
  children: ReactNode
  modalTitle: string
  openFunction: (arg: boolean) => void
  onClick?: (e: MouseEvent<HTMLDivElement>) => void
}

export const Modal = ({ children, modalTitle, openFunction }: ModalProps) => {
  const closeModal = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    openFunction(false)
  }
  return createPortal(
    <div className="modal">
      <div className="modal__overlay" />
      <div className="modal__container">
        <div className="modal__title">
          <span>{modalTitle}</span>
        </div>
        <div className="modal__content">{children}</div>
        <div className="modal__close-button">
          <CustomButton className="button button__close-modal" onClick={closeModal}>
            <CloseIcon />
          </CustomButton>
        </div>
      </div>
    </div>,
    document.body
  )
}
