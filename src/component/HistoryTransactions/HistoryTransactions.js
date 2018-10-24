import React from 'react';
import './HistoryTransactions.css';

export default class HistoryTransactions extends React.Component {
  constructor() {
      super()

        this.state = {
          menuOpen: true
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

        const transactionList = menuOpen && transactions.map((transaction) => {
                const {amount, account_id, comment: commentValue, datetime, isIncome} = transaction;
                const newAccount = accountsList.find(el => el.id === account_id);
                //console.log(newAccount.accountName, 'newAccount.accountName')

                return (
                    <div className="transactions-container">
                        <div className="transaction-item">
                            {newAccount && newAccount.accountName || 'Deleted account'}
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
                  {menuOpen ? 'Close' : 'Open'}
                </button>
                {/*{transactionHeader}*/}
                {transactionList}
            </div>
        )
    }
}
