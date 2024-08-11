import { useDispatch } from "react-redux";
import { SearchResultItem } from "../api";
import {
  addToLibrary,
  removeFromLibrary,
  selectLibrary,
} from "../features/films/filmsSlice";
import { useAppSelector } from "../store";

interface FilmListProps {
  movie: SearchResultItem;
}

export const FilmItem = ({ movie }: FilmListProps) => {
  const library = useAppSelector(selectLibrary);
  const dispatch = useDispatch();

  const handleremoveFromFavorites = (movieToAdd: SearchResultItem) => {
    dispatch(removeFromLibrary(movieToAdd.id));
  };

  const handleAddToFavorites = (movieToDelete: SearchResultItem) => {
    dispatch(addToLibrary(movieToDelete));
  };

  return (
    <li className='film-item'>
      <img
        className='film-item-img'
        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
        alt=''
      />
      <h3 className='film-item-title'>{movie.original_title}</h3>
      {library.some((libraryMovie) => libraryMovie.id === movie.id) ? (
        <button
          className='tracks-btn'
          onClick={() => handleremoveFromFavorites(movie)}
        >
          -
        </button>
      ) : (
        <button
          className='tracks-btn'
          onClick={() => handleAddToFavorites(movie)}
        >
          +
        </button>
      )}
    </li>
  );
};
