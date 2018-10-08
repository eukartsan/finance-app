import React, {Fragment} from 'react';

import AccountsNum from './AccountsNum';
import './Accounts.css';

export default class Accounts extends React.Component {
    constructor() {
        super()

        this.state = {
            accountLabel: ''
        };

    }

    addAccountLabel = (event) => {
        const {addAccount} = this.props,
            {accountLabel} = this.state;

        event.preventDefault();

        addAccount(accountLabel)

        this.setState({
            accountLabel: ''
        })
    }

    handleChange = (event) => {
        this.setState({
            accountLabel: event.target.value
        });
    }

    render() {
        const {accountsList} = this.props,
            {accountLabel} = this.state

        const account = accountsList.map((item) => {
            const {id, label, total} = item;

            return (
                <li key={id} className="account-list list-group-item">
                    <span>
                        {label} : {total} UAH
                    </span>
                </li>
            );
        });

        return (
            <Fragment>
                <div>
                    <form onSubmit={this.addAccountLabel}>
                        <label>
                            Account name:
                            <input type="text" value={accountLabel} onChange={this.handleChange}/>
                        </label>
                        <input type="submit" value="Submit"/>
                    </form>
                </div>
                <ul className="list-group ">
                    {account}
                </ul>
            </Fragment>
        );
    };
};
