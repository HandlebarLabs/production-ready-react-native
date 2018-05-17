import { Dimensions, StyleSheet } from 'react-native';
import colors from '../../config/colors';

const imageWidth = Dimensions.get('window').width / 2;

export const imageSizes = {
  $smallContainerSize: imageWidth / 2,
  $smallImageSize: imageWidth / 4,
  $largeContainerSize: imageWidth,
  $largeImageSize: imageWidth / 2,
};

export default StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  containerImage: {
    alignItems: 'center',
    justifyContent: 'center',
    width: colors.$largeContainerSize,
    height: colors.$largeContainerSize,
  },
  logo: {
    width: colors.$largeImageSize,
    tintColor: colors.$primaryBlue,
  },
  text: {
    color: colors.$white,
    fontSize: 28,
    letterSpacing: -0.5,
    marginTop: 15,
    fontWeight: '600',
  },
});
