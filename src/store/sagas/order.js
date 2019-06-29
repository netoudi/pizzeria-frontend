import { call, put } from 'redux-saga/effects';
import { actions as toastrActions } from 'react-redux-toastr';
import api from '../../services/api';

import OrderActions from '../ducks/order';

export function* getOrders() {
  try {
    const response = yield call(api.get, 'orders');

    yield put(OrderActions.getOrderSuccess(response.data));
  } catch (err) {
    yield put(OrderActions.getOrderFailure(err));
    yield put(
      toastrActions.add({
        type: 'error',
        title: 'Erro!',
        message: 'Não foi possível carregar os pedidos.',
      }),
    );
  }
}
