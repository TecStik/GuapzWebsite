import React, { useState, useContext, useEffect,useRef } from "react";
import { Step, Steps, useSteps } from "chakra-ui-steps"
import { Flex, Container, Button, Heading } from "@chakra-ui/react";
import { Calendar, DatePicker, theme, Alert } from 'antd';
import StoreContext from '../../ContextAPI/ContextAPI';
import { ClickableSteps } from "./StepTwo/StepTwo";
import StepThree from "./StepThree/StepThree";
import StepOne from "./StepOne/StepOne";
import StepFour from "./StepFour/StepFour";

import moment from "moment";
import dayjs from 'dayjs';
import StepFive from "./StepFive/StepFive";

const steps = [{ label: "Step 1" }, { label: "Step 2" }, { label: "Step 3" }, { label: "Step 4" }, { label: "Step 5" }]
// const nestedSteps = [{ label: "Step 1" }, { label: "Step 2" }, { label: "Step 3" }]

export const CardsComponent = () => {

    const { nextStep, prevStep, reset, activeStep, setStep } = useSteps({ initialStep: 0, })
    const NextStepDetail = useContext(StoreContext);

    useEffect(() => {
        if (NextStepDetail.NestedStep === "moveIIndStep") {
            nextStep()
            NextStepDetail.setNestedStep("steps")
        }
        else if (NextStepDetail.NestedStep === "moveIIIStep") {
            nextStep()
            NextStepDetail.setNestedStep("steps")
        }
        else if (NextStepDetail.NestedStep === "moveIIIIndStep") {
            nextStep()
            NextStepDetail.setNestedStep("steps")
        } 
    }, [NextStepDetail])

    // const { getRootProps, getRadioProps } = useRadioGroup({
    //     name: 'framework',
    //     defaultValue: 'react',
    //     onChange: console.log,
    // })

    // const group = getRootProps()


    // const [value, setValue] = useState(() => dayjs('2017-01-25'));
    // const [selectedValue, setSelectedValue] = useState(() => dayjs('2017-01-25'));
    // const [startDate, setStartDate] = useState(new Date());
    // let a = moment(value).format('YYYY MMMM Do')
    // let today = moment();
    // let months = moment("2019-12-26");
    // let totalMonths = today.diff(months, "month");
    // // console.log(startDate);
    // // console.log(totalMonths, "totalMonths");
    // // console.log(moment(value).format('MMMM Do YYYY'), "raza");


    // const onSelect = (newValue) => {
    //     setValue(newValue);
    //     setSelectedValue(newValue);
    // };
    // const onPanelChange = (newValue) => {
    //     setValue(newValue);
    // };
    // const wrapperStyle = {
    //     // width: 350,
    //     border: `1px solid ${token.colorBorderSecondary}`,
    //     borderRadius: token.borderRadiusLG,
    // };


    return (
        <Flex flexDir="column" width="100%" >
            <Steps onClickStep={(step) => setStep(step)} rounded="md" activeStep={activeStep}>
                {/* Step One */}
                <Step label={"Goal Base"} key={1}> <StepOne /></Step>
                {/* Step One */}
                <Step label={"Plan your Investment"} key={2}> <ClickableSteps props={"data"} /> </Step>
                {/* Step One */}
                <Step label={"Risk Profiling"} key={3}><StepThree /></Step>
                {/* Step One */}
                <Step label={"Fund Selection"} key={4}><StepFour /></Step>
                {/* Confirm/Adjust your Plan*/}
                <Step label={"Confirm/Adjust your Plant"} key={4}><StepFive /></Step>
            </Steps>

            {activeStep === steps.length ? (
                <Flex px={4} py={4} width="100%" flexDirection="column">
                    <Heading fontSize="xl" textAlign="center">Woohoo! All steps completed!</Heading>
                    <Button mx="auto" mt={6} size="sm" onClick={reset}>Reset</Button>
                </Flex>
            ) : (
                <Flex width="100%" justify="flex-end">
                    <Button
                        isDisabled={activeStep === 0}
                        mr={4}
                        onClick={prevStep}
                        size="sm"
                        variant="ghost"
                    > Prev</Button>
                    <Button size="sm" onClick={nextStep}>
                        {activeStep === steps.length - 1 ? "Finish" : "Next"}
                    </Button>
                </Flex>
            )}
        </Flex>
    )
}

export default CardsComponent