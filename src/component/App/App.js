import React from 'react';
import Operation from '../Operation/Operation';
import Accounts from '../Accounts/Accounts';
import NewCategory from '../NewCategory/NewCategory';
import uuidv4 from 'uuid/v4';
import HistoryTransactions from "../HistoryTransactions/HistoryTransactions";
import './App.css';

export default class App extends React.Component {
    constructor() {
        super()

        this.state = {
            accounts: [
                { id: 'f19947e9-0638-4080-9706-900c8fd01c9d', accountName: '', active: false },
                { id: uuidv4(), accountName: 'Mastercard 1', active: false },
                { id: uuidv4(), accountName: 'Visa 2', active: false },
                { id: uuidv4(), accountName: 'Card 3', active: false },
            ],
            transactions: [
                {
                    accountName: 'Mastercard 1',
                    datetime: 'Wed Sep 5 2018',
                    amount: 101,
                    isIncome: false,
                    comment: 'my first income',
                    categoryName: 'Visa 2',
                    id: uuidv4(),
                },
            ],
            transactionMenu: [
                {
                    accountName: 'Account name',
                    amount: 'Amount',
                    comment: 'Comment',
                    datetime: 'Date',
                    category: 'Category',
                    income: 'Income or expense',
                    id: uuidv4(),
                },
            ],
            categories: [
                { id: uuidv4(), categoryName: ' ', income: true },
                { id: uuidv4(), categoryName: ' ', income: false },
                { id: 'f19947e9-0638-4080-9706-900c8fd01c99', categoryName: 'CatInCome1', income: true },
                { id: uuidv4(), categoryName: 'CatInCome2', income: true },
                { id: uuidv4(), categoryName: 'CatInCome3', income: false }
            ],
        }
    }

    addAccount = (accountName) => {
        this.setState((prevState) => {
            const accountObj = {
                accountName,
                id: uuidv4(),
                active: false,
            }

            return {
                accounts: [...prevState.accounts, accountObj]
            };
        })
    }

    addCategory = (categoryName, income) => {
        this.setState((prevState) => {
            const categoryObj = {
                categoryName,
                id: uuidv4(),
                income,
            }

            return {
                categories: [...prevState.categories, categoryObj]
            };
        })
    }


    deleteItem = (id) => {
        this.setState((prevState) => {
            return {
                accounts: prevState.accounts.filter(el => el.id !== id)
            };
        })
    }

    editAccount = (accountName, id) => {
        const accountsCopy = [...this.state.accounts];
        const prevAccount = accountsCopy.find(prevAccount => prevAccount.id === id)
        prevAccount.accountName = accountName

        this.setState({
            accounts: accountsCopy
        })
    }

    setAccountActive = (id) => {
        const accountsCopy = [...this.state.accounts];
        const prevAccount = accountsCopy.find(prevAccount => prevAccount.id === id)
        prevAccount.active = !prevAccount.active

        this.setState({
            accounts: accountsCopy
        })
    }

    addTransaction = (amount, datetime, comment, isIncome, categoryName, accountName) => {
        this.setState((prevState) => {
            const transactionsIncome = {
                accountName,
                datetime,
                amount,
                isIncome,
                comment,
                categoryName,
                id: uuidv4(),
            }

            return {
                transactions: [...prevState.transactions, transactionsIncome]
            };
        })
    }

    render() {
        const { accounts, transactions, categories, transactionMenu } = this.state;

        return (
            <div className="main-items-lists">
                <h1 className="main-items-header">Income and expense accounting application</h1>
                <div className="main-items-list">
                    <div>
                        <Accounts
                            accountsList={accounts}
                            addAccount={this.addAccount}
                            onDeleted={this.deleteItem}
                            editAccountName={this.editAccount}
                            setAccountActive={this.setAccountActive}
                        />
                    </div>
                    <div>
                        <Operation
                            accountsList={accounts}
                            onAddTransaction={this.addTransaction}
                            transactions={transactions}
                            categories={categories}
                        />
                    </div>
                    <div>
                        <NewCategory
                            categories={categories}
                            addCategory={this.addCategory}
                        />
                    </div>
                </div>
                <HistoryTransactions
                    transactions={transactions}
                    accountsList={accounts}
                    transactionMenu={transactionMenu}
                    categories={categories}
                />
            </div>
        )
    }
}


