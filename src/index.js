import React from 'react';
import { StatusBar } from 'react-native';

import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

import '~/config/ReactotronConfig';

import { store, persistor } from '~/store';

import Main from '~/pages/Main';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <>
          <StatusBar barStyle="light-content" />
          <Main />
        </>
      </PersistGate>
    </Provider>
  );
};

export default App;
