import { createSlice, createSelector } from '@reduxjs/toolkit';
import BOOKS from '../api/books';

const initialState = {
  data: BOOKS
};

export const wishListSlice = createSlice({
  name: 'wish-list',
  initialState,
  reducers: {
    initializeList: (state) => {
      state.isChecked = false;
    },
    checkItem: (state) => {
      state.isChecked = true;
      //how to remove from file?
    },
  },
});

export const wishListActions = wishListSlice.actions;

const rootSelector = (state) => state.wishList;

export const wishListSelectors = {
  rootSelector,
  selectBooks: createSelector(rootSelector, (state) => state.data),
};

export default wishListSlice.reducer;
