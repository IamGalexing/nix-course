import { CardField } from '../cardFields'
import PropTypes from 'prop-types'

const EpisodeCardInfo = [
  { title: 'Episode', key: 'id' },
  { title: 'Director', key: 'director' },
  { title: 'Producer', key: 'producer' },
  { title: 'Release date', key: 'release_date' },
]

export const EpisodeCard = ({ cardData }) => {
  return <CardField CardInfo={EpisodeCardInfo} cardData={cardData} />
}

EpisodeCard.propTypes = {
  cardData: PropTypes.shape({
    id: PropTypes.number.isRequired,
    src: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
    producer: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
  }).isRequired,
}
