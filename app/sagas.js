import { fork } from 'redux-saga/effects';

import userRegistrationSaga from './modules/UserAuthentication/sagas/userRegistrationSaga.js';
import userLoginSaga from './modules/UserAuthentication/sagas/userLoginSaga.js';
import userForgotPasswordSaga from './modules/UserAuthentication/sagas/userForgotPasswordSaga.js';

export default function* rootSaga() {
  yield fork(userRegistrationSaga);
  yield fork(userLoginSaga);
  yield fork(userForgotPasswordSaga);
}
