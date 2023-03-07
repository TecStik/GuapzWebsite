import { useState, useEffect } from "react";
import { Flex, Box, Heading, Text, useMediaQuery, Image } from "@chakra-ui/react";
import PieChart from "./PieChart";
import arrow from '../../assets/images/arrow.png';


const Monitor = () => {

    const [isLessThan500] = useMediaQuery("(max-width: 500px)");

    const [flexDirection, setFlexDirection] = useState("row");
    const [boxWidth, setBoxWidth] = useState("180px")

    useEffect(() => {
        if (isLessThan500) {
            setFlexDirection("column");
            setBoxWidth("90%");
        } else {
            setFlexDirection("row");
            setBoxWidth("150px");

        }
    }, [isLessThan500]);
    const growths = [`$8000`, `$4000`, `$2000`, `$1000`, `$0`];
    const funds = ['Large Cap Funds', 'Diversified Funds', 'Large Cap Funds']
    return (
        <>
            <Flex color="white" wrap="wrap" flexDirection={flexDirection}  justifyContent="space-around" alignItems="center"
            >
                <Box
                    color="black"
                    w={boxWidth}
                    pt={isLessThan500 ? 2 : 10}
                    textAlign="center" >
                    <Heading as="h1" size="4xl">
                        Dashboard
                    </Heading>
                    <Text>Your Investment </Text>
                    <Heading as="h2" size="4xl">
                        $7000
                    </Heading>
                </Box>
                <Box
                    color="black"
                    w={boxWidth}
                    pt={isLessThan500 ? 4 : 81}
                    textAlign="center" >
                    <Text>Your Investment </Text>
                    <Heading as="h2" color="#084877" size="4xl">
                        $8241
                    </Heading>
                </Box>
                <Box
                    color="black"
                    w={boxWidth}
                    pt={isLessThan500 ? 6 : 81}
                    textAlign="center"
                >
                    <Text>ROI </Text>
                    <Heading as="h2" color="#084877" size="4xl">
                        +20.2%
                    </Heading>
                </Box>
            </Flex>


            {/* // chart session        */}

            <Flex color="white" wrap="wrap" flexDirection={flexDirection} justifyContent="space-around" alignItems="center">
                <Box
                    color="black"
                    w={boxWidth}
                    pt={isLessThan500 ? 2 : 10}
                    textAlign="center"
                >
                    <Heading as="h4" size="4xl">
                        Investment Growth
                    </Heading>
                    <Flex justifyContent='center'>
                        <Flex flexDirection='column'>
                            {growths.map((item, index) => {
                                return <Text fontSize='10px' key={index}>{item}</Text>

                            })}</Flex>
                        <Image boxSize='150px' objectFit='cover' src={arrow} alt='arrow-up' />
                    </Flex>
                </Box>
                <Box
                    color="black"
                    w={boxWidth}
                    textAlign="center"
                >
                    <Heading as="h4" size="4xl">
                        Your Portfolio
                    </Heading>
                    <PieChart height="100px" />
                </Box>
                <Box
                    color="black"
                    fontSize='12px'
                    w={boxWidth}
                    pt={isLessThan500 ? 6 : 71}
                    textAlign={isLessThan500 ? 'center' : "left"}
                >
                    {funds.map((item, index) => {
                        return <Text _before={{

                            content: '""',
                            display: "inline-block",
                            marginRight: "0.5rem",
                            width: "0.5rem",
                            height: "0.5rem",
                            backgroundColor: "#084877",
                            borderRadius: "50%",
                        }}
                            key={index}>{item}</Text>

                    }

                    )}

                </Box>
            </Flex>

        </>
    )
}

export default Monitor