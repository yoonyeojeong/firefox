import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userSlice from "./userSlice.js";
import paypriceSlice from "./paypriceSlice";
import seatNumReducer from "./seatNumSlice";

const rootReducer = combineReducers({
  seatNum: seatNumReducer,
});

export default configureStore({
  reducer: {
    user: userSlice,
    pay: paypriceSlice,
    reducer1: rootReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
