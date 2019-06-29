import { createActions, createReducer } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* Types & Action Creators */

const { Types, Creators } = createActions({
  show: null,
  hide: null,
  mobile: null,
});

export const MenuTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
  visible: false,
  mobile: false,
});

/* Reducers */

export const show = state => state.merge({ visible: true });

export const hide = state => state.merge({ visible: false });

export const mobile = state => state.merge({ mobile: !state.mobile });

/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SHOW]: show,
  [Types.HIDE]: hide,
  [Types.MOBILE]: mobile,
});
