import React from 'react'

import {
    Box, Stack, Wrap, Grid, Center, WrapItem, SimpleGrid, GridItem, Heading, Flex, Text, View, FormLabel, Input, Button, FormControl, Image, HStack, CardHeader, Card, CardBody, CardFooter, Container, VStack
} from "@chakra-ui/react";
import { HamburgerIcon, ArrowRightIcon, AddIcon, WarningIcon } from "@chakra-ui/icons";
import { Link, useNavigate, } from 'react-router-dom';
import StartInvestment from '../../assets/StartInvestment.png'
import UpdateCRP from '../../assets/UpdateCRP.png'
import ChandePass from '../../assets/ChandePass.png'
import PC from '../../assets/PC.png'
import PortflioPosi from '../../assets/PortflioPosi.png'
import Wallet from '../../assets/Wallet.png'
// import UpdateCRP from '../../assets/UpdateCRP.png'

export default function Dashboard() {

    const navigate = useNavigate();
    const handleClick = event => {
        // 👇️ refers to the image element
        console.log(event.target);

        console.log('Image clicked');
    };

    return (

        <Container p='10' width="" rounded='lg'>
            <Box boxShadow="2xl" width="100%" minHeight="70vh" rounded="md" color='white'
                bgGradient={[
                    'linear(to-tr, teal.300, #FFFFFF)',
                    'linear(to-t, #316489, teal.500)',
                    'linear(to-b, #316489, #316489',
                ]}
            >

                <Wrap spacing='30px' align='center' justify='center' p={10}>
                    <WrapItem>
                        <Center boxShadow="2xl" w='310px' h='180px' onClick={() => navigate('/portfolio')}>
                            <VStack>
                                <Image src={StartInvestment} w='150px' h='130px' />
                                <Text color='white'> Starting Investment </Text>
                            </VStack>
                        </Center>
                    </WrapItem>
                    <WrapItem>
                        <Center rounded="md" boxShadow="2xl" w='310px' h='180px'>
                            <VStack>
                                <Image src={UpdateCRP} w='170px' h='130px' />
                                <Text color='white'> Update CRP</Text>
                            </VStack>
                            {/* Box 2 */}
                        </Center>
                    </WrapItem>
                    <WrapItem >
                        <Center boxShadow="2xl" w='310px' h='180px'>
                            <VStack>
                                <Image src={PortflioPosi} w='280px' h='130px' />
                                <Text color='white'> Update CRP </Text>
                            </VStack>
                        </Center>
                    </WrapItem>
                </Wrap>

                <Wrap spacing='30px' align='center' justify='center' pb={10} >
                    <WrapItem>
                        <Center boxShadow="2xl" w='310px' h='180px'>
                            <VStack>
                                <Image src={PC} w='120px' h='110px' />
                                <Text color='white'> Update KYC</Text>
                            </VStack>
                        </Center>
                    </WrapItem>
                    <WrapItem>
                        <Center rounded="md" boxShadow="2xl" w='310px' h='180px' >
                            <VStack>

                                <Image src={Wallet} w='120px' h='100px' />
                                <Text color='white'>
                                    Wallet
                                </Text>
                            </VStack>
                            {/* Box 2 */}
                        </Center>
                    </WrapItem>
                    <WrapItem >
                        <Center rounded="md" boxShadow="2xl" w='310px' h='180px'>
                            <VStack>
                                <Image src={ChandePass} w='120px' h='100px' />
                                <Text color='white'>
                                    Change Password
                                </Text>
                            </VStack>
                        </Center>
                    </WrapItem>
                </Wrap>

                {/* <VStack mb={10} >
                    <Button colorScheme='teal' w={40}> <ArrowRightIcon />  <ArrowRightIcon /></Button>
                </VStack> */}
            </Box>

        </Container>
    )
}
