import React from 'react';
import './CategoryAccounts.css';

export default class CategotyAccounts extends React.Component{
constructor() {
      super()

      this.state = {
        CategoryValue: ''
      }
  }

render(){
const {CategoryValue} = this.state;

const categories = CategoryValue.map((item) => {
    const {label} = item;

    return(
      <div>
        <div>
        <select size="3">
          <option>Categoty 1</option>
          <option>Categoty 2</option>
          <option>Categoty 3</option>
          {label}
        </select>
        </div>
        <div>
            <input type="text" placeholder="New Category" value={CategoryValue}/>
        </div>
        <div>
          <button className="btn" onClick={this.addCategory}>Add Category</button>
        </div>
      </div>
    )}
  }
}
