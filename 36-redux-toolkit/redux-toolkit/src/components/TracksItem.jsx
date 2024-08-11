import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { selectFavorites } from '../store/tracksSlice'

export const TracksItem = ({ track, removeFavorites, addToFavorites }) => {
  const favorites = useSelector(selectFavorites)

  return (
    <li className="tracks-item">
      <p>{track.title}</p>
      <p>{track['artist-credit'][0].name}</p>
      {favorites.some((fav) => fav.id === track.id) ? (
        <button className="tracks-btn" onClick={() => removeFavorites(track)}>
          remove from favorites
        </button>
      ) : (
        <button className="tracks-btn" onClick={() => addToFavorites(track)}>
          add to favorite
        </button>
      )}
    </li>
  )
}

TracksItem.propTypes = {
  track: PropTypes.object.isRequired,
  addToFavorites: PropTypes.func.isRequired,
  removeFavorites: PropTypes.func.isRequired,
}
