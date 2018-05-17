import { CHANGE_CONNECTION_STATUS } from '../actions/network';

const initialState = {
  connected: false,
  hasCheckedStatus: false,
};

const isConnected = (status) => {
  if (status.toLowerCase() === 'none') {
    return false;
  }

  return true;
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_CONNECTION_STATUS:
      return {
        ...state,
        connected: isConnected(action.status),
        hasCheckedStatus: true,
      };
    default:
      return state;
  }
};
