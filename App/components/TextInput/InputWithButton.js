import React from 'react';
import { View, TextInput, TouchableHighlight, Text } from 'react-native';

import styles from './styles';
import colors from '../../config/colors';

const InputWithButton = (props) => {
  const containerStyles = [styles.container];
  if (props.editable === false) {
    containerStyles.push(styles.containerDisabled);
  }

  const buttonTextStyles = [styles.buttonText];
  if (props.textColor) {
    buttonTextStyles.push({ color: props.textColor });
  }

  return (
    <View style={containerStyles}>
      <TouchableHighlight
        onPress={props.onPress}
        style={styles.buttonContainer}
        underlayColor={colors.$lightGray}
      >
        <Text style={buttonTextStyles}>{props.buttonText}</Text>
      </TouchableHighlight>
      <View style={styles.separator} />
      <TextInput style={styles.input} underlineColorAndroid="transparent" {...props} />
    </View>
  );
};

export default InputWithButton;
