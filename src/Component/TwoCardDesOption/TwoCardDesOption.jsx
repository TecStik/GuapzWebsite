import React from 'react'
import ChandePass from '../../assets/ChandePass.png'
import {
    Box, Stack, Wrap, Grid, Center, WrapItem, SimpleGrid, GridItem, Heading, Flex, Text, View, FormLabel, Input, Button, FormControl, Image, HStack, CardHeader, Card, CardBody, CardFooter, Container, VStack
} from "@chakra-ui/react";
import { HamburgerIcon, ArrowRightIcon, AddIcon, WarningIcon } from "@chakra-ui/icons";


export default function TwoCardDesOption() {
    return (

        <Container maxW="container" p='10' rounded='lg'>
            <Text><b>1/5:</b> Which option explains your Health scenario the best?</Text>
            <Box
                boxShadow="2xl"
                rounded="md"
                paddingTop='8%'
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
                        // width={290}
                        >
                            <CardHeader >
                                <Heading
                                    borderTopRadius={20} p={2}

                                    backgroundColor="#084877" height={20}
                                    color='white' textAlign="center" fontSize={25}
                                    fontWeight="bold">Healty with Insurance <br /> Healty without Insurance</Heading>
                            </CardHeader>
                            <CardBody
                                alignItems="center"
                                justifyContent="center">

                                <VStack height={20}
                                    // bgColor="blue.100"
                                    display={{ sm: 'flex' }}
                                    flex={1}
                                    alignItems="center"
                                    justifyContent="center"
                                    m={14}
                                // p={14}
                                >
                                    <Input
                                        placeholder=''
                                        rounded="4"
                                        boxShadow='outline'
                                        m="3%"
                                        p="3%"
                                    // height={8}
                                    />
                                    <Input
                                        placeholder=''
                                        size='sm'
                                        rounded="4"
                                        boxShadow='outline'
                                        m="3%"
                                        p="3%"
                                    // height={8}

                                    />
                                </VStack>
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
