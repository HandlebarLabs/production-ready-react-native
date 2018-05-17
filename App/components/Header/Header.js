import React from 'react';
import { Image, TouchableOpacity, SafeAreaView } from 'react-native';

import styles from './styles';

const Header = ({ onPress }) => (
  <SafeAreaView style={styles.container}>
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Image resizeMode="contain" source={require('./images/gear.png')} style={styles.icon} />
    </TouchableOpacity>
  </SafeAreaView>
);

export default Header;
