import { combineReducers, configureStore } from "@reduxjs/toolkit";
import companySearchResultsReducer from "../reducers/companySearchResultsReducer";
import favouritesReducer from "../reducers/favouritesReducer";
import mainSearchResultsReducer from "../reducers/mainSearchResultsReducer";

const store = configureStore({
  reducer: combineReducers({
    favourites: favouritesReducer,
    mainSearch: mainSearchResultsReducer,
    companySearch: companySearchResultsReducer,
  }),
});

export default store;
