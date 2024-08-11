import { ROUTES } from '../../routes'
import { FooterWrapper, StyledList, StyledLink } from './styles'

export const Footer = () => {
  return (
    <FooterWrapper>
      <span>&copy; 2024 Oleksandr Gneushev</span>
      <StyledList>
        <li>
          <StyledLink to={ROUTES.PEOPLE}>
            <span>Help</span>
          </StyledLink>
        </li>
        <li>
          <StyledLink to={ROUTES.PEOPLE}>
            <span>Contacts</span>
          </StyledLink>
        </li>
      </StyledList>
    </FooterWrapper>
  )
}
