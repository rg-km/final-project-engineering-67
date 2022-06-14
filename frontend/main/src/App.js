import { ChakraProvider } from "@chakra-ui/react";
import DarkModeSwitch from "./components/Darkmode";
import NavigationBar from "./components/Header";


function App() {
  return (
    <ChakraProvider>
      <DarkModeSwitch/>
      {/* <NavigationBar/> */}
    </ChakraProvider>
  );
}

export default App;
