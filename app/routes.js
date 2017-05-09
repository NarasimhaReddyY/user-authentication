
/**
 * Define Routes here
 */
import React from 'react';
import { Route } from 'react-router';
import App from './modules/Core/components/main';
import Homepage from './modules/Home/components/home';
import RegistrationForm from './modules/UserAuthentication/components/RegistrationForm';

export default (
  <Route path="/" component={App}>
    <Route path="home" component={Homepage} />
    <Route path="registration" component={RegistrationForm} />
  </Route>
);