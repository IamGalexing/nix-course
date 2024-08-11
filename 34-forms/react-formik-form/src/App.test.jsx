import { render, fireEvent, cleanup } from '@testing-library/react'

import App from './App'

const submitButtonText = /Submit/i
describe('App', () => {
  let getByText, findByText, getByLabelText
  afterEach(cleanup)
  beforeEach(() => ({ getByText, findByText, getByLabelText } = render(<App />)))

  it('should display and submit the form', async () => {
    // Find form fields and input some values
    fireEvent.change(getByLabelText('Title'), { target: { value: 'Test Title' } })
    fireEvent.change(getByLabelText('Description'), { target: { value: 'Test Description' } })
    fireEvent.click(getByLabelText('Yes'))
    fireEvent.change(getByLabelText('Categories'), { target: { value: 'category1' } })
    fireEvent.change(getByLabelText('Shop'), { target: { value: 'Test Shop' } })

    // Submit the form
    fireEvent.click(getByText(submitButtonText))

    // Wait for form submission
    expect(await findByText(/Form values submitted successfully/i)).toBeInTheDocument()
  })
})

describe('Title', () => {
  let getByText, findByText, getByLabelText

  afterEach(cleanup)
  beforeEach(() => ({ getByText, findByText, getByLabelText } = render(<App />)))

  it('Check required field', async () => {
    fireEvent.click(getByText(submitButtonText))

    expect(await findByText(/Title is required/i)).toBeInTheDocument()
  })

  it('Check min length field', async () => {
    fireEvent.change(getByLabelText('Title'), { target: { value: 'T' } })

    fireEvent.click(getByText(submitButtonText))

    expect(await findByText(/Title must be at least 5 characters/i)).toBeInTheDocument()
  })
})

describe('Description', () => {
  let getByText, findByText, getByLabelText

  afterEach(cleanup)
  beforeEach(() => ({ getByText, findByText, getByLabelText } = render(<App />)))

  it('Check required field', async () => {
    fireEvent.click(getByText(submitButtonText))

    expect(await findByText(/Description is required/i)).toBeInTheDocument()
  })

  it('Check min length field', async () => {
    fireEvent.change(getByLabelText('Description'), { target: { value: 'T' } })

    fireEvent.click(getByText(submitButtonText))

    expect(await findByText(/Description must have at least 5 characters/i)).toBeInTheDocument()
  })
})

describe('Category', () => {
  let getByText, findByText

  afterEach(cleanup)
  beforeEach(() => ({ getByText, findByText } = render(<App />)))

  it('Check required field', async () => {
    fireEvent.click(getByText(submitButtonText))

    expect(await findByText(/Please select a category/i)).toBeInTheDocument()
  })
})

describe('Shop', () => {
  let getByText, findByText, getByLabelText

  afterEach(cleanup)
  beforeEach(() => ({ getByText, findByText, getByLabelText } = render(<App />)))

  it('Check required field', async () => {
    fireEvent.click(getByText(submitButtonText))

    expect(await findByText(/Shop is required/i)).toBeInTheDocument()
  })

  it('Check min length field', async () => {
    fireEvent.change(getByLabelText('Shop'), { target: { value: 'T' } })

    fireEvent.click(getByText(submitButtonText))

    expect(await findByText(/Shop name must be at least 5 characters/i)).toBeInTheDocument()
  })
})
