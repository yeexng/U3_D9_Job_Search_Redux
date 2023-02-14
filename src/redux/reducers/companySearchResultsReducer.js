import {
  GET_JOBS_BY_COMPANY,
  GET_JOBS_ERROR,
  GET_JOBS_LOADING,
} from "../actions";

const initialState = {
  companyResults: [],
};

const companySearchResultsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_JOBS_BY_COMPANY:
      return {
        ...state,
        companyResults: action.payload,
      };

    case GET_JOBS_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case GET_JOBS_ERROR:
      return {
        ...state,
        isError: action.payload,
      };

    default:
      return state;
  }
};

export default companySearchResultsReducer;
