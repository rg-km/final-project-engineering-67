import { Heading, IconButton, VStack, Flex, Button, Spacer } from "@chakra-ui/react";
import {FaSun, FaMoon} from 'react-icons/fa';
import { useColorMode } from "@chakra-ui/react";
import { BrowserRouter as 
    Router } from "react-router-dom";



export const HeaderNav = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const isDark = colorMode === 'dark';


    return(
        <VStack>
            <Flex w='100%'>
                <Heading p='1rem' m='0.7rem' ml='7' size='md' fontWeight='semibold' color='cyan.400' >Doakan</Heading>
                <Spacer/>
                <Router href="/">
                    <Button as="a" variant="ghost" aria-label="Donasi" my={5}>
                        Home
                    </Button>
                </Router>
                <Router href="/">
                    <Button as="a" variant="ghost" aria-label="Tutorial" my={5}>
                        Tutorial
                    </Button>
                </Router>
                <Router href="/">
                    <Button as="a" variant="ghost" aria-label="Testimoni" my={5}>
                        Testiomoni
                    </Button>
                </Router>
                <Router href="/">
                    <Button as="a" variant="outline" aria-label="Get Started" my={5}>
                        Get Started
                    </Button>
                </Router>
                <IconButton m='1.2rem' p='1rem' icon={ isDark ? <FaSun/> : <FaMoon/>} isRound='true' onClick={toggleColorMode}/>
            </Flex>
        </VStack>
    );
}