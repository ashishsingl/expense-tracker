import React , {useContext} from "react";
import './balance.css'
import { StatementList } from "../App";

const Balance = () =>{
    const statementList = useContext(StatementList);

    let totalBalance = 0
    if(statementList.length > 0){
        statementList.map((valueObj) =>{
            if(valueObj.entryType === "income"){
                totalBalance = totalBalance + parseInt(valueObj.statementAmount)
            }
            else if (valueObj.entryType === "expense"){
                totalBalance = totalBalance - parseInt(valueObj.statementAmount)
            }
        })
    }
    
    return (
        <div className="balance__container">
            <p className="balance__heading">Your Balance</p>
            <p className="balance__number">₹ {totalBalance}</p>
        </div>
    )
}

export default Balance;

