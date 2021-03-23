import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {shallowEqual, useSelector} from 'react-redux';
import {Button, Card, Header, List} from '../../components';
import {WalletScreenProps, WalletState} from '../../types/types.d';
import {walletStyles as styles} from './styles';

export const Wallet: React.FC<WalletScreenProps> = ({navigation}) => {
  const {transactions}: WalletState = useSelector(
    (state: WalletState) => state,
    shallowEqual,
  );

  return (
    <View style={styles.container}>
      <Header title="Wallet" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Card amount={transactions.balance} />

        <View style={styles.buttonContainer}>
          <Button
            title="Send Money"
            onPress={() => null}
            style={styles.button}
            secondary
          />

          <Button
            title="Fund Wallet"
            onPress={() => navigation.navigate('FundWallet')}
            style={styles.button}
          />
        </View>

        <View style={styles.recentHeaders}>
          <Text style={styles.recent}>Recent Transactions</Text>
          <Text style={styles.viewAll}>View All</Text>
        </View>

        {transactions.data.map((a, i) => (
          <List
            title={a.title}
            date={a.date}
            amount={a.amount}
            status={a.status}
            key={i}
          />
        ))}
      </ScrollView>
    </View>
  );
};
