import { createActions, createReducer } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* Types & Action Creators */

const { Types, Creators } = createActions({
  signInRequest: ['email', 'password'],
  signInSuccess: ['token', 'user'],
  signOut: null,
});

export const AuthTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
  signedIn: !!localStorage.getItem('@PIZZERIA/token'),
  token: localStorage.getItem('@PIZZERIA/token') || null,
  user: JSON.parse(localStorage.getItem('@PIZZERIA/user')) || {},
});

/* Reducers */

export const success = (state, { token, user }) => state.merge({
  signedIn: true,
  token,
  user,
});

export const logout = state => state.merge({
  signedIn: false,
  token: null,
  user: {},
});

/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SIGN_IN_SUCCESS]: success,
  [Types.SIGN_OUT]: logout,
});
