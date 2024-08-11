import { useRef } from 'react'
import { createPortal } from 'react-dom'

export const Modal = ({ onClose }) => {
  const inputRef = useRef(null)

  const focusInput = () => {
    inputRef.current.focus()
  }

  return createPortal(
    <>
      <div className="modal">
        <div className="modal-content">
          <input type="text" placeholder="Enter text" ref={inputRef} />
          <div className="modal-buttons">
            <button onClick={focusInput}>Focus the input</button>
            <button onClick={onClose}>Close Modal</button>
          </div>
        </div>
      </div>
    </>,
    document.body
  )
}
