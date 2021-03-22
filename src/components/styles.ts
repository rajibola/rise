import {StyleSheet} from 'react-native';
import {colors} from '../constants/colors';
import {fonts} from '../constants/fonts';
import {hp, wp} from '../utils/layout';

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
  },
});
