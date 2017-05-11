import Immutable from 'immutable';

const initialState = Immutable.Map({
	loginRequestInitiated: false,
	loginRequestSuccess: false,
	data: {}
});

export const userLoginReducer = (state = initialState, action) => {
  switch(action.type) {
  	case 'USER_LOGIN_REQUEST_INITIATED': {
  		let newState = state;
      newState = newState.set('data', {});
  		newState = newState.set('loginRequestInitiated', true);
  		newState = newState.set('loginRequestSuccess', false);
  		return newState;
  	}
  	case 'USER_LOGIN_REQUEST_SUCCESS': {
  		let newState = state;

      newState = newState.set('data', action.payload );
  		newState = newState.set('loginRequestInitiated', false);
  		newState = newState.set('loginRequestSuccess', true);
  		return newState;
  	}
    default: {
      return state;
    }
  }
};