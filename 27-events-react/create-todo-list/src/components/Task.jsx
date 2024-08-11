import PropTypes from 'prop-types'

export const Task = ({ task, onClick }) => {
  const handleCompleteClick = () => {
    onClick(task)
  }

  return (
    <li className="task-item">
      <div className="task-item-text">{task}</div>
      <button className="task-item-btn" type="button" onClick={handleCompleteClick}>
        Complete
      </button>
    </li>
  )
}

Task.propTypes = {
  task: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}
