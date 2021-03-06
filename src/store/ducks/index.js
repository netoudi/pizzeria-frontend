import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { reducer as toastr } from 'react-redux-toastr';
import { reducer as auth } from './auth';
import { reducer as menu } from './menu';
import { reducer as order } from './order';

export default history => combineReducers({
  router: connectRouter(history),
  toastr,
  auth,
  menu,
  order,
});
