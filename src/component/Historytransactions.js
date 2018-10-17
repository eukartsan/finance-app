import React from 'react';
import './Historytransactions.css';


const Historytransactions = (props) => {

      return (
        <div className="tableContainer">
        <div className="tableElement">
            {props.accountId}
        </div>
          <div className="tableElement">
              {props.amount}
          </div>
          <div className="tableElement">
              {props.commentValue}
          </div>
        </div>
      )
  }

export default Historytransactions;
