import React from 'react'
import './historyItem.css'

const HistoryItem = ({entryType, statementText, statementAmount}) => {

    let cssObj ;

    // Checking expenses and income
    if(entryType==="income"){
        cssObj = {borderRight : "8px solid rgb(7, 156, 7)"}
    }
    if(entryType==="expense"){
       cssObj = {borderRight : "8px solid red"}
    }
    
    return (
        <div className="historyItem__container" style={cssObj} >
            <div className="historyItem__left">
                {statementText}
            </div>
            <div className="historyItem__right" style={{fontWeight: "550"}}>
                {entryType==="income"?`+ ₹${statementAmount}`:`- ₹${statementAmount}`}
                
            </div>
        </div>
    )
}

export default HistoryItem;
