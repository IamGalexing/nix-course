import { render } from '@testing-library/react'
import { describe, it, expect, beforeEach } from 'vitest'
import { FAQList } from './FAQList'

describe('FAQList', () => {
  let items
  let component

  beforeEach(() => {
    items = [
      {
        question: 'What is React?',
        answer: 'React is a JavaScript library for building user interfaces.',
      },
      {
        question: 'How do you use React?',
        answer: 'You can use React by creating components and rendering them to the DOM.',
      },
      {
        question: 'What are React hooks?',
        answer: 'React hooks are a way to use state and other React features in functional components.',
      },
    ]

    component = render(<FAQList items={items} />)
  })

  it('renders the FAQ list', () => {
    expect(component.getByText('FAQ')).toBeDefined()
    items.forEach((item) => {
      expect(component.getByText(item.question)).toBeDefined()
      expect(component.getByText(item.answer)).toBeDefined()
    })
  })
})
