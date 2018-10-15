import React from 'react';

export default class Operation extends React.Component {
  constructor() {
      super()

      this.state = {
        amount: '',
        accountId: null
      }
  }

  addIncome = () => {
    const {amount, accountId} = this.state;
    this.props.onSelectAccount(amount, accountId);
    this.selectElem.value = null
    this.setState({
      amount: '',
      accountId: null
    })
  }

  addExpense = () => {
      console.log('-');
  }

  onSelectAccount = (event) => {
      const searchQuery = event.target.value.toLowerCase();
      this.props.onSelectAccount(searchQuery);
      this.setState({
        searchValue: event.target.value
      });
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
      const {amount} = this.state
        return (
            <div>
                {this.accountsList()}
                <input placeholder="Amount" value={amount} onChange={this.changeAmount}/>
                <div className="btn">
                    <button onClick={this.addIncome}>Income (+)</button>
                </div>
                <div className="btn">
                    <button onClick={this.addExpense}>Expense (-)</button>
                </div>
            </div>
        )
    };
};
