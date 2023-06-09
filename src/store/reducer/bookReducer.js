import { createReducer } from "@reduxjs/toolkit";
import { addBook, deleteBook } from "../action/bookAction";
const initialSatate = {
  books: [],
};
export const bookReducer = createReducer(initialSatate, (builder) => {
  builder
    .addCase(addBook, (state, action) => {
      state.books.push(action.payload);
    })
    .addCase(deleteBook, (state, action) => {
      state.books = state.books.filter((book) => book.id !== action.payload);
    });
});
