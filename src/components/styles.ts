import {StyleSheet, ViewStyle} from 'react-native';
import {colors} from '../constants/colors';
import {fonts, semiBold} from '../constants/fonts';
import {hp, wp} from '../utils/layout';

export const row: ViewStyle = {
  flexDirection: 'row',
  alignItems: 'center',
};

export const ListStyles = StyleSheet.create({
  amount: {
    ...fonts[13],
    ...semiBold,
  },
  date: {
    ...fonts[11],
  },
  title: {
    ...fonts[13],
  },
  spaceRow: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: hp(1),
  },
  textContainer: {
    width: wp(300),
    paddingLeft: wp(15),
  },
  circle: {
    width: wp(42),
    height: wp(42),
    borderRadius: wp(42),
    backgroundColor: colors.off_teal,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listContainer: {
    height: hp(67),
    paddingTop: hp(11),
    paddingBottom: hp(14),
    ...row,
    borderBottomWidth: hp(1),
    borderBottomColor: 'rgba(181,181,181,0.2)',
  },
});

export const CardStyles = StyleSheet.create({
  footerText: {
    ...fonts[11],
    color: colors.teal,
  },
  footer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: colors.off_teal,
  },
  balance: {
    ...fonts[22],
  },
  topContainer: {
    ...row,
    justifyContent: 'space-between',
    height: hp(80),
    paddingLeft: wp(22),
    paddingRight: wp(26),
    backgroundColor: 'rgba(131,143,145,0.05)',
  },
  walletText: {
    ...fonts[11],
    color: colors.light,
    marginRight: wp(10),
  },
  wallet: {
    ...row,
    marginBottom: hp(6),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardContainer: {
    height: hp(108),
    borderRadius: wp(8),
    overflow: 'hidden',
    marginBottom: hp(16),
  },
});

export const HeaderStyles = StyleSheet.create({
  iconContainer: {
    backgroundColor: colors.off_teal,
    borderRadius: wp(33),
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    ...fonts[22],
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: hp(33),
    marginTop: hp(10),
    marginBottom: hp(19),
  },
  button: {
    width: wp(33),
    height: wp(33),
  },
});

export const InputStyles = StyleSheet.create({
  icon: {
    width: wp(23),
    height: '100%',
    borderWidth: 1,
  },
  input: {
    flex: 1,
    ...fonts[17],
    height: '100%',
  },
  inputContainer: {
    borderWidth: 1,
    height: hp(55),
    borderRadius: wp(5),
    backgroundColor: colors.off_teal,
    flexDirection: 'row',
    paddingHorizontal: wp(20),
    borderColor: 'rgba(8,152,160,0.2)',
    alignItems: 'center',
    marginBottom: hp(19),
  },
});

export const ButtonStyles = StyleSheet.create({
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
    flex: 1,
  },
});
