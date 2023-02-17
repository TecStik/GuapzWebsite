import React from 'react'

import {
    Box, Stack, Wrap, Grid, Center, WrapItem, SimpleGrid, GridItem, Heading, Flex, Text, View, FormLabel, Input, Button, FormControl, Image, HStack, CardHeader, Card, CardBody, CardFooter, Container, VStack
} from "@chakra-ui/react";
import { HamburgerIcon, ArrowRightIcon, AddIcon, WarningIcon } from "@chakra-ui/icons";
export default function Portfolio() {
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
                paddingTop='10%'
                // m={10}
                // maxW='xl'
                // backgroundColor='#F6F6F6'
                backgroundColor='#A7B3C2'
                // alignItems="center"
                // color='black.100'
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


                <Wrap spacing='30px' align='center' justify='center'>
                    <WrapItem>
                        <Card
                            backgroundColor="gray.100"
                            height={60}
                            borderRadius={20}
                            boxShadow='xl'
                        >
                            <CardHeader >
                                <Heading borderTopRadius={20} size='md' backgroundColor="#084877" height={20} color='white' textAlign="center" fontSize={25} fontWeight="bold">Thematic Porfolio</Heading>
                            </CardHeader>
                            <CardBody>
                                <Text>View a summary of all your customers over the last month.</Text>
                            </CardBody>
                            <CardFooter>
                                <Button backgroundColor="blue.100">View here</Button>
                            </CardFooter>
                        </Card>
                    </WrapItem>
                    <WrapItem>
                        <Card backgroundColor="gray.100"
                            height={60}
                            borderRadius={20}
                            boxShadow='xl'
                        >
                            <CardHeader >
                                <Heading borderTopRadius={20} size='md' backgroundColor="#084877" height={20} color='white' textAlign="center" fontSize={25} fontWeight="bold">Goals Base Tnvestment</Heading>
                            </CardHeader>
                            <CardBody>
                                <Text>View a summary of all your customers over the last month.</Text>
                            </CardBody>
                            <CardFooter>
                                <Button backgroundColor="blue.100">View here</Button>
                            </CardFooter>
                        </Card>
                    </WrapItem>
                </Wrap>

                {/* <Wrap spacing='30px' align='center' justify='center' mt={10} >
                    <WrapItem>
                        <Center w='180px' h='80px' bg='red.200'>
                            Box 1
                        </Center>
                    </WrapItem>


                </Wrap> */}
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

                <VStack mt={10} >
                    <Button colorScheme='teal' w={40}> <ArrowRightIcon />  <ArrowRightIcon /></Button>
                </VStack>
                {/* </HStack> */}
            </Box>
            {/* </Flex> */}

        </Container>
    )
}
