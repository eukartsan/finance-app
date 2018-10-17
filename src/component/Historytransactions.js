import React from 'react';

export default class Historytransactions extends React.Component {
  constructor() {
      super()

      this.state = {
        amount: '',
        accountId: null,
        commentValue: '',
        accountName: ''
      }
  }

  transactions() {
    const {accountsList} = this.props;
    const accountName = accountsList.map((account) => {
        const {accountName, id} = account;
          return (
              <td>
              {accountName}
              </td>
          )
      })
}
    render() {


      return (
        <ul>
          <li>{this.transactions()}</li>
        </ul>
      )
    }
  }
