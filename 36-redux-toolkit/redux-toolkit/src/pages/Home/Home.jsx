import { Search } from '../../components/Search'
import { TracksList } from '../../components/TracksList'

export const Home = () => {
  return (
    <div className="main-content">
      <Search />
      <TracksList />
    </div>
  )
}
