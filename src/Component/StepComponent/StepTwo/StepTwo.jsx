import React, { useState, useContext, useEffect } from "react";
import { Step, Steps, useSteps } from "chakra-ui-steps"
import { Heading, Box, Text, Flex, Button, HStack, useRadio, useRadioGroup, Tab, Tabs, Input, TabList, VStack, Image, Wrap, Card, CardHeader, CardFooter, CardBody, WrapItem, Container, Center, } from "@chakra-ui/react";
import ChandePass from '../../../assets/ChandePass.png'
import { HamburgerIcon, ArrowRightIcon, AddIcon, WarningIcon } from "@chakra-ui/icons"
import StoreContext from '../../../ContextAPI/ContextAPI';


const steps = [{ label: "Step 1" }, { label: "Step 2" }, { label: "Step 3" }]


export const ClickableSteps = () => {
    const { nextStep, prevStep, reset, activeStep, setStep } = useSteps({
        initialStep: 0,
    })
    const NextStepDetail = useContext(StoreContext);

    return (
        <Flex flexDir="column" width="100%" backgroundColor='#A7B3C2' rounded="md">
            <Steps onClickStep={(step) => setStep(step)} rounded="md" activeStep={activeStep} >
                <Step label={"Target Amount"} key={1}>
                    <Box boxShadow="2xl" minHeight="70vh" rounded="md" paddingTop='10%' >

                        <Wrap spacing='30px' align='center' justify='center'>
                            <WrapItem>
                                <Card backgroundColor="white" height={80} borderRadius={20} boxShadow='xl'>
                                    <CardHeader >
                                        <Heading borderTopRadius={20} p={2} backgroundColor="#084877" height={20} color='white' textAlign="center" fontSize={25} fontWeight="bold">What is your target amount ?</Heading>
                                    </CardHeader>
                                    <CardBody >
                                        {/* <Text>View a summary of all your customers over the last month.</Text> */}
                                    </CardBody>
                                </Card>
                            </WrapItem>
                            <WrapItem>
                                <Card height={60} boxShadow='xl' h='170px' p={2}>
                                    <CardBody  >
                                        <Image src={ChandePass} w='190px' h='170px' />
                                    </CardBody>
                                </Card>
                            </WrapItem>
                        </Wrap>
                        {/* <VStack mt={10} >
                            <Button colorScheme='teal' w={40}> <ArrowRightIcon />  <ArrowRightIcon /></Button>
                        </VStack> */}
                    </Box>
                </Step>

                <Step label={"Time Horizon"} key={2}>
                    <Box boxShadow="2xl" minHeight="70vh" rounded="md" paddingTop='10%' backgroundColor='#A7B3C2'>
                        <Wrap spacing='30px' align='center' justify='center'>
                            <WrapItem>
                                <Card backgroundColor="white" height={80} borderRadius={20} boxShadow='xl'>
                                    <CardHeader >
                                        <Heading borderTopRadius={20} p={2} backgroundColor="#084877" height={20} color='white' textAlign="center" fontSize={25} fontWeight="bold">What is your Time Horizon?</Heading>
                                    </CardHeader>
                                    <CardBody >
                                        {/* <Text>View a summary of all your customers over the last month.</Text> */}
                                    </CardBody>
                                    <CardFooter>
                                        {/* <Button backgroundColor="blue.100">View here</Button> */}
                                    </CardFooter>
                                </Card>
                            </WrapItem>
                            <WrapItem>
                                <Card height={60} boxShadow='xl' h='170px' p={2}>
                                    <CardBody  >
                                        <Image src={ChandePass} w='190px' h='170px' />
                                    </CardBody>
                                </Card>
                            </WrapItem>
                        </Wrap>
                        {/* <VStack mt={10} >
                            <Button colorScheme='teal' w={40}> <ArrowRightIcon />  <ArrowRightIcon /></Button>
                        </VStack> */}
                    </Box>
                </Step>

                <Step label={"Nested Login"} key={3}>
                    <Box boxShadow="2xl" minHeight="70vh" rounded="md" paddingTop='10%' backgroundColor='#A7B3C2'>
                        <Wrap spacing='30px' align='center' justify='center'>
                            <WrapItem>
                                <Card backgroundColor="white" height={80} borderRadius={20} boxShadow='xl' width="">
                                    <CardHeader>
                                        <Heading
                                            borderTopRadius={20} p={2}
                                            backgroundColor="#084877" height={20}
                                            color='white' textAlign="center" fontSize={25}
                                            fontWeight="bold">Please Specify Payment frequency</Heading>
                                    </CardHeader>
                                    <CardBody alignItems="center" justifyContent="center">
                                        <HStack height={20} display={{ sm: 'flex' }} flex={1} alignItems="center" justifyContent="center" mt={3} >
                                            <Input placeholder=' Montly' rounded="4" boxShadow='outline' m="3%" height={8} />
                                            <Input placeholder='Quarterly' size='sm' rounded="4" boxShadow='outline' m="3%" height={8} />
                                        </HStack>

                                        <HStack height={20} display={{ sm: 'flex' }} flex={1} alignItems="center" justifyContent="center" m={3} p={3}>
                                            <Input placeholder='Semi annual' rounded="4" boxShadow='outline' m="3%" height={8} />
                                            <Input placeholder='Annual' size='sm' rounded="4" boxShadow='outline' m="3%" height={8} />
                                        </HStack>
                                    </CardBody>
                                    <CardFooter>
                                        <Button backgroundColor="blue.100" onClick={() => NextStepDetail.setNestedStep("moveThirdStep")}>View here</Button>
                                    </CardFooter>
                                </Card>
                            </WrapItem>
                            <WrapItem>
                                <Image src={ChandePass} w='190px' h='170px' />
                                {/* <Card height={60} boxShadow='xl' h='170px' p={2}>
                                    <CardBody>
                                    </CardBody>
                                </Card> */}
                            </WrapItem>
                        </Wrap>
                        <VStack mt={10} >
                        </VStack>
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