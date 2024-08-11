import { useMemo } from "react";
import { selectLibraryGenres } from "../features/films/filmsSlice";
import { useAppSelector } from "../store";
import { SearchResultItem } from "../api";

interface IFilterGenresProps {
  handleFilterLibrary: (genreId: number) => void;
  selectedGenreIds: number[];
  filteredLibrary: SearchResultItem[];
}

export const FilterGenres = ({
  handleFilterLibrary,
  selectedGenreIds,
  filteredLibrary,
}: IFilterGenresProps) => {
  const libraryGenres = useAppSelector(selectLibraryGenres);

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const searchByGenreId = e.currentTarget.dataset.id;
    if (searchByGenreId) {
      handleFilterLibrary(+searchByGenreId);
    }
  };

  const filteredlibraryGenresIds = useMemo(() => {
    return [...new Set(filteredLibrary.map((film) => film.genre_ids).flat())];
  }, [filteredLibrary]);

  return (
    <div className='filter-box'>
      <h2>Your library</h2>
      <p>Filter by genre</p>
      {libraryGenres.map((genre) => (
        <button
          data-id={genre.id}
          className={`btn-genre ${
            selectedGenreIds.includes(genre.id) ? "active" : ""
          } 
          ${!filteredlibraryGenresIds.includes(genre.id) ? "disabled" : ""} 
          `}
          key={genre.id}
          onClick={handleButtonClick}
        >
          {genre.name}
        </button>
      ))}
    </div>
  );
};
