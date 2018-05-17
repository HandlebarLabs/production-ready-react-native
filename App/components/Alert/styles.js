import { StyleSheet, Platform, StatusBar } from 'react-native';

export default StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    paddingHorizontal: 20,
    paddingVertical: 10,
    justifyContent: 'center',
    overflow: 'hidden',
    ...Platform.select({
      android: {
        paddingTop: StatusBar.currentHeight * 1.5,
      },
    }),
  },
  titleText: {
    fontSize: 16,
    textAlign: 'left',
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: 'transparent',
  },
  messageText: {
    fontSize: 14,
    textAlign: 'left',
    fontWeight: 'normal',
    color: '#fff',
    backgroundColor: 'transparent',
  },
  error: {
    backgroundColor: '#cc3232',
  },
});
