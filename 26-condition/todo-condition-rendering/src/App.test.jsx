import { render } from '@testing-library/react'
import { fireEvent } from '@testing-library/react'
import { DUMMY_DATA } from './constants/dummy_data'
import App from './App'

describe('Filtration', () => {
  test('Filtration with default filter value', () => {
    const { queryByText } = render(<App />)

    expect(queryByText('List of data is empty please change filter param')).toBeInTheDocument()
    DUMMY_DATA.forEach((title) => {
      expect(queryByText(title)).not.toBeInTheDocument()
    })
  })

  test('List of item has value when active filter option value isn`t empty', () => {
    const selectedOption = 'outdoors'
    const { getByTestId, getAllByTestId, getByText } = render(<App />)

    fireEvent.change(getByTestId('filter-select'), { target: { value: selectedOption } })
    expect(getByText(selectedOption).selected).toBeTruthy()

    const cardCategories = getAllByTestId('card-categories')

    cardCategories.forEach((card) => {
      expect(card.textContent.includes(selectedOption)).toBe(true)
    })
  })

  test('List of item doesn`t have value when active filter option value is empty', () => {
    const selectedOption = 'empty'
    const { getByTestId, queryAllByTestId, getByText } = render(<App />)

    fireEvent.change(getByTestId('filter-select'), { target: { value: selectedOption } })
    expect(getByText(selectedOption).selected).toBeTruthy()

    expect(queryAllByTestId('card-item')).toHaveLength(0)
  })

  test('List of item has value when active select is Tools', () => {
    const selectedOption = 'tools'
    const { getByTestId, getAllByTestId, getByText } = render(<App />)

    fireEvent.change(getByTestId('filter-select'), { target: { value: selectedOption } })
    expect(getByText(selectedOption).selected).toBeTruthy()

    expect(getAllByTestId('card-item')).toHaveLength(3)
  })

  test('List of item has value when active select is Films', () => {
    const selectedOption = 'films'
    const { getByTestId, getAllByTestId, getByText } = render(<App />)

    fireEvent.change(getByTestId('filter-select'), { target: { value: selectedOption } })
    expect(getByText(selectedOption).selected).toBeTruthy()

    expect(getAllByTestId('card-item')).toHaveLength(2)
  })

  test('Empty message appears if list of item is empty', () => {
    const selectedOption = 'empty'
    const { getByTestId, getByText } = render(<App />)

    fireEvent.change(getByTestId('filter-select'), { target: { value: selectedOption } })
    expect(getByText(selectedOption).selected).toBeTruthy()

    expect(getByText('List of data is empty please change filter param')).toBeInTheDocument()
  })

  test('Empty message appears with text', () => {
    const selectedOption = 'empty'
    const { getByTestId, getByText } = render(<App />)

    fireEvent.change(getByTestId('filter-select'), { target: { value: selectedOption } })
    expect(getByText(selectedOption).selected).toBeTruthy()

    expect(getByText('List of data is empty please change filter param')).toBeInTheDocument()
  })
})

describe('Sorting', () => {
  test('Change order of list item when select price option', () => {
    const selectedOption = 'outdoors'
    const { getByTestId, getByText, getAllByTestId } = render(<App />)

    fireEvent.change(getByTestId('filter-select'), { target: { value: selectedOption } })
    expect(getByText(selectedOption).selected).toBeTruthy()

    fireEvent.change(getByTestId('sort-select'), { target: { value: 'price' } })

    const allPrices = getAllByTestId('card-price')

    expect(allPrices).toHaveLength(6)

    allPrices.forEach((price, index) => {
      if (index + 1 <= allPrices.length - 1) {
        expect(+price.innerHTML).toBeLessThan(+allPrices[index + 1].innerHTML)
      }
    })
  })

  test('Change order of list item when select price option', () => {
    const selectedOption = 'outdoors'
    const { getByTestId, getByText, getAllByTestId } = render(<App />)

    fireEvent.change(getByTestId('filter-select'), { target: { value: selectedOption } })
    expect(getByText(selectedOption).selected).toBeTruthy()

    fireEvent.change(getByTestId('sort-select'), { target: { value: 'rating' } })

    const allSortedCard = getAllByTestId('card-rating')

    expect(allSortedCard).toHaveLength(6)

    allSortedCard.forEach((price, index) => {
      if (index + 1 <= allSortedCard.length - 1) {
        expect(+price.innerHTML).toBeLessThan(+allSortedCard[index + 1].innerHTML)
      }
    })
  })
})
