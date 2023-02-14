export const ADD_TO_FAVOURITE = "ADD_TO_FAVOURITE";
export const REMOVE_FROM_FAVOURITE = "REMOVE_FROM_FAVOURITE";
export const GET_JOBS = "GET_JOBS";
export const GET_JOBS_BY_COMPANY = "GET_JOBS_BY_COMPANY";
export const GET_JOBS_LOADING = "GET_JOBS_LOADING";
export const GET_JOBS_ERROR = "GET_JOBS_ERROR";

export const addToFavouriteAction = (company_name) => {
  return {
    type: ADD_TO_FAVOURITE,
    payload: company_name.company_name,
  };
};

export const removeFromFavouriteAction = (company_name) => {
  return {
    type: REMOVE_FROM_FAVOURITE,
    payload: company_name,
  };
};

export const mainSearchResultsAction = (query) => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(
        "https://strive-benchmark.herokuapp.com/api/jobs?search=" +
          query +
          "&limit=20"
      );
      if (response.ok) {
        const { data } = await response.json();
        dispatch({
          type: GET_JOBS,
          payload: data,
        });

        dispatch({
          type: GET_JOBS_LOADING,
          payload: false,
        });
      } else {
        dispatch({
          type: GET_JOBS_LOADING,
          payload: false,
        });
        dispatch({
          type: GET_JOBS_ERROR,
          payload: true,
        });
        // alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
      dispatch({
        type: GET_JOBS_LOADING,
        payload: false,
      });
      dispatch({
        type: GET_JOBS_ERROR,
        payload: true,
      });
    }
  };
};

export const companySearchResultsAction = (companyName) => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(
        "https://strive-benchmark.herokuapp.com/api/jobs?search=" + companyName
      );
      if (response.ok) {
        const { data } = await response.json();
        dispatch({
          type: GET_JOBS_BY_COMPANY,
          payload: data,
        });
        dispatch({
          type: GET_JOBS_LOADING,
          payload: false,
        });
      } else {
        dispatch({
          type: GET_JOBS_LOADING,
          payload: false,
        });
        dispatch({
          type: GET_JOBS_ERROR,
          payload: true,
        });
        alert("Error fetching results");
      }
    } catch (error) {
      dispatch({
        type: GET_JOBS_LOADING,
        payload: false,
      });
      dispatch({
        type: GET_JOBS_ERROR,
        payload: true,
      });
      console.log(error);
    }
  };
};
