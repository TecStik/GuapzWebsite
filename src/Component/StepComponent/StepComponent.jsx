import React, { useState } from "react";
import { Step, Steps, useSteps } from "chakra-ui-steps"
import { Heading, Box, Text, Flex, Button, HStack, useRadio, useRadioGroup, Tab, Tabs, Input, TabList, VStack, Image, Wrap, Card, CardHeader, CardFooter, CardBody, WrapItem, Container, Center, } from "@chakra-ui/react";
import { ArrowRightIcon } from "@chakra-ui/icons";
import Pngwing from '../../assets/Pngwing.png';
import pen from '../../assets/pen.png';
// import DatePicker from "react-datepicker";
// import { SingleDatepicker } from "chakra-dayzed-datepicker";
import { Calendar, DatePicker, theme, Alert } from 'antd';
import dayjs from 'dayjs'
import moment from "moment";

const steps = [{ label: "Step 1" }, { label: "Step 2" }, { label: "Step 3" }]

const onPanelChange = (value, mode) => {
    console.log(value.format('YYYY-MM-DD'), mode);
};


function RadioCard(props) {
    const { getInputProps, getCheckboxProps } = useRadio(props)
    const input = getInputProps()
    const checkbox = getCheckboxProps()

    return (
        <Box as='label'>
            <input {...input} />

            <Box
                {...checkbox}
                cursor='pointer'
                borderWidth='1px'
                borderRadius='md'
                boxShadow='md'
                _checked={{
                    bg: 'teal.600',
                    color: 'white',
                    borderColor: 'teal.600',
                }}
                _focus={{
                    boxShadow: 'outline',
                }}
                px={5}
                py={3}
            // width="140%"
            >
                {props.children}
            </Box>
        </Box>
    )
}

export const CardsComponent = () => {

    const { nextStep, prevStep, reset, activeStep } = useSteps({ initialStep: 0, })
    const { token } = theme.useToken();

    const options = ['Monthly', 'Quarterly', 'SemiAnnual', 'Anual']

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
    console.log(startDate);
    console.log(totalMonths, "totalMonths");
    console.log(moment(value).format('MMMM Do YYYY'), "raza");


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
        <Flex flexDir="column" width="100%">
            <Steps activeStep={activeStep}>
                {/* <Step key={1}> Step 1</Step> */}
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
                                    >
                                        <CardHeader>
                                            <Heading
                                                borderTopRadius={20} p={2}
                                                backgroundColor="#DBDCDE"
                                                color='gray' textAlign="center" fontSize={25}
                                                fontWeight="bold">
                                                <HStack>
                                                    <Image src={pen} w='110px' h='80px' />
                                                    <Text> What is you target amount? </Text>
                                                </HStack>
                                            </Heading>
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
                                                mt={10}
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
                                            </VStack>

                                            <VStack>

                                            </VStack>
                                        </CardBody>
                                        <VStack m={2} align='center' justify='center'>
                                            <Button colorScheme='teal' w={40} onClick={nextStep}> <ArrowRightIcon />  <ArrowRightIcon /></Button>
                                        </VStack>
                                        {/* <CardFooter>
                                        </CardFooter> */}
                                    </Card>
                                </WrapItem>
                                <Image src={Pngwing} w='180px' h='200px' />
                            </Wrap>
                        </Box>
                    </Container>
                </Step>

                {/* <Step key={2}> Step 2</Step> */}
                <Step label={"Interests"} key={2}>
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
                                        borderRadius={20}
                                        boxShadow='xl'
                                        height={80}
                                    >
                                        <CardHeader>
                                            <Heading
                                                borderTopRadius={20} p={2}
                                                backgroundColor="#DBDCDE"
                                                color='gray' textAlign="center" fontSize={25}
                                                fontWeight="bold">
                                                <HStack>
                                                    <Image src={pen} w='110px' h='80px' />
                                                    <Text> What is you Selected amount? </Text>
                                                </HStack>
                                            </Heading>
                                        </CardHeader>
                                        <CardBody>
                                            <VStack alignItems="center" justifyContent="center" mt={10}>
                                                <DatePicker value={value} onSelect={onSelect} onPanelChange={onPanelChange} p="3%" m="3%" />
                                                <div style={wrapperStyle}>{`Month: ${selectedValue?.format('YYYY-MM-DD')}`}</div>
                                                {/* <Alert message={`You selected date: ${selectedValue?.format('YYYY-MM-DD')}`} /> */}
                                            </VStack>
                                        </CardBody>

                                        <VStack m={2} align='center' justify='center'>
                                            <Button colorScheme='teal' w={40} onClick={nextStep}> <ArrowRightIcon />  <ArrowRightIcon /></Button>
                                        </VStack>
                                    </Card>
                                </WrapItem>
                                <Image src={Pngwing} w='180px' h='200px' />
                            </Wrap>

                        </Box>
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

                                            <HStack {...group}>
                                                <Wrap
                                                    // bgColor="blue.100"
                                                    display={{ sm: 'flex' }}
                                                    flex={1}
                                                    alignItems="center"
                                                    justifyContent="center"
                                                    mt={12}
                                                >
                                                    {options.map((value) => {
                                                        const radio = getRadioProps({ value })
                                                        return (
                                                            <WrapItem
                                                                // bgColor="blue.100"
                                                                display={{ sm: 'flex' }}
                                                                flex={1}
                                                                alignItems="center"
                                                                justifyContent="center"
                                                            >
                                                                <RadioCard key={value} {...radio}>{value}</RadioCard>
                                                            </WrapItem>
                                                        )
                                                    })}
                                                </Wrap>
                                            </HStack>
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