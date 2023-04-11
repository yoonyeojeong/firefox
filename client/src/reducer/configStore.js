import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userSlice from "./userSlice.js";
import paypriceSlice from "./paypriceSlice";
import { AuthReducer } from "./AuthReducer";
import seatNumReducer from "./seatNumSlice";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage: storage,
};

const rootReducer = combineReducers({
  user: userSlice,
  pay: paypriceSlice,
  Auth: AuthReducer,
  seatNum: seatNumReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
