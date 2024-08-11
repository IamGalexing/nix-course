import { Navigation } from '../navigation'
import { Link } from 'react-router-dom'
import { StyledHeader, StyledLogo } from './styles'

export const Header = () => {
  return (
    <StyledHeader>
      <Link to="/">
        <StyledLogo />
      </Link>
      <Navigation />
    </StyledHeader>
  )
}
