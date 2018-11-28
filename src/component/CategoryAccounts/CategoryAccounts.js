import React from 'react';
import './CategoryAccounts.css';

export default class CategoryAccounts extends React.Component {

    selectCategory = (event) => {
        this.props.setCategory(event)
    }

    render() {
        const { categories, isIncomeChecked} = this.props
        const categoriesList = categories
            .filter((item) => item.income === isIncomeChecked)
            .map((item) => {
                const { categoryName } = item;

                return (
                    <option
                        key={item.id}>
                        {categoryName}
                    </option>)
            })

        return (
            <div>
                <select
                    onChange={this.selectCategory}
                    ref={elem => this.setCategory = elem}
                    className="select-item">
                    {categoriesList}
                </select>
            </div>)
    }
}
