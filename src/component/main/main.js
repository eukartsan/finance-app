import React from 'react';
import Operation from '../Operation/Operation';
import Accounts from '../Accounts/Accounts';
import uuidv4 from 'uuid/v4';
import HistoryTransactions from "../HistoryTransactions/HistoryTransactions";

export default class App extends React.Component {
    constructor() {
        super()

        this.state = {
            accounts: [
                {id: 'f19947e9-0638-4080-9706-900c8fd01c9d', accountName: 'Score 1', total: '0', active: false, isArchived: false},
                {id: uuidv4(), accountName: 'Score 2', total: '20', active: false, isArchived: false},
                {id: uuidv4(), accountName: 'Score 3', total: '100', active: false, isArchived: false},
            ],
            transactions: [
                {
                    account_id: 'f19947e9-0638-4080-9706-900c8fd01c9d',
                    datetime: '20-12-83',
                    amount: 100.12,
                    isIncome: false,
                    comment: 'my first income'
                },
            ],
            transactionMenu: [
              {
                score: 'Score',
                amount: 'Amount',
                comment: 'Comment',
                datetime: 'DateTime',
                category: 'Category',
                income: 'Income'
              },
            ],
            categories: [
                {id: 1, label: ' ', income: true},
                {id: 2, label: ' ', income: false},
                {id: 3, label: 'CatInCome1', income: true},
                {id: 4, label: 'CatInCome2', income: true},
                {id: 5, label: 'CatInCome3', income: false}
            ],

        }
    }

    addAccount = (accountName) => {
        this.setState((prevState) => {
            const accountObj = {
                accountName,
                total: '0',
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

    selectAccount = (amount, accountId, dateTime, commentValue, isIncome) => {
        this.setState((prevState) => {
            const transactionsIncome = {
                account_id: accountId,
                amount,
                isIncome,
                datetime: dateTime,
                comment: commentValue
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
                <Operation
                    accountsList={accounts}
                    onSelectAccount={this.selectAccount}
                    transactions={transactions}
                    categories={categories}
                />
                <HistoryTransactions
                    transactions={transactions}
                    accountsList={accounts}
                    transactionMenu={transactionMenu}
                />
            </div>
        );
    }

}
