import React from 'react'

import {
    Box, Stack, Heading, Flex, Text, View, FormLabel, Input, Button, FormControl, Image, HStack, CardHeader, Card, CardBody, CardFooter, Container, VStack
} from "@chakra-ui/react";
import { HamburgerIcon, ArrowRightIcon, AddIcon, WarningIcon } from "@chakra-ui/icons";
import { Link } from 'react-router-dom';

export default function CardPages() {
    return (

        <Container
        //  maxW="container" marginLeft="15%" p='10' width="" rounded='lg'
        //     boxShadow='md'
        // maxWidth='xl'
        // justifyContent="center"
        // textAlign='center'
        // columns={{ sm: 2, md: 4 }}
        // backgroundColor='red.100'
        // spacing='8'
        // backgroundColor='#F6F6F6'
        // backgroundColor='yellow'
        // mt='4%'

        >
            <Flex
                // width='auto'
                rounded='md'
                boxShadow='md'
                // maxWidth='xl'
                justifyContent="center"
            // textAlign='center'
            >
                <Box
                    boxShadow="2xl"
                    width="90%"
                    height="70vh"
                    rounded="md"
                    mt="7"
                    mb='7'
                    maxW='xl'
                    backgroundColor='#F6F6F6'
                    color='black.100'
                    justifyContent="center"
                >
                    <VStack color="black"><Heading fontSize={30} m="3%" fontWeight="bold">User Rigistration</Heading> </VStack>
                    <HStack height={20}
                        // bgColor="blue.100"
                        display={{ sm: 'flex' }}
                        flex={1}
                        justifyContent='space-evenly'
                    >
                        <Input
                            placeholder=' Name'
                            rounded="4"
                            boxShadow='outline'
                            m="3%"
                            height={8}
                        />
                        <Input
                            placeholder=' Email/User ID'
                            size='sm'
                            rounded="4"
                            boxShadow='outline'
                            m="3%"
                            height={8}
                        />
                    </HStack>

                    <HStack height={20}
                        // bgColor="blue.100"
                        display={{ sm: 'flex' }}
                        flex={1}
                        justifyContent='space-evenly'
                        mt={3}

                    >
                        <Input
                            placeholder=' Cell No.'
                            rounded="4"
                            boxShadow='outline'
                            m="3%"
                            height={8}
                        />
                        <Input
                            placeholder='Date Of Birth'
                            size='sm'
                            rounded="4"
                            boxShadow='outline'
                            m="3%"
                            height={8}
                        />
                    </HStack>
                    <HStack height={20}
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
                    </HStack>
                    {/* </Stack> */}

                    {/* <Text>Policy # / Prev #</Text>
                    <Text>Named Issured</Text>
                    <Text>Team</Text>
                    <Text>Effective</Text>
                    <Text>Expiration</Text>
                    <Text>Status    </Text> */}
                    {/* <HStack   mt={20} alignContent="center" justifyContent="center"> */}
                    <VStack mt={10} >
                        <Button colorScheme='teal' w={40}>
                            <Link to="/login">
                                <ArrowRightIcon />  <ArrowRightIcon />
                            </Link>
                        </Button>
                    </VStack>
                    {/* </HStack> */}
                </Box>
            </Flex>

        </Container>
    )
}
