import { takeEvery, put, call } from 'redux-saga/effects';
import { userLoginAPI } from '../apiCalls/userLoginAPI.js';

function* userLoginAction(action) {
  yield put({ type: 'USER_LOGIN_REQUEST_INITIATED'});

  try {
    const response = yield call(userLoginAPI, action.payload.user);

    let payload = {};
    let user    = response.data.user;
    let errors  = response.data.errors;

    if(user){
      payload = { 
        user: user,
        success: true
      }
    } else if(errors) {
      payload = { 
        errors: errors,
        success: false
      }
    }

    yield put({
      type: 'USER_LOGIN_REQUEST_SUCCESS',
      payload: payload
    });
  } catch (error){
    yield put({
      type: 'USER_LOGIN_REQUEST_FAILED',
      payload: {
        success: false
      }
    });
  }
}

function* userLoginSaga() {
  yield takeEvery('USER_LOGIN_REQUEST', userLoginAction);
}

export default userLoginSaga;