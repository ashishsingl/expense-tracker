import React, { useEffect, useState } from "react";
import "./transaction.css";
import TransactionButton from "./TransactionButton";
import Indicator from "./Indicator";
import TransInput from "./TransInput";
import AddStatementButton from "./AddStatementButton";
import { Link } from "react-router-dom";
import HomeIcon from '@material-ui/icons/Home';

const Transaction = () => {
  //creating new statement
  const newStatement = {
    entryType: "income",
    statementText: "",
    statementAmount: 0,
  };

  //creating hooks for title, amount and entryType
  const [currStatement, setCurrStatement] = useState(newStatement);

  //For testing purposes
  useEffect(() => {
    // console.log("before message from transaction.js and this is currentValue", currStatement);
  }, [currStatement]);

  const setData = (event) => {
    const { value, name } = event.target;

    //if function is called from the 'text input'
    if (name === "statementText") {
      // checking if length satisty the condition then pass value as same as taken
      if (value.length <= 15) {
        setInputValue(value);
        setTextCalculate(value.length);
        setCurrStatement((preValue) => {
          return {
            ...preValue,
            [name]: value,
          };
        });
      }
      //checking if lenght is greater than then pause it upto below condition
      else {
        setInputValue(value.substring(0, 15));
        setCurrStatement((preValue) => {
          return {
            ...preValue,
            [name]: value.substring(0, 15),
          };
        });
      }
    }
    //if request come from the 'amount field'
    else if (name === "statementAmount") {
      //if amount satisfy below condition then pass it same as taken
      if (value <= 100000) {
        setInputAmount(value);
        setCurrStatement((preValue) => {
          return {
            ...preValue,
            [name]: value,
          };
        });
      }
      // otherwise take it back to below given value
      else {
        setInputAmount(99999);
        setCurrStatement((preValue) => {
          return {
            ...preValue,
            [name]: 99999,
          };
        });
      }
    }
  };

  // For popup of invalid input
  const [invalidInput, setInvalidInput] = useState(false);

  //For text calculation
  const [textCalculate, setTextCalculate] = useState(0);

  //Hooks for value maintainance
  const [inputValue, setInputValue] = useState();
  const [inputAmount, setInputAmount] = useState();

  return (
    <div className="transaction__container">
      <div className="transaction__header">
        <p className="transaction__mainHeading">Add new transaction </p>
        <Link to="/"> <HomeIcon /></Link>
      </div>

      {/* This is for entry type */}
      <div className="transaction__entryType">
        <div className="transaction__typeLeft">
          <p>Income</p>
        </div>
        <Indicator setCurrStatement={setCurrStatement} />
        <div className="transaction__typeRight">
          <p>Expense</p>
        </div>
      </div>
      {invalidInput ? (
        <div className="invalid__container">
          <p>Please enter a valid value.</p>
        </div>
      ) : (
        <div></div>
      )}
      <TransInput
        setData={setData}
        mainHeading="Text"
        placeHolder="Enter text..."
        type="text"
        name="statementText"
        symbolHidden={true}
        textCalculate={textCalculate}
        value={inputValue}
      />
      <TransInput
        setData={setData}
        mainHeading="Amount"
        placeHolder="Enter amount..."
        type="number"
        name="statementAmount"
        symbolHidden={false}
        value={inputAmount}
      />
      <div className="transaction__addTrans">
        <AddStatementButton
          currStatement={currStatement}
          setInvalidInput={setInvalidInput}
        />
      </div>
    </div>
  );
};

export default Transaction;
