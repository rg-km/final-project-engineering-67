import { ChakraProvider } from "@chakra-ui/react";
import NavigationBar from "./components/Header";


function App() {
  return (
    <ChakraProvider>
      <NavigationBar/>
    </ChakraProvider>
  );
}

export default App;
