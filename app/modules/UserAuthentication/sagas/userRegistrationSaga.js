import { takeEvery, put, call } from 'redux-saga/effects';
import { userRegistrationAPI } from '../apiCalls/userRegistrationAPI.js';

function* userRegistrationAction(action) {
  yield put({ type: 'USER_REGISTRATION_REQUEST_INITIATED'});

  try {
    const response = yield call(userRegistrationAPI, action.payload.user);

    let payload = {};

    if(response.data.user){
      payload = { user: response.data.user, success: true }
    } else if(response.data.errors) {
      payload = { errors: response.data.errors, success: false }
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