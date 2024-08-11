import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

import { TableCell } from './TableCell'

describe('TableCell', () => {
  let tree
  beforeAll(() => {
    tree = (child) => (
      <table>
        <tbody>
          <tr>
            <TableCell>{child}</TableCell>
          </tr>
        </tbody>
      </table>
    )
  })

  it('should renders without crashing', () => {
    render(tree('child'))
  })

  it('should renders the correct content', () => {
    ;['hello', 'span', '234233'].forEach((element) => {
      const { getByText } = render(tree(element))
      expect(getByText(element)).toBeInTheDocument()
    })
  })
})
