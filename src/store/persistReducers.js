import AsyncStorage from '@react-native-community/async-storage';
import { persistReducer } from 'redux-persist';

export default (reducers) => {
  const persistedReducer = persistReducer(
    {
      key: 'github_viewer_app',
      storage: AsyncStorage,
      whitelist: ['forecast'],
    },
    reducers
  );

  return persistedReducer;
};
