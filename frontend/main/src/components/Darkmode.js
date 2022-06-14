import { Flex, Stack, IconButton, Button } from "@chakra-ui/react";
import { useColorMode } from '@chakra-ui/react';
import {FaMoon, FaSun} from 'react-icons/fa';
import React from "react";
import { BrowserRouter as 
    Router, 
    Route, 
    Switch } from "react-router-dom";


function DarkModeSwitch () {
    const { colorMode, toggleColorMode } = useColorMode();
    const isDark = colorMode === 'dark';

    return(
        <Flex>
            <Flex pos='fixed' top='1rem' right='1rem' align='center'>
                <Flex px='2' display={['none', 'none', 'flex', 'flex']}>
                    <Router href="/">
                        <Button as="a" variant="ghost" aria-label="Home" my={5} w="100%">
                            Home
                        </Button>
                    </Router>
                    <Router href="/">
                        <Button as="a" variant="ghost" aria-label="Home" my={5} w="100%">
                            Donasi
                        </Button>
                    </Router>
                    <Router href="/">
                        <Button as="a" variant="ghost" aria-label="Home" my={5} w="100%">
                            Tutorial
                        </Button>
                    </Router>
                    <Router href="/">
                        <Button as="a" variant="ghost" aria-label="Home" my={5} w="100%">
                            Testimoni
                        </Button>
                    </Router>
                    <Router href="/">
                        <Button as="a" variant="outline" aria-label="Home" my={5} w="100%">
                            Get Started
                        </Button>
                    </Router>
                </Flex>
                <Flex px='1'>
                    <Stack direction='row' spacing='4' align='end'>
                        <IconButton icon={ isDark ? <FaSun/> : <FaMoon/>} isRound='true' onClick={toggleColorMode}/>
                    </Stack>
                </Flex>
            </Flex>

        </Flex>
    );
}


export default DarkModeSwitch;