import React, {Fragment} from 'react';

import AccountsNum from './AccountsNum';
import './Accounts.css';

export default class Accounts extends React.Component {
    constructor() {
        super()

        this.state = {
            accountName: ''
        };
    }

    addAccountName = (event) => {
        const {addAccount} = this.props,
            {accountName} = this.state;
        event.preventDefault();
        addAccount(accountName)
        this.setState({
            accountName: ''
        })
    }

    handleChange = (event) => {
        this.setState({
            accountName: event.target.value
        });
    }

    deleteAccount = (id) => (event) => {
        event.preventDefault();
        const {onDeleted} = this.props
        onDeleted(id);
    }

    editAccountName = (id) => (event) => {
        const {editAccountName} = this.props;
        editAccountName(event.target.value, id)
    }

    setActive = (id) => (event) => {
        const {setAccountActive} = this.props;
        event.preventDefault();
        setAccountActive(id);
    }

    render() {
        const {accountsList} = this.props,
            {accountName} = this.state

        const account = accountsList.map((item) => {
            const {id, accountName: accountItemName, total, active} = item;

            return (
                <li key={id} className="account-list list-group-item">
                    {active
                        ?
                        <label>
                            <input
                                name="accountName"
                                type="text"
                                value={accountItemName}
                                onChange={this.editAccountName(id)}
                            />: {total} UAH
                            <button
                                className="d-flex float-right"
                                onClick={this.setActive(id)}
                            >
                                Exit
                            </button>
                            <button
                                className="d-flex float-right"
                                onClick={this.deleteAccount(id)}
                            >
                                Delete
                            </button>
                        </label>
                        : <span>
                        {accountItemName} : {total} UAH
                        <button className="d-flex float-right" onClick={this.setActive(id)}>Edit</button>
                        <button className="d-flex float-right" onClick={this.deleteAccount(id)}>Delete</button>
                    </span>
                    }

                </li>
            );
        });

        return (
            <Fragment>
                <div>
                    <form onSubmit={this.addAccountName}>
                        <label>
                            Account name:
                            <input name="newAccountName" type="text" value={accountName} onChange={this.handleChange}/>
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
