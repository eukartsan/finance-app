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
          this.setState(({menuOpen}) => ({menuOpen: !menuOpen}));
      }

    render() {
        const {transactions, accountsList, transactionMenu, categories} = this.props;
        const {menuOpen} = this.state;

        const {isIncomeChecked} = this.props;
        const categoriesInArchiv = categories
            .filter((item) => item.isArchived === true)
            .map((item) => {
                const {isArchived} = item;

            })


        const transactionHeaderMenu = menuOpen && transactionMenu.map((transactionMenu) => {
          return (

              <div className="transactions-container">
                  <div className="transaction-block-item">
                  <div className="transaction-item">
                      {transactionMenu.score}
                  </div>
                  <div className="transaction-item">
                      {transactionMenu.amount}
                  </div>
                  <div className="transaction-item">
                      {transactionMenu.comment}
                  </div>
                  <div className="transaction-item">
                      {transactionMenu.datetime}
                  </div>
                  <div className="transaction-item">
                      {transactionMenu.category}
                  </div>
                  <div className="transaction-item">
                      {transactionMenu.income}
                  </div>
                  </div>
              </div>
          )
      })

        const transactionList = menuOpen && transactions.map((transaction) => {
                const {amount, account_id, comment: commentValue, datetime, isIncome, income, id} = transaction;
                const newAccount = accountsList.find(el => el.id === account_id);
                const newCategory = categories.find(el => el.id === id);
                //console.log(newAccount.accountName, 'newAccount.accountName')

                return (
                    <div className="transactions-container">
                      <div className="transaction-block-item">
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
                            {newCategory.label}
                        </div>
                        <div className="transaction-item">
                            {isIncome ? 'Income' : 'Expence'}
                        </div>
                        </div>
                    </div>
                )
            }
        )

        return (
            <div className="transactions-container">
                <h3>History Transaction:</h3>
                <button onClick={this.historyMenuOpen}>
                  {menuOpen ? 'Close' : 'Open'}
                </button>
                {transactionHeaderMenu}
                {transactionList}
            </div>
        )
    }
}
