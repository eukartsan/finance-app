import React from 'react';

const funcPlus = () => {
    console.log('+');
}

const funcMinus = () => {
    console.log('-');
}

const elemSearch: function(event) {
    const searchQuery = event.target.value.toLowerCase();
    this.props.onelemSearch(searchQuery);
    this.setState({
      searchValue: event.target.value
    });
  },

export default class Operation extends React.Component {
    accountsList() {
        const {accountsList} = this.props;
        const accountsName = accountsList.map((account) => {
            const {accountName, id} = account;


            return (
                <option key={id} onChange={this.elemSearch}>
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
