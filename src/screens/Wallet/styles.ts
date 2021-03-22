import {Platform, StyleSheet, ViewStyle} from 'react-native';
import {colors} from '../../constants/colors';
import {fonts, semiBold} from '../../constants/fonts';
import {getStatusBarHeight, hp, wp} from '../../utils/layout';

export const row: ViewStyle = {
  flexDirection: 'row',
  alignItems: 'center',
};

export const walletStyles = StyleSheet.create({
  viewAll: {
    ...fonts[11],
    color: colors.teal,
  },
  recent: {
    ...fonts[15],
  },
  recentHeaders: {
    ...row,
    justifyContent: 'space-between',
    marginBottom: hp(12),
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: hp(43),
  },
  button: {
    maxWidth: wp(163.35),
  },

  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: Platform.OS === 'ios' ? getStatusBarHeight() : 0,
    paddingHorizontal: wp(16),
  },
});
