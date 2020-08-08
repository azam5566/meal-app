import React from 'react';
import { AuthUserProvider } from './AuthUserProvider';
import Routes from './Routes';
/**
 * Wrap all providers here
 */
import { persistor, store } from './../utils/store';
import { MenuProvider } from 'react-native-popup-menu';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';

export default function Providers() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MenuProvider>
          <AuthUserProvider>
            <Routes />
          </AuthUserProvider>
        </MenuProvider>
      </PersistGate>
    </Provider>
  );
}
