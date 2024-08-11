import PropTypes from 'prop-types'
import { CardDetailsFields } from '../cardDetailsFields'

const CharacterDetailsInfo = [
  { title: 'Height', key: 'height' },
  { title: 'Mass', key: 'mass' },
  { title: 'Hair color', key: 'hair_color' },
  { title: 'Eye color', key: 'eye_color' },
  { title: 'Birth', key: 'birth_year' },
  { title: 'Gender', key: 'gender' },
  { title: 'Homeworld', key: 'homeworld' },
  { title: 'Films', key: 'films' },
  { title: 'Species', key: 'species' },
  { title: 'Vehicles', key: 'vehicles' },
  { title: 'Starships', key: 'starships' },
  { title: 'Created', key: 'created' },
  { title: 'Edited', key: 'edited' },
]

export const CharacterDetails = ({ cardData }) => {
  return <CardDetailsFields CardInfo={CharacterDetailsInfo} cardData={cardData} />
}

CharacterDetails.propTypes = {
  cardData: PropTypes.shape({
    src: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
    mass: PropTypes.string.isRequired,
    hair_color: PropTypes.string.isRequired,
    eye_color: PropTypes.string.isRequired,
    birth_year: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    homeworld: PropTypes.arrayOf(
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
    species: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
      })
    ).isRequired,
    vehicles: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
      })
    ).isRequired,
    starships: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
      })
    ).isRequired,
    created: PropTypes.string.isRequired,
    edited: PropTypes.string.isRequired,
  }).isRequired,
}
