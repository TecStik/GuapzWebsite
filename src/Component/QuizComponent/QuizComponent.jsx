import { Container } from '@chakra-ui/react';
import React, { useState } from 'react';
import JoinScreen from './JoinScreen';
import QuizScreen from './QuizScreen';


export default function QuizComponent() {

    let [isQuizStarted, setisQuizStarted] = useState(false)
    return (
        <div>
            <Container>
                {isQuizStarted ? (
                    <QuizScreen retry={() => setisQuizStarted(false)} />
                ) : (
                    <JoinScreen Start={() => setisQuizStarted(true)} />
                )}
            </Container>
        </div>
    )
}
