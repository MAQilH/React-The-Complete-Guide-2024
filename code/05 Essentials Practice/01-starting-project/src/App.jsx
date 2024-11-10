import { useState } from "react"
import Header from "./components/Header"
import Results from "./components/Results"
import UserInput from "./components/UserInput"

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10004,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  })

  const inputIsValid = userInput.duration > 0

  function handleChange(inputIdentifier, newValue) {
    setUserInput(prevUserInput => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue
      }
    })
  }

  let counter = 10;
  console.log(`app running again!! ${counter}`)


  return (
    <>
      <button onClick={() => {
        console.log('this is clicked', counter)
        counter++
      }}>{counter} this is a fucking button!</button>
      <Header/>
      <UserInput onChange={handleChange} userInput={userInput}/>
      {!inputIsValid && <p>Data has Invalid format</p>}
      {inputIsValid && <Results input={userInput}/>}
    </>
  )
}

export default App
