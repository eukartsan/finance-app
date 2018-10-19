import React from 'react';
import './HistoryTransactions.css';

export default class HistoryTransactions extends React.Component{
render(){
  const {amount, accountId, commentValue} = this.props
    return(
        <div className="transanctions-container">
        <div className="transaction-item">
            {accountId}
        </div>
          <div className="transaction-item">
              {amount}
          </div>
          <div className="transaction-item">
              {commentValue}
          </div>
        </div>
      )
  }
}
