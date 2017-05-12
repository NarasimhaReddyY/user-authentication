
/**
 * Define Routes here
 */
import React from 'react';
import { Route } from 'react-router';
import App from './modules/Core/components/main';
import Homepage from './modules/Home/components/home';
import RegistrationFormContainer from './modules/UserAuthentication/components/containers/RegistrationFormContainer.js';
import LoginFormContainer from './modules/UserAuthentication/components/containers/LoginFormContainer.js';
import LoginForm from './modules/UserAuthentication/components/presentational/LoginForm';
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
    <Route path="home" component={Homepage} onEnter={authenticate}/>
  </Route>
);