import reducer from '../currencies';
import { getInitialConversion } from '../../actions/currencies';

const initialState = {
  baseCurrency: 'USD',
  quoteCurrency: 'GBP',
  amount: 100,
  conversions: {},
  error: null,
};

it('sets initial state', () => {
  const expected = { ...initialState };
  const actual = reducer(undefined, {});
  expect(actual).toEqual(expected);
});

it('sets nested data on initial fetch', () => {
  const expected = {
    ...initialState,
    conversions: {
      USD: {
        date: '',
        isFetching: true,
        rates: {},
      },
    },
  };
  const actual = reducer(undefined, getInitialConversion());
  expect(actual).toEqual(expected);
});
