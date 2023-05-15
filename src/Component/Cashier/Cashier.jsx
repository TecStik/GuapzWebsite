import React from 'react';
import {
    Box, Wrap, Image, Heading, Button, GridItem, Grid, WrapItem, Flex, Text, VStack, Divider, HStack, Stack, CardHeader, Card, CardBody, CardFooter, Container, List, Center
} from "@chakra-ui/react";
import GuapZlogo from '../../assets/GuapZlogo.png';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { Pie } from 'react-chartjs-2';
import './Cashier.css';

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
        <Container maxW="container" p='10' rounded='lg' bg="#8EB9BB">
            <Box boxShadow="2xl" rounded="md" padding='5%' backgroundColor='#EDF2F7' justifyItems="center" alignItems="center">
                <Flex justifyContent="space-evenly" alignItems="center">
                  
                    <Wrap spacing='60px'>
                        <WrapItem>
                            <Stack w='280px' h='180px' backgroundColor="#8EB9BB" borderRadius={20}>
                                <Text h='90px' backgroundColor="#1A7175" borderTopRadius={20} textAlign="center" p={7} fontSize={26} fontWeight="bold" color="white">
                                    Total Client
                                </Text>
                                <Text h='90px' borderBottomRadius={10} textAlign="center" fontSize={35} fontWeight="bold" color="#1A7175">
                                    10
                                </Text>
                            </Stack>
                        </WrapItem>

                        <WrapItem>
                            <Stack w='280px' h='180px' backgroundColor="#8EB9BB" borderRadius={20}>
                                <Text h='90px' backgroundColor="#1A7175" borderTopRadius={20} textAlign="center" p={7} fontSize={26} fontWeight="bold" color="white">
                                    Total Client
                                </Text>
                                <Text h='90px' borderBottomRadius={10} textAlign="center" fontSize={35} fontWeight="bold" color="#1A7175">
                                    10
                                </Text>
                            </Stack>
                        </WrapItem>

                        <WrapItem>
                            <Stack w='280px' h='180px' backgroundColor="#8EB9BB" borderRadius={20}>
                                <Text h='90px' backgroundColor="#1A7175" borderTopRadius={20} textAlign="center" p={7} fontSize={26} fontWeight="bold" color="white">
                                    Total Client
                                </Text>
                                <Text h='90px' borderBottomRadius={10} textAlign="center" fontSize={35} fontWeight="bold" color="#1A7175">
                                    10
                                </Text>
                            </Stack>
                        </WrapItem>
                    </Wrap>

                </Flex>

                <br />
                <br />
                <Center>
                    <Box
                        backgroundColor="#EDF2F7" borderRadius={35} boxShadow='xl'
                        direction={{ base: 'row', sm: 'row' }}
                        p={3}
                    >
                        <Text textAlign="center" fontSize={25} fontWeight="bold" p={2} m={2}>Total Collection: 15000$</Text>
                    </Box>
                </Center>

                <br />
                <br />

                <Flex justifyContent="center" alignItems="center">
                    <Wrap spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))' rounded="2xl">

                        <Card bg="#CFD9E8" borderRadius={20} boxShadow='xl' p={3}>
                            <Box bg="#EDF2F7" borderRadius="2xl">
                                <Text textAlign="center" fontSize={22} fontWeight="bold">Cheque/Cash</Text>
                                <Doughnut data={data} />
                            </Box>
                        </Card>

                        <Card bg="#CFD9E8" borderRadius={20} boxShadow='xl' p={3}>
                            <Box bg="#EDF2F7" borderRadius="2xl">
                                <Text textAlign="center" fontSize={22} fontWeight="bold">Verify/Unverified</Text>
                                <Pie data={data1} />
                            </Box>
                        </Card>

                        <Card bg="#CFD9E8" borderRadius={20} boxShadow='xl' p={3} w={265}>
                            <Box bg="#EDF2F7" borderRadius="2xl" h="100%" >

                                <VStack>
                                    <Wrap bg="#8EB9BB" borderRadius={5} boxShadow='xl' p={2}>
                                        <Text textAlign="center" fontSize={22} w={100}>Name</Text>
                                        <Text textAlign="center" fontSize={22} w={100}>Amount</Text>
                                    </Wrap>

                                    <Wrap bg="gray.200" borderRadius={5} boxShadow='xl' p={2}>
                                        <Text textAlign="center" fontSize={22} w={100}>Cashier 1</Text>
                                        <Text textAlign="center" fontSize={22} w={100}>2000</Text>
                                    </Wrap>
                                    <Wrap bg="gray.200" borderRadius={5} boxShadow='xl' p={2}>
                                        <Text textAlign="center" fontSize={22} w={100}>Cashier 1</Text>
                                        <Text textAlign="center" fontSize={22} w={100}>2000</Text>
                                    </Wrap>
                                    <Wrap bg="gray.200" borderRadius={5} boxShadow='xl' p={2}>
                                        <Text textAlign="center" fontSize={22} w={100}>Cashier 1</Text>
                                        <Text textAlign="center" fontSize={22} w={100}>4000</Text>
                                    </Wrap>
                                    <Wrap bg="gray.200" borderRadius={5} boxShadow='xl' p={2}>
                                        <Text textAlign="center" fontSize={22} w={100}>Cashier 1</Text>
                                        <Text textAlign="center" fontSize={22} w={100}>4000</Text>
                                    </Wrap>
                                    <Wrap bg="gray.200" borderRadius={5} boxShadow='xl' p={2}>
                                        <Text textAlign="center" fontSize={22} w={100}>Cashier 1</Text>
                                        <Text textAlign="center" fontSize={22} w={100}>5000</Text>
                                    </Wrap>
                                    {/* <Wrap>
                                        <Box >
                                            <Text textAlign="center"  bg="#CFD9E8" borderRadius={1} width="8rem" style={{ border: 'solid red' }} fontSize={22}>Rider 1</Text>
                                            
                                            <Text textAlign="center" style={{ border: 'solid red' }} fontSize={22}>Cashier 1</Text>
                                            <Text textAlign="center" style={{ border: 'solid red' }} fontSize={22}>Rider 1</Text>
                                            <Text textAlign="center" style={{ border: 'solid red' }} fontSize={22}>Cashier 1</Text>

                                        </Box>
                                        <Box>
                                            <Text textAlign="center" style={{ border: 'solid red' }} width="8rem" fontSize={22} >USD</Text>
                                            <Text textAlign="center" style={{ border: 'solid red' }} fontSize={22} >USD</Text>
                                            <Text textAlign="center" style={{ border: 'solid red' }} fontSize={22} >USD</Text>
                                            <Text textAlign="center" style={{ border: 'solid red' }} fontSize={22} >USD</Text>
                                            <Text textAlign="center" style={{ border: 'solid red' }} fontSize={22} >USD</Text>
                                            <Text textAlign="center" style={{ border: 'solid red' }} fontSize={22} >USD</Text>
                                        </Box>
                                    </Wrap> */}
                                </VStack>

                            </Box>
                        </Card>
                    </Wrap>
                </Flex>
            </Box>
        </Container>
    )
}

