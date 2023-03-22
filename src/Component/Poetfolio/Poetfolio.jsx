import React from 'react'

import {
    Box, Stack, Wrap, Grid, Center, WrapItem, SimpleGrid, GridItem, Heading, Flex, Text, View, FormLabel, Input, Button, FormControl, Image, HStack, CardHeader, Card, CardBody, CardFooter, Container, VStack
} from "@chakra-ui/react";
import { HamburgerIcon, ArrowRightIcon, AddIcon, WarningIcon } from "@chakra-ui/icons";
import { Link, useNavigate, } from 'react-router-dom';

export default function Portfolio() {

    const navigate = useNavigate();
    return (

        <Container maxW="container" p='10' width="" rounded='lg'>
            <Box boxShadow="2xl" width="100%" minHeight="70vh" p={2} rounded="md" paddingTop='10%' backgroundColor='#A7B3C2'>
                <Wrap spacing='30px' align='center' justify='center'>
                    <WrapItem>
                        <Card
                            backgroundColor="gray.100"
                            height={60}
                            borderRadius={20}
                            boxShadow='xl'
                            onClick={() => navigate('/Thematic')}
                        >
                            <CardHeader >
                                <Heading borderTopRadius={20} size='md' backgroundColor="#084877" height={20} color='white' textAlign="center" fontSize={25} fontWeight="bold">Thematic Porfolio</Heading>
                            </CardHeader>
                            <CardBody>
                                <Text>View a summary of all your customers over the last month.</Text>
                            </CardBody>
                            <CardFooter>
                                <Button backgroundColor="blue.100">View here</Button>
                            </CardFooter>
                        </Card>
                    </WrapItem>
                    <WrapItem>
                        <Card backgroundColor="gray.100"
                            height={60}
                            borderRadius={20}
                            boxShadow='xl'
                            onClick={() => navigate('/StepComponent')}
                        >
                            <CardHeader >
                                <Heading borderTopRadius={20} size='md' backgroundColor="#084877" height={20} color='white' textAlign="center" fontSize={25} fontWeight="bold">Goals Base Tnvestment</Heading>
                            </CardHeader>
                            <CardBody>
                                <Text>View a summary of all your customers over the last month.</Text>
                            </CardBody>
                            <CardFooter>
                                <Button backgroundColor="blue.100">View here</Button>
                            </CardFooter>
                        </Card>
                    </WrapItem>
                </Wrap>

               
                {/* <VStack mt={10} >
                    <Button colorScheme='teal' w={40}> <ArrowRightIcon />  <ArrowRightIcon /></Button>
                </VStack> */}
                {/* </HStack> */}
            </Box>
            {/* </Flex> */}

        </Container>
    )
}
