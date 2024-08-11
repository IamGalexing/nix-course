import { render } from '@testing-library/react'
import { PrivateRoute } from './PrivateRoute'
import { BrowserRouter } from 'react-router-dom'

describe('ProtectedRoute', () => {
  test('should render route if user is loign', () => {
    const mockTitle = 'Protected route'
    const { getByText } = render(
      <PrivateRoute isAuth={true}>
        <h1>{mockTitle}</h1>
      </PrivateRoute>,
      { wrapper: BrowserRouter }
    )

    expect(getByText(mockTitle)).toBeInTheDocument()
  })

  test('should not render route if user is login', () => {
    const mockTitle = 'Protected route'
    const { queryByText } = render(
      <PrivateRoute isAuth={false} redirectPath="home">
        <h1>{mockTitle}</h1>
      </PrivateRoute>,
      { wrapper: BrowserRouter }
    )

    expect(queryByText(mockTitle)).not.toBeInTheDocument()
  })
})
