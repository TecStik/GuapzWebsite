import React, { useState } from "react";
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
import WebFourCards from "./Component/WebFourCards/WebFourCards";
import TwoCardDesOption from "./Component/TwoCardDesOption/TwoCardDesOption";
import OneCardDesOption from "./Component/OneCardDesOption/OneCardDesOption";
import SliderInputScreen from "./Component/SliderInputScreen/SliderInputScreen";
import CardsComponent from "./Component/CardsComponent/CardsComponent";
import StepComponent from "./Component/StepComponent/StepComponent";
import InvestmentPlant from "./Component/InvestmentPlant/InvestmentPlant";

import { StepsTheme as Steps } from "chakra-ui-steps";
import QuizComponent from "./Component/QuizComponent/QuizComponent";
import { StoreProvider } from "./ContextAPI/ContextAPI";
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
  const [ShowQuiz, setShowQuiz] = useState(false);

  return (
    <ChakraBaseProvider theme={theme}>
      <StoreProvider value={{ NestedStep, setNestedStep, ShowQuiz, setShowQuiz }}>
        <BrowserRouter>
          <Header />
          <Routes>
            {/* <Route path="/" element={<SignIn />} /> */}
            {/* <Route path="/" element={<StepComponent />} /> */}
            {/* <Route path="/" element={<InvestmentPlant />} /> */}
            {/* <Route path="/" element={<QuizComponent />} /> */}

            {/* <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/portfolio" element={<Portfolio />} />
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
