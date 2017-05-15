import { takeEvery, put, call } from 'redux-saga/effects';
import { userForgotPasswordAPI } from '../apiCalls/userForgotPasswordAPI.js';

function* userForgotPasswordAction(action) {
  yield put({ type: 'USER_FORGOT_PASSWORD_REQUEST_INITIATED'});

  try {
    const response = yield call(userForgotPasswordAPI, action.payload.email);
    // Mock response
    // {
    //   success: true      
    // }

    // {
    //   errors: "No user found with this email"
    // }

    let payload = {};
    let errors  = response.data.errors;

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
      type: 'USER_FORGOT_PASSWORD_REQUEST_SUCCESS',
      payload: payload
    });
  } catch (error){
    yield put({
      type: 'USER_FORGOT_PASSWORD_REQUEST_FAILED',
      payload: {
        success: false
      }
    });
  }
}

function* userForgotPasswordSaga() {
  yield takeEvery('USER_FORGOT_PASSWORD_REQUEST', userForgotPasswordAction);
}

export default userForgotPasswordSaga;