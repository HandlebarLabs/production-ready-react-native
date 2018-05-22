import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import CurrencyList from '../CurrencyList';

import { initialState as currencyInitialState } from '../../reducers/currencies';
import { initialState as themeInitialState } from '../../reducers/theme';

const mockStore = configureStore([]);

it('successfully renders', () => {
  const initialState = { currencies: currencyInitialState, theme: themeInitialState };
  const navigation = { state: { params: { type: 'quote' } } };

  const rendered = shallow(<CurrencyList navigation={navigation} />, {
    context: { store: mockStore(initialState) },
  });
  expect(rendered.dive()).toMatchSnapshot();
});
