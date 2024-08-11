import { render, screen, fireEvent } from '@testing-library/react'
import App from './App'

describe('App component', () => {
  test('and tasks', () => {
    render(<App />)
    const taskInput = screen.getByPlaceholderText(/Enter new todo/i)
    const addButton = screen.getByText(/Add/i)

    // Add a task
    fireEvent.change(taskInput, { target: { value: 'Task 1' } })
    fireEvent.click(addButton)
    expect(screen.getByText('Task 1')).toBeInTheDocument()

    // Add another task
    fireEvent.change(taskInput, { target: { value: 'Task 2' } })
    fireEvent.click(addButton)
    expect(screen.getByText('Task 2')).toBeInTheDocument()
  })
  test('complete tasks', () => {
    render(<App />)
    const taskInput = screen.getByPlaceholderText(/Enter new todo/i)
    const addButton = screen.getByText(/Add/i)

    // Add a task
    fireEvent.change(taskInput, { target: { value: 'Task 1' } })
    fireEvent.click(addButton)
    expect(screen.getByText('Task 1')).toBeInTheDocument()

    // Complete the task
    const completeButton2 = screen.getByText(/Complete/i)
    fireEvent.click(completeButton2)
    expect(screen.queryByText('Task 1')).not.toBeInTheDocument()
  })
})
