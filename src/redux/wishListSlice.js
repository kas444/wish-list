import { createSlice, createSelector } from '@reduxjs/toolkit';
import BOOKS from '../api/books';

const initialState = {
  data: BOOKS,
  activeBooks: []
};

export const wishListSlice = createSlice({
  name: 'wish-list',
  initialState,
  reducers: {
    initializeList: (state) => {
      state.activeBooks = state.data.filter(book => book.active === true);
    },
  },
});

export const wishListActions = wishListSlice.actions;

const rootSelector = (state) => state.wishList;

export const wishListSelectors = {
  rootSelector,
  selectActiveBooks: createSelector(rootSelector, (state) => state.activeBooks),
  selectBook: createSelector(
    rootSelector,
    (_, bookId) => bookId,
    (state, bookId) => state.data.find(book => book.id === bookId),
  ),
};

export default wishListSlice.reducer;
