import { StyledWrapper, StyledTitle, StyledLink } from './styles'

export const NotFoundPage = () => {
  return (
    <StyledWrapper>
      <StyledTitle>Page not found! 🤨</StyledTitle>
      <p>
        Go to the <StyledLink to="/">Homepage</StyledLink>
      </p>
    </StyledWrapper>
  )
}
