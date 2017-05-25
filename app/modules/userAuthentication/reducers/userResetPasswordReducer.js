import Immutable from 'immutable';

const initialState = Immutable.Map({
  resetPasswordRequestSuccess: false,
	data: {}
});

export const userResetPasswordReducer = (state = initialState, action) => {
  switch(action.type) {
  	case 'USER_RESET_PASSWORD_REQUEST_SUCCESS': {
  		let newState = state;
          newState = newState.set('data', action.payload );
  		    newState = newState.set('resetPasswordRequestSuccess', true)
      return newState;
  	}
    case 'USER_RESET_PASSWORD_REQUEST_FAILED': {
      let newState = state;
          newState = newState.set('data', action.payload );
          newState = newState.set('resetPasswordRequestSuccess', false)
      return newState;
    }
    default: {
      return state;
    }
  }
};