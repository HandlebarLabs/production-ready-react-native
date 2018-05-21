import React from 'react';
import { TouchableOpacity } from 'react-native';
import { shallow } from 'enzyme';
import { ClearButton } from '../Button';

it('handles a press', () => {
  const callback = jest.fn();
  const wrapper = shallow(<ClearButton text="test 1" onPress={callback} />);
  expect(wrapper.find(TouchableOpacity).length).toBe(1);

  wrapper
    .find(TouchableOpacity)
    .first()
    .props()
    .onPress();

  expect(callback).toHaveBeenCalled();
});
