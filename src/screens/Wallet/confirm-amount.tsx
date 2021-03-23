import React from 'react';
import {Text, View} from 'react-native';
import {Button, Header} from '../../components';
import {ConfirmAmountStyles as styles} from './styles';

export const ConfirmAmount: React.FC<any> = props => {
  return (
    <View style={styles.container}>
      <Header title="Confirm Amount" backButton />
      <Text style={styles.total}>
        <Text style={styles.naira}>₦ </Text>4,263.00
      </Text>

      <SimpleList leftText="Amout added to wallet" rightText="₦4,200.00" />
      <SimpleList leftText="Processing fee (1.5%)" rightText="₦63.00" />
      <SimpleList leftText="AAmount in USD" rightText="$10.00" />

      <Button title="Add ₦4,263" onPress={() => null} style={styles.button} />
    </View>
  );
};

export type SimpleListProps = {
  leftText: string;
  rightText: string;
};

export const SimpleList: React.FC<SimpleListProps> = ({
  leftText,
  rightText,
}) => {
  return (
    <View style={styles.listContainer}>
      <Text style={styles.leftText}>{leftText}</Text>
      <Text style={styles.rightText}>{rightText}</Text>
    </View>
  );
};
