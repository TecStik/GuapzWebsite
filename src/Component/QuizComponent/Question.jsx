import React, { useEffect, useRef, useState } from 'react'
import { Container, Text, Link, Card, SimpleGrid, WrapItem, CardFooter, VStack, CardBody, Button, Box, Wrap, CardHeader } from '@chakra-ui/react';
import { flushSync } from "react-dom";
import { ArrowRightIcon, ArrowLeftIcon } from "@chakra-ui/icons";


export default function Question({ question, totalQuestions, currentQuestion, setAnswer, setPreAnswer }) {

    let [selectOption, setSelectOption] = useState(null)

    console.log(question);
    console.log(totalQuestions);
    console.log(currentQuestion);
    console.log(selectOption, "selectOption");
    // console.log(setAnswer);

<<<<<<< Updated upstream
    function gotoQuestionNext() {
=======




    let riskresponse = {
        QId: question.QId,
        weightage: question.Weightage,
        option: selectOption

    }
    console.log("Selected Option",selectOption);

    function gotoQuestionNext() {
console.log("Selected Option",selectOption);
        let tempRisk = riskProfile;
        tempRisk.push(riskresponse);
        setRiskProfile(tempRisk);

        console.log(riskProfile, "set OPTION AND WEIGHT");
>>>>>>> Stashed changes

        flushSync(() => {
            setAnswer(selectOption)
        })
        setSelectOption(null)
    }
    function gotoPrevQuestion() {
        flushSync(() => {
            setPreAnswer(selectOption)
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
        <Container rounded='lg'>

            <Box boxShadow="2xl" rounded="md" padding='5%' backgroundColor='#A7B3C2'>
                <Wrap align='center' justify='center' p={4}>
                    <WrapItem>
                        <Card backgroundColor="white" borderRadius={20} boxShadow='xl' direction="column" >
                            <CardBody>
                                <Box p={4} display={{ md: 'flex' }} backgroundColor="#DBDCDE" color='#084877' fontWeight="bold">

                                    <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>

                                        <Text fontWeight='bold' textTransform='uppercase' fontSize='sm'
                                            letterSpacing='wide' color='teal.600'>
                                            {currentQuestion} {question.Description}
                                        </Text>

                                        <Link mt={1} display='block' fontSize='lg' lineHeight='normal'
                                            fontWeight='semibold' href='#'>
                                            {currentQuestion} {question.Description}
                                        </Link>
                                    </Box>
                                </Box>
                                <hr />
                                <SimpleGrid
                                    justifyItems="center" columns={2} minChildWidth='220px'
                                    maxW="600px" w="100vw" spacing='20px' minH={300}
                                    alignItems="center" justifyContent="center" p={5}
                                >

                                    {question.Options.map((options, i) => {

<<<<<<< Updated upstream
                                        // console.log(options, "raza");
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
                                                _checked={{
                                                    bg: 'teal.600',
                                                    color: 'white',
                                                    borderColor: 'teal.600',
                                                }}
                                                _focus={{
                                                    boxShadow: 'outline',
                                                    background: "teal.600"
                                                }}
=======
                                            // console.log(options, "raza");
                                            return (
                                                <Button
                                                    key={i}
                                                    onClick={() => setSelectOption(options)}
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
                                                    _checked={{
                                                        bg: 'teal.600',
                                                        color: 'white',
                                                        borderColor: 'teal.600',
                                                    }}
                                                    _focus={{
                                                        boxShadow: 'outline',
                                                        background: "teal.600"
                                                    }}
>>>>>>> Stashed changes

                                            >
                                                {options.Quizlable}
                                            </Button>
                                        )
                                    })}
                                </SimpleGrid>
                            </CardBody>

                            <CardFooter justifyContent="space-evenly">
                                <Wrap mb={5}>
                                    <Button colorScheme='teal' w={40} onClick={gotoPrevQuestion}> <ArrowLeftIcon />  <ArrowLeftIcon /></Button>
                                    <Button colorScheme='teal' w={40} onClick={gotoQuestionNext}> <ArrowRightIcon />  <ArrowRightIcon /></Button>
                                </Wrap>
                            </CardFooter>
                        </Card>
                    </WrapItem>
                </Wrap>
            </Box>
        </Container>

    )
}


