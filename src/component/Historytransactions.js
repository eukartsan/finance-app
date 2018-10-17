import React from 'react';

const Historytransactions = (props) => {

      return (
          <div>
          <tr>
              <td>{props.amount}</td>
          </tr>
            <tr>
              <td>{props.accountId}</td>
          </tr>
          </div>
      )
  }

export default Historytransactions;
