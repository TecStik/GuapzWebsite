import React, { useState } from "react";
import { Step, Steps, useSteps, } from "chakra-ui-steps"
import { Heading, Box, Text, Flex, Button, HStack, useRadio, useRadioGroup, Tab, Tabs, Input, TabList, VStack, Image, Wrap, Card, CardHeader, CardFooter, CardBody, WrapItem, Container, Center, } from "@chakra-ui/react";
import { ArrowRightIcon } from "@chakra-ui/icons";
import QuestionList from '../QuizComponent/QuestionList.json';
import StartInvestment from "../../assets/StartInvestment.png"
import PortflioPosi from '../../assets/PortflioPosi.png'
import ChandePass from '../../assets/ChandePass.png'
import UpdateCRP from '../../assets/UpdateCRP.png'
import Pngwing from '../../assets/Pngwing.png';
import Wallet from '../../assets/Wallet.png'
import pen from '../../assets/pen.png';
import PC from '../../assets/PC.png'
import { Calendar, DatePicker, theme, Alert } from 'antd';
import { ClickableSteps } from "./StepTwo/StepTwo";
import moment from "moment";
import dayjs from 'dayjs'

// const steps = [{ label: "Step 1" }, { label: "Step 2" }, { label: "Step 3" }]
// const nestedSteps = [{ label: "Step 1" }, { label: "Step 2" }, { label: "Step 3" }]

export const CardsComponent = () => {

    const { nextStep, prevStep, reset, activeStep, setStep } = useSteps({ initialStep: 0, })
    const { token } = theme.useToken();


    const { getRootProps, getRadioProps } = useRadioGroup({
        name: 'framework',
        defaultValue: 'react',
        onChange: console.log,
    })

    const group = getRootProps()


    const [value, setValue] = useState(() => dayjs('2017-01-25'));
    const [selectedValue, setSelectedValue] = useState(() => dayjs('2017-01-25'));
    const [startDate, setStartDate] = useState(new Date());
    let a = moment(value).format('YYYY MMMM Do')
    let today = moment();
    let months = moment("2019-12-26");
    let totalMonths = today.diff(months, "month");
    // console.log(startDate);
    // console.log(totalMonths, "totalMonths");
    // console.log(moment(value).format('MMMM Do YYYY'), "raza");


    const onSelect = (newValue) => {
        setValue(newValue);
        setSelectedValue(newValue);
    };
    const onPanelChange = (newValue) => {
        setValue(newValue);
    };
    const wrapperStyle = {
        // width: 350,
        border: `1px solid ${token.colorBorderSecondary}`,
        borderRadius: token.borderRadiusLG,
    };


    return (
        <Flex flexDir="column" width="100%" >
            <Steps onClickStep={(step) => setStep(step)} rounded="md" activeStep={activeStep}>
                {/* <Step key={1}> Step 1</Step> */}
                <Step label={"User Login"} key={1}>
                    <Container p='10' width="" rounded='lg'>
                        <Box
                            boxShadow="2xl"
                            width="100%"
                            minHeight="70vh"
                            rounded="md"
                            bgGradient={[
                                'linear(to-tr, teal.300, #FFFFFF)',
                                'linear(to-t, #316489, teal.500)',
                                'linear(to-b, #316489, #316489',
                            ]}
                            color='white'
                        >


                            <Wrap spacing='30px' align='center' justify='center' p={10} >
                                <WrapItem >
                                    <Center boxShadow="2xl" onClick={nextStep} w='310px' h='180px'>
                                        <VStack >
                                            <Image src={StartInvestment} w='150px' h='150px' />
                                            <Text color='white'>Laptop/Pc</Text>
                                        </VStack>
                                    </Center>
                                </WrapItem>
                                <WrapItem>
                                    <Center rounded="md" boxShadow="2xl" onClick={nextStep} w='310px' h='180px'>
                                        <VStack>
                                            <Image src={UpdateCRP} w='190px' h='150px' />
                                            <Text color='white'>Mobile/Gadgets</Text>
                                        </VStack>
                                    </Center>
                                </WrapItem>
                                <WrapItem >
                                    <Center boxShadow="2xl" onClick={nextStep} w='310px' h='180px'>
                                        <VStack>
                                            <Image src={UpdateCRP} w='190px' h='150px' />
                                            <Text color='white'>Apparel</Text>
                                        </VStack>
                                    </Center>
                                </WrapItem>
                            </Wrap>

                            <Wrap spacing='30px' align='center' justify='center' >
                                <WrapItem>
                                    <Center boxShadow="2xl" onClick={nextStep} w='310px' h='180px'>
                                        <VStack>
                                            <Image src={PC} w='130px' h='120px' />
                                            <Text color='white'>Custom </Text>
                                        </VStack>
                                    </Center>
                                </WrapItem>
                                <WrapItem>
                                    <Center rounded="md" boxShadow="2xl" onClick={nextStep} w='310px' h='180px' >
                                        <VStack>
                                            <Image src={Wallet} w='130px' h='120px' />
                                            <Text color='white'>Education</Text>
                                        </VStack>
                                    </Center>
                                </WrapItem>
                                <WrapItem >
                                    <Center boxShadow="2xl" w='310px' h='180px'>
                                        <VStack>
                                            <Image src={ChandePass} w='130px' h='120px' />
                                            <Text color='white'> Vocation</Text>
                                        </VStack>
                                    </Center>
                                </WrapItem>
                            </Wrap>
                        </Box >
                    </Container >
                </Step>

                {/* <Step key={2}> Step 2</Step> */}
                <Step label={"Interests"} key={2}>
                    <Container maxW="container" p='2' rounded='lg'>
                        <ClickableSteps props={"data"} />
                    </Container>
                </Step>

                {/* <Step key={3}> Step 3</Step> */}
                <Step label={"Portfolio"} key={3}>
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
                                <WrapItem >
                                    <Card
                                        backgroundColor="white"
                                        height={80}
                                        borderRadius={20}
                                        boxShadow='xl'
                                    >
                                        <CardHeader>
                                            <Heading
                                                borderTopRadius={20} p={2}
                                                backgroundColor="#DBDCDE"
                                                color='gray' textAlign="center" fontSize={25}
                                                fontWeight="bold">
                                                <HStack>
                                                    <Image src={pen} w='110px' h='80px' />
                                                    <Text>Please Specify Payment frequency ?</Text>
                                                </HStack>
                                            </Heading>
                                        </CardHeader>
                                        <CardBody
                                            alignItems="center"
                                            justifyContent="center">

                                            <VStack {...group}>
                                                <Wrap
                                                    // bgColor="blue.100"
                                                    display={{ sm: 'flex' }}
                                                    flex={1}
                                                    alignItems="center"
                                                    justifyContent="center"
                                                    mt={12}
                                                >
                                                    {QuestionList.map((value, i) => {
                                                        // const radio = getRadioProps({ value })
                                                        console.log(value.Options);
                                                        return (
                                                            <WrapItem
                                                                // bgColor="blue.100"
                                                                display={{ sm: 'flex' }}
                                                                flex={1}
                                                                alignItems="center"
                                                                justifyContent="center"
                                                            >
                                                                {/* <RadioCard key={value} {...radio}>{value}</RadioCard> */}
                                                            </WrapItem>
                                                        )
                                                    })}
                                                </Wrap>
                                            </VStack>
                                        </CardBody>
                                        <VStack m={12} align='center' justify='center'>
                                            <Button colorScheme='teal' w={40} onClick={nextStep}> <ArrowRightIcon />  <ArrowRightIcon /></Button>
                                        </VStack>
                                    </Card>
                                </WrapItem>
                                <Image src={Pngwing} w='180px' h='200px' />
                            </Wrap>
                        </Box>
                    </Container>
                </Step>
            </Steps>
{/* 
            {activeStep === steps.length ? (
                <Flex px={4} py={4} width="100%" flexDirection="column">
                    <Heading fontSize="xl" textAlign="center">Woohoo! All steps completed!</Heading>
                    <Button mx="auto" mt={6} size="sm" onClick={reset}>Reset</Button>
                </Flex>
            ) : (
                <Flex width="100%" justify="flex-end">
                    <Button
                        isDisabled={activeStep === 0}
                        mr={4}
                        onClick={prevStep}
                        size="sm"
                        variant="ghost"
                    > Prev</Button>
                    <Button size="sm" onClick={nextStep}>
                        {activeStep === steps.length - 1 ? "Finish" : "Next"}
                    </Button>
                </Flex>
            )} */}
        </Flex>
    )
}

export default CardsComponent