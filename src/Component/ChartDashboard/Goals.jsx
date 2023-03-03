import { Box, Flex, Grid, Heading, Image, Text, useMediaQuery } from '@chakra-ui/react'
import { useState, useEffect } from "react";
import devices from '../../assets/images/devices.png';
import education from '../../assets/images/graduated.png';
import laptop from '../../assets/images/laptop.png';
import vacation from '../../assets/images/travel.png';
import saving from '../../assets/images/wallet.png';
import balance from '../../assets/images/save-time.png';
import growth from '../../assets/images/money-growth.png';
import income from '../../assets/images/salary.png';


const GoalsContainer = ({ images, goal }) => {
    const [isMediumScreen] = useMediaQuery("(max-width: 684px)");
    const [isSmallScreen] = useMediaQuery("(max-width: 350px)");

    return (
        <>
            <Box backgroundColor='#ccd5de  '
                width={isSmallScreen ? "80vw" : isMediumScreen ? "45vw" : "155px"}
                height='80px' borderRadius='8px'
            >
                <Flex height='50%' borderBottom='1px solid #084877' paddingLeft='5px' alignItems='center' >
                    <Image boxSize='30px' objectFit='cover' src={images} alt={goal} />
                    <Heading as="h5" size="4xl">
                        {goal}
                    </Heading>
                </Flex>



                <Heading as="h6" size="4xl" margin='0' textAlign='start' padding='10px'>
                    199.9

                </Heading>

            </Box>
        </>
    )

}


const Goals = () => {
    const [isMediumScreen] = useMediaQuery("(max-width: 684px)");
    const [isSmallScreen] = useMediaQuery("(max-width: 350px)");

    return (
        <>
            <Heading as="h3" size="4xl" textAlign='left' margin='0'> Goals</Heading>

            <Grid
 paddingLeft={isSmallScreen ? "10%" : "0"}    
       templateColumns={isSmallScreen ? "repeat(1, 1fr)" : isMediumScreen ? "repeat(2, 1fr)" : "repeat(4, 155px)"}
                gap={10}
            >
                <GoalsContainer images={devices} goal='  Mobile/Gagedts' />
                <GoalsContainer images={education} goal='  Education' />
                <GoalsContainer images={laptop} goal='  Laptop/PC' />
                <GoalsContainer images={vacation} goal=' Vacation' />
            </Grid>

            <Heading as="h3" size="4xl" textAlign='left' margin='0'>Goals</Heading>

            <Grid
             paddingLeft={isSmallScreen ? "10%" : "0"}    

                templateColumns={isSmallScreen ? "repeat(1, 1fr)" : isMediumScreen ? "repeat(2, 1fr)" : "repeat(4, 155px)"}
                gap={10}
            >
                <GoalsContainer images={saving} goal='Savings' />
                <GoalsContainer images={balance} goal='Balanced' />
                <GoalsContainer images={growth} goal=' Growth' />
                <GoalsContainer images={income} goal='Stable Income' />
            </Grid>
        </>
    )
}



export default Goals
