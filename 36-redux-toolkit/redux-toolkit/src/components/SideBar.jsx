import { NavLink } from 'react-router-dom'

export const Sidebar = () => {
  return (
    <nav className="sidebar">
      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <NavLink className="sidebar-link" to="/">
            Home
          </NavLink>
        </li>
        <li className="sidebar-list-item">
          <NavLink className="sidebar-link" to="/favorites">
            Favorites
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
