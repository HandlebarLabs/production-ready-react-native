import { StyleSheet } from 'react-native';
import colors from '../../config/colors';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 19,
    marginRight: 11,
  },
  text: {
    color: colors.$white,
    fontSize: 14,
    paddingVertical: 20,
    fontWeight: '300',
  },
});
