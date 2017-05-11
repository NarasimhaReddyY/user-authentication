import { takeEvery, put, call } from 'redux-saga/effects';
import { userRegistrationAPI } from '../apiCalls/userRegistrationAPI.js';

function* userRegistrationAction(action) {
  yield put({ type: 'USER_REGISTRATION_REQUEST_INITIATED'});

  try {
    const response = yield call(userRegistrationAPI, action.payload.user);

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
    	type: 'USER_REGISTRATION_REQUEST_SUCCESS',
    	payload: payload
    });
  } catch (error){
    yield put({
    	type: 'USER_REGISTRATION_REQUEST_FAILED',
    	payload: {
    		success: false
    	}
    });
  }
}

function* userRegistrationSaga() {
	yield takeEvery('USER_REGISTRATION_REQUEST', userRegistrationAction);
}

export default userRegistrationSaga;