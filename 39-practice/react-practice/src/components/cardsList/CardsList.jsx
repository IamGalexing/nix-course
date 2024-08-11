import { StyledList } from './CardsList.styles'
import PropTypes from 'prop-types'

export const CardsList = ({ data, Card }) => {
  return (
    <StyledList>
      {data.map((cardData) => (
        <Card key={cardData.id} cardData={cardData} />
      ))}
    </StyledList>
  )
}

CardsList.propTypes = {
  data: PropTypes.array.isRequired,
  Card: PropTypes.elementType.isRequired,
}
