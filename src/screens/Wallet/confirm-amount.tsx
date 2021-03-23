import React from 'react';
import {Text, View} from 'react-native';
import {Button, Header} from '../../components';
import {ConfirmAmountProps} from '../../types/types.d';
import {dollarConverter, formatedAmount} from '../../utils/helpers';
import {ConfirmAmountStyles as styles} from './styles';

export const ConfirmAmount: React.FC<ConfirmAmountProps> = ({
  navigation,
  route,
}) => {
  const {amount} = route.params;

  const formatted = formatedAmount(amount);

  return (
    <View style={styles.container}>
      <Header title="Confirm Amount" backButton onPress={navigation.goBack} />
      <Text style={styles.total}>
        <Text style={styles.naira}>₦ </Text>
        {formatted.total}
      </Text>

      <SimpleList
        leftText="Amout added to wallet"
        rightText={`₦${formatted.value}`}
      />
      <SimpleList
        leftText="Processing fee (1.5%)"
        rightText={`₦${formatted.fee}`}
      />
      <SimpleList
        leftText="Amount in USD"
        rightText={`$${dollarConverter(amount)}`}
      />

      <Button
        title={`Add ₦${formatted.total}`}
        onPress={() =>
          navigation.navigate('ChooseCard', {
            amount: amount,
          })
        }
        style={styles.button}
      />
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
