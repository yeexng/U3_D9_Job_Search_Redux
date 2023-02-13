import { GET_JOBS_BY_COMPANY } from "../actions";

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

    default:
      return state;
  }
};

export default companySearchResultsReducer;
