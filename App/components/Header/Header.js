import React from 'react';
import { Image, TouchableOpacity, SafeAreaView } from 'react-native';

import styles from './styles';

const Header = ({ onPress, isConnected, onWarningPress }) => (
  <SafeAreaView style={styles.container}>
    {!isConnected ? (
      <TouchableOpacity onPress={onWarningPress} style={styles.button}>
        <Image resizeMode="contain" source={require('./images/warning.png')} style={styles.icon} />
      </TouchableOpacity>
    ) : null}
    <TouchableOpacity onPress={onPress} style={[styles.button, styles.buttonRight]}>
      <Image resizeMode="contain" source={require('./images/gear.png')} style={styles.icon} />
    </TouchableOpacity>
  </SafeAreaView>
);

export default Header;
