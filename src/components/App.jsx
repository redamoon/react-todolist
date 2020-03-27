import React, {Component} from 'react';
import Header from './Header'
import Form from './Form';
import List from './List';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: []
    };
    this.handleAdd = this.handleAdd.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }
  handleAdd(e) {
    e.preventDefault();
    if (e.target.title.value) {
      this.state.todo.push({title: e.target.title.value});
      this.setState({todo: this.state.todo});
      e.target.title.value = '';
    }
  }
  handleRemove(i) {
    this.state.todo.splice(i, 1);
    this.setState({todo: this.state.todo})
  }
  render() {
    return(
      <div className="siimple-jumbotron siimple-jumbotron--extra-large siimple-jumbotron--dark">
        <Header />
        <Form handleAdd={this.handleAdd} />
        <div className="siimple-rule"> </div>
        <List todos={this.state.todo} handleRemove={this.handleRemove} />
      </div>
    )
  }
}
