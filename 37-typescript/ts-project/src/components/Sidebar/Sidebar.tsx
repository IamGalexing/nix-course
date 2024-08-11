import { NavLink } from 'react-router-dom'
import { CutleryIcon, FavoriteActiveIcon } from '../../assets/icons'
import './sidebar.scss'

export const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <nav>
        <ul>
          <li>
            <NavLink to="/" className={({ isActive }: { isActive: boolean }) => (isActive ? 'sidebar-nav-link' : '')}>
              <CutleryIcon />
            </NavLink>
          </li>
          <li className="nav-link">
            <NavLink
              to="/favorites"
              className={({ isActive }: { isActive: boolean }) => (isActive ? 'sidebar-nav-link' : '')}
            >
              <FavoriteActiveIcon />
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}
