import { takeEvery, call, put, select } from 'redux-saga/effects';
import { delay } from 'redux-saga';

import {
  CHANGE_BASE_CURRENCY,
  GET_INITIAL_CONVERSION,
  SWAP_CURRENCY,
  CONVERSION_RESULT,
  CONVERSION_ERROR,
} from '../actions/currencies';

export const getLatestRate = currency => fetch(`https://api.fixer.io/latest?base=${currency}`);

const fetchLatestConversionRates = function* ({ currency }) {
  const { connected, hasCheckedStatus } = yield select(state => state.network);
  if (!connected && hasCheckedStatus) {
    yield put({
      type: CONVERSION_ERROR,
      error: 'Not connected to the internet. Conversion rate may be outdated or unavailable!',
    });
    return;
  }

  try {
    let usedCurrency = currency;
    if (usedCurrency === undefined) {
      usedCurrency = yield select(state => state.currencies.baseCurrency);
    }
    const response = yield call(getLatestRate, usedCurrency);
    const result = yield response.json();
    if (result.error) {
      yield put({ type: CONVERSION_ERROR, error: result.error });
    } else {
      yield put({ type: CONVERSION_RESULT, result });
    }
  } catch (error) {
    yield put({ type: CONVERSION_ERROR, error: error.message });
  }
};

const clearConversionError = function* () {
  const DELAY_SECONDS = 4; // approx. time warning is shown
  const error = yield select(state => state.currencies.error);
  if (error) {
    // check for existance otherwise we get stuck in an infinite loop
    yield delay(DELAY_SECONDS * 1000);
    yield put({ type: CONVERSION_ERROR, error: null });
  }
};

const rootSaga = function* () {
  yield takeEvery(GET_INITIAL_CONVERSION, fetchLatestConversionRates);
  yield takeEvery(CHANGE_BASE_CURRENCY, fetchLatestConversionRates);
  yield takeEvery(SWAP_CURRENCY, fetchLatestConversionRates);
  yield takeEvery(CONVERSION_ERROR, clearConversionError);
};

export default rootSaga;
