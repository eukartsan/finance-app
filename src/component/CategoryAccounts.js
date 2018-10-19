import React from 'react';
import './CategoryAccounts.css';

export default class CategotyAccounts extends React.Component{
render(){

    return(
      <div>
        <div className="category-container">
          <select size="3">
            <option>Categoty 1</option>
            <option>Categoty 2</option>
            <option>Categoty 3</option>
          </select>
        </div>
        <div>
            <input type="text"/>
        </div>
        <div>
          <button >Add Category</button>
        </div>
      </div>
      )
  }
}
