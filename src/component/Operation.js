import React from 'react';

export default class Operation extends React.Component {
  render(){
      return (
        <div>
          <OperationAccounts />
          <Profit />
          <Costs />
        </div>
      )};
};

const OperationAccounts = () =>{
  return (
    <input placeholder="Сумма"/>
  );
};

const Profit = () =>{
  return (
    <div className="btn">
      <button type="button">Доход</button>
    </div>
  );
};

const Costs = () =>{
  return (
    <div className="btn">
    <button type="button">Расход</button>
    </div>
  );
};
