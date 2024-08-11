import {
  createSlice,
  createAsyncThunk,
  createSelector,
} from "@reduxjs/toolkit";
import {
  Genre,
  SearchResult,
  SearchResultItem,
  getGenres,
  getSearch,
} from "../../api";
import { RootState } from "../../store.ts";

interface FilmsState {
  films: SearchResult | null;
  genres: Genre[];
  library: SearchResultItem[] | [];
}

const initialState: FilmsState = {
  films: null,
  genres: [],
  library: [],
};

export const fetchFilmsListThunk = createAsyncThunk(
  "filmsList/fetchFilmsListThunk",
  async ({ searchValue, page }: { searchValue: string; page?: number }) => {
    return await getSearch(searchValue, page);
  }
);
export const fetchGenresListThunk = createAsyncThunk(
  "genresList/fetchGenresListThunk",
  async () => {
    return await getGenres();
  }
);

export const filmsSlice = createSlice({
  name: "films",
  initialState,
  reducers: {
    addToLibrary: (state, action) => {
      state.library = [...state.library, action.payload];
    },
    removeFromLibrary: (state, action) => {
      state.library = state.library.filter(
        (movie) => movie.id !== action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchFilmsListThunk.fulfilled, (state, action) => {
      state.films = action.payload;
    });
    builder.addCase(fetchGenresListThunk.fulfilled, (state, action) => {
      state.genres = action.payload;
    });
  },
});

export const selectFilms = (state: RootState) => state?.films?.films;
export const selectGenres = (state: RootState) => state.films.genres;
export const selectLibrary = (state: RootState) => state.films.library;

export const { addToLibrary, removeFromLibrary } = filmsSlice.actions;

export const selectLibraryGenres = createSelector(
  [selectGenres, selectLibrary],
  (genres, library) => {
    const libraryGenresIds = [
      ...new Set(library.map((film) => film.genre_ids).flat()),
    ];
    const libraryGenres: Genre[] = genres.filter((genre) =>
      libraryGenresIds.includes(genre.id)
    );

    return libraryGenres;
  }
);
