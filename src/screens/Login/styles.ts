import {Platform, StyleSheet} from 'react-native';
import {colors} from '../../constants/colors';
import {fonts, regular} from '../../constants/fonts';
import {getStatusBarHeight, hp, wp} from '../../utils/layout';

export const styles = StyleSheet.create({
  buttonText: {
    ...fonts[17],
    color: colors.white,
  },
  margin: {
    height: hp(8),
  },
  button: {
    height: hp(55),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: wp(5),
    backgroundColor: colors.teal,
  },

  subtitle: {
    ...fonts[17],
    ...regular,
    marginBottom: hp(25),
  },
  welcome: {
    marginTop: hp(81),
    ...fonts[28],
    marginBottom: hp(12),
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: Platform.OS === 'ios' ? getStatusBarHeight() : 0,
    paddingHorizontal: wp(16),
  },
});
