import React from 'react'
import ChandePass from '../../assets/ChandePass.png'
import {
    Box, Stack, Wrap, Grid, Center, WrapItem, SimpleGrid, GridItem, Heading, Flex, Text, View, FormLabel, Input, Button, FormControl, Image, HStack, CardHeader, Card, CardBody, CardFooter, Container, VStack
} from "@chakra-ui/react";
import { HamburgerIcon, ArrowRightIcon, AddIcon, WarningIcon } from "@chakra-ui/icons";


export default function TwoCardOption() {
    return (

        <Container maxW="container" p='10' width="" rounded='lg'>
            <Box
                boxShadow="2xl"
                minHeight="70vh"
                rounded="md"
                paddingTop='10%'
                backgroundColor='#A7B3C2'
            >

                <Wrap spacing='30px'
                    align='center' justify='center'
                >
                    <WrapItem>
                        <Card
                            backgroundColor="white"
                            height={80}
                            borderRadius={20}
                            boxShadow='xl'
                            width=""
                        >
                            <CardHeader >
                                <Heading
                                    borderTopRadius={20} p={2}
                                    backgroundColor="#084877" height={20}
                                    color='white' textAlign="center" fontSize={25}
                                    fontWeight="bold">Please Specify Payment frequency</Heading>
                            </CardHeader>
                            <CardBody
                                alignItems="center"
                                justifyContent="center">

                                <HStack height={20}
                                    // bgColor="blue.100"
                                    display={{ sm: 'flex' }}
                                    flex={1}
                                    alignItems="center"
                                    justifyContent="center"
                                    mt={3}
                                >
                                    <Input
                                        placeholder=' Montly'
                                        rounded="4"
                                        boxShadow='outline'
                                        m="3%"
                                        height={8}
                                    />
                                    <Input
                                        placeholder='Quarterly'
                                        size='sm'
                                        rounded="4"
                                        boxShadow='outline'
                                        m="3%"
                                        height={8}

                                    />
                                </HStack>
                                <HStack height={20}
                                    // bgColor="blue.100"
                                    display={{ sm: 'flex' }}
                                    flex={1}
                                    alignItems="center"
                                    justifyContent="center"
                                    m={3}
                                    p={3}
                                >
                                    <Input
                                        placeholder='Semi annual'
                                        rounded="4"
                                        boxShadow='outline'
                                        m="3%"
                                        height={8}
                                    />
                                    <Input
                                        placeholder='Annual'
                                        size='sm'
                                        rounded="4"
                                        boxShadow='outline'
                                        // m="3%"
                                        height={8}
                                    />
                                </HStack>

                            </CardBody>
                            <CardFooter>
                                {/* <Button backgroundColor="blue.100">View here</Button> */}
                            </CardFooter>
                        </Card>
                    </WrapItem>
                    <WrapItem>
                        <Card
                            // backgroundColor="gray.100"
                            height={60}
                            // borderRadius={20}
                            boxShadow='xl'
                            h='170px'
                            p={2}
                        >
                            {/* <CardHeader >
                                <Heading borderTopRadius={20} size='md' backgroundColor="#084877" height={20} color='white' textAlign="center" fontSize={25} fontWeight="bold">Goals Base Tnvestment</Heading>
                            </CardHeader> */}
                            <CardBody  >
                                <Image src={ChandePass} w='190px' h='170px' />
                            </CardBody>
                            {/* <CardFooter>
                                <Button backgroundColor="blue.100">View here</Button>
                            </CardFooter> */}
                        </Card>
                    </WrapItem>
                </Wrap>
                <VStack mt={10} >
                    <Button colorScheme='teal' w={40}> <ArrowRightIcon />  <ArrowRightIcon /></Button>
                </VStack>
            </Box>
        </Container>
    )
}
