import { StyledPageHeader, StyledWrapper } from './styles'
import PropTypes from 'prop-types'

export const Title = ({ text, children }) => {
  return (
    <>
      <StyledWrapper>
        <StyledPageHeader>{text}</StyledPageHeader>
        {children}
      </StyledWrapper>
    </>
  )
}

Title.propTypes = {
  text: PropTypes.string.isRequired,
  children: PropTypes.node,
}
