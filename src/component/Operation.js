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
    <input placeholder="Amount"/>
  );
};

const Profit = () =>{
  return (
    <div className="btn">
      <button onClick={funcPlus}>Income (+)</button>
    </div>
  );
};

function funcPlus(){
  console.log('+');
}

const Costs = () =>{
  return (
    <div className="btn">
    <button onClick={funcMinus}>Expense (-)</button>
    </div>
  );
};

function funcMinus(){
  console.log('-');
}
