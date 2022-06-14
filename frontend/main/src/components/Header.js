import { Flex, VStack, Heading, IconButton, Button, Stack, Spacer, Switch } from "@chakra-ui/react";
import {FaMoon, FaSun} from 'react-icons/fa';
import React from "react";
import { useColorMode } from '@chakra-ui/react';

function NavigationBar(){
    const {colorMode, toggleColorMode} = useColorMode();
    const isDark = colorMode === 'dark';

    return(
        <VStack p={5}>
            <Flex w='100%'>
                <Heading ml={8} size='md' fontWeight='semibold' color='cyan.400'>
                    Doakan
                </Heading>
                <Spacer/>
                <Stack direction='row' spacing='4' align='center' pr='4'>
                    <Button variant='ghost'>Home</Button>
                    <Button variant='ghost'>Donasi</Button>
                    <Button variant='ghost'>Tutorial</Button>
                    <Button variant='ghost'>Testimoni</Button>
                    <Button>Get Started</Button>
                </Stack>
                <Stack direction='row' spacing='4' align='end'>
                    <IconButton icon={ isDark ? <FaSun/> : <FaMoon/>} isRound='true' onClick={toggleColorMode}/>
                </Stack>
                <Switch color='green' isChecked={isDark} onChange={toggleColorMode}></Switch>
            </Flex>
        </VStack>
    );
}


export default NavigationBar;