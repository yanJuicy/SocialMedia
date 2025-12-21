import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar, Text } from 'react-native';
import { getFontFamily } from "./assets/fonts/helper";

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" />
      <Text style={{ fontSize: 50, fontFamily: getFontFamily('Inter', '700') }}>
        Hello World!
      </Text>
    </SafeAreaView>
  );
};

export default App;
