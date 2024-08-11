import Characters from '../../assets/characters.svg?react'
import Episodes from '../../assets/episodes.svg?react'
import Planets from '../../assets/planets.svg?react'
import Species from '../../assets/species.svg?react'
import Starships from '../../assets/starships.svg?react'
import Vehicles from '../../assets/vehicles.svg?react'
import { ROUTES } from '../../routes'
import { StyledList, StyledNavLink } from './styles'

const navItems = [
  { path: ROUTES.EPISODES, icon: Episodes, label: 'Episodes' },
  { path: ROUTES.CHARACTERS, icon: Characters, label: 'Characters' },
  { path: ROUTES.PLANETS, icon: Planets, label: 'Planets' },
  { path: ROUTES.SPECIES, icon: Species, label: 'Species' },
  { path: ROUTES.VEHICLES, icon: Vehicles, label: 'Vehicles' },
  { path: ROUTES.STARSHIPS, icon: Starships, label: 'Starships' },
]

export const Navigation = () => {
  return (
    <StyledList>
      {navItems.map((item) => (
        <li key={item.label}>
          <StyledNavLink to={item.path} end>
            <item.icon />
            <span>{item.label}</span>
          </StyledNavLink>
        </li>
      ))}
    </StyledList>
  )
}
