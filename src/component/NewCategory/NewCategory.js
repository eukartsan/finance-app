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

    const newCategoryMenu = menuOpen &&
        <div className="transaction-amount">
          <label>Enter new category:</label>
          <input placeholder="Category" />
          <div><input type="checkbox"
                 id="income"
                 name="transaction"
                 value="income"
                 onChange={this.newIncomeChange}
                 />
              <label htmlFor="income" className="label label-checkbox"> Is income?</label>
              </div>
            <div className="transaction-buttons">
              <button onChange={this.addNewCategory}>Save</button>
            </div>
          </div>

    return(
      <div className="operation-list list-group-item">
        <h3>Create new category: </h3>
        <button onClick={this.categoryMenuOpen}>
          {menuOpen ? 'Close' : 'Open'}
        </button>
        <form className="transaction-amount mb-8">
            <div>
              {newCategoryMenu}
            </div>
          </form>
      </div>
    )
  }
}
