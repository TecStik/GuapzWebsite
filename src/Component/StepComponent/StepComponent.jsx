import { Step, Steps, useSteps } from "chakra-ui-steps"
import { Heading, Box, Text, Flex, Button, VStack, Wrap, Card, CardHeader, CardFooter, CardBody, WrapItem, Container, } from "@chakra-ui/react";
import { ArrowRightIcon } from "@chakra-ui/icons";

const steps = [{ label: "Step 1" }, { label: "Step 2" }, { label: "Step 3" }]

export const CardsComponent = () => {
    const { nextStep, prevStep, reset, activeStep } = useSteps({
        initialStep: 0,
    })
    return (
        <Flex flexDir="column" width="100%">
            <Steps activeStep={activeStep}>
                {/* <Step key={2}></Step> */}
                <Step label={"User Login"} key={1}>

                    <Container maxW="container"
                        p='2'
                        rounded='lg'>
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
                                        height={80}
                                        borderRadius={20}
                                        boxShadow='xl'
                                    // width={290}
                                    >
                                        <CardHeader >
                                            <Heading
                                                borderTopRadius={20} p={2}

                                                backgroundColor="#084877"
                                                height="160%"
                                                color='white' textAlign="center" fontSize={25}
                                                fontWeight="bold"> Risk Assessment Result</Heading>
                                        </CardHeader>
                                        <CardBody
                                            alignItems="center"
                                            justifyContent="center">

                                            <VStack
                                                //  height={20}
                                                // bgColor="blue.100"
                                                // display={{ sm: 'flex' }}
                                                // flex={1}
                                                alignItems="center"
                                                justifyContent="center"
                                                mt={14}
                                            // p={14}
                                            >
                                                <Text textAlign="center" fontSize={25}
                                                    fontWeight="bold">Moderate</Text>

                                                <Text textAlign="center" fontSize={25}
                                                    fontWeight="bold">Out of 10 Can adjust upto 2 notches</Text>
                                            </VStack>

                                            <VStack>
                                            </VStack>
                                        </CardBody>
                                        <CardFooter>
                                            {/* <Button backgroundColor="blue.100">View here</Button> */}
                                        </CardFooter>
                                    </Card>
                                </WrapItem>
                            </Wrap>
                            <VStack mt={10} >
                                <Button colorScheme='teal' w={40} onClick={nextStep}> <ArrowRightIcon />  <ArrowRightIcon /></Button>
                            </VStack>
                        </Box>
                    </Container>
                </Step>
                <Step label={"Interests"} key={2}>
                    Step 2
                </Step>
                <Step label={"Portfolio"} key={3}>
                    Step 3
                </Step>
            </Steps>

            {activeStep === steps.length ? (
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
            )}
        </Flex>
    )
}

export default CardsComponent