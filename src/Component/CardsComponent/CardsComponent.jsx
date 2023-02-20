import React from 'react'
import ChandePass from '../../assets/ChandePass.png'
import {
    Box, Stack, Wrap, SliderTrack, Image, Center, WrapItem, Divider, Slider, Heading, Flex, Text, View, NumberInputField, NumberInput,
    SliderThumb, Input, Button, SliderFilledTrack, NumberIncrementStepper, NumberInputStepper, HStack, CardHeader, Card, CardBody, CardFooter, Container, VStack
} from "@chakra-ui/react";
import { HamburgerIcon, ArrowRightIcon, AddIcon, WarningIcon } from "@chakra-ui/icons";
import PortflioPosi from '../../assets/PortflioPosi.png'


export default function CardsComponent() {


    const [value, setValue] = React.useState(0)
    const handleChange = (value) => setValue(value)

    return (

        <Container maxW="container" p='10' rounded='lg'>
            <Box
                boxShadow="2xl"
                rounded="md"
                padding='5%'
                backgroundColor='#A7B3C2'
            >
                <Wrap spacing='30px'
                    align='center' justify='center'
                >
                    <WrapItem>
                        <Card
                            backgroundColor="white"
                            // height={60}
                            borderRadius={20}
                            boxShadow='xl'
                        // width={290}
                        >
                            <CardHeader >

                                <Heading
                                    borderTopRadius={20} p={2}
                                    backgroundColor="#084877"

                                    color='white'
                                    //  textAlign="center" 
                                    fontSize={20}
                                    fotWeight="bold">

                                    <HStack>
                                        <Image src={PortflioPosi} w='110px' h='50px' />
                                        <Text>
                                            Update CRP
                                            <br />
                                            Risk Assessment Result
                                        </Text>
                                    </HStack>
                                </Heading>
                            </CardHeader>
                            <hr />
                            <CardBody
                                alignItems="center"
                                justifyContent="center">

                                <VStack height={20}
                                    // bgColor="blue.100"
                                    display={{ sm: 'flex' }}
                                    flex={1}
                                    // alignItems="center"
                                    // justifyContent="center"
                                    m={4}
                                >
                                    <Divider orientation='horizontal' borderStyle="solid" />
                                    <HStack >
                                        <Text fontSize={20}
                                            // fontWeight="bold"
                                            textAlign="start"
                                        >Retrun P.A<br />2..9%</Text>
                                        <Divider orientation='vertical' borderStyle="solid" />
                                        <Text fontSize={20}

                                        // fontWeight="bold"
                                        >NAV <br />24,000</Text>
                                    </HStack>
                                </VStack >

                                <VStack m={2} align='center' justify='center'>
                                    <Button backgroundColor="blue.100">Invest Now</Button>

                                </VStack>
                            </CardBody>
                            <CardFooter>
                            </CardFooter>
                        </Card>
                    </WrapItem>
                    <WrapItem>
                        <Card
                            backgroundColor="white"
                            // height={60}
                            borderRadius={20}
                            boxShadow='xl'
                        // width={290}
                        >
                            <CardHeader >

                                <Heading
                                    borderTopRadius={20} p={2}
                                    backgroundColor="#084877"

                                    color='white'
                                    //  textAlign="center" 
                                    fontSize={20}
                                    fotWeight="bold">

                                    <HStack>
                                        <Image src={PortflioPosi} w='110px' h='50px' />
                                        <Text>
                                            Update CRP
                                            <br />
                                            Risk Assessment Result
                                        </Text>
                                    </HStack>
                                </Heading>
                            </CardHeader>
                            <hr />
                            <CardBody
                                alignItems="center"
                                justifyContent="center">

                                <VStack height={20}
                                    // bgColor="blue.100"
                                    display={{ sm: 'flex' }}
                                    flex={1}
                                    // alignItems="center"
                                    // justifyContent="center"
                                    m={4}
                                >
                                    <Divider orientation='horizontal' borderStyle="solid" />
                                    <HStack >
                                        <Text fontSize={20}
                                            // fontWeight="bold"
                                            textAlign="start"
                                        >Retrun P.A<br />2..9%</Text>
                                        <Divider orientation='vertical' borderStyle="solid" />
                                        <Text fontSize={20}

                                        // fontWeight="bold"
                                        >NAV <br />24,000</Text>
                                    </HStack>
                                </VStack >

                                <VStack m={2} align='center' justify='center'>
                                    <Button backgroundColor="blue.100">Invest Now</Button>

                                </VStack>
                            </CardBody>
                            <CardFooter>
                            </CardFooter>
                        </Card>
                    </WrapItem>
                    <WrapItem>
                        <Card
                            backgroundColor="white"
                            // height={60}
                            borderRadius={20}
                            boxShadow='xl'
                        // width={290}
                        >
                            <CardHeader >

                                <Heading
                                    borderTopRadius={20} p={2}
                                    backgroundColor="#084877"

                                    color='white'
                                    //  textAlign="center" 
                                    fontSize={20}
                                    fotWeight="bold">

                                    <HStack>
                                        <Image src={PortflioPosi} w='110px' h='50px' />
                                        <Text>
                                            Update CRP
                                            <br />
                                            Risk Assessment Result
                                        </Text>
                                    </HStack>
                                </Heading>
                            </CardHeader>
                            <hr />
                            <CardBody
                                alignItems="center"
                                justifyContent="center"
                            // backgroundColor="#EAEFF5"
                            >

                                <VStack height={20}
                                    // bgColor="blue.100"
                                    display={{ sm: 'flex' }}
                                    flex={1}
                                    // alignItems="center"
                                    // justifyContent="center"
                                    m={4}
                                >
                                    <Divider orientation='horizontal' borderStyle="solid" />
                                    <HStack >
                                        <Text fontSize={20}
                                            // fontWeight="bold"
                                            textAlign="start"
                                        >Retrun P.A<br />2..9%</Text>
                                        <Divider orientation='vertical' borderStyle="solid" />
                                        <Text fontSize={20}

                                        // fontWeight="bold"
                                        >NAV <br />24,000</Text>
                                    </HStack>
                                </VStack >

                                <VStack m={2} align='center' justify='center'>
                                    <Button backgroundColor="#EAEFF5">Invest Now</Button>

                                </VStack>
                            </CardBody>
                            <CardFooter>
                            </CardFooter>
                        </Card>
                    </WrapItem>
                </Wrap>
            </Box>
        </Container>
    )
}
