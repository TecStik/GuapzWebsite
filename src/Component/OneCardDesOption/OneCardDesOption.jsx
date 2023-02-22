import React from 'react'
import ChandePass from '../../assets/ChandePass.png'
import {
    Box, Stack, Wrap, Spacer, useRadioGroup, WrapItem, useRadio, GridItem, Heading, Flex, Text, View, FormLabel, Input, Button, FormControl, Image, HStack, CardHeader, Card, CardBody, CardFooter, Container, VStack
} from "@chakra-ui/react";
import { HamburgerIcon, ArrowRightIcon, AddIcon, WarningIcon } from "@chakra-ui/icons";



function RadioCard(props) {
    const { getInputProps, getCheckboxProps } = useRadio(props)
    const input = getInputProps()
    const checkbox = getCheckboxProps()

    return (
        <Box as='label'>
            <input {...input} />

            <Box
                {...checkbox}
                cursor='pointer'
                borderWidth='1px'
                borderRadius='md'
                boxShadow='md'
                _checked={{
                    bg: 'teal.600',
                    color: 'white',
                    borderColor: 'teal.600',
                }}
                _focus={{
                    boxShadow: 'outline',
                }}
                px={5}
                py={3}
            // width="140%"
            >
                {props.children}
            </Box>
        </Box>
    )
}

export default function OneCardDesOption() {

    const options = ['Health with ', 'Health withOut Insurance', 'Health  Insurance', 'Health Insurance', 'loerm sperum in work flow', 'loerm sperm']
    const { getRootProps, getRadioProps } = useRadioGroup({
        name: 'framework',
        defaultValue: 'react',
        onChange: console.log,
    })
    const group = getRootProps()

    return (

        <Container maxW="container" p='10' rounded='lg'>
            <Box
                boxShadow="2xl"
                rounded="md"
                padding='5%'
                backgroundColor='#A7B3C2'
            >
                <Wrap spacing='30px'
                    align='center' justify='center'
                >
                    <WrapItem>
                        <Card
                            backgroundColor="white"
                            // height={80}
                            borderRadius={20}
                            boxShadow='xl'
                        // width={290}
                        >
                            <CardHeader >
                                <Heading
                                    borderTopRadius={20} p={2}

                                    backgroundColor="#084877" height={20}
                                    color='white' textAlign="center" fontSize={25}
                                    fontWeight="bold"><b>1/5:</b> How familiar are you with investing into stock market ?</Heading>
                            </CardHeader>
                            <CardBody
                                alignItems="center"
                                justifyContent="center">

                                <VStack {...group}>
                                    <Wrap
                                        // bgColor="blue.100"
                                        display={{ sm: 'flex' }}
                                        flex={1}
                                        alignItems="center"
                                        justifyContent="center"
                                        mt={12}
                                    >

                                        {options.map((value) => {
                                            const radio = getRadioProps({ value })
                                            return (
                                                <VStack>
                                                    <WrapItem
                                                        // bgColor="blue.100"
                                                        display={{ sm: 'flex' }}
                                                        flex={1}
                                                    // alignItems="center"
                                                    // justifyContent="center"
                                                    >
                                                        <RadioCard key={value} {...radio} >
                                                            {value}
                                                        </RadioCard>
                                                        <Flex>
                                                            <Box p='4' bg='red.400'>
                                                                Box 1
                                                            </Box>
                                                            <Spacer />
                                                            <Box p='4' bg='green.400'>
                                                                Box 2
                                                            </Box>
                                                        </Flex>
                                                    </WrapItem>
                                                </VStack>
                                            )
                                        })}

                                    </Wrap>
                                </VStack>
                                <VStack m={12} align='center' justify='center'>
                                    <Button colorScheme='teal' w={40}> <ArrowRightIcon />  <ArrowRightIcon /></Button>
                                </VStack>
                            </CardBody>
                            {/* <CardFooter>
                                <Button backgroundColor="blue.100">View here</Button>
                            </CardFooter> */}
                        </Card>
                    </WrapItem>
                    {/* <WrapItem>
                        <Card
                            // backgroundColor="gray.100"
                            height={60}
                            // borderRadius={20}
                            boxShadow='xl'
                            h='170px'
                            p={2}
                        >
                            <CardHeader >
                                <Heading borderTopRadius={20} size='md' backgroundColor="#084877" height={20} color='white' textAlign="center" fontSize={25} fontWeight="bold">Goals Base Tnvestment</Heading>
                            </CardHeader>
                            <CardBody  >
                                <Image src={ChandePass} w='190px' h='170px' />
                            </CardBody>
                            <CardFooter>
                                <Button backgroundColor="blue.100">View here</Button>
                            </CardFooter>
                        </Card>
                    </WrapItem> */}
                </Wrap>
                <VStack mt={10} >
                    {/* <Button colorScheme='teal' w={40}> <ArrowRightIcon />  <ArrowRightIcon /></Button> */}
                </VStack>
            </Box>
        </Container>
    )
}
