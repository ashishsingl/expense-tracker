import React, { useContext } from 'react'
import './transactionButton.css'
import { StatementList } from '../App'
import { SetStatementList } from '../App'
import { useHistory } from 'react-router-dom'

const AddStatementButton = ({currStatement, setInvalidInput}) => {

    const history = useHistory();

    console.log('message from addStatementButton and this is our current statement', currStatement)

    //getting main hook from app.js which is statement list
    let statementList = useContext(StatementList)
    let setStatementList = useContext(SetStatementList)

    // insert new statement into statement list
    const insertData = () =>{
        const {statementText,statementAmount} = currStatement;

        //Form validation
        if(statementText !== null && statementAmount !== null && statementText.length>2 && statementAmount>0){

            setStatementList([...statementList,currStatement])
            history.push("/")
        }
        else{
            setInvalidInput(true);
            setTimeout(() => {
                setInvalidInput(false);
            }, 4000);
            console.log('transaction does not add')
        }
        
    }

    return (
        <div>
            <button className="transaction__btn" onClick={insertData}>Push Transaction</button>
        </div>
    )
}

export default AddStatementButton;
