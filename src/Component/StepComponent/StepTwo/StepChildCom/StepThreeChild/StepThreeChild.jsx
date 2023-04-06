import React, { useState, useContext, useEffect, useRef } from "react";
import { Heading, Box, Text, Flex, Button, HStack, Stack, Input, VStack, Image, Wrap, Card, CardHeader, CardFooter, CardBody, WrapItem, } from "@chakra-ui/react";
import customization from '../../../../../assets/customization.png'
import Pngwing from '../../../../../assets/Pngwing.png'
import { ArrowRightIcon } from "@chakra-ui/icons"
import StoreContext from '../../../../../ContextAPI/ContextAPI';


export const StepThreeChild = () => {
    let [paymentFre, setpaymentFre] = useState()
    const NextStepDetail = useContext(StoreContext);

  
    function handler() {
        NextStepDetail.setStepChildCom("moveIIIIndStep")
        NextStepDetail.setFrequency(paymentFre)
    }




    return (
        <>
            <Box boxShadow="2xl" minHeight="70vh" rounded="md" paddingTop='10%' >
                <Wrap spacing='30px' align='center' justify='center'>
                    <WrapItem>
                        <Card backgroundColor="white" borderRadius={20} boxShadow='xl'>
                            <CardHeader backgroundColor="#084877" borderTopRadius={20} p={2} >
                                <HStack>
                                    <Image src={customization} w='80px' h='70px' />
                                    <Text color='gray.100' textAlign="center" fontSize={25} fontWeight="bold">
                                        Please Specify payment frequency?
                                    </Text>
                                </HStack>
                            </CardHeader>
                            <CardBody>
                                <Wrap spacing='30px' align='center' justify='center' mt={5}>
                                    <Button
                                        bg="#084877" color="whiteSmoke" borderRadius="20px" boxShadow="inset -5px -5px 12px #FFFFFF"
                                        _hover={{ bg: "grey" }} size='lg' height='48px' minW='220px'
                                        _focus={{
                                            boxShadow: 'outline',
                                            background: "teal.600"
                                        }}
                                        onClick={() => setpaymentFre({ label: "monthly", value: 12 })}
                                    >Monthly</Button>
                                    <Button
                                        bg="#084877" color="whiteSmoke" borderRadius="20px" boxShadow="inset -5px -5px 12px #FFFFFF"
                                        _hover={{ bg: "grey" }} size='lg' height='48px' minW='220px'
                                        _focus={{
                                            boxShadow: 'outline',
                                            background: "teal.600"
                                        }}
                                        onClick={() => setpaymentFre({ label: "Quartly", value: 4 })}
                                    >Quartly</Button>
                                </Wrap>
                                <Wrap spacing='30px' align='center' justify='center' mt={5}>
                                    <Button
                                        bg="#084877" color="whiteSmoke" borderRadius="20px" boxShadow="inset -5px -5px 12px #FFFFFF"
                                        _hover={{ bg: "grey" }} size='lg' height='48px' minW='220px'
                                        _focus={{
                                            boxShadow: 'outline',
                                            background: "teal.600"
                                        }}
                                        onClick={() => setpaymentFre({ label: "Smi annual", value: 6 })}
                                    >Smi annual</Button>
                                    <Button
                                        bg="#084877" color="whiteSmoke" borderRadius="20px" boxShadow="inset -5px -5px 12px #FFFFFF"
                                        _hover={{ bg: "grey" }} size='lg' height='48px' minW='220px'
                                        _focus={{
                                            boxShadow: 'outline',
                                            background: "teal.600"
                                        }}
                                        onClick={() => setpaymentFre({ label: "Annual", value: 12 })}
                                    >Annual</Button>
                                </Wrap>
                            </CardBody>
                            <VStack m={5} >
                                <Button colorScheme='teal' bg="#084877" w={40} onClick={handler}><ArrowRightIcon /><ArrowRightIcon /></Button>
                            </VStack>
                        </Card>
                    </WrapItem>
                    <WrapItem>
                        <Card height={60} boxShadow='xl' h='270px' p={2}>
                            <Image src={Pngwing} w='220px' h='250px' />
                        </Card>
                    </WrapItem>
                </Wrap>
            </Box>
        </>
    )
}