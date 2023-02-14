import { combineReducers, configureStore } from "@reduxjs/toolkit";
import companySearchResultsReducer from "../reducers/companySearchResultsReducer";
import favouritesReducer from "../reducers/favouritesReducer";
import mainSearchResultsReducer from "../reducers/mainSearchResultsReducer";
import { persistStore, persistReducer } from "redux-persist";
import localStorage from "redux-persist/lib/storage"; // default value: localStorage
import { encryptTransform } from "redux-persist-transform-encrypt";

const persistConfig = {
  storage: localStorage,
  key: "root",
  transforms: [
    encryptTransform({
      secretKey: process.env.REACT_APP_SECRET_KEY,
    }),
  ],
};

const combinedReducer = combineReducers({
  favourites: favouritesReducer,
  mainSearch: mainSearchResultsReducer,
  companySearch: companySearchResultsReducer,
});

const persistedReducer = persistReducer(persistConfig, combinedReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false,
    });
  },
});

const persistedStore = persistStore(store);

export { store, persistedStore };
