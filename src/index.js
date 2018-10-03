import React from 'react';
import ReactDOM from 'react-dom';

import Operation from './component/Operation';
import Accounts from './component/Accounts';
import './index.css';

const App = () => {
  const Accoun = [
    {label: 'Счет 1', total: '0', id: 1},
    {label: 'Счет 2', total: '20', id: 2},
    {label: 'Счет 3', total: '100', id: 3}
  ];

  return (
    <div className="app-header">
      <h1>Приложение для учета расходов/доходов</h1>
      <h3>Баланс</h3>
      <Accounts Acco={Accoun}/>
        <h3>Операции со счетом: </h3>
        <Operation/>
    </div>
  );
};


ReactDOM.render(<App />, document.getElementById('root'));
