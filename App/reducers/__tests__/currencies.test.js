import reducer from '../currencies';
import { getInitialConversion } from '../../actions/currencies';

it('sets initial state', () => {
  expect(reducer(undefined, {})).toMatchSnapshot();
});

it('sets nested data on initial fetch', () => {
  expect(reducer(undefined, getInitialConversion())).toMatchSnapshot();
});
