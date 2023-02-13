import { GET_COMPANY } from "./actions";

const initialState = {
  list: [],
};

const companyResultReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COMPANY:
      return {
        ...state,
        list: action.payload,
      };
    default:
      return state;
  }
};

export default companyResultReducer;
