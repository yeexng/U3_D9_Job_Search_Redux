import { combineReducers, configureStore } from "@reduxjs/toolkit";
import companyReducer from "../reducers/companyReducer";
import favouriteReducer from "../reducers/favouriteReducer";

const store = configureStore({
  reducer: combineReducers({
    favourites: favouriteReducer,
    company: companyReducer,
  }),
});

export default store;
