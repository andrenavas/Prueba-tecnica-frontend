import { configureStore } from '@reduxjs/toolkit';

import bookSlice from './bookSlice.js';

const store = configureStore({
  reducer: {
    books: bookSlice,
  },
});


export default store;