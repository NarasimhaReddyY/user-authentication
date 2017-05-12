export const registrationActionCreaters = (userData) => {
	return {
	  type: 'USER_REGISTRATION_REQUEST',
	  payload: {
	  	user: userData 
	  },
	};
}

export const loginActionCreaters = (userData) => {
	return {
	  type: 'USER_LOGIN_REQUEST',
	  payload: {
	  	user: userData
	  }
	}
};

export const forgotPasswordActionCreaters = (userData) => {
	return {
		type: 'USER_FORGOT_PASSWORD_REQUEST',
		payload: {
			email: userData.email
		}
	}
}
