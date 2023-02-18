import React from 'react'

import {
    Box, Stack, Wrap, Grid, Center, WrapItem, SimpleGrid, GridItem, Heading, Flex, Text, View, FormLabel, Input, Button, FormControl, Image, HStack, CardHeader, Card, CardBody, CardFooter, Container, VStack
} from "@chakra-ui/react";
import { HamburgerIcon, ArrowRightIcon, AddIcon, WarningIcon } from "@chakra-ui/icons";
import { Link } from 'react-router-dom';
import StartInvestment from '../../assets/StartInvestment.png'
import UpdateCRP from '../../assets/UpdateCRP.png'
import ChandePass from '../../assets/ChandePass.png'
import PC from '../../assets/PC.png'
import PortflioPosi from '../../assets/PortflioPosi.png'
import Wallet from '../../assets/Wallet.png'
// import UpdateCRP from '../../assets/UpdateCRP.png'


export default function DashboardTwo() {


    const handleClick = event => {
        // 👇️ refers to the image element
        console.log(event.target);

        console.log('Image clicked');
    };

    return (

        <Container p='10' width="" rounded='lg'>
            <Box
                boxShadow="2xl"
                width="100%"
                minHeight="70vh"
                rounded="md"
                bgGradient={[
                    'linear(to-tr, teal.300, #FFFFFF)',
                    'linear(to-t, #316489, teal.500)',
                    'linear(to-b, #316489, #316489',
                ]}
                color='white'
            >


                <Wrap spacing='30px' align='center' justify='center' p={10} >
                    <WrapItem >
                        <Center boxShadow="2xl" onClick={handleClick} w='310px' h='180px'>
                            <VStack >
                                <Image src={StartInvestment} w='150px' h='150px' />
                                <Text color='white'>Laptop/Pc</Text>
                            </VStack>
                        </Center>
                    </WrapItem>
                    <WrapItem>
                        <Center rounded="md" boxShadow="2xl" w='310px' h='180px'>
                            <VStack>
                                <Image src={UpdateCRP} w='190px' h='150px' />
                                <Text color='white'>Mobile/Gadgets</Text>
                            </VStack>
                        </Center>
                    </WrapItem>
                    <WrapItem >
                        <Center boxShadow="2xl" w='310px' h='180px'>
                            <VStack>
                                <Image src={UpdateCRP} w='190px' h='150px' />
                                <Text color='white'>Apparel</Text>
                            </VStack>
                        </Center>
                    </WrapItem>
                </Wrap>

                <Wrap spacing='30px' align='center' justify='center' >
                    <WrapItem>
                        <Center
                            // bg='gray.200'
                            boxShadow="2xl"
                            onClick={handleClick}
                            w='310px' h='180px'
                        >
                            <VStack>
                                <Image src={PC} w='130px' h='120px' />

                                <Text color='white'>
                                    Custom
                                </Text>
                            </VStack>
                        </Center>
                    </WrapItem>
                    <WrapItem>
                        <Center
                            // bg='red.200'
                            rounded="md"
                            boxShadow="2xl"
                            w='310px' h='180px'
                        >
                            <VStack>

                                <Image src={Wallet} w='130px' h='120px' />
                                <Text color='white'>
                                    Education
                                </Text>
                            </VStack>
                            {/* Box 2 */}
                        </Center>
                    </WrapItem>
                    <WrapItem >
                        <Center
                            // bg='red.200'

                            w='310px' h='180px'
                            boxShadow="2xl"
                        >
                            <VStack>
                                <Image src={ChandePass} w='130px' h='120px' />
                                <Text color='white'>
                                    Vocation
                                </Text>
                            </VStack>
                        </Center>
                    </WrapItem>
                </Wrap>
                <VStack mt={10} >
                    <Button colorScheme='teal' w={40}> <ArrowRightIcon />  <ArrowRightIcon /></Button>
                </VStack>
            </Box >

        </Container >
    )
}
