import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

//REDUX START

export type Transactions = DataTypes;

export type WalletState = {
  transactions: {
    balance: number;
    data: Transactions[];
  };
};

export type WalletAction = {
  type: string;
  amount: number;
};

export type DispatchType = (args: WalletAction) => WalletAction;

//REDUX END

export type DataTypes = {
  title: string;
  date: string;
  amount: string;
  status?: string;
};
export type CardProps = {
  amount?: number;
};
export type NavigationParamList = {
  Login: undefined;
  ChooseCard: {amount: number};
  ConfirmAmount: {amount: number};
  FundWallet: undefined;
  Wallet: undefined;
};

export type ChooseCardProps = {
  navigation: ChooseCardNavigatonProps;
  route: ChooseCardRouteProp;
};
export type ChooseCardRouteProp = RouteProp<NavigationParamList, 'ChooseCard'>;
export type ChooseCardNavigatonProps = StackNavigationProp<NavigationParamList>;

export type ConfirmAmountProps = {
  navigation: ConfirmAmountNavigatonProps;
  route: ConfirmRouteProp;
};
export type ConfirmRouteProp = RouteProp<NavigationParamList, 'ConfirmAmount'>;
export type ConfirmAmountNavigatonProps = StackNavigationProp<NavigationParamList>;

export type WalletScreenProps = {
  navigation: WalletNavigatonProps;
  wallet_balance: number;
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
