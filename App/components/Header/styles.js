import { StyleSheet, Platform, StatusBar } from 'react-native';

export default StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    ...Platform.select({
      ios: {
        paddingTop: 20,
      },
      android: {
        paddingTop: StatusBar.currentHeight,
      },
    }),
  },
  button: {
    alignSelf: 'flex-end',
    paddingVertical: 5,
    paddingHorizontal: 20,
  },
  icon: {
    width: 18,
  },
});
