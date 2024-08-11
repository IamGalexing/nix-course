import { useRouteError } from 'react-router-dom'
import { StyledWrapper, StyledTitle, StyledLink } from './styles'

export const ErrorPage = () => {
  const error = useRouteError()

  return (
    <StyledWrapper>
      <StyledTitle>{error.message}</StyledTitle>
      <p>
        Go to the <StyledLink to="/">Homepage</StyledLink>
      </p>
    </StyledWrapper>
  )
}
