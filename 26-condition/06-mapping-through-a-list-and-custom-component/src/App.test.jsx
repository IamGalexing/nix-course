import { render } from '@testing-library/react'
import App from './App'
import { User } from './components/User'

const FILTERED_DATA = [
  {
    name: 'Creola Katherine Johnson',
    city: 'London',
    profession: 'mathematician',
  },
  {
    name: 'Mohammad Abdus Salam',
    city: 'London',
    profession: 'physicist',
  },
  {
    name: 'Gomer Simpson',
    city: 'London',
    profession: 'engineer',
  },
]

describe('Filtered list', () => {
  it('Render list of all filtered names', () => {
    const { getAllByText } = render(<App />)
    const allNames = getAllByText(/user name/i)

    // check all name values of every user
    allNames.forEach((user, index) => {
      expect(user.textContent).toBe(`User name: ${FILTERED_DATA[index].name}`)
    })
    expect(allNames).toHaveLength(3)
  })

  it('Render list of all filtered cities', () => {
    const { getAllByText } = render(<App />)
    const allCities = getAllByText(/user city/i)

    // check all city values of every user
    allCities.forEach((user, index) => {
      expect(user.textContent).toBe(`User city: ${FILTERED_DATA[index].city}`)
    })
    expect(allCities).toHaveLength(3)
  })

  it('Render list of all filtered cities', () => {
    const { getAllByText } = render(<App />)
    const allProfessions = getAllByText(/user profession/i)

    // check all professions values of every user
    allProfessions.forEach((user, index) => {
      expect(user.textContent).toBe(`User profession: ${FILTERED_DATA[index].profession}`)
    })
    expect(allProfessions).toHaveLength(3)
  })
})

describe('User component', () => {
  const mockProps = {
    name: 'Test name',
    profession: 'Test profession',
    city: 'Test city',
  }
  test('Component must have name', () => {
    const { getByText } = render(<User {...mockProps} />)

    expect(getByText(`User name: ${mockProps.name}`)).toBeInTheDocument()
  })

  test('Component must have profession', () => {
    const { getByText } = render(<User {...mockProps} />)

    expect(getByText(`User profession: ${mockProps.profession}`)).toBeInTheDocument()
  })

  test('Component must have city', () => {
    const { getByText } = render(<User {...mockProps} />)

    expect(getByText(`User city: ${mockProps.city}`)).toBeInTheDocument()
  })
})
