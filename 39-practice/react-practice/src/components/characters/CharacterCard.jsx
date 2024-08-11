import PropTypes from 'prop-types'
import { CardField } from '../cardFields'

const CharacterCardInfo = [
  { title: 'Birth', key: 'birth_year' },
  { title: 'Gender', key: 'gender' },
]

export const CharacterCard = ({ cardData }) => {
  return <CardField CardInfo={CharacterCardInfo} cardData={cardData} />
}

CharacterCard.propTypes = {
  cardData: PropTypes.shape({
    id: PropTypes.number.isRequired,
    src: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    birth_year: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
  }).isRequired,
}
