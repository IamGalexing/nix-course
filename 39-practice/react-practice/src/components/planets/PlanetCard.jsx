import PropTypes from 'prop-types'
import { CardField } from '../cardFields'

const PlanetsCardInfo = [
  { title: 'Climate', key: 'climate' },
  { title: 'Terrain', key: 'terrain' },
  { title: 'Population', key: 'population' },
]

export const PlanetCard = ({ cardData }) => {
  return <CardField CardInfo={PlanetsCardInfo} cardData={cardData} />
}

PlanetCard.propTypes = {
  cardData: PropTypes.shape({
    id: PropTypes.number.isRequired,
    src: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    climate: PropTypes.string.isRequired,
    terrain: PropTypes.string.isRequired,
    population: PropTypes.string.isRequired,
  }).isRequired,
}
