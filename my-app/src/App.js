import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';




function App() {


  const [ operator, setOperator ] = useState("addition");
  const [ operandOne, setOperandOne ] = useState();
  const [ operandTwo, setOperandTwo ] = useState();
  const [ answer, setAnswer] = useState();

  const calculation = () => {

    console.log(operator, operandOne, operandTwo)


    let answer = null

    if (operator == "addition") {
      answer = operandOne + operandTwo
    }
    else if (operator == "subtraction") {
      answer = operandOne - operandTwo
    }
    else if (operator == "multiply") {
      answer = operandOne * operandTwo
    }
    else if (operator == "division") {
      answer = operandOne / operandTwo
    }

    setOperator(operator);
    setAnswer(answer);

  }



  const handleSubmit = (event) =>  {
  	 event.preventDefault();
     console.log(event)
   }

  return (



    <div className="App">
      <h1>React Calculator</h1>
      <form onSubmit={handleSubmit}>
      {/* add form */}
      <label>Field 1: </label>
      <input
       type="text"
       name="field-1"
       id="field-1"
       onChange = {(event)=> setOperandOne (Number.parseInt(event.target.value))}
       />
       <br />

       <div id = "operators">
       <label>Select operator: </label>
       <select name="operators" id="operators" onChange = {(event)=> setOperator (event.target.value)} >
          <option value="addition">+</option>
          <option value="subtraction">-</option>
          <option value="division">/</option>
          <option value="multiply">*</option>
        </select>
      </div>

       <label>Field 2: </label>
       <input
        type="text"
        name="field-2"
        id="field-2"
        onChange = {(event)=> setOperandTwo (Number.parseInt(event.target.value))}
        />
        <br />

      <input type="submit" value="Calculate" onClick = {calculation}  />

      <div id= "answer">
      Answer: {answer}
       </div>

    </form>




    </div>

  );
}

export default App;
