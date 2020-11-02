import React from 'react';
import ReactDOM from 'react-dom';
import { Page, Button, Toolbar } from 'react-onsenui';
import { notification } from 'onsenui';

import Item from './Item.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.countUp = this.countUp.bind(this);
    this.countClear = this.countClear.bind(this);
  }

  renderToolbar() {
    return (
      <Toolbar>
        <div className='center'>Onsen UI</div>
      </Toolbar>
    );
  }
  countUp(value) {
    if (this.state.count.toString().length >= 9)
      notification.alert("９桁以上だと入力できない旨のアラートを表示する");
    else
      this.setState({ count: this.state.count * 10 + value });
  }
  countClear() {
    this.setState({ count: 0 });
  }

  render() {
    return (
      <Page renderToolbar={this.renderToolbar}>
        <div>Hello World!</div>
        <div>クリックされた回数={this.state.count}</div>
        <p>
          <Button onClick={() => this.countUp(0)}>0</Button>
          <Button onClick={() => this.countUp(1)}>1</Button>
          <Button onClick={() => this.countUp(2)}>2</Button>
          <Button onClick={() => this.countUp(3)}>3</Button>
          <Button onClick={() => this.countUp(4)}>4</Button>
          <Button onClick={() => this.countUp(5)}>5</Button>
          <Button onClick={() => this.countUp(6)}>6</Button>
          <Button onClick={() => this.countUp(7)}>7</Button>
          <Button onClick={() => this.countUp(8)}>8</Button>
          <Button onClick={() => this.countUp(9)}>9</Button>
          <Button onClick={this.countClear}>C</Button>
        </p>
      </Page>
    );
  }

}