import {Platform, StyleSheet, ViewStyle} from 'react-native';
import {colors, fonts} from '../../constants';
import {getStatusBarHeight, hp, wp} from '../../utils/layout';

export const row: ViewStyle = {
  flexDirection: 'row',
  alignItems: 'center',
};

export const fundWalletStyles = StyleSheet.create({
  button: {
    marginHorizontal: wp(47),
    maxHeight: hp(36),
  },
  margins: {
    marginTop: hp(7),
    marginBottom: hp(44.6),
  },
  whyRate: {
    ...fonts[9],
    color: colors.teal,
  },
  rate: {
    ...fonts[9],
  },
  rateBox1: {
    width: wp(79),
    height: hp(19),
    justifyContent: 'center',
    alignItems: 'center',
  },
  rateBox2: {
    backgroundColor: colors.off_teal,
    width: wp(79),
    height: hp(19),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: wp(8),
  },
  rateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: wp(169),
    alignSelf: 'center',
    borderWidth: 1,
    height: hp(27),
    alignItems: 'center',
    borderRadius: wp(8),
    borderColor: colors.off_teal,
    paddingHorizontal: wp(5.4),
  },
  amount: {
    ...fonts[22],
  },
  amountInNaira: {
    ...row,
    paddingHorizontal: wp(28),
    marginTop: hp(20),
    marginBottom: hp(15),
    justifyContent: 'space-between',
  },
  arrow: {
    width: wp(24),
    height: wp(24),
    borderRadius: wp(20),
    backgroundColor: colors.teal,
    position: 'absolute',
    alignSelf: 'center',
    left: wp(176),
    justifyContent: 'center',
    alignItems: 'center',
  },
  balance: {
    textAlign: 'right',
    ...fonts[13],
    color: colors.light,
  },
  riseWallet: {
    textAlign: 'right',
    ...fonts[13],
  },
  box: {
    flex: 1,
    ...fonts[13],
  },
  verticalLine: {
    height: hp(61),
    width: hp(1),
    backgroundColor: 'rgba(181, 181, 181, 0.2)',
  },
  rectangle: {
    height: hp(61),
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: wp(16),
    borderColor: 'rgba(181, 181, 181, 0.2)',
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: Platform.OS === 'ios' ? getStatusBarHeight() : 0,
  },
});

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
