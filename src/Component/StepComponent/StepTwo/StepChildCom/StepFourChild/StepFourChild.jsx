import React, { useState, useContext, useEffect, useRef } from "react";
import { Heading, Box, Text, Flex, Button, HStack, Stack, Input, VStack, Image, Wrap, Card, CardHeader, CardFooter, CardBody, WrapItem, } from "@chakra-ui/react";
import customization from '../../../../../assets/customization.png'
import Pngwing from '../../../../../assets/Pngwing.png'
import { ArrowRightIcon } from "@chakra-ui/icons"
import StoreContext from '../../../../../ContextAPI/ContextAPI';



export const ClickableSteps = () => {


    const NextStepDetail = useContext(StoreContext);
    function handlethirdStep(params) {
        NextStepDetail.setNestedStep("moveIIIStep")
    }


    return (
        <>
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
                                        bg="#CFD9E8" borderRadius="20px"
                                        size='lg' height='48px' minW='220px'
                                        textColor="#084877"
                                        type="text"
                                        placeholder="Initial"
                                    ></Input>
                                </Wrap>
                                <Wrap spacing='30px' align='center' justify='center' mt={5}>
                                    <Input
                                        bg="#CFD9E8" borderRadius="20px"
                                        size='lg' height='48px' minW='220px'
                                        textColor="#084877"
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
        </>
    )
}