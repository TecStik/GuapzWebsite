import React from 'react';



import { Box, Heading, Image, Text, Flex, List, ListIcon, Link, ListItem, Spacer, useMediaQuery } from '@chakra-ui/react';
import { useState, useEffect } from "react";
import chakraHero from '../assets/images/about.png';
import email from '../assets/images/email.png';
import location from '../assets/images/placeholder.png';
import '../assets/fonts/impact.ttf'
import ams from '../assets/images/ams.png';
import disc from '../assets/images/rec.png';
import { CheckIcon } from "@chakra-ui/icons";

const Home = () => {
    const [isLargerThan62] = useMediaQuery('(min-width: 62em)');

    return (
        <>
            <Flex
                alignItems="center"
                w="full"
                px={isLargerThan62 ? '16' : '6'}
                py="16"
                // minHeight="70vh"
                justifyContent="space-between"
                flexDirection={isLargerThan62 ? 'row' : 'column'}

            >
                <Box mr={isLargerThan62 ? '6' : '0'} w={isLargerThan62 ? '60%' : 'full'} pl={4}>
                    <Text
                        fontSize={isLargerThan62 ? '5xl' : '4xl'}
                        fontWeight="bold"
                        mb="4"
                        fontFamily="Impact"

                        letterSpacing={2}
                        textColor="#084877"
                    >
                        {' '}
                        Home Page
                    </Text>


                    <Heading
                        // as="h1"
                        // size="xl"
                        fontWeight="bold"
                        color="primary.800"
                        // textAlign={["center", "center", "left", "left"]}
                        fontSize={isLargerThan62 ? 'lg' : 'base'}
                        w={isLargerThan62 ? 'lg' : 'base'}
                        opacity={0.5}
                        mb="6"
                    >
                        <Text>Build wealth for your future</Text>
                        <Text>Built for Gen Z financial goals</Text>
                        <Text>Gen Z investing apps to grow your money over time</Text>

                    </Heading>

                    <Text
                        fontSize={isLargerThan62 ? '5xl' : '4xl'}
                        fontWeight="bold"
                        mb="4"
                        textColor="#084877"
                    >
                        {' '}
                        Guapz
                    </Text>

                    <Text mb="6" fontSize={isLargerThan62 ? 'lg' : 'base'} opacity={0.7} w={isLargerThan62 ? 'lg' : 'base'}>
                        Achieve your financial goals
                    </Text>
                    <List spacing={3}>
                        <ListItem>
                            <ListIcon as={CheckIcon} color='green.500' m={2} />
                            Select or customise a goal.
                        </ListItem>
                        <ListItem>
                            <ListIcon as={CheckIcon} color='green.500' m={2} />
                            Plan your investment.
                        </ListItem>
                        <ListItem>
                            <ListIcon as={CheckIcon} color='green.500' m={2} />
                            Let our AI assess your risks for you.
                        </ListItem>
                        <ListItem>
                            <ListIcon as={CheckIcon} color='green.500' m={2} />
                            Select funds for a favourable return. Buy anything you want.
                        </ListItem>
                    </List>
                </Box>

                <Spacer />

                <Flex
                    w={isLargerThan62 ? '40%' : 'full'}
                    alignItems="center"
                    justifyContent="center"
                    mb={{ base: 12, md: 0 }}
                    // pr={4}
                >
                    <Image src={ams} alt="Chakra UI" mb={10} />
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

export default Home