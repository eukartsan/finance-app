import React from 'react';
import ReactDOM from 'react-dom';

import Operation from './component/Operation';
import Accounts from './component/Accounts';
import Scoretransfer from './component/Scoretransfer';
import './index.css';

export default class App extends React.Component {
    constructor() {
        super()

  this.state = {
    accounts: [
      {label: 'Score 1', total: '0', id: 1},
      {label: 'Score 2', total: '20', id: 2},
      {label: 'Score 3', total: '100', id: 3}
    ]
  }
}

    addAccount = (label) => {
        const {accounts} = this.state;

        let maxId =  Math.max(...accounts.map((account) => account.id), 0),
            accountObj = {
                label,
                total: '0',
                id: this.maxId++,
                active: false
            }

        this.setState({accounts: [...accounts, accountObj]});
    }

    deleteItem = (id) => {
      const {accounts} = this.state;

          this.setState( ({accounts}) => {
            const idx = accounts.findIndex((el) => el.id === id);

            const newArray = [
              ...accounts.slice(0, idx),
              ...accounts.slice(idx + 1)
            ];

            return {
              accounts: newArray
            };
        });
        }


render() {
    const {accounts} = this.state;

    return (
        <div className="app-header">
            <h1>Income and expense accounting application</h1>
            <h3>Balance</h3>
            <Accounts accountsList={accounts} addAccount={this.addAccount} onDeleted={this.deleteItem}/>
            <h3>Account transactions: </h3>
            <Operation/>
            <Scoretransfer/>
        </div>
    );
}

}


ReactDOM.render(<App />, document.getElementById('root'));
