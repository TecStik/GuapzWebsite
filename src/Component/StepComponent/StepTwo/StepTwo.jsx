import React, { useState, useContext, useEffect, useRef } from "react";
import { Step, Steps, useSteps } from "chakra-ui-steps"
import { Heading, Box, Text, Flex, Button, HStack, Stack, Input, VStack, Image, Wrap, Card, CardHeader, CardFooter, CardBody, WrapItem, } from "@chakra-ui/react";
import customization from '../../../assets/customization.png'
import Pngwing from '../../../assets/Pngwing.png'
import { ArrowRightIcon } from "@chakra-ui/icons"
import StoreContext from '../../../ContextAPI/ContextAPI';
import ChandePass from '../../../assets/ChandePass.png'
import { DatePicker, Space } from 'antd';
import moment from "moment";
import { StepOneChild } from "./StepChildCom/StepOneChild/StepOneChild";
import { StepTwoChild } from "./StepChildCom/StepTwoChild/StepTwoChild";
import { StepThreeChild } from "./StepChildCom/StepThreeChild/StepThreeChild";
const steps = [{ label: "Step 1" }, { label: "Step 2" }, { label: "Step 3" }, { label: "Step 4" }]



//  const [startDate, setStartDate] = useState(new Date());
// let a = moment(value).format('YYYY MMMM Do')
// let today = moment();
// let months = moment("2019-12-26");
// let totalMonths = today.diff(months, "month");
// // console.log(startDate);
// // console.log(totalMonths, "totalMonths");
// // console.log(moment(value).format('MMMM Do YYYY'), "raza");

export const ClickableSteps = () => {
    const { nextStep, prevStep, reset, activeStep, setStep } = useSteps({
        initialStep: 0,
    })
    let [paymentFre, setpaymentFre] = useState()

    const NextStepDetail = useContext(StoreContext);
    // console.log(NextStepDetail.futValue, "futValueNextStepDetailNextStepDetail");
    var todate = new Date();
    const onChange = (date, dateString) => {


        // let a = moment(date).format('YYYY M D')
        // console.log(todate, "start date", date, " today date");

        // console.log(date.getTime(),"raza");
        // console.log(todate.getTime(),"raza");

        let currentDate = new Date();
        let futDate = (new Date("2027-05-01"));
        // console.log("Date from Calendar", date.$d.getTime());
        // let difference = calcDate(futDate, currentDate);
        let selectDate = date.$d
        // console.log("CurrentDate", currentDate.getTime(), "Future Date", dateString);
        // console.log("Difference",futDate,currentDate);

        var diff = Math.floor(currentDate.getTime() - selectDate.getTime());
        var day = 1000 * 60 * 60 * 24;
        var days = Math.floor(diff / day);
        // console.log(diff,days);
        NextStepDetail.setTHorizon(days)
        // var diff = Math.floor(dateString.getTime() - a.getTime());
        // var day = 1000 * 60 * 60 * 24;
        // console.log(diff,day);
    };

    // async function calcDate(date1, date2) {
    //     var diff = Math.floor(date1.getTime() - date2.getTime());
    //     var day = 1000 * 60 * 60 * 24;


    //     var days = Math.floor(diff / day);
    //     console.log(days,"daysdaysdaysdays");
    // }
    let targetValue = useRef()

    function handlefun() {
        nextStep()
        // console.log(targetValue.current.value, "khkkjhk");
        NextStepDetail.setFutValue(targetValue.current.value)
    }
    // console.log(NextStepDetail.frequency, "frequency");
    function handlethirdStep(params) {
        NextStepDetail.setNestedStep("moveIIIStep")
        NextStepDetail.setFrequency(paymentFre)
    }


    useEffect(() => {
        if (NextStepDetail.StepChildCom === "moveIIndStep") {
            nextStep()
            NextStepDetail.setStepChildCom("steps")
        }
        else if (NextStepDetail.StepChildCom === "moveIIIStep") {
            nextStep()
            NextStepDetail.setStepChildCom("steps")
        }
        else if (NextStepDetail.StepChildCom === "moveIIIIndStep") {
            nextStep()
            NextStepDetail.setStepChildCom("steps")
        }
    }, [NextStepDetail])


    return (
        <Flex flexDir="column" width="100%" backgroundColor='#A7B3C2' rounded="md">
            <Steps onClickStep={(step) => setStep(step)} rounded="md" activeStep={activeStep} >

                <Step label={"Target Amount"} key={1}>
                    <StepOneChild />
                </Step>

                <Step label={"Time Horizon"} key={2}>
                    <StepTwoChild />
                </Step>

                <Step label={"Payment Frequency"} key={3}>
                    <StepThreeChild />
                </Step>

                <Step label={"Contribution"} key={4}>
                    <Box boxShadow="2xl" minHeight="70vh" rounded="md" paddingTop='10%' >
                        <Wrap spacing='30px' align='center' justify='center'>
                            <WrapItem>
                                <Card backgroundColor="white" borderRadius={20} boxShadow='xl'>
                                    <CardHeader backgroundColor="#084877" borderTopRadius={20} p={2} >
                                        <HStack>
                                            <Image src={customization} w='80px' h='70px' />
                                            <Text color='gray.100' textAlign="center" fontSize={25} fontWeight="bold">
                                                How much will you contribute?
                                            </Text>
                                        </HStack>
                                    </CardHeader>
                                    <CardBody>
                                        <Wrap spacing='30px' align='center' justify='center' mt={5}>
                                            <Input
                                                bg="#CFD9E8" color="whiteSmoke" borderRadius="20px"
                                                //  boxShadow="inset -5px -5px 12px #FFFFFF"
                                                // _hover={{ bg: "grey" }} 
                                                size='lg' height='48px' minW='220px'
                                                // _focus={{
                                                //     boxShadow: 'outline',
                                                //     background: "teal.600"
                                                // }}
                                                textColor="white"
                                                // onClick={() => setpaymentFre({ label: "monthly", value: 12 })}
                                                type="text"
                                                placeholder="Initial"
                                            ></Input>

                                        </Wrap>
                                        <Wrap spacing='30px' align='center' justify='center' mt={5}>
                                            <Input
                                                bg="#CFD9E8" borderRadius="20px"
                                                //  boxShadow="inset -5px -5px 12px #FFFFFF"
                                                // _hover={{ bg: "grey" }} 
                                                size='lg' height='48px' minW='220px'
                                                textColor="#084877"
                                                // _focus={{
                                                //     boxShadow: 'outline',
                                                //     background: "teal.600"
                                                // }}
                                                // onClick={() => setpaymentFre({ label: "Smi annual", value: 6 })}
                                                type="text"
                                                placeholder="Recurring"
                                            ></Input>

                                        </Wrap>
                                    </CardBody>
                                    <VStack m={5} >
                                        <Button colorScheme='teal' bg="#084877" w={40} onClick={handlethirdStep}><ArrowRightIcon /><ArrowRightIcon /></Button>
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