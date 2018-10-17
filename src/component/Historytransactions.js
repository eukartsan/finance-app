import React from 'react';

const Historytransactions = (props) => {
  const content = props.posts.map((post) =>
      <div key={post.id}>
        <post.amont>
      </div>
    );
      return (
          <div>
          <tr>
              <td>{props.amount}</td>
              <td>{props.accountId}</td>
              {content}
          </tr>
          </div>
      )
  }

export default Historytransactions;
