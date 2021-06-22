import React, { useContext } from "react";
import "./historyList.css";
import HistoryItem from "./HistoryItem";
import { StatementList } from "../App";
import { Link } from "react-router-dom";

const HistoryList = () => {
  // getting statementList from app.js
  const statementList = useContext(StatementList);
  let tempStatementList = statementList;

  // console.log("this is  tempStatementList", tempStatementList);
  tempStatementList = [...tempStatementList].reverse();
  // console.log("this is reverse of tempStatementList", tempStatementList);
  if (tempStatementList.length > 3) {
    tempStatementList = tempStatementList.slice(0, 3);
    // console.log("this is tempstatement", tempStatementList);
  }

  // console.log('this msg is from historyItem and this is statementList', statementList)
  return (
    <div className="historyList__container">
      <div className="historyList__historyContainer">
        <p className="historyList__heading">History</p>
        <Link to="/fullHistory"> Full history </Link>
      </div>
      <div className="historyList__itemContainer">
        {
          // if there is no transaction then this div will appear
          statementList.length === 0 ? (
            <div className="historyList__noTransaction">
              No Transaction History
            </div>
          ) : (
            <div></div>
          )
        }

        {tempStatementList.map((valueObj, index) => {
          const { entryType, statementText, statementAmount } = valueObj;
          return (
            <HistoryItem
              key={index}
              entryType={entryType}
              statementText={statementText}
              statementAmount={statementAmount}
            />
          );
        })}
      </div>
    </div>
  );
};

export default HistoryList;
