import {
  AUTH_SIGNIN,
  AUTH_SIGNOUT,
} from '../constants/index'

export const signIn = (token) => {
  localStorage.setItem('token', token);
  return { type: AUTH_SIGNIN };
};

export const signOut = () => {
  localStorage.removeItem('token');
  return { type: AUTH_SIGNOUT };
};