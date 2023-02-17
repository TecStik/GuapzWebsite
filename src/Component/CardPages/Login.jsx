import React, { useState } from 'react'

import {
    Box, Stack, Heading, Flex, Text, View, FormLabel, Input, Button, FormControl, Image, HStack, CardHeader, Card, CardBody, CardFooter, Container, VStack,

    chakra,
    FormHelperText,
    InputGroup,
    InputLeftElement,
    InputRightElement
} from "@chakra-ui/react";
import { HamburgerIcon, ArrowRightIcon, AddIcon, WarningIcon } from "@chakra-ui/icons";
import { Link } from 'react-router-dom';
import { FaUserAlt, FaLock } from "react-icons/fa";


const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

export default function Login() {

    const [showPassword, setShowPassword] = useState(false);
    const handleShowClick = () => setShowPassword(!showPassword);

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
                // boxShadow='md'
                // maxWidth='xl'
                justifyContent="center"
            // textAlign='center'
            >
                {/* <Box minW={{ base: "90%", md: "468px" }}>
          <form>
            <Stack
              spacing={4}
              p="1rem"
              backgroundColor="whiteAlpha.900"
              boxShadow="md"
            >
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<CFaUserAlt color="gray.300" />}
                  />
                  <Input type="email" placeholder="email address" />
                </InputGroup>
              </FormControl>
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    color="gray.300"
                    children={<CFaLock color="gray.300" />}
                  />
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                  />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                      {showPassword ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <FormHelperText textAlign="right">
                  <Link>forgot password?</Link>
                </FormHelperText>
              </FormControl>
              <Button
                borderRadius={0}
                type="submit"
                variant="solid"
                colorScheme="teal"
                width="full"
              >
                Login
              </Button>
            </Stack>
          </form>
        </Box> */}
                <Box
                    boxShadow="2xl"
                    width="90%"
                    height="50vh"
                    rounded="md"
                    mt="16"
                    mb='7'
                    maxW='xl'
                    backgroundColor='#F6F6F6'
                    color='black.100'
                    justifyContent="center"
                    alignItems='center'
                >
                    <VStack color="black"><Heading fontSize={30} m="3%" fontWeight="bold">User Login</Heading> </VStack>
                    <VStack height={20}
                    // bgColor="blue.100"
                    // display={{ sm: 'flex' }}
                    // flex={1}
                    // justifyContent='center'
                    // width={8}                    
                    >



                        <FormControl
                            justifyContent='center'
                            width={290}
                            //   backgroundColor="red.100"  
                            alignItems="center"
                            mt={30}
                        //   m={10}
                        >

                            <InputGroup>
                                <InputLeftElement
                                    pointerEvents="none"
                                    children={<CFaUserAlt color="gray.300" />}
                                    m="6%"
                                />
                                <Input
                                    placeholder=' Email/User ID'
                                    // size='md'
                                    rounded="4"
                                    boxShadow='outline'
                                    m="3%"
                                    width={290}
                                    height={8}
                                />
                            </InputGroup>
                            <InputGroup>
                                <InputLeftElement
                                    pointerEvents="none"
                                    color="gray.300"
                                    children={<CFaLock color="gray.300" />}
                                    m="6%"
                                />
                                <Input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Password"
                                    size='sm'
                                    rounded="4"
                                    boxShadow='outline'
                                    m="3%"
                                    height={8}
                                    width={290}
                                // marginLeft="12%"
                                />
                                <InputRightElement width="4.5rem" m="3%">
                                    <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                                        {showPassword ? "Hide" : "Show"}
                                    </Button>
                                </InputRightElement>
                            </InputGroup>
                            <FormHelperText textAlign="right">
                                <Link>forgot password?</Link>
                            </FormHelperText>
                        </FormControl>


                        {/* <FormControl>
                            <InputGroup>
                                <InputLeftElement
                                    pointerEvents="none"
                                    children={<CFaUserAlt color="gray.300" />}
                                />
                                <Input type="email" placeholder="email address" />
                            </InputGroup>
                        </FormControl> */}

                    </VStack>

                    {/* <FormControl>
                                <InputGroup>
                                    <InputLeftElement
                                        pointerEvents="none"
                                        children={<CFaUserAlt color="gray.300" />}
                                    />
                                    <Input type="email" placeholder="email address" />
                                </InputGroup>
                            </FormControl>
                            <FormControl>
                                <InputGroup>
                                    <InputLeftElement
                                        pointerEvents="none"
                                        color="gray.300"
                                        children={<CFaLock color="gray.300" />}
                                    />
                                    <Input
                                        type={showPassword ? "text" : "password"}
                                        placeholder="Password"
                                    />
                                    <InputRightElement width="4.5rem">
                                        <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                                            {showPassword ? "Hide" : "Show"}
                                        </Button>
                                    </InputRightElement>
                                </InputGroup>
                                <FormHelperText textAlign="right">
                                    <Link>forgot password?</Link>
                                </FormHelperText>
                            </FormControl> */}
                    {/* <Button
                                borderRadius={0}
                                type="submit"
                                variant="solid"
                                colorScheme="teal"
                                width="full"
                            >
                                Login
                            </Button> */}

                    {/* </Stack> */}

                    {/* <Text>Policy # / Prev #</Text>
                    <Text>Named Issured</Text>
                    <Text>Team</Text>
                    <Text>Effective</Text>
                    <Text>Expiration</Text>
                    <Text>Status    </Text> */}
                    {/* <HStack   mt={20} alignContent="center" justifyContent="center"> */}
                    <VStack mt={20} >

                        <Button colorScheme='teal' w={40}>
                            <Link to="/dashboard">
                                <ArrowRightIcon /><ArrowRightIcon />
                            </Link>
                        </Button>
                    </VStack>
                    {/* </HStack> */}
                </Box>
            </Flex>

        </Container>
    )
}
