import { render } from '@testing-library/react'
import { PlanList } from './PlanList'
import data from '../db.json'

describe('PlanList component', () => {
  it('renders without crashing', () => {
    render(<PlanList />)
  })

  it('renders three pricing panels', () => {
    const { getAllByRole } = render(<PlanList items={data} />)
    const panels = getAllByRole('presentation')
    expect(panels).toHaveLength(3)
  })

  it('renders the correct pricing information', () => {
    const { getByText } = render(<PlanList items={data} />)
    data.forEach(({ title, price, description, explanation, items }) => {
      expect(getByText(title)).toBeInTheDocument()
      expect(getByText(price)).toBeInTheDocument()
      expect(getByText(description)).toBeInTheDocument()
      expect(getByText(explanation)).toBeInTheDocument()
      items.forEach((item) => {
        expect(getByText(item)).toBeInTheDocument()
      })
    })
  })
})
