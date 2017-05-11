import { fork } from 'redux-saga/effects';

import userRegistrationSaga from './modules/UserAuthentication/sagas/userRegistrationSaga.js';

export default function* rootSaga() {
  yield fork(userRegistrationSaga);
}