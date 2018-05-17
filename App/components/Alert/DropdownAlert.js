import React from 'react';
import { Animated, Text, SafeAreaView, Dimensions, TouchableOpacity } from 'react-native';

import styles from './styles';

const { height } = Dimensions.get('window');
export default class DropdownAlert extends React.Component {
  state = {
    contentHeight: height,
    title: null,
    message: null,
  };

  animatedOffset = new Animated.Value(0);

  alertWithType = (type, title, message) => {
    this.setState(
      {
        title,
        message,
      },
      () => {
        this.open().then(() => {
          setTimeout(() => {
            this.close();
          }, 3000);
        });
      },
    );
  };

  measureContent = ({ nativeEvent }) => {
    this.setState({
      contentHeight: Math.ceil(nativeEvent.layout.height),
    });
  };

  open = () =>
    new Promise((resolve) => {
      Animated.timing(this.animatedOffset, {
        toValue: 1,
        useNativeDriver: true,
      }).start(() => resolve());
    });

  close = () =>
    new Promise((resolve) => {
      Animated.timing(this.animatedOffset, {
        toValue: 0,
        useNativeDriver: true,
      }).start(() => resolve());
    });

  render() {
    const containerStyles = [
      styles.container,
      styles.error,
      {
        transform: [
          {
            translateY: this.animatedOffset.interpolate({
              inputRange: [0, 1],
              outputRange: [-this.state.contentHeight, 0],
            }),
          },
        ],
      },
    ];

    return (
      <Animated.View style={containerStyles} onLayout={this.measureContent}>
        <TouchableOpacity onPress={this.close}>
          <SafeAreaView>
            <Text style={styles.titleText} numberOfLines={1}>
              {this.state.title}
            </Text>
            <Text style={styles.messageText}>{this.state.message}</Text>
          </SafeAreaView>
        </TouchableOpacity>
      </Animated.View>
    );
  }
}
