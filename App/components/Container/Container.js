import React from 'react';
import { SafeAreaView } from 'react-native';

import styles from './styles';

const Container = ({ children, backgroundColor }) => {
  const containerStyles = [styles.container];
  if (backgroundColor) {
    containerStyles.push({ backgroundColor });
  }
  return <SafeAreaView style={containerStyles}>{children}</SafeAreaView>;
};

export default Container;
