import {Transactions, WalletAction, WalletState} from '../types/types.d';
import {Data} from '../utils/data';
import * as actionTypes from './actionTypes';

const initialState: WalletState = {
  transactions: {
    balance: 150000,
    data: Data,
  },
};

const reducer = (
  state: WalletState = initialState,
  action: WalletAction,
): WalletState => {
  switch (action.type) {
    case actionTypes.FUND_WALLET:
      const newTransaction: Transactions = {
        title: 'Deposit',
        date: 'Apr 28, 2020',
        amount: action.amount.toString(),
      };

      let newArray = state.transactions.data.slice();
      newArray.unshift(newTransaction);

      return {
        ...state,
        transactions: {
          balance: state.transactions.balance + action.amount,
          data: newArray,
        },
      };

    default:
      return state;
  }
};

export default reducer;
