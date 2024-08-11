import "./App.css";
import { useEffect, useState } from "react";
import { useAppDispatch } from "./store.ts";
import {
  fetchFilmsListThunk,
  fetchGenresListThunk,
} from "./features/films/filmsSlice.ts";
import { Route, Routes } from "react-router-dom";
import { LibraryPage } from "./pages/LibraryPage.tsx";
import { SearchPage } from "./pages/SearchPage.tsx";
import { NotFoundPage } from "./pages/NotFoundPage.tsx";

function App() {
  const dispatch = useAppDispatch();
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    // getGenres().then(console.log);
    // getSearch("shrek").then((data) => {
    //   console.log(data);
    // });
    dispatch(fetchGenresListThunk());
    dispatch(fetchFilmsListThunk({ searchValue: "" }));
  }, [dispatch]);

  const saveSearchValue = (value: string) => {
    setSearchValue(value);
  };

  return (
    <div className='app-container'>
      <Routes>
        <Route
          path='/library'
          element={<LibraryPage saveSearchValue={saveSearchValue} />}
        />
        <Route
          path='/search'
          element={
            <SearchPage
              searchValue={searchValue}
              saveSearchValue={saveSearchValue}
            />
          }
        />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
