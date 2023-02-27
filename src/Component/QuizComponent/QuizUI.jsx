import React from 'react'
import ChandePass from '../../assets/ChandePass.png'
import {
    Box, Stack, Wrap, RadioGroup, WrapItem, GridItem, Heading, Flex, Text, View, FormLabel, Input, Button, FormControl, Image, HStack, CardHeader, Card, CardBody, CardFooter, Container, VStack
} from "@chakra-ui/react";
import { HamburgerIcon, ArrowRightIcon, AddIcon, WarningIcon } from "@chakra-ui/icons";



const CustomRadio = React.forwardRef((props, ref) => {
    const { isChecked, isDisabled, value, ...rest } = props;
    return (
        <Button
            ref={ref}
            variantColor={isChecked ? "red" : "gray"}
            aria-checked={isChecked}
            role="radio"
            isDisabled={isDisabled}
            {...rest}
        />
    );
});
export default function QuizUI() {



    return (

        <Container maxW="container" p='10' width="" rounded='lg'>
            <Box
                boxShadow="2xl"
                minHeight="70vh"
                rounded="md"
                paddingTop='10%'
                backgroundColor='#A7B3C2'
            >

                <Wrap spacing='30px'
                    align='center' justify='center'
                >
                    <WrapItem>
                        <Card
                            backgroundColor="white"
                            height={80}
                            borderRadius={20}
                            boxShadow='xl'
                            width=""
                        >
                            <CardHeader >
                                <Heading
                                    borderTopRadius={20} p={2}
                                    backgroundColor="#084877" height={20}
                                    color='white' textAlign="center" fontSize={25}
                                    fontWeight="bold">Please Specify Payment frequency</Heading>
                            </CardHeader>
                            <CardBody
                                alignItems="center"
                                justifyContent="center">

                                <HStack height={20}
                                    // bgColor="blue.100"
                                    display={{ sm: 'flex' }}
                                    flex={1}
                                    alignItems="center"
                                    justifyContent="center"
                                    mt={3}
                                >
                                    <RadioGroup
                                        defaultValue="rad2"
                                        onChange={val => console.log(val)}
                                        isInline
                                    >
                                        <CustomRadio value="rad1">CustomRadio 1</CustomRadio>
                                        <CustomRadio value="rad2">CustomRadio 2</CustomRadio>
                                        <CustomRadio value="rad3">CustomRadio 3</CustomRadio>
                                        {/* This child will be skipped in keyboard navigation */}
                                    </RadioGroup>
                                </HStack>
                                <HStack height={20}
                                    // bgColor="blue.100"
                                    display={{ sm: 'flex' }}
                                    flex={1}
                                    alignItems="center"
                                    justifyContent="center"
                                    m={3}
                                    p={3}
                                >
                                    <Input
                                        placeholder='Semi annual'
                                        rounded="4"
                                        boxShadow='outline'
                                        m="3%"
                                        height={8}
                                    />
                                    <Input
                                        placeholder='Annual'
                                        size='sm'
                                        rounded="4"
                                        boxShadow='outline'
                                        // m="3%"
                                        height={8}
                                    />
                                </HStack>

                            </CardBody>
                            <CardFooter>
                                {/* <Button backgroundColor="blue.100">View here</Button> */}
                            </CardFooter>
                        </Card>
                    </WrapItem>

                </Wrap>
                <VStack mt={10} >
                    <Button colorScheme='teal' w={40}> <ArrowRightIcon />  <ArrowRightIcon /></Button>
                </VStack>
            </Box>
        </Container>
    )
}
