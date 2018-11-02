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
        this.setState(({menuOpen}) => ({menuOpen: !menuOpen}));
    }

    render() {
        const {transactions, transactionMenu} = this.props;
        const {menuOpen} = this.state;

        const transactionHeaderMenu = menuOpen && transactionMenu.map((transactionMenu) => {
            return (
                <div className="transactions-container">
                    <div className="transaction-block-item">
                        <div className="transaction-item">
                            {transactionMenu.accountName}
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
                const {amount, datetime, comment, isIncome, categoryName, accountName} = transaction;

                return (
                    <div className="transactions-container">
                        <div className="transaction-block-item">
                            <div className="transaction-item">
                                {accountName}
                            </div>
                            <div className="transaction-item">
                                {amount}
                            </div>
                            <div className="transaction-item">
                                {comment}
                            </div>
                            <div className="transaction-item">
                                {datetime}
                            </div>
                            <div className="transaction-item">
                                {categoryName}
                            </div>
                            <div className="transaction-item">
                                {isIncome ? 'Income' : 'Expense'}
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
