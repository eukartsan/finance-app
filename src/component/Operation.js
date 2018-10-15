import React from 'react';

export default class Operation extends React.Component {
  constructor() {
      super()

      this.state = {
        amount: '',
        accountId: null
      }
  }

  componentDidMount() {
      this.selectElem.value = null
  }

  addIncome = () => {
    const dateTime = Date(Date.now());
    const {amount, accountId} = this.state;
    this.props.onSelectAccount(amount, accountId, dateTime);
    this.selectElem.value = null
    this.setState({
      amount: '',
      accountId: null
    })
  }

  addExpense = () => {
    const dateTime = Date(Date.now());
    const {amount, accountId} = this.state;
    this.props.onSelectAccount(amount, accountId);
    this.selectElem.value = null
    this.setState({
      amount: '',
      accountId: null
    })
  }



    selectAccount = (event) => {
      this.setState({
        accountId: event.target.options[event.target.selectedIndex].dataset.id
      })
    }

    accountsList() {
        const {accountsList} = this.props;
        const accountsName = accountsList.map((account) => {
            const {accountName, id} = account;
            return (
                <option key={id} data-id={id} >
                    {accountName}
                </option>
            )
        })

        return (
            <select
            onChange={this.selectAccount}
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

    render() {
      const {amount, accountId} = this.state;
        return (
            <div>
                {this.accountsList()}
                <input placeholder="Amount" value={amount} onChange={this.changeAmount}/>
                <div className="btn">
                    <button onClick={this.addIncome} disabled={amount === '' || accountId === null}>Income (+)</button>
                </div>
                <div className="btn">
                    <button onClick={this.addExpense} disabled={amount === '' || accountId === null}>Expense (-)</button>
                </div>
            </div>
        )
    };
};
