import React from 'react';

export default class NewCategory extends React.Component {
  constructor() {
      super()

        this.state = {
          newIsIncomeChecked: false,
          menuCategoryOpen: true,
          categoryName: ''
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
      this.setState(({menuCategoryOpen}) => ({menuCategoryOpen: !menuCategoryOpen}));
  }

  handleChange = (event) => {
      this.setState({
          categoryName: event.target.value
      });
  }

  render() {
    const {categories} = this.props;
    const {menuCategoryOpen, categoryName} = this.state;

    const newCategoryMenu = menuCategoryOpen &&
        <div className="transaction-amount">
          <label>Enter new category:</label>
          <input
            placeholder="Category"
            name="newAccountName"
            type="text"
            value={categoryName}
            onChange={this.handleChange}
            />
          <div>
          <form>
          <input type="checkbox"
                 id="income"
                 name="transaction"
                 value="income"
                 onChange={this.newIncomeChange}
                 />
               <label htmlFor="income" className="label label-checkbox"> Is income?</label>
          </form>
              </div>
            <div className="transaction-buttons">
              <button type="submit" value="Submit" onChange={this.addNewCategory}>Save</button>
            </div>
          </div>

    return(
      <div className="operation-list list-group-item">
        <h3>Create new category: </h3>
        <button onClick={this.categoryMenuOpen}>
          {menuCategoryOpen ? 'Close' : 'Open'}
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
