import { StyleSheet } from 'react-native';
import colors from '../../config/colors';

export default StyleSheet.create({
  row: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: colors.$white,
  },
  text: {
    color: colors.$darkText,
    fontSize: 16,
  },
  separator: {
    backgroundColor: colors.$border,
    height: StyleSheet.hairlineWidth,
    flex: 1,
    marginLeft: 20,
  },
  icon: {
    backgroundColor: 'transparent',
    borderRadius: 15,
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconVisible: {
    backgroundColor: colors.$primaryBlue,
  },
  checkIcon: {
    width: 18,
    tintColor: colors.$white,
  },
});
