import Immutable from 'immutable';

const initialState = Immutable.Map({
	registrationRequestInitiated: false,
	registrationRequestSuccess: false,
	data: {}
});

export const userAuthenticationReducer = (state = initialState, action) => {
  switch(action.type) {
  	case 'USER_REGISTRATION_REQUEST_INITIATED': {
  		let newState = state;
  		newState = newState.set('registrationRequestInitiated', true);
  		newState = newState.set('registrationRequestSuccess', false);
  		return newState;
  	}
  	case 'USER_REGISTRATION_REQUEST_SUCCESS': {
  		let newState = state;

      newState = newState.set('data', action.payload );
  		newState = newState.set('registrationRequestInitiated', false);
  		newState = newState.set('registrationRequestSuccess', true);
  		return newState;
  	}
    default: {
      return state;
    }
  }
};