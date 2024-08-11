import { formatAddress } from '../utils'

describe('formatAddress', () => {
  it('must return the correct formatted string', () => {
    const address = {
      city: 'Gwenborough',
      street: 'Kulas Light',
      suite: 'Apt. 556',
      zipcode: '92998-3874',
    }

    const result = formatAddress(address)
    expect(result).toBe(
      'This user lives in the city of Gwenborough on Kulas Light street in the house Apt. 556. Him zipcode is 92998-3874'
    )
  })
})
