import React from 'react';
import {Alert, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {Dispatch} from 'redux';
import {Icon} from '../../assets/images';
import {Header} from '../../components';
import {colors} from '../../constants';
import {fundWallet} from '../../redux/actionCreators';
import {ChooseCardProps} from '../../types/types.d';
import {ChooseCardStyles as styles} from './styles';

export const ChooseCard: React.FC<ChooseCardProps> = ({navigation, route}) => {
  const dispatch: Dispatch<any> = useDispatch();

  const handleAmount = async () => {
    await dispatch(fundWallet(route.params.amount));
    Alert.alert(
      `You have succesfully added $${route.params.amount} to your balance`,
    );
  };

  return (
    <View style={styles.container}>
      <Header title="Confirm Amount" backButton onPress={navigation.goBack} />

      <TouchableOpacity style={styles.list} onPress={handleAmount}>
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
