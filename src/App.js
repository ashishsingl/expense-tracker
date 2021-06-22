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

  let initStatements;
  try {
    if (localStorage.getItem('statements') === null) {
      // console.log('we are iniliaze statement')
      localStorage.setItem('statements', JSON.stringify([]))
      initStatements = localStorage.getItem('statements')
      // console.log('and the value of init statement is ', initStatements)
    }
    else {
      // console.log('we are in pre defined statements')
      initStatements = JSON.parse(localStorage.getItem('statements'))
      // console.log('and the value of pre defined init is ', initStatements)
    }
  }
  catch (e) {
    console.log(e)
  }


  const [statementList, setStatementList] = useState(initStatements);

  useEffect(() => {
    // console.log("message comming from app.js and this is statementList", statementList)
  })

  return (
    <div className="app__container">
      {
        useEffect(() => {
          // console.log('message from app.js you updated statementList')
        }, [statementList])
      }
      <StatementList.Provider value={statementList}>
        <SetStatementList.Provider value={setStatementList}>
          <Switch>
            <Route exact path="/">
              <Header headerText="Expense Tracker" />
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

