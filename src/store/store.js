import { configureStore } from "@reduxjs/toolkit";
import { bookReducer } from "./reducer/bookReducer";

export default configureStore({
  reducer: {
    books: bookReducer,
  },
});
