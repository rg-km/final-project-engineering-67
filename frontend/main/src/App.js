import React from 'react';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import { HeaderNav } from './components/Header';
import { SuperHero } from './components/Hero';
import DashBoardMain from './pages/Dashboard';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <HeaderNav/>
      <DashBoardMain/>
    </ChakraProvider>
  );
}

export default App;
