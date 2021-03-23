import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {Icon} from '../../assets/images';
import {Header} from '../../components';
import {colors} from '../../constants';
import {NavigationParamList} from '../../navigation';
import {ChooseCardStyles as styles} from './styles';

export type ChooseCardProps = {
  navigation: ChooseCardNavigatonProps;
};
export type ChooseCardNavigatonProps = StackNavigationProp<NavigationParamList>;

export const ChooseCard: React.FC<ChooseCardProps> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header title="Confirm Amount" backButton onPress={navigation.goBack} />

      <TouchableOpacity style={styles.list}>
        <View style={styles.leftContainer}>
          <View style={styles.iconContainer}>
            <Icon.Atm color={colors.teal} />
          </View>

          <View>
            <Text style={styles.payText}>Pay with a new Naira card</Text>
            <Text style={styles.supportText}>
              We support Mastercard, Visa and Verve.
            </Text>
          </View>
        </View>

        <Icon.ArrowHead color={colors.teal} />
      </TouchableOpacity>
    </View>
  );
};
