import React, { useEffect, useState } from "react";
import "./transaction.css";
import TransactionButton from "./TransactionButton";

const Transaction = () => {
  // Setting income and expense statement
  const indicator = {
    left: "transaction__middleLeftCircle",
    right: "transaction__middleRightCircle",
  };

  //Creating hooks for income and expense tab change
  const [modifyClass, setModifyClass] = useState(indicator.left);

  //creating new statement
  const newStatement = {
    entryType: "income",
    statementText: null,
    statementAmount: null,
  };

  //creating hooks for title, amount and entryType
  const [currStatement, setCurrStatement] = useState(newStatement);

  //when user enables income
  const inIncome = () => {
    setModifyClass(indicator.left);
    setCurrStatement((preValue) => {
      console.log(preValue);
      return {
        ...preValue,
        entryType: "income",
      };
    });
  };

  //For testing purposes
  useEffect(() => {
    console.log("this is currentValue", currStatement);
  }, [currStatement]);

  //When user enables expense
  const inExpense = () => {
    setModifyClass(indicator.right);
    setCurrStatement((preValue) => {
      console.log("this is prevalue", preValue);
      return {
        ...preValue,
        entryType: "expense",
      };
    });
  };

  const setData = (event) =>{
      const {value,name} = event.target;
      return (
          setCurrStatement((preValue)=>{
            return {
                ...preValue,
                [name] : value
            }
          })
      )
  }

  return (
    <div className="transaction__container">
      <p className="transaction__mainHeading">Add new transaction </p>

      {/* This is for entry type */}
      <div className="transaction__entryType">
        <div className="transaction__typeLeft">
          <p>Income</p>
        </div>
        <div className={modifyClass}></div>
        <div className="transaction__typeMiddle">
          <div className="transaction__middleLeft" onClick={inIncome}></div>
          <div className="transaction__middleRight" onClick={inExpense}></div>
        </div>
        <div className="transaction__typeRight">
          <p>Expense</p>
        </div>
      </div>

      <div className="transaction__textContainer">
        <p className="transaction__textMainHeading">Text</p>
        <input onChange={setData}
          className="transaction__textInput"
          type="text"
          placeholder="Enter text..."
          name="statementText"
          required
        />
      </div>
      <div className="transaction__amountContainer">
        <p className="transaction__amountMainHeading">Amount</p>
        <span className="transaction__currency">$</span>
        <input onChange={setData}
          className="transaction__amountInput"
          type="text"
          placeholder="Enter amount..."
          name="statementAmount"
          required
        />
      </div>
      <div className="transaction__addTrans">
        <TransactionButton />
      </div>
    </div>
  );
};

export default Transaction;
