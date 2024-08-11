import PropTypes from 'prop-types'
import { CardDetailsFields } from '../cardDetailsFields'

const VehicleDetailsInfo = [
  { title: 'Model', key: 'model' },
  { title: 'Manufacturer', key: 'manufacturer' },
  { title: 'Cost in credits', key: 'cost_in_credits' },
  { title: 'Length', key: 'length' },
  { title: 'Max. atm. speed', key: 'max_atmosphering_speed' },
  { title: 'Crew', key: 'crew' },
  { title: 'Passengers', key: 'passengers' },
  { title: 'Cargo capacity', key: 'cargo_capacity' },
  { title: 'Consumables', key: 'consumables' },
  { title: 'Vehicle class', key: 'vehicle_class' },
  { title: 'Pilots', key: 'pilots' },
]

export const VehiclesDetails = ({ cardData }) => {
  return <CardDetailsFields CardInfo={VehicleDetailsInfo} cardData={cardData} />
}

VehiclesDetails.propTypes = {
  cardData: PropTypes.shape({
    image: PropTypes.string.isRequired,
    vehicle_name: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    manufacturer: PropTypes.string.isRequired,
    cost_in_credits: PropTypes.number.isRequired,
    length: PropTypes.number.isRequired,
    max_atmosphere_speed: PropTypes.number.isRequired,
    crew: PropTypes.number.isRequired,
    passengers: PropTypes.number.isRequired,
    cargo_capacity: PropTypes.number.isRequired,
    consumables: PropTypes.string.isRequired,
    vehicle_class: PropTypes.number.isRequired,
    pilots: PropTypes.number.isRequired,
  }).isRequired,
}
