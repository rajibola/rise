import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {image} from '../assets/images';
import {HeaderStyles as styles} from './styles';

export type HeaderProps = {
  title: string;
  backButton?: boolean;
};

export const Header: React.FC<HeaderProps> = ({title, backButton}) => {
  return (
    <View style={styles.header}>
      <View>
        {backButton && (
          <TouchableOpacity
            onPress={() => null}
            style={[styles.button, styles.iconContainer]}>
            <image.BackArrow />
          </TouchableOpacity>
        )}
      </View>
      <Text style={styles.title}>{title}</Text>
      <View>{backButton && <View style={styles.button} />}</View>
    </View>
  );
};
