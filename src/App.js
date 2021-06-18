import React, { createContext, useState } from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./Components/Header";
import Balance from "./Components/Balance";
import BalanceCalc from "./Components/BalanceCalc";
import HistoryList from "./Components/HistoryList";
import TransactionButton from "./Components/TransactionButton";
import Transaction from "./Components/Transaction";
import "./App.css";

const StatementList = createContext();
const SetStatementList = createContext();

function App() {

  // Creating a statement list
  const [statementList, setStatementList] = useState([]);

  return (
    <div className="app__container">
      <StatementList.Provider value={statementList}>
        <SetStatementList.Provider value={setStatementList}>
          <Switch>
            <Route exact path="/">
              <Header />
              <Balance />
              <BalanceCalc />
              <HistoryList />
              <TransactionButton />
            </Route>
            <Route exact path="/transaction">
              <Transaction />
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
