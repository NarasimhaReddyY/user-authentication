
/**
 * Define Routes here
 */
import React from 'react';
import { Route } from 'react-router';
import App from './modules/Core/components/main';
import Homepage from './modules/Home/components/home';
import RegistrationForm from './modules/UserAuthentication/components/RegistrationForm';
import LoginForm from './modules/UserAuthentication/components/LoginForm';

export default (
  <Route path="/" component={App}>
    <Route path="home" component={Homepage} />
    <Route path="registration" component={RegistrationForm} />
  	<Route path="login" component={LoginForm} />
  </Route>
);