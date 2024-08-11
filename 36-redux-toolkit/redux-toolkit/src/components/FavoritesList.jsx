import { useDispatch, useSelector } from 'react-redux'
import { FavoritesItem } from './FavoritesItem'
import { removeFromFavorites, selectFavorites } from '../store/tracksSlice'

export const FavoritesList = () => {
  const favorites = useSelector(selectFavorites)
  const dispatch = useDispatch()

  const handleRemoveFavorite = (trackId) => {
    dispatch(removeFromFavorites(trackId))
  }

  return (
    <>
      {favorites.length === 0 ? (
        <p>No data</p>
      ) : (
        <ul className="tracks-list">
          {favorites.map((track) => (
            <FavoritesItem key={track.id} track={track} handleRemoveFavorite={handleRemoveFavorite} />
          ))}
        </ul>
      )}
    </>
  )
}
