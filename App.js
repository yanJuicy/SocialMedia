import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'react-native';
import Title from './components/Title/Title';

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" />
      <Title title={"Let's explore"} />
    </SafeAreaView>
  );
};

export default App;
