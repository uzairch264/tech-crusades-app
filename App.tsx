import './global.css';
import React from 'react';
import LandingScreen from './src/screens/landing/landingScreen';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

function App(): React.JSX.Element {
  return (
    <GestureHandlerRootView style={{flex:1}}>
      <LandingScreen />
    </GestureHandlerRootView>
  );
}

export default App;
