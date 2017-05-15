import { takeEvery, put, call } from 'redux-saga/effects';
import { userResetPasswordAPI } from '../apiCalls/userResetPasswordAPI.js';

function* userResetPasswordAction(action) {
  try {
    const response = yield call(userResetPasswordAPI, action.payload.email);
    let payload    = {};
    let errors     = response.data.errors;

    if(response.data.success){
      payload = { 
        success: true
      }
    } else if(errors) {
      payload = { 
        errors: errors,
        success: false
      }
    }

    yield put({
      type: 'USER_RESET_PASSWORD_REQUEST_SUCCESS',
      payload: payload
    });
  } catch (error){
    yield put({
      type: 'USER_RESET_PASSWORD_REQUEST_FAILED',
      payload: {
        success: false
      }
    });
  }
}

function* userResetPasswordSaga() {
  yield takeEvery('USER_RESET_PASSWORD_REQUEST', userResetPasswordAction);
}

export default userResetPasswordSaga;