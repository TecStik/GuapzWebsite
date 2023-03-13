import React, { useState, useContext, useEffect } from "react";
import ChandePass from '../../../assets/ChandePass.png'
import {
    Box, Stack, Wrap, SliderTrack, Image, Center, WrapItem, Divider, Slider, Heading, Flex, Text, View, NumberInputField, NumberInput,
    SliderThumb, Input, Button, SliderFilledTrack, NumberIncrementStepper, NumberInputStepper, HStack, CardHeader, Card, CardBody, CardFooter, Container, VStack
} from "@chakra-ui/react";
import { HamburgerIcon, ArrowRightIcon, AddIcon, WarningIcon } from "@chakra-ui/icons";
import PortflioPosi from '../../../assets/PortflioPosi.png'
import StoreContext from '../../../ContextAPI/ContextAPI';


export default function StepFour() {


    const [value, setValue] = React.useState(0)
    const handleChange = (value) => setValue(value)
    const NextStepDetail = useContext(StoreContext);

    return (

        <Container maxW="container" p='10' rounded='lg'>
            <Box boxShadow="2xl" rounded="md" padding='5%' backgroundColor='#A7B3C2'>
                <Wrap spacing='30px' align='center' justify='center'>
                    <WrapItem>
                        <Card backgroundColor="white" borderRadius={20} boxShadow='xl'>
                            <CardHeader >
                                <Heading borderTopRadius={20} p={2} backgroundColor="#084877" color='white' fontSize={20} fotWeight="bold">
                                    <HStack>
                                        <Image src={PortflioPosi} w='110px' h='50px' />
                                        <Text> Update CRP<br />Risk Assessment Result</Text>
                                    </HStack>
                                </Heading>
                            </CardHeader>
                            <hr />
                            <CardBody alignItems="center" justifyContent="center">

                                <VStack height={20} display={{ sm: 'flex' }} flex={1} m={4} >
                                    <Divider orientation='horizontal' borderStyle="solid" />
                                    <HStack >
                                        <Text fontSize={20} textAlign="start">Retrun P.A<br />2..9%</Text>
                                        <Divider orientation='vertical' borderStyle="solid" />
                                        <Text fontSize={20}>NAV <br />24,000</Text>
                                    </HStack>
                                </VStack>

                                <VStack m={2} align='center' justify='center'>
                                    <Button backgroundColor="blue.100" onClick={() => NextStepDetail.setNestedStep("moveIIndStep")}>Invest Now</Button>
                                </VStack>
                            </CardBody>
                            <CardFooter>
                            </CardFooter>
                        </Card>
                    </WrapItem>
                    <WrapItem>
                        <Card backgroundColor="white" borderRadius={20} boxShadow='xl'>
                            <CardHeader >
                                <Heading borderTopRadius={20} p={2} backgroundColor="#084877" color='white' fontSize={20} fotWeight="bold">
                                    <HStack>
                                        <Image src={PortflioPosi} w='110px' h='50px' />
                                        <Text>Update CRP<br />Risk Assessment Result</Text>
                                    </HStack>
                                </Heading>
                            </CardHeader>
                            <hr />
                            <CardBody alignItems="center" justifyContent="center">

                                <VStack display={{ sm: 'flex' }} flex={1} m={4} >
                                    <Divider orientation='horizontal' borderStyle="solid" />
                                    <HStack >
                                        <Text fontSize={20} textAlign="start">Retrun P.A<br />2..9%</Text>
                                        <Divider orientation='vertical' borderStyle="solid" />
                                        <Text fontSize={20}>NAV <br />24,000</Text>
                                    </HStack>
                                </VStack >

                                <VStack m={2} align='center' justify='center'>
                                    <Button backgroundColor="blue.100" onClick={() => NextStepDetail.setNestedStep("moveIIndStep")}>Invest Now</Button>
                                </VStack>
                            </CardBody>
                            <CardFooter>
                            </CardFooter>
                        </Card>
                    </WrapItem>
                    <WrapItem>
                        <Card backgroundColor="white" borderRadius={20} boxShadow='xl'>
                            <CardHeader >
                                <Heading borderTopRadius={20} p={2} backgroundColor="#084877" color='white' fontSize={20} fotWeight="bold">
                                    <HStack>
                                        <Image src={PortflioPosi} w='110px' h='50px' />
                                        <Text>Update CRP<br />Risk Assessment Result
                                        </Text>
                                    </HStack>
                                </Heading>
                            </CardHeader>
                            <hr />
                            <CardBody alignItems="center" justifyContent="center" >

                                <VStack height={20} display={{ sm: 'flex' }} flex={1} m={4} >
                                    <Divider orientation='horizontal' borderStyle="solid" />
                                    <HStack >
                                        <Text fontSize={20} textAlign="start">Retrun P.A<br />2..9%</Text>
                                        <Divider orientation='vertical' borderStyle="solid" />
                                        <Text fontSize={20}>NAV <br />24,000</Text>
                                    </HStack>
                                </VStack >
                                <VStack m={2} align='center' justify='center'>
                                    <Button backgroundColor="#EAEFF5" onClick={() => NextStepDetail.setNestedStep("moveIIIIndStep")}>Invest Now</Button>
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
