import React, {Component} from 'react';
import Header from './Header'
import Form from './Form';
import List from './List';
import CompleteList from './CompleteList';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: [],
      complete: []
    };
    this.handleAdd = this.handleAdd.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleComplete = this.handleComplete.bind(this);
    this.handleCompleteRemove = this.handleCompleteRemove.bind(this);
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
  handleComplete(i) {
    this.state.complete.push(this.state.todo[i]);
    this.state.todo.splice(i, 1);
    this.setState({todo: this.state.todo});
    this.setState({complete: this.state.complete});
    document.querySelector('.check').checked = false
  }
  handleCompleteRemove(i) {
    this.state.complete.splice(i, 1);
    this.setState({complete: this.state.complete})
  }
  render() {
    return(
      <div className="siimple-jumbotron siimple-jumbotron--extra-large siimple-jumbotron--dark">
        <Header />
        <Form handleAdd={this.handleAdd} />
        <div className="siimple-rule"> </div>
        <h2>Todo</h2>
        <List todos={this.state.todo} handleRemove={this.handleRemove} handleComplete={this.handleComplete} />
        <div className="siimple-rule"> </div>
        <h2>完了</h2>
        <CompleteList complete={this.state.complete} handleCompleteRemove={this.handleCompleteRemove} />
      </div>
    )
  }
}
