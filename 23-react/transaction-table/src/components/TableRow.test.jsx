import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

import data from '../db.json'
import { TableRow } from './TableRow'

describe('TableRow', () => {
  let tree, item
  beforeAll(() => {
    item = data[1]
    tree = (
      <table>
        <tbody>
          <TableRow columns={item} />
        </tbody>
      </table>
    )
  })

  it('should renders without crashing', () => {
    render(tree)
  })

  it('should renders the correct item data', () => {
    const { getByText } = render(tree)
    expect(getByText(item.id)).toBeInTheDocument()
    expect(getByText(item.company)).toBeInTheDocument()
    expect(getByText(item.share)).toBeInTheDocument()
    expect(getByText(item.price)).toBeInTheDocument()
    expect(getByText(item.quantity)).toBeInTheDocument()
    expect(getByText(item.amount)).toBeInTheDocument()
  })
})
