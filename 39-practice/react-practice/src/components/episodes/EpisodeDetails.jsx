import PropTypes from 'prop-types'
import { CardDetailsFields } from '../cardDetailsFields'

const EpisodeDetailsInfo = [
  { title: 'Episode', key: 'id' },
  { title: 'Director', key: 'director' },
  { title: 'Producer', key: 'producer' },
  { title: 'Release date', key: 'release_date' },
  { title: 'Characters', key: 'characters' },
  { title: 'Planets', key: 'planets' },
  { title: 'Starships', key: 'starships' },
  { title: 'Vehicles', key: 'vehicles' },
  { title: 'Species', key: 'species' },
  { title: 'Created', key: 'created' },
  { title: 'Edited', key: 'edited' },
  { title: '', key: 'opening_crawl' },
]

export const EpisodeDetails = ({ cardData }) => {
  return <CardDetailsFields CardInfo={EpisodeDetailsInfo} cardData={cardData} />
}

EpisodeDetails.propTypes = {
  cardData: PropTypes.shape({
    src: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    director: PropTypes.string.isRequired,
    producer: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    characters: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
      })
    ).isRequired,
    planets: PropTypes.arrayOf(
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
    vehicles: PropTypes.arrayOf(
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
    created: PropTypes.string.isRequired,
    edited: PropTypes.string.isRequired,
    opening_crawl: PropTypes.string.isRequired,
  }).isRequired,
}
