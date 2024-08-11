import { useLocation } from 'react-router-dom'
import { StyledCrumb, StyledLink, StyledSpan } from './styles'
import PropTypes from 'prop-types'

export const Breadcrumb = ({ name }) => {
  const location = useLocation()

  const crumbs = location.pathname.split('/').filter((crumb) => crumb !== '')

  return (
    <StyledCrumb>
      <StyledLink to={`/`}>Home</StyledLink>
      <StyledSpan>/</StyledSpan>
      <StyledLink to={`/${crumbs[0]}`}>{crumbs[0]}</StyledLink>
      <StyledSpan>/</StyledSpan>
      {name}
    </StyledCrumb>
  )
}

Breadcrumb.propTypes = {
  name: PropTypes.string.isRequired,
}
