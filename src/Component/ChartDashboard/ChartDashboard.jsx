import { Box, Button, Flex, Heading, Image, Text, useMediaQuery } from "@chakra-ui/react";
import Goals from "./Goals";
import Monitor from "./Monitor";
import { useState, useEffect } from "react";
import edit from '../../assets/images/edit.png'
import medium from '../../assets/images/medium.png'


function ChartDashboard() {
    const [isLessThan780] = useMediaQuery("(max-width: 780px)");
    const [flexDirection, setFlexDirection] = useState("row");
    const [flexWidth, setFlexWudth] = useState('20vw');
    const [isLessThan500] = useMediaQuery("(max-width: 500px)");

    useEffect(() => {
        if (isLessThan780) {
            setFlexDirection("column");

        } else {
            setFlexDirection("row");

        }
    }, [isLessThan780]);

    useEffect(() => {
        if (isLessThan500) {
            setFlexWudth("70vw")
        } else {
            setFlexWudth("20vw")

        }
    }, [isLessThan500]);

    return (
        <>
            {/* dasbord sssion  */}
            <Flex flexDirection={flexDirection} justifyContent="space-around" alignItems="center">
                <Box h='100%' w='50vw'> <Monitor /></Box>

                <Button
                    size='md'
                    height='40px'
                    width='150px'
                    border='2px'
                    borderRadius='5px'
                    color='white' backgroundColor='#131B47'
                    alignSelf='center'
                    fontSize='24px'
                >
                    Invest
                </Button>

                {/* Investor Details */}

                <Flex w={flexWidth} flexDirection='column' h='100%' mt='10px' bg={"yellow"}>

                    <Flex flexDirection='column' justifyContent='space-between' bg="#ccd5de " borderRadius='10px'>
                        <Text
                            border='1px solid grey'
                            borderRadius='10px'
                            fontSize='18px'
                            fontWeight='bold'
                            mt={0}
                            bg='white'
                        >Investor Details
                        </Text>
                        <Box >
                            <Text mt={0} mb={0}>Name </Text>
                            <Heading as="h4" mt={0} mb={0}> John Smith</Heading>
                            <Text mt={0} mb={0}>Gender </Text>
                            <Heading as="h4" mt={0} mb={0}> Male </Heading>
                            <Text mt={0} mb={0}>PAN </Text>
                            <Heading as="h4" mt={0} mb={0}> AUSPD2227N </Heading>
                            <Text mt={0} mb={0}>Date of birth </Text>
                            <Heading as="h4" mt={0} mb={0}>05-5-1977 </Heading>
                            <Text mt={0} mb={0}>Investor Type</Text>
                            <Heading as="h4" mt={0} mb={0}> Single</Heading>
                        </Box>

                        <Flex justifyContent='flex-end' p='5px'>
                            <Image boxSize='20px' objectFit='cover' src={edit} alt='edit' textAlign='right' />
                        </Flex>
                    </Flex>




                </Flex>

            </Flex>


            {/* Goals session */}
            <Flex flexDirection={flexDirection} justifyContent="space-between" alignItems="center">
                <Box h='100%' w='50vw' alignSelf='flex-start'>
                    <Goals />

                </Box>
                <Box w={flexWidth}>
                    <Image w='100%' objectFit='cover' src={medium} alt='medium' textAlign='right' />
                    <Heading as="h2" mt={0} mb={0}>Medium </Heading>
                    <Flex justifyContent='flex-end' p='5px'>
                        <Image boxSize='20px' objectFit='cover' src={edit} alt='edit' textAlign='right' />
                    </Flex>
                </Box>
            </Flex>


        </>
    );
}
export default ChartDashboard 