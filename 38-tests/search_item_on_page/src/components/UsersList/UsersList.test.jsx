import { render, screen } from '@testing-library/react'
import UsersList from './UsersList'

const MockUSERS = [
  {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
  },
  {
    id: 2,
    name: 'Patricia Lebsack',
    username: 'Karianne',
    email: 'Julianne.OConner@kory.org',
  },
  {
    id: 3,
    name: 'Patricia Lebsack',
    username: 'Lasack$777',
    email: 'Patricia_)Lebsack@kory.org',
  },
]

describe('UsersList', () => {
  beforeEach(() => {
    render(<UsersList users={MockUSERS} />)
  })

  test('user by name text must exists in the document', () => {
    const firstUser = screen.getByText('Leanne Graham')
    expect(firstUser).toBeInTheDocument()
  })

  test('user by test id must contain relevant name', () => {
    const firstUser = screen.getByTestId(/Bret/)
    expect(firstUser).toHaveTextContent('Leanne Graham')
  })

  test('find a list of users by role and check if it contains an item with the text Leanne Graham', () => {
    const userListItems = screen.getAllByRole('listitem')
    const leanneGrahamItem = userListItems.find((item) => item.textContent === 'Leanne Graham')
    expect(leanneGrahamItem).toBeInTheDocument()
  })

  test('check that the user Nikita Vlasenko is not on the list', () => {
    const nikitaVlasenko = screen.queryByText('Nikita Vlasenko')
    expect(nikitaVlasenko).not.toBeInTheDocument()
  })

  test('find all users with the name Patricia Lebsack and check that their number is 2', () => {
    const patriciaLebsackItems = screen.getAllByText('Patricia Lebsack')
    expect(patriciaLebsackItems).toHaveLength(2)
  })
})
