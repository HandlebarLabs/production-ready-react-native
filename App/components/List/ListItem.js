import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

import styles from './styles';
import colors from '../../config/colors';
import Icon from './Icon';

const ListItem = ({
  text,
  onPress,
  selected = false,
  visible = true,
  customIcon = null,
  iconBackground,
  iconName,
}) => (
  <TouchableHighlight onPress={onPress} underlayColor={colors.$border}>
    <View style={styles.row}>
      <Text style={styles.text}>{text}</Text>
      {selected ? (
        <Icon visible={visible} iconName={iconName} iconBackground={iconBackground} />
      ) : (
        <Icon />
      )}
      {customIcon}
    </View>
  </TouchableHighlight>
);

export default ListItem;
