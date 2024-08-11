import { render } from '@testing-library/react'
import { fireEvent } from '@testing-library/react'
import { describe, test, expect } from 'vitest'
import { Card } from './Card'

describe('Card props', () => {
  const props = {
    name: 'mockName',
    userName: 'mockUsername',
    email: 'mockEmail',
    phone: 'mockPhone',
    website: 'website.mock',
  }
  test('Card must have name and username on the front line', () => {
    const { getByText, queryByText } = render(<Card {...props} />)

    expect(getByText(props.name)).toBeInTheDocument()
    expect(getByText(props.userName)).toBeInTheDocument()
    expect(queryByText(props.email)).not.toBeInTheDocument()
    expect(queryByText(props.phone)).not.toBeInTheDocument()
    expect(queryByText(props.website)).not.toBeInTheDocument()
  })

  test('Card change FRONT side of card on BACK side when press on button at the FRONT part of card', () => {
    const { getByText, queryByText } = render(<Card {...props} />)

    // check content of front side of card
    expect(getByText(props.name)).toBeInTheDocument()
    expect(getByText(props.userName)).toBeInTheDocument()
    expect(queryByText(props.email)).not.toBeInTheDocument()
    expect(queryByText(props.phone)).not.toBeInTheDocument()
    expect(queryByText(props.website)).not.toBeInTheDocument()
    expect(queryByText(/Show front side/i)).not.toBeInTheDocument()
    expect(getByText(/Show back side/i)).toBeInTheDocument()

    fireEvent.click(getByText(/Show back side/i))

    // check content of back side of card
    expect(queryByText(props.name)).not.toBeInTheDocument()
    expect(queryByText(props.userName)).not.toBeInTheDocument()
    expect(getByText(props.email)).toBeInTheDocument()
    expect(getByText(props.phone)).toBeInTheDocument()
    expect(getByText(props.website)).toBeInTheDocument()
    expect(getByText(/Show front side/i)).toBeInTheDocument()
    expect(queryByText(/Show back side/i)).not.toBeInTheDocument()
  })

  test('Card change BACK side of card on FRONT side when press on button at the BACK part of card', () => {
    const { getByText, queryByText } = render(<Card {...props} />)

    fireEvent.click(getByText(/Show back side/i))

    // check content of back side of card
    expect(queryByText(props.name)).not.toBeInTheDocument()
    expect(queryByText(props.userName)).not.toBeInTheDocument()
    expect(getByText(props.email)).toBeInTheDocument()
    expect(getByText(props.phone)).toBeInTheDocument()
    expect(getByText(props.website)).toBeInTheDocument()
    expect(getByText(/Show front side/i)).toBeInTheDocument()
    expect(queryByText(/Show back side/i)).not.toBeInTheDocument()

    fireEvent.click(getByText(/Show front side/i))

    // check content of front side of card
    expect(getByText(props.name)).toBeInTheDocument()
    expect(getByText(props.userName)).toBeInTheDocument()
    expect(queryByText(props.email)).not.toBeInTheDocument()
    expect(queryByText(props.phone)).not.toBeInTheDocument()
    expect(queryByText(props.website)).not.toBeInTheDocument()
    expect(queryByText(/Show front side/i)).not.toBeInTheDocument()
    expect(getByText(/Show back side/i)).toBeInTheDocument()
  })
})
