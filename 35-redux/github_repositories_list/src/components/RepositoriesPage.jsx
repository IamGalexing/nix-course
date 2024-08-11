import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRepositories } from '../store/actions/repositoryActions'
import { selectError, selectIsLoading, selectRepositories } from '../store/reducers/repositoryReducer'

export const RepositoriesPage = () => {
  const [username, setUsername] = useState('')

  const repositories = useSelector(selectRepositories)
  const isLoading = useSelector(selectIsLoading)
  const error = useSelector(selectError)

  const dispatch = useDispatch()

  const handleSearch = () => {
    dispatch(fetchRepositories(username))
  }

  return (
    <div>
      <input
        type="text"
        role="textbox"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter GitHub username"
      />
      <button onClick={handleSearch} type="button" role="button">
        Search
      </button>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <ul>
          {repositories.map((repo) => (
            <li key={repo.id}>{repo.full_name}</li>
          ))}
        </ul>
      )}
    </div>
  )
}
