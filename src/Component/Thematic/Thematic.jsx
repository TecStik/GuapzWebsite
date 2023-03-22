import React from 'react'

import {
    Box, Stack, Wrap, Grid, Center, WrapItem, SimpleGrid, GridItem, Heading, Flex, Text, View, FormLabel, Input, Button, FormControl, Image, HStack, CardHeader, Card, CardBody, CardFooter, Container, VStack
} from "@chakra-ui/react";
import { HamburgerIcon, ArrowRightIcon, ArrowLeftIcon, ArrowForwardIcon, AddIcon, WarningIcon } from "@chakra-ui/icons";
import { Link, useNavigate, } from 'react-router-dom';
import thematicWallet from '../../assets/thematicWallet.png'
import StableIncome from '../../assets/StableIncome.png'
import ChandePass from '../../assets/ChandePass.png'
import Balance from '../../assets/Balance.png'
import PortflioPosi from '../../assets/PortflioPosi.png'
import moneyGrowth from '../../assets/moneyGrowth.png'
// import UpdateCRP from '../../assets/UpdateCRP.png'

export default function Thematic() {

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
                <Button colorScheme='teal' variant='outline'  onClick={() => navigate('/')}><ArrowLeftIcon /> <ArrowLeftIcon /></Button>
                <Wrap spacing='30px' align='center' justify='center' p={10}>
                    <WrapItem>
                        <Center boxShadow="2xl" w='310px' h='180px' onClick={() => navigate('/portfolio')}>
                            <VStack>
                                <Image src={thematicWallet} w='130px' h='115px' />
                                <Text color='white'>Saving</Text>
                            </VStack>
                        </Center>
                    </WrapItem>
                    <WrapItem>
                        <Center rounded="md" boxShadow="2xl" w='310px' h='180px'>
                            <VStack>
                                <Image src={StableIncome} w='120px' h='115px' />
                                <Text color='white'>Stable Income</Text>
                            </VStack>
                            {/* Box 2 */}
                        </Center>
                    </WrapItem>
                </Wrap>

                <Wrap spacing='30px' align='center' justify='center' pb={10} >
                    <WrapItem>
                        <Center boxShadow="2xl" w='310px' h='180px'>
                            <VStack>
                                <Image src={Balance} w='120px' h='115px' />
                                <Text color='white'>Balanced</Text>
                            </VStack>
                        </Center>
                    </WrapItem>
                    <WrapItem>
                        <Center rounded="md" boxShadow="2xl" w='310px' h='180px' >
                            <VStack>

                                <Image src={moneyGrowth} w='120px' h='115px' />
                                <Text color='white'>
                                    Growth
                                </Text>
                            </VStack>
                            {/* Box 2 */}
                        </Center>
                    </WrapItem>
                </Wrap>
            </Box>

        </Container>
    )
}
