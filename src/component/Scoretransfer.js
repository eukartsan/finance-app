import React, {Component} from 'react';

export default class Scoretransfer extends Component {
  state = {
    menuOpen: true
  }

  render() {
    const TransferMenu = this.state.menuOpen && <div>
    From <span>Store1</span> to <span>Store2</span> total:
      <div>
      <input placeholder="Total"/>
      </div>
    </div>

    return (
    <div>
      <h2>Score Transfer: </h2>
        <button onClick={this.OpenMenu}>
        {this.state.menuOpen ? 'Close' : 'Open'}
        </button>
      {TransferMenu}
    </div>
    );
  }

  OpenMenu = () => {
    this.setState({
      menuOpen: !this.state.menuOpen
    })
  }
}
