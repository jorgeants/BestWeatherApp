import React from 'react';
import { SafeAreaView, ScrollView, View, Text, StatusBar } from 'react-native';

import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

import '~/config/ReactotronConfig';

import { store, persistor } from '~/store';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <>
          <StatusBar barStyle="dark-content" />
          <SafeAreaView>
            <ScrollView contentInsetAdjustmentBehavior="automatic">
              <View>
                <Text>Start here</Text>
              </View>
            </ScrollView>
          </SafeAreaView>
        </>
      </PersistGate>
    </Provider>
  );
};

export default App;
