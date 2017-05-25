import axios from 'axios';

//Using temparary endpoints here for testing. It will be replaced later..
//Move all api urls to a single place.
//Refactor this
export const userRegistrationAPI = (user) => {
  return axios.post(
   'http://localhost:3001/users', {
    user: {
        first_name: user.firstName,
        last_name: user.lastName,
        email: user.email,
        phone_number: user.phoneNumber,
        password: user.password,
        password_confirmation: user.passwordConfirmation
    },
  });
}