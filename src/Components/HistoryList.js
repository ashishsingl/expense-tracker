import React from "react";
import './historyList.css';
import HistoryItem from './HistoryItem'

const HistoryList = () =>{
    return (
        <div className="historyList__container">
            <p className="historyList__heading">History</p>
            <div className="historyList__itemContainer">
                <HistoryItem expenseType="income" />
                <HistoryItem expenseType="expense" />
                <HistoryItem expenseType="expense" />
            </div>
        </div>
    )
}

export default HistoryList;