import React from 'react';
import { View, Image } from 'react-native';

import styles from './styles';

const getIcon = (name) => {
  switch (name) {
    case 'arrow-forward':
      return require('./images/arrow-forward/arrow-forward.png');
    case 'link':
      return require('./images/link/link.png');
    case 'checkmark':
    default:
      return require('./images/checkmark/checkmark.png');
  }
};

const Icon = ({
  visible, iconBackground, iconName, iconColor, iconSize,
}) => {
  if (visible) {
    const containerStyles = [styles.icon];
    if (visible) {
      containerStyles.push(styles.iconVisible);
    }
    if (iconBackground) {
      containerStyles.push({ backgroundColor: iconBackground });
    }

    const iconStyles = [styles.checkIcon];
    if (iconColor) {
      iconStyles.push({ tintColor: iconColor });
    }

    if (iconSize) {
      iconStyles.push({ width: iconSize });
    }

    return (
      <View style={containerStyles}>
        {iconName ? (
          <Image source={getIcon(iconName)} style={iconStyles} resizeMode="contain" />
        ) : null}
      </View>
    );
  }

  return <View style={styles.icon} />;
};

export default Icon;
