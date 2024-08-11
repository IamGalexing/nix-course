import { render, fireEvent } from '@testing-library/react'
import { describe, it, expect, beforeEach } from 'vitest'
import { FAQItem } from './FAQItem'

describe('FAQItem', () => {
  let question
  let answer
  let component

  beforeEach(() => {
    question = 'What is React?'
    answer = 'React is a JavaScript library for building user interfaces.'
    component = render(<FAQItem question={question} answer={answer} />)
  })

  it('renders the question and answer', () => {
    expect(component.getByText(question)).toBeDefined()
    expect(component.getByText(answer)).toBeDefined()
  })

  it('hides the answer by default', () => {
    expect(component.getByText(answer)).toHaveStyle({ display: 'none' })
  })

  it('shows the answer when the question is clicked', () => {
    fireEvent.click(component.getByText(question))
    expect(component.getByText(answer)).toHaveStyle({ display: 'block' })
  })

  it('hides the answer when the question is clicked again', () => {
    fireEvent.click(component.getByText(question))
    fireEvent.click(component.getByText(question))
    expect(component.getByText(answer)).toHaveStyle({ display: 'none' })
  })
})
