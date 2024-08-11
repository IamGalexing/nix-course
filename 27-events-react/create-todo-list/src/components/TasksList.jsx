import { Task } from './Task'
import PropTypes from 'prop-types'

export const TasksList = ({ tasks, onClick }) => {
  return (
    <div className="tasks-list-container">
      <h2 className="tasks-list-title">Todo list</h2>
      <ul className="tasks-list">
        {tasks.length > 1 ? <span className="tasks-list-count">There are {tasks.length} todos</span> : ''}

        {tasks.map((task) => (
          <Task key={task} task={task} onClick={onClick} />
        ))}
      </ul>
    </div>
  )
}

TasksList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClick: PropTypes.func.isRequired,
}
