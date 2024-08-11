import { FilmItem } from "./FilmItem.tsx";
import { v4 as uuidv4 } from "uuid";
import { SearchResultItem } from "../api/interfaces.ts";

interface IFilmListProps {
  moviesList: SearchResultItem[];
}

export const FilmList = (props: IFilmListProps) => {
  return (
    <ul className='film-list'>
      {props.moviesList.map((movie) => {
        return <FilmItem key={uuidv4()} movie={movie} />;
      })}
    </ul>
  );
};
