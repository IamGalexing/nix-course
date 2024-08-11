import PropTypes from 'prop-types'
import { CardDetailsFields } from '../cardDetailsFields'

const SpeciesDetailsInfo = [
  { title: 'Classification', key: 'classification' },
  { title: 'Designation', key: 'designation' },
  { title: 'Average height', key: 'average_height' },
  { title: 'Skin colors', key: 'skin_colors' },
  { title: 'Eye colors', key: 'eye_colors' },
  { title: 'Hair colors', key: 'hair_colors' },
  { title: 'Average lifespan', key: 'average_lifespan' },
  { title: 'Homeworld', key: 'homeworld' },
  { title: 'Language', key: 'language' },
  { title: 'People', key: 'people' },
  { title: 'Films', key: 'films' },
]

export const SpeciesDetails = ({ cardData }) => {
  return <CardDetailsFields CardInfo={SpeciesDetailsInfo} cardData={cardData} />
}

SpeciesDetails.propTypes = {
  cardData: PropTypes.shape({
    src: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    classification: PropTypes.string.isRequired,
    designation: PropTypes.string.isRequired,
    average_height: PropTypes.string.isRequired,
    skin_colors: PropTypes.string.isRequired,
    eye_colors: PropTypes.string.isRequired,
    hair_colors: PropTypes.string.isRequired,
    average_lifespan: PropTypes.string.isRequired,
    homeworld: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
      })
    ),
    language: PropTypes.string.isRequired,
    people: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
      })
    ).isRequired,
    films: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
}
