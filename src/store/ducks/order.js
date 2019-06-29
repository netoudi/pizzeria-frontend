import { createActions, createReducer } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* Types & Action Creators */

const { Types, Creators } = createActions({
  getOrderRequest: null,
  getOrderSuccess: ['data'],
  getOrderFailure: ['error'],
});

export const OrderTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
  loading: false,
  error: null,
  data: [],
});

/* Reducers */

export const request = state => state.merge({
  loading: true,
  error: null,
});

export const success = (state, { data }) => state.merge({
  data,
  loading: false,
  error: null,
});

export const failure = (state, { error }) => state.merge({
  loading: false,
  error,
});

/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_ORDER_REQUEST]: request,
  [Types.GET_ORDER_SUCCESS]: success,
  [Types.GET_ORDER_FAILURE]: failure,
});
