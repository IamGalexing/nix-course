import { navigations } from '../constants'
import { NavItem } from './NavItem'
import { v4 as uuidv4 } from 'uuid'

export const NavList = () => {
  return (
    <nav className="nav">
      <ul className="nav-menu">
        {navigations.map((navigation) => (
          <NavItem key={uuidv4()} navigation={navigation} />
        ))}
      </ul>
    </nav>
  )
}
