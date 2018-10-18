import React from 'react';
import './HistoryTransactions.css';

export default class HistoryTransactions extends React.Component{
render() {
      return (

        <div className="transanctions-container">
        <div className="tableElement">
            {this.props.accountId}
        </div>
          <div className="tableElement">
              {this.props.amount}
          </div>
          <div className="tableElement">
              {this.props.commentValue}
          </div>
        </div>
      )
  }
}
