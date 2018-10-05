import React from 'react';
import ReactDOM from 'react-dom';

import Operation from './component/Operation';
import Accounts from './component/Accounts';
import Scoretransfer from './component/Scoretransfer';
import './index.css';

const App = () => {
  const Scoreitem = [
    {label: 'Score 1', total: '0', id: 1},
    {label: 'Score 2', total: '20', id: 2},
    {label: 'Score 3', total: '100', id: 3}
  ];

  return (
    <div className="app-header">
      <h1>Income and expense accounting application</h1>
      <h3>Balance</h3>
      <Accounts Scorelist={Scoreitem}/>
        <h3>Account transactions: </h3>
        <Operation/>
        <Scoretransfer />
    </div>
  );
};


ReactDOM.render(<App />, document.getElementById('root'));
