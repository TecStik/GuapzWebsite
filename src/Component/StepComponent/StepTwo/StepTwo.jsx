import React, { useState, useContext, useEffect } from "react";
import { Step, Steps, useSteps } from "chakra-ui-steps"
import { Heading, Box, Text, Flex, Button, HStack, Stack, Input, VStack, Image, Wrap, Card, CardHeader, CardFooter, CardBody, WrapItem, } from "@chakra-ui/react";
import customization from '../../../assets/customization.png'
import Pngwing from '../../../assets/Pngwing.png'
import { ArrowRightIcon } from "@chakra-ui/icons"
import StoreContext from '../../../ContextAPI/ContextAPI';
import ChandePass from '../../../assets/ChandePass.png'
import { DatePicker, Space } from 'antd';

const steps = [{ label: "Step 1" }, { label: "Step 2" }, { label: "Step 3" }]


export const ClickableSteps = () => {
    const { nextStep, prevStep, reset, activeStep, setStep } = useSteps({
        initialStep: 0,
    })
    const NextStepDetail = useContext(StoreContext);
    const onChange = (date, dateString) => {
        console.log(date, dateString);
    };
    return (
        <Flex flexDir="column" width="100%" backgroundColor='#A7B3C2' rounded="md">
            <Steps onClickStep={(step) => setStep(step)} rounded="md" activeStep={activeStep} >
                <Step label={"Target Amount"} key={1}>
                    <Box boxShadow="2xl" minHeight="70vh" rounded="md" paddingTop='10%' >
                        <Wrap spacing='30px' align='center' justify='center'>
                            <WrapItem>
                                <Card backgroundColor="white" height={80} borderRadius={20} boxShadow='xl'>
                                    <CardHeader backgroundColor="#0F4B63" borderTopRadius={20} p={2} >
                                        <HStack>
                                            <Image src={customization} w='80px' h='70px' />
                                            <Text color='gray.100' textAlign="center" fontSize={25} fontWeight="bold">
                                                What is your target amount ?
                                            </Text>
                                        </HStack>
                                    </CardHeader>
                                    <CardBody >
                                        <Stack spacing={3} mt={10}>
                                            <Input variant='outline' placeholder='Outline' rounded="4" boxShadow='outline' m="3%" p="3%" />
                                        </Stack>
                                    </CardBody>
                                    <VStack mt={10} >
                                        <Button colorScheme='teal' bg="#0F4B63" w={40}><ArrowRightIcon /><ArrowRightIcon /></Button>
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
                </Step>

                <Step label={"Time Horizon"} key={2}>
                    <Box boxShadow="2xl" minHeight="70vh" rounded="md" paddingTop='10%' >
                        <Wrap spacing='30px' align='center' justify='center'>
                            <WrapItem>
                                <Card backgroundColor="white" height={80} borderRadius={20} boxShadow='xl'>
                                    <CardHeader backgroundColor="#0F4B63" borderTopRadius={20} p={2} >
                                        <HStack>
                                            <Image src={customization} w='80px' h='70px' />
                                            <Text color='gray.100' textAlign="center" fontSize={25} fontWeight="bold">
                                                What is your Time Horizon?
                                            </Text>
                                        </HStack>
                                    </CardHeader>
                                    <CardBody >
                                        <Stack spacing={3} mt={10} style={{
                                            width: '100%', justifyItems: "center", alignItems: "center"
                                        }}>
                                            <Space direction="vertical" style={{
                                                width: '50%', alignItems: "center"
                                            }}>
                                                <DatePicker onChange={onChange} />
                                            </Space>
                                            {/* <Text variant='outline' placeholder='Outline' rounded="4" boxShadow='outline' m="3%" p="3%" /> */}
                                        </Stack>
                                    </CardBody>
                                    <VStack mt={10} >
                                        <Button colorScheme='teal' bg="#0F4B63" w={40}><ArrowRightIcon /><ArrowRightIcon /></Button>
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
                </Step>

                <Step label={"Nested Login"} key={3}>
                    <Box boxShadow="2xl" minHeight="70vh" rounded="md" paddingTop='10%' >
                        <Wrap spacing='30px' align='center' justify='center'>
                            <WrapItem>
                                <Card backgroundColor="white" borderRadius={20} boxShadow='xl'>
                                    <CardHeader backgroundColor="#0F4B63" borderTopRadius={20} p={2} >
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
                                            >Monthly</Button>
                                            <Button
                                                bg="#084877" color="whiteSmoke" borderRadius="20px" boxShadow="inset -5px -5px 12px #FFFFFF"
                                                _hover={{ bg: "grey" }} size='lg' height='48px' minW='220px'
                                            >Quartly</Button>
                                        </Wrap>
                                        <Wrap spacing='30px' align='center' justify='center' mt={5}>
                                            <Button
                                                bg="#084877" color="whiteSmoke" borderRadius="20px" boxShadow="inset -5px -5px 12px #FFFFFF"
                                                _hover={{ bg: "grey" }} size='lg' height='48px' minW='220px'
                                            >Monthly</Button>
                                            <Button
                                                bg="#084877" color="whiteSmoke" borderRadius="20px" boxShadow="inset -5px -5px 12px #FFFFFF"
                                                _hover={{ bg: "grey" }} size='lg' height='48px' minW='220px'
                                            >Quartly</Button>
                                        </Wrap>
                                    </CardBody>
                                    <VStack m={5} >
                                        <Button colorScheme='teal' bg="#0F4B63" w={40}><ArrowRightIcon /><ArrowRightIcon /></Button>
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
                </Step>
            </Steps>
            {/* {activeStep === steps.length ? (
                <Flex px={4} py={4} width="100%" flexDirection="column">
                    <Heading fontSize="xl" textAlign="center">
                        Woohoo! All steps completed!
                    </Heading>
                    <Button mx="auto" mt={6} size="sm" onClick={reset}>
                        Reset
                    </Button>
                </Flex>
            ) : (
                <Flex width="100%" justify="flex-end">
                    <Button
                        isDisabled={activeStep === 0}
                        mr={4}
                        onClick={prevStep}
                        size="sm"
                        variant="ghost"
                    >
                        Prev
                    </Button>
                    <Button size="sm" onClick={nextStep}>
                        {activeStep === steps.length - 1 ? "Finish" : "Next"}
                    </Button>
                </Flex>
            )} */}
        </Flex>
    )
}