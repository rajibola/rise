import {hp} from '../utils/layout';
import {colors} from './colors';

export const regular = {
  fontFamily: 'Gelion-Regular',
};

export const medium = {
  fontFamily: 'Gelion-Medium',
};

export const semiBold = {
  fontFamily: 'Gelion-SemiBold',
};

export const bold = {
  fontFamily: 'Gelion-Bold',
};

export const fonts = {
  28: {
    fontSize: hp(28),
    lineHeight: hp(34),
    color: colors.dark,
    ...bold,
  },

  22: {
    fontSize: hp(22),
    lineHeight: hp(28),
    color: colors.dark,
    ...semiBold,
  },
  17: {
    fontSize: hp(17),
    lineHeight: hp(22),
    color: colors.dark,
    ...semiBold,
  },
  11: {
    fontSize: hp(11),
    lineHeight: hp(13),
    color: colors.dark,
    ...regular,
  },
  13: {
    fontSize: hp(13),
    lineHeight: hp(18),
    color: colors.dark,
    ...regular,
  },
  15: {
    fontSize: hp(15),
    lineHeight: hp(20),
    color: colors.dark,
    ...regular,
  },
  9: {
    fontSize: hp(9),
    lineHeight: hp(10.8),
    color: colors.dark,
    ...regular,
  },
};
