import React from 'react';
import {ImageSourcePropType, TextInput, View} from 'react-native';
import {SvgProps} from 'react-native-svg';
import {colors} from '../constants/colors';
import {InputStyles as styles} from './styles';

export type Input = {
  placeHolder: string;
  icon?: any;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
};

export const Input: React.FC<Input> = (
  {icon, placeHolder, onChangeText, secureTextEntry},
  props,
) => (
  <View style={styles.inputContainer}>
    <TextInput
      style={styles.input}
      placeholder={placeHolder}
      onChangeText={onChangeText}
      placeholderTextColor={colors.dark}
      secureTextEntry={secureTextEntry}
      {...props}
    />
    {icon && icon}
  </View>
);
