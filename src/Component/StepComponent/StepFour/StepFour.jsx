import React, { useState, useContext, useEffect,useRef } from "react";
import ChandePass from '../../../assets/ChandePass.png'
import {
    Box, Stack, Wrap, SliderTrack, Image, Center, WrapItem, Divider, Slider, Heading, Flex, Text, View, NumberInputField, NumberInput,
    SliderThumb, Input, Button, SliderFilledTrack, NumberIncrementStepper, NumberInputStepper, HStack, CardHeader, Card, CardBody, CardFooter, Container, VStack
} from "@chakra-ui/react";
import { HamburgerIcon, ArrowRightIcon, AddIcon, WarningIcon } from "@chakra-ui/icons";
import PortflioPosi from '../../../assets/PortflioPosi.png'
import JSGroup from '../../../assets/JSGroup.png'
import StoreContext from '../../../ContextAPI/ContextAPI';


export default function StepFour() {


    const [value, setValue] = React.useState(0)
    const handleChange = (value) => setValue(value)
    const NextStepDetail = useContext(StoreContext);

    return (

        <Container maxW="container" p='10' rounded='lg'>
            <Box boxShadow="2xl" rounded="md" padding='5%' backgroundColor='#A7B3C2'>
                <Wrap spacing='30px' align='center' justify='center'>
                    
                    {/* <WrapItem>
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
                    </WrapItem> */}

                    <Box
                        borderWidth="1px"
                        borderStyle="solid"
                        borderColor="#c6cacf"
                        p={4}
                        mt="10px"
                        borderRadius="5px"
                        bg='#d8ebf2'
                        width="60vw"
                        // height="90px"
                        sx={{
                            "@media (max-width: 400px)": {
                                width: "95vw",
                                height: "200px"
                            }
                        }}
                    >

                        <Flex borderBottom="1px solid  #6fa4d9 ">
                            <img src={JSGroup} alt="Js logo" width="70px" height="46%" />
                            <Box>
                                <Text as="h2" fontSize="16px" mt="2px" >  JS Cash Fund </Text>
                                <Text fontSize="12px" > Islamic high risk</Text>
                            </Box>
                        </Flex>


                        <Flex p="4" >

                            <Box borderRight="1px solid  #6fa4d9 " w="25%" textAlign="start">
                                <Text fontSize={20} mt="2px" >  Return P.A </Text>
                                <Text as="h1" fontSize={15} > 09090% </Text>
                            </Box>

                            <Flex w="80%" justify="space-between" >
                                <Wrap></Wrap>
                                <Box w="25%" sx={{
                                    "@media (max-width: 280px)": {
                                        width: "50%"
                                    }
                                }} >
                                    <Text fontSize={20} >  NAV </Text>
                                    <Text as="h1" fontSize={15} >Raza</Text>
                                </Box>
                                {/* <Button
                                    size='md'
                                    // height='25px'
                                    width='100px'
                                    border='2px'
                                    borderRadius='5px'
                                    color='white'
                                    backgroundColor='#03488c'
                                >Invest now</Button> */}
                                <VStack m={2} align='center' justify='center'>
                                    <Button backgroundColor="blue.100" onClick={() => NextStepDetail.setNestedStep("moveIIndStep")}>Invest Now</Button>
                                </VStack>
                            </Flex>





                        </Flex>

                    </Box>
                    <Box
                        borderWidth="1px"
                        borderStyle="solid"
                        borderColor="#c6cacf"
                        p={4}
                        mt="10px"
                        borderRadius="5px"
                        bg='#d8ebf2'
                        width="60vw"
                        // height="90px"
                        sx={{
                            "@media (max-width: 400px)": {
                                width: "95vw",
                                height: "200px"
                            }
                        }}
                    >

                        <Flex borderBottom="1px solid  #6fa4d9 ">
                            <img src={JSGroup} alt="Js logo" width="70px" height="46%" />
                            <Box>
                                <Text as="h2" fontSize="16px" mt="2px" >  JS Cash Fund </Text>
                                <Text fontSize="12px" > Islamic high risk</Text>
                            </Box>
                        </Flex>


                        <Flex p="4" >

                            <Box borderRight="1px solid  #6fa4d9 " w="25%" textAlign="start">
                                <Text fontSize={20} mt="2px" >  Return P.A </Text>
                                <Text as="h1" fontSize={15} > 09090% </Text>
                            </Box>

                            <Flex w="80%" justify="space-between" >
                                <Wrap></Wrap>
                                <Box w="25%" sx={{
                                    "@media (max-width: 280px)": {
                                        width: "50%"
                                    }
                                }} >
                                    <Text fontSize={20} >  NAV </Text>
                                    <Text as="h1" fontSize={15} >Raza</Text>
                                </Box>
                                {/* <Button
                                    size='md'
                                    // height='25px'
                                    width='100px'
                                    border='2px'
                                    borderRadius='5px'
                                    color='white'
                                    backgroundColor='#03488c'
                                >Invest now</Button> */}
                                <VStack m={2} align='center' justify='center'>
                                    <Button backgroundColor="blue.100" onClick={() => NextStepDetail.setNestedStep("moveIIndStep")}>Invest Now</Button>
                                </VStack>
                            </Flex>





                        </Flex>

                    </Box>
                </Wrap>
            </Box>
        </Container>
    )
}
