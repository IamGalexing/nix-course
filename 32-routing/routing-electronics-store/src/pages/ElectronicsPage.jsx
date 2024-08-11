import { Link, Outlet } from 'react-router-dom'

export const ElectronicsPage = () => {
  return (
    <div className="electronics-page">
      <h2 className="content-title">Electronics page</h2>
      <ul className="electronics-list">
        <li className="electronics-list-item">
          <Link className="electronics-link" to="telephones">
            telephones
          </Link>
        </li>
        <li className="electronics-list-item">
          <Link className="electronics-link" to="laptops">
            laptops
          </Link>
        </li>
      </ul>

      <Outlet />
    </div>
  )
}
