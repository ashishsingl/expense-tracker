import React, { createContext, useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./Components/Header";
import Balance from "./Components/Balance";
import BalanceCalc from "./Components/BalanceCalc";
import HistoryList from "./Components/HistoryList";
import TransactionButton from "./Components/TransactionButton";
import Transaction from "./Components/Transaction";
import AllHistory from './Components/AllHistory'
import "./App.css";

const StatementList = createContext();
const SetStatementList = createContext();

function App() {

  // Creating a statement list
  const [statementList, setStatementList] = useState([]);

  useEffect(()=>{
    console.log("message comming from app.js and this is statementList", statementList)
  })

  return (
    <div className="app__container">
      {
        useEffect(()=>{
          // console.log('message from app.js you updated statementList')
        },[statementList])
      }
      <StatementList.Provider value={statementList}>
        <SetStatementList.Provider value={setStatementList}>
          <Switch>
            <Route exact path="/">
              <Header headerText="Expense Tracker"/>
              <Balance />
              <BalanceCalc />
                <HistoryList />
              <TransactionButton />
            </Route>
            <Route exact path="/transaction">
              <Transaction />
            </Route>
            <Route exact path="/fullHistory">
              <AllHistory />
            </Route>

          </Switch>
        </SetStatementList.Provider>
      </StatementList.Provider>
    </div>
  );
}

export default App;
export { StatementList };
export { SetStatementList };




console.log('testing map function')

let arrayNum = [1,2,3,4,5]
let totalSum =0;

 arrayNum.map((value)=>{
  totalSum = totalSum + value;
})

console.log('this is the value of totalSum', totalSum)