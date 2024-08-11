import PropTypes from 'prop-types'
import { CardField } from '../cardFields'

const SpeciesCardInfo = [
  { title: 'Classification', key: 'classification' },
  { title: 'Designation', key: 'designation' },
]

export const SpeciesCard = ({ cardData }) => {
  return <CardField CardInfo={SpeciesCardInfo} cardData={cardData} />
}

SpeciesCard.propTypes = {
  cardData: PropTypes.shape({
    id: PropTypes.number.isRequired,
    src: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    classification: PropTypes.string.isRequired,
    designation: PropTypes.string.isRequired,
  }).isRequired,
}
