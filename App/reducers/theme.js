import { CHANGE_PRIMARY_COLOR } from '../actions/theme';

export const initialState = {
  primaryColor: '#4F6D7A',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_PRIMARY_COLOR:
      return { ...state, primaryColor: action.color };
    default:
      return state;
  }
};
