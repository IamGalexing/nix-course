import PropTypes from 'prop-types'

const UsersList = ({ users }) => {
  return (
    <div className="App">
      <div>Users:</div>
      {users.length ? (
        <ul data-testid="user-list">
          {users.map((user) => (
            <li key={user.id} className="user" data-testid="user-item">
              <span data-testid={`user-list-${user.username}`}>{user.name}</span>
            </li>
          ))}
        </ul>
      ) : (
        <div>Loading users...</div>
      )}
    </div>
  )
}

UsersList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
    })
  ).isRequired,
}

export default UsersList
