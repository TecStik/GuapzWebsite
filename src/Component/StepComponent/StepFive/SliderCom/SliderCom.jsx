import React, { useState, useContext, useEffect } from "react";
import ChandePass from '../../../../assets/ChandePass.png'
import {
    Box, Wrap, Image, WrapItem, Flex, Text,
    Button, Center, CardHeader, Card, CardBody, CardFooter, Container, VStack
} from "@chakra-ui/react";
import { HamburgerIcon, ArrowRightIcon, AddIcon, WarningIcon } from "@chakra-ui/icons";
import GuapZlogo from '../../../../assets/GuapZlogo.png'
import StoreContext from '../../../../ContextAPI/ContextAPI';
import { Divider, Table } from 'antd';
import { Col, InputNumber, Row, Slider, Space } from 'antd';


export default function SliderCom() {


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
                                <CardBody p={2} >
                                    <Card backgroundColor="#EDF2F7" borderRadius={20} boxShadow='xl'
                                        direction={{ base: 'column', sm: 'row' }}
                                        p={3}
                                    >
                                        {/* <VStack> */}

                                        <Wrap p={2} borderRadius="2xl" >
                                            <Box>
                                                <Text textAlign="center" p={2} fontSize={22} bg="#CFD9E8" fontWeight="bold">Target Amount</Text>
                                                <Text textAlign="center" fontSize={22} >USD</Text>
                                            </Box>
                                        </Wrap>

                                        <Wrap p={2}>
                                            <Box>
                                                <Text textAlign="center" p={2} fontSize={22} bg="#CFD9E8" fontWeight="bold">Monthly payment</Text>
                                                <Text textAlign="center" fontSize={22} >USD</Text>
                                            </Box>
                                        </Wrap>

                                        <Wrap p={2} borderRadius="2xl" >
                                            <Box>
                                                <Text textAlign="center" p={2} bg="#CFD9E8" fontSize={22} fontWeight="bold">Time Period</Text>
                                                <Text textAlign="center" fontSize={22} >XX Month</Text>
                                            </Box>
                                        </Wrap>
                                        {/* </VStack> */}
                                    </Card>
                                </CardBody>
                                <CardFooter p={2}mt={4}>
                                    <Box height={300} width="100%" bg="#EDF2F7" rounded="3xl" boxShadow="2xl" p={2}>
                                        Chart
                                    </Box>
                                </CardFooter>
                            </Card>
                        </Box>
                        <Box bg="#CFD9E8" maxW='md' rounded="2xl">
                            <Card >
                                <CardHeader textAlign="center" p={4}>
                                    {/* <Heading size='md' h='50%' fontSize={30} fontWeight="bold">
                                        Investment Plan Summary</Heading> */}
                                </CardHeader>
                                <CardBody p={2}>

                                    <WrapItem>
                                        <Center bg='#EDF2F7' rounded="md" p={2} boxShadow="2xl" w='310px' h='100px' m={4}>
                                            <VStack>
                                                <Row>
                                                    <Text fontSize={16} fontWeight="bold">Change Periodic Contribution</Text>
                                                    <Col span={12}>
                                                        <Slider
                                                            style={{ width: "100px" }}
                                                            min={1}
                                                            max={100}
                                                            onChange={onChange}
                                                            value={typeof inputValue === 'number' ? inputValue : 0}
                                                        // tooltip={{
                                                        //     open: true,
                                                        // }}

                                                        />
                                                    </Col>
                                                    <Col span={4} >
                                                        <InputNumber
                                                            min={1}
                                                            max={20}
                                                            style={{
                                                                margin: '0 16px',
                                                                height: "100%"
                                                            }}
                                                            value={inputValue}
                                                            onChange={onChange}
                                                        />

                                                    </Col>
                                                </Row>
                                                <Text fontSize={16} fontWeight="bold">Rupees</Text>
                                            </VStack>
                                        </Center>
                                    </WrapItem>
                                    <WrapItem>
                                        <Center bg='#EDF2F7' rounded="md" p={2} boxShadow="2xl" w='310px' h='100px' m={4}>
                                            <VStack>
                                                <Row>
                                                    <Text fontSize={16} fontWeight="bold">Change Time Horizon</Text>
                                                    <Col span={12}>
                                                        <Slider
                                                            style={{ width: "100px" }}
                                                            min={1}
                                                            max={100}
                                                            onChange={onChange}
                                                            value={typeof inputValue === 'number' ? inputValue : 0}
                                                        // tooltip={{
                                                        //     open: true,
                                                        // }}

                                                        />
                                                    </Col>
                                                    <Col span={4} >
                                                        <InputNumber
                                                            min={1}
                                                            max={20}
                                                            style={{
                                                                margin: '0 16px',
                                                                height: "100%"
                                                            }}
                                                            value={inputValue}
                                                            onChange={onChange}
                                                        />

                                                    </Col>
                                                </Row>
                                                <Text fontSize={16} fontWeight="bold">Rupees</Text>
                                            </VStack>
                                        </Center>
                                    </WrapItem>
                                    <WrapItem>
                                        <Center bg='#EDF2F7' rounded="md" p={2} boxShadow="2xl" w='310px' h='100px' m={4}>
                                            <VStack>
                                                <Row>
                                                    <Text fontSize={16} fontWeight="bold">Change Target Amount</Text>
                                                    <Col span={12}>
                                                        <Slider style={{ width: "100px" }} min={1} max={100}
                                                            onChange={onChange}
                                                            value={typeof inputValue === 'number' ? inputValue : 0}
                                                        // tooltip={{
                                                        //     open: true,
                                                        // }}
                                                        />
                                                    </Col>
                                                    <Col span={4} >
                                                        <InputNumber
                                                            min={1}
                                                            max={20}
                                                            style={{
                                                                margin: '0 16px',
                                                                height: "100%"
                                                            }}
                                                            value={inputValue}
                                                            onChange={onChange}
                                                        />

                                                    </Col>
                                                </Row>
                                                <Text fontSize={16} fontWeight="bold">Rupees</Text>
                                            </VStack>
                                        </Center>
                                    </WrapItem>
                                </CardBody>
                                <CardFooter justifyContent="flex-end" m={5} pt={14}>
                                    <Button>Adjust ment </Button>
                                </CardFooter>
                            </Card>
                        </Box>
                    </Wrap>
                </Flex >
            </Box >
        </Container >
    )
}
