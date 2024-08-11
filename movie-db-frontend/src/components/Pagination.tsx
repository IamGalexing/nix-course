import { useEffect, useState } from "react";
import { fetchFilmsListThunk, selectFilms } from "../features/films/filmsSlice";
import { useAppDispatch, useAppSelector } from "../store";

interface IProps {
  searchValue: string;
}

type PaginatorItem = number | "...";

const paginatorLength = 8;

const calcItems = (pages: number, selected: number): Array<PaginatorItem> => {
  const items: number[] = [];

  for (let i = 0; i < pages; i++) {
    items.push(i + 1);
  }

  if (pages < paginatorLength) {
    return items;
  }

  if (selected < paginatorLength - 2) {
    return [...items.slice(0, paginatorLength - 2), "...", pages];
  } else if (pages - paginatorLength + 2 < selected) {
    return [1, "...", ...items.slice(-paginatorLength + 2)];
  }

  const from = selected - paginatorLength / 2 + 2;
  const to = selected + paginatorLength / 2 - 2;
  return [1, "...", ...items.slice(from, to), "...", pages];
};

export const Pagination = (props: IProps) => {
  const movies = useAppSelector(selectFilms);
  const [items, setItems] = useState<PaginatorItem[]>([]);
  const [selected, onPageSelected] = useState<number>(1);

  const dispatch = useAppDispatch();

  useEffect(() => {
    onPageSelected(selected);
  }, [selected, onPageSelected]);

  useEffect(() => {
    if (movies) setItems(calcItems(movies.total_pages, selected));
  }, [selected, movies]);

  const handlePageClick = (pageSelected: number) => {
    dispatch(
      fetchFilmsListThunk({
        searchValue: props.searchValue,
        page: pageSelected,
      })
    );
  };

  const onPrev = () => {
    if (selected > 1) {
      const pageSelected = selected - 1;
      handlePageClick(pageSelected);
      onPageSelected(pageSelected);
    }
  };

  const onNext = () => {
    if (movies && selected < movies.total_pages) {
      const pageSelected = selected + 1;

      handlePageClick(pageSelected);
      onPageSelected(pageSelected);
    }
  };

  const select = (value: PaginatorItem) => {
    if (value !== "...") {
      handlePageClick(value);
      onPageSelected(value);
    }
  };

  return (
    <div className='pagination'>
      <button onClick={onPrev} aria-label='previous' className='pagination-btn'>
        {"<"}
      </button>
      <div>
        {items.map((item, index) => (
          <button
            key={index}
            onClick={() => select(item)}
            aria-label={`page ${item}`}
            role='button'
            className={`pagination-btn ${selected === item ? "active" : ""}`}
          >
            {item}
          </button>
        ))}
      </div>
      <button onClick={onNext} aria-label='next' className='pagination-btn'>
        {">"}
      </button>
    </div>
  );
};
