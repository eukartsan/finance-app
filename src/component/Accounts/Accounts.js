import React, {Fragment} from 'react';

import './Accounts.css';

export default class Accounts extends React.Component {
    constructor() {
        super()

        this.state = {
            accountName: '',
            isArchived: false
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

        //onDeleted(id);

        this.setState(prevState => (
          {isArchived: !prevState.isArchived}

        )
      )}

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

        const account = accountsList
            .filter((item) => item.isArchived === false)
            .map((item) => {
            const {id, accountName: accountItemName, active} = item;

            return (
                <li key={id} className="account-list list-group-item">
                    {active
                        ?
                        <label className="account-items">
                            <input
                                name="accountName"
                                type="text"
                                value={accountItemName}
                                onChange={this.editAccountName(id)}
                                className="input-name account-items-name"
                            />
                            <button
                                onClick={this.setActive(id)}
                                className="account-buttons"
                            >
                                Exit
                            </button>
                            <button
                                onClick={this.deleteAccount(id)}
                                className="account-buttons"
                            >
                                Delete
                            </button>
                        </label>
                        : <div className="account-items">
                          <div className="account-items-name">
                            {accountItemName}
                          </div>
                          <button className="account-buttons" onClick={this.setActive(id)}>Edit</button>
                          <button className="account-buttons" onClick={this.deleteAccount(id)}>Delete</button>
                        </div>
                    }
                </li>
            );
        });

        return (
            <Fragment>
              <div className="app-header">
              <h1>Income and expense accounting application</h1>
              <h3>Balance</h3>
                  <div>
                      <form onSubmit={this.addAccountName}>
                          <label>
                              <span>Account name: </span>
                              <input name="newAccountName" type="text" value={accountName} onChange={this.handleChange}/>
                          </label>
                          <input type="submit" value="Submit"/>
                          <button onClick={this.accountsArchive}>Archive</button>
                      </form>

                  </div>
                  <ul className="list-group-item">
                      {account}
                  </ul>
                </div>
            </Fragment>
        );
    };
};
