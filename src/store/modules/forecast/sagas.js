import { all, takeLatest, call, put, select } from 'redux-saga/effects';
import api from '~/services/api';

import { REQUEST_FORECAST } from '~/store/modules/forecast/constants';
import {
  forecastSuccess,
  forecastFailure,
} from '~/store/modules/forecast/actions';

function* fetchForecast(action) {
  try {
    const { latitude, longitude } = action.payload;

    const response = yield call(
      api.get,
      `/weather?lat=${latitude}&lon=${longitude}`
    );

    yield put(forecastSuccess(response.data.result));
  } catch (error) {
    yield put(
      forecastFailure('Ops! Ocorreu algum erro. Tente novamente mais tarde.')
    );
  }
}

export default all([takeLatest(REQUEST_FORECAST, fetchForecast)]);
