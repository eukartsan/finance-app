import React from 'react';

import AccountsNum from './AccountsNum';
import './Accounts.css';

export default class Accounts extends React.Component {
    render(){
      const {Scorelist} = this.props;
      const arrayelem = Scorelist.map((item)=>{
      const {id, ...itemProps} = item;

      return (
        <li key={id} className="account-list list-group-item"><AccountsNum {...itemProps}/></li>
        );
      });

      return (
        <ul className="list-group ">
          {arrayelem}
        </ul>
      );
    };
  };
