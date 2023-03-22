import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./useSlice.js";

export default configureStore({
  reducer: {
    user: userSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
