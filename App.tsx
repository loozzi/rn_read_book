import React from 'react';
import {ScrollView, useColorScheme, View} from 'react-native';

import LoginScreen from './src/screens/login';
import HomeScreen from './src/screens/home';

function App(): React.JSX.Element {
  return (
    <ScrollView
      style={{
        backgroundColor: '#fff',
      }}>
      {/* <LoginScreen /> */}
      <HomeScreen />
    </ScrollView>
  );
}

export default App;
