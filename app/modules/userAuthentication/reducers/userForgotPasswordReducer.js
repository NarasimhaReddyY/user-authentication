import Immutable from 'immutable';

const initialState = Immutable.Map({
	forgotPasswordInitiated: false,
	forgotPasswordSuccess: false,
	data: {}
});

export const userForgotPasswordReducer = (state = initialState, action) => {
  switch(action.type) {
  	case 'USER_FORGOT_PASSWORD_REQUEST_INITIATED': {
  		let newState = state;
      newState = newState.set('data', {});
  		newState = newState.set('forgotPasswordRequestInitiated', true);
  		newState = newState.set('forgotPasswordRequestSuccess', false);
  		return newState;
  	}
  	case 'USER_FORGOT_PASSWORD_REQUEST_SUCCESS': {
  		let newState = state;

      newState = newState.set('data', action.payload );
  		newState = newState.set('forgotPasswordRequestInitiated', false);
  		newState = newState.set('forgotPasswordRequestSuccess', true);
  		return newState;
  	}
    case 'USER_FORGOT_PASSWORD_REQUEST_FAILED': {
      let newState = state;

      newState = newState.set('data', action.payload );
      newState = newState.set('forgotPasswordRequestInitiated', false);
      newState = newState.set('forgotPasswordRequestSuccess', false);
      return newState;
    }
    default: {
      return state;
    }
  }
};