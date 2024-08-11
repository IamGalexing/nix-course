import PropTypes from 'prop-types'
import { CardDetailsFields } from '../cardDetailsFields'

const PlanetDetailsInfo = [
  { title: 'Rotation period', key: 'rotation_period' },
  { title: 'Orbital period', key: 'orbital_period' },
  { title: 'Diameter', key: 'diameter' },
  { title: 'Climate', key: 'climate' },
  { title: 'Gravity', key: 'gravity' },
  { title: 'Terrain', key: 'terrain' },
  { title: 'Surface water', key: 'surface_water' },
  { title: 'Population', key: 'population' },
  { title: 'Residents', key: 'residents' },
  { title: 'Films', key: 'films' },
]

export const PlanetsDetails = ({ cardData }) => {
  return <CardDetailsFields CardInfo={PlanetDetailsInfo} cardData={cardData} />
}

PlanetsDetails.propTypes = {
  cardData: PropTypes.shape({
    src: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    rotation_period: PropTypes.string.isRequired,
    orbital_period: PropTypes.string.isRequired,
    diameter: PropTypes.string.isRequired,
    climate: PropTypes.string.isRequired,
    gravity: PropTypes.string.isRequired,
    terrain: PropTypes.string.isRequired,
    surface_water: PropTypes.string.isRequired,
    population: PropTypes.string.isRequired,
    residents: PropTypes.arrayOf(
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
