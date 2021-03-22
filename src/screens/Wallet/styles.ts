import {Platform, StyleSheet} from 'react-native';
import {getStatusBarHeight, hp, wp} from '../../utils/layout';

export const LoginStyles = StyleSheet.create({
  welcome: {
    marginTop: hp(81),
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: Platform.OS === 'ios' ? getStatusBarHeight() : 0,
    paddingHorizontal: wp(16),
  },
});
