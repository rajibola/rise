import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {Icon} from '../assets/images';
import {colors} from '../constants';
import {CardProps} from '../types/types.d';
import {moneyFormater} from '../utils/helpers';
import {wp} from '../utils/layout';
import {CardStyles as styles} from './styles';

export const Card: React.FC<CardProps> = ({amount}) => {
  const [showBalance, setBalance] = useState(true);
  return (
    <TouchableOpacity
      style={styles.cardContainer}
      onPress={() => setBalance(!showBalance)}>
      <View style={styles.topContainer}>
        <View>
          <View style={styles.wallet}>
            <Text style={styles.walletText}>Wallet Balance</Text>
            <Icon.Eye width={wp(13)} height={wp(8.89)} color={colors.teal} />
          </View>
          <Text style={styles.balance}>
            ${showBalance ? moneyFormater(amount || 20000) : '•••••'}
          </Text>
        </View>
        <Icon.Wallet color={colors.teal} />
      </View>

      <TouchableOpacity style={styles.footer}>
        <Text style={styles.footerText}>View Account Numbers</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};
