import { Container, Text, Link, Card, SimpleGrid, WrapItem, CardFooter, VStack, CardBody, Button, Image, Input, HStack, Heading, Box, Wrap, CardHeader } from '@chakra-ui/react';

import React, { useEffect, useRef, useState } from 'react'
import { flushSync } from "react-dom";
import { ArrowRightIcon } from "@chakra-ui/icons";
import Pngwing from '../../assets/Pngwing.png';
import pen from '../../assets/pen.png';


export default function Question({ question, totalQuestions, currentQuestion, setAnswer }) {

    let [selectOption, setSelectOption] = useState(null)
    const timer = useRef()
    const progressBar = useRef()


    console.log(question);
    console.log(totalQuestions);
    console.log(currentQuestion);
    console.log(selectOption,"selectOption");
    // console.log(setAnswer);

    function gotoQuestionNext() {
        if (timer.current) {
            clearTimeout(timer.current)
        }

        flushSync(() => {
            setAnswer(selectOption)
        })
        setSelectOption(null)
    }

    // useEffect(() => {
    //     progressBar.current.classList.remove("active")
    //     setTimeout(() => {
    //         progressBar.current.classList.add("active")
    //     }, 0)
    //     timer.current = setTimeout(gotoQuestionNext, 10 * 1000) //10 Second
    //     return gotoQuestionNext
    // }, [question])


    return (
        <div>
            <Container
                // maxW="container"
                // p='2'
                rounded='lg'
            >
    
                <Box
                    boxShadow="2xl"
                    rounded="md"
                    padding='5%'
                    backgroundColor='#A7B3C2'
                    >
                    <Wrap
                        // spacing='30px'
                        align='center' justify='center'
                        p={4}
                        >
                        <WrapItem>
                            <Card
                                backgroundColor="white"
                                borderRadius={20}
                                boxShadow='xl'
                                direction="column"
                                
                                // h="100%"
                                // w="100%"
                                >
                                {/* <Text>   Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, beatae voluptatum. </Text> */}
                                <CardBody>
                                    <Box p={4} display={{ md: 'flex' }} 
                                     backgroundColor="#DBDCDE"
                                     color='#084877'
                                     fontWeight="bold">
                                        {/* <Box flexShrink={0}>
                                            <Image
                                                borderRadius='lg'
                                                width={{ md: 40 }}
                                                src='https://bit.ly/2jYM25F'
                                                alt='Woman paying for a purchase'
                                            />
                                        </Box> */}
                                        <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
                                            <Text
                                                fontWeight='bold'
                                                textTransform='uppercase'
                                                fontSize='sm'
                                                letterSpacing='wide'
                                                color='teal.600'
                                            >
                                                {currentQuestion} {question.Description}
                                            </Text>
                                            <Link
                                                mt={1}
                                                display='block'
                                                fontSize='lg'
                                                lineHeight='normal'
                                                fontWeight='semibold'
                                                href='#'
                                            >
                                                {currentQuestion} {question.Description}
                                            </Link>
                                            {/* <Text mt={2} color='gray.500'>
                                                {currentQuestion} {question.Description}
                                            </Text> */}
                                        </Box>
                                    </Box>
                                    <hr />
                                    {/* <Heading borderTopRadius={20}
                                        p={2}
                                        backgroundColor="#DBDCDE"
                                        color='#084877'
                                        fontWeight="bold"
                                    >
                                        <Text fontWeight="bold" w={80}>{currentQuestion} {question.Description}</Text>
                                    </Heading> */}
                                    <SimpleGrid
                                        justifyItems="center"
                                        columns={2}
                                        minChildWidth='220px'
                                        maxW="600px"
                                        w="100vw"
                                        spacing='20px'
                                        minH={300}
                                        alignItems="center"
                                        justifyContent="center"
                                        p={5}
                                    >

                                        {/* <br /> */}
                                        {question.Options.map((options, i) => {

                                            console.log(options, "raza");
                                            return (
                                                <Button
                                                    key={i}
                                                    onClick={() => setSelectOption(i)}
                                                    bg="#084877"
                                                    color="whiteSmoke"
                                                    border='none'
                                                    borderRadius="20px"
                                                    boxShadow="inset -5px -5px 12px #FFFFFF"
                                                    fontSize="lg"
                                                    _hover={{ bg: "grey" }}
                                                    size='lg'
                                                    height='48px'
                                                    minW='220px'
                                                    // p={5}
                                                    // maxW='20px'
                                                    alignItems="center"
                                                    justifyContent="center"

                                                >
                                                    {options.Quizlable}
                                                </Button>
                                            )
                                        })}
                                    </SimpleGrid>

                                    {/* <VStack>

                                    </VStack> */}
                                </CardBody>
                                {/* <VStack m={2} align='center' justify='center'>
                                </VStack> */}
                                <CardFooter
                                    align='center' justify='center' p={5}>
                                    <Button colorScheme='teal' w={40} onClick={gotoQuestionNext}> <ArrowRightIcon />  <ArrowRightIcon /></Button>
                                </CardFooter>
                            </Card>
                        </WrapItem>
                        {/* <Image src={Pngwing} w='180px' h='200px' /> */}
                    </Wrap>
                </Box>
            </Container>
        </div>
    )
}


