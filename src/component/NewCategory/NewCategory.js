import React from 'react';

export default class NewCategory extends React.Component {
  constructor() {
      super()

        this.state = {
          newIsIncomeChecked: false
        }
      }

  newIncomeChange = () => {
    this.setState({newIsIncomeChecked: !this.state.newIsIncomeChecked});
  }

  addNewCategory = (amount, income) => {
    this.setState((prevState) => {
        const categoriesNew = {
            amount,
            income
        }

        return {
            categories: [...prevState.categories, categoriesNew]
        };
    })
  }

  render() {
    const {categories} = this.props;

    return(
      <div className="operation-list list-group-item">
        <h3>Create new category: </h3>
        <form className="transaction-amount mb-8">
          <label>Enter new category:</label>
          <input placeholder="Category" />
          <div>
            <input type="checkbox"
                   id="income"
                   name="transaction"
                   value="income"
                   onChange={this.newIncomeChange}
                   />
            <label htmlFor="income" className="label label-checkbox"> Is income?</label>
            </div>
        </form>
        <button onChange={this.addNewCategory}>Save</button>
      </div>
    )
  }
}
