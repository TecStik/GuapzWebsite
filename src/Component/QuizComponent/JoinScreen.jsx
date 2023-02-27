import React from 'react'
import { Container, Text, Button, Heading } from '@chakra-ui/react'

export default function JoinScreen({ Start }) {
    return (
        <div>
            <Container
                maxW="container"
                p='10' width="" rounded='lg'
            >
                <Heading fontSize={34}>Join Quiz</Heading>
                    <Text>   Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, beatae voluptatum. </Text>
                    <Button onClick={Start}>Start</Button>
            </Container>
        </div>
    )
}
