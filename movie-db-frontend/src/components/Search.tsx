import { fetchFilmsListThunk } from "../features/films/filmsSlice";
import { useAppDispatch } from "../store";
import { useNavigate } from "react-router-dom";
import { KeyboardEvent } from "react";

interface IProps {
  saveSearchValue: (value: string) => void;
}

export const Search = (props: IProps) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const target = e.target as HTMLInputElement;
      const searchValue = target.value;
      dispatch(fetchFilmsListThunk({ searchValue }));
      props.saveSearchValue(searchValue);
      navigate("/search");
    }
  };

  return (
    <div className='search'>
      <input className='search-input' type='text' onKeyDown={handleKeyDown} />
    </div>
  );
};
