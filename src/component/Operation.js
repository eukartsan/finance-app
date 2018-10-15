import React from 'react';

const funcPlus = () => {
    console.log('+');
}

const funcMinus = () => {
    console.log('-');
}



export default class Operation extends React.Component {
    accountsList() {
        const {accountsList} = this.props;
        const accountsName = accountsList.map((account) => {
            const {accountName, id} = account;
            return (
                <option key={id}>
                    {accountName}
                </option>
            )
        })

        return (
            <select>
                {accountsName}
            </select>
        )
    }

    render() {
        return (
            <div>
                {this.accountsList()}
                <input placeholder="Amount"/>
                <div className="btn">
                    <button onClick={funcPlus}>Income (+)</button>
                </div>
                <div className="btn">
                    <button onClick={funcMinus}>Expense (-)</button>
                </div>
            </div>
        )
    };
};
