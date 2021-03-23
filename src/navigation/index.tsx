import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Login} from '../screens/Login/login';
import {ChooseCard, ConfirmAmount, FundWallet, Wallet} from '../screens/Wallet';

export type NavigationParamList = {
  Login: undefined;
  ChooseCard: undefined;
  ConfirmAmount: undefined;
  FundWallet: undefined;
  Wallet: undefined;
};

const Navigator = createStackNavigator<NavigationParamList>()?.Navigator;
const Screen = createStackNavigator<NavigationParamList>()?.Screen;

export default function MainNavigator() {
  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name="Login" component={Login} />
      <Screen name="Wallet" component={Wallet} />
      <Screen name="ChooseCard" component={ChooseCard} />
      <Screen name="ConfirmAmount" component={ConfirmAmount} />
      <Screen name="FundWallet" component={FundWallet} />
    </Navigator>
  );
}
