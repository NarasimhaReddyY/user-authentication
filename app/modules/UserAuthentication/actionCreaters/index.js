export const registrationActionCreaters = (userData) => {
	return {
	  type: 'USER_REGISTRATION_REQUEST',
	  payload: {
	  	user: userData 
	  },
	};
}
