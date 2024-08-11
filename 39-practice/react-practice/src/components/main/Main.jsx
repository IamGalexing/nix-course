import { StyledMain } from './styles'
import PropTypes from 'prop-types'

export const Main = ({ children }) => {
  return <StyledMain>{children}</StyledMain>
}

Main.propTypes = {
  children: PropTypes.node.isRequired,
}
