import {WalletAction, WalletState} from '../types/types.d';
import * as actionTypes from './actionTypes';

export function fundWallet(amount: number) {
  const action: WalletAction = {
    type: actionTypes.FUND_WALLET,
    amount,
  };

  return action;
}
