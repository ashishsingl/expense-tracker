import React, { useContext } from "react";
import './balanceCalc.css'
import { StatementList } from "../App";

const BalanceCalc = () => {

    // grabbing statementList from provider
    const statementList = useContext(StatementList);

    // console.log("statementList updated msg generated from balanceCalc")

    let totalIncome = 0, totalExpense = 0;
    if (statementList.length > 0) {
        // console.log('here working...')
        statementList.map((valueObj) => {
            if (valueObj.entryType === "income") {
                totalIncome = totalIncome + parseInt(valueObj.statementAmount)
            }
            else if (valueObj.entryType === "expense") {
                totalExpense = totalExpense + parseInt(valueObj.statementAmount)
            }
        })
    }



    return (
        <div className="balanceCalc__container">
            <div className="balanceCalc__left">
                <p className="balanceCalc__income">Income</p>
                <p className="balanceCalc__incomeNumber">₹ {totalIncome}</p>
            </div>
            <div className="balanceCalc__right">
                <p className="balanceCalc__expense">Expense</p>
                <p className="balanceCalc__expenseNumber">₹ {totalExpense}</p>
            </div>
        </div>
    )
}

export default BalanceCalc;