import React from 'react';
import './HistoryTransactions.css';


export default class HistoryTransactions extends React.Component{
  constructor(props){
    super(props);

  this.state = {
    transactions: props.transactions
  };
}

render(){
      return (

        <div className="transanctions-container">

        {this.state.transactions.map((i, index) => {
          return
          <div className="tableElement">
              {i.amount}
              {i.commentValue}
          </div>
        })}
        </div>
      )
    }

  }
