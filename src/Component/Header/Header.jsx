import React from "react";
import { Box, Stack, Heading, Flex, Text, Button, useDisclosure, Image, HStack, CardHeader, Card, CardBody, CardFooter } from "@chakra-ui/react";
import { HamburgerIcon, PhoneIcon, AddIcon, WarningIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import GuapZlogo from '../../assets/GuapZlogo.png'
import SignIn from "../CardPages/SignIn";
import Login from "../CardPages/Login";
import Dashboard from "../Dashboard/Dashboard";
import Portfolio from "../Poetfolio/Poetfolio";
import TwoCards from "../TwoCards/TwoCards";
import DashboardTwo from "../DashboardTwo/DashboardTwo";
import TwoCardOption from "../TwoCardFourOption/TwoCardFourOption";
import TwoCardTwoOption from "../TwoCardTwoOption/TwoCardTwoOption";
import WebFourCards from "../Thematic/Thematic";
import TwoCardDesOption from "../TwoCardDesOption/TwoCardDesOption";
import OneCardDesOption from "../OneCardDesOption/OneCardDesOption";
import SliderInputScreen from "../SliderInputScreen/SliderInputScreen";
import StepComponent from "../StepComponent/StepComponent";
import CardsComponent from "../CardsComponent/CardsComponent";
import QuizComponent from "../QuizComponent/QuizComponent";
import QuizScreen from "../QuizComponent/QuizScreen";
import ChartDashboard from "../ChartDashboard/ChartDashboard";
import StepFour from "../StepComponent/StepFour/StepFour";
import StepFive from "../StepComponent/StepFive/StepFive";


const Header = (props) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const handleToggle = () => (isOpen ? onClose() : onOpen());

    return (
        <>
            <Flex
                as="nav"
                align="center"
                justify="space-between"
                wrap="wrap"
                // padding={6}
                bg="#084877"
                color="white"
                // height={20}00000
                {...props}
            >
                <Flex >
                    {/* <Heading as="h1" size="lg" letterSpacing={"tighter"}>
                    Chakra UI
                </Heading> */}
                    <Image src={GuapZlogo} h="70px" />
                </Flex>

                <Box display={{ base: "block", md: "none" }} onClick={handleToggle}>
                    <HamburgerIcon />
                </Box>

                <Stack
                    direction={{ base: "column", md: "row" }}
                    display={{ base: isOpen ? "block" : "none", md: "flex" }}
                    width={{ base: "full", md: "auto" }}
                    alignItems="center"
                    flexGrow={1}
                    mt={{ base: 4, md: 0 }}
                >
                    {/* <Link to="/">
                        <Button variant="nav">Dashboard</Button>
                    </Link> */}
                    <Link to="/">
                        <Button variant="nav">Home</Button>
                    </Link>
                    <Link to="/about">
                        <Button variant="nav">About us</Button>
                    </Link>
                    <Link>
                        <Button variant="nav">Princing</Button>
                    </Link>

                    {/* <Link to="/portfolio">
                        <Button variant="nav">portfolio</Button>
                    </Link> */}
                    {/* <Link to="/twoCards">
                        <Button variant="nav">Cards</Button>
                    </Link> */}

                </Stack>

                <Box
                    display={{ base: isOpen ? "block" : "none", md: "block" }}
                    mt={{ base: 4, md: 0 }}
                >

                    <Link to="/login">
                        <Button variant="nav">Login</Button>
                    </Link>
                    <Link to="/StepComponent">
                        <Button
                            variant="outline"
                            _hover={{ bg: "teal.700", borderColor: "teal.700" }}
                        >
                            Get Started
                        </Button>
                    </Link>
                </Box>
            </Flex>
            <Box h={50} bg="#f1f1f1">
                <HStack justifyContent='center' alignItems='center'>
                    <Link>
                        <Button variant="nav">Icon-1</Button>
                    </Link>
                    <Link>
                        <Button variant="nav">Icon-2</Button>
                    </Link>
                    <Link>
                        <Button variant="nav">Icon-3</Button>
                        {/* <AddIcon w={8} h={8} color="blue.200" /> */}
                    </Link>
                </HStack>
            </Box>


            {/* <SignIn /> */}
            {/* <Login /> */}
            {/* <Dashboard /> */}
            {/* <Portfolio /> */}

            {/* <WebFourCards /> */}

            {/* <DashboardTwo /> */}
            {/* <TwoCardOption /> */}
            {/* <TwoCardTwoOption /> */}
            {/* <TwoCardDesOption /> */}
            {/* <OneCardDesOption /> */}
            {/* <TwoCards /> */}
            {/* <StepComponent /> */}
            {/* <SliderInputScreen /> */}
            {/* <CardsComponent /> */}

            {/* <StepFour /> */}
            {/* <StepFive /> */}
            {/* <QuizComponent /> */}
            {/* <QuizScreen /> */}
            {/* <ChartDashboard /> */}

            {/* <StepOne /> */}


        </>
    );
};

export default Header;
