import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

export type NavigationParamList = {
  Login: undefined;
  ChooseCard: undefined;
  ConfirmAmount: {amount: number};
  FundWallet: undefined;
  Wallet: undefined;
};

export type ConfirmAmountProps = {
  navigation: ConfirmAmountNavigatonProps;
  route: ConfirmRouteProp;
};

export type ConfirmRouteProp = RouteProp<NavigationParamList, 'ConfirmAmount'>;
export type ConfirmAmountNavigatonProps = StackNavigationProp<NavigationParamList>;

export type WalletScreenProps = {
  navigation: WalletNavigatonProps;
};
export type WalletNavigatonProps = StackNavigationProp<NavigationParamList>;

export type FundWalletScreenProps = {
  navigation: FundWalletNavigatonProps;
};
export type FundWalletNavigatonProps = StackNavigationProp<NavigationParamList>;

export type LoginScreenProps = {
  navigation: LoginNavigatonProps;
};
export type LoginNavigatonProps = StackNavigationProp<NavigationParamList>;
