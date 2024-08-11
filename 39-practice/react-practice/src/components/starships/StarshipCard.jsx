import PropTypes from 'prop-types'
import { CardField } from '../cardFields'

const StarshipCardInfo = [
  { title: 'Model', key: 'model' },
  { title: 'Manufacturer', key: 'manufacturer' },
  { title: 'Cost in credits', key: 'cost_in_credits' },
]

export const StarshipCard = ({ cardData }) => {
  return <CardField CardInfo={StarshipCardInfo} cardData={cardData} />
}

StarshipCard.propTypes = {
  cardData: PropTypes.shape({
    id: PropTypes.number.isRequired,
    src: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    manufacturer: PropTypes.string.isRequired,
    cost_in_credits: PropTypes.number,
  }).isRequired,
}
