/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import 'react-native-gesture-handler';
import MainNavigator from './src/navigation';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, Store} from 'redux';
import {DispatchType, WalletAction, WalletState} from './src/types/types.d';
import reducer from './src/redux/reducers';

const store: Store<WalletState, WalletAction> & {
  dispatch: DispatchType;
} = createStore(reducer);

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
