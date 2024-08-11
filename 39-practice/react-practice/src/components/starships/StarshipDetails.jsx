import PropTypes from 'prop-types'
import { CardDetailsFields } from '../cardDetailsFields'

const StarshipsDetailsInfo = [
  { title: 'Model', key: 'model' },
  { title: 'Manufacturer', key: 'manufacturer' },
  { title: 'Cost in credits', key: 'cost_in_credits' },
  { title: 'Length', key: 'length' },
  { title: 'Max. atm. speed', key: 'max_atmosphering_speed' },
  { title: 'Crew', key: 'crew' },
  { title: 'Passengers', key: 'passengers' },
  { title: 'Cargo capacity', key: 'cargo_capacity' },
  { title: 'Consumables', key: 'consumables' },
  { title: 'Hyperdrive rating', key: 'hyperdrive_rating' },
  { title: 'MGLT', key: 'MGLT' },
  { title: 'Starship class', key: 'starship_class' },
  { title: 'Pilots', key: 'pilots' },
]

export const StarshipsDetails = ({ cardData }) => {
  return <CardDetailsFields CardInfo={StarshipsDetailsInfo} cardData={cardData} />
}

StarshipsDetails.propTypes = {
  cardData: PropTypes.shape({
    src: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    manufacturer: PropTypes.string.isRequired,
    cost_in_credits: PropTypes.number,
    length: PropTypes.string.isRequired,
    max_atmosphering_speed: PropTypes.string.isRequired,
    crew: PropTypes.string.isRequired,
    passengers: PropTypes.string.isRequired,
    cargo_capacity: PropTypes.string.isRequired,
    consumables: PropTypes.string.isRequired,
    hyperdrive_rating: PropTypes.string.isRequired,
    MGLT: PropTypes.string.isRequired,
    starship_class: PropTypes.string.isRequired,
    pilots: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
}
