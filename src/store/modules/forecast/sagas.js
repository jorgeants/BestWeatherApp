import { all, takeLatest, call, put } from 'redux-saga/effects';
import { API_KEY } from 'react-native-dotenv';
import { showMessage } from 'react-native-flash-message';
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
      `/weather?key=${API_KEY}&lat=${latitude}&log=${longitude}&user_ip=remote&locale=pt`
    );

    yield put(forecastSuccess(response.data.results));
  } catch (error) {
    yield put(forecastFailure(error.errorMessage));
    yield showMessage({
      message: 'Aconteceu algo inesperado :(',
      description: 'Não foi possível obter os dados da previsão do tempo',
      type: 'danger',
    });
  }
}

export default all([takeLatest(REQUEST_FORECAST, fetchForecast)]);
