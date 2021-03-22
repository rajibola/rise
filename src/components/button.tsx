import React from 'react';
import {Text, TouchableOpacity, ViewStyle} from 'react-native';
import {ButtonStyles as styles} from './styles';

export type Button = {
  title: string;
  style?: ViewStyle;
  onPress: () => void;
};

export const Button: React.FC<Button> = ({title, style}) => {
  return (
    <TouchableOpacity style={[styles.button, style]}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};
