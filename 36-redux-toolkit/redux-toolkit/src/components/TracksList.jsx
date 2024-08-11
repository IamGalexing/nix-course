import { useDispatch, useSelector } from 'react-redux'
import { addToFavorites, removeFromFavorites, selectAllTracks } from '../store/tracksSlice'
import { TracksItem } from './TracksItem'

export const TracksList = () => {
  const allTracks = useSelector(selectAllTracks)
  const dispatch = useDispatch()

  const handleremoveFromFavorites = (track) => {
    dispatch(removeFromFavorites(track.id))
  }

  const handleAddToFavorites = (track) => {
    dispatch(addToFavorites(track))
  }

  return (
    <>
      {allTracks.length === 0 ? (
        <p>No data</p>
      ) : (
        <ul className="tracks-list">
          {allTracks.map((track) => (
            <TracksItem
              key={track.id}
              track={track}
              addToFavorites={handleAddToFavorites}
              removeFavorites={handleremoveFromFavorites}
            />
          ))}
        </ul>
      )}
    </>
  )
}
