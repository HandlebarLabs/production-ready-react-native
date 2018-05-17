import React from 'react';
import { Text } from 'react-native';
import { formatDate } from '../../util/dates';

import styles from './styles';

const LastConverted = ({
  date, base, quote, conversionRate,
}) => (
  <Text style={styles.smallText}>
    1 {base} = {conversionRate} {quote} as of {formatDate(date)}
  </Text>
);

export default LastConverted;
