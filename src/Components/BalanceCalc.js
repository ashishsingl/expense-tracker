import React from "react";
import './balanceCalc.css'

const BalanceCalc = () =>{
    return (
        <div className="balanceCalc__container">
            <div className="balanceCalc__left">
                <p className="balanceCalc__income">Income</p>
                <p className="balanceCalc__incomeNumber">$500.00</p>
            </div>
            <div className="balanceCalc__right">
                <p className="balanceCalc__expense">Expense</p>
                <p className="balanceCalc__expenseNumber">$250.00</p>
            </div>
        </div>
    )
}

export default BalanceCalc;