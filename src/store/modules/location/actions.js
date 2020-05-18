import {
  REQUEST_LOCATION,
  LOCATION_SUCCESS,
  LOCATION_FAILURE,
} from '~/store/modules/location/constants';

export const requestForecast = (latitude, longitude) => ({
  type: REQUEST_LOCATION,
  payload: { latitude, longitude },
});

export const forecastSuccess = (data) => ({
  type: LOCATION_SUCCESS,
  payload: { data },
});

export const forecastFailure = (errorMessage) => ({
  type: LOCATION_FAILURE,
  payload: { errorMessage },
});
