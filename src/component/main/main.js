import React from 'react';
import Operation from '../Operation';
import Accounts from '../Accounts';
import './main.css';
import uuidv4 from 'uuid/v4';

export default class App extends React.Component {
    constructor() {
        super()

        this.state = {
            accounts: [
                {accountName: 'Score 1', total: '0', id: uuidv4(), active: false},
                {accountName: 'Score 2', total: '20', id: uuidv4(), active: false},
                {accountName: 'Score 3', total: '100', id: uuidv4(), active: false},
            ],
            transactions: [
                {
                    datetime: '20.12.32',
                    amount: 100.12,
                    account_id: 'f19947e9-0638-4080-9706-900c8fd01c9d',
                    isIncome: false,
                    comment: 'my first income'
                },
            ]
        }
    }

    addAccount = (accountName) => {
        this.setState((prevState) => {
            const accountObj = {
                accountName,
                total: '0',
                id: uuidv4(),
                active: false,
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

    selectAccount = (amount, accountId, dateTime, commentValue) => {
      this.setState((prevState) => {
        const transactionsIncome = {
          account_id: accountId,
          amount,
          isIncome: true,
          datetime: dateTime,
          comment: commentValue
        }

        return {
          transactions: [...prevState.transactions, transactionsIncome]
        };
      })
    }

    render() {
        const {accounts, transactions} = this.state;

        return (
            <div className="app-header">
                <h1>Income and expense accounting application</h1>
                <h3>Balance</h3>
                <Accounts
                    accountsList={accounts}
                    addAccount={this.addAccount}
                    onDeleted={this.deleteItem}
                    editAccountName={this.editAccount}
                    setAccountActive={this.setAccountActive}
                />
                <h3>Account transactions: </h3>
                <Operation accountsList={accounts}
                onSelectAccount={this.selectAccount}
                transactions={transactions}
                />

            </div>
        );
    }

}
