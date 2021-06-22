import React, {useContext} from 'react'
import Header from './Header'
import {StatementList} from '../App'
import HistoryItem from './HistoryItem'
import {Link} from 'react-router-dom'
import './allHistory.css'
import HomeIcon from '@material-ui/icons/Home';

const AllHistory = () => {

    const statementList = useContext(StatementList)
    let tempStatementList = statementList;
    tempStatementList = [...tempStatementList].reverse()

    return (
        <div className="allHistory__container">
                <div className="allHistory__header">
            <p className="allHistory__headerHeading"> All Transaction</p>
            <Link to="/"><HomeIcon /></Link>
            </div>
            <div className="allHistory__listContainer">
             {   
                    tempStatementList.map((valueObj) => {
                    const { entryType, statementText, statementAmount } = valueObj;
                    return (
                        <HistoryItem entryType={entryType} statementText={statementText} statementAmount={statementAmount} />)
                    })
                }
            </div>
            <div className="allHistory__btn">
            <Link to="/">Back to Home</Link>
            </div>

        </div>
    )
}
export default AllHistory
