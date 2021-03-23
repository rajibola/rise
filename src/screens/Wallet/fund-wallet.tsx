import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {Text, View} from 'react-native';
import CurrencyInput from 'react-native-currency-input';
import {Icon} from '../../assets/images';
import {Button, Header} from '../../components';
import {NavigationParamList} from '../../navigation';
import {dollarConverter} from '../../utils/helpers';
import {fundWalletStyles as styles} from './styles';

export type FundWalletScreenProps = {
  navigation: FundWalletNavigatonProps;
};
export type FundWalletNavigatonProps = StackNavigationProp<NavigationParamList>;

export const FundWallet: React.FC<FundWalletScreenProps> = ({navigation}) => {
  const [value, setValue] = React.useState(0);

  return (
    <View style={styles.container}>
      <Header title="Debit Card" backButton onPress={navigation.goBack} />

      <View style={styles.rectangle}>
        <Text style={styles.box}>Your Debit Card</Text>
        <View style={styles.verticalLine} />
        <View style={styles.box}>
          <Text style={styles.riseWallet}>Rise Wallet</Text>
          <Text style={styles.balance}>$20.34</Text>
        </View>
        <View style={styles.arrow}>
          <Icon.ArrowRight color="#fff" />
        </View>
      </View>

      <View style={styles.amountInNaira}>
        <Text style={styles.amount}>₦</Text>
        <CurrencyInput
          keyboardType="number-pad"
          onChangeValue={(e: number) => setValue(e)}
          precision={2}
          style={[styles.amount, {flex: 1, textAlign: 'right'}]}
          value={value}
          separator="."
          delimiter=","
        />
      </View>

      <View style={styles.rateContainer}>
        <View style={styles.rateBox1}>
          <Text style={styles.rate}>$1 = ₦420</Text>
        </View>
        <View style={styles.rateBox2}>
          <Text style={styles.whyRate}>Why this rate?</Text>
        </View>
      </View>

      <View style={[styles.amountInNaira, styles.margins]}>
        <Text style={styles.amount}>$</Text>
        <Text style={styles.amount}>{dollarConverter(value)}</Text>
      </View>

      <Button
        title="Add Money"
        onPress={() => navigation.navigate('ConfirmAmount', {amount: value})}
        style={styles.button}
      />
    </View>
  );
};
