import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { reducer as toastr } from 'react-redux-toastr';

export default history => combineReducers({
  router: connectRouter(history),
  toastr,
});
