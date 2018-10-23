import React from 'react';
import './HistoryTransactions.css';

export default class HistoryTransactions extends React.Component {
  constructor() {
      super()

        this.state = {
          menuOpen: false
        }
      }

      historyMenuOpen = () => {
        this.setState(prevState => ({
          menuOpen: !prevState.menuOpen
        }));
      }

    render() {
        const {transactions, accountsList} = this.props;
        const {menuOpen} = this.state;

        const transactionHeader = (transactions.map((transaction) => {
          return (
            <div className="transanctions-container">
                <div className="transaction-item">
                    <p>Score Name:</p>
                </div>
                <div className="transaction-item">
                    <p>Amount:</p>
                </div>
                <div className="transaction-item">
                    <p>Commentaty:</p>
                </div>
                <div className="transaction-item">
                  <p>Date Time:</p>
                </div>
                <div className="transaction-item">
                    <p>Income or Expence:</p>
                </div>
            </div>
          )
        }

        const transactionList = menuOpen && transactions.map((transaction) => {
                const {amount, account_id, comment: commentValue, datetime, isIncome} = transaction;
                const newAccount = accountsList.find(el => el.id === account_id);

                return (
                    <div className="transanctions-container">
                        <div className="transaction-item">
                            {newAccount.accountName}
                        </div>
                        <div className="transaction-item">
                            {amount}
                        </div>
                        <div className="transaction-item">
                            {commentValue}
                        </div>
                        <div className="transaction-item">
                            {datetime}
                        </div>
                        <div className="transaction-item">
                            {isIncome ? 'Income' : 'Expence'}
                        </div>
                    </div>
                )
            }
        )

        return (
            <div>
                <h2>History Transaction:</h2>
                <button onClick={this.historyMenuOpen}>
                  {this.state.menuOpen ? 'Close' : 'Open'}
                </button>
                {transactionHeader}
                {transactionList}
            </div>
        )
    }
}
