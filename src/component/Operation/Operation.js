import React from 'react';
import HistoryTransactions from '../HistoryTransactions/HistoryTransactions';
import CategoryAccounts from '../CategoryAccounts/CategoryAccounts';
import './Operation.css';

export default class Operation extends React.Component {
    constructor() {
        super()

        this.state = {
            amount: '',
            accountId: null,
            categoryName: '',
            commentValue: '',
            isChecked: false
        }
    }

    /*componentDidMount() {
        this.selectElem.value = null
    }*/

    addIncome = () => {
        const dateTime = Date(Date.now());
        const {amount, accountId, commentValue} = this.state;
        this.props.onSelectAccount(amount, accountId, dateTime, commentValue);
        this.selectElem.value = null
        this.setState({
            amount: '',
            accountId: null,
            commentValue: ''
        })
        console.log(amount, accountId, dateTime, commentValue, 'amount, accountId, dateTime, commentValue')
    }

    amountOnRegular = () => {
        const {amount} = this.state;
        const reg = /[.^0-9.,]/g;
        const found = amount.match(reg);
        console.log(found, 'found')
    }

    addExpense = () => {
        const dateTime = Date(Date.now());
        const {amount, accountId, commentValue} = this.state;
        this.props.onSelectAccount(amount, accountId, dateTime, commentValue);
        this.selectElem.value = null
        this.setState({
            amount: '',
            accountId: null
        })
    }

    setAccountValue = (event) => {
        this.setState({
            accountId: event.target.options[event.target.selectedIndex].dataset.id
        })
    }

    accountsList() {
        const {accountsList} = this.props;
        const accountsName = accountsList.map((account) => {
            const {accountName, id} = account;
            return (
                <option key={id} data-id={id}>
                    {accountName}
                </option>
            )
        })

        return (
            <select
                className="select-item"
                onChange={this.setAccountValue}
                ref={elem => this.selectElem = elem}
            >
                {accountsName}
            </select>
        )
    }

    changeAmount = (event) => {
        this.setState({
            amount: event.target.value
        })
    }

    addComment = (event) => {
        this.setState({
            commentValue: event.target.value
        })
    }

    setCategoryValue = (event) => {
        this.setState({
            label: event.target.value
        })
    }

    incomeChange = () => {
      this.setState({isChecked: !this.state.isChecked});
    }

    transactionMenuOpen = () => {
      this.setState(prevState => ({
        isToggleOpen: !prevState.isToggleOpen
      }));
    }

    render() {
        const {categories} = this.props;
        const {amount, accountId, commentValue, categoryName, isToggleOpen} = this.state;

        const accountMenu = isToggleOpen && <div>
        <div className="transaction-amount mb-8">
            <label className="label">Select Score:</label>
            <div className="operation-item accountsList">
                {this.accountsList()}
            </div>
        </div>
        <div className="transaction-checkbox mb-8">
            <input type="checkbox"
                   id="income"
                   name="transaction"
                   value="income"
                   onChange={this.incomeChange}
            />
            <label htmlFor="income" className="label label-checkbox"> Is income?</label>
            <div>{this.state.isChecked ? 'checked' : 'unchecked'}</div>
        </div>
        <div className="transaction-amount mb-8">
            <label>Select Category:</label>
            <CategoryAccounts
                categories={categories}
                setCategoryValue={this.setCategoryValue}
            />
        </div>
        <div className="transaction-amount mb-8">
            <label>Enter Amount:</label>
            <input
                className="amount-label"
                placeholder="Amount"
                value={amount}
                onChange={this.changeAmount}/>
        </div>
        <div>
                <textarea
                    className="comment-value"
                    placeholder="Comment"
                    rows="3"
                    value={commentValue}
                    onChange={this.addComment}></textarea>
        </div>
        <div className="transaction-buttons">
            <div>
                <button onClick={this.addIncome}>Save</button>
            </div>
            <div>
                <button>Cancel</button>
            </div>
        </div>
        </div>
        return (

            <div className="operation-list list-group-item">
                <h3>Account transactions: </h3>
                <button onClick={this.transactionMenuOpen}>
                  {this.state.isToggleOpen ? 'Close' : 'Open'}
                </button>
                {accountMenu}
            </div>
        )
    }
}
