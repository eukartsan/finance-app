import React from 'react';
import './HistoryTransactions.css';

export default class HistoryTransactions extends React.Component{
render(){
  const {amount, accountId, commentValue} = this.props
    return(
        <div className="transanctions-container">
        <div className="tableElement">
            {accountId}
        </div>
          <div className="tableElement">
              {amount}
          </div>
          <div className="tableElement">
              {commentValue}
          </div>
        </div>
      )
  }
}
