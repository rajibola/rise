import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {Button, Card, Header, List} from '../../components';
import {Data} from '../../utils/data';
import {walletStyles as styles} from './styles';

export const Wallet: React.FC<any> = props => {
  return (
    <View style={styles.container}>
      <Header title="Wallet" />
      <ScrollView>
        <Card />

        <View style={styles.buttonContainer}>
          <Button
            title="Send Money"
            onPress={() => null}
            style={styles.button}
            secondary
          />

          <Button
            title="Fund Wallet"
            onPress={() => null}
            style={styles.button}
          />
        </View>

        <View style={styles.recentHeaders}>
          <Text style={styles.recent}>Recent Transactions</Text>
          <Text style={styles.viewAll}>View All</Text>
        </View>

        {Data.map(a => (
          <List
            title={a.title}
            date={a.date}
            amount={a.amount}
            status={a.status}
          />
        ))}
      </ScrollView>
    </View>
  );
};
