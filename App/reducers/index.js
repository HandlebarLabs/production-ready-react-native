import { combineReducers } from 'redux';

import currencies from './currencies';
import theme from './theme';
import network from './network';

export default combineReducers({
  currencies,
  theme,
  network,
});
