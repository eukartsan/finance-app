import React from 'react';

export default class AccountsNum extends React.Component {
    render(){
      const {label, total} = this.props;
      return <span>{label} : {total} UAH</span>;
    };
};
