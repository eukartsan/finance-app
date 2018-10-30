import React from 'react';

export default class Transfer extends React.Component {
  constructor() {
      super()

      this.state = {
        menuTransfer: true
      }

      }

    addTransfer = () => {
        this.setState(({menuTransfer}) => ({menuTransfer: !menuTransfer}));
    }

  render() {
    const {accountsList, menuTransfer} = this.props;
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

        return(
          <div className="operation-list list-group-item">
            <h3>Transfer to another account: </h3>
            <button>{menuTransfer ? 'Close' : 'Open'}</button>
            <div>
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
                  <div>
                    <button>Transfer</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        )

}
}
