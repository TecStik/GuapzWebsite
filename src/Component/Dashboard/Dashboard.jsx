import React from 'react'

import {
    Box, Stack, Wrap, Grid, Center, WrapItem, SimpleGrid, GridItem, Heading, Flex, Text, View, FormLabel, Input, Button, FormControl, Image, HStack, CardHeader, Card, CardBody, CardFooter, Container, VStack
} from "@chakra-ui/react";
import { HamburgerIcon, ArrowRightIcon, AddIcon, WarningIcon } from "@chakra-ui/icons";
import { Link } from 'react-router-dom';
import StartInvestment from '../../assets/StartInvestment.png'
import UpdateCRP from '../../assets/UpdateCRP.png'
import ChandePass from '../../assets/ChandePass.png'
import PC from '../../assets/PC.png'
import PortflioPosi from '../../assets/PortflioPosi.png'
import Wallet from '../../assets/Wallet.png'
// import UpdateCRP from '../../assets/UpdateCRP.png'


export default function Dashboard() {


    const handleClick = event => {
        // 👇️ refers to the image element
        console.log(event.target);

        console.log('Image clicked');
    };

    return (

        <Container
            maxW="container"
            //   marginLeft="15%"
            p='10' width="" rounded='lg'
        //     boxShadow='md'
        // maxWidth='xl'
        // justifyContent="center"
        // textAlign='center'
        // columns={{ sm: 2, md: 4 }}
        // backgroundColor='red.100'
        // spacing='8'
        // alignItems="center"
        // backgroundColor='#F6F6F6'
        // backgroundColor='yellow.200'
        // mt='4%'

        >
            {/* <Flex
                // width='auto'
                rounded='md'
                boxShadow='md'
                // maxWidth='xl'
                // justifyContent="center"
            // textAlign='center'
            > */}
            <Box
                boxShadow="2xl"
                width="100%"
                minHeight="70vh"
                rounded="md"
                // mt="7"
                // mb='7'
                // paddingTop='10%'

                // m={10}
                // maxW='xl'
                // backgroundColor='#F6F6F6'
                // backgroundColor='yellow.100'
                // bgGradient='linear(to-t, #316489, #FFFFFF)'
                bgGradient={[
                    'linear(to-tr, teal.300, #FFFFFF)',
                    'linear(to-t, #316489, teal.500)',
                    'linear(to-b, #316489, #316489',
                ]}
                // alignItems="center"
                color='black.100'
            // flex={1}
            // justifyContent="center"
            // justifyContent="space-evenly"
            >
                {/* <VStack color="black"><Heading fontSize={30} m="3%" fontWeight="bold">Dashboard</Heading> </VStack> */}
                {/* <HStack height={20}
                        // bgColor="blue.100"
                        display={{ sm: 'flex' }}
                        flex={1}
                        justifyContent='space-evenly'
                    >

                    </HStack> */}

                {/* <HStack height={20}
                        // bgColor="blue.100"
                        display={{ sm: 'flex' }}
                        flex={1}
                        justifyContent='space-evenly'
                        mt={3}

                    > */}
                {/* <Stack  */}
                {/* alignItems="center"
                        // display='flow-root'
                        // colSpan={2}
                        // gap={6}
                        flex={1}
                        justifyContent="center"
                    > */}
                {/* <Stack  */}
                {/* //  mt={20}
                     > */}


                <Wrap spacing='30px' align='center' justify='center' p={10}>
                    <WrapItem>
                        <Center
                            // bg='gray.200'
                            boxShadow="2xl"
                            onClick={handleClick}
                            w='310px' h='150px'
                        >
                            <VStack>
                                <Image src={StartInvestment} w='150px' h='150px' />

                                <Text>
                                    Starting Investment
                                </Text>
                            </VStack>
                        </Center>
                    </WrapItem>
                    <WrapItem>
                        <Center
                            // bg='red.200'
                            rounded="md"
                            boxShadow="2xl"
                            w='310px' h='150px'
                        >
                            <VStack>

                                <Image src={UpdateCRP} w='190px' h='150px' />
                                <Text>
                                    Update CRP
                                </Text>
                            </VStack>
                            {/* Box 2 */}
                        </Center>
                    </WrapItem>
                    <WrapItem >
                        <Center
                            // bg='red.200'
                            boxShadow="2xl"
                            w='310px' h='150px'
                        >
                            <VStack>
                                <Image src={PortflioPosi} w='310px' h='150px' />
                                <Text>
                                    Update CRP
                                </Text>
                            </VStack>
                        </Center>
                    </WrapItem>
                </Wrap>

                <Wrap spacing='30px' align='center' justify='center' >
                    <WrapItem>
                        <Center
                            // bg='gray.200'
                            boxShadow="2xl"
                            onClick={handleClick}
                            w='310px' h='150px'
                        >
                            <VStack>
                                <Image src={PC} w='130px' h='120px'  />

                                <Text>
                                   Update KYC
                                </Text>
                            </VStack>
                        </Center>
                    </WrapItem>
                    <WrapItem>
                        <Center
                            // bg='red.200'
                            rounded="md"
                            boxShadow="2xl"
                            w='310px' h='150px'
                        >
                            <VStack>

                                <Image src={Wallet} w='130px' h='120px'  />
                                <Text>
                                   Wallet
                                </Text>
                            </VStack>
                            {/* Box 2 */}
                        </Center>
                    </WrapItem>
                    <WrapItem >
                        <Center
                            // bg='red.200'

                            w='310px' h='150px'
                            boxShadow="2xl"
                        >
                            <VStack>
                                <Image src={ChandePass} w='130px' h='120px' />
                                <Text>
                                   Change Password
                                </Text>
                            </VStack>
                        </Center>
                    </WrapItem>
                </Wrap>
                {/* </Stack> */}
                {/* <SimpleGrid spacing={4}
                            templateColumns='repeat(auto-fill, minmax(200px, 1fr))'
                            columns={2} spacingX='40px' spacingY='20px'
                            >
                            <Card backgroundColor="red.100"
                            >
                                <CardHeader>
                                    <Heading size='md'> Customer dashboard</Heading>
                                </CardHeader>
                                <CardBody>
                                    <Text>View a summary of all your customers over the last month.</Text>
                                </CardBody>
                                <CardFooter>
                                    <Button>View here</Button>
                                </CardFooter>
                            </Card>
                            <Card backgroundColor="red.100">
                                <CardHeader>
                                    <Heading size='md'> Customer dashboard</Heading>
                                </CardHeader>
                                <CardBody>
                                    <Text>View a summary of all your customers over the last month.</Text>
                                </CardBody>
                                <CardFooter>
                                    <Button>View here</Button>
                                </CardFooter>
                            </Card>
                            <Card backgroundColor="red.100">
                                <CardHeader>
                                    <Heading size='md'> Customer dashboard</Heading>
                                </CardHeader>
                                <CardBody>
                                    <Text>View a summary of all your customers over the last month.</Text>
                                </CardBody>
                                <CardFooter>
                                    <Button>View here</Button>
                                </CardFooter>
                            </Card>
                        </SimpleGrid> */}
                {/* </Stack> */}
                {/* </HStack> */}
                {/* <HStack height={20}
                        // bgColor="blue.100"
                        display={{ sm: 'flex' }}
                        flex={1}
                        justifyContent='space-evenly'
                        mt={3}
                    >
                        <Input
                            placeholder=' Password'
                            rounded="4"
                            boxShadow='outline'
                            m="3%"
                            height={8}
                        />
                        <Input
                            placeholder=' Re-Type Password'
                            size='sm'
                            rounded="4"
                            boxShadow='outline'
                            m="3%"
                            height={8}

                        />
                    </HStack> */}
                {/* </Stack> */}

                {/* <Text>Policy # / Prev #</Text>
                    <Text>Named Issured</Text>
                    <Text>Team</Text>
                    <Text>Effective</Text>
                    <Text>Expiration</Text>
                    <Text>Status    </Text> */}
                {/* <HStack   mt={20} alignContent="center" justifyContent="center"> */}
                <VStack mt={10} >
                    <Button colorScheme='teal' w={40}> <ArrowRightIcon />  <ArrowRightIcon /></Button>
                </VStack>
                {/* </HStack> */}
            </Box>
            {/* </Flex> */}

        </Container>
    )
}
