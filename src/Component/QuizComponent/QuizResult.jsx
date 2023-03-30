import React, { useState, useContext, useEffect } from "react";
import StoreContext from '../../ContextAPI/ContextAPI';
import { ArrowRightIcon, ArrowLeftIcon } from "@chakra-ui/icons";
import {
    Box, Wrap, WrapItem, NumberDecrementStepper, Heading, Flex, Text, NumberInputField, NumberInput,
    Button, NumberIncrementStepper, NumberInputStepper, HStack, CardHeader, Card, CardBody, CardFooter, Container, VStack
} from "@chakra-ui/react";
export default function QuizResult() {


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

        <Container maxW="container" p='10' rounded='lg'>
            <Box boxShadow="2xl" rounded="md" padding='5%' backgroundColor='#A7B3C2'>
                <Wrap spacing='30px' align='center' justify='center'>
                    <WrapItem>
                        <Card backgroundColor="white" borderRadius={20} boxShadow='xl'>

                            <CardHeader>
                                <Heading borderTopRadius={20} p={2} backgroundColor="#084877" height={20}
                                    color='white' textAlign="center" fontSize={25} fontWeight="bold"
                                > Risk Assessment Result</Heading>
                            </CardHeader>

                            <CardBody alignItems="center" justifyContent="center">
                                <VStack
                                    justifyContent="center" m={5} >
                                    <Text textAlign="center" fontSize={25} fontWeight="bold">Moderate</Text>
                                    <NumberInput maxW={52}
                                        p="3%" value={value} rounded="4"
                                        boxShadow='outline' onChange={handleChange}>
                                        <NumberInputField />
                                        <NumberInputStepper>
                                            <NumberIncrementStepper />
                                            <NumberDecrementStepper />
                                        </NumberInputStepper>
                                    </NumberInput>
                                    <Text textAlign="center" fontSize={25} fontWeight="bold">
                                        Out of 10 Can adjust upto 2 notches
                                    </Text>
                                </VStack>
                            </CardBody>
                            <CardFooter justifyContent="space-around" >
                                <Wrap mb={5}>
                                    <Button colorScheme='teal' w={40} onClick={() => NextStepDetail.setNestedStep("moveThirdStep")}> <ArrowLeftIcon mr={2}/>  Retake</Button>
                                    <Button colorScheme='teal' w={40} onClick={() => NextStepDetail.setNestedStep("moveThirdStep")}>Conform <ArrowRightIcon ml={2}/></Button>
                                </Wrap>
                            </CardFooter>
                        </Card>
                    </WrapItem>

                </Wrap>
                {/* <VStack mt={10} >
               <Button colorScheme='teal' w={40} onClick={() => NextStepDetail.setNestedStep("moveThirdStep")}> <ArrowRightIcon />  <ArrowRightIcon /></Button>
           </VStack> */}
            </Box>
        </Container>

    )
}
