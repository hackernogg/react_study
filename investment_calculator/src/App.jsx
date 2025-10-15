import { useState } from 'react';
import Header from "./components/Header.jsx"
import InputBoard from "./components/InputBoard.jsx"
import Result from "./components/Result.jsx";

const INITIAL_INPUT = {
  initialInvestment:10000,
  annualInvestment:1200,
  expectedReturn:6,
  duration:10,
}

function App() {
  //const [initialInvestment, setInitialInvestment] = useState(0);
  //const [annualInvestment, setAnnualInvestment] = useState(0);
  //const [expectedReturn, setExpectedReturn] = useState(0);
  //const [duration, setDuration] = useState(0);

  const [userInput, setUserInput] = useState(INITIAL_INPUT);

  const isValidate = userInput.duration >= 1;

  function handleUserInputChange(index, newValue) {
    setUserInput(prevUserInput => {
      return {
        ...prevUserInput,
        [index]: +newValue,
      };
    });
  }

  return (
    <>
    <Header />
    <InputBoard currentValue={userInput} onChangeValue={handleUserInputChange}/>
    {!isValidate && <p className='center'>Please input a valid duration</p>}
    {isValidate && <Result currentValue={userInput}/>}
    </>
  );
}

export default App
