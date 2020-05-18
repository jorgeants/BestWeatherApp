import { all } from 'redux-saga/effects';

import forecast from '~/store/modules/forecast/sagas';

export default function* rootSaga() {
  return yield all([forecast]);
}
