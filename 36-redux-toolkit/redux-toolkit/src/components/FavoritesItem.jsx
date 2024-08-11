import PropTypes from 'prop-types'

export const FavoritesItem = ({ track, handleRemoveFavorite }) => {
  return (
    <li className="tracks-item">
      <p>{track.title}</p>
      <p>{track['artist-credit'][0].name}</p>
      <button className="tracks-btn" onClick={() => handleRemoveFavorite(track.id)}>
        remove from favorites
      </button>
    </li>
  )
}

FavoritesItem.propTypes = {
  track: PropTypes.object.isRequired,
  handleRemoveFavorite: PropTypes.func.isRequired,
}
