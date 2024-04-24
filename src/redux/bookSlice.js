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
      console.log("Añadiendo libro:", action.payload);
      state.books.push(action.payload);
    },
    setSelectedGenre(state, action) {
      console.log('setSelectedGenre en bookReducer', action.payload)
      state.selectedGenre = action.payload;
    },
  },
});

export const { addBook, setSelectedGenre } = bookSlice.actions;

export const selectFilteredBooks = (state) => {
  const selectedGenre = state.books.selectedGenre;
  console.log("Género seleccionado (bookReducer):", selectedGenre);
  if (!selectedGenre) {
    console.log("No hay género seleccionado, devolviendo todos los libros");
    console.log(state.books)
    return state.books.books;
  }


  const filteredBooks = state.books.books.filter(book => {
    const normalizedGenre = book.genre.toLowerCase().trim();
    const normalizedSelectedGenre = selectedGenre.toLowerCase().trim();
    return normalizedGenre === normalizedSelectedGenre;
  });

  console.log("Libros filtrados:", filteredBooks);
  return filteredBooks;
};

export default bookSlice.reducer;
