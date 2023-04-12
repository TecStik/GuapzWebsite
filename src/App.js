import React, { useState, useEffect } from "react";
import {
  ChakraBaseProvider,
  extendBaseTheme,
  RadioButtonGroup,
  Text,
} from "@chakra-ui/react";
// `@chakra-ui/theme` is a part of the base install with `@chakra-ui/react`
import chakraTheme from "@chakra-ui/theme";
import Header from "./Component/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./Component/CardPages/SignIn";

import Login from "./Component/CardPages/Login";
import Dashboard from "./Component/Dashboard/Dashboard";
import Portfolio from "./Component/Poetfolio/Poetfolio";
import TwoCards from "./Component/TwoCards/TwoCards";
import DashboardTwo from "./Component/DashboardTwo/DashboardTwo";
import TwoCardOption from "./Component/TwoCardFourOption/TwoCardFourOption";
import TwoCardTwoOption from "./Component/TwoCardTwoOption/TwoCardTwoOption";
import WebFourCards from "./Component/Thematic/Thematic";
import TwoCardDesOption from "./Component/TwoCardDesOption/TwoCardDesOption";
import OneCardDesOption from "./Component/OneCardDesOption/OneCardDesOption";
import SliderInputScreen from "./Component/SliderInputScreen/SliderInputScreen";
import CardsComponent from "./Component/CardsComponent/CardsComponent";
import StepComponent from "./Component/StepComponent/StepComponent";
import InvestmentPlant from "./Component/InvestmentPlant/InvestmentPlant";
import Thematic from "./Component/Thematic/Thematic";

import { StepsTheme as Steps } from "chakra-ui-steps";
import QuizComponent from "./Component/QuizComponent/QuizComponent";
import { StoreProvider } from "./ContextAPI/ContextAPI";
import About from "./Component/Pages/About/About";
import Home from "./Component/Pages/HomePage/Home";

// import TwoCards from "../TwoCards/TwoCards";
// import DashboardTwo from "../DashboardTwo/DashboardTwo";
// import TwoCardOption from "../TwoCardFourOption/TwoCardFourOption";
// import TwoCardTwoOption from "../TwoCardTwoOption/TwoCardTwoOption";
// import TwoCardDesOption from "../TwoCardDesOption/TwoCardDesOption";

const { Button } = chakraTheme.components;

const theme = extendBaseTheme({
  components: {
    Button,
    Steps,
  },
});

function App() {
  const [NestedStep, setNestedStep] = useState("steps");
  const [StepChildCom, setStepChildCom] = useState("steps");
  const [ShowQuiz, setShowQuiz] = useState(false);
  const [goals, setGoals] = useState(["testing"]);
  // const [icon, setIcon] = useState({
  //   id: 6,//
  //   title: 'Custom',
  //   image: require('./app/assets/custom.png')
  // });
  const [option, setOption] = useState(0);
  const [step, setStep] = useState(0);
  const [riskScore, setRiskScore] = useState(0);
  const [futValue, setFutValue] = useState(1000);
  const [tHorizon, setTHorizon] = useState(10.0);
  const [nPer, setnPer] = useState(10);
  const [frequency, setFrequency] = useState({ label: "Month", value: 12 });
  const [pmt, setPmt] = useState(100);
  const [initCont, setInitCont] = useState(0);
  const [reqPmt, setReqPmt] = useState(0);
  const [expVal, setExpVal] = useState(0);
  const [profitRate, setProfitRate] = useState(10.0);
  const [fund, setFund] = useState({ return: "10" });

  useEffect(() => {
    // const exp = FVofAnnuity(10, frequency.value, tHorizon, pmt);
    // const req = AnnuityofFV(parseInt(fund.return), frequency.value, tHorizon, futValue);
    // setReqPmt(req);
    // setExpVal(exp);
    // setnPer(parseInt(frequency.value * tHorizon));
    // console.log("Expected FV", parseInt(fund.return), frequency.value, tHorizon, pmt, exp);
    // console.log("Required PMT", parseInt(fund.return), frequency.value, tHorizon, futValue, req);
    console.log("One of the Va;ues Chaged",frequency, tHorizon, pmt, futValue, fund,initCont);
    console.log(frequency, "frequencyfrequency");
    console.log(tHorizon, "tHorizon");
  }, [frequency, tHorizon, pmt, futValue, fund,initCont]);
  return (
    <ChakraBaseProvider theme={theme}>
      <StoreProvider
        value={{
          NestedStep,
          setNestedStep,
          StepChildCom,
          setStepChildCom,
          ShowQuiz,
          setShowQuiz,
          goals,
          setGoals,
          step,
          setStep,
          riskScore,
          setRiskScore,
          futValue,
          setFutValue,
          tHorizon,
          setTHorizon,
          frequency,
          setFrequency,
          profitRate,
          setProfitRate,
          fund,
          setFund,
          pmt,
          setPmt,
          setInitCont,
          expVal,
          setExpVal,
          option,
          setOption,
        }}
      >
        <BrowserRouter>
          <Header />
          <Routes>
            {/* <Route path="/" element={<Home/>} />
            <Route path="/home" element={<Dashboard />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/StepComponent" element={<StepComponent />} />
            <Route path="/Thematic" element={<Thematic />} /> */}

            <Route path="/" element={<StepComponent />} />

            {/* <About /> */}
            {/* <Route path="/" element={<SignIn />} /> */}
            {/* <Route path="/" element={<InvestmentPlant />} /> */}
            {/* <Route path="/" element={<QuizComponent />} /> */}

            {/* <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/WebFourCards" element={<WebFourCards />} />
          <Route path="/DashboardTwo" element={<DashboardTwo />} />
          <Route path="/twoCards" element={<TwoCards />} />
          <Route path="/TwoCardOption" element={<TwoCardOption />} />
          <Route path="/TwoCardTwoOption" element={<TwoCardTwoOption />} />
          <Route path="/TwoCardDesOption" element={<TwoCardDesOption />} />
          <Route path="/OneCardDesOption" element={<OneCardDesOption />} />
          <Route path="/SliderInputScreen" element={<SliderInputScreen />} />
        <Route path="/CardsComponent" element={<CardsComponent />} /> */}
          </Routes>
        </BrowserRouter>
      </StoreProvider>
      {/* <Header /> */}
      {/* <Login /> */}
    </ChakraBaseProvider>
  );
}

export default App;
