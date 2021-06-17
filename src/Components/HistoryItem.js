import React from 'react'
import './historyItem.css'

const HistoryItem = ({expenseType}) => {

    let cssObj ;

    // Checking expenses and income
    if(expenseType==="income"){
        cssObj = {borderRight : "8px solid rgb(7, 156, 7)"}
    }
    if(expenseType==="expense"){
       cssObj = {borderRight : "8px solid red"}
    }
    
    return (
        <div className="historyItem__container" style={cssObj} >
            <div className="historyItem__left">
                Cash
            </div>
            <div className="historyItem__right">
                +$500
            </div>
        </div>
    )
}

export default HistoryItem;
