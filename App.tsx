import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ThemeProvider } from "styled-components/native";
import { Home } from './src/screens/Home';
import AppLoading from 'expo-app-loading';

import {
  useFonts,
  Roboto_900Black,
  Roboto_500Medium,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto';
import { theme } from './src/global/styles/theme';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_900Black,
    Roboto_500Medium,
    Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />
  }


  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

