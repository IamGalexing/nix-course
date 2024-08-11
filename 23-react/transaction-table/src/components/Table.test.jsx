import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

import { Table } from './Table'
import data from '../db.json'

describe('Table', () => {
  it('renders without crashing', () => {
    render(<Table items={data} />)
  })

  it('should renders the correct number of rows', () => {
    const { getAllByRole } = render(<Table items={data} />)
    const rows = getAllByRole('row')
    expect(rows).toHaveLength(data.length + 1)
  })

  it('should renders the correct number of cells per row', () => {
    const { getAllByRole } = render(<Table items={data} />)
    const rows = getAllByRole('row')
    rows.forEach((row) => {
      const cells = row.querySelectorAll('td')
      expect(cells).toHaveLength(7)
    })
  })
})
