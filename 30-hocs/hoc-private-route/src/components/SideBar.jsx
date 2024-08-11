import { Link } from 'react-router-dom'

const SideBar = () => {
  return (
    <nav className="sidebar">
      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <Link className="sidebar-link" to="/">
            Home
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link className="sidebar-link" to="/private">
            Private
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default SideBar
