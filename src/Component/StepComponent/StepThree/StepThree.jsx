import React, { useState, useContext, useEffect,useRef } from "react";
import { Step, Steps, useSteps, } from "chakra-ui-steps"
// import { Heading, Box, Text, Button, HStack, useRadioGroup, VStack, Image, Wrap, Card, CardHeader, CardBody, WrapItem, Container, } from "@chakra-ui/react";
import QuestionList from '../../QuizComponent/QuestionList.json';
import StoreContext from '../../../ContextAPI/ContextAPI';
import Pngwing from '../../../assets/Pngwing.png';
import { ArrowRightIcon } from "@chakra-ui/icons";
import pen from '../../../assets/pen.png';
import {
    Box, Stack, Wrap, SliderTrack, Center, WrapItem, NumberDecrementStepper, Slider, Heading, Flex, Text, View, NumberInputField, NumberInput,
    SliderThumb, Input, Button, SliderFilledTrack, NumberIncrementStepper, NumberInputStepper, HStack, CardHeader, Card, CardBody, CardFooter, Container, VStack
} from "@chakra-ui/react";
import QuizScreen from "../../QuizComponent/QuizScreen";
// import { HamburgerIcon, ArrowRightIcon, AddIcon, WarningIcon } from "@chakra-ui/icons";

export default function StepThree() {


    // const NextStepDetail = useContext(StoreContext);
    // const { getRootProps, getRadioProps } = useRadioGroup({
    //     name: 'framework',
    //     defaultValue: 'react',
    //     onChange: console.log,
    // })

    // const group = getRootProps()
    const NextStepDetail = useContext(StoreContext);
    const [value, setValue] = React.useState(0)
    const handleChange = (value) => setValue(value)
    return (
        <Container>
            <QuizScreen />
        </Container>
        // <Container maxW="container" p='10' rounded='lg'>
        //     <Box boxShadow="2xl" rounded="md" padding='5%' backgroundColor='#A7B3C2'>
        //         <Wrap spacing='30px' align='center' justify='center'>
        //             <WrapItem>
        //                 <Card backgroundColor="white" height={80} borderRadius={20} boxShadow='xl'>

        //                     <CardHeader>
        //                         <Heading borderTopRadius={20} p={2} backgroundColor="#084877" height={20}
        //                             color='white' textAlign="center" fontSize={25} fontWeight="bold"
        //                         > Risk Assessment Result</Heading>
        //                     </CardHeader>

        //                     <CardBody alignItems="center" justifyContent="center">
        //                         <VStack height={20} display={{ sm: 'flex' }} flex={1} alignItems="center"
        //                             justifyContent="center" m={14} >
        //                             <Text textAlign="center" fontSize={25} fontWeight="bold">Moderate</Text>
        //                             <NumberInput maxW={52} m="3%"
        //                                 p="3%" value={value} rounded="4"
        //                                 boxShadow='outline' onChange={handleChange}>
        //                                 <NumberInputField />
        //                                 <NumberInputStepper>
        //                                     <NumberIncrementStepper />
        //                                     <NumberDecrementStepper />
        //                                 </NumberInputStepper>
        //                             </NumberInput>
        //                             <Text textAlign="center" fontSize={25} fontWeight="bold">
        //                                 Out of 10 Can adjust upto 2 notches
        //                             </Text>
        //                         </VStack>
        //                     </CardBody>
        //                 </Card>
        //             </WrapItem>

        //         </Wrap>
        //         <VStack mt={10} >
        //             <Button colorScheme='teal' w={40} onClick={() => NextStepDetail.setNestedStep("moveThirdStep")}> <ArrowRightIcon />  <ArrowRightIcon /></Button>
        //         </VStack>
        //     </Box>
        // </Container>
        // ====================>
        // <Container maxW="container" p='2' rounded='lg'>
        //     <Box boxShadow="2xl" rounded="md" padding='5%' backgroundColor='#A7B3C2'>
        //         <Wrap spacing='30px' align='center' justify='center'>
        //             <WrapItem >
        //                 <Card backgroundColor="white" height={80} borderRadius={20} boxShadow='xl'>
        //                     <CardHeader>
        //                         <Heading
        //                             borderTopRadius={20} p={2}
        //                             backgroundColor="#DBDCDE"
        //                             color='gray' textAlign="center" fontSize={25}
        //                             fontWeight="bold">
        //                             <HStack>
        //                                 <Image src={pen} w='110px' h='80px' />
        //                                 <Text>Please Specify Payment frequency ?</Text>
        //                             </HStack>
        //                         </Heading>
        //                     </CardHeader>
        //                     <CardBody alignItems="center" justifyContent="center">
        //                         <VStack {...group}>
        //                             <Wrap display={{ sm: 'flex' }} flex={1} alignItems="center" justifyContent="center" mt={12}>
        //                                 {QuestionList.map((value, i) => {
        //                                     console.log(value.Options);
        //                                     return (
        //                                         <WrapItem display={{ sm: 'flex' }} flex={1} alignItems="center" justifyContent="center">
        //                                             {/* <RadioCard key={value} {...radio}>{value}</RadioCard> */}
        //                                         </WrapItem>
        //                                     )
        //                                 })}
        //                             </Wrap>
        //                         </VStack>
        //                     </CardBody>
        //                     <VStack m={12} align='center' justify='center'>
        //                         <Button colorScheme='teal' w={40} onClick={() => NextStepDetail.setNestedStep("raza")}> <ArrowRightIcon />  <ArrowRightIcon /></Button>
        //                     </VStack>
        //                 </Card>
        //             </WrapItem>
        //             <Image src={Pngwing} w='180px' h='200px'/>
        //         </Wrap>
        //     </Box>
        // </Container>
    )
}
