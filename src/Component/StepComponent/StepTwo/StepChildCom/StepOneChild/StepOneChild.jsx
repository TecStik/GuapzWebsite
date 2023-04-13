import React, { useState, useContext, useEffect, useRef } from "react";
import { Step, Steps, useSteps } from "chakra-ui-steps"
import { Heading, Box, Text, Flex, Button, HStack, Stack, Input, VStack, Image, Wrap, Card, CardHeader, CardFooter, CardBody, WrapItem, } from "@chakra-ui/react";
import customization from '../../../../../assets/customization.png'
import Pngwing from '../../../../../assets/Pngwing.png'
import { ArrowRightIcon } from "@chakra-ui/icons"
import StoreContext from '../../../../../ContextAPI/ContextAPI';


export const StepOneChild = () => {

    const { nextStep, prevStep, reset, activeStep, setStep } = useSteps({
        initialStep: 0,
    })
    const NextStepDetail = useContext(StoreContext);
    let targetValue = useRef()



    function handlefun() {
        console.log("TargetValue",targetValue);
        nextStep()
        // console.log(targetValue.current.value, "khkkjhk");
        NextStepDetail.setFutValue(targetValue.current.value)
        NextStepDetail.setStepChildCom("moveIIndStep")
    }

    return (
        <>
            <Box boxShadow="2xl" minHeight="70vh" rounded="md" paddingTop='10%' >
                <Wrap spacing='30px' align='center' justify='center'>
                    <WrapItem>
                        <Card backgroundColor="white" height={80} borderRadius={20} boxShadow='xl'>
                            <CardHeader backgroundColor="#084877" borderTopRadius={20} p={2} >
                                <HStack>
                                    <Image src={customization} w='80px' h='70px' />
                                    <Text color='gray.100' textAlign="center" fontSize={25} fontWeight="bold">
                                        What is your target amount ?
                                    </Text>
                                </HStack>
                            </CardHeader>
                            <CardBody >
                                <Stack spacing={3} mt={10}>
                                    <Input variant='outline' placeholder='Outline' ref={targetValue} rounded="4" boxShadow='outline' m="3%" p="3%" />
                                </Stack>
                            </CardBody>
                            <VStack mt={10} >
                                <Button colorScheme='teal' bg="#084877" w={40} onClick={handlefun}><ArrowRightIcon /><ArrowRightIcon /></Button>
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