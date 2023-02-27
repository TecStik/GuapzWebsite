import { Container } from '@chakra-ui/react';
import React, { useState } from 'react'

import QuestionList from './QuestionList.json';
import QuizResult from './QuizResult.jsx'
import Question from './Question.jsx';
import Dashboard from '../Dashboard/Dashboard';


export default function QuizScreen() {

    let [currentQuestionIndex, setCurrentQuistionIndex] = useState(0)
    let [marketAnswers, setMarkedAnswer] = useState(new Array(QuestionList.length))
    let isQuestion = currentQuestionIndex === QuestionList.length


    return (
        <div>
            <Container
                maxW="container"
                p='10' width="" rounded='lg'
            >
                {
                    isQuestion ? (
                        // <QuizResult />
                        <Dashboard />

                    ) : (
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
                        />
                    )
                }
            </Container>
        </div>
    )
}
