import { createSlice } from '@reduxjs/toolkit';

const initialState = {

  books: [],
  selectedGenre: null,
};

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {

    addBook(state, action) {
      state.books.push(action.payload);
    },
    setSelectedGenre(state, action) {
      state.selectedGenre = action.payload;
    },
  },
});

export const { addBook, setSelectedGenre } = bookSlice.actions;

export const selectFilteredBooks = (state) => {
  const selectedGenre = state.books.selectedGenre;
  if (!selectedGenre) {
    return state.books.books;
  }
  return state.books.books.filter(book => book.genre === selectedGenre);
};
export default bookSlice.reducer;
