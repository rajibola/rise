import React from 'react';
import {Text, View} from 'react-native';
import {Icon} from '../../assets/images';
import {Button, Header} from '../../components';
import {fundWalletStyles as styles} from './styles';

export const FundWallet: React.FC<any> = props => {
  return (
    <View style={styles.container}>
      <Header title="Debit Card" backButton />

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
        <Text style={styles.amount}>4,200.00</Text>
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
        <Text style={styles.amount}>10.00</Text>
      </View>

      <Button title="Add Money" onPress={() => null} style={styles.button} />
    </View>
  );
};
