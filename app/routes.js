  
/**
 * Define Routes here
 */
import React from 'react';
import { Route } from 'react-router';
import App from './modules/core/components/main';
import Homepage from './modules/common/components/home';
import RegistrationFormContainer from './modules/userAuthentication/components/containers/registrationFormContainer.js';
import LoginFormContainer from './modules/userAuthentication/components/containers/loginFormContainer.js';
import ForgotPasswordFormContainer from './modules/userAuthentication/components/containers/forgotPasswordContainer.js';
import ResetPasswordFormContainer from './modules/userAuthentication/components/containers/resetPasswordContainer.js';
import _ from 'lodash';

const authenticate = (nextState, replace) => {
	if (_.isEmpty(localStorage.getItem('token'))) {
		replace({
			pathname: '/login'
		})
	}
};

export default (
  <Route path="/" component={App}>
    <Route path="registration" component={RegistrationFormContainer} />
  	<Route path="login" component={LoginFormContainer} />
  	<Route path="forgot-password" component={ForgotPasswordFormContainer} />
    <Route path="reset-password" component={ResetPasswordFormContainer} />
    <Route path="home" component={Homepage} onEnter={authenticate}/>
  </Route>
);