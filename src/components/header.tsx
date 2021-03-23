import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {Icon} from '../assets/images';
import {colors} from '../constants/colors';
import {HeaderStyles as styles} from './styles';

export type HeaderProps = {
  title: string;
  backButton?: boolean | (() => void);
  onPress?: () => void;
};

export const Header: React.FC<HeaderProps> = ({title, backButton, onPress}) => {
  return (
    <View style={styles.header}>
      <View>
        {backButton && (
          <TouchableOpacity
            onPress={onPress}
            style={[styles.button, styles.iconContainer]}>
            <Icon.BackArrow color={colors.teal} />
          </TouchableOpacity>
        )}
      </View>
      <Text style={styles.title}>{title}</Text>
      <View>{backButton && <View style={styles.button} />}</View>
    </View>
  );
};
