import PropTypes from 'prop-types'
import { CardField } from '../cardFields'

const VehicleCardInfo = [
  { title: 'Model', key: 'model' },
  { title: 'Manufacturer', key: 'manufacturer' },
  { title: 'Cost in credits', key: 'cost_in_credits' },
]

export const VehicleCard = ({ cardData }) => {
  return <CardField CardInfo={VehicleCardInfo} cardData={cardData} />
}

VehicleCard.propTypes = {
  cardData: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    vehicle_name: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    manufacturer: PropTypes.string.isRequired,
    cost_in_credits: PropTypes.number.isRequired,
  }),
}
