import { all, takeLatest } from 'redux-saga/effects';

import { signIn, signOut } from './auth';
import { AuthTypes } from '../ducks/auth';

import { getOrders } from './order';
import { OrderTypes } from '../ducks/order';

export default function* rootSaga() {
  yield all([
    takeLatest(AuthTypes.SIGN_IN_REQUEST, signIn),
    takeLatest(AuthTypes.SIGN_OUT, signOut),

    takeLatest(OrderTypes.GET_ORDER_REQUEST, getOrders),
  ]);
}
