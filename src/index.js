import React from 'react';
import { SafeAreaView, ScrollView, View, Text, StatusBar } from 'react-native';

const App = () => {
  return (
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
  );
};

export default App;
