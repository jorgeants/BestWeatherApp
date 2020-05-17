import {
  REQUEST_FORECAST,
  FORECAST_SUCCESS,
  FORECAST_FAILURE,
} from '~/store/modules/forecast/constants';

export const requestForecast = (latitude, longitude) => ({
  type: REQUEST_FORECAST,
  payload: { latitude, longitude },
});

export const forecastSuccess = (data) => ({
  type: FORECAST_SUCCESS,
  payload: { data },
});

export const forecastFailure = (errorMessage) => ({
  type: FORECAST_FAILURE,
  payload: { errorMessage },
});
