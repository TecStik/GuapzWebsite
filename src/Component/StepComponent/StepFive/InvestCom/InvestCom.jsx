import React, { useState, useContext, useEffect,useRef } from "react";
import ChandePass from '../../../../assets/ChandePass.png'
import {
    Box, Wrap, Image, Heading, Button, Flex, Text, VStack, HStack, Stack, CardHeader, Card, CardBody, CardFooter, Container, List
} from "@chakra-ui/react";
import { HamburgerIcon, ArrowRightIcon, AddIcon, WarningIcon } from "@chakra-ui/icons";
import GuapZlogo from '../../../../assets/GuapZlogo.png';
import StoreContext from '../../../../ContextAPI/ContextAPI';
import { Divider, Table } from 'antd';

export default function InvestCom() {


    const [value, setValue] = React.useState(0)
    const handleChange = (value) => setValue(value)
    const NextStepDetail = useContext(StoreContext);

    const [inputValue, setInputValue] = useState(1);
    const onChange = (newValue) => {
        setInputValue(newValue);
    };

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
        },
        {
            title: 'Age',
            dataIndex: 'age',
        },
        {
            title: 'Address',
            dataIndex: 'address',
        },
    ];
    const data = [
        {
            key: '1',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
        },
        {
            key: '2',
            name: 'Jim Green',
            age: 42,
            address: 'London No. 1 Lake Park',
        },
        {
            key: '3',
            name: 'Joe Black',
            age: 32,
            address: 'Sydney No. 1 Lake Park',
        },
    ];

    return (

        <Container maxW="container" p='10' rounded='lg'>
            <Box boxShadow="2xl" rounded="md" padding='5%' backgroundColor='#EDF2F7' justifyItems="center" alignItems="center">
                <Flex justifyContent="center" alignItems="center">
                    <Wrap spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'  >
                        <Box bg="#CFD9E8" rounded="2xl">
                            <Card>
                                <CardHeader>
                                    <Image src={GuapZlogo} w='110px' h='50%' />
                                </CardHeader>
                                <CardBody p={2}>

                                    <Card backgroundColor="#EDF2F7" borderRadius={20} boxShadow='xl'
                                        direction={{ base: 'column', sm: 'column' }}
                                        p={3}
                                    >
                                        <VStack>
                                            <Wrap bg="#CFD9E8" p={2} borderRadius="2xl" width="100%">
                                                <Box>
                                                    <Text textAlign="center" fontSize={22} fontWeight="bold">Target Amount</Text>
                                                </Box>
                                                <Text textAlign="center" fontSize={22} >USD</Text>
                                            </Wrap>

                                            <Wrap>
                                                <Box>
                                                    <Text textAlign="center" fontSize={22} fontWeight="bold">Monthly payment</Text>
                                                </Box>
                                                <Text textAlign="center" fontSize={22} >USD</Text>
                                            </Wrap>

                                            <Wrap bg="#CFD9E8" p={2} borderRadius="2xl" width="100%">
                                                <Box>
                                                    <Text textAlign="center" fontSize={22} fontWeight="bold">Time Period</Text>
                                                </Box>
                                                <Text textAlign="center" fontSize={22} >XX Month</Text>
                                            </Wrap>
                                        </VStack>
                                    </Card>
                                </CardBody>
                                <CardFooter p={2}>
                                    <Box height={150} width="100%" boxShadow='xl' bg="#EDF2F7" rounded="3xl" p={2}>Chart</Box>
                                </CardFooter>
                            </Card>
                        </Box>
                        <Box bg="#CFD9E8" maxW='md' minwidth="40%" rounded="2xl" >
                            <Card >
                                <CardHeader textAlign="center" p={4}>
                                    <Heading size='md' h='50%' fontSize={30} fontWeight="bold">
                                        Investment Plan Summary</Heading>
                                </CardHeader>
                                <CardBody p={2}>
                                    <Box height={180} bg="#EDF2F7" boxShadow='xl' rounded="3xl" p={3}>
                                        <Text>your preferred monthly contribution of USD is insufficient to achieve your target goal, You shold either:</Text>
                                        <List spacing={3} p={4}>

                                            <ul>
                                                <li>Increase your monthly contribution</li>
                                                <li> Defer your plan</li>
                                                <li>Opt of a lesser targeted amount</li>
                                            </ul>
                                        </List>
                                    </Box>
                                </CardBody>
                                <CardFooter justifyContent="flex-end" m={5} pt={14}>
                                </CardFooter>
                            </Card>
                        </Box>
                    </Wrap>
                </Flex>
            </Box>
        </Container>
    )
}
