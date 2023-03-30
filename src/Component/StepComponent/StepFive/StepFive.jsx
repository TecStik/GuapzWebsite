import React, { useState, useContext, useEffect } from "react";
import {
    Box, Button, Container, VStack
} from "@chakra-ui/react";
import SliderCom from "./SliderCom/SliderCom";
import InvestCom from "./InvestCom/InvestCom";


export default function StepFive() {

    const [isLoading, setIsLoading] = useState(false)
    const [isComponent, setisComponent] = useState("Adjust ment")
    const buttonHandler = () => {
        if (isLoading === false) {
            console.log(isLoading, isComponent) // is false 
            setisComponent("Finsh")
            setIsLoading(true)
        } else {
            // setIsLoading(false)
            // setisComponent("Adjust ment")
            console.log(isLoading, isComponent) // is false 
            if (isComponent === "Finsh") {
                alert("Beast of luck")
            }
        }
    }
    // useEffect(() => {
    //     isComponent ? console.log(isLoading) : setisComponent("Finst")
    // }, [isLoading])
    return (

        <Container maxW="container" p='10' rounded='lg'>
            <Box boxShadow="2xl" rounded="md" padding='2%' backgroundColor='#CFD9E8' justifyItems="center" alignItems="center">
                {isComponent === "Finsh" ? <SliderCom /> : <InvestCom />}
                {/* <InvestCom /> */}
                {/* <SliderCom /> */}
                <VStack alignItems="flex-end" mt={10}><Button onClick={buttonHandler}>{isComponent}</Button></VStack>
            </Box>
        </Container>
    )
}
