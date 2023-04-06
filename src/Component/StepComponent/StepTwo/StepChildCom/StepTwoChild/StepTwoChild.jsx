import React, { useState, useContext, useEffect, useRef } from "react";
import { Step, Steps, useSteps } from "chakra-ui-steps"
import { Box, Text, Button, HStack, Stack, VStack, Image, Wrap, Card, CardHeader, CardBody, WrapItem, } from "@chakra-ui/react";
import customization from '../../../../../assets/customization.png'
import Pngwing from '../../../../../assets/Pngwing.png'
import { ArrowRightIcon } from "@chakra-ui/icons"
import StoreContext from '../../../../../ContextAPI/ContextAPI';
import { DatePicker, Space } from 'antd';


export const StepTwoChild = () => {

    const NextStepDetail = useContext(StoreContext);

    const onChange = (date, dateString) => {
        let currentDate = new Date();
        let selectDate = date.$d;
        var diff = Math.floor(currentDate.getTime() - selectDate.getTime());
        var day = 1000 * 60 * 60 * 24;
        var days = Math.floor(diff / day);
        NextStepDetail.setTHorizon(days)
    };

    function handlethirdStep(params) {
        NextStepDetail.setStepChildCom("moveIIIStep")
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
                                        What is your Time Horizon?
                                    </Text>
                                </HStack>
                            </CardHeader>
                            <CardBody >
                                <Stack spacing={3} mt={10} style={{
                                    width: '100%', justifyItems: "center", alignItems: "center"
                                }}>
                                    <Space direction="vertical" style={{
                                        width: '50%', alignItems: "center"
                                    }}>
                                        <DatePicker onChange={onChange} />
                                    </Space>
                                    {/* <Text variant='outline' placeholder='Outline' rounded="4" boxShadow='outline' m="3%" p="3%" /> */}
                                </Stack>
                            </CardBody>
                            <VStack mt={10} >
                                <Button colorScheme='teal' bg="#084877" onClick={handlethirdStep} w={40}><ArrowRightIcon /><ArrowRightIcon /></Button>
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