import { render, screen } from '@testing-library/react'
import { Button } from './Button'

describe('Button', () => {
  const onClickHandle = (e) => {
    e.preventDeault()
  }

  it('should applies the given className to the button', () => {
    render(
      <Button onClick={onClickHandle} className="hello class2">
        Hello
      </Button>
    )
    const button = screen.getByRole('button')
    expect(button).toHaveClass('hello class2')
  })

  it('should passes the correct props to the Button component', () => {
    render(
      <Button onClick={onClickHandle} className="flex py-1 px-2">
        Custom Title
      </Button>
    )
    const button = screen.getByRole('button')
    expect(button).toHaveAttribute('type', 'button')
    expect(button).toHaveAttribute('class', 'flex py-1 px-2')
    expect(button).toHaveTextContent('Custom Title')
  })
})
