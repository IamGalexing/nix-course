import { useRef } from 'react'
import PropTypes from 'prop-types'

export const TaskForm = ({ onSubmit }) => {
  const taskRef = useRef()

  const handleOnSubmit = (e) => {
    e.preventDefault()
    const taskValue = taskRef.current.value
    if (taskValue.trim() !== '') {
      onSubmit(taskValue)
      taskRef.current.value = ''
    }
  }

  return (
    <form className="form-task" onSubmit={handleOnSubmit}>
      <input className="form-task-input" ref={taskRef} type="text" name="task" placeholder="Enter new todo" required />
      <button className="form-task-btn" type="submit">
        Add
      </button>
    </form>
  )
}

TaskForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}
