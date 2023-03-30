


import { Box, Heading, Image, Text, Flex, Link, Spacer, useMediaQuery } from '@chakra-ui/react';
import { useState, useEffect } from "react";
import chakraHero from '../assets/images/about.png';
import email from '../assets/images/email.png';
import location from'../assets/images/placeholder.png';
import '../assets/fonts/impact.ttf'
import React from 'react';

const About = () => {
    const [isLargerThan62] = useMediaQuery('(min-width: 62em)');

    return (
        <>
            <Flex
                alignItems="center"
                w="full"
                px={isLargerThan62 ? '16' : '6'}
                py="16"
                minHeight="70vh"
                justifyContent="space-between"
                flexDirection={isLargerThan62 ? 'row' : 'column'}

            >
                <Box mr={isLargerThan62 ? '6' : '0'} w={isLargerThan62 ? '60%' : 'full'} pl={4}>
                    <Text
                        fontSize={isLargerThan62 ? '5xl' : '4xl'}
                        fontWeight="bold"
                        mb="4"
                        textColor="#084877"
                    >
                        {' '}
                        About Us Page
                    </Text>


                    <Heading
                        // as="h1"
                        // size="xl"
                        fontWeight="bold"
                        color="primary.800"
                        textAlign={["center", "center", "left", "left"]}
                        fontSize={isLargerThan62 ? 'lg' : 'base'}
                        w={isLargerThan62 ? 'lg' : 'base'}
                        opacity={0.7}
                        mb="6"
                    >
                        Introduction including brief overview of app, including mission statement or value.

                    </Heading>
                    <Text mb="6" fontSize={isLargerThan62 ? 'lg' : 'base'} opacity={0.7} w={isLargerThan62 ? 'lg' : 'base'}>
                        The GuapZ Web & Mobile Gen Z investing Apps are developed and continuously upgraded by a seasoned team of highly professional Finance and Technology specialists. Our team’s determined to regularly update their skills for maintaining GuapZ’s distinct technologies, subsequently helping you achieve your Gen Z investing goals.
                    </Text>
                </Box>

                <Spacer />

                <Flex
                    w={isLargerThan62 ? '40%' : 'full'}
                    alignItems="center"
                    justifyContent="center"
                    mb={{ base: 12, md: 0 }}
                    pr={4}
                >
                    <Image src={chakraHero} alt="Chakra UI" rounded="1rem" shadow="2xl" />
                </Flex>

            </Flex>
            <Flex
                w="full"
                bg="blackAlpha.50"
                minHeight="13vh"
                flexDirection="column"
                alignItems="center"
                textAlign="center"
                justifyContent="center"
            >
                <Text mb="3">
                    {/* <Image src={email} alt="email" width="27px" /> */}
                    {/* <Image src={location} p={4} alt="location" width="27px" /> */}
                    Email{' '}
                    <Link href="https://appseed.us" isExternal color="blue.500">
                        info@tecstik.com
                    </Link>
                </Text>
                <Text opacity="0.5">Address: Business Centre, II Chundrigar Road</Text>
            </Flex>
        </>
    );
};

export default About