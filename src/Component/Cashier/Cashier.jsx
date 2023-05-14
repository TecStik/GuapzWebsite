import React from 'react';
import {
    Box, Wrap, Image, Heading, Button, Flex, Text, VStack, Divider, HStack, Stack, CardHeader, Card, CardBody, CardFooter, Container, List, Center
} from "@chakra-ui/react";
import GuapZlogo from '../../assets/GuapZlogo.png';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function () {
    let data = {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
            {
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
        ],
    }

    let data1 = {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
            {
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };
    return (
        <Container maxW="container" p='10' rounded='lg'>
            <Box boxShadow="2xl" rounded="md" padding='5%' backgroundColor='#EDF2F7' justifyItems="center" alignItems="center">
                <Flex justifyContent="center" alignItems="center">
                    <Wrap spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))' bg="#CFD9E8" rounded="2xl" >
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
                    </Wrap>
                </Flex>
                <br />
                <br />
                <Center>
                    <Wrap>
                        <Box
                            backgroundColor="#EDF2F7" borderRadius={20} boxShadow='xl'
                            direction={{ base: 'row', sm: 'row' }}
                            p={3}
                        >
                            <Text textAlign="center" fontSize={22} fontWeight="bold">Monthly payment USD : 35000$</Text>
                        </Box>
                    </Wrap>
                </Center>
                <br />
                <br />
                <Flex justifyContent="center" alignItems="center">
                    <Wrap spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))' bg="#CFD9E8" rounded="2xl" >
                        <Card backgroundColor="#EDF2F7" borderRadius={20} boxShadow='xl'
                            // direction={{ base: 'column', sm: 'column' }}
                            p={3}
                        >
                            {/* <Wrap bg="#CFD9E8" borderRadius="2xl" width="100%"> */}
                            <Box bg="#CFD9E8" borderRadius="2xl" w>
                                <Text textAlign="center" fontSize={22} fontWeight="bold">Target Amount</Text>
                                <Doughnut data={data} />
                            </Box>
                            {/* </Wrap> */}
                        </Card>

                        <Card backgroundColor="#EDF2F7" borderRadius={20} boxShadow='xl'
                            direction={{ base: 'column', sm: 'column' }}
                            p={3}
                        >
                            {/* <Wrap bg="#CFD9E8" borderRadius="2xl" width="100%"> */}
                            <Box bg="#CFD9E8" borderRadius="2xl" w>
                                <Text textAlign="center" fontSize={22} fontWeight="bold">Target Amount</Text>
                                <Pie data={data1} />
                            </Box>
                            {/* </Wrap> */}
                        </Card>

                        <Card backgroundColor="#EDF2F7" borderRadius={20} boxShadow='xl'
                            direction={{ base: 'column', sm: 'column' }}
                            p={3}
                        >
                            <VStack>
                                <Wrap bg="#CFD9E8" p={2} borderRadius="2xl" width="100%">
                                    <Box>
                                        <Text textAlign="center" fontSize={22} fontWeight="bold">Name</Text>
                                    </Box>
                                    <Text textAlign="center" fontSize={22} fontWeight="bold">Amount</Text>
                                </Wrap>

                                <Wrap>
                                    <Box >
                                        <Text textAlign="center" style={{ border: 'solid red' }} fontSize={22}>Rider 1</Text>
                                        <Text textAlign="center" style={{ border: 'solid red' }} fontSize={22}>Rider 1</Text>
                                        <Text textAlign="center" style={{ border: 'solid red' }} fontSize={22}>Rider 1</Text>
                                        <Text textAlign="center" style={{ border: 'solid red' }} fontSize={22}>Rider 1</Text>
                                        <Text textAlign="center" style={{ border: 'solid red' }} fontSize={22}>Rider 1</Text>
                                        <Text textAlign="center" style={{ border: 'solid red' }} fontSize={22}>Rider 1</Text>

                                    </Box>
                                    <Box>
                                        <Text textAlign="center" style={{ border: 'solid red' }} fontSize={22} >USD</Text>
                                        <Text textAlign="center" style={{ border: 'solid red' }} fontSize={22} >USD</Text>
                                        <Text textAlign="center" style={{ border: 'solid red' }} fontSize={22} >USD</Text>
                                        <Text textAlign="center" style={{ border: 'solid red' }} fontSize={22} >USD</Text>
                                        <Text textAlign="center" style={{ border: 'solid red' }} fontSize={22} >USD</Text>
                                        <Text textAlign="center" style={{ border: 'solid red' }} fontSize={22} >USD</Text>
                                    </Box>
                                </Wrap>


                            </VStack>
                        </Card>
                    </Wrap>
                </Flex>

                {/* <Card>
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
                </Card> */}
                {/* <Box bg="#CFD9E8" maxW='md' minwidth="40%" rounded="2xl" >
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
                        </Box> */}
            </Box>
        </Container>
    )
}
