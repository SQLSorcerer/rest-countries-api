import axios from 'axios';
import { Dispatch } from 'redux';
import { RootState } from '../reducers'; // Adjust the path based on your project structure

// Action Types
export const FETCH_COUNTRY_DATA_REQUEST = 'FETCH_COUNTRY_DATA_REQUEST';
export const FETCH_COUNTRY_DATA_SUCCESS = 'FETCH_COUNTRY_DATA_SUCCESS';
export const FETCH_COUNTRY_DATA_FAILURE = 'FETCH_COUNTRY_DATA_FAILURE';

// Action Creators
export const fetchCountryDataRequest = () => ({
  type: FETCH_COUNTRY_DATA_REQUEST,
});

export const fetchCountryDataSuccess = (data: any) => ({
  type: FETCH_COUNTRY_DATA_SUCCESS,
  payload: data,
});

export const fetchCountryDataFailure = (error: string) => ({
  type: FETCH_COUNTRY_DATA_FAILURE,
  payload: error,
});

// Thunk Action
export const fetchCountryData = () => {
  return async (dispatch: Dispatch, getState: () => RootState) => {
    dispatch(fetchCountryDataRequest());

    try {
      const response = await axios.get('https://restcountries.com/v3.1/all');

      // Assuming your state structure has a 'country' field
      dispatch(fetchCountryDataSuccess(response.data));
    } catch (error) {
      dispatch(fetchCountryDataFailure(error.message));
    }
  };
};
