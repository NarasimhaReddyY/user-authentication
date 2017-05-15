import { fork } from 'redux-saga/effects';

import userRegistrationSaga from './modules/userAuthentication/sagas/userRegistrationSaga.js';
import userLoginSaga from './modules/userAuthentication/sagas/userLoginSaga.js';
import userForgotPasswordSaga from './modules/userAuthentication/sagas/userForgotPasswordSaga.js';
import userResetPasswordSaga from './modules/userAuthentication/sagas/userResetPasswordSaga.js';

export default function* rootSaga() {
  yield fork(userRegistrationSaga);
  yield fork(userLoginSaga);
  yield fork(userForgotPasswordSaga);
  yield fork(userResetPasswordSaga);
}
