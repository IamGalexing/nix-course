import { useState } from 'react'
import { TasksList } from './TasksList'
import { TaskForm } from './TaskForm'

export const TodoApp = () => {
  const [tasks, setTasks] = useState([])

  const handleAddItem = (taskToAdd) => {
    setTasks((prev) => [...prev, taskToAdd])
  }

  const handleRemoveItem = (taskToRemove) => {
    const updatedTasks = tasks.filter((task) => task !== taskToRemove)
    setTasks(updatedTasks)
  }

  return (
    <div className="todo-app">
      <TaskForm onSubmit={handleAddItem} />
      <TasksList tasks={tasks} onClick={handleRemoveItem} />
    </div>
  )
}
