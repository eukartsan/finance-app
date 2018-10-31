import React from 'react';

export default class Transfer extends React.Component {
  constructor() {
      super()

      this.state = {
        menuTransfer: false
      }

      }

    openTransferMenu = () => {
        this.setState(({menuTransfer}) => ({menuTransfer: !menuTransfer}));
    }

  render() {
    const {accountsList} = this.props;
    const {menuTransfer} = this.state;
    const scoreFromAccount = accountsList.map((item) => {
            const {accountName, total} = item;

            return (
                <option>{accountName}</option>
            )
        })

    const scoreToAccount = accountsList.map((item) => {
            const {accountName, total} = item;

            return (
                <option>{accountName}</option>
            )
        })

    const transferList = menuTransfer && <div>
      <form>
        <div className="transaction-amount mb-8">
          <label>From Score:</label>
          <select>
            {scoreFromAccount}
          </select>
          <label>To Score:</label>
          <select>
            {scoreToAccount}
          </select>
          <label>Amount:</label>
          <input placeholder="Amount"/>
          <div className="transaction-buttons">
            <button>Transfer</button>
          </div>
        </div>
      </form>
    </div>

        return(
          <div className="operation-list list-group-item">
            <h3>Transfer to another account: </h3>
            <button onClick={this.openTransferMenu}>{menuTransfer ? 'Close' : 'Open'}</button>
            {transferList}
          </div>
        )

}
}
