import axios from 'axios';

//Using temparary endpoints here for testing. It will be replaced later..
//Move all api urls to a single place.
//Refactor this
export const userLoginAPI = (user) => {
	return axios.post(
   'http://localhost:3001/users/login', {
    user: {
        email: user.email,
        password: user.password
    },
  });
}