import React from 'react';

export default class NewCategory extends React.Component {
  constructor() {
      super()

        this.state = {
          newIsIncomeChecked: false,
          menuOpen: true
        }
      }

  newIncomeChange = () => {
    this.setState({newIsIncomeChecked: !this.state.newIsIncomeChecked});
  }

  addNewCategory = (label, income) => {
    this.setState((prevState) => {
        const categoriesNew = {
            label,
            income
        }

        return {
            categories: [...prevState.categories, categoriesNew]
        };
    })
  }

  categoryMenuOpen = () => {
    this.setState(prevState => ({
      menuOpen: !prevState.menuOpen
    }));
  }

  render() {
    const {categories} = this.props;
    const {menuOpen} = this.state;

    const newCategoryMenu = menuOpen => {
      return (
        <div>
        <input placeholder="Category" />
          <input type="checkbox"
                 id="income"
                 name="transaction"
                 value="income"
                 onChange={this.newIncomeChange}
                 />
          <label htmlFor="income" className="label label-checkbox"> Is income?</label>
                    <button onChange={this.addNewCategory}>Save</button>
          </div>
      )
    }

    return(
      <div className="operation-list list-group-item">
        <h3>Create new category: </h3>
        <form className="transaction-amount mb-8">
          <label>Enter new category:</label>
          <button onClick={this.categoryMenuOpen}>
            {menuOpen ? 'Close' : 'Open'}
          </button>
            {newCategoryMenu}
          </form>
      </div>
    )
  }
}
