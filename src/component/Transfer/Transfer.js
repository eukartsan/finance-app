import React from 'react';

export default class Transfer extends React.Component {

  render() {
    const {categories} = this.props;

        return(
          <div className="operation-list list-group-item">
            <h3>Transfer to another account: </h3>
            <form>
              <div className="transaction-amount mb-8">
                <label>From Score:</label>
                <select>
                  <option>Score 1</option>
                  <option>Score 2</option>
                </select>
                <label>To Score:</label>
                <select>
                  <option>Score 1</option>
                  <option>Score 2</option>
                </select>
                <label>Amount:</label>
                <input placeholder="Amount"/>
                <div>
                  <button>Transfer</button>
                </div>
              </div>
            </form>
          </div>
        )

}
}
