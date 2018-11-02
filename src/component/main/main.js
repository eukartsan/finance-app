import React from 'react';
import Operation from '../Operation/Operation';
import Accounts from '../Accounts/Accounts';
import NewCategory from '../NewCategory/NewCategory';
import uuidv4 from 'uuid/v4';
import HistoryTransactions from "../HistoryTransactions/HistoryTransactions";
import './main.css';

export default class App extends React.Component {
    constructor() {
        super()

        this.state = {
            accounts: [
                {id: 'f19947e9-0638-4080-9706-900c8fd01c9d', accountName: 'Mastercard 1', active: false, isArchived: false},
                {id: uuidv4(), accountName: 'Visa 2', active: false, isArchived: false},
                {id: uuidv4(), accountName: 'Card 3', active: false, isArchived: false},
            ],
            transactions: [
                {
                    accountName: 'Mastercard 1',
                    datetime: '20-12-83',
                    amount: 100.12,
                    isIncome: false,
                    comment: 'my first income',
                    categoryName: 'Visa 2'
                },
            ],
            transactionMenu: [
              {
                accountName: 'Account name',
                amount: 'Amount',
                comment: 'Comment',
                datetime: 'Date',
                category: 'Category',
                income: 'Income or expense'
              },
            ],
            categories: [
                {id: uuidv4(), categoryName: ' ', income: true},
                {id: uuidv4(), categoryName: ' ', income: false},
                {id: 'f19947e9-0638-4080-9706-900c8fd01c99', categoryName: 'CatInCome1', income: true},
                {id: uuidv4(), categoryName: 'CatInCome2', income: true},
                {id: uuidv4(), categoryName: 'CatInCome3', income: false}
            ],

        }
    }

    addAccount = (accountName) => {
        this.setState((prevState) => {
            const accountObj = {
                accountName,
                id: uuidv4(),
                active: false,
                isArchived: false
            }

            return {
                accounts: [...prevState.accounts, accountObj]
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
        const prevAccount = accountsCopy.find(prevAccount => prevAccount.id === id);
        prevAccount.accountName = accountName;

        this.setState({
            accounts: accountsCopy
        })
    }

    setAccountActive = (id) => {
        const accountsCopy = [...this.state.accounts];
        const prevAccount = accountsCopy.find(prevAccount => prevAccount.id === id);
        console.log(prevAccount, 'prevAccount')
        prevAccount.active = !prevAccount.active;

        this.setState({
            accounts: accountsCopy
        })
    }

    //this.props.onSelectAccount(amount, dateTime, comment, isIncomeChecked, categoryName, accountName
    addTransaction = (amount, datetime, comment, isIncome, categoryName, accountName) => {
        this.setState((prevState) => {
            const transactionsIncome = {
                accountName,
                datetime,
                amount,
                isIncome,
                comment,
                categoryName
            }

            return {
                transactions: [...prevState.transactions, transactionsIncome]
            };
        })
    }

    render() {
        const {accounts, transactions, categories, transactionMenu} = this.state;

        return (
            <div>
                <Accounts
                    accountsList={accounts}
                    addAccount={this.addAccount}
                    onDeleted={this.deleteItem}
                    editAccountName={this.editAccount}
                    setAccountActive={this.setAccountActive}
                />
                <div className="main-items-list">
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
                    />
                  </div>
                  <div>
                    <HistoryTransactions
                        transactions={transactions}
                        accountsList={accounts}
                        transactionMenu={transactionMenu}
                        categories={categories}
                    />
                  </div>
                </div>
            </div>
        );
    }

}
