
/**
 * Define Routes here
 */
import React from 'react';
import { Route } from 'react-router';
import App from './modules/Core/components/main';
import Homepage from './modules/Home/components/home';
import RegistrationForm from './modules/UserAuthentication/components/presentational/RegistrationForm';
import LoginForm from './modules/UserAuthentication/components/presentational/LoginForm';

export default (
  <Route path="/" component={App}>
    <Route path="home" component={Homepage} />
    <Route path="registration" component={RegistrationForm} />
  	<Route path="login" component={LoginForm} />
  </Route>
);