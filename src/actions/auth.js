import { USER_LOGGED_IN } from '../types';
import api from '../api';

export const userLoggedIn = (user) => ({
  type: USER_LOGGED_IN,
  user
})

export const login = (credintials) => (dispatch) =>
  api.user.login(credintials).then(user => dispatch(userLoggedIn(user)));
