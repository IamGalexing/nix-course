import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

export const Sidebar = ({ isAuth, setIsAuth }) => {
  return (
    <nav className="sidebar">
      <button className="login-button" onClick={setIsAuth}>
        {isAuth ? 'logout' : 'login'}
      </button>
      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <NavLink className="sidebar-link" to="/">
            Home
          </NavLink>
        </li>
        <li className="sidebar-list-item">
          <NavLink className="sidebar-link" to="/contacts">
            Contacts
          </NavLink>
        </li>
        <li className="sidebar-list-item">
          <NavLink className="sidebar-link" to="/electronics">
            Electronics
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

Sidebar.propTypes = {
  isAuth: PropTypes.bool.isRequired,
  setIsAuth: PropTypes.func.isRequired,
}
