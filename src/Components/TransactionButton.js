import React from 'react'
import './transactionButton.css'
import {Link} from 'react-router-dom'
import Transaction from './Transaction'

const TransactionButton = () => {

    return (
        <div>
            <button className="transaction__btn">
                <Link to="/transaction">Add Transaction</Link>
            </button>
        </div>
    )
}

export default TransactionButton
