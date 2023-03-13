import React, { useState, useEffect, useContext } from 'react';
import { Heading, Box, Text, VStack, Image, Wrap, WrapItem, Container, Center, } from "@chakra-ui/react";
import laptopIcon from "../../../assets/laptop-icon.png";
import travelIcon from '../../../assets/travel-icon.png';
import { Step, Steps, useSteps, } from "chakra-ui-steps"
import devices from '../../../assets/devices.png';
import purse from '../../../assets/purse.png';
import graduated from '../../../assets/graduated.png';
import customization from '../../../assets/customization.png';

import StoreContext from '../../../ContextAPI/ContextAPI';


export default function StepOne() {

    const { nextStep, prevStep, reset, activeStep, setStep } = useSteps({ initialStep: 0, })
    const NextStepDetail = useContext(StoreContext);


    return (
        <Container p='10' width="" rounded='lg'>
            <Box boxShadow="2xl" width="100%" minHeight="70vh" rounded="md" color='white'
                bgGradient={[
                    'linear(to-tr, teal.300, #FFFFFF)',
                    'linear(to-t, #316489, teal.500)',
                    'linear(to-b, #316489, #316489',
                ]}
            >
                <Wrap spacing='30px' align='center' justify='center' p={10} >
                    <WrapItem >
                        <Center boxShadow="2xl" onClick={() => NextStepDetail.setNestedStep("moveIIndStep")} w='310px' h='180px'>
                            <VStack >
                                <Image src={laptopIcon} w='130px' h='130px' />
                                <Text color='white'>Laptop/Pc</Text>
                            </VStack>
                        </Center>
                    </WrapItem>
                    <WrapItem>
                        <Center rounded="md" boxShadow="2xl" onClick={() => NextStepDetail.setNestedStep("moveIIndStep")} w='310px' h='180px'>
                            <VStack>
                                <Image src={devices} w='120px' h='125px' />
                                <Text color='white'>Mobile/Gadgets</Text>
                            </VStack>
                        </Center>
                    </WrapItem>
                    <WrapItem >
                        <Center boxShadow="2xl" onClick={() => NextStepDetail.setNestedStep("moveIIndStep")} w='310px' h='180px'>
                            <VStack>
                                <Image src={purse} w='150px' h='140px' />
                                <Text color='white'>Apparel</Text>
                            </VStack>
                        </Center>
                    </WrapItem>
                </Wrap>

                <Wrap spacing='30px' align='center' justify='center' pb={10}>
                    <WrapItem>
                        <Center boxShadow="2xl" onClick={() => NextStepDetail.setNestedStep("moveIIndStep")} w='310px' h='180px'>
                            <VStack>
                                <Image src={customization} w='110px' h='110px' />
                                <Text color='white'>Custom </Text>
                            </VStack>
                        </Center>
                    </WrapItem>
                    <WrapItem>
                        <Center rounded="md" boxShadow="2xl" onClick={() => NextStepDetail.setNestedStep("moveIIndStep")} w='310px' h='180px' >
                            <VStack>
                                <Image src={graduated} w='130px' h='120px' />
                                <Text color='white'>Education</Text>
                            </VStack>
                        </Center>
                    </WrapItem>
                    <WrapItem >
                        <Center rounded="md" boxShadow="2xl" onClick={() => NextStepDetail.setNestedStep("moveIIndStep")} w='310px' h='180px'>
                            <VStack>
                                <Image src={travelIcon} w='130px' h='120px' />
                                <Text color='white'> Vocation</Text>
                            </VStack>
                        </Center>
                    </WrapItem>
                </Wrap>
            </Box >
        </Container >
    )
}
