import { render } from '@testing-library/react'
import { fireEvent } from '@testing-library/react'
import App from './App'

describe('App tests', () => {
  test('Add todo', () => {
    const { queryAllByTestId, getAllByTestId, getByText } = render(<App />)
    expect(queryAllByTestId('todo-item')).toHaveLength(0)

    fireEvent.click(getByText('Add Todo'))

    expect(getAllByTestId('todo-item')).toHaveLength(1)
  })

  test('Change count', () => {
    const { getByTestId, getByText } = render(<App />)

    expect(getByTestId('count')).toHaveTextContent(0)

    fireEvent.click(getByText('+'))

    expect(getByTestId('count')).toHaveTextContent(1)
  })
})
