import { BackToLibrary } from "../components/BackToLibrary";
import { FilmList } from "../components/FilmList";
import { Pagination } from "../components/Pagination";
import { Search } from "../components/Search";
import { selectFilms } from "../features/films/filmsSlice";
import { useAppSelector } from "../store";

interface SearchPageProps {
  searchValue: string;
  saveSearchValue: (value: string) => void;
}

export const SearchPage = ({
  searchValue,
  saveSearchValue,
}: SearchPageProps) => {
  const movies = useAppSelector(selectFilms);

  return (
    <>
      <Search saveSearchValue={saveSearchValue} />
      <BackToLibrary />
      <FilmList moviesList={movies?.results || []} />
      {movies?.results.length ? <Pagination searchValue={searchValue} /> : ""}
    </>
  );
};
