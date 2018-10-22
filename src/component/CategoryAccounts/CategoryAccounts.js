import React from 'react';
import './CategoryAccounts.css';

export default class CategoryAccounts extends React.Component {
    render() {
        const {categories} = this.props;
        const categoriesList = categories.map((item) => {
            const {label} = item;

            return (
                <option>{label}</option>
            )
        })

        return (
            <div>
                <select className="select-item">
                    {categoriesList}
                </select>
            </div>
        )

    }
}
