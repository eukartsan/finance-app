import React from 'react';
import './HistoryTransactions.css';

export default class HistoryTransactions extends React.Component {
  constructor() {
      super()

        this.state = {
          menuOpen: false
        }
      }

      HistoryMenuOpen = () => {
        this.setState(prevState => ({
          menuOpen: !prevState.menuOpen
        }));
      }

    render() {
        const {transactions, accountsList} = this.props;

        const transactionList = this.state.menuOpen && transactions.map((transaction) => {
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
                <button onClick={this.HistoryMenuOpen}>
                  {this.state.menuOpen ? 'Open' : 'Close'}
                </button>
                {transactionList}
            </div>
        )
    }
}
