import React, { useState, useContext, useEffect } from "react";
import {
    Box, Stack, Wrap, WrapItem, NumberDecrementStepper, Heading, Text, NumberInputField, NumberInput,
    Button, NumberIncrementStepper, NumberInputStepper, HStack, CardFooter, CardHeader, Card, CardBody, Container, VStack
} from "@chakra-ui/react";

import QuestionList from './QuestionList.json';
import QuizResult from './QuizResult.jsx'
import Question from './Question.jsx';
import Dashboard from '../Dashboard/Dashboard';
import StoreContext from "../../ContextAPI/ContextAPI";
import { ArrowRightIcon, ArrowLeftIcon } from "@chakra-ui/icons";

export default function QuizScreen() {

    let [currentQuestionIndex, setCurrentQuistionIndex] = useState(0)
    let [marketAnswers, setMarkedAnswer] = useState(new Array(QuestionList.length))
    // let [ShowAssisment, setShowAssisment] = useState(false)
    let isQuestion = currentQuestionIndex === QuestionList.length
    // console.log(currentQuestionIndex, "isQuestion", isQuestion);

    const ShowQuizDetail = useContext(StoreContext);
    const NextStepDetail = useContext(StoreContext);

    // console.log(marketAnswers, "marketAnswers===>");
    const [value, setValue] = React.useState(0)
    const handleChange = (value) => setValue(value)
    
    useEffect(() => {
        // console.log(ShowQuizDetail.ShowQuiz, "========>")
    }, [ShowQuizDetail])

    function HandleConform() {
        NextStepDetail.setNestedStep("moveIIIIndStep")
        ShowQuizDetail.setShowQuiz(true)
    }
    function HandleRetake() {
        NextStepDetail.setNestedStep("moveThirdStep")
        ShowQuizDetail.setShowQuiz(false)
        setCurrentQuistionIndex(0)
    }

    return (
        <div>
            <Container maxW="container" p='10' width="" rounded='lg'>
                {isQuestion || ShowQuizDetail.ShowQuiz === true ?
                    <>
                        <Box boxShadow="2xl" rounded="md" padding='5%' backgroundColor='#A7B3C2'>
                            <Wrap spacing='30px' align='center' justify='center'>
                                <WrapItem>
                                    <Card backgroundColor="white" borderRadius={20} boxShadow='xl'>

                                        <CardHeader>
                                            <Heading borderTopRadius={20} p={2} backgroundColor="#084877" height={20}
                                                color='white' textAlign="center" fontSize={25} fontWeight="bold"
                                            > Risk Assessment Result</Heading>
                                        </CardHeader>

                                        <CardBody alignItems="center" justifyContent="center">
                                            <VStack
                                                justifyContent="center" m={5} >
                                                <Text textAlign="center" fontSize={25} fontWeight="bold">Moderate</Text>
                                                <NumberInput maxW={52}
                                                    p="3%" value={value} rounded="4"
                                                    boxShadow='outline' onChange={handleChange}>
                                                    <NumberInputField />
                                                    <NumberInputStepper>
                                                        <NumberIncrementStepper />
                                                        <NumberDecrementStepper />
                                                    </NumberInputStepper>
                                                </NumberInput>
                                                <Text textAlign="center" fontSize={25} fontWeight="bold">
                                                    Out of 10 Can adjust upto 2 notches
                                                </Text>
                                            </VStack>
                                        </CardBody>
                                        <CardFooter justifyContent="space-around" >
                                            <Wrap mb={5}>
                                                <Button colorScheme='teal' w={40} onClick={HandleRetake}> <ArrowLeftIcon mr={2} />  Retake</Button>
                                                <Button colorScheme='teal' w={40} onClick={HandleConform}>Conform <ArrowRightIcon ml={2} /></Button>
                                            </Wrap>
                                        </CardFooter>
                                    </Card>
                                </WrapItem>
                            </Wrap>
                        </Box>
                    </> : <>
                        <Question
                            question={QuestionList[currentQuestionIndex]}
                            totalQuestions={QuestionList.length}
                            currentQuestion={currentQuestionIndex + 1}
                            setAnswer={(index) => {
                                setMarkedAnswer((arr) => {
                                    let newArr = [...arr]
                                    newArr[currentQuestionIndex] = index
                                    return newArr
                                })
                                setCurrentQuistionIndex(currentQuestionIndex + 1)
                            }}
                            setPreAnswer={(index) => {
                                setMarkedAnswer((arr) => {
                                    let newArr = [...arr]
                                    newArr[currentQuestionIndex] = index
                                    return newArr
                                })
                                setCurrentQuistionIndex(currentQuestionIndex - 1)
                            }}
                        />
                    </>
                }
            </Container>
        </div>
    )
}
