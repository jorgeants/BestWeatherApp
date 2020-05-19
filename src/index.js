import React from 'react';
import { StatusBar } from 'react-native';
import FlashMessage from 'react-native-flash-message';

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
          <FlashMessage
            position="top"
            animationDuration={400}
            duration={4000}
          />
        </>
      </PersistGate>
    </Provider>
  );
};

export default App;
