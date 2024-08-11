import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

describe('Calculator component', () => {
  test('Display has default value when any button didn`t press', () => {
    const { getByTestId } = render(<App />)

    if (getByTestId('display').nodeName === 'INPUT') {
      expect(getByTestId('display').value).toBe('0')
    } else {
      expect(getByTestId('display')).toHaveTextContent('0')
    }
  })
  test('Plus functionality with number', async () => {
    const { getByTestId, getByText } = render(<App />)
    const user = userEvent.setup()

    await user.click(getByText('1'))
    await user.click(getByText('+'))
    await user.click(getByText('5'))
    await user.click(getByText('='))

    if (getByTestId('display').nodeName === 'INPUT') {
      expect(getByTestId('display').value).toBe('6')
    } else {
      expect(getByTestId('display')).toHaveTextContent('6')
    }
  })

  test('Plus functionality with fractional numbers', async () => {
    const { getByTestId, getByText } = render(<App />)
    const user = userEvent.setup()

    await user.click(getByTestId('zero-button'))
    await user.click(getByText('.'))
    await user.click(getByText('1'))
    await user.click(getByText('+'))
    await user.click(getByTestId('zero-button'))
    await user.click(getByText('.'))
    await user.click(getByText('4'))
    await user.click(getByText('='))

    if (getByTestId('display').nodeName === 'INPUT') {
      expect(getByTestId('display').value).toBe('0.5')
    } else {
      expect(getByTestId('display')).toHaveTextContent('0.5')
    }
  })

  test('Minus functionality with numbers', async () => {
    const { getByTestId, getByText } = render(<App />)
    const user = userEvent.setup()

    await user.click(getByText('9'))
    await user.click(getByText('-'))
    await user.click(getByText('3'))
    await user.click(getByText('='))

    if (getByTestId('display').nodeName === 'INPUT') {
      expect(getByTestId('display').value).toBe('6')
    } else {
      expect(getByTestId('display')).toHaveTextContent('6')
    }
  })

  test('Minus functionality with fractional numbers', async () => {
    const { getByTestId, getByText } = render(<App />)
    const user = userEvent.setup()

    await user.click(getByTestId('zero-button'))
    await user.click(getByText('.'))
    await user.click(getByText('9'))
    await user.click(getByText('-'))
    await user.click(getByTestId('zero-button'))
    await user.click(getByText('.'))
    await user.click(getByText('7'))
    await user.click(getByText('='))

    if (getByTestId('display').nodeName === 'INPUT') {
      expect(getByTestId('display').value).toBe('0.2')
    } else {
      expect(getByTestId('display')).toHaveTextContent('0.2')
    }
  })

  test('Multiply functionality with numbers', async () => {
    const { getByTestId, getByText } = render(<App />)
    const user = userEvent.setup()

    await user.click(getByText('9'))
    await user.click(getByText('*'))
    await user.click(getByText('3'))
    await user.click(getByText('='))

    if (getByTestId('display').nodeName === 'INPUT') {
      expect(getByTestId('display').value).toBe('27')
    } else {
      expect(getByTestId('display')).toHaveTextContent('27')
    }
  })

  test('Multiply functionality with fractional numbers', async () => {
    const { getByTestId, getByText } = render(<App />)
    const user = userEvent.setup()

    await user.click(getByTestId('zero-button'))
    await user.click(getByText('.'))
    await user.click(getByText('7'))
    await user.click(getByText('*'))
    await user.click(getByTestId('zero-button'))
    await user.click(getByText('.'))
    await user.click(getByText('8'))
    await user.click(getByText('='))

    if (getByTestId('display').nodeName === 'INPUT') {
      expect(getByTestId('display').value).toBe('0.56')
    } else {
      expect(getByTestId('display')).toHaveTextContent('0.56')
    }
  })

  test('Divide functionality with numbers', async () => {
    const { getByTestId, getByText } = render(<App />)
    const user = userEvent.setup()

    await user.click(getByText('9'))
    await user.click(getByText('/'))
    await user.click(getByText('3'))
    await user.click(getByText('='))

    if (getByTestId('display').nodeName === 'INPUT') {
      expect(getByTestId('display').value).toBe('3')
    } else {
      expect(getByTestId('display')).toHaveTextContent('3')
    }
  })

  test('Divide functionality with fractional numbers', async () => {
    const { getByTestId, getByText } = render(<App />)
    const user = userEvent.setup()

    await user.click(getByTestId('zero-button'))
    await user.click(getByText('.'))
    await user.click(getByText('9'))
    await user.click(getByText('/'))
    await user.click(getByTestId('zero-button'))
    await user.click(getByText('.'))
    await user.click(getByText('3'))
    await user.click(getByText('='))

    if (getByTestId('display').nodeName === 'INPUT') {
      expect(getByTestId('display').value).toBe('3')
    } else {
      expect(getByTestId('display')).toHaveTextContent('3')
    }
  })

  test('Reset all value form display when press on C', async () => {
    const { getByTestId, getByText } = render(<App />)
    const user = userEvent.setup()

    if (getByTestId('display').nodeName === 'INPUT') {
      expect(getByTestId('display').value).toBe('0')
    } else {
      expect(getByTestId('display')).toHaveTextContent('0')
    }

    await user.click(getByText('1'))
    await user.click(getByText('2'))
    await user.click(getByText('3'))
    await user.click(getByText('4'))

    if (getByTestId('display').nodeName === 'INPUT') {
      expect(getByTestId('display').value).toBe('1234')
    } else {
      expect(getByTestId('display')).toHaveTextContent('1234')
    }

    await user.click(getByTestId('clear'))

    if (getByTestId('display').nodeName === 'INPUT') {
      expect(getByTestId('display').value).toBe('0')
    } else {
      expect(getByTestId('display')).toHaveTextContent('0')
    }
  })
})
