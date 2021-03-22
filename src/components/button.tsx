import React from 'react';
import {Text, TouchableOpacity, ViewStyle} from 'react-native';
import {colors} from '../constants/colors';
import {ButtonStyles as styles} from './styles';

export type Button = {
  title: string;
  style?: ViewStyle;
  onPress: () => void;
  secondary?: boolean;
};

export const Button: React.FC<Button> = ({title, style, secondary}) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        style,
        secondary && {backgroundColor: colors.off_teal},
      ]}>
      <Text style={[styles.buttonText, secondary && {color: colors.teal}]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};
