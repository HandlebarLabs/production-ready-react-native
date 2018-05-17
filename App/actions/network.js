export const CHANGE_CONNECTION_STATUS = 'CHANGE_CONNECTION_STATUS';

export const changeNetworkStatus = status => ({
  type: CHANGE_CONNECTION_STATUS,
  status,
});
