import { FilmList } from "../components/FilmList";
import { FilterGenres } from "../components/FilterGenres";
import { Search } from "../components/Search";
import { useAppSelector } from "../store";
import { selectLibrary } from "../features/films/filmsSlice";
import { useEffect, useState } from "react";
import { SearchResultItem } from "../api";

interface LibraryPageProps {
  saveSearchValue: (value: string) => void;
}

export const LibraryPage = ({ saveSearchValue }: LibraryPageProps) => {
  const library = useAppSelector(selectLibrary);
  const [filteredLibrary, setFilteredLibrary] = useState<SearchResultItem[]>(
    []
  );
  const [genreIdFilter, setGenreIdFilter] = useState<number[]>([]);

  useEffect(() => {
    setFilteredLibrary(library);
  }, [library]);

  const handleFilterLibrary = (genreId: number) => {
    if (genreIdFilter.includes(genreId)) {
      const genresIds = genreIdFilter.filter((id) => id !== genreId);

      if (!genresIds.length) {
        setFilteredLibrary(library);
        setGenreIdFilter([]);
      } else {
        const filteredLibrary = library.filter((movie) =>
          genresIds.every((currentGenreId) =>
            movie.genre_ids.includes(currentGenreId)
          )
        );
        setFilteredLibrary(filteredLibrary);
        setGenreIdFilter(genresIds);
      }
    } else {
      const filtered = filteredLibrary.filter((movie) =>
        movie.genre_ids.includes(genreId)
      );
      setFilteredLibrary(filtered);
      setGenreIdFilter((prev) => [...prev, genreId]);
    }
  };

  return (
    <>
      <Search saveSearchValue={saveSearchValue} />
      <FilterGenres
        handleFilterLibrary={handleFilterLibrary}
        selectedGenreIds={genreIdFilter}
        filteredLibrary={filteredLibrary}
      />
      <FilmList moviesList={filteredLibrary} />
    </>
  );
};
