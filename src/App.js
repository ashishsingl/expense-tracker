import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./Components/Header";
import Balance from "./Components/Balance";
import BalanceCalc from "./Components/BalanceCalc";
import HistoryList from "./Components/HistoryList";
import TransactionButton from "./Components/TransactionButton";
import Transaction from "./Components/Transaction";
import "./App.css";

function App() {
  return (
    <div className="app__container">
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
    </div>
  );
}

export default App;
